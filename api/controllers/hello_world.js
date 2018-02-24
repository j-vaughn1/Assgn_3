'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');

/*
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;


passport.use(new BasicStrategy(
    function(username, password, done) {
        var user = {name: 'taylor'};
        if (username === user.name && password === '1234'){
            return done(null, user);
        }
        else return done(null, false);
    }
));


app.get('/gets',
    passport.authenticate('basic', { session: false }),
    function(req, res) {
        res.json(req.user);
    });
*/

module.exports = {
    hello: hello,
    gets: gets
};

/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

function gets(req, res) {
    var myHeaders = req.headers;
    var myParams = req.swagger.params.q.value || 'no params';
    if (Object.keys(myHeaders).length === 0){
      myHeaders = "no Headers";
    }

    res.json({message: 'using gets', headers: myHeaders, params: myParams});
}
