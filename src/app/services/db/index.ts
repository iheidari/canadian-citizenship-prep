import { openDB, IDBPDatabase } from "idb";
import { TestResult } from "./types";

interface TestResultDB {
  testResults: {
    key: string; // categoryId
    value: TestResult;
  };
}

let dbPromise: Promise<IDBPDatabase<TestResultDB>>;

const initDB = async () => {
  if (dbPromise === undefined) {
    dbPromise = openDB<TestResultDB>("TestResultsDB", 1, {
      upgrade(db) {
        // Create a store named "testResults" with categoryId as the key
        if (!db.objectStoreNames.contains("testResults")) {
          db.createObjectStore("testResults", { keyPath: "categoryId" });
        }
      },
    });
  }
  return dbPromise;
};

export const saveTestResult = async (testResult: TestResult): Promise<void> => {
  initDB();
  const db = await dbPromise;
  await db.put("testResults", testResult); // Adds or overwrites by categoryId
};

export const getAllTestResults = async (): Promise<TestResult[]> => {
  initDB();
  const db = await dbPromise;
  return db.getAll("testResults"); // Retrieves all test results
};
