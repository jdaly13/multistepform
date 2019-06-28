This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Multi Step form and SHIPPING LABEL MAKER APP

## Entry point index.js in src directory

`npm install`  
`npm start`

## Authors

James Daly

### Structure/Explanation

Conditional Rendering 
If Label is ready we render label if not we render a form wizard  
the Wizard requires a certain number of properties  
Including  
1.takes in a certrain number of steps stored in an array  
2.Wizard also takes in a dummy object which is essentially the template which the user will fill in  
3.Header A component to be rendered inside the Wizard  
4.finally Wizard takes in function which will be invoked once the user confirms all the information  

From here the A Label will be created will the provided information
Each step in an array is a child of the wizard that updates the wizard state through a callback

Steps are stored in shipping-label-maker/steps
Index files creates an array of all the steps  

Added basic validation for form as well

```
reusable partials are stored in core components
component state is stored in wizard container
children presentational features/steps are stored in components
```
