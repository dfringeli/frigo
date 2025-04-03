# frigo

Manage your food in your frigo

## Functional Requirements

With the application frigo, a user can do the following:

### 1. Managing

A user can create freezer, called frigo. A freezer have a name and a description.

For a freezer, a user can manage the food, which is inside the freezer. A food has a name, description, weight, weight unit, date of when the food was put in the frigo, a time span, how long the food is fine in the freezer, meaning: The date of when the food was put in plus the time span of how long the food is fine results in the date, when a food is keepable, resp. outdated.

The application must support multiple weight units (e.g., grams, kilograms, pounds). Additionally, the application should provide a feature to convert between these units for convenience.

Managing food meaning:

 - create a food for a freezer
 - change the properties of a food
 - delete a food, means the food was taken out from the freezer

 For sure, a user can view/read the food a freezer.

### 2. Sharing

A user, which created a freezer is the owner of the freezer. A owner can inviate multiple other users and gave them the permission:
 - for just viewing
 - for viewing and managing
 - for being the owner as well

### 3. Notifications

If a food in the freezer gets outdated, every user who has access to a freezer will receive a notification 7 days before the food becomes outdated.

Notification ways:
 - e-mail
 - push notification on the mobile phone

### 2. Sharing

A user, which created a freezer is the owner of the freezer. A owner can invite multiple other users and give them the permission:
 - for just viewing
 - for viewing and managing
 - for being the owner as well

The owner can change the permissions of users who have access to their freezer at any time.

A maximum of 5 users (including the owner) can have access to a single freezer. A user can define their preferred notification way. The default is e-mail.

### 4. Landing Page

If a user goes to the app (domain: https://frigo.ch) using a web browser, the user will see a landing page.

There a user can:
 - Login and sign up, if they do not yet have an account.
 - Logout and get redirected to the landing page, if already logged in.
 - Access a FAQ section to find answers to common questions about the application.

## Quality Requirement

### Software architecture specific requirements

The application is a ecosystem of:
 - a website (desktop and mobile) called app
 - a server component called api
 - a database

Folder structure:
frigo/
├── docs/
├── app/
├── api/
├── deployment/
└── readme.md

As source control managment a git repository is used. If no git repo exists yet, create a local one.

### Technologies

The website, called app, will be developed with the newest version of angular.

The website must be a progressive web app (PWA), that means a user can visit the website and gets a notification to "install" the website as a mobile phone app. The PWA should be able to create the notifications on the mobile phone, if a food gets outdated. The app must use the CSS framework Bulma.

The PWA requires an active internet connection to function. If a user does not have an internet connection, a message should be displayed informing them that the app requires connectivity.

The server component, called api, will be developed with the newest version of Java and Spring Boot. The api must be documented using OpenAPI Specification version 3.1.

For persisting storing the data, a MariaDB (relational database) will be used.

The database must support version tracking for changes made to food items. This includes tracking updates to properties such as name, description, weight, weight unit, and dates. Versioning is not required for changes made to freezers.

### Deployment

The app, the api and database will be deployed on the Amazon Cloud AWS.

It will exist two ecosystems of the application, meaning two different stages:

1. Production Stage
2. Testing Stage

#### Production Stage

Domain:
 - The domain of the app is https://frigo.ch
 - The domain of the api is https://api.frigo.ch
 
 A deployment to the production stage starts automatically if a new commit on the git branch "main" is pushed. Before deployment, automated unit and integration tests for the app and api must be executed. If any tests fail, the deployment must be aborted.
 
#### Testing Stage

Domain:
 - The domain of the app is https://test.frigo.ch
 - The domain of the api is https://api.test.frigo.ch

 A deployment to the testing stage starts automatically if a new commit on the git branch "dev" is pushed. Before deployment, automated unit and integration tests for the app and api must be executed. If any tests fail, the deployment must be aborted.

 ### Security

 The app and the api must have a valid SSL-certificate from Let's Encrypt.

 For authentication, users will log in using a single password. Two-factor authentication (2FA) is not required.

 ### Authentication and Authorization

 For authentication and authorization the AWS service called "AWS Identity Services" must be used.

 There, the permissions of a user realted to a freezer must be managed, if that is possible. If not, then the permission are managed by the database itself.

### Development

As a developer of the application frigo, I want a local stage to run and test the full application, meaning app, api, and database. Therefore, create a VS Code devcontainer.

The devcontainer must include the following tools:
- **For Angular**:
  - Debugging tools (e.g., Chrome Debugger for VS Code)
  - Linting tools (e.g., ESLint)
  - Testing tools (e.g., Karma, Jasmine)

- **For Java**:
  - Debugging tools (e.g., Java Debugger for VS Code)
  - Linting tools (e.g., Checkstyle, SpotBugs)
  - Testing tools (e.g., JUnit, Mockito)

Additionally, the devcontainer should include:
- Node.js and npm for Angular development
- Java Development Kit (JDK) for the API
- MariaDB for local database testing

### Accessibility

The app must meet the Web Content Accessibility Guidelines (WCAG) 2.1 standard to ensure usability for all users, including those with disabilities. This includes providing proper contrast ratios, keyboard navigation, and support for screen readers.

## Developer Setup Instructions

### Prerequisites
Before starting, ensure you have the following installed on your system:
1. **Docker** (for running the devcontainer)
2. **Visual Studio Code** with the **Dev Containers** extension installed
3. **Git** (for version control)

---

### Step 1: Clone the Repository
Clone the project repository to your local machine:
```bash
git clone <repository-url>
cd frigo
```

### Step 2: Open the Project in VS Code
Open the project folder in Visual Studio Code:
```bash
code
```

### Step 3: Start the Devcontainer
Open the Command Palette in VS Code (Ctrl+Shift+P).
Search for and select Dev Containers: Reopen in Container.
VS Code will build and start the devcontainer with all required tools and dependencies.

### Step 4: Install Dependencies
Once the devcontainer is running, install the dependencies for both the frontend and backend:

Frontend (Angular):
```bash
cd app
npm install
```

Backend (Java Spring Boot):
```bash
cd api
./mvnw clean install
```

### Step 5: Run the Application
Frontend (Angular):
```bash
cd app
npm start
```

The Angular app will be available at http://localhost:4200.

Backend (Java Spring Boot):
```bash
cd api
./mvnw spring-boot:run
```

The API will be available at http://localhost:8080.

### Step 6: Run the Database
The MariaDB database is included in the devcontainer. It will start automatically when the devcontainer is launched. Use the following credentials to connect:

 - Host: localhost
 - Port: 3306
 - Username: root
 - Password: password (or update as needed in the configuration)

### Step 7: Run Tests
Frontend Tests:
```bash
cd app
npm test
```
Backend Tests:
```bash
cd api
./mvnw test
```

### Step 8: Debugging
 - Frontend Debugging: Use the Chrome Debugger extension in VS Code. Start the app and attach the debugger.
 - Backend Debugging: Use the Java Debugger extension in VS Code. Set breakpoints in the code and start the Spring Boot app in debug mode:
 ```bash
 ./mvnw spring-boot:run -Dspring-boot.run.fork=false
 ```
### Step 9: Linting
Frontend Linting:
```bash
cd app
npm run lint
```
Backend Linting:
```bash
cd api
./mvnw checkstyle:check
```

### Step 10: Deployment Pipelines
The deployment pipelines are defined in the deployment folder. These are placeholders and require AWS credentials to be configured before deployment. For now, you can test the pipelines locally using GitHub Actions or similar CI/CD tools.
