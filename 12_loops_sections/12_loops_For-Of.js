//! For-Of

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

// for (item of student) {
//     console.log(item);

// }
let myCat;
let cats = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for(cat in cats){
    console.log(cat);
    console.log(cats[cat]);
}

for(cat of cats) {
    console.log(cat);
    myCat = cat;
}
console.log(`My cat is a ${myCat}`);