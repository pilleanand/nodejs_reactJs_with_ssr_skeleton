Welcome to SociallyGood.

SG SKELETON PROJECT, a bioler plate code having react 16 set up with SSR and node JS backend set up with mongo DB.

#Project setup
1. Enter into project directory where package.json resides
2. npm install

#Running the SSR front end
1. npm run ssr-start
it will run in the port number 5000
npm run build
2. npm run start OR nodemon or node bin/www OR npm run ssr-start
3. In browser hit http://localhost:5000 -- this is just a static page without API call
4. Hit http://localhost:5000/about -- this is with API call and renders the list of posts on page, I have uded an open API provided by JSON placeholder to print which returns list of posts, ie: https://jsonplaceholder.typicode.com/posts 

#Running the Server
1. Go to en file and change all db configurations
2. npm run server-start or nodemon src/server/apiServer.js 
(for auto restart when something changes use nodemon a global 
it will run in the port number 5001
3. Post method to save the about details: http://localhost:5001/api/about
body: 
{
	"name": "Anand",
  "details": "Software developer"
}
4. Get method to get list of abouts: http://localhost:5001/api/about

#Running both server and client
1. nodemon OR npm run start
