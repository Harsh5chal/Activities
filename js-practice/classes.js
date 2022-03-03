//Classes
class Engineers{
    constructor(givenName, givenExperience, givenRole){
        this.name = givenName;
        this.experience = givenExperience;
        this.role = givenRole;
   
    //static - it doesnt use object 
    static joining(A){
        return 2022 - A 
    }                
}
Harsh = new Engineers("Harsh","2","SWE");
console.log(Harsh);
console.log(Engineers.joining(2018));