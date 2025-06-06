export const lectures_part1 = [
  {
    id: "unit1_lecture1",
    unit: 1,
    part: 1,
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
    ],
    content: {
      definingSoftware: {
        definition: "Software is a collection of computer programs, procedures, rules, and associated documentation and data. It is the intangible component of a computer system that enables the hardware to perform specific tasks.",
        types: [
          "System Software: Operating systems, device drivers, utilities, etc.",
          "Application Software: Word processors, web browsers, games, etc.",
          "Programming Software: Compilers, interpreters, debuggers, etc.",
          "Embedded Software: Software embedded in hardware devices like washing machines, cars, etc."
        ],
        characteristics: [
          "Software is developed or engineered, not manufactured in the traditional sense",
          "Software doesn't 'wear out' but it does deteriorate due to changes",
          "Most software is custom-built rather than assembled from existing components"
        ]
      },
      applicationDomains: {
        systemSoftware: [
          "Operating systems (Windows, Linux, macOS)",
          "Networking software",
          "Database management systems",
          "Utility programs"
        ],
        applicationSoftware: [
          "Business applications (ERP, CRM)",
          "Engineering/scientific applications",
          "Embedded applications",
          "Personal computer applications",
          "Web applications",
          "Artificial intelligence applications",
          "Mobile applications"
        ],
        engineeringScientific: [
          "Computer-aided design (CAD)",
          "System simulation",
          "Interactive engineering calculations",
          "Automated manufacturing"
        ],
        embeddedSoftware: {
          description: "Software used to control products and systems for consumer and industrial markets",
          characteristics: [
            "Limited functions",
            "High reliability requirements"
          ]
        },
        productLineSoftware: {
          description: "Software designed to provide a specific capability for use by many different customers",
          examples: [
            "Word processing",
            "Spreadsheets",
            "Graphics",
            "Multimedia",
            "Entertainment"
          ]
        },
        webApplications: "Network-centric applications that span a range of functionality, from simple informational websites to complex e-commerce applications",
        aiSoftware: {
          description: "Uses non-numerical algorithms to solve complex problems",
          examples: [
            "Expert systems",
            "Pattern recognition",
            "Neural networks"
          ]
        }
      },
      legacySoftware: {
        characteristics: [
          "Age: Typically developed many years or decades ago",
          "Technology: Built using outdated programming languages, tools, or methodologies",
          "Documentation: Often poorly documented or documentation is lost",
          "Maintenance: Difficult and expensive to maintain",
          "Integration: Challenging to integrate with modern systems",
          "Knowledge: Limited expertise available as original developers may have retired or moved on",
          "Business Criticality: Often performs critical business functions"
        ],
        approaches: [
          "Maintenance: Continue maintaining the system as is",
          "Modernization: Update parts of the system while preserving functionality",
          "Migration: Move to a new platform while preserving functionality",
          "Replacement: Develop or purchase a new system to replace the legacy system",
          "Retirement: Decommission the system if it's no longer needed"
        ]
      },
      changingNature: {
        factors: {
          technologicalAdvancements: [
            "New hardware capabilities",
            "New programming languages and paradigms",
            "New development tools and environments",
            "Cloud computing and distributed systems"
          ],
          businessRequirements: [
            "Changing market demands",
            "New business models",
            "Globalization",
            "Regulatory compliance"
          ],
          userExpectations: [
            "Improved user interfaces",
            "Mobile and web accessibility",
            "Performance and reliability",
            "Security and privacy"
          ],
          developmentApproaches: [
            "Shift from waterfall to agile methodologies",
            "DevOps and continuous integration/continuous deployment",
            "Microservices architecture",
            "Open-source collaboration"
          ]
        },
        currentTrends: [
          "Cloud-Native Development: Building applications specifically for cloud environments",
          "Containerization: Using Docker, Kubernetes for deployment and scaling",
          "Serverless Computing: Building applications without managing server infrastructure",
          "AI and Machine Learning Integration: Embedding intelligence into applications",
          "Low-Code/No-Code Platforms: Enabling development with minimal coding",
          "DevSecOps: Integrating security into the DevOps pipeline",
          "Edge Computing: Processing data closer to where it's generated"
        ]
      },
      softwareEngineering: {
        definition: "Software engineering is the application of engineering principles to the design, development, maintenance, testing, and evaluation of software and systems.",
        keyAspects: [
          "Systematic Approach: Applying systematic, disciplined, and quantifiable methods to software development",
          "Engineering Principles: Using established engineering principles for problem-solving",
          "Quality Focus: Emphasis on quality, reliability, and maintainability",
          "Process Orientation: Defined processes for development and maintenance",
          "Team Collaboration: Coordinated effort among team members",
          "Tool Support: Use of appropriate tools and technologies"
        ],
        ieeeDefinition: "The application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software; that is, the application of engineering to software.",
        comparison: {
          programming: {
            scope: "Focused on coding",
            scale: "Individual or small team effort",
            focus: "Implementation details",
            timeframe: "Short-term",
            skills: "Technical coding skills"
          },
          softwareEngineering: {
            scope: "Covers entire software development lifecycle",
            scale: "Often involves large teams and complex systems",
            focus: "System design, quality, process",
            timeframe: "Long-term (including maintenance)",
            skills: "Technical, managerial, and communication skills"
          }
        }
      },
      references: [
        "Pressman, R. S. (2014). Software Engineering: A Practitioner's Approach (8th ed.). McGraw-Hill Education.",
        "Sommerville, I. (2015). Software Engineering (10th ed.). Pearson.",
        "IEEE Standard Glossary of Software Engineering Terminology, IEEE Std 610.12-1990."
      ]
    }
  },
  {
    id: "unit1_lecture2",
    unit: 1,
    part: 2,
    title: "The Software Process and Process Models",
    description: "This lecture covers the software process, software engineering practice, and various process models including prescriptive models, the Unified Process, and Agile methodologies.",
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
      "The software process is a structured set of activities required to develop a software system",
      "Process models provide frameworks for organizing software development activities",
      "Agile methodologies emphasize iterative development and customer collaboration",
      "The Unified Process is an iterative and incremental software development framework"
    ],
    content: {
      softwareProcess: {
        definition: "The software process is a structured set of activities required to develop a software system. It involves transforming user needs into software products through a series of steps or phases.",
        keyComponents: {
          methods: "Techniques for building software (analysis, design, coding, testing, maintenance)",
          tools: "Automated or semi-automated support for methods",
          procedures: "The glue that holds methods and tools together",
          paradigms: "Approaches to software development (object-oriented, component-based, etc.)"
        },
        commonActivities: [
          "Specification: Defining what the system should do",
          "Design: Defining how the system will do it",
          "Implementation: Writing the code",
          "Validation: Checking that the system meets requirements",
          "Evolution: Changing the system in response to changing requirements"
        ],
        characteristics: [
          "Predictability: How well the process can predict outcomes",
          "Testability: How well the process supports testing",
          "Maintainability: How well the process supports maintenance",
          "Rapidity: How quickly the process delivers results",
          "Visibility: How visible the process activities are to stakeholders"
        ]
      },
      softwareEngineeringPractice: {
        definition: "Software engineering practice encompasses the technical and managerial activities required to build high-quality software. It involves applying engineering principles, methods, and tools to solve problems within the constraints of resources and requirements.",
        corePrinciples: [
          "Rigor and Formality: Using mathematically based models and formal methods",
          "Separation of Concerns: Dividing a complex problem into manageable parts",
          "Modularity: Designing systems with well-defined, independent components",
          "Abstraction: Focusing on essential aspects while hiding implementation details",
          "Anticipation of Change: Designing systems to accommodate future changes",
          "Generality: Creating components that can be reused",
          "Incrementality: Developing systems in small, manageable increments"
        ],
        framework: {
          processFramework: "Defines the key process activities",
          methods: "Provide the technical 'how to's' for building software",
          tools: "Provide automated or semi-automated support for process and methods",
          qualityFocus: "Ensures that customer requirements are met"
        },
        genericFramework: [
          "Communication: Understanding the problem and gathering requirements",
          "Planning: Estimating resources, scheduling, and tracking",
          "Modeling: Creating models to better understand requirements and design",
          "Construction: Code generation and testing",
          "Deployment: Delivery, support, and feedback"
        ]
      },
      processModels: {
        definition: "Prescriptive process models provide a defined set of activities, actions, tasks, milestones, and work products that are required to build high-quality software. They prescribe a set of process elements and workflow.",
        waterfallModel: {
          description: "The oldest paradigm for software engineering, suggesting a systematic, sequential approach to software development.",
          phases: [
            "Requirements Definition: System services, constraints, and goals are established",
            "System and Software Design: Establishes overall system architecture",
            "Implementation and Unit Testing: Software design is realized as a set of programs or program units",
            "Integration and System Testing: Individual units are integrated and tested as a complete system",
            "Operation and Maintenance: System is installed and put into practical use"
          ],
          advantages: [
            "Simple and easy to understand",
            "Well-documented process with defined deliverables",
            "Works well for smaller projects with well-understood requirements"
          ],
          disadvantages: [
            "Inflexible to changing requirements",
            "Working software not produced until late in the lifecycle",
            "High risk and uncertainty",
            "Not suitable for complex and object-oriented projects"
          ]
        },
        incrementalModel: {
          description: "Combines elements of the waterfall model applied in an iterative fashion. It delivers the software in increments, with each increment providing more functionality.",
          characteristics: [
            "First increment is often a core product",
            "Subsequent increments add features",
            "Process is repeated until the complete product is built"
          ],
          advantages: [
            "Generates working software quickly",
            "More flexible than waterfall",
            "Easier to test and debug during a smaller iteration",
            "Easier to manage risk"
          ],
          disadvantages: [
            "Requires good planning and design",
            "Requires a clear and complete definition of the whole system before it can be broken down",
            "Total cost is higher than waterfall"
          ]
        },
        evolutionaryModels: {
          description: "Evolutionary models recognize that software evolves over time and aim to develop an initial implementation, expose it to user feedback, and refine it through many versions.",
          types: {
            prototyping: {
              steps: [
                "Begins with requirements gathering",
                "Quick design focusing on user interface",
                "Building a prototype",
                "Customer evaluation",
                "Refinement",
                "Engineer product"
              ]
            },
            spiral: {
              description: "Combines iterative nature of prototyping with controlled aspects of waterfall",
              phases: [
                "Planning",
                "Risk Analysis",
                "Engineering",
                "Evaluation"
              ],
              characteristics: [
                "Risk-driven approach",
                "Each cycle involves the same sequence of steps for each portion of the product"
              ]
            },
            concurrent: {
              description: "Also called concurrent engineering",
              characteristics: [
                "All activities exist concurrently but in different states",
                "Events trigger transitions between states",
                "Applicable to all types of software development"
              ]
            }
          }
        }
      },
      unifiedProcess: {
        definition: "The Unified Process (UP) is an iterative and incremental software development process framework. It uses the Unified Modeling Language (UML) for creating the blueprints of the software.",
        keyCharacteristics: [
          "Use-Case Driven: Use cases define the functionality of the system from the user's perspective",
          "Architecture-Centric: The architecture is a key artifact that evolves throughout the development",
          "Iterative and Incremental: Development proceeds through a series of iterations, each producing an increment",
          "Risk-Focused: Early iterations address the highest risks"
        ],
        phases: {
          inception: [
            "Establish the business case for the system",
            "Define the project scope",
            "Identify key actors and use cases",
            "Develop initial project plan"
          ],
          elaboration: [
            "Analyze the problem domain",
            "Establish a sound architectural foundation",
            "Develop the project plan",
            "Eliminate highest risk elements"
          ],
          construction: [
            "Build the product",
            "Complete the analysis, design, development, and testing",
            "Develop all features and components",
            "Integrate components into the final product"
          ],
          transition: [
            "Transfer the software to the user community",
            "Train end users",
            "Convert and migrate existing data",
            "Deploy the system into production"
          ]
        },
        workflows: [
          "Business Modeling: Understanding the business context",
          "Requirements: Capturing what the system should do",
          "Analysis and Design: Translating requirements into a blueprint",
          "Implementation: Programming the software",
          "Test: Verifying that the system works as expected",
          "Deployment: Delivering the system to users",
          "Configuration and Change Management: Managing changes",
          "Project Management: Planning and monitoring",
          "Environment: Setting up the development environment"
        ]
      },
      agileMethodology: {
        definition: "Agile methodology is a group of software development approaches based on iterative development, where requirements and solutions evolve through collaboration between self-organizing cross-functional teams.",
        manifestoPrinciples: [
          "Individuals and interactions over processes and tools",
          "Working software over comprehensive documentation",
          "Customer collaboration over contract negotiation",
          "Responding to change over following a plan"
        ],
        keyCharacteristics: [
          "Iterative and Incremental: Development in small iterations",
          "Customer Involvement: Regular customer feedback",
          "Self-Organizing Teams: Teams decide how to accomplish work",
          "Adaptability: Embrace change rather than resist it",
          "Continuous Improvement: Regular reflection on how to become more effective"
        ],
        commonMethodologies: [
          "Extreme Programming (XP)",
          "Scrum",
          "Kanban",
          "Lean Software Development",
          "Feature-Driven Development (FDD)",
          "Dynamic Systems Development Method (DSDM)",
          "Crystal"
        ]
      },
      extremeProgramming: {
        definition: "Extreme Programming (XP) is an agile software development methodology that aims to produce higher quality software and higher quality of life for the development team. It focuses on customer satisfaction and promotes teamwork.",
        coreValues: [
          "Communication: Team members communicate with each other and with the customer",
          "Simplicity: Develop the simplest solution that meets the current requirements",
          "Feedback: Get feedback through testing, customer involvement, and team interaction",
          "Courage: Make tough decisions when necessary",
          "Respect: Team members respect each other and the work they do"
        ],
        keyPractices: [
          "Pair Programming: Two programmers work together at one workstation",
          "Test-Driven Development (TDD): Write tests before writing code",
          "Continuous Integration: Integrate and build the system many times a day",
          "Refactoring: Restructure the system without changing its behavior",
          "Small Releases: Put a simple system into production quickly, then release new versions in short cycles",
          "Collective Code Ownership: Anyone can change any code anywhere in the system",
          "Coding Standards: Everyone writes code in accordance with rules emphasizing communication",
          "Sustainable Pace: Work at a pace that can be sustained indefinitely",
          "On-Site Customer: A customer representative is available full-time for the team",
          "Planning Game: Quickly determine the scope of the next release by combining business priorities and technical estimates"
        ]
      },
      scrumFramework: {
        definition: "Scrum is an agile framework for managing complex knowledge work, with an initial emphasis on software development. It is designed for teams of ten or fewer members who break their work into goals that can be completed within timeboxed iterations called sprints.",
        keyRoles: {
          productOwner: "Represents the stakeholders and is the voice of the customer",
          scrumMaster: "Ensures the team follows the Scrum process",
          developmentTeam: "Self-organizing group that creates the product"
        },
        artifacts: {
          productBacklog: "Ordered list of everything that might be needed in the product",
          sprintBacklog: "Set of Product Backlog items selected for the Sprint",
          increment: "Sum of all Product Backlog items completed during a Sprint"
        }
      }
    }
  },
  {
    id: "unit2_lecture1",
    unit: 2,
    part: 1,
    title: "Understanding Software Requirements",
    description: "This lecture covers the fundamental concepts of software requirements, including functional and non-functional requirements, user requirements, system requirements, and interface specifications.",
    topics: [
      "Introduction to Software Requirements",
      "Functional Requirements",
      "Non-functional Requirements",
      "User Requirements",
      "System Requirements",
      "Interface Specification"
    ],
    keyPoints: [
      "Requirements serve as the foundation for the entire software development process",
      "Good requirements should be complete, correct, feasible, necessary, prioritized, unambiguous, verifiable, consistent, and traceable",
      "Requirements can be categorized into functional and non-functional requirements",
      "Interface specifications define how the software system interacts with external entities"
    ],
    content: {
      introduction: {
        definition: "Software requirements are the description of features and functionalities of the target system. They convey the expectations of users from the software product.",
        importance: [
          "Foundation for Design: Requirements provide the basis for system design and architecture",
          "Contractual Agreement: They serve as a contract between stakeholders and development team",
          "Planning Aid: Help in estimating costs, schedules, and resources",
          "Validation Criteria: Provide criteria for system validation and acceptance",
          "Change Management: Serve as a baseline for managing changes"
        ],
        characteristics: [
          "Complete: All necessary information is provided",
          "Correct: Accurately represents the stakeholders' needs",
          "Feasible: Can be implemented within project constraints",
          "Necessary: Represents a feature that stakeholders need",
          "Prioritized: Assigned a priority level for implementation",
          "Unambiguous: Has only one interpretation",
          "Verifiable: Can be tested or verified",
          "Consistent: Does not contradict other requirements",
          "Traceable: Can be traced to its origin and to design elements"
        ]
      },
      functionalRequirements: {
        definition: "Functional requirements describe the behavior of the system—what the system should do. They define specific functions, tasks, or services that the system must perform.",
        characteristics: [
          "Describe system behavior: What the system should do in response to certain inputs",
          "Specify inputs, outputs, and behaviors: Define how the system processes inputs and produces outputs",
          "Detail-oriented: Often very specific about system functionality",
          "User-focused: Typically expressed from the user's perspective"
        ],
        examples: [
          "The system shall allow users to create a new account by providing email, password, and personal information",
          "The system shall send a confirmation email when a user registers",
          "The system shall validate that all required fields are filled before submitting a form",
          "The system shall allow administrators to view all user accounts",
          "The system shall generate a monthly report of all transactions"
        ],
        techniques: [
          "Use Cases: Describe interactions between users and the system to achieve specific goals",
          "User Stories: Short, simple descriptions of features from the user's perspective",
          "Scenarios: Specific instances of use cases that describe a sequence of events",
          "Process Flows: Visual representations of system processes and workflows",
          "State Diagrams: Show how the system transitions between different states"
        ]
      },
      nonFunctionalRequirements: {
        definition: "Non-functional requirements specify criteria that can be used to judge the operation of a system, rather than specific behaviors. They are often called quality attributes and describe how well the system performs its functions.",
        categories: {
          performance: [
            "Response time",
            "Throughput",
            "Capacity",
            "Scalability"
          ],
          reliability: [
            "Availability (e.g., 99.9% uptime)",
            "Mean Time Between Failures (MTBF)",
            "Mean Time To Repair (MTTR)",
            "Failure rate"
          ],
          security: [
            "Authentication",
            "Authorization",
            "Data integrity",
            "Confidentiality",
            "Non-repudiation"
          ],
          usability: [
            "Learnability",
            "Efficiency",
            "Memorability",
            "Error prevention",
            "User satisfaction"
          ],
          maintainability: [
            "Modularity",
            "Reusability",
            "Analyzability",
            "Modifiability",
            "Testability"
          ],
          portability: [
            "Adaptability",
            "Installability",
            "Replaceability",
            "Compatibility"
          ]
        },
        examples: [
          "The system shall respond to user queries within 2 seconds under normal load conditions",
          "The system shall be available 99.9% of the time during business hours",
          "The system shall support at least 1000 concurrent users without performance degradation",
          "The system shall be compatible with Chrome, Firefox, Safari, and Edge browsers",
          "The system shall comply with GDPR data protection regulations"
        ],
        challenges: [
          "Measurability: Difficult to quantify and measure",
          "Subjectivity: Often subject to interpretation",
          "Trade-offs: Improving one quality attribute may negatively impact another",
          "Testing: Can be challenging to test and validate",
          "Prioritization: Difficult to prioritize among competing quality attributes"
        ]
      },
      userRequirements: {
        definition: "User requirements are statements, in natural language or visual diagrams, that describe what services the system is expected to provide to system users and the constraints under which it must operate.",
        characteristics: [
          "High-level: Describe general features and constraints",
          "User-focused: Written from the user's perspective",
          "Natural language: Expressed in everyday language",
          "Minimal technical details: Avoid implementation specifics",
          "Goal-oriented: Focus on what users want to achieve"
        ],
        formats: [
          "Natural Language Statements: Simple statements describing what users need",
          "User Stories: 'As a [user role], I want [goal] so that [benefit]'",
          "Use Case Diagrams: Visual representation of user interactions with the system",
          "Storyboards: Visual sequences showing user interactions",
          "Personas and Scenarios: Fictional characters and narratives representing user types"
        ],
        examples: [
          "The online banking system should allow customers to view their account balances and transaction history",
          "As a marketing manager, I want to generate reports on campaign performance so that I can evaluate effectiveness",
          "The inventory management system should notify warehouse staff when stock levels are low",
          "The mobile app should allow users to scan QR codes to access product information",
          "The customer support portal should enable users to track the status of their support tickets"
        ],
        problems: [
          "Ambiguity: Natural language can be interpreted in different ways",
          "Incompleteness: Users may not express all their needs",
          "Inconsistency: Different users may have conflicting requirements",
          "Unrealistic expectations: Users may request features that are not feasible",
          "Volatility: User needs may change over time"
        ]
      },
      systemRequirements: {
        definition: "System requirements are more detailed descriptions of the software system's functions, services, and operational constraints. They serve as a bridge between user requirements and software design.",
        characteristics: [
          "Detailed: Provide specific information about system functionality",
          "Technical: Include technical details and constraints",
          "Precise: Minimize ambiguity and vagueness",
          "Structured: Organized in a systematic way",
          "Complete: Cover all aspects of the system"
        ],
        types: [
          "Functional System Requirements: Detailed descriptions of system functions and services",
          "Non-functional System Requirements: Detailed specifications of system properties and constraints",
          "Domain Requirements: Requirements derived from the application domain",
          "Interface Requirements: Specifications for how the system interacts with external entities",
          "Operational Requirements: Specifications for how the system will be operated and maintained"
        ],
        examples: [
          "The system shall authenticate users by verifying their username and password against the user database",
          "The system shall encrypt all passwords using SHA-256 hashing algorithm before storing them in the database",
          "The system shall log all failed login attempts, recording the username, timestamp, and IP address",
          "The system shall automatically lock a user account after 5 consecutive failed login attempts",
          "The system shall provide an API endpoint for retrieving user profile information in JSON format"
        ],
        relationship: {
          description: "User requirements are typically high-level statements that describe what the system should do from the user's perspective. System requirements elaborate on these, providing the technical details needed for implementation.",
          example: {
            userRequirement: "Users should be able to search for products by name or category",
            systemRequirements: [
              "The system shall provide a search box on every page of the website",
              "The system shall allow users to filter search results by product category, price range, and brand",
              "The system shall display search results within 1 second for queries returning fewer than 1000 products",
              "The system shall implement full-text search using Elasticsearch"
            ]
          }
        }
      },
      interfaceSpecification: {
        definition: "Interface specifications define how the software system interacts with external entities, including users, hardware, and other software systems.",
        types: {
          userInterfaces: [
            "Graphical User Interfaces (GUI)",
            "Command-Line Interfaces (CLI)",
            "Voice User Interfaces (VUI)",
            "Gesture-based Interfaces"
          ],
          hardwareInterfaces: [
            "Device drivers",
            "Sensor interfaces",
            "Input/output interfaces"
          ],
          softwareInterfaces: [
            "Application Programming Interfaces (APIs)",
            "Web services",
            "Database interfaces",
            "File formats"
          ],
          communicationInterfaces: [
            "Network protocols",
            "Message formats",
            "Data exchange formats"
          ]
        },
        components: [
          "Interface Identification: Name and purpose of the interface",
          "Interface Type: User, hardware, software, or communication",
          "Input/Output Data: Data formats, structures, and semantics",
          "Processing Logic: How data is processed or transformed",
          "Error Handling: How errors and exceptions are managed",
          "Performance Characteristics: Response times, throughput, etc",
          "Security Considerations: Authentication, authorization, encryption"
        ],
        techniques: [
          "Interface Control Documents (ICDs): Formal documents describing interfaces",
          "API Documentation: Specifications for programmatic interfaces",
          "Wireframes and Mockups: Visual representations of user interfaces",
          "Sequence Diagrams: Visual representations of interactions between components",
          "Data Flow Diagrams: Visual representations of data movement through interfaces",
          "State Transition Diagrams: Visual representations of system state changes"
        ],
        examples: {
          userInterface: [
            "The login screen shall contain fields for username and password, a 'Login' button, and a 'Forgot Password' link",
            "Error messages shall be displayed in red text directly below the relevant input field"
          ],
          api: [
            "The getUserProfile API shall accept a user ID as a parameter and return a JSON object containing the user's profile information",
            "The API shall return HTTP status code 404 if the user ID does not exist"
          ],
          hardwareInterface: [
            "The system shall communicate with the barcode scanner via USB interface using the HID protocol"
          ]
        }
      }
    }
  }
]; 