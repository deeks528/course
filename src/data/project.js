export const project = {
  title: "Software Engineering and DevOps - Term Project",
  overview: "In this term project, you will apply software engineering principles and DevOps practices to develop a real-world application. You will go through the entire software development lifecycle, from requirements gathering to deployment and maintenance, implementing DevOps practices throughout.",
  objectives: [
    "Apply software engineering methodologies in a practical context",
    "Implement DevOps practices and tools in a real project",
    "Develop teamwork and project management skills",
    "Create a functional application with proper documentation",
    "Demonstrate understanding of the complete software development lifecycle"
  ],
  requirements: [
    {
      title: "Team Formation",
      details: [
        "Form teams of 3-4 students",
        "Assign roles and responsibilities (e.g., Project Manager, Developer, DevOps Engineer, QA Engineer)",
        "Create a team charter outlining communication methods, meeting schedules, and conflict resolution strategies"
      ]
    },
    {
      title: "Project Selection",
      details: [
        "Choose ONE of the following project options:",
        {
          option: "Option A: E-Commerce Platform",
          description: [
            "Develop a web-based e-commerce platform with product catalog, shopping cart, user accounts, and order processing",
            "Implement payment gateway integration (can use sandbox/test mode)",
            "Include reporting and analytics features"
          ]
        },
        {
          option: "Option B: Task Management System",
          description: [
            "Develop a task management system with project organization, task assignment, and progress tracking",
            "Implement user roles and permissions",
            "Include notification system and reporting features"
          ]
        },
        {
          option: "Option C: Student Information System",
          description: [
            "Develop a system to manage student records, course registrations, and grade tracking",
            "Implement user roles (admin, faculty, student)",
            "Include reporting and analytics features"
          ]
        },
        {
          option: "Option D: Custom Project (with instructor approval)",
          description: [
            "Propose your own project of similar complexity",
            "Must include multiple user roles, database integration, and reporting features",
            "Requires instructor approval before proceeding"
          ]
        }
      ]
    }
  ],
  phases: [
    {
      title: "Phase 1: Planning and Requirements (Week 1-2)",
      deliverables: [
        "Project proposal (1-2 pages)",
        "Software Requirements Specification (SRS) document",
        "Use case diagrams and descriptions",
        "Project plan with timeline and milestones"
      ]
    },
    {
      title: "Phase 2: Design and Architecture (Week 3-4)",
      deliverables: [
        "System architecture document",
        "Database design (ERD)",
        "UI/UX mockups",
        "DevOps pipeline design",
        "Test plan"
      ]
    },
    {
      title: "Phase 3: Implementation and Testing (Week 5-8)",
      deliverables: [
        "Working code repository with proper version control",
        "Implemented CI/CD pipeline",
        "Unit and integration tests",
        "Code quality analysis reports",
        "Weekly progress reports"
      ]
    },
    {
      title: "Phase 4: Deployment and Documentation (Week 9-10)",
      deliverables: [
        "Deployed application (cloud or local environment)",
        "User manual",
        "Technical documentation",
        "Monitoring and logging setup",
        "Final project report"
      ]
    }
  ],
  technicalRequirements: [
    {
      category: "Software Engineering Requirements",
      requirements: [
        "Follow an appropriate software development methodology (document your choice and rationale)",
        "Create comprehensive requirements documentation",
        "Implement proper error handling and logging",
        "Follow coding standards and best practices",
        "Implement appropriate testing at all levels"
      ]
    },
    {
      category: "DevOps Requirements",
      requirements: [
        "Use Git for version control with branching strategy",
        "Implement a CI/CD pipeline using appropriate tools (Jenkins, GitHub Actions, etc.)",
        "Containerize the application using Docker",
        "Implement automated testing in the pipeline",
        "Set up monitoring and logging",
        "Implement infrastructure as code where applicable"
      ]
    },
    {
      category: "Technology Stack",
      description: "You may choose your technology stack based on team expertise and project requirements. Some suggested options:",
      options: [
        {
          category: "Frontend",
          technologies: ["React, Angular, or Vue.js", "Bootstrap or Material UI", "HTML5/CSS3/JavaScript"]
        },
        {
          category: "Backend",
          technologies: ["Node.js/Express, Python/Django/Flask, or Java/Spring", "RESTful API design"]
        },
        {
          category: "Database",
          technologies: ["MySQL, PostgreSQL, MongoDB, or similar"]
        },
        {
          category: "DevOps Tools",
          technologies: [
            "Git (GitHub, GitLab, or Bitbucket)",
            "Jenkins, GitHub Actions, GitLab CI, or similar for CI/CD",
            "Docker for containerization",
            "Monitoring tools (e.g., Prometheus, Grafana)"
          ]
        }
      ]
    }
  ],
  evaluationCriteria: [
    { criterion: "Project planning and requirements", percentage: 15 },
    { criterion: "System design and architecture", percentage: 15 },
    { criterion: "Implementation quality and functionality", percentage: 25 },
    { criterion: "DevOps implementation", percentage: 20 },
    { criterion: "Documentation quality", percentage: 10 },
    { criterion: "Final presentation and demo", percentage: 10 },
    { criterion: "Teamwork and project management", percentage: 5 }
  ],
  submissionGuidelines: [
    "All deliverables must be submitted through the course learning management system",
    "Code must be maintained in a Git repository with access provided to instructors",
    "Weekly progress reports must be submitted by the team leader",
    "Final presentation will be scheduled during the last week of the semester"
  ],
  importantDates: [
    { event: "Team formation and project selection", deadline: "End of Week 1" },
    { event: "Project proposal submission", deadline: "End of Week 2" },
    { event: "Phase 1 deliverables", deadline: "End of Week 2" },
    { event: "Phase 2 deliverables", deadline: "End of Week 4" },
    { event: "Phase 3 progress reports", deadline: "Weekly during Weeks 5-8" },
    { event: "Phase 4 deliverables", deadline: "End of Week 10" },
    { event: "Final presentation and demo", deadline: "Last week of semester" }
  ],
  resources: [
    "Lecture materials and textbooks",
    "Sample project templates (available on course website)",
    "Office hours for project guidance",
    "Online resources and documentation for selected technologies"
  ],
  academicIntegrity: [
    "All work must be original or properly cited",
    "Use of AI tools must be disclosed and explained",
    "Code sharing between teams is not permitted",
    "Each team member's contributions must be clearly documented"
  ]
};

