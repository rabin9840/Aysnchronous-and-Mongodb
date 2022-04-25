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


async function createCourse(){

const course=new Course({
    name: 'Node js Course',
    author: 'Name of author',
    tags: ['document save','node','backend'],
    isPublished:true
});

//Saving Document in Database
const result=await course.save();
console.log(result);

}

//get data
async function getCourses(){
    //Regular Expression

    const courses=await Course
    //.find({author:'Name', isPublished:true})

    //Beginning with
    .find({author: /^Name/})

    //Ending with
    .find({author: /Name$/})
    
    //Contaning the word
    .find({author:/.*Name.*/i})
    
    .limit(10)
    .sort({name:1})
    .select({name:1, tags:1});
    console.log(courses);


}

getCourses();
//createCourse();

