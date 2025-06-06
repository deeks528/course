export const lectures = [
  {
    id: "unit1_lecture1",
    unit: 1,
    title: "Introduction to Software Engineering",
    description: "This lecture introduces the fundamental concepts of software engineering, including the nature of software, software application domains, and the changing nature of software.",
    topics: [
      "Defining Software",
      "Software Application Domains",
      "Legacy Software",
      "The Changing Nature of Software",
      "Software Engineering: Defining the Discipline"
    ],
    keyPoints: [
      "Software is a logical rather than a physical system element",
      "Software is developed or engineered, not manufactured in the classical sense",
      "Software doesn't 'wear out' but it does deteriorate",
      "Most software is custom-built rather than component-based"
    ]
  },
  {
    id: "unit1_lecture2",
    unit: 1,
    title: "The Software Process and Process Models",
    description: "This lecture covers the software process and various process models used in software development.",
    topics: [
      "The Software Process",
      "Software Engineering Practice",
      "Process Models: Prescriptive Process Models",
      "The Unified Process",
      "Agile Methodology",
      "XP: Extreme Programming",
      "Agile Scrum Framework"
    ],
    keyPoints: [
      "A software process is a framework for the activities, actions, and tasks that are required to build high-quality software",
      "Process models define a distinct set of activities, actions, tasks, milestones, and work products",
      "Prescriptive process models advocate an orderly approach to software engineering",
      "Agile development emphasizes flexibility, adaptability, and collaboration"
    ]
  },
  {
    id: "unit2_lecture1",
    unit: 2,
    title: "Understanding Software Requirements",
    description: "This lecture focuses on understanding and classifying software requirements.",
    topics: [
      "Functional and non-functional requirements",
      "User requirements",
      "System requirements",
      "Interface specification",
      "The software requirements document"
    ],
    keyPoints: [
      "Functional requirements describe what the system should do",
      "Non-functional requirements describe system properties and constraints",
      "User requirements are statements in natural language plus diagrams",
      "System requirements are more detailed documents",
      "Interface specifications define how the system interacts with its environment"
    ]
  },
  {
    id: "unit2_lecture2",
    unit: 2,
    title: "Requirements Engineering Process",
    description: "This lecture covers the requirements engineering process and its various activities.",
    topics: [
      "Requirements engineering process",
      "Feasibility studies",
      "Requirements elicitation and analysis",
      "Requirements validation",
      "Requirements management"
    ],
    keyPoints: [
      "Requirements engineering is the process of establishing the services that the customer requires",
      "Feasibility studies determine whether the proposed system is worthwhile",
      "Requirements elicitation and analysis involve working with stakeholders to discover requirements",
      "Requirements validation ensures that requirements actually define the system that the customer wants",
      "Requirements management is the process of managing changing requirements"
    ]
  },
  {
    id: "unit3_lecture1",
    unit: 3,
    title: "Software Quality and Testing Strategies",
    description: "This lecture focuses on software quality metrics and testing strategies.",
    topics: [
      "Metrics for Software Quality",
      "Software testing strategies",
      "A Strategic Approach to Software Testing",
      "Strategic Issues",
      "Test Strategies for Conventional Software",
      "Test Strategies for Object-Oriented Software",
      "Context, Validation Testing, System Testing",
      "The Art of Debugging",
      "RMMM Plan"
    ],
    keyPoints: [
      "Software quality metrics provide a quantitative way to assess software quality",
      "Testing strategies provide a roadmap for the software team",
      "Different testing strategies are needed for conventional and object-oriented software",
      "Validation testing ensures that the software meets all functional and performance requirements",
      "Debugging is the process of finding and fixing errors"
    ]
  },
  {
    id: "unit3_lecture2",
    unit: 3,
    title: "Introduction to DevOps",
    description: "This lecture introduces DevOps principles, practices, and implementation.",
    topics: [
      "Introduction to DevOps",
      "DevOps Principles and Practices",
      "7 C's of DevOps Life Cycle for Business Agility",
      "DevOps Implementation",
      "Must Do Things for DevOps"
    ],
    keyPoints: [
      "DevOps is a set of practices that combines software development and IT operations",
      "DevOps aims to shorten the systems development life cycle while delivering features, fixes, and updates frequently",
      "The 7 C's of DevOps include Continuous Planning, Continuous Integration, Continuous Testing, etc.",
      "Implementing DevOps requires cultural, process, and tooling changes",
      "DevOps implementation must focus on people, process, and technology"
    ]
  },
  {
    id: "unit4_lecture1",
    unit: 4,
    title: "Atlassian Tools and Phabricator",
    description: "This lecture covers Atlassian tools and Phabricator for software development and collaboration.",
    topics: [
      "Atlassian Tools",
      "Phabricator",
      "Key Features and Benefits",
      "Integration Capabilities",
      "Best Practices"
    ],
    keyPoints: [
      "Atlassian provides a suite of tools for software development and collaboration",
      "Jira is used for issue tracking and project management",
      "Confluence is used for documentation and knowledge sharing",
      "Bitbucket is used for source code management",
      "Phabricator is an open-source software development platform"
    ]
  },
  {
    id: "unit4_lecture2",
    unit: 4,
    title: "Orchestration and Application Life Cycle Management",
    description: "This lecture focuses on orchestration tools like Jenkins and application lifecycle management with JIRA.",
    topics: [
      "Orchestration: Jenkins-Features",
      "Example of Reference Architecture",
      "Microsoft TFS-Features",
      "Architecture",
      "Application Life Cycle Management: JIRA",
      "Source Code Management & Quality: Bit bucket, Crucible, Architecture"
    ],
    keyPoints: [
      "Jenkins is an open-source automation server that helps automate parts of the software development process",
      "Reference architectures provide templates for implementing CI/CD pipelines",
      "Microsoft TFS (now Azure DevOps) provides a suite of development tools",
      "JIRA supports the entire application lifecycle from planning to release",
      "Bitbucket and Crucible provide source code management and code review capabilities"
    ]
  },
  {
    id: "unit5_lecture1",
    unit: 5,
    title: "Deployment and Infrastructure Management",
    description: "This lecture covers deployment and infrastructure management tools like Liquibase, Chef, and Puppet.",
    topics: [
      "Deployment and Infrastructure Management",
      "Liquibase",
      "Chef",
      "Puppet",
      "DevOps and Cloud Adoption",
      "AWS"
    ],
    keyPoints: [
      "Liquibase is an open-source database schema change management solution",
      "Chef is a configuration management tool that treats infrastructure as code",
      "Puppet is a software configuration management tool",
      "Cloud adoption enables DevOps practices",
      "AWS provides a wide range of services for implementing DevOps"
    ]
  },
  {
    id: "unit5_lecture2",
    unit: 5,
    title: "DevOps Governance, Controls, and Emerging Trends",
    description: "This lecture focuses on DevOps governance, controls, playbooks, and emerging trends.",
    topics: [
      "DevOps Governance and Controls",
      "Adopting DevOps",
      "What is a DevOps Playbook?",
      "Developing a Playbook",
      "Implementing DevOps Playbook",
      "DevOps Best Practices",
      "DevOps Emerging Trends: Strategy Trends, Technology Trends"
    ],
    keyPoints: [
      "DevOps governance ensures that DevOps implementations align with business objectives",
      "A DevOps playbook provides a structured approach to DevOps implementation",
      "DevOps best practices include continuous integration, continuous delivery, and infrastructure as code",
      "Emerging trends in DevOps include AIOps, GitOps, and DevSecOps",
      "Strategy trends focus on organizational and process changes, while technology trends focus on tools and techniques"
    ]
  }
];

