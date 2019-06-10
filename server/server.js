const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./pool');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request to DB to get previous calculations
app.get( `/calculations`, (req, res) => {
    let sqlText = `SELECT * FROM "calculations"
                    ORDER BY "id" DESC
                    LIMIT 10;`;

    pool.query( sqlText )
        .then( (result) => {
            res.send(result.rows)
        })
        .catch( (error) => {
            console.log( `Error getting previous calculations.`, error );
            res.sendStatus(500);
        })
})

app.post( `/calculations`, (req, res) => {
    let calc = req.body;

    let sqlText = `INSERT INTO "calculations" 
                    ( "firstNum", "operation", "secondNum", "answer" )
                    VALUES ( $1, $2, $3, $4 );`;

    pool.query( sqlText, [calc.firstNum, calc.operation, calc.secondNum, calc.answer] )
        .then( (response) => {
            res.sendStatus(201);
        })
        .catch( (error) => {
            console.log( `Error adding calculation to the database.`, error );
            res.sendStatus(500);
        })

})

app.delete( `/calculations`, (req, res) => {
    let sqlText = `DELETE FROM "calculations";`;

    pool.query( sqlText )
        .then( (response) => {
            res.sendStatus(200);
        })
        .catch( (error) => {
            console.log( `Error deleting data from table.`, error );
            res.sendStatus(500);
        })
})

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});