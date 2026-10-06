//literal way
let empDetails={
    name:"sai",
    role:"JavaDeveloper",
    skills:["system design","micro services","db design"],
    address:{
        city:"vijayawada",
        zipcode:5421452
    }
}
console.log(empDetails);

//using new keyword
let emp2=new Object({
    name:"sanju",
    role:"JavaDeveloper",
    skills:["system design","micro services","db design"],
    address:{
        city:"vijayawada",
        zipcode:5421452
    }
})
console.log(emp2);

//crud operations
console.log(empDetails.name);
console.log(emp2.skills[2]);
console.log(emp2.address.city);
emp2.email="sanjuchin2@gmail.com";
console.log(emp2);
delete emp2.email;
emp2.role="PythonDeveloper";

//object inbuilt functions
console.log(Object.keys(empDetails));
console.log(Object.valuess(empDetails));
console.log(Object.entriess(emp2));
Object.seal();//can't modify other than update
Object.freeze();//only read allowed
console.log(Object.isFrozen(empDetails));
console.log(Object.isSealed(emp2));

