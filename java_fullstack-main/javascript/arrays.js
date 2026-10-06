//literal way
let arr=[10,20,30,40];
console.log(arr);


//new keyword
let skills=new Array("java","python","c");
console.log(skills);

//array inbuilt methods
let arr1=[10,20,30,40];
console.log(arr1.length);   
arr1.push(50,60,70); //add element at the end
console.log(arr1);
arr1.push(...skills);//adds elements using spread operator
console.log(arr1);
arr1.pop();//remove last element
console.log(arr1);
arr1.shift();//remove first element
console.log(arr1);
arr1.unshift(5,6,7);//add element at the beginning
console.log(arr1);
arr1.splice(2,3);//remove 3 elements from index 2
console.log(arr1);
arr1.splice(2,0,100,200,300);//adds 3 elements from index 2
console.log(arr1);
arr1.splice(1,5,"Java");//remove 5 elements from index 1 and then add one element
console.log(arr1);
console.log(arr1.sort());
