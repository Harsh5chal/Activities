
// Promises - previous callback to promise
// -resolve -reject -pending
function pro(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            const error = true;
            if(!error){
                console.log("Resolved");
                resolve();
            }
            else{
                console.log("Rejected");
                reject();
            }
        })
    })

pro().then(function(){
    console.log("Then");
}).catch(function(){
    console.log("catch");
});