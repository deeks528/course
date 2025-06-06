# Unit IV: Tool Suits

## Lecture 1: Atlassian Tools and Phabricator

### 1. Introduction to Atlassian Tools

Atlassian is a leading provider of collaboration, development, and issue tracking software for teams. Their suite of tools helps teams plan, organize, track, and deliver software and other projects. Atlassian tools are widely used in the software industry and form an integral part of many DevOps toolchains.

#### Overview of Atlassian Tools:

1. **Jira**: Project and issue tracking
2. **Confluence**: Team collaboration and documentation
3. **Bitbucket**: Git repository management
4. **Bamboo**: Continuous integration and delivery
5. **Crucible**: Code review
6. **Fisheye**: Source code repository browser
7. **Opsgenie**: Incident management
8. **Statuspage**: Status communication
9. **Trello**: Visual project management
10. **Jira Service Management**: IT service management

#### Key Benefits of Atlassian Tools:

1. **Integration**: Seamless integration between tools in the suite
2. **Scalability**: Supports small teams to large enterprises
3. **Customization**: Extensive customization options
4. **Marketplace**: Large ecosystem of plugins and add-ons
5. **Deployment Options**: Cloud, server, and data center deployment options
6. **Community**: Large user community and extensive documentation

### 2. Jira: Project and Issue Tracking

Jira is a powerful project and issue tracking tool that helps teams plan, track, and manage their work. It's highly customizable and can be adapted to various workflows and methodologies.

#### Key Features of Jira:

1. **Issue Tracking**:
   - Create and track issues (tasks, bugs, stories, etc.)
   - Assign issues to team members
   - Set priorities and due dates
   - Track issue status and resolution

2. **Project Management**:
   - Create and manage projects
   - Define project roles and permissions
   - Track project progress and timelines
   - Generate reports and dashboards

3. **Agile Support**:
   - Scrum and Kanban boards
   - Sprint planning and tracking
   - Backlog management
   - Velocity charts and burndown charts

4. **Workflow Customization**:
   - Define custom workflows
   - Create custom issue types
   - Configure fields and screens
   - Set up transitions and conditions

5. **Reporting and Dashboards**:
   - Built-in reports (burndown, velocity, etc.)
   - Custom dashboards
   - Gadgets for visualizing data
   - Export and share reports

#### Jira Project Types:

1. **Software Development**:
   - Designed for software teams
   - Includes agile boards and backlogs
   - Integration with development tools

2. **Business**:
   - For business teams and projects
   - Task management and tracking
   - Customizable workflows

3. **Service Desk**:
   - Customer service and support
   - Request management
   - SLA tracking

4. **Ops**:
   - For IT operations teams
   - Incident management
   - Change management

#### Jira Workflows:

A workflow in Jira represents the path that an issue takes from creation to completion. It consists of statuses (the state of an issue) and transitions (the movement between statuses).

**Default Jira Software Workflow**:
1. **To Do**: Issue is created but work hasn't started
2. **In Progress**: Work has started on the issue
3. **Done**: Work is complete

**Custom Workflow Example**:
1. **Open**: Issue is created
2. **In Analysis**: Issue is being analyzed
3. **Ready for Development**: Analysis is complete, ready for coding
4. **In Development**: Coding is in progress
5. **Ready for Testing**: Development is complete, ready for testing
6. **In Testing**: Testing is in progress
7. **Ready for Deployment**: Testing is complete, ready for deployment
8. **Deployed**: Issue has been deployed to production
9. **Closed**: Issue is verified in production and closed

#### Jira Integration with Other Tools:

1. **Confluence**: Link Jira issues to Confluence pages for documentation
2. **Bitbucket**: Connect code commits and pull requests to Jira issues
3. **Bamboo**: Link builds and deployments to Jira issues
4. **Slack**: Receive notifications and updates in Slack
5. **Microsoft Teams**: Collaborate on Jira issues within Teams
6. **GitHub**: Connect GitHub repositories to Jira projects
7. **Jenkins**: Link Jenkins builds to Jira issues

