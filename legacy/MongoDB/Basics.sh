# init mongo from console
mongod --dbpath D:\data\db

# npm install
npm install mongoose@4.13.8 --save

# Once initialized you can accesswith mongo comand
mongo
# see databases
show dbs

# use/create db
use $dbName

# insert
db.dogs.insert({name: "Rusty", breed: "Mutt"})

# see tables
show collections

# find
db.dogs.find() # SELECT * FROM dogs
db.dogs.find({name: "Rusty"}) # SELECT * FROM dogs WHERE NAME LIKE "%Rusty%"
# update
  # override all and put only this value
  db.dogs.update({name: "Chuchu"}, {breed: "negrita"})

  # override all and put only this value
  db.dogs.update({breed: "negrita"}, {name: "Chuchu", breed: "guau"})

  # override only specidifed values
  db.dogs.update({name: "Chuchu"}, {$set: {name: "Chuchu", isCute: "Yes"}})

# remove
db.dogs.remove() # destroy alll!!!
db.dogs.remove({breed: "Mutt"}).limit(2) # destroy 2 records that match criteria
