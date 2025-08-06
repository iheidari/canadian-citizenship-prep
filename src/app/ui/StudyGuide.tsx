import React from "react";
import { Category } from "@/app/services/types";

interface StudyGuideProps {
  category: Category;
}

const studyContent: Record<
  string,
  { overview: string; keyPoints: string[]; tips: string[] }
> = {
  "applying-for-citizenship": {
    overview:
      "The application process for Canadian citizenship involves several steps and requirements that applicants must understand thoroughly.",
    keyPoints: [
      "You must be a permanent resident of Canada",
      "Must have lived in Canada for at least 1,095 days in the past 5 years",
      "Must file taxes if required under the Income Tax Act",
      "Must pass a citizenship test (ages 18-54)",
      "Must prove language skills in English or French",
      "Must not have been convicted of certain crimes",
    ],
    tips: [
      "Keep detailed records of your time in Canada",
      "Ensure all your documents are translated by certified translators",
      "Apply as soon as you meet the residency requirements",
      "Study the official guide 'Discover Canada' thoroughly",
    ],
  },
  "rights-and-responsibilities-of-citizenship": {
    overview:
      "Canadian citizenship comes with both fundamental rights protected by law and important responsibilities that citizens must fulfill.",
    keyPoints: [
      "Right to vote in federal, provincial, and municipal elections",
      "Right to run for elected office",
      "Right to enter and leave Canada freely",
      "Right to legal protection and due process",
      "Responsibility to vote in elections",
      "Responsibility to serve on a jury when called",
      "Responsibility to help others in the community",
      "Responsibility to protect Canada's heritage and environment",
    ],
    tips: [
      "Understand both Charter Rights and citizenship rights",
      "Know the difference between rights and responsibilities",
      "Remember that rights come with corresponding duties",
      "Study examples of how rights are protected in Canada",
    ],
  },
  "who-we-are": {
    overview:
      "Canada is a diverse nation built by Indigenous peoples, French and British settlers, and immigrants from around the world.",
    keyPoints: [
      "Indigenous peoples were the first inhabitants of Canada",
      "Canada has two official languages: English and French",
      "Immigration has shaped Canada's multicultural society",
      "Canada spans six time zones and has diverse geography",
      "Population is concentrated near the U.S. border",
      "Canada is known for its natural resources and landscapes",
    ],
    tips: [
      "Learn about the three groups of Indigenous peoples",
      "Understand Canada's multicultural heritage",
      "Know basic population and geographic facts",
      "Appreciate Canada's diversity and inclusion values",
    ],
  },
  "canadas-history": {
    overview:
      "Canada's history spans thousands of years, from Indigenous civilizations to Confederation and modern nationhood.",
    keyPoints: [
      "Indigenous peoples lived here for thousands of years before European contact",
      "French explorers and settlers established New France",
      "British conquest of New France in 1759",
      "Confederation of four provinces in 1867",
      "Gradual expansion to ten provinces and three territories",
      "Evolution from British colony to independent nation",
      "Important role in both World Wars",
      "Development of the Charter of Rights and Freedoms",
    ],
    tips: [
      "Focus on major dates: 1759, 1867, 1931, 1982",
      "Understand the role of key historical figures",
      "Know the sequence of provincial joining Confederation",
      "Study Canada's military history and peacekeeping role",
    ],
  },
  "modern-canada": {
    overview:
      "Modern Canada is a federal parliamentary democracy and constitutional monarchy with a strong economy and international presence.",
    keyPoints: [
      "Canada became fully sovereign in 1931",
      "Charter of Rights and Freedoms adopted in 1982",
      "Strong economy based on natural resources and services",
      "Active in international peacekeeping and NATO",
      "Commitment to multiculturalism and bilingualism",
      "Leader in human rights and environmental protection",
    ],
    tips: [
      "Understand Canada's role in international organizations",
      "Know key achievements in human rights",
      "Study Canada's economic development",
      "Learn about modern political developments",
    ],
  },
  "how-canadians-govern-themselves": {
    overview:
      "Canada has a parliamentary system of government with three levels: federal, provincial, and municipal.",
    keyPoints: [
      "Constitutional monarchy with the Crown as head of state",
      "Parliamentary democracy with elected representatives",
      "Three levels of government with different responsibilities",
      "Prime Minister leads the federal government",
      "Governor General represents the Crown in Canada",
      "Senate and House of Commons form Parliament",
      "Independent judiciary interprets laws",
    ],
    tips: [
      "Understand the role of each level of government",
      "Know the difference between head of state and head of government",
      "Study how laws are made in Parliament",
      "Learn about the Canadian justice system",
    ],
  },
  "federal-elections": {
    overview:
      "Federal elections in Canada determine who represents Canadians in the House of Commons and which party forms government.",
    keyPoints: [
      "Elections must be held at least every five years",
      "Citizens 18 and older can vote",
      "Members of Parliament represent electoral districts",
      "Party with most seats usually forms government",
      "Prime Minister is leader of governing party",
      "Secret ballot ensures voting privacy",
      "Elections Canada oversees federal elections",
    ],
    tips: [
      "Know the voting requirements and process",
      "Understand how governments are formed",
      "Study the role of political parties",
      "Learn about electoral districts and representation",
    ],
  },
  "the-justice-system": {
    overview:
      "Canada's justice system protects individual rights and freedoms while maintaining law and order in society.",
    keyPoints: [
      "Based on English common law and French civil law",
      "Presumption of innocence until proven guilty",
      "Right to legal representation",
      "Independent judges and courts",
      "Police forces at federal, provincial, and municipal levels",
      "Rehabilitation focus in corrections system",
    ],
    tips: [
      "Understand the principles of Canadian law",
      "Know your rights when dealing with police",
      "Study the court system structure",
      "Learn about legal protections for citizens",
    ],
  },
  "canadian-symbols": {
    overview:
      "Canadian symbols represent the nation's history, values, and identity, from the maple leaf to the beaver.",
    keyPoints: [
      "The maple leaf is Canada's most recognized symbol",
      "The beaver is an official symbol of Canada",
      "The Canadian flag was adopted in 1965",
      "The coat of arms represents Canadian sovereignty",
      "O Canada is the national anthem",
      "The RCMP and their Musical Ride are iconic symbols",
    ],
    tips: [
      "Know the history of major symbols",
      "Understand what each symbol represents",
      "Study the meaning of the coat of arms",
      "Learn the words to O Canada",
    ],
  },
  "canadas-economy": {
    overview:
      "Canada has a modern mixed economy based on natural resources, manufacturing, and services.",
    keyPoints: [
      "Rich in natural resources: oil, minerals, forests, water",
      "Strong service sector including finance and technology",
      "Important manufacturing industries",
      "Significant agricultural production",
      "Major trading relationships, especially with the US",
      "Skilled workforce and high standard of living",
    ],
    tips: [
      "Know Canada's major industries and resources",
      "Understand trade relationships",
      "Study regional economic differences",
      "Learn about Canada's role in the global economy",
    ],
  },
  "canadas-regions": {
    overview:
      "Canada is divided into distinct regions, each with unique geography, culture, and economic characteristics.",
    keyPoints: [
      "Atlantic Canada: Newfoundland and Labrador, Nova Scotia, New Brunswick, Prince Edward Island",
      "Central Canada: Ontario and Quebec",
      "Prairie Provinces: Manitoba, Saskatchewan, Alberta",
      "West Coast: British Columbia",
      "Northern Territories: Yukon, Northwest Territories, Nunavut",
      "Each region has distinct geography, economy, and culture",
    ],
    tips: [
      "Know the provinces and territories in each region",
      "Study regional capitals and major cities",
      "Understand regional economic activities",
      "Learn about regional cultural characteristics",
    ],
  },
};