#### Best Practices for Using Jira:

1. **Keep It Simple**: Start with simple workflows and add complexity as needed
2. **Standardize Issue Types**: Define clear issue types and their purpose
3. **Use Components**: Organize issues by components for better filtering
4. **Set Up Dashboards**: Create dashboards for different roles and needs
5. **Regular Cleanup**: Archive completed projects and clean up old issues
6. **Automate Where Possible**: Use automation rules to reduce manual work
7. **Train Users**: Ensure all users understand how to use Jira effectively

### 3. Confluence: Team Collaboration and Documentation

Confluence is a team workspace where knowledge and collaboration meet. It allows teams to create, share, and collaborate on content, documentation, and projects in one place.

#### Key Features of Confluence:

1. **Spaces**:
   - Organize content into spaces (e.g., team spaces, project spaces)
   - Control access and permissions at the space level
   - Customize space layouts and themes

2. **Pages**:
   - Create rich content with the WYSIWYG editor
   - Use templates for consistent page structures
   - Organize pages in hierarchies
   - Version control and page history

3. **Collaboration**:
   - Comments and @mentions
   - Page editing notifications
   - Collaborative editing
   - Page restrictions and permissions

4. **Templates**:
   - Pre-built templates for common use cases
   - Create custom templates
   - Template categories for organization

5. **Macros**:
   - Extend page functionality with macros
   - Display dynamic content
   - Embed content from other systems
   - Create interactive elements

#### Common Use Cases for Confluence:

1. **Technical Documentation**:
   - Product documentation
   - API documentation
   - System architecture
   - Code guidelines

2. **Project Documentation**:
   - Project plans
   - Requirements
   - Design documents
   - Meeting notes

3. **Knowledge Base**:
   - How-to guides
   - FAQs
   - Troubleshooting guides
   - Best practices

4. **Team Collaboration**:
   - Team spaces
   - Decision records
   - Retrospectives
   - Onboarding materials

5. **Company Intranet**:
   - Company policies
   - Announcements
   - Department pages
   - Employee directory

#### Confluence Integration with Other Tools:

1. **Jira**: Display Jira issues and reports in Confluence
2. **Bitbucket**: Embed code snippets and repository information
3. **Microsoft Office**: Import and export Office documents
4. **Google Drive**: Embed Google Docs, Sheets, and Slides
5. **Slack**: Share Confluence content in Slack
6. **Trello**: Embed Trello boards in Confluence pages

#### Best Practices for Using Confluence:

1. **Organize Content Logically**: Use a clear space and page hierarchy
2. **Use Templates**: Create templates for consistent documentation
3. **Keep Content Updated**: Regularly review and update pages
4. **Use Labels**: Add labels to pages for better searchability
5. **Link Related Content**: Create links between related pages
6. **Control Permissions**: Set appropriate view and edit permissions
7. **Use Page Restrictions**: Restrict sensitive content when necessary
8. **Create a Home Page**: Design informative space home pages

### 4. Bitbucket: Git Repository Management

Bitbucket is a Git repository management solution designed for professional teams. It provides a central place to manage git repositories, collaborate on code, and build and deploy software.

#### Key Features of Bitbucket:

1. **Repository Management**:
   - Create and manage Git repositories
   - Branch management
   - Repository permissions
   - Repository settings and hooks

2. **Code Collaboration**:
   - Pull requests
   - Code reviews
   - Inline comments
   - Branch comparisons

3. **CI/CD Integration**:
   - Bitbucket Pipelines (built-in CI/CD)
   - Integration with other CI/CD tools
   - Deployment tracking
   - Environment management

4. **Project Management**:
   - Project organization
   - Issue tracking
   - Project boards
   - Project settings

5. **Security**:
   - IP whitelisting
   - Two-factor authentication
   - Access keys
   - Branch restrictions

