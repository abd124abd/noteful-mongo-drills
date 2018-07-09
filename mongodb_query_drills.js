use noteful

// 1. Write a MongoDB query to display all the documents in the collection notes.
db.notes.find();

// 2. Write a MongoDB query to display all the documents in the collection notes and format the results to be 'pretty'.
db.notes.find().pretty();

// 3. Write a MongoDB query to display the fields title and content for all the documents in the collection notes.
db.notes.find({}, {"title": 1, "content":, 1});

// 4. Write a MongoDB query to display the fields title and content but exclude the field _id for all the documents in the collection notes.
db.notes.find({}, {"title": 1, "content": 1, "_id": 0});

// 5. Write a MongoDB query to display only the title field for all the documents in the collection notes and sort the results by _id in descending order.
db.notes.find({}, {"title": 1, "content": 0, "_id": 0}).sort({"_id": 1});

// 6. Write a MongoDB query to display all the documents from the collection notes which contain the title '5 life lessons learned from cats'.
db.notes.find({"title": "5 life lessons learned from cats"});

// 7. Write a MongoDB query to display the first 5 documents from the collection notes.
db.notes.find().limit(5);

// 8. Write a MongoDB query to display the next 5 documents from the collection notes after skipping the first 5.
db.notes.find().skip(5).limit(5);

// 9. Write a MongoDB query to display the total number of documents in the collection notes.
db.notes.count();

// 10.  Write a MongoDB query to display the documents from the collection notes which have an _id that is greater than "000000000000000000000007".
db.notes.find({"_id": {$gt:"000000000000000000000007"}});

// 11.  Write a MongoDB query to display the documents from the collection notes which have an _id which is greater than or equal to "000000000000000000000009" but less than or equal to "000000000000000000000017".
db.notes.find({"_id": {$gte: "000000000000000000000009", $lte: "000000000000000000000017"}});

// 12. Write a MongoDB query to display the documents from the collection notes which have an _id which is less than or equal to "000000000000000000000007".
db.notes.find({"_id": {$lte: "000000000000000000000007"}});

// 13.  Write a MongoDB query to display only one document from the collection notes.
db.notes.findOne();

// 14.  Write a MongoDB query to display only the title of one document from the collection notes (_id can be included).
db.notes.findOne({}, {"title":1});

// 15.  Write a MongoDB query to display only the title of one document from the collection notes (_id excluded).
db.notes.findOne({}, {"title": 1, "_id": 0})

// 16. Write a MongoDB query to insert one document into the collection notes.  The title and content fields can be whatever you like.
db.notes.insertOne({"title":'11 reasons why cats sleep all day and stay up all night', "content":'lorem ipsum...'});

// 17. Write a MongoDB query to insert two note documents into the collection notes.  The title and content fields can be whatever you like.
db.notes.insertMany([{"title":'make more notes about dogs', "content":'lorem ipsum...'}, {"title":'cats are the best but dogs are great too', "content":'lorem ipsum...'}]);

// 18.  Write a MongoDB query to modify the title and content fields of the document from the collection notes with _id "000000000000000000000003".  Change the title and content to be whatever you like.
db.notes.updateOne({"_id":"000000000000000000000003"}, {$set: {"title":'new title', "content":'new content'}});

// 19.  Write a MongoDB query to modify only the title field of the document from the collection notes with _id "000000000000000000000007".  The content field should remain unchanged.
db.notes.updateOne({"_id": "000000000000000000000007"}, {$set:{"title": 'new title'}});

// 20. Write a MongoDB query to modify the title and content fields of all the documents in the collection notes that have an _id field greater than "000000000000000000000014".
db.notes.updateMany({"_id": {$gt: "000000000000000000000014"}}, {$set: {"title": 'new title', "content": 'new content'}});

// 21. Write a MongoDB query to remove only the title field from the document in the collection notes with _id "000000000000000000000008".
db.notes.updateOne({"_id": "000000000000000000000008"}, {$unset: {"title": 1}});

// 22. Write a MongoDB query to remove the content fields from all documents in the collection notes with _id less than or equal to "000000000000000000000006".
db.notes.updateMany({"_id": {$lte: "000000000000000000000006"}}, {$unset: {"content": 1}});

// 23. Write a MongoDB query to remove the title fields from all documents in the collection notes with _id less than or equal to "000000000000000000000003".
db.notes.updateMany({"_id": {$lte: "000000000000000000000003"}}, {$unset: {"title": 1}});

// 24.  Write a MongoDB query to remove the document from the collection notes that has an _id "000000000000000000000017".
db.notes.deleteOne({"_id": "000000000000000000000017"});

// 25. Write a MongoDB query to remove the documents from the collection notes that have an _id which is not less than "000000000000000000000018".
db.notes.deleteMany({"_id": {$not: {$lt: "000000000000000000000017"}}});

// 26.  Write a MongoDB query to remove the documents from the collection notes that have an _id which is greater than or equal to "000000000000000000000013" and contain the string 'dogs' in the title.
db.notes.deleteMany({"_id": {$gte: "000000000000000000000013"}, "title": {$regex: /dogs/}});

// 27.  Write a MongoDB query to display all the documents from the collection notes which do not have a title field.
db.notes.find({"title": null});

// 28.  Write a MongoDB query to remove all the documents from the collection notes which contain the string 'cat' in the title but not the string 'the'.
db.notes.deleteMany({$and: [{"title": {$regex: /cat/}}, {"title": {$not: /the/}}]});

// 29.  Write a MongoDB query to display all the documents from the collection notes that have a title field which does not contain the string 'dogs' and does contain a title field.
db.notes.find({$and: [{"title": {$not: /dogs/}}, {"title": {$exists: true}}]});
