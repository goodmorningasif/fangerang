# Project Fang
Project Fang is a simple web application portfolio. 

The primariy goal is for the application to be a hub to other on-going projects. Each project could be something simple as a calculator to a fully developed native app. Instead of showcasing still images, the links will allow users to interact with the projects directly. Project Fang doesn't need to worry about hosting or facilitating these other projects, just providing easy links to them.

A secondary goal is to create a Content Management System using frontend JS frameworks and backend technologies. The different parts of the application, such as the UI, application servers, API and the backend, should be structured in a modular manner so that any piece can be replaced with a different iteration using a different framework or architectural guidelines.

The final goal is to experiment with the UI. The project should have it's own component library and storybook. Eventually the user should be able to toggle between different user experiences. The inital iteration will be minimalist but the UI should push the boundaries of acceptable web design.

## Site Architecture
```
/ ui /
| -  / v1 /
|   | - / ui-library /
|   |   | - / layout /
|   |   | - / typography /         
|   |   | - / storybook /
|   | - / app /
|   |   | - App     
|   |   | - index     
|   |   | - / pages / 
|   |   |   | - utils
|   |   |   | - api
|   |   |   | - / test /
|   |   |   | - / modules /
|   |   |   |   | - views
|   |   | - / common / 
|   |   |   | - / utils /
|   |   |   | - / api /   
/ api /
   | - / v1 / 
   |   | - Promises / Axios  v1
/ backend / 
```

### UI 

#### V1 
Version 1 of the UI will be a React App.

## Wireframe

```
/ Home Page /
   | - Intro to Fang
   | - Projects List
   |   | - / Single Project /
   |   |   | - Project Description
   |   |   | - Image
   |   |   | - Link to Project
   | - Page Navigation
   |   | - / About / 
   |   |   | - Author bio
   |   |   | - Resume
   |   |   | - Social Media/Contact Links
   | - Footer 
   |   | - Social Media/Contact Links
   |   | - media
```

## Security

## Accessibility

## UI Design + Component Library

## Testing
