# Unit II: Software Requirements

## Lecture 1: Understanding Software Requirements

### 1. Introduction to Software Requirements

Software requirements are the description of features and functionalities of the target system. They convey the expectations of users from the software product. Requirements serve as the foundation for the entire software development process, guiding design, implementation, testing, and maintenance activities.

#### Importance of Requirements:

1. **Foundation for Design**: Requirements provide the basis for system design and architecture.
2. **Contractual Agreement**: They serve as a contract between stakeholders and development team.
3. **Planning Aid**: Help in estimating costs, schedules, and resources.
4. **Validation Criteria**: Provide criteria for system validation and acceptance.
5. **Change Management**: Serve as a baseline for managing changes.

#### Characteristics of Good Requirements:

1. **Complete**: All necessary information is provided.
2. **Correct**: Accurately represents the stakeholders' needs.
3. **Feasible**: Can be implemented within project constraints.
4. **Necessary**: Represents a feature that stakeholders need.
5. **Prioritized**: Assigned a priority level for implementation.
6. **Unambiguous**: Has only one interpretation.
7. **Verifiable**: Can be tested or verified.
8. **Consistent**: Does not contradict other requirements.
9. **Traceable**: Can be traced to its origin and to design elements.

### 2. Functional Requirements

Functional requirements describe the behavior of the system—what the system should do. They define specific functions, tasks, or services that the system must perform.

#### Characteristics of Functional Requirements:

1. **Describe system behavior**: What the system should do in response to certain inputs.
2. **Specify inputs, outputs, and behaviors**: Define how the system processes inputs and produces outputs.
3. **Detail-oriented**: Often very specific about system functionality.
4. **User-focused**: Typically expressed from the user's perspective.

#### Examples of Functional Requirements:

1. "The system shall allow users to create a new account by providing email, password, and personal information."
2. "The system shall send a confirmation email when a user registers."
3. "The system shall validate that all required fields are filled before submitting a form."
4. "The system shall allow administrators to view all user accounts."
5. "The system shall generate a monthly report of all transactions."

#### Techniques for Capturing Functional Requirements:

1. **Use Cases**: Describe interactions between users and the system to achieve specific goals.
2. **User Stories**: Short, simple descriptions of features from the user's perspective.
3. **Scenarios**: Specific instances of use cases that describe a sequence of events.
4. **Process Flows**: Visual representations of system processes and workflows.
5. **State Diagrams**: Show how the system transitions between different states.

### 3. Non-functional Requirements

Non-functional requirements specify criteria that can be used to judge the operation of a system, rather than specific behaviors. They are often called quality attributes and describe how well the system performs its functions.

#### Categories of Non-functional Requirements:

1. **Performance Requirements**:
   - Response time
   - Throughput
   - Capacity
   - Scalability

2. **Reliability Requirements**:
   - Availability (e.g., 99.9% uptime)
   - Mean Time Between Failures (MTBF)
   - Mean Time To Repair (MTTR)
   - Failure rate

3. **Security Requirements**:
   - Authentication
   - Authorization
   - Data integrity
   - Confidentiality
   - Non-repudiation

4. **Usability Requirements**:
   - Learnability
   - Efficiency
   - Memorability
   - Error prevention
   - User satisfaction

5. **Maintainability Requirements**:
   - Modularity
   - Reusability
   - Analyzability
   - Modifiability
   - Testability

6. **Portability Requirements**:
   - Adaptability
   - Installability
   - Replaceability
   - Compatibility

#### Examples of Non-functional Requirements:

1. "The system shall respond to user queries within 2 seconds under normal load conditions."
2. "The system shall be available 99.9% of the time during business hours."
3. "The system shall support at least 1000 concurrent users without performance degradation."
4. "The system shall be compatible with Chrome, Firefox, Safari, and Edge browsers."
5. "The system shall comply with GDPR data protection regulations."

#### Challenges with Non-functional Requirements:

1. **Measurability**: Difficult to quantify and measure.
2. **Subjectivity**: Often subject to interpretation.
3. **Trade-offs**: Improving one quality attribute may negatively impact another.
4. **Testing**: Can be challenging to test and validate.
5. **Prioritization**: Difficult to prioritize among competing quality attributes.

### 4. User Requirements

User requirements are statements, in natural language or visual diagrams, that describe what services the system is expected to provide to system users and the constraints under which it must operate. They are written from the user's perspective and focus on the user's needs and goals.

