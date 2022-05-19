<p align="center">
  <img src="https://" alt="Logo" width="150" height="150">
  <h1 align="center" >NIFTY Project</h1>
</p>

This project proposes a music web platform based on Spotify/SoundCloud.
Developing a client-server system, employing NodeJS, Express, MongoDB, Firebase
and Cloudinary for the back-end implementation, and ReactJS + Redux for the
front-end.

> You can see deployed our application here [link](https://.netlify.app/)

## Why Nifty Name🚀

Nifty is a adjective that means attractive or stylish. Also can difine as particularly good, skilful or effective.
We tried to find a word or adjective that would fit our idea of ​​an online platform in addition to having a powerful brand name for the market.
And we believe that NIFTY was closer to the word we needed for all our values

## Start as User🚀

To start as a user you just have to go to the application link and register. It is totally free and you can access all the songs that are in the app in addition to uploading your own. You have more information about the procedure in the entry points section.

## Start as Artist🚀

It is important to emphasize that only artists can upload their songs to the application. For that the user must go to the account section and become an artist from there

## Start as Developer🚀

### Requirements 📋

_You need to install nodejs_

Go to [NodeJs web page](https://nodejs.org/es/) download and install the
program.

_Then you have to install yarn_

```
npm install --global yarn
```

_You need to install Docker_

[Docker](https://www.docker.com/products/docker-desktop)

_When you have installed this two programs you need to create acounts in:_

- [Firebase](https://firebase.google.com/)
- [MongoDB Atlas](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)

### Installation 🔧

_First clone the repository_

```
git clone https://github.com/ibaiway/nifty-frontend
git clone https://github.com/ibaiway/nifty-backend
git clone https://github.com/ibaiway/nifty-stats-api
```

_Then run yarn install in the base folder_

```
yarn install
```

_When you have all the dependencies installed you need to create two .env files,
one in web folder, and the other in api folder_

_The web .env file need to contain the next variables:_

```
REACT_APP_API_BASE_URL= http://localhost:4000
REACT_APP_API_KEY = Your FireBase Api key
REACT_APP_AUTH_DOMAIN = Your FireBase auth domain
REACT_APP_PROJECT_ID = Your FireBase project id
REACT_APP_STORAGE_BUCKET = Your FireBase storage bucket
REACT_APP_MESSAGING_SENDER_ID = Your FireBase messaging sender id
REACT_APP_APP_ID = Your FireBase app id
REACT_APP_CLOUDINARY_IMG_URL = Your Cloudinary img url
REACT_APP_CLOUDINARY_PRESET_PROFILE_IMG = A Cloudinary preset to upload profile images
REACT_APP_CLOUDINARY_PRESET_SONGS = A Cloudinary preset to upload songs
REACT_APP_CLOUDINARY_PRESET_COVERS = A Cloudinary preset to upload covers images
REACT_APP_CLOUDINARY_PRESET_PLAYLIST = A Cloudinary preset to upload playlist images
REACT_APP_RECAPTCHA_WEB_KEY = Your Google ReCaptcha web key
```

_The api .env file need to contain the next variables:_

```
FB_CERT_TYPE= Your FireBase cert type
FB_CERT_PROJECT_ID= Your FireBase project id
FB_CERT_PRIVATE_KEY_ID= Your FireBase private key id
FB_CERT_PRIVATE_KEY= Your FireBase private key
FB_CERT_CLIENT_EMAIL= Your FireBase client email
FB_CERT_CLIENT_ID= Your FireBase client id
FB_CERT_AUTH_URI= Your FireBase Auth uri
FB_CERT_TOKEN_URI= Your FireBase token uri
FB_CERT_AUTH_PROVIDER_X_509_CERT_URL= Your FireBase cert auth provider x 509 cert url
FB_CERT_CLIENT_X_509_CERT_URL= Your FireBase cert client x 509 cert url
MONGO_DB_URL_PRODUCTION= Your MongoDB Atlas connection url for producction
MONGO_DB_URL_DEVELOPMENT= Your MongoDB Atlas connection url for development
MONGO_DB_URL_TEST= Your MongoDB Atlas connection url for test

```

### Client-Side 🖥

For the front end of this project we have used React framework. We have created several component elements for every piece of code that should be reusable on the app. Then, we have created all the pages that should be rendered on the browser and within we applied its components and logic. To make the calls to the api, we have created an _api_ folder with all of the routes we need to call from the app. We have used Redux tool kit to improve the data flow that we needed to be consumed at several places of the website. As a third party services we have used firebase to create a safe authentication of the app. We implemented the necessary tests to assure that the code was running properly, you will find them at the _test_ folder.
You have more information about the design process in the atomic design section.

### Server-Side 🔐

We have divided the back end of our app into two sides. The main reason of this was to put in practice two different back end languages (Javascript and PHP). And also in this way have the structure of the api and the statistics separated.

#### NodeJS

This back end side is our main API. Here we receive most of the requests that are sent by the front end. This API has the core functionalities of the back end such as the authentication, the database management and the use of other third party services as _cloudinary_. This API also interacts with the other side of our back end.

#### PHP Laravel

This is our secondary API. It was created to manage all of the app statistics. The main purpose of our application is not depending on this, but it is very useful to manage how our app is being used.

## Deployment 🛫

For the deploy of our application we have used [Heroku](www.heroku.com) for the back end and [Netlify](www.netlify.com) for our front end.

During the development phase we implemented CI/CD on development branches.

# 🧭 App navigation

## Entry points 🏁

Nifty entry point is a [sign in](https://.com/sign-in) view from where the user is either able to log into the application or [sign up](https://.com/sign-up) creating a new user. Both sign in and sign up forms allow the user to register to Nifty manually or using Google's Firebase allowing the user to select which account to use.

## Dashboard 📈

Nifty home page (or dashboard) is the main view of the application, meaning that all its content is structured around what is displayed here.

![Mockup-logo](./documentation/)
PICTURE DASH

The main purpose of Nifty home page is to show a summary of the most popular content in its database, on the one hand, and a summary of the current user's content, on the other. Both cases show visual blocks containing the top content in each case and a link to see a more detailed version (see below).

![Mockup-logo](./)
PICTURE SEARCH

In this view, Nifty also allows the user to search amongst anything that is stored in its database. This means, submitting the text searched in the search bar will relocate the application to another page with a detailed result of what the user has searched for (songs, playlists, artists or users).

## Content creation & visualization 🎧

The main purpose of Nifty is to upload, share and stream music between users & artist. Because of this, the application has several ways of dealing with the core content of the application: songs. Using Nifty, the artist is able to upload songs, place it inside a playlists… Tracks and playlists can be both created and edited and all of the forms used to do so are pretty similar. On the right in the aside you will find all the accesses of the application to be able to create and consume music

![Mockup-logo](./)

### Tracks

Either going to _My songs_ or to the contextual menu inside the header, the user can choose to **upload** a song. The drag and drop area on the left accepts audio files while, on the right, the user can specify its _title_, _artist_, _genre_ and _album_ . This form is used as well to **edit** the song. Tracks can be seen displayed in albums, playlists and in summary blocks. The also known as track card, allows the user to like a track, see its details or edit it via a context menu.

### Playlists

Of course, playlists are a list of tracks! Nifty doesn't differ much from other streaming applications in this sense. Inside the application the user can **create playlists** going to _My playlists_. The form allows the user to set a background image for that playlist. The form, allows the user specify the name and optional description. There's also the possibility of making it public or private. All of these details can be edited as well. on the right, both the album and playlist views display its title, description, unfollow/follow button & a play button. On the bottom, there's a list that can be edited by right clicking the element and viewing the options.

## Artists & User views 👩‍💻

![Mockup-logo](./documentation/)

One of the main purposes of Nifty is to discover and connect with other artists & users. This means that, there's not only a personal view with a summary of what the user has created, liked and followed so far but there's also the possibility to go to other artists & user's profile page. Likewise in the home page, most of the content blocks allow to redirect the artist to a more detailed view with all songs, albums or playlists created and liked/followed by the user.

![Mockup-logo](./documentation/)

## Queue 👣

The queue is a global state in the application. The user can create a queue that will be enlarged every time the user adds a new song to the queue via the track card contextual menu. The view of this queue is similar to a usual playlist but the user can delete the whole list of tracks or close the view and go back to home. To access it you can access it from the general player.

## Account management 🧩

Nifty current user can access a set of more detailed views of the account by clicking at settings _account _ placed in the aside section.

![Mockup-logo](./)
ACCOUNT DETAILS PICTURE

This view includes a general user account form with all the editable fields the refering to the user. The user can become an artist in this section. At that time Nifty will ask you to register an artist name. It is important to become an artist only then it is possible to upload songs to the application

Finally, the user can access a page to update its password inside the _password update_ view. Related to this, if a user tries to log into Nifty but does not remember the password, there's a link to the reset password view as well in the sign in page.

# 🗺 Project Journey

## Team Objectives 🎯

- Clean & efficient Code
- Comfortable user experience
- API architecture with the easiest flow for the frontend
- Safe server side
- Transparent and fluid team communication
- Collaborative work

## Organization 📆

In order to achieve all of our goals we have implemented the Scrum Agile Methodology. We divided all the process into separated one week Sprints, everyone of them with their own goals. To manage those sprints we set daily, sprint plannings and review and sprint retrospective meetings. We used Github Projects to divide our sprints, issues and tasks on boards using the Kanban structure. Github projects allowed us to automate and connect those issues with the branches of our repository. We also implemented a code review system in order to get all the team connected with all parts of the project.

![enter image description here](./)

PICTURE GITHUB PROJECT

## Team Convention 🤝

Before starting the code development we created some team conventions in order to establish the best possible work flow. This way, everyone could develop some code and know, at every moment, how they should write the CSS Classes, Id's, React Components, etc. We also made rules for the sructure so we could find a concrete element in case of need.
There was also a brainstorm of the objectives that each one wanted to have in the application and how they wanted the final result to be.

## Atomic Design Structure 🧩

https://andela.com/wp-content/uploads/2019/10/Screenshot-2019-10-25-at-2.31.27-PM.png

Atomic design is atoms, molecules, organisms, templates, and pages concurrently working together to create effective interface design systems.

Atoms are the smallest possible components, such as buttons, titles, inputs, text. Atoms of our interfaces serve as the foundational building blocks of our components and can’t be broken down any further without ceasing to be functional. Molecules as they are named consist of two or more atoms, molecules are relatively simple groups of UI elements functioning together as a unit. Examples are A Textfield comprising of an HTML textInput, a label, and an error message or a search Box comprising of an HTML TextInput and a Button. Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.

Templates place components within a layout and demonstrate the design’s underlying content structure. They are basically a skeletal structure of what the page would look like without the components of the page. Pages are specific instances of templates that show what a UI looks like with real representative content in place. Templates and Pages (pages are just instances of templates) also contain organisms, molecules, and atoms. The joining together of these smaller components makes up our user interfaces in our applications.

# Benefits

Components can be developed separately from the application, tested and viewed on tools like a style guide before importing them into your application. This also means there is no over-reliance on back-end application logic for starting front-end development.

Once a set of patterns has been established, we can have a faster build process, with more flexibility in case a change needs to be made to the designs. Designs can be more consistent since we are re-using a lot of existing components.

This pattern also helps us manage our CSS a lot better since our CSS is tied to specific components. So depending on the architecture of your application you should only render the CSS utilized by the components rendered.

# Cons

Media queries do become a bit harder as when components in isolation you have no way to determine the size of parent containers. Components have no knowledge of their width so resizes happen in response to changes to the actual page sizes.

This solution can be remedied by introducing layout components that would surround your components and resize them accordingly. These layout components would implement CSS layout properties like flex, grid, etc.

## Design 🛠️

All design is built from scratch. We have designed a figma to structure all the views, taking inspirations that will motivate us for the application. No design tools such as bootstrap or material ui have been used. And together with atomic design and SASS, the entire application has been created.

## Build with 🛠️

# 🕵️‍♂️ Resources

## Main resources 🧬

- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [Cloudinary](https://cloudinary.com/)
- [Docker](https://www.docker.com/)
- [Eslint](https://eslint.org/)
- [Express](https://expressjs.com/)
- [Firebase](https://firebase.google.com/)
- [Jest](https://jestjs.io/)
- [Laravel](https://laravel.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [mySQL](https://www.mysql.com/)
- [Node JS](https://nodejs.org/)
- [Prettier](https://prettier.io/)
- [React](https://es.reactjs.org/)
- [React Redux](https://es.redux.js.org/)
- [React Router](https://github.com/remix-run/react-router)
- [SASS](https://sass-lang.com/)
- [PostMan](https://www.postman.com/)

## Support libraries 📚

- [Formik](https://github.com/formium/formik)
- [Framer-motion](https://www.framer.com/motion/)
- [Husky](github.com/typicode/husky)
- [Helmet](github.com/helmetjs/helmet)
- [Morgan](https://github.com/expressjs/morgan)
- [Nodemon](https://nodemon.io/)
- [Node Cron](https://github.com/node-cron/node-cron)
- [React-toastify](https://github.com/fkhadra/react-toastify)
- [React-dropzone](https://react-dropzone.js.org/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [React-device-detect](https://github.com/duskload/react-device-detect)
- [React Alice Carousel](https://github.com/maxmarinich/react-alice-carousel)
- [React-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars)
- [React-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- [Yup](https://github.com/jquense/yup)

## Test structure 🦴

Jest is a delightful JavaScript Testing Framework with a focus on simplicity. We have implemented jest to do the unit tests.

We have also implemented cypres for integration tests & end to end points

## Quality test 🦴

In addition, we have used two external websites where they analyze the quality of the code to see in which sections we could improve the code made and the results have been the following.

# Contributing 🖇️

If you want to contribute, please fork the repository, create a new branch whit
your contribution, and push the branch as a pull requests.

# Contributors ✨
