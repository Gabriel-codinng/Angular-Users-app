# Crud-Users Firebase + Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

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

## AngularFire

La librería oficial de Angular para Firebase.

Pero ante [logeate en la terminal a firebase](https://stackoverflow.com/questions/71127971/firebase-auth-asking-for-authorization-code-during-installation)

```bash
ng add @angular/fire
```

## src/app/commons

**Commons** albergará todos aquellos elementos que necesitamos compartir entre los componentes para su reutilización: interfaces, models, components genéricos.

## src/app/pages

**pages** almacenaremos cada una de las páginas de la aplicación.