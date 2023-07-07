const express = require('express');

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`app is listening to PORT http://localhost:${PORT}`);
})