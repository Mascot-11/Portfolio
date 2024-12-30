import { useState } from "react";

export default function Interface() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = {
    EDUCATION: [
      "Islington College (2021-Present)",
      "BSc Honours in Computing",
      "Trinity International SS/College (2020-2021)",
      "Meridian International (2009-2019)",
    ],
    EXPERIENCE: [
      "ING Tech",
      "Quality Assurance",
      "Internship (2024 June - 2024 August)",
      "Trainee (2024 August - Present)",
    ],
    SKILLS: [
      "Python",
      "Figma",
      "Adobe Illustrator",
      "Java",
      "QA Manual Testing",
      "SQL",
      "QA Automation",
      "Multitasking",
      "Self-Directed",
      "Analytical and Critical Thinking",
      "Attention to Detail",
      "Time Management",
    ],
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {/* Contact Info */}
      <div className="absolute bottom-4 left-4 text-white">
        <p>Shreeyush Dhungana</p>
        <p>+977-9813761895</p>
        <p>Shreeyushdhungana@gmail.com</p>
      </div>

      {/* Active Section Display */}
      {activeSection && (
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 p-4 text-white">
          <h2 className="text-xl mb-2">{activeSection}</h2>
          <ul>
            {/* TypeScript now knows activeSection is a key of sections */}
            {sections[activeSection as keyof typeof sections].map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Section Buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-4">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
}
