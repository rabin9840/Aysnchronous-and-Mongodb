async function display(){
const customer=await getCustomer(1);
console.log(customer);
if(customer.isGold){
    const movies=await getTopMovies();
    console.log("Top movies: ",movies);
    const cemail=await sendEmail(customer.email,movies);
    console.log('Email sent...');


}
}

display();
  
  function getCustomer(id) {
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'ABCDEF', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000);  
      });

  }

  
  function getTopMovies() {
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
          }, 4000);

      });

  }
  
  function sendEmail(email, movies) {
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
          }, 4000);

      });

  }