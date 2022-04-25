const p=new Promise((resolve,reject)=>{
    //kick off async work

    //resolve when no error in async
    //reject if there is error 

    setTimeout(()=>{
        //resolve(1);                                 //To show that no error is present
                                                    //pending=>resolved or fulfilled
        reject(new Error('message'));               //pending state=>rejected state
    },2000);

});

p.
then(result=>console.log('Result',result))        //if no error then
.catch(err=>console.log('Error',err.message));

