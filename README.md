# How to use TrackA49er
1) Ensure mysql connection password is "Root" and username is "Root"

2) Create MYSQL database for TrackA49er using attached scripts. Name database “taf”

3) Open the “Tracka49er” file in intellij. Navigate to the “application.properties” file. Ensure the username and password is set to root OR set to the username and password of your mysql database. 

If an error message is displayed as followed,
“Unable to create requested service [org.hibernate.engine.jdbc.env.spi.JdbcEnvironment]”

Then change the username and password of mysql to root and root.

Also ensure your mysql url to the database created earlier is set to “Spring.datasource.url.” The format is as followed,

jdbc:mysql://localhost:<port number mysql is running on>/<database created name”

Mysql default port is 3306.

Create database using “taf” name;

<img width="474" alt="mm1" src="https://user-images.githubusercontent.com/60199544/167233143-f91d3891-d848-400a-b1bf-40c0f9fddb70.png">

4) Run program in intellij. 

5) In a new window, open “Tracka49er3” in intellij OR visual studio.

6) Open “Tracka49er” of Tracka49er3 in a terminal window

<img width="954" alt="mm2" src="https://user-images.githubusercontent.com/60199544/167233148-7c4229b3-9d93-4dce-b446-ff6607f4cf58.png">

Run the following commands:
npm install -S react-router-dom

Npm install

Npm start

Npm i axios

7) The application should now open in a web browser. 
