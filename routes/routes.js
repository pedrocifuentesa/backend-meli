
var items = require('./items.js');

module.exports = (app) => {
    app.use('/api', items);
}