#### Characteristics of User Requirements:

1. **High-level**: Describe general features and constraints.
2. **User-focused**: Written from the user's perspective.
3. **Natural language**: Expressed in everyday language.
4. **Minimal technical details**: Avoid implementation specifics.
5. **Goal-oriented**: Focus on what users want to achieve.

#### Formats for Documenting User Requirements:

1. **Natural Language Statements**: Simple statements describing what users need.
2. **User Stories**: "As a [user role], I want [goal] so that [benefit]."
3. **Use Case Diagrams**: Visual representation of user interactions with the system.
4. **Storyboards**: Visual sequences showing user interactions.
5. **Personas and Scenarios**: Fictional characters and narratives representing user types.

#### Examples of User Requirements:

1. "The online banking system should allow customers to view their account balances and transaction history."
2. "As a marketing manager, I want to generate reports on campaign performance so that I can evaluate effectiveness."
3. "The inventory management system should notify warehouse staff when stock levels are low."
4. "The mobile app should allow users to scan QR codes to access product information."
5. "The customer support portal should enable users to track the status of their support tickets."

#### Problems with User Requirements:

1. **Ambiguity**: Natural language can be interpreted in different ways.
2. **Incompleteness**: Users may not express all their needs.
3. **Inconsistency**: Different users may have conflicting requirements.
4. **Unrealistic expectations**: Users may request features that are not feasible.
5. **Volatility**: User needs may change over time.

### 5. System Requirements

System requirements are more detailed descriptions of the software system's functions, services, and operational constraints. They serve as a bridge between user requirements and software design, providing a more technical and precise specification of what the system should do.

#### Characteristics of System Requirements:

1. **Detailed**: Provide specific information about system functionality.
2. **Technical**: Include technical details and constraints.
3. **Precise**: Minimize ambiguity and vagueness.
4. **Structured**: Organized in a systematic way.
5. **Complete**: Cover all aspects of the system.

#### Types of System Requirements:

1. **Functional System Requirements**: Detailed descriptions of system functions and services.
2. **Non-functional System Requirements**: Detailed specifications of system properties and constraints.
3. **Domain Requirements**: Requirements derived from the application domain.
4. **Interface Requirements**: Specifications for how the system interacts with external entities.
5. **Operational Requirements**: Specifications for how the system will be operated and maintained.

#### Examples of System Requirements:

1. "The system shall authenticate users by verifying their username and password against the user database."
2. "The system shall encrypt all passwords using SHA-256 hashing algorithm before storing them in the database."
3. "The system shall log all failed login attempts, recording the username, timestamp, and IP address."
4. "The system shall automatically lock a user account after 5 consecutive failed login attempts."
5. "The system shall provide an API endpoint for retrieving user profile information in JSON format."

#### Relationship Between User and System Requirements:

User requirements are typically high-level statements that describe what the system should do from the user's perspective. System requirements elaborate on these, providing the technical details needed for implementation. For example:

- **User Requirement**: "Users should be able to search for products by name or category."
- **System Requirements**:
  - "The system shall provide a search box on every page of the website."
  - "The system shall allow users to filter search results by product category, price range, and brand."
  - "The system shall display search results within 1 second for queries returning fewer than 1000 products."
  - "The system shall implement full-text search using Elasticsearch."

### 6. Interface Specification

Interface specifications define how the software system interacts with external entities, including users, hardware, and other software systems. They are crucial for ensuring proper integration and communication between system components.

#### Types of Interfaces:

1. **User Interfaces (UI)**:
   - Graphical User Interfaces (GUI)
   - Command-Line Interfaces (CLI)
   - Voice User Interfaces (VUI)
   - Gesture-based Interfaces

2. **Hardware Interfaces**:
   - Device drivers
   - Sensor interfaces
   - Input/output interfaces

3. **Software Interfaces**:
   - Application Programming Interfaces (APIs)
   - Web services
   - Database interfaces
   - File formats

4. **Communication Interfaces**:
   - Network protocols
   - Message formats
   - Data exchange formats

#### Components of Interface Specifications:

