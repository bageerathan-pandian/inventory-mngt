const express = require("express");
var cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require('express-session')
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const dotenv = require('dotenv').config();
var passport  = require('passport');

require('./config/database');
require('./config/passport');
require('./config/twilio'); //send message
// require('./config/facebook');
// require('./config/google');
// cron job init
require('./cron-job/cron-index')

// require('./controllers/printer.controller.js')

// set app
var app = express();
var server = require("http").Server(app);
var io = require('socket.io').listen(server);

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a"
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));
// use middlewares
app.use(bodyParser.json()); 
app.use(cors());
app.use(express.static(path.join(__dirname, "dist/client")));
// app.use(express.static('public'));
app.use('/static', express.static('public'))
app.use(cookieParser()); 
// use session
app.use(session({secret: process.env.SECRET_KEY,saveUninitialized: false,resave: false}));
// app.use(express.cookieSession()); // Express cookie session middleware 
app.use(passport.initialize());   // passport initialize middleware
app.use(passport.session());      // passport session middleware 

// app.set('trust proxy', true)

// use router
const auth = require("./routers/auth.route");
const common = require("./routers/contact.route"); 
const users = require("./routers/users.route");
const company = require("./routers/company.route");
const tax = require("./routers/tax.route");
const unit = require("./routers/unit.route");
const route = require("./routers/route.route");
const category = require("./routers/category.route");
const brand = require("./routers/brand.route");
const customer = require("./routers/customer.route");
const supplier = require("./routers/supplier.route");
const stock = require("./routers/stock.route"); 
const dashboard = require("./routers/dashboard.route");
const pdfs = require("./routers/pdfs.route");
const imagUpload = require("./routers/imageUpload.route");
const contact = require("./routers/contact.route");
const sales = require("./routers/sales.route");
const collection = require("./routers/collection.route");
const invoice = require("./routers/invoice.route");
const purchase = require("./routers/purchase.route");
const report = require("./routers/report.route");

app.use("/api/auth", auth); // auth api's goes here 
app.use("/api/users", passport.authenticate('jwt', { session : false }), users);
app.use("/api/company", passport.authenticate('jwt', { session : false }),  company);
app.use("/api/tax", passport.authenticate('jwt', { session : false }),  tax);
app.use("/api/unit", passport.authenticate('jwt', { session : false }),  unit);
app.use("/api/route", passport.authenticate('jwt', { session : false }),  route);
app.use("/api/category", passport.authenticate('jwt', { session : false }),  category);
app.use("/api/brand", passport.authenticate('jwt', { session : false }),  brand);
app.use("/api/customer",passport.authenticate('jwt', { session : false }),  customer); 
app.use("/api/supplier",passport.authenticate('jwt', { session : false }),  supplier); 
app.use("/api/stock",passport.authenticate('jwt', { session : false }),  stock); 
app.use("/api/dashboard",passport.authenticate('jwt', { session : false }),  dashboard); 
app.use("/api/pdfs",passport.authenticate('jwt', { session : false }),  pdfs); 
app.use("/api/image-upload",passport.authenticate('jwt', { session : false }),  imagUpload); 
app.use("/api/contact",passport.authenticate('jwt', { session : false }),  contact); 
app.use("/api/sales",passport.authenticate('jwt', { session : false }),  sales);
app.use("/api/collection",passport.authenticate('jwt', { session : false }),  collection);
app.use("/api/invoice",passport.authenticate('jwt', { session : false }),  invoice); 
app.use("/api/purchase",passport.authenticate('jwt', { session : false }),  purchase); 
app.use("/api/report",passport.authenticate('jwt', { session : false }),  report); 
// app.use("/api/payment",passport.authenticate('jwt', { session : false }),  paymentController); 

// console.log(ip.address());


// Handle errors
// app.use(function(err, req, res, next) { 
//   res.status(err.status || 500);
//   res.json({ error : err });
// });

io.on('connection', function(socket){
  console.log(`Socket ${socket.id} connected.`);

  socket.on('disconnect', function(){
    console.log(`Socket ${socket.id} disconnected.`);
  });
   // User login notification
   socket.on('loginTodo', (Todo) => {
    console.log('socketData: ' + JSON.stringify(Todo));
    // io.emit('delete', { type: 'new-delete', text: Todo });
    io.emit('login', Todo);
});

  // User logout notification
  socket.on('logoutTodo', (Todo) => {
    console.log('socketData: ' + JSON.stringify(Todo));
    // io.emit('delete', { type: 'new-delete', text: Todo });
    io.emit('logout', Todo);
});

  // User logout notification
  socket.on('expiryTodo', (Todo) => {
    console.log('socketData: ' + JSON.stringify(Todo));
    // io.emit('delete', { type: 'new-delete', text: Todo });
    io.emit('expiry', Todo);
});


socket.on('add-message', (message) => {
    console.log('socketData: ' + JSON.stringify(message));
    //io.emit(message);
    io.emit('message', { type: 'new-message', text: message });
});

// Receiving Todos from client
socket.on('addTodo', (Todo) => {
    console.log('socketData: ' + JSON.stringify(Todo));
    // todoController.addTodo(io, Todo);
    // io.emit('add', { type: 'new-add', text: Todo });
    io.emit('add', Todo);
});
// Receiving Updated Todo from client
socket.on('updateTodo', (Todo) => {
    console.log('socketData: ' + JSON.stringify(Todo));
    // io.emit('update', { type: 'new-update', text: Todo });
    io.emit('update', Todo);
});
// Receiving Todo to Delete
socket.on('deleteTodo', (Todo) => {
    console.log('socketData: ' + JSON.stringify(Todo));
    // io.emit('delete', { type: 'new-delete', text: Todo });
    io.emit('delete', Todo);
});
// Receiving Todo to Delete
socket.on('statusTodo', (Todo) => {
    console.log('socketData: ' + JSON.stringify(Todo));
    // io.emit('delete', { type: 'new-delete', text: Todo });
    io.emit('status', Todo);
});
});

// all routers goes here
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/client/index.html"));
});

//app listening
// server.listen(port, (req, res) => {
//   console.log(`Server listening @ port ${port}`);
// });
// Start the app by listening on the default Heroku port
// server.listen(process.env.PORT || 8080);
server.listen(process.env.PORT || 8080,()=>{
  console.log('server listing at ' + process.env.PORT)
});
