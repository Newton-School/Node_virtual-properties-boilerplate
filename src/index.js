const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const seedDB = require('../seeder');


dotenv.config();
//connect to DB
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DATABASE_URL ,{ useNewUrlParser: true, useUnifiedTopology: true }, async () => {
    console.log('connected to DB');
    await seedDB();
})

app.listen(3000, () => console.log('Server running......'));
