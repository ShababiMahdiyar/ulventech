Project Title: Ulventech word counter.

Project description: This application can get any paragraph from the user (in this case from an API) and show the top 10 used words in that paragraph in a beautiful table. This application is built with the help of Angular and AntDesign. The choice of AntDesign was because the library provides a lot of customizable and pre-made components which suited the prophecy of the application as well as the develepr's sense of design. RxJs has been a huge part of this application to make it easier to compose asynchronous or callback-based code. There has not been a real challenge for me to develop this project as it is not a complex one but I have learned a lot about unit testing in Angular. 

Whtat's included:
Once you run the project you will face a reactive form which validates your input. Want to give it a try? just try putting "Mahdiyar" (Capital M) in the name field and you will get an error. This validation of name is actually just for display purposes but in real industry scenarios can be very useful. The second input prompts you to input an email which has a "@" in it, which after comes a word or an aplphabet. Last but not least, there's a comment input (accepts up to 150 character) which is also for display purpose only and it does have a character counter below it. Once you are good to submit the form, the submit button is enabled and it's all done. Upon modal opening, an API request is made to a fake API fetching a paragraph. In case of successful request, a table of top 10 used words in the paragraph will be shown to you, and in case of unsuccessfulnes you'll be faced an error view with the error indicated below. 

How to run:

#1 Clone the project 
#2 Run "npm install" or "npm i"
#3 Run "ng serve" or "ng s"

Recommendation: It is suggested that you use the latest stable version of Node and angular/cli for better compatibility.


# UlventechTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
