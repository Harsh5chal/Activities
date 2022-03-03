// AJAX - JS + XML / Json (used for no page reload)
//pure js is called Vanilla.js
let fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", buttonClickHandler);

function buttonClickHandler(){
    console.log('Fetch'
    // XMLHttpRequest Syntax
    const xhr = new XMLHttpRequest();
    
    // Open object
    xhr.open("GET", 'xml.txt', true
    //what to do on progress or onprogress method
    xhr.onprogress = function(){
        console.log('On Progress');

    // What to do when response is ready
    xhr.onload = function(){
        // To check status of Http 200 is response code of http means ok response
        if(this.status == 200){
            console.log(this.responseText)
        }
        else{
            console.log('Error Occured')
        }

    // Send request back to server
    xhr.send();

let populateButton = document.getElementById("populateButton");
populateButton.addEventListener("click", popHandler);

function popHandler(){
    console.log('Populating Json'
    // XMLHttpRequest Syntax
    const xhr = new XMLHttpRequest();
    
    // Open object
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts/1', true
    // What to do when response is ready
    xhr.onload = function(){
        // To check status of Http 200 is response code of http means ok response
        if(this.status == 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            document.getElementById("example").innerHTML = obj.userId;
            document.getElementById("example").innerHTML = obj.userId;
            document.getElementById("example").innerHTML = obj.userId;
        }
        else{
            console.log('Error Pop')
        }

    // Send request back to server
    xhr.send();
}