const app = require('./app');

const port = 3002 || process.env.PORT;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