#### Bitbucket Deployment Options:

1. **Bitbucket Cloud**:
   - Hosted by Atlassian
   - Subscription-based pricing
   - Automatic updates and maintenance
   - Integration with other Atlassian cloud products

2. **Bitbucket Server**:
   - Self-hosted on your own infrastructure
   - One-time license fee
   - Complete control over your environment
   - Integration with other Atlassian server products

3. **Bitbucket Data Center**:
   - Self-hosted with high availability
   - Clustering for performance and reliability
   - Designed for enterprise use
   - Advanced security and compliance features

#### Bitbucket Pipelines:

Bitbucket Pipelines is an integrated CI/CD service built into Bitbucket. It allows you to automatically build, test, and deploy code based on a configuration file in your repository.

**Key Features of Bitbucket Pipelines**:
1. **Configuration as Code**: Define pipelines in YAML files
2. **Docker-Based**: Run builds in Docker containers
3. **Parallel Steps**: Run multiple steps in parallel
4. **Caching**: Cache dependencies for faster builds
5. **Deployment**: Deploy to various environments
6. **Variables**: Store and use secure variables
7. **Artifacts**: Share files between steps

**Example `bitbucket-pipelines.yml` File**:
```yaml
pipelines:
  default:
    - step:
        name: Build and Test
        image: node:14
        caches:
          - node
        script:
          - npm install
          - npm test
    - step:
        name: Deploy to Production
        deployment: production
        script:
          - npm run deploy
```

#### Bitbucket Integration with Other Tools:

1. **Jira**: Link commits and pull requests to Jira issues
2. **Confluence**: Embed repository information in Confluence pages
3. **Bamboo**: Trigger Bamboo builds from Bitbucket
4. **Jenkins**: Integrate with Jenkins for CI/CD
5. **Slack**: Receive notifications in Slack
6. **Trello**: Link commits to Trello cards
7. **AWS, Azure, GCP**: Deploy to cloud platforms

#### Best Practices for Using Bitbucket:

1. **Use Branching Strategies**: Implement Git Flow or a similar branching strategy
2. **Protect Important Branches**: Set up branch restrictions for main branches
3. **Require Pull Requests**: Enforce code reviews through pull requests
4. **Set Up CI/CD**: Automate testing and deployment with Pipelines
5. **Use Meaningful Commit Messages**: Follow commit message conventions
6. **Organize Repositories**: Group related repositories into projects
7. **Document Repository Usage**: Create README files for repositories
8. **Manage Access Control**: Set appropriate permissions for users and groups

### 5. Crucible: Code Review

Crucible is Atlassian's code review tool that helps teams review code, discuss changes, and identify defects before they reach production. It supports a collaborative approach to code reviews and integrates with version control systems.

#### Key Features of Crucible:

1. **Code Reviews**:
   - Create and manage code reviews
   - Invite reviewers
   - Track review status
   - Set review deadlines

2. **Inline Comments**:
   - Comment on specific lines of code
   - Reply to comments
   - Mark comments as addressed
   - Track comment resolution

3. **Review Dashboard**:
   - View all reviews in one place
   - Filter reviews by status, project, or reviewer
   - Track review metrics
   - Receive notifications for review activities

4. **Integration with Version Control**:
   - Support for Git, SVN, Perforce, and more
   - Pre-commit and post-commit reviews
   - Branch and changeset reviews
   - Integration with FishEye for repository browsing

5. **Metrics and Reporting**:
   - Review activity reports
   - Review completion time
   - Reviewer participation
   - Defect identification rates

#### Types of Code Reviews in Crucible:

1. **Pre-Commit Reviews**:
   - Review code before it's committed
   - Catch issues early
   - Ensure code meets standards before integration

2. **Post-Commit Reviews**:
   - Review code after it's committed
   - Useful for teams with continuous integration
   - Can lead to follow-up commits for fixes

3. **Changeset Reviews**:
   - Review specific changesets
   - Focus on particular changes rather than entire files
   - Useful for reviewing bug fixes or small features

