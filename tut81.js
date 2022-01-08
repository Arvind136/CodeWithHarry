//CRUD-creat, read, update, delete

//CREAT:-
// creating database arvindKart
use arvindKart


// inserting data in database arvindKart
db.items.insertOne({ name: "Samsung 4s", price: 30000, rating: 4.3, qty: 432, sold: 42 })

db.items.insertMany([{ name: "Samsung 5s", price: 23000, rating: 4.6, qty: 432, sold: 42 }, { name: "Samsung 4s", price: 30000, rating: 4.3, qty: 432, sold: 42 }, { name: "Samsung 6s", price: 32000, rating: 4.1, qty: 432, sold: 42 }])

db.anotherItems.insertMany([{ name: "Samsung 5s", price: 23000, rating: 4.6, qty: 432, sold: 42 }, { name: "Samsung 4s", price: 30000, rating: 4.3, qty: 432, sold: 42 }, { name: "Samsung 6s", price: 32000, rating: 4.1, qty: 432, sold: 42 }])

//READ:-
//showing data in database arvindKart
db.items.find()

//searching data in mongo db
db.items.find({ name: "Samsung 30s" })
db.items.find({ rating: 4.3 })
db.items.find({ rating: { $gte: 4.3 } }) //greater than and equal to
db.items.find({ rating: { $gt: 4.3 } }) //greater than only
db.items.find({ rating: { $gt: 4.3 } }, { rating: 1, qty: 1 })

//And Operator
db.items.find({ rating: { $gte: 4.3 }, price: { $gte: 30000 } })
db.items.find({ rating: { $gt: 4.3 }, price: { $lt: 30000 } })

//Or Operator
db.items.find({
    $or: [{ rating: { $lt: 4.3 } }, { price: { $gte: 30000 } }]
})

db.items.find({
    $or: [{ rating: { $lt: 4.3 } }, { price: { $gt: 30000 } }]

})

//DELETE:-
//Deleting items from the mongo Database
db.items.deleteOne({ price: 30000 })
db.items.deleteMany({ price: 30000 })


//UPDATE:-
db.items.updateOne({ filter }, { newUpdate })
db.items.updateOne({ name: "Samsung 6s" }, { $set: { price: 1000 } })

db.items.updateMany({ name: "Samsung 6s" }, { $set: { price: 5, rating: 1 } })