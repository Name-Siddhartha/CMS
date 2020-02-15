var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Elements = new Schema({
    page: String, //This variable stores the name of the webpage
    element_text: String, //This variable stores the text to be written between the element tags
    tag_type: String, //This variable store the name of the starting and ending tags
    div_class: String, //This vriable stores the name of the class for which the CMS is applicable
    div_id: String, //Unique ID of the divison where the addition takes place
    date_upload: {
        type: Date,
        default: Date.now
    }, //We'll have to think this one out. To be used when we are adding notices to the webpage (Date of the notices will be shown)
    new_tag: Boolean, //Boolean value, just to add a marker to determine the recentness of the added tag
});

module.exports = mongoose.model("elements", Elements);