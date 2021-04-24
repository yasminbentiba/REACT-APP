const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const PORT = 4000;


let User = require('./models/User');




app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/users', 
{ useNewUrlParser: true });

const connection = mongoose.connection;



connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});
userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});



userRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else
        console.log(req.body.firstName)
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.password = req.body.password;
            user.role = req.body.role;
            user.save().then(user => {
                res.json(user);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});



userRoutes.route('/add').post(function(req, res) {
    console.log(req.body)
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});


app.use('/users', userRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});