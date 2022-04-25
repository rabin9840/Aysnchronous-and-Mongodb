const p= Promise.reject(new Error('Reason For rejection...'))
p.catch(error=>console.log(error));