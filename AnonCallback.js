var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var studentsSorted = students.sort( function(person1, person2) {
  if (person1.name < person2.name) {
    return -1;
  } else if (person1.name > person2.name) {
    return 1;
  } else if (person1.age > person2.age){
    return 1;
  } else {
    return 0;
  }
});

console.log(studentsSorted);

  // var result = 0;
  // var result += (person1.name < person2.name ? -1 : 0) + (person1.name > person2.name ? 1 : 0);