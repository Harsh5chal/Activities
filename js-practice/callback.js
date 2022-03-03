// Call Back - function inside the function eg: setTimeout(function)- async
// call back - Async/sync

// Response from server
const response = [
    {UserId: "1", PlatformId: "1"},
    {UserId: "2", PlatformId: "2"}

function registerUser(userName, callback) {
    setTimeout(function() {
        response.push(userName);
        console.log("User Added");
        callback();
    },3000)

function getUser(){
    setTimeout(function() {
        let str = "";
        response.forEach(function(userName){
            str += `<li> ${userName.UserId} </li>`
        });
        document.getElementById('UserId').innerHTML = str;
        console.log("Data Fetched");
    },1000);

let newuser = {UserId: "3", PlatformId: "3"};
registerUser(newuser, getUser);
getUser();