1. **Interface Identification**: Name and purpose of the interface.
2. **Interface Type**: User, hardware, software, or communication.
3. **Input/Output Data**: Data formats, structures, and semantics.
4. **Processing Logic**: How data is processed or transformed.
5. **Error Handling**: How errors and exceptions are managed.
6. **Performance Characteristics**: Response times, throughput, etc.
7. **Security Considerations**: Authentication, authorization, encryption.

#### Interface Specification Techniques:

1. **Interface Control Documents (ICDs)**: Formal documents describing interfaces.
2. **API Documentation**: Specifications for programmatic interfaces.
3. **Wireframes and Mockups**: Visual representations of user interfaces.
4. **Sequence Diagrams**: Visual representations of interactions between components.
5. **Data Flow Diagrams**: Visual representations of data movement through interfaces.
6. **State Transition Diagrams**: Visual representations of system state changes.

#### Examples of Interface Specifications:

1. **User Interface Specification**:
   - "The login screen shall contain fields for username and password, a 'Login' button, and a 'Forgot Password' link."
   - "Error messages shall be displayed in red text directly below the relevant input field."

2. **API Specification**:
   - "The getUserProfile API shall accept a user ID as a parameter and return a JSON object containing the user's profile information."
   - "The API shall return HTTP status code 404 if the user ID does not exist."

3. **Hardware Interface Specification**:
   - "The system shall communicate with the barcode scanner via USB interface using the HID protocol."
   - "The system shall poll the scanner every 100ms for new barcode data."

4. **Communication Interface Specification**:
   - "The system shall communicate with the payment gateway using HTTPS with TLS 1.2 or higher."
   - "All API requests shall include an authentication token in the HTTP header."

### 7. The Software Requirements Document

The Software Requirements Document (SRD), also known as the Software Requirements Specification (SRS), is a comprehensive description of the intended purpose, functionality, and behavior of the software system. It serves as a contract between stakeholders and the development team.

#### Purpose of the SRD:

1. **Communication**: Facilitates communication among stakeholders.
2. **Agreement**: Establishes consensus on what the system will do.
3. **Reference**: Provides a reference for validation and verification.
4. **Baseline**: Serves as a baseline for change management.
5. **Planning**: Aids in project planning and estimation.

#### Structure of a Typical SRD:

1. **Introduction**:
   - Purpose and scope
   - Definitions, acronyms, and abbreviations
   - References
   - Overview of the document

2. **Overall Description**:
   - Product perspective
   - Product functions
   - User characteristics
   - Constraints
   - Assumptions and dependencies

3. **Specific Requirements**:
   - Functional requirements
   - Non-functional requirements
   - Interface requirements
   - System features
   - Database requirements

4. **Supporting Information**:
   - Appendices
   - Index
   - Glossary

#### IEEE 830 Standard for SRS:

The IEEE 830 standard provides guidelines for writing software requirements specifications. It recommends organizing requirements into the following categories:

1. **Functionality**: What the system should do.
2. **External Interfaces**: How the system interacts with people, hardware, other software, and other systems.
3. **Performance**: Speed, availability, response time, recovery time, etc.
4. **Attributes**: Portability, correctness, maintainability, security, etc.
5. **Design Constraints**: Standards compliance, hardware limitations, etc.

#### Best Practices for Writing SRDs:

1. **Use Clear Language**: Avoid ambiguity and jargon.
2. **Be Specific**: Provide concrete details and examples.
3. **Use Consistent Terminology**: Define terms and use them consistently.
4. **Prioritize Requirements**: Indicate which requirements are essential vs. desirable.
5. **Include Validation Criteria**: Specify how each requirement will be validated.
6. **Maintain Traceability**: Link requirements to their sources and to design elements.
7. **Review and Validate**: Have stakeholders review and approve the document.
8. **Use Templates**: Follow established templates or standards.
9. **Include Visual Elements**: Use diagrams, models, and tables where appropriate.
10. **Keep It Updated**: Maintain the document as requirements change.

### References

1. Pressman, R. S. (2014). Software Engineering: A Practitioner's Approach (8th ed.). McGraw-Hill Education.
2. Sommerville, I. (2015). Software Engineering (10th ed.). Pearson.
3. IEEE. (1998). IEEE Recommended Practice for Software Requirements Specifications (IEEE Std 830-1998).
4. Wiegers, K., & Beatty, J. (2013). Software Requirements (3rd ed.). Microsoft Press.
5. Cockburn, A. (2000). Writing Effective Use Cases. Addison-Wesley.

