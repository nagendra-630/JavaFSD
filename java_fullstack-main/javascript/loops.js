for(let i=0;i<=10;i++){
    console.log(i);
}

let arr=[10,20,30,40,50];
let str="JavaScript";
//for-of loop
for(let val of arr){
    console.log(val);
}


for(let ch of str){
    console.log(ch);
}

//for-in loop
for(let idx in arr){
    console.log(idx);
}

//forEach loop
arr.forEach((val,ind,a)=>{console.log(val,"->",ind,"->",a);})

let prices=[500,102,556,1234];
let discounted=prices.map((x)=>{
    return x-x/10;
})
console.log(discounted);

//filter()
let filtered=discounted.filter((x)=>{
    return x>200&&x<=500;
})
console.log(filtered);

//reduce()
let total=filtered.reduce((acl,val)=>{ 
    return acl+val;
})
console.log(total);