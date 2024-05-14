This is a Backend for the API gateway microservice that works with Flight booking system using Node JS, made by following some important project management principles. Feel free to change anything.

## Folder structure is mentioned below:

`src` -> Inside the src folder all the source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

### Lets take a look inside the `src` folder

- `config` -> This folder has everything regarding any configurations or setup of a library or module.
  For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner way, this is done in the `server-config.js`. One more example can be to setup a logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> They are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> They are kind of the last middlewares as post them you call your business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

- `repositories` -> This folder contains all the logic using which we interact with the DB by writing queries, all the raw queries or ORM queries will go here.

- `services` -> This contains the buiness logic and interacts with repositories for data from the database.

- `utils` -> This contains helper methods, error classes etc.

### Setup the project

- Download or clone this template from github and open it in a text editor.
- Go inside the folder path and execute the following command:

```
npm install
```

- In the root directory create a `.env` file and add the following env variables

  ```
    PORT=<port number of your choice>
  ```

  example:

  ```
    PORT=3000
  ```

- go inside the src folder and execute the following command:
  ```
    npx sequelize init
  ```
- By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.

- If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc

- To run the server execute below command:

```
npm run dev
```
