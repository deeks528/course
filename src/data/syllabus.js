export const syllabus = {
  courseTitle: "Software Engineering and DevOps",
  courseCode: "SE301",
  credits: 4,
  semester: "Fall 2025",
  prerequisites: ["Programming Fundamentals", "Data Structures and Algorithms"],
  
  description: "This course provides a comprehensive introduction to software engineering principles and DevOps practices. Students will learn about software development methodologies, requirements engineering, software testing strategies, and modern DevOps tools and techniques. The course emphasizes practical application of concepts through hands-on projects and assignments.",
  
  objectives: [
    "Understand and apply software engineering principles and methodologies",
    "Analyze and document software requirements effectively",
    "Design and implement appropriate testing strategies for software systems",
    "Implement DevOps practices using industry-standard tools",
    "Apply continuous integration and continuous deployment techniques",
    "Understand cloud-based deployment and infrastructure management",
    "Work effectively in teams to develop and deploy software applications"
  ],
  
  textbooks: [
    {
      title: "Software Engineering: A Practitioner's Approach",
      author: "Roger S. Pressman",
      edition: "8th edition",
      publisher: "McGraw-Hill",
      year: 2014
    },
    {
      title: "DevOps Tools from Practitioner's Viewpoint",
      author: "Deepak Gaikwad and Viral Thakkar",
      publisher: "Wiley",
      year: 2019
    }
  ],
  
  references: [
    {
      title: "Software Engineering",
      author: "Ian Sommerville",
      edition: "10th edition",
      publisher: "Pearson",
      year: 2016
    },
    {
      title: "The DevOps Handbook",
      author: "Gene Kim, Patrick Debois, John Willis, and Jez Humble",
      publisher: "IT Revolution Press",
      year: 2016
    },
    {
      title: "Continuous Delivery",
      author: "Jez Humble and David Farley",
      publisher: "Addison-Wesley",
      year: 2010
    },
    {
      title: "Accelerate: The Science of Lean Software and DevOps",
      author: "Nicole Forsgren, Jez Humble, and Gene Kim",
      publisher: "IT Revolution Press",
      year: 2018
    }
  ],
  
  units: [
    {
      title: "The Nature of Software, Software Engineering, The Software Process",
      weeks: "1-3",
      topics: [
        "Defining Software, Software Application Domains, Legacy Software, The Changing Nature of Software",
        "Software Engineering: Defining the Discipline, The Software Process, Software Engineering Practice",
        "Process Models: Prescriptive Process Models, The Unified Process",
        "Agile Methodology, XP: Extreme Programming, Agile Scrum Framework"
      ]
    },
    {
      title: "Software Requirements",
      weeks: "4-5",
      topics: [
        "Functional and non-functional requirements, user requirements, system requirements",
        "Interface specification, the software requirements document",
        "Requirements engineering process: Feasibility studies, requirements elicitation and analysis",
        "Requirements validation, requirements management"
      ]
    },
    {
      title: "Quality, Testing, DevOps",
      weeks: "6-8",
      topics: [
        "Metrics for Software Quality",
        "Software testing strategies: A Strategic Approach to Software Testing, Strategic Issues",
        "Test Strategies for Conventional Software, Test Strategies for Object-Oriented Software",
        "Context, Validation Testing, System Testing, The Art of Debugging",
        "RMMM Plan",
        "Introduction to DevOps: DevOps Principles and Practices",
        "7 C's of DevOps Life Cycle for Business Agility",
        "DevOps Implementation, Must Do Things for DevOps"
      ]
    },
    {
      title: "Tool Suits",
      weeks: "9-10",
      topics: [
        "Atlassian Tools, Phabricator",
        "Orchestration: Jenkins-Features, Example of Reference Architecture",
        "Microsoft TFS-Features, Architecture",
        "Application Life Cycle Management: JIRA",
        "Source Code Management & Quality: Bit bucket, Crucible, Architecture"
      ]
    },
    {
      title: "DevOps with Cloud",
      weeks: "11-12",
      topics: [
        "Deployment and Infrastructure Management: Liquibase, Chef, Puppet",
        "DevOps and Cloud Adoption, AWS",
        "DevOps Governance and Controls: Adopting DevOps",
        "What is a DevOps Playbook? Developing a Playbook, Implementing DevOps Playbook",
        "DevOps Best Practices",
        "DevOps Emerging Trends: Strategy Trends, Technology Trends"
      ]
    }
  ],
  
  assessment: [
    {
      type: "Assignments",
      count: 3,
      percentage: 30,
      details: "10% each"
    },
    {
      type: "Midterm Examination",
      percentage: 20
    },
    {
      type: "Term Project",
      percentage: 30
    },
    {
      type: "Final Examination",
      percentage: 20
    }
  ],
  
  assignments: [
    {
      title: "Software Process Models",
      due: "Week 3"
    },
    {
      title: "Requirements Engineering",
      due: "Week 5"
    },
    {
      title: "DevOps Implementation",
      due: "Week 10"
    }
  ],
  
  gradingScale: [
    { grade: "A", range: "90-100%" },
    { grade: "B", range: "80-89%" },
    { grade: "C", range: "70-79%" },
    { grade: "D", range: "60-69%" },
    { grade: "F", range: "Below 60%" }
  ],
  
  policies: {
    attendance: "Regular attendance is expected. Students missing more than 25% of classes may be denied credit for the course.",
    lateSubmissions: "Assignments submitted late will incur a 10% penalty per day, up to a maximum of 3 days. After 3 days, submissions will not be accepted without prior arrangement.",
    academicIntegrity: "Plagiarism and cheating will not be tolerated. Any instance of academic dishonesty will result in a failing grade for the assignment or exam, and possibly for the entire course. All work must be original or properly cited.",
    communication: "All course announcements will be made through the course management system. Students are responsible for checking their email and the course site regularly."
  }
};

