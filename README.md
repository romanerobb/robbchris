# About

This is the repository for the starter project created by Romane Orlando Robb.

# Tech Stack

- React (npx create-react-app)
- Axios (npm install axios)
- React Router (npm install react-router-dom)
- Material UI (npm install @mui/material)
- 

# Documentation

## Deploying to Github Pages (2024)

### Add the following to package.json:

#### Add to line 2

"homepage": "https://romanerobb.github.io/robbchris/",

#### Add to scripts:

"predeploy": "npm run build",

"deploy": "gh-pages -d build"

#### And then run the following command:

npm run deploy