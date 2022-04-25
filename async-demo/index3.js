//SOLVING CALLBACK HELL
//USE OF NAMED FUNCTION

//Asynchronous
console.log("Before");
getUser(1,getRepositories);
console.log("After");

function getRepositories(user){
    getRepositories(user.gitHubUserName,getCommits);    //above and below getRepositories are different
}

function getCommits(repo){
    getCommits(repo,displayCommits);
}

function displayCommits(commit){
    console.log(commit);
}








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