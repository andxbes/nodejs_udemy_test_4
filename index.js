const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const usersRoutes = require('./routes/users');
app.use('/users/', usersRoutes);

app.get('/', (req, res, next) => {
    res.render('main', { path: '/', pageTitle: 'Add User' });
});

app.use((req, res, next) => {
    res.status(404).render('404', { path: req.url, pageTitle: 'Page Not Found' });
});
app.listen(3000);
