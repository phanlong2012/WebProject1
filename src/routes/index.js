const newsRouter = require('./news');
const singleController = require('./single');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', singleController);
}

module.exports = route;
