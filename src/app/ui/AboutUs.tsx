import React from "react";

const AboutUs = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About Canadian Citizenship Test Preparation
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Why Choose Our Platform?
            </h3>
            <p className="leading-relaxed mb-4">
              Our comprehensive Canadian citizenship test preparation platform
              is designed to help you succeed in your journey to becoming a
              Canadian citizen. We offer carefully curated practice tests and
              mock exams based on the official Canadian citizenship test format.
            </p>
            <p className="leading-relaxed">
              With detailed explanations, performance tracking, and
              category-specific practice, our platform is designed to make your
              preparation journey easier and more effective.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              What You&apos;ll Learn
            </h3>
            <ul className="space-y-2 leading-relaxed">
              <li>
                • Canada&apos;s history from Indigenous peoples to modern times
              </li>
              <li>• Rights and responsibilities of Canadian citizenship</li>
              <li>• How the Canadian government works</li>
              <li>• Canada&apos;s geography, economy, and symbols</li>
              <li>• The justice system and federal elections</li>
              <li>• Regional characteristics across Canada</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50/50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200/30 dark:border-gray-700/30">
          <h3 className="text-xl font-semibold mb-4">
            Test Format & Requirements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-2">Test Details</h4>
              <p className="text-sm leading-relaxed">
                The citizenship test consists of 20 multiple-choice questions.
                You need to answer 15 questions correctly (75%) to pass.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Who Takes the Test</h4>
              <p className="text-sm leading-relaxed">
                Applicants aged 18-54 must take the citizenship test. The test
                is available in English or French.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Study Materials</h4>
              <p className="text-sm leading-relaxed">
                All questions are based on the official study guide
                &ldquo;Discover Canada: The Rights and Responsibilities of
                Citizenship.&ldquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
