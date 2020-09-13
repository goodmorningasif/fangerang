# Site Architecture
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
|   |   | - / routes /
|   |   |   | - main
|   |   |   | - section
|   |   |   | - pages
|   |   | - / pages / 
|   |   |   | - utils
|   |   |   | - api
|   |   |   | - / test /
|   |   |   | - / modules /
|   |   |   |   | - views
|   |   |   |   | - view.styles
|   |   | - / common / 
|   |   |   | - / utils /
|   |   |   | - / api /   
/ api /
| - / v1 / 
|   | - auth
|   | - data
/ backend / 
| - / authService /
```

## UI 

### Version 1 
Version 1 of the UI will be a Preact App utilizing Typescript. The ui library will be built using Emotion JS and will have a Storybook. React Router will handle routing. Files will lazy-load.

# Wireframe

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

# Security

# Accessibility

# UI Design + Component Library

# Testing
