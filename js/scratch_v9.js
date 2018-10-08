function logTenNumbers (){
  for(var i = 0; i < 10; i++) {
    console.log(i);
  }
}
function runWithDebugger(ourFunction){
  // run the debugger
  debugger;
  ourFunction();
}

runWithDebugger(function logTenNumbers (){
  for(var i = 0; i < 10; i++) {
    console.log(i);
  }
});

setTimeout(function()){
  console.log('Wake up Jeremy!');
}, 5000)

var students = ['jon', 'jeremy', 'jenny', 'elliot'];

function logName(name){
  console.log(name);
}

for(var i = 0; i < students.length; i++){
  console.log(students[i]);
}

students.forEach(function logName(name){
  console.log(name);
})

function forEach(myArray, myFunction) {
  for(var i = 0; i < myArray.length; i++){
    myFunction(myArray[i]);
  }
}

forEach(students, function(student) {
  console.log(student);
})

tutorialsElement.addEventListener('click', function(){
  console.log('The tutorials element was clicked');
});