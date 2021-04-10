// include library
const mongoose = require('mongoose');
const assert = require('assert');
const db_url = process.env.DB_URL;

// Establish database connection
mongoose.connect(

    db_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology : true,
        useCreateIndex : true,
        useFindAndModify : true
    },

    (error,link) => {

        // check database connect error
        assert.strictEqual(error,null,"DB connect fail..");
        // console.log(error);

        // database connect success
        console.log("Db connection established...");
    }
);