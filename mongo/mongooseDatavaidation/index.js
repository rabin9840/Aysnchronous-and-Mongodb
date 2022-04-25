//import mongoose module
const mongoose=require('mongoose');

//Connect to mongodb
mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log("Connected to MongoDb.."))
.catch(err=>console.error('Couldnot Connect to MongoDB..',err));

//Defining Schema
const courseSchema=new mongoose.Schema({
    //Defining Property of schema
    name:{ type: String, 
            required: true,
            minlength:5,
            maxlength:255
        },
    category:{
        type:String,
        required: true,
        enum:['web','mobile','network']
    },
    author: String,

    //Custom Validator
    tags:{
        type: Array,
        //async validator
        validate: {
            isAsync: true,
            validator:function(v,callback){
                setTimeout(()=>{
                    //Do some async work
                    const result=v && v.length>0;
                    callback(result);
                },1000)
            },
            message:'A course should have atleast one tag'
        }
    },


    date:{type:Date,default:Date.now},
    isPublished:Boolean,
    price: {
        type: Number,
        required: function(){
            //arrow function donot have their own this 
            return this.isPublished;
        },
        min: 10,
        max: 200
    }
 
});


//Model
const Course=mongoose.model('Course',courseSchema); //Course class


async function createCourse(){

const course=new Course({
    //name: 'Node js Course',
    author: 'Name of author',
    tags: ['document save','node','backend'],
    isPublished:true
    //price:15
});

try{  
    await course.validate();
    //Saving Document in Database
    //const result=await course.save();
    //console.log(result);

}
catch(ex){
    for(field in ex.errors)
        console.log(ex.errors[field].message);

}


}

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

async function updateCourse(){
    const course=await Course.findById(id);
    if(!course) return;

    course.isPublished=true;
    course.author='Another Author';

    const result=await course.save();
    console.log(result);
}

//updateCourse('IDVALUE');
createCourse();

