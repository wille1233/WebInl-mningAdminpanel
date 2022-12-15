// Step 3 - this is the code for ./models.js

var mongoose = require('mongoose');


mongoose.connect(
    'mongodb+srv://wille1233:storskrak2@cluster0.cwshgij.mongodb.net/?retryWrites=true&w=majority',
    {
    //useNewUrlParser: true,
    //useFindAndModify: false,
    // useUnifiedTopology: true
    }
    );
    
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully");
    });
    
var imageSchema = new mongoose.Schema({
	name: String,
	desc: String,
    pos: String,
	img:
	{
		data: Buffer,
		contentType: String
	}
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model('Image', imageSchema);


let Img = mongoose.model('Image', imageSchema);

module.exports = Img;