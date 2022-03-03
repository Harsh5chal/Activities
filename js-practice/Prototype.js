 //Prototype Function
var Bot = function(){
    this.canTalk = true;

var Member = function(name,title){
    Bot.call(this);
    this.name = name;
    this.title = title;

Member.prototype.greet = function(){
    if(this.canTalk){
        console.log('Hi, I am' + ' ' + this.name + ' ' + this.title);
    }
}
// 
var mem = new Member('Harsh','SWE');
mem.greet(