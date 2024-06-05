# RedLight-internship-project

Running the project:

- Install all the needed packages on the right folder (shown below this README).
- Have mysql installed.
- In the mysql workbench create a schema called francesinhasdb.
- In the config folder (server/config), modify config.json so that it has your username and password in "development".
- In two different terminals open server and client and run 'npm start'

Packages to install:

- server folder:
  npm init
  npm install express cors mysql2
  npm install nodemon
  npm install sequelize
  npm install sequelize-cli
  npm install cors
- client folder:
  npc create-react-app .
  npm install axios
  npm install react-router-dom
  npm install yup

Development explanation:

First I started with the backend, programming the HTTP requests needed for the project, using Imsonia to test them.
Afterwards I did the frontend using react, creating pages to call the HTTP requests.
For the frontend I used express and for the backend I used react.
To make the project easier, in the backend I used sequelize which is an ORM to make it easy to deal with the database. I also used nodemon to refresh every time I save. In the frontend I used yup for validation together with Formik to make the Forms easier to deal with as it has a validation schema implemented that works well with yup.
Sadly, due to having other projets and exams, I couldn't finish all that I had planned for the project, therefore there are some parts that are incomplete. An example of this is the fact that I was planning to add photos to restaurants and francesinhas, even having the 'template' for them ready in the frontend, and I was also planning on making it responsive.
