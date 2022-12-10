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
run command to install dependency packages

```sh
npm install
```

##### Step - 5
run command to start api 

```sh
npm run start
```

##### Step - 6
run command to install dependency packages

```sh
npm install
```
##### Step - 7
run command to run front-end app

```sh
npm run dev
```