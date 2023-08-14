# Translator-app
A translator made using the NLP Translation API for text translation between several languages. You must have a RapidAPI Authentication Key (inserted at translator.service.ts) in order to use the NLP Translation API. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

# Future Improvements
1. Chinese is currently not implemented due to issues with the NLP API giving different field names for each language and Chinese being split into zh-CN and zh-TW
2. A more fleshed out and colorful appearance could make the translator more visually appealing
3. Due to the NLP API giving the translated text data with different field names for each language, there are pieces of code repeated several times for each
   language which looks messy. Perhaps a different API would allow for cleaner code. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