4. **Branch Reviews**:
   - Review all changes in a branch
   - Useful for feature branches
   - Comprehensive review before merging

#### Code Review Process with Crucible:

1. **Create Review**:
   - Select code to review (files, changesets, branches)
   - Add reviewers
   - Set review parameters (due date, objectives)

2. **Review Code**:
   - Reviewers examine code
   - Add comments and suggestions
   - Discuss issues and solutions
   - Approve or request changes

3. **Address Feedback**:
   - Author responds to comments
   - Make necessary changes
   - Mark comments as addressed
   - Submit updated code if needed

4. **Complete Review**:
   - All reviewers approve the code
   - Author addresses all comments
   - Review is marked as complete
   - Metrics are recorded

#### Benefits of Using Crucible for Code Reviews:

1. **Improved Code Quality**:
   - Catch bugs and issues early
   - Ensure adherence to coding standards
   - Identify security vulnerabilities
   - Improve overall design and architecture

2. **Knowledge Sharing**:
   - Share knowledge across the team
   - Learn from other developers
   - Understand different parts of the codebase
   - Mentor junior developers

3. **Accountability**:
   - Track who reviewed what code
   - Ensure all code is reviewed
   - Document review decisions
   - Create a culture of quality

4. **Integration with Development Workflow**:
   - Connect reviews to issues and tasks
   - Integrate with version control
   - Fit into existing development processes
   - Automate review creation for certain changes

#### Best Practices for Code Reviews with Crucible:

1. **Keep Reviews Small**: Review smaller chunks of code for better focus
2. **Set Clear Objectives**: Define what reviewers should look for
3. **Involve the Right Reviewers**: Include both experts and learners
4. **Be Constructive**: Focus on improvement, not criticism
5. **Use Checklists**: Create review checklists for consistency
6. **Follow Up**: Ensure issues are addressed after the review
7. **Learn from Patterns**: Identify common issues and address them systematically
8. **Balance Thoroughness and Speed**: Don't let reviews become bottlenecks

### 6. Phabricator

Phabricator is an open-source software development platform that includes tools for code review, repository hosting, bug tracking, project management, and more. It was originally developed at Facebook and is now maintained by Phacility.

#### Key Components of Phabricator:

1. **Differential**: Code review tool
2. **Diffusion**: Repository browser
3. **Maniphest**: Issue tracking
4. **Workboards**: Project management
5. **Herald**: Automated rules engine
6. **Harbormaster**: Continuous integration
7. **Phriction**: Wiki
8. **Conpherence**: Team chat
9. **Almanac**: Service directory
10. **Pholio**: Design review

#### Differential: Code Review in Phabricator

Differential is Phabricator's code review tool, which allows developers to submit code for review before it's committed to the repository.

**Key Features of Differential**:
1. **Revisions**: Units of code to be reviewed
2. **Inline Comments**: Comment on specific lines of code
3. **Review States**: Accept, request changes, or abandon revisions
4. **Pre-commit Reviews**: Review code before it's committed
5. **Automated Testing**: Integration with CI systems
6. **Review Templates**: Standardized review formats
7. **Review Chains**: Dependencies between revisions

**Differential Workflow**:
1. Developer creates a diff (patch) of their changes
2. Developer submits the diff as a revision for review
3. Reviewers examine the code and provide feedback
4. Developer addresses feedback and updates the revision
5. Reviewers approve the revision
6. Developer commits the approved code to the repository

#### Diffusion: Repository Browser

Diffusion is Phabricator's repository browser, which allows users to explore and search code repositories.

**Key Features of Diffusion**:
1. **Repository Hosting**: Host Git, Mercurial, and SVN repositories
2. **Code Browsing**: Navigate through repository files and directories
3. **Commit History**: View commit logs and details
4. **Branch Management**: Browse and manage branches
5. **Repository Mirroring**: Mirror repositories from other sources
6. **Access Control**: Fine-grained permissions for repositories
7. **Symbols**: Navigate to symbol definitions and references

