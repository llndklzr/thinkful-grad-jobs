# Thinkful Grad Stories

[Check out the current build!](https://thinkful-grad-jobs.vercel.app/)

## The Mission
Create an application that allows employed Thinkful graduates to relay their career search story to their job searching peers.  

## The Main Contributors
- [Leland Klauzer - Fullstack Dev](https://github.com/llndklzr)
- [Caleb Gekeler - Fullstack Dev](https://github.com/calebgekeler)
- [D.L. Grimes - UX/UI Designer](https://www.linkedin.com/in/d-l-grimes/)


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

## For Contributors
```bash
  git clone https://github.com/llndklzr/thinkful-grad-jobs.git
```

```bash
  npm install
```

This is a _mono repo_. Both the frontend and backend are hosted in this repository.

### Frontend
For the frontend, everything should be turn key with the exception of the Google Maps API Key. You will need to [set one up](https://developers.google.com/maps/documentation/javascript/get-api-key) to play around in your development environment. 

Create a `.env` file and put the API key in there with the variable name `REACT_APP_GOOGLE_MAPS_API_KEY`. REMINDER: add the `.env` file to `.gitignore`.

[Example of .env file]
```env
  REACT_APP_GOOGLE_MAPS_API_KEY='<your url>'
```
![Google Maps API env Example](https://raw.githubusercontent.com/llndklzr/thinkful-grad-jobs/main/screenshots/google-maps-env-example.png)

[Example of how API key is pulled into the frontend from the GoogleApiWrapper.js component]
![Google Maps API Example](https://raw.githubusercontent.com/llndklzr/thinkful-grad-jobs/main/screenshots/google-maps-api-key-example.png)


The production environment is already set up with a key so no need to add one. You _only_ need a key if you intend to see what the map looks like in the dev environment. 

#### Designs

All designs have been create by D.L. Grimes using Figma. Please follow all design standards. Refer to the below links for details.

- [Styles Guide](https://www.figma.com/file/Cy8XgmiuAd3VrPJmtuA21i/Style-Guide?node-id=0%3A1)
- [Final Designs](https://www.figma.com/file/SqiAELQILYs1s7BhVzD75W/Thinkful-Grad-Stories?node-id=119%3A16)
