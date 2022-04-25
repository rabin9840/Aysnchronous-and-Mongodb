//CONCEPT OF PARALLEL PROMISES AND ASYNC WORK

const p1=new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("Async Operation 1...");
        resolve(1);
    },2000)
});

const p2=new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("Async Operation 2...");
        resolve(2);
    },2000)
});

//Parallel execution of aync work
//single thread
Promise.all([p1,p2])                            //here after completion of promises 1 and 2 then
    .then(result=>console.log(result));