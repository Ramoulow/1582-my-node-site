"use strict";

//  apport du module Express
const express = require('express');

// Instance du module Express qu'on appelle "app"
const app = express();

// Définition du port d'écoute
const port = 4242;



// Routage
// =======

// Route 1
// -------

// Définition de la route pour la page d'accueil
const home_route = "/";

// Définition du controlleur de la page d'accueil
const home_controller = function (req, res) {
  res.send("Hello world");
}

// Ajout de la route dans le registre de l'application de Node
app.get(home_route, home_controller);

// Route 2
// -------

const page2_route = "/page_2";
const page2_controller = function (req, res) {
  res.send("Ceci est la page 2.");
};
app.get(page2_route, page2_controller);

// Route 3
// -------
app.get("/page_3", (req, res) => {
  res.send("Ceci est la page 3.");
});



app.listen(port);