/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let employeedetails = arr.map(function(item){
if(item.profession=='developer'){
  return `${item.id} and name of employee ${item.name} and his age ${item.age} and his profession is ${item.profession}`;
}
});

console.log(employeedetails);
}


function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let byForEach=arr.forEach(function(item){
  if(item.profession=='developer'){
     console.log(item);
  }
});

}


function addData() {
  //Write your code here, just console.log
  let newdata={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newdata);
  console.log(arr);

}


function removeAdmin() {
  //Write your code here, just console.log
  let byForEach=arr.forEach(function(item){
    if(item.profession=='admin'){
       arr.pop();
    }
  });
  console.log(arr);
}
let arr2 = [
  { id: 5, name: "Rock", age: "22", profession: "Analyst" },
  { id: 6, name: "Singh", age: "18", profession: "Manager" },
  { id: 7, name: "jim", age: "20", profession: "Aperetership" },
];
function concatenateArray() {
  //Write your code here, just console.log
  let arrconcat= arr.concat(arr2);
  console.log(arrconcat);
}
