# Express Basics

Run `$ npm install` before starting.

Run the file "basics/server1.js" and answer the following questions:

1. Identify the endpoint method in the code. Which phase of the event loop will the endpoint be scheduled to run?
Answer 1. Returns {"ping":"pong"}
app.get('/', (req, res) => {
    console.log(req.body);
    return res.send({ping: 'pong'});
});
2. What do you see when you render "http://localhost:3001/" in the browser?

3. Try console logging req.body inside the endpoint’s handler? What do you see in the console? Why?
undefined because 

Open the file "basics/server2.js" and answer the following:

Middlewares that occur before the ones 
1. Run the server and list the order in which app.use and app.get functions are executed.
app.use(express.json());


2. Move app.use in line 20 to above the app.get endpoint. Run the server and list the order of execution.

//Throws error 

3. Move all app.use functions above the app.get endpoint. Replace the return in the last app.use with next(). What will be the order of execution? 
// Again shows and calls app.get and displays {ping:'pong'}


Open the file "basics/server3.js" and answer the following:

1. What are the *params* in the path?
2. Assume the server is running on localhost:3002. Provide a path which would be handled by the endpoint shown and provide the output.
3. Construct a URL with inputs for the end point defined in '/user'. 

# Mongoose Basics

Open the file "basics/breakfastSchema.js". Inspect the schema structure and understand its meaning. Answer the following:

1. Run the schema and make sure there are no error.
2. What will happen if we create an instance of the schema with eggs set to 13?
Answer: it will not update as max is 12. Async function will catch the exception
3. What will happen if we create an instance of the schema with drink set to "Milk"?
4. Run "basics/mongoose-demo.js" and see what you get? make the changes in 2 and 3 and run again.
5. Define a function insertMany(entries) in the above script, which takes a list of objects {eggs: N, drink: ‘some drink’} and inserts each entry in entries in the MongoDB collection my_db.

# The Library App

We will make a library app to query information about books and create new books.

# References

1. https://mongoosejs.com/docs/index.html
2. https://mongoosejs.com/docs/guides.html
3. https://www.mongodb.com/basics 
4. https://expressjs.com/en/guide/writing-middleware.html
5. https://expressjs.com/en/guide/using-middleware.html
6. https://expressjs.com/en/guide/routing.html