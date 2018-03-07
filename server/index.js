const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session')
require('dotenv').config()

const app = express();
massive(process.env.CONNECTION_STRING).then( dbInstance => {
    console.log('connected to db')
    app.set('db', dbInstance)});

app.use( bodyParser.json() );
app.use( cors() );/*75C 75D 75E */
app.all("/api/*", (req, res, next) => {
    console.log("any kind of string")
    next()
})
app.use( session({/* 75F */
    secret: 'do I put anything here?',
    saveUninitialized: true,
    resave: true
}) )

app.delete('/api/delete/:id', function(req, res, next) {
    const db = app.get("db");
    console.log('property deleted', req.params.id)
    db.delete_property([req.params.id])
    .then((response) => res.status(200).send(response))
    .catch((error) => res.send(error))
})

app.post('/api/create', function(req, res, next) {
    const db = app.get("db");
    console.log('updated', req.body.imageUrl)
    db.new_property([req.body.property, req.body.description, req.body.address, req.body.city, req.body.state, req.body.zip, req.body.imageUrl, req.body.loan, req.body.monthly_mortgage, req.body.recommended_rent, req.body.desiredRent])
    .then((response) => res.status(200).send(response))
    .catch((error) => res.send(error))
})

app.post('/api/getuser', function(req, res, next) {
    const db = app.get("db");
    console.log('logged in', req.body)
    db.get_login_info([req.body.username, req.body.password])
    .then((response) => {
        console.log('loggin in', response)
        req.session.user = response
        res.status(200).send(response)
    })
    .catch((error) => res.send(error))
});

app.post('/api/register', function(req, res, next) {
    const db = app.get("db");
    console.log("User got", req.body)
    db.new_user([req.body.username, req.body.password])
    .then((response) => res.status(200).send(response))
    .catch((error) => res.send(error))
});

app.get('/api/getinfo', function(req, res, next) {
    const db = app.get("db");
    // console.log(response)z
    db.get_property_info()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.send(error))
})

const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );