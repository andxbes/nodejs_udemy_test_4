const express = require('express');

const router = express.Router();

const users = [];

router.post('/add-user/', (req, res, next) => {
    users.push({ userName: req.body.userName });
    res.redirect('/users/');
});

router.get('/', (req, res, next) => {
    res.render('users', {
        users: users,
        pageTitle: 'Users',
        path: '/users/',
    });
});

module.exports = router;
