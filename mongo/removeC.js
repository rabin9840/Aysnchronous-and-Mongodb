//import mongoose module
const mongoose=require('mongoose');

//Connect to mongodb
mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log("Connected to MongoDb.."))
.catch(err=>console.error('Couldnot Connect to MongoDB..',err));

//Defining Schema
const courseSchema=new mongoose.Schema({
    //Defining Property of schema
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean

});


//Model
const Course=mongoose.model('Course',courseSchema); //Course class

//get data
async function getCourses(){

    const courses=await Course
    //.find({author:'Name', isPublished:true})
    .find()
    .or([{name:'Name'},{isPublished:true}]) 
    .limit(10)
    .sort({name:1})
    .select({name:1, tags:1});
    console.log(courses);


}

async function removeCourse(id){
    const result=await Course.deleteOne({_id:id});
    console.log(result);
}


removeCourse('IDVALUE');


