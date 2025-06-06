export const assessments = {
  midterm: {
    title: "Software Engineering and DevOps - Midterm Examination",
    timeAllowed: "2 hours",
    totalMarks: 100,
    instructions: [
      "Answer all questions",
      "Write clearly and concisely",
      "Support your answers with examples where appropriate",
      "Cite any references used"
    ],
    sections: [
      {
        title: "Section A: Multiple Choice Questions",
        marks: 20,
        description: "Answer all questions. Each question carries 2 marks.",
        questions: [
          "Which of the following is NOT a characteristic of software?",
          "The Unified Process is:",
          "Which of the following is a non-functional requirement?",
          "In the context of DevOps, what does \"shift left\" refer to?",
          "Which of the following is NOT one of the 7 C's of DevOps Life Cycle?",
          "What is the primary purpose of a Software Requirements Specification (SRS) document?",
          "Which testing strategy focuses on testing the complete integrated system?",
          "Which of the following is NOT a principle of Extreme Programming (XP)?",
          "In the context of DevOps tools, what is the primary purpose of Jenkins?",
          "Which of the following best describes the RMMM Plan in software engineering?"
        ]
      },
      {
        title: "Section B: Short Answer Questions",
        marks: 30,
        description: "Answer all questions. Each question carries 6 marks.",
        questions: [
          "Explain the differences between functional and non-functional requirements, and provide two examples of each.",
          "Describe the key characteristics of the Agile Scrum framework and explain how it differs from traditional software development approaches.",
          "Explain the concept of \"Infrastructure as Code\" and discuss its benefits in a DevOps environment.",
          "Describe the purpose and components of a software testing strategy. How does it differ for conventional and object-oriented software?",
          "Explain the concept of Continuous Integration in DevOps and discuss how it improves software quality."
        ]
      },
      {
        title: "Section C: Case Study",
        marks: 20,
        description: "A healthcare organization wants to develop a new patient management system to replace their legacy system. The system needs to handle patient records, appointment scheduling, billing, and integration with laboratory systems. The organization has strict security and privacy requirements due to healthcare regulations. They have a team of 15 developers with varying levels of experience.",
        questions: [
          "Which software process model would you recommend for this project? Justify your choice.",
          "Outline the key requirements gathering techniques you would use for this project and explain why they are appropriate.",
          "Describe how you would implement DevOps practices in this project to ensure quality and security.",
          "Discuss the potential risks in this project and how you would address them in your RMMM plan."
        ]
      },
      {
        title: "Section D: Essay Questions",
        marks: 30,
        description: "Answer any TWO questions. Each question carries 15 marks.",
        questions: [
          "Compare and contrast the Waterfall model and Agile methodologies in terms of their approach to software development. Discuss scenarios where each would be most appropriate, with examples.",
          "Discuss the role of DevOps in modern software development. Explain how DevOps practices and tools help overcome traditional challenges in software delivery and operations.",
          "Explain the importance of software testing in the development lifecycle. Discuss different testing strategies and how they contribute to software quality.",
          "Describe the key components of Application Lifecycle Management using JIRA. Explain how JIRA supports different phases of software development and how it integrates with other tools in the DevOps toolchain."
        ]
      }
    ]
  },
  final: {
    title: "Software Engineering and DevOps - Final Examination",
    timeAllowed: "3 hours",
    totalMarks: 100,
    instructions: [
      "Answer all questions",
      "Write clearly and concisely",
      "Support your answers with examples where appropriate",
      "Cite any references used"
    ],
    sections: [
      {
        title: "Section A: Multiple Choice Questions",
        marks: 20,
        description: "Answer all questions. Each question carries 2 marks.",
        questions: [
          "Which of the following is NOT a principle of the DevOps approach?",
          "In the context of DevOps tools, what is the primary purpose of Puppet?",
          "Which of the following is NOT a feature of AWS in DevOps?",
          "What is the main purpose of Liquibase in DevOps?",
          "Which of the following is NOT one of the 7 C's of DevOps Life Cycle?",
          "What is the primary purpose of Atlassian's Crucible?",
          "Which of the following best describes Microsoft TFS (now Azure DevOps)?",
          "What is the main purpose of a DevOps Playbook?",
          "Which of the following is NOT a common metric used to measure DevOps success?",
          "Which cloud service model provides the most control over the underlying infrastructure?"
        ]
      },
      {
        title: "Section B: Short Answer Questions",
        marks: 30,
        description: "Answer all questions. Each question carries 6 marks.",
        questions: [
          "Explain the concept of \"Infrastructure as Code\" and discuss how tools like Chef and Puppet support this approach.",
          "Describe the key features of Jenkins and explain how it facilitates Continuous Integration and Continuous Delivery.",
          "Compare and contrast Atlassian's Bitbucket and Microsoft's TFS (Azure DevOps) in terms of their capabilities for source code management and DevOps.",
          "Explain the concept of DevOps governance and why it is important for organizations implementing DevOps at scale.",
          "Describe the role of containerization in DevOps and explain how it improves the software delivery process."
        ]
      },
      {
        title: "Section C: Case Study",
        marks: 20,
        description: "A financial technology company is developing a new mobile banking application that needs to handle sensitive customer data, comply with financial regulations, and provide high availability. The company currently uses a traditional development approach with separate development and operations teams. They want to adopt DevOps practices to improve their delivery process and reduce time to market.",
        questions: [
          "Outline a DevOps implementation strategy for this company, including recommended tools and practices.",
          "Describe how you would implement security in the DevOps pipeline (DevSecOps) for this financial application.",
          "Explain how you would use AWS or similar cloud services to support the DevOps implementation for this application.",
          "Discuss the potential challenges in this DevOps transformation and how you would address them."
        ]
      },
      {
        title: "Section D: Essay Questions",
        marks: 30,
        description: "Answer any TWO questions. Each question carries 15 marks.",
        questions: [
          "Discuss the evolution of DevOps and its impact on modern software development. Explain how DevOps practices address traditional challenges in software delivery and operations, with examples.",
          "Compare and contrast different orchestration tools (Jenkins, AWS CodePipeline, Azure DevOps) in terms of their features, capabilities, and use cases. Provide examples of scenarios where each would be most appropriate.",
          "Explain the concept of DevOps in cloud environments. Discuss how cloud services support DevOps practices and the challenges of implementing DevOps in cloud-based systems.",
          "Analyze the emerging trends in DevOps and discuss how they are likely to shape the future of software development and operations. Include both strategy trends and technology trends in your discussion."
        ]
      }
    ]
  },
  previousYear: {
    title: "Previous Year Questions",
    description: "A collection of questions from previous year examinations to help students prepare for their assessments.",
    examPapers: [
      {
        title: "B.Tech. II Year II Sem. Regular Examinations June - 2024",
        type: "Regular Examination",
        marks: 60,
        duration: "3 hours"
      },
      {
        title: "B.Tech. II Year II Sem. Exam Model Paper-I",
        type: "Model Paper",
        marks: 40,
        duration: "3 hours"
      },
      {
        title: "B.Tech. II Year II Sem. Regular Examinations Model Paper-II",
        type: "Model Paper",
        marks: 60,
        duration: "3 hours"
      },
      {
        title: "B.Tech. II Year II Sem. I Mid Examinations, February, 2025",
        type: "Mid Examination",
        marks: 40,
        duration: "2 hours"
      },
      {
        title: "B.Tech. II Year II Sem. II Mid Examinations, April, 2025",
        type: "Mid Examination",
        marks: 40,
        duration: "2 hours"
      }
    ]
  }
};

