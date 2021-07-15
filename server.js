//hi
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/form", (req, res) => res.sendFile(path.join(__dirname, "form.html")));
app.get("/table", (req, res) => res.sendFile(path.join(__dirname, "table.html")));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

const waitlists = [
  {
    customerName: "Ahmed",
    customerEmail: "afhaque89@gmail.com",
    customerID: "afhaque89",
    phoneNumber: "979-587-0887",
  },
];
const tables = [
  {
    customerName: "jimmy",
    customerEmail: "afhaque89@gmail.com",
    customerID: "afhaque89",
    phoneNumber: "979-587-0887",
  },
];

app.get("/api/reservation", (req, res) => res.json(waitlists));
app.get("/api/table", (req, res) => res.json(tables));


app.post('/api/reservation', (req, res) => {
  const newReservation = req.body
  if (tables.length <= 4) {
    tables.push(newReservation);
    res.json(true);
  } else {
    waitlists.push(newReservation);
    res.json(false);
    console.log('you have been put on a waitlist');
  };
  
  

});


// app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'add.html')));

// // Displays all characters
// app.get('/api/characters', (req, res) => res.json(characters));

// // Displays a single character, or returns false
// app.get('/api/characters/:character', (req, res) => {
//   const chosen = req.params.character;

//   console.log(chosen);
// Create New Characters - takes in JSON input

// app.post('/api/characters', (req, res) => {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   const newCharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
//   console.log(newCharacter);

//   characters.push(newCharacter);
//   res.json(newCharacter);
// });

// // Starts the server to begin listening

// app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));