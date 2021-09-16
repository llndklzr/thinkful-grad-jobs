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
#### Google Maps API Key
For the frontend, everything should be turn key with the exception of the Google Maps API Key. You will need to [set one up](https://developers.google.com/maps/documentation/javascript/get-api-key) to play around in your development environment. 

Create a `.env` file and put the API key in there with the variable name `REACT_APP_GOOGLE_MAPS_API_KEY`. REMINDER: add the `.env` file to `.gitignore`.

Example of API key in the `.env` file
```dotenv
  REACT_APP_GOOGLE_MAPS_API_KEY='<your api key>'
```

Example of how API key is pulled into the frontend from the `GoogleApiWrapper.js` component
```javascript
  const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
```


The production environment is already set up with a key so no need to add one. You _only_ need a key if you intend to see what the map looks like in the developer environment. Most work can be completed _without_ a key.

#### Designs

All designs have been created by D.L. Grimes using Figma. Please follow all design standards. Refer to the below links for details.

- [Styles Guide](https://www.figma.com/file/Cy8XgmiuAd3VrPJmtuA21i/Style-Guide?node-id=0%3A1)
- [Final Designs](https://www.figma.com/file/SqiAELQILYs1s7BhVzD75W/Thinkful-Grad-Stories?node-id=119%3A16)

### Backend
The backend follows RESTful practices. 

The API is built with `Express.js`, queries are made with `Knex.js` and the main database is `Postgres`, with the exception of `AWS` for storing files.

The main database (`Postgres`) is made up of 3 different tables: stories, businesses, and graduates.

#### API Endpoints

##### Stories
```https
  GET /stories
```
Returns all stories with their corresponding graduates.

```https
  POST /coming soon
```

##### Businesses
```https
  GET /businesses
```
Returns all businesses by themselves.

```https
  GET /businesses/:businessId/graduates
```
Returns all graduates that work for a particular company.

##### Graduates
```https 
  POST /graduates/register
```
Registers the user into the auth system. More on that later.

```https
  POST /graduates/login
```
Logs the user into the auth system.

```https
  GET /graduates/:graduate_id
```
Returns a particular graduate with their corresponding story and company information. It returns all information related to the graduate.

```https
  GET /graduates
```
Returns all graduates.