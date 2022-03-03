// Inheritance - it is use to create template with the help of other template
class Software extends Engineers{
    constructor(givenName, givenExperience, givenRole, givenLanguage){
        // Whenever new object is made we call super() to get values from previous template
        super(givenName, givenExperience, givenRole);
        this.language = givenLanguage;
   
    expLang(){
        if(this.language == 'Python'){
            return 'Great';
        }
        else{
            return 'Woah';
        }
    }
}
Harsh = new Software("Harsh Panchal","2","SWE","Python");
console.log(Harsh);
console.log(Harsh.expLang());