# riskField

For visualizing risk to facilitate better decisions. 

This app includes seismic collapse data for every California hospital building,
along with a script for inserting that data from a csv file into a MySQL database.
That data includes collapse probabilities, and this app visualizes those
probabilities in a 'frequency format', which in many cases facilitates better
understanding of what the real probabilities are over a numerical format (eg, '80
percent' or '.8 probability').  

The app also allows users to put in any probability and have it visualized, or to
visualize a random probability in order to practice guessing probabilities from
frequency data. Hover over one of the generated dots to get the numerical
information. 

## Usage 

To install, first clone the repo. Then, you have to get the csv data into a data
MySQL database called 'Risks'. To do this, there is a script included in
`server/db/csvToDb.js`. To run it, simply open up a local MySQL server and run 
```
node csvToDb.js
```
from the directory where the file is located. Make sure you already have Sequelize
installed, which you will if you've already run 
```
npm install
```
from the project root. Then, also from project root, run 
```
npm start
```
which will start the Node server (using Nodemon, which may need to be installed
globally). Then navigate your browser to `localhost:3000` and use the app. 
