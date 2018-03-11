#FRAUD DETECTION
Application to test fraudulent items in a list of orders

PROBLEM:
Code is all contained in the same class and method. Needs refactoring

SOLTUTIONS
- Refactor code to separate concerns
- Create service classes to handle to two main processes (file processing and fraud detection)
- More error handling
- Extra tests for not considered file formats
- Move initial constants to config file
- Separate fraud detection rules to enable easier addition of new rules
- create helpers class for globally usable functions

#Getting Started
Install the dependencies by running `npm install`

#Build and Test
Run the tests using `npm test`

#Linting
If you want, you can lint your code using `npm run lint`