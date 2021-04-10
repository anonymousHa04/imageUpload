const express = require('express');
const blogRoutes = require('./routes/blogRoutes')

const app = express();

app.use(express.json());


const port = process.env.PORT;

app.use(blogRoutes)

app.listen(port, (req, res) => {
    console.log(`server started at port ${port}`)
})