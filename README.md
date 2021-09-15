# Thinkful Grad Stories

[Check out the current build!](https://thinkful-grad-jobs.vercel.app/)

## The Mission
Create an application that allows employed Thinkful graduates to relay their career search story to their job searching peers.  

## The Stack
- Javascript
### Frontend
- React.js
- SCSS
- HTML5
- [React Toggle (library)](https://github.com/aaronshaf/react-toggle)
- [Google Maps React (library)](https://github.com/fullstackreact/google-maps-react)
- [React Icons (library)](https://react-icons.github.io/react-icons/)
### Backend
- Node.js
- Express.js
- Knex.js
- Passport.js (authentication)
- Session.js (authentication)
### Databases
- Postgres
- AWS
- Google Cloud Services

## For Contributors:
`git clone https://github.com/llndklzr/thinkful-grad-jobs.git`
`npm install`

This is a _mono repo_. Both the frontend and backend are hosted in this repository.

### Frontend
Everything should be turn key with the exception of the Google Maps API Key. You will need to get [one](https://developers.google.com/maps/documentation/javascript/get-api-key) to play around in your development environment. Create a `.env` file and put the API key in there with the variable name `REACT_APP_GOOGLE_MAPS_API_KEY`
The production environment is already set up with a key so no need to set one up. 