var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var sortByAge = function(studentA,studentB) {
  return studentA.age - studentB.age ;
}

var sortByName = students.sort(function(a,b){
  if(a.name === b.name) {
    return sortByAge(a,b);
  }
  return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
});


console.log(sortByName);







