module.exports = function(app){
    var user = require('../controllers/UserController');

    app.route('/user').get(user.listAll)

    app.route('/user').post(user.createAUser);

    app.route('/user/:Id').get(user.readASingleUser);

    app.route('/user/:user/:pass').get(user.checkUser);


    app.route('/user/:Id').put(user.updateAUser);

    app.route('/user/:Id').delete(user.deleteAUser);
}
