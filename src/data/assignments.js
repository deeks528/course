export const assignments = [
  {
    id: 1,
    title: "Software Process Models",
    objective: "To understand and apply different software process models to real-world scenarios.",
    instructions: [
      "Choose two software process models from the following list: Waterfall Model, Incremental Model, Spiral Model, Unified Process, Agile Methodology (Scrum or XP)",
      "For each selected model: describe the key characteristics and phases of the model, identify the strengths and weaknesses of the model, provide a real-world example where this model would be appropriate, explain why the model is suitable for your chosen example",
      "Compare and contrast the two models you selected, highlighting: differences in approach to requirements gathering, differences in handling changes during development, differences in risk management, differences in stakeholder involvement",
      "Reflect on how you would choose between these models for a new software project."
    ],
    deliverables: [
      "A report of 1000-1500 words (excluding references)",
      "Include diagrams illustrating the process models",
      "Include at least 5 academic or industry references",
      "Submit as a PDF document"
    ],
    evaluationCriteria: [
      { criterion: "Understanding of software process models", percentage: 30 },
      { criterion: "Quality of analysis and comparison", percentage: 30 },
      { criterion: "Application to real-world scenarios", percentage: 20 },
      { criterion: "Organization, clarity, and presentation", percentage: 10 },
      { criterion: "Use of references and supporting evidence", percentage: 10 }
    ],
    dueDate: "Two weeks from the date of assignment",
    references: [
      "Pressman, R. S. (2014). Software Engineering: A Practitioner's Approach (8th ed.). McGraw-Hill.",
      "Sommerville, I. (2016). Software Engineering (10th ed.). Pearson.",
      "Additional resources from lecture materials"
    ]
  },
  {
    id: 2,
    title: "Requirements Engineering",
    objective: "To practice requirements elicitation, analysis, and documentation techniques for a software system.",
    instructions: [
      "For this assignment, you will work on requirements engineering for a Library Management System. The system should allow librarians to manage books, members, and borrowing/returning processes, and allow members to search for books and manage their accounts.",
      "Requirements Elicitation: Create a list of stakeholders for the system, develop 5-8 interview questions you would ask stakeholders, identify at least 3 other elicitation techniques you would use and explain why",
      "Requirements Analysis: Identify and categorize at least 15 functional requirements, identify at least 5 non-functional requirements (covering performance, security, usability, etc.), create a use case diagram showing the main interactions between actors and the system, develop detailed use case descriptions for 3 critical use cases",
      "Requirements Documentation: Create a Software Requirements Specification (SRS) document following IEEE 830 format, include a system context diagram, document any assumptions and constraints",
      "Requirements Validation: Describe 3 techniques you would use to validate these requirements, explain how you would handle conflicting requirements, discuss how you would manage requirements changes during the project"
    ],
    deliverables: [
      "Complete Software Requirements Specification document (following IEEE 830 format)",
      "Use case diagram and detailed use case descriptions",
      "Requirements validation plan",
      "Submit as a single PDF document"
    ],
    evaluationCriteria: [
      { criterion: "Completeness and clarity of requirements", percentage: 30 },
      { criterion: "Quality of use cases and diagrams", percentage: 25 },
      { criterion: "Appropriateness of elicitation and validation techniques", percentage: 20 },
      { criterion: "Organization and structure of SRS document", percentage: 15 },
      { criterion: "Consideration of potential issues and changes", percentage: 10 }
    ],
    dueDate: "Two weeks from the date of assignment",
    references: [
      "IEEE 830-1998 Standard for Software Requirements Specifications",
      "Pressman, R. S. (2014). Software Engineering: A Practitioner's Approach (8th ed.). McGraw-Hill.",
      "Wiegers, K., & Beatty, J. (2013). Software Requirements (3rd ed.). Microsoft Press."
    ]
  },
  {
    id: 3,
    title: "DevOps Implementation",
    objective: "To design and implement a CI/CD pipeline for a web application using DevOps tools and practices.",
    instructions: [
      "In this assignment, you will implement a continuous integration and continuous deployment (CI/CD) pipeline for a simple web application. You will use various DevOps tools to automate the build, test, and deployment processes.",
      "Setup and Configuration: Fork the provided sample web application repository (link will be provided), set up a Git repository for version control, configure a CI/CD tool (Jenkins, GitHub Actions, GitLab CI, or similar), set up containerization using Docker",
      "Pipeline Implementation: Create a pipeline that includes the following stages: code checkout from repository, build the application, run unit tests, run code quality analysis, build and push Docker image, deploy to a test environment, run integration tests, deploy to a production environment (or production-like environment)",
      "Quality and Testing: Implement unit tests for the application, set up code quality checks (using tools like SonarQube, ESLint, etc.), implement automated security scanning, configure monitoring for the deployed application",
      "Documentation: Document your CI/CD pipeline architecture, create a README file explaining how to set up and use your pipeline, document any challenges faced and how you resolved them, explain how your implementation follows DevOps best practices"
    ],
    deliverables: [
      "GitHub/GitLab repository link containing: application code with necessary modifications, CI/CD configuration files, Dockerfiles and container configuration, test scripts and configuration, documentation",
      "A report (1000-1500 words) explaining: your pipeline architecture and design decisions, tools selected and justification, implementation challenges and solutions, screenshots of working pipeline stages, recommendations for further improvements"
    ],
    evaluationCriteria: [
      { criterion: "Functionality of CI/CD pipeline", percentage: 30 },
      { criterion: "Quality of implementation and code", percentage: 25 },
      { criterion: "Completeness of testing and quality checks", percentage: 20 },
      { criterion: "Documentation quality", percentage: 15 },
      { criterion: "Adherence to DevOps best practices", percentage: 10 }
    ],
    dueDate: "Three weeks from the date of assignment",
    references: [
      "Gaikwad, D., & Thakkar, V. (2019). DevOps Tools from Practitioner's Viewpoint. Wiley.",
      "Humble, J., & Farley, D. (2010). Continuous Delivery. Addison-Wesley.",
      "Kim, G., Debois, P., Willis, J., & Humble, J. (2016). The DevOps Handbook. IT Revolution Press."
    ]
  }
];

