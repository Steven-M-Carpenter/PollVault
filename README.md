# PollVault

### Premise
This is a full stack web application built as a project deliverable as part of the boot camp course I am taking.  The project is a
collection of cumulative learnings throughout the course.  This particular effort was built to showcase the development of a full stack 
application in the Model-View-Controller architecture.  

The application provides a push survey capability where responses are caputred, stored, and reported.  The use case envisioned is a
response to the "second screen" trend in television viewing.  Today, many viewers watch TV with a phone, tablet, or other device in 
front of them.  As a result, a broadcaster is competing for time and must engage the audience differently than they have in the past.
By reaching out to their audience to ask questions, they are allowing interaction and participation instead of just consumption.  The
responses and related demongraphics provide valuable insights to those who want to mine the aggregated data.


### Features
Key fatures of this application include:

* Server-side route handling
* Templated presentation layer
* Data persistence in a relational database
* Application deployed to Heroku hosting service

### Technology
The application made use of the following elements
* Express server 
* Express-Handlebars teamplates
* MySQL database 
* Sequelize Object-Relational Mapper (ORM)
* Socket.IO communication library
* Apexcharts data charting library

### Usage
There are 3 distinct personas for this application
* Publisher - writes the survery question, responses, and initiates the surveys
* Subscriber - connects to the channel and responds to surveys
* Consumer - analyzes the collected data for business insights

To properly experience this application you will need 4 browser windows to be used in the following ways:

##### Window 1 - Publisher
---
* Access the application on Heroku at:  http://pure-plains-52371.herokuapp.com/regAdmin
* Click the button to confirm your intent to be a publisher
* The application will take you to the publisher screen (http://pure-plains-52371.herokuapp.com/publish)

##### Window 2 - Subscriber A
---
* Access the application on Heroku at:  http://pure-plains-52371.herokuapp.com/
* You will be presented with a sample registration screen
* Provide the requested data and click the Submit button
* The application will take you to the subscriber screen (http://pure-plains-52371.herokuapp.com/subscribe)

##### Window 3 - Subscriber B
---
* The purpose of the second subscriber is to demonstrate a multi-user experience
* Complete the steps above for this subscriber as well, varying data as desired

##### Window 1 - Publisher
---
* Type a Yes/No question into the space provided
* Type "Yes" for button 1 text
* Type "No" for button 2 text
* Click Send to initiate the survey

##### Windows 2 & 3 - Subscribers A & B
---
* Review the question prompt sent from the publisher
* Click the button to correspond to your answer Yes, No, or Pass

##### Window 1 - Publisher (optional)
---
* To prevent any late responses, click the Close Poll button

##### Window 4 - Consumer
---
* Access the application on Heroku at:  http://pure-plains-52371.herokuapp.com/reports
* Select the question to report on from the pull-down menu
* Click the generate button to see the output

### Link
The link below will allow you to access the application from your browser:

    http://pure-plains-52371.herokuapp.com/ 

