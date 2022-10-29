//! For-In
// Object:
let student = {
    name: "Peter",
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for(item in student) {
    console.log(item);
}

for(item in student) {
    console.log(item); //name, awesome, degree, week
    console.log(student[item]); // Peter, true, JavaScript, 1
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for(cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}