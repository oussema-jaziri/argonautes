const mongoose = require("mongoose");
const argonauteSchema = mongoose.Schema({
    argonauteName: {type:String, required:true},
});
const argonaute = mongoose.model("Argonaute",argonauteSchema);
module.exports = argonaute;