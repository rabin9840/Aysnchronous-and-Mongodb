//ASYNC AND AWAIT APPROACH
//SOLVING CALLBACK HELL
//USE OF Promise

//Asynchronous
console.log("Before");
//Using Callback
/*
getUser(1,(user)=>{
    getRepositories(user.gitHubUserName,(repo)=>{
        getCommits(repo,(commits)=>{
            console.log(commits);
        })

    })
});
*/


//Promise based Apporach
/*
getUser(1)
    .then(user=>getRepositories(user.gitHubUserName))
    //.then(repo=>getCommits(repo[0]).then(commit=>console.log(commit)));  OR
    .then(repo=>getCommits(repo[0]))
    .then(commit=>console.log(commit))
    .catch(err=>console.log(err.message));

*/

//Async and Await
async function displayCommit(){
    try{
        const user=await getUser(1);
        const repo=await getRepositories(user.gitHubUserName);
        const commit=await getCommits(repo[0]);
        console.log(commit);
    }
    catch(err){
        console.log('Error',err.message);
    }

}

displayCommit();
console.log("After");







function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Extracting user info from the database after 2 second:");
            resolve({id:id, gitHubUserName:'User'});                                //use of resolve instead of callback
        }, 2000);
        

    });


}

function getRepositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Calling Github API...");
            resolve(['repo1','repo2','repo3']);
            //reject(new Error('Could not fetch repos'));
        },2000);

    });

}

function getCommits(repo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Calling Github API...");
            resolve(['commit']);
        },2000);

    });
}