# Angular Online Store

This is an Angular CLI project for an online store application. It is deployed on Firebase, and it utilizes Angular localization (i18n) for internationalization.

## Prerequisites

Before running the project, ensure that you have the following prerequisites installed:

1. Node.js and npm: Make sure you have Node.js and npm installed on your system. You can download them from [Node.js official website](https://nodejs.org/).

2. Angular CLI: Install the Angular CLI globally on your system by running the following command:
npm install -g @angular/cli


3. Firebase CLI: You should also have Firebase tools installed globally. If not, you can install it using npm:
npm install -g firebase-tools


## Getting Started

Follow these steps to run the Angular CLI project:

1. Clone the Repository:
git clone https://github.com/naveedaheer/angular-online-store.git
cd angular-online-store


2. Install Dependencies:
npm install


3. Serve the Application Locally:
To run the application locally, execute the following command:
ng serve --configuration=en
This command will start a development server, and you can access the application at `http://localhost:4200/`.


4. Building for Production:
To build the application for production, use the following command:
npm run build
This command will generate a `dist/angular-online-store` directory with the production-ready build.

5. Deploy to Firebase:
After building the application, you can deploy it to Firebase hosting. Ensure you are logged in to Firebase using `firebase login`, then run:
firebase deploy


Firebase will provide you with a hosting URL, which will be something like `https://your-project-name.firebaseapp.com/`. You can access your deployed application using this URL.

6. Access the Deployed Application:
You can access the deployed Angular online store application at the following URL:

[Angular Online Store](https://aheer-online-store.web.app/)


Firebase will provide you with a hosting URL where the application is deployed.

## Running Tests

To run tests for the Angular application, follow these steps:

1. Open a terminal window in the project directory.

2. Run the following command to execute tests:
ng test



## Internationalization (i18n)

The application uses Angular localization (i18n) for internationalization. Translations and language configurations can be found in the codebase.

## Additional Information

For more information about Angular CLI, Firebase, or Angular localization (i18n), refer to their respective documentation:

- [Angular CLI Documentation](https://angular.io/cli)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Angular Localization (i18n)](https://angular.io/guide/i18n)

Feel free to explore and modify the project as needed. Happy coding!













