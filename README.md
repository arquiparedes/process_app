# Process Control App

## About The Project

With this web app you can control four processes at the same time, registering all relevant information on a Data Base that will help you to be able of keeping this data for future analisys.
This app was develop to be use in a specific type of process, and then modified using generic titles, variable names and functions in order to post on github as a public repository.
If you find any bug, please let me know in order to fix it.

## Built With
This app was created using a PERN stack

* [Postgres](https://postgresql.org/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)

Also use the following packages
* [Bootstrap](https://www.npmjs.com/package/bootstrap)
* [Cors](https://www.npmjs.com/package/cors)
* [Dotenv](https://www.npmjs.com/package/dotenv)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

##### Node.js
You need to have installed **node.js** in your computer if you want to run this app in your computer.
To install node.js follow this [link](https://nodejs.org/en/). If you want to use a package manager follow this [link](https://nodejs.org/es/download/package-manager/).
##### Postgres
Also, you need to install a **Postgres** server in your computer.
You can install Postgres from the following [link](https://www.postgresql.org/).

### Installation
Once you have installed node.js and Postgress server, please follow the following steps:
1. Clone the repository in your computer
   ```sh
   git clone https://github.com/arquiparedes/process_app.git
   ```
2. Install NPM packages in `Front` and `Back` folders
   ```sh
   npm install
   ```
3. Create a data base in Postgress and run the query in the file `app_db.sql` in order to create the table `app_process` and the columns you will need
4. Create a file `.env` in the `Front` folder with the following variable:
* `REACT_APP_PROXY` = `localhost` //This will help you to change the address easily if you want to access it from another computer
5. Create a file `.env` in the `Back` folder with the following variables:
* `APP_DB_USER` = *your postgres user*
* `APP_DB_HOST` = *your postgres host*
* `APP_DB_PASSWORD` = *your postgres password*
* `APP_DB_DB` = *your postgres data base*
* `APP_DB_PORT` = *your postgres port*

## Run the Web App

First, this app is develop to run in a develop enviroment. If you want to run in production, you will need to change some settings.

1. Start your data base server on *Postgress*

2. Open a terminal and go to the `Back` folder, then run the following script:

   ```sh
   node index.js
   ```

   This wills start the backend server. You will see the following message in your terminal *Servidor corriendo en 3001*

3. Open a new terminal and go to the `Front` folder, then run the following script:

   ```sh
   npm start
   ```

   This will start your frontend server and will open your browser with the app interface.
   For more informatio you can see the README file in the `Front` folder.

## Using the Web App

Once you have follow the previous steps you will be able to use the app.

You will see in the screen four processes ready to be started.

Just complete the Process General Information and press `Iniciar Proceso`

In any of the screens you can click on `Resumen de Proceso` and you will see the information that has been register so far.

You can start or finish any process en any time and it will not afect the other processes

**Enjoy the App!!**

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Twitter - [@arquiparedes](https://twitter.com/arquiparedes)

LinkedIn - [Arquimedes Paredes](https://www.linkedin.com/in/arquiparedes/)

Web - [www.arquiparedes.com](https://www.arquiparedes.com)

Project Link: [https://github.com/your_username/repo_name](https://github.com/arquiparedes/process_app.git)