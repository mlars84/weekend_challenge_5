** ToDo
---
- [X] Initialize project directories, files and dependencies.
- [X] Full MEAN stack back to front set up and initial tests
- [X] Main view with input and submit button
- [X] $http get to OMDB
- [X] response comes back as object and displays immediately
- [] add to favs button (eventually have favs be the second view)
- [] store favs in MongoDB
- [] Two views, one for search and display movie info with input/submit button
- [] HARD Remove movie from DB and favs list




Welcome to your 5th Weekend Challenge!
For this challenge, you will be working with Angular and the OMDB API to build an application that can search movies, and then a user can store their favorites!

Base Mode
Your application will need to be built from the ground up using Mongo, Angular, Node, Express, and Bootstrap. The requirements of the application are:

There should be two views to the application, one side that searches and displays movie information made available from OMDB. This should be accomplished by having an entry field for the search string, then a submit button that sends the information to OMDB.

When the API returns the response, the response should be data bound between an object and the response so that the search information appears as soon as the response returns from the API.

Use the OMDB Search parameter s to bring back more than one title:

http://www.omdbapi.com/?s=<user search string>
You MUST use an Angular service to send the API call ($http).

The information that is returned from the API will be a movie object. You must display some of the movie information on the DOM in a meaningful way. Additionally, you must have an 'add to favorites' button on those results.

When the 'add to favorites' button is clicked, store the favorite in a Mongo Database.

The other view should display the favorite movies selected by the user.

Hard Mode
Add the ability to remove a movie from the Mongo Database, and ensure that the favorites view updates as well.

Pro Mode
Host the application on Heroku and mLabs. No need to do a data dump of an existing database. This isn't something we have covered in class yet, but if you are curious here is a walk through: https://docs.google.com/document/d/1Fz9O6Zv86eM-NARZwQKgVsX_5WNFYMop3TzI9g7LaWc/edit?usp=sharing
