FROM mongo:latest
COPY /seed.contact.json ./seed.contact.json
CMD ["mongoimport --host msc-mongo:27017 --db contact --collection contacts --drop --file /seed.contact.json --jsonArray"]
