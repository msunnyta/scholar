
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
const FormInfo = require('./models/form');
const SignInfo = require('./models/signup');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

const uri = "mongodb+srv://sunnytamadasu:triangle0208@cluster0.5ylwjwo.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

.then((result) => {

app.listen(4000);

console.log('DB connected')

})

.catch((err)=> console.log(err + "unable to connect"))


app.post('/signup', async (req, res) => {

  const {name, email, password} = req.body;
   console.log(req.body);
  try {

    // Check if the user already exists in the database

    const existingUser = await SignInfo.findOne({name: name, email: email, password: password});

    if(existingUser) {

      res.json({message: 'User already exists'})

    } else {

      // Create a new user and save it to the database

      const newSign = new SignInfo({

        name: name,

        email: email,

        password : password,

      })

      await newSign.save();

      res.json({message: 'Signed successfully.'})

    }

  } catch(error) {

    console.log(error)

    res.status(500).json({message : 'Server error'})

  }

} )


// for login form

// app.post('/signup', (req,res) => {
//     const SignInfo = new SignInfo(
//         {
            
//             email: req.body.email,
//             password: req.body.password
//         }
//     );
//     emp.save().then(item => {
//         res.send("item saved to database" +  SignInfo);
//     })
//     .catch(err => {
//         res.status(400).send('unable to save to database');
//     });
// });