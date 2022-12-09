### MSC FULL-STACK APP


##### Step - 1
install latest MongoDB image using docker

using command: 

```sh
docker run -d -p 27017:27017 --name test-mongo mongo:latest
```
##### Step - 2 
cd into msc-api and run command:

```sh
npm run seed
```

this will seed the DB with contact data

##### Step - 3 
we need to create a text index so that our text search can work properly 
in the terminal type mongo to open the mongo shell then run:

```sh
use contact
```
then run command:

```sh
db.contacts.createIndex({ "name": "text", "address": "text", "phoneNumber": "text", "email": "text" });
```

this will generate the index for our collection

##### Step - 4
run command to start the API

```sh
npm run start
```

##### Step - 5
cd into mse-fe and run command

```sh
npm run dev
```

to run front-end app