#### Maniphest: Issue Tracking

Maniphest is Phabricator's issue tracking system, which allows teams to track tasks, bugs, and feature requests.

**Key Features of Maniphest**:
1. **Task Creation**: Create and manage tasks
2. **Custom Fields**: Define custom fields for tasks
3. **Priority Levels**: Assign priorities to tasks
4. **Task Assignment**: Assign tasks to users
5. **Task Dependencies**: Define relationships between tasks
6. **Projects**: Organize tasks into projects
7. **Search and Filters**: Find tasks based on various criteria
8. **Batch Editing**: Edit multiple tasks at once

#### Workboards: Project Management

Workboards provide a visual way to manage projects and tasks in Phabricator, similar to Kanban boards.

**Key Features of Workboards**:
1. **Columns**: Organize tasks into columns (e.g., To Do, In Progress, Done)
2. **Drag and Drop**: Move tasks between columns
3. **Multiple Boards**: Create multiple boards for different views
4. **Filters**: Filter tasks on boards
5. **Milestones**: Group tasks into milestones
6. **Subprojects**: Create hierarchical project structures
7. **Batch Operations**: Perform actions on multiple tasks

#### Herald: Automated Rules Engine

Herald is Phabricator's rules engine, which allows users to create automated rules that trigger actions based on events.

**Key Features of Herald**:
1. **Event Triggers**: Rules trigger on events like revision creation or task updates
2. **Conditions**: Define conditions for when rules should apply
3. **Actions**: Specify actions to take when conditions are met
4. **Personal Rules**: Rules that apply only to the creator
5. **Global Rules**: Rules that apply to all users
6. **Object Rules**: Rules that apply to specific objects
7. **Rule Management**: Create, edit, and disable rules

**Example Herald Rules**:
1. Automatically add reviewers to revisions in certain directories
2. Send notifications when tasks are assigned to specific projects
3. Add comments to revisions that don't meet coding standards
4. Prevent commits to protected branches without approval
5. Assign security tasks to the security team

#### Phabricator vs. Atlassian Tools:

| Feature | Phabricator | Atlassian Tools |
|---------|-------------|-----------------|
| **Deployment** | Self-hosted only | Cloud, server, data center |
| **Pricing** | Free (open-source) | Subscription-based |
| **Integration** | Moderate integration between tools | Strong integration between tools |
| **Customization** | Highly customizable | Customizable with plugins |
| **UI/UX** | Technical, developer-focused | More user-friendly |
| **Community** | Smaller community | Large community and support |
| **Ecosystem** | Limited third-party integrations | Extensive marketplace |
| **All-in-one** | Single integrated platform | Suite of separate tools |

#### Best Practices for Using Phabricator:

1. **Customize for Your Workflow**: Adapt Phabricator to your team's processes
2. **Use Herald Rules**: Automate repetitive tasks with rules
3. **Integrate with CI/CD**: Connect with your build and deployment systems
4. **Define Projects Clearly**: Organize work with a clear project structure
5. **Use Task Relations**: Link related tasks and revisions
6. **Standardize Review Process**: Create templates and guidelines for reviews
7. **Document Usage**: Create documentation for your team's Phabricator usage
8. **Regular Maintenance**: Keep your Phabricator instance updated and optimized

### References

1. Atlassian Documentation: https://www.atlassian.com/software/jira/documentation
2. Atlassian Documentation: https://www.atlassian.com/software/confluence/documentation
3. Atlassian Documentation: https://www.atlassian.com/software/bitbucket/documentation
4. Atlassian Documentation: https://www.atlassian.com/software/crucible/documentation
5. Phabricator Documentation: https://secure.phabricator.com/book/phabricator/
6. Gaikwad, D., & Thakkar, V. (2019). DevOps Tools from Practitioner's Viewpoint. Wiley.

