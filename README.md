# Project-3---FitHub
FitHub
Take care of all your class tracking needs with our new app, FITHUB! Manage your entire workout schedule seamlessly to ensure that you never miss a class. Our app enables users to add all of their workout classes easily, as well as review them with a few simple clicks! Hesitant about trying a new class for the first time? Hear what other users have to say in the reviews section. What are you waiting for, start using FitHub now!
--insert photos here after final product--
Request Methods:
| Method | URL                          | Description                                              |
|--------|------------------------------|----------------------------------------------------------|
| GET    | /api/class                   | Retrieve all classes.                                   |
| GET    | /api/class/:id               | Retrieve class with specific id and reviews for that class. |
| POST   | /api/class/:id/review        | Add review to class with specific id.                   |
| PUT    | /api/class/:id/review/:reviewId | Update the review with specific id in class with specific id. |
| DELETE | /api/class/:id/review/:reviewId | Delete the review with specific review id in class with specific id. |
| GET    | /api/reservation             | Retrieve all reservations.                              |
| POST   | /api/reservation             | Add reservation.                                        |
| DELETE | /api/reservation/:id         | Delete the reservation with specific id.                |
Technologies Used:
HTML <br/>
JavaScript <br/>
MongoDB <br/>
Mongoose <br/>
Express.js <br/>
Node.js <br/>
CORS <br/>
JWT/Bcyprt<br/>
Resources:
Lecture Notes <br/>
Stack Overflow <br/>
ChatGpt <br/>
Click to view FitHub:
--insert deployed backend Heroku link here--
https://trello.com/b/nPVrBjKJ/project-3
Next Steps: 
~ Incorporate ClassPass API into our application.
~ Add an administrator role. ?
~