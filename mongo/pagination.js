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
    const pageNumber=1;
    const pageSize=10;

    //api/courses?pageNumber=1&apgeSize=10


    const courses=await Course
    //.find({author:'Name', isPublished:true})
    .find()
    .or([{name:'Name'},{isPublished:true}])  
    //to get document in given page
    .skip((pageNumber-1)*pageSize)
    .limit(pageSize)
    .sort({name:1})
    .select({name:1, tags:1});
    console.log(courses);


}

getCourses();


