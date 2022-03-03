// Fetch in js
// get
let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content"
,function getData(){
    console.log("Started getData");
    url = "xml.txt";
    //promise
    fetch(url).then((response) => {
        return response.text(); //.json for api
        console.log("Response Returned");
    }).then((data) => {
        console.log(data);
    })
}
console.log("Before running getData");
getData()
console.log("After running getData");

// post
function postData(){
    console.log("Started postData");
    url = "xml.txt";
    // data = '{"name":"harsh","salary":"123","age":"23"}'
    // params = {
    //     method: 'post',
    //     headers: {
    //         'content-type': 'text/plain'
    //     },
    //     body: data
    // }
    //promise fetch(url,params)
    fetch(url).then(response => response.text()).then(data => {console.log(data)}).catch(error => console.error(error))
}
console.log("Before running postData");
postData();
console.log("After running postData");