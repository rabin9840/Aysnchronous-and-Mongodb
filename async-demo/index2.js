//UNDERSTANDING CALLBACK HELL

//Asynchronous
console.log("Before");
getUser(1,(user)=>{
    getRepositories(user.gitHubUserName,(repo)=>{
        getCommits(repo,(commit)=>{
            //CALLBACK HELL
            //Difficult to understand
        })

    })
});
console.log("After");

//Synchronous
//Easy to understand
console.log("Before");
const user=getUser(1);
const repos=getRepositories(user);
const commit=getCommits(repos);
console.log("After");



function getUser(id, callback){
    setTimeout(() => {
        console.log("Extracting user info from the database after 2 second:");
        callback({id:id, gitHubUserName:'User'});
    }, 2000);
    

}

function getRepositories(usename,callback){
    setTimeout(()=>{
        callback(['repo1','repo2','repo3']);
    },2000);
}