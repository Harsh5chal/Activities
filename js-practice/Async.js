//Async function
async function postData(){
    console.log("Inside Function");
    const response = await fetch('http://api.github.com/users');
    console.log("Before response");
    const user = await response.json();
    console.log("After response");
    return user;
}

let a = postData();
console.log("a");
a.then(data => console.log(data))