### Restaurants Application
A small purely-frontend application done with React that showcases carousel eleents with blurhash images (https://blurha.sh/).

App is running in Heroku at https://restaurant-app-eerojala.herokuapp.com/

### Instructions
#### Installalling and running the app
1. Clone this repository with ```git clone git@github.com:eerojala/Restaurants-App.git``` or download the zip file in the releases
2. After cloning/unzipping the project navigate to it's folder with a command line
3. Run ```npm install``` to install the dependencies
4. Run the app with ```npm start```
5. The app should open up in http://localhost:3000

#### Running the tests
This application has a few cypress tests. To run them, do the following:
1. After installing the application start the app with ```npm start```
2. Open up another command line and navigate to the project folder
3. Run cypress with ```npm run cypress:open``` This will open up the cypress client (it might take nearly half a minute during first startup)
4. Select your preferred browser on the upper right corner
5. Click 'Run 1 integration spec'
6. This will open up a new browser instance and run the test
7. In the browser you can click on the tests in the left panel to see details

The tests are located at cypress/integration/restaurants_app.specs.js on the project folder

### External Libraries used
* brainhubeu/react-carousel (https://github.com/brainhubeu/react-carousel)
* react-blurhash (https://github.com/woltapp/react-blurhash)
* cypress (https://github.com/cypress-io/cypress)

### What did I learn during developing this application
* You can overlay text over images with CSS (see src/css/RestaurantCarousel.css)
* How to use a carousel element in your application
* You can check CSS classes of external components (like the carousel used in this app) from the HTML inspection tool in a browser
* In cypress if you want to search for elements within a specific section you can do it through ```cy.get(id).children().find()``` (see cypress/support/commands.js)

