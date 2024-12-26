import { openDB, IDBPDatabase } from "idb";
import { TestResult } from "./types";

interface TestResultDB {
  testResults: {
    key: string; // categoryId
    value: TestResult;
  };
}

const STORE_NAME = "testResults";

let dbPromise: Promise<IDBPDatabase<TestResultDB>>;

const initDB = async () => {
  if (!dbPromise) {
    dbPromise = openDB<TestResultDB>("TestResultsDB", 1, {
      upgrade(db) {
        // Create a store named STORE_NAME with categoryId as the key
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: "categoryId" });
        }
      },
    });
  }
  return dbPromise;
};

export const saveTestResult = async (testResult: TestResult): Promise<void> => {
  const db = await ensureObjectStore();
  await db.put(STORE_NAME, testResult); // Adds or overwrites by categoryId
};

export const getAllTestResults = async (): Promise<TestResult[]> => {
  const db = await ensureObjectStore();
  return db.getAll(STORE_NAME); // Retrieves all test results
};

export const getTestResult = async (
  id: string
): Promise<TestResult | undefined> => {
  const db = await ensureObjectStore();
  return db.get(STORE_NAME, id);
};

export const ensureObjectStore = async () => {
  const db = await initDB();

  // Check if the object store exists
  if (!db.objectStoreNames.contains(STORE_NAME)) {
    // Close the database connection to upgrade it
    db.close();

    // Upgrade the database to add the missing store
    dbPromise = openDB<TestResultDB>("TestResultsDB", db.version + 1, {
      upgrade(upgradedDb) {
        if (!upgradedDb.objectStoreNames.contains(STORE_NAME)) {
          upgradedDb.createObjectStore(STORE_NAME, { keyPath: "categoryId" });
        }
      },
    });
    return dbPromise;
  }
  return db;
};
