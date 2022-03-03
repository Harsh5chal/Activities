const response = [
                {UserId: "1", PlatformId: "1"},
                {UserId: "2", PlatformId: "2"}
            ]
            
function registerUser(userName) {
    return new Promise(function(resolve, reject){
    setTimeout(function() {
            response.push(userName);
            console.log("User Added");
            const error = false;
            if(!error){
                resolve();
                console.log("Promise Resolved")
            }
            else{
                reject();
                console.log("Promise Rejected")
            }
        
        },3000)
    })

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
registerUser(newuser).then(
//Resolved    
function(){
    getUser();
}).catch(
//Rejected    
function(){
    console.log("catch");
});