const StudyGuide: React.FC<StudyGuideProps> = ({ category }) => {
  const content = studyContent[category.id];

  if (!content) return null;

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Study Guide: {category.title}
        </h2>

        <div className="mb-8 p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg border border-blue-200/30 dark:border-blue-800/30">
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="leading-relaxed">{content.overview}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50/50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200/30 dark:border-gray-700/30">
            <h3 className="text-xl font-semibold mb-4">
              Key Points to Remember
            </h3>
            <ul className="space-y-3">
              {content.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">
                    •
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50/50 dark:bg-green-900/10 p-6 rounded-lg border border-green-200/30 dark:border-green-800/30">
            <h3 className="text-xl font-semibold mb-4">Study Tips</h3>
            <ul className="space-y-3">
              {content.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2 mt-1">
                    ✓
                  </span>
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50/50 dark:bg-yellow-900/10 p-6 rounded-lg border border-yellow-200/30 dark:border-yellow-800/30">
          <h3 className="text-lg font-semibold mb-3">
            📚 Recommended Study Approach
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="font-medium mb-2">1. Read & Study</div>
              <p>
                Review the study guide content thoroughly before starting the
                practice test.
              </p>
            </div>
            <div className="text-center">
              <div className="font-medium mb-2">2. Practice</div>
              <p>
                Take the practice test to identify areas that need more
                attention.
              </p>
            </div>
            <div className="text-center">
              <div className="font-medium mb-2">3. Review</div>
              <p>Go back to study materials for questions you got wrong.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyGuide;
