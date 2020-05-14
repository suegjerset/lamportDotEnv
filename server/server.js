const express = require( 'express' );
const app = express();
const axios = require( 'axios' );

const port = process.env.PORT || 5000;

app.listen( port, ()=>{
    console.log( 'server up on:', port );
})

app.get( '/trending', ( req, res )=>{
    // make a request to giphy here using your API key
    console.log( '/trending GET' );
    res.send( 'meow' );
})