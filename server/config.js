var mongo = require("mongoose");
var db=mongo.connect("mongodb://localhost/Project", function(err, response){
   if(err){ console.log('Failed to connect to ' + db); }
   else{ console.log('Connected to ' + db, ' + ', response); }
    
});


module.exports =db;

// reactcrud is database name
// 127.0.0.1:27017:27017 is your mongo server name
