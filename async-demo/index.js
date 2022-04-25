//Asynchronous
console.log("Before");
getUser(1,(user)=>{
    //console.log('User',user);
    //Get the repositories 
    getRepositories(user.gitHubUserName,(repo)=>{
        console.log("Calling GitHub API...");
        console.log('Repositories',repo)

    })
});
//console.log(user);
console.log("After");

//Callbacks
//Promises
//Async/await

function getUser(id, callback){
    setTimeout(() => {
        console.log("Extracting user info from the database after 2 second:");
        callback({id:id, gitHubUserName:'User'});
        //return {id:id, gitHubUserName:'User'};
    }, 2000);
    

}

//Synchronous function
/*
function getRepositories(username){
    return ['repo1','repo2','repo3'];
}
*/

//Asynchronous Function
function getRepositories(usename,callback){
    setTimeout(()=>{
        callback(['repo1','repo2','repo3']);
    },2000);
}