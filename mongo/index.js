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

//Classes and objects
//Course, nodeCourse

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
//asynchronous object
const result=await course.save();
console.log(result);

}

//get data
async function getCourses(){
    //Comparison Operator
    //eq (equal)
    //ne (not equal)
    //gt (greater than)
    //gte (greater than or equal)
    //lt(less than)
    //lte (less than or equal)
    //in
    //nin (not in)


    const courses=await Course
    //.find({author:'Name', isPublished:true})
    //.find({price:{$gt:10, $lte:20}}) //price greater than 10 use of object for comparison operator
    .find({price:{$in: [10,15,20]}})
    .limit(10)
    .sort({name:1})
    .select({name:1, tags:1});
    console.log(courses);


}

getCourses();
//createCourse();

