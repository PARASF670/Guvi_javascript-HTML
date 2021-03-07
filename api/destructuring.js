// destructuring 
// assign it to existing variable Names

var stu = {
    name : 'alex',
    age : 24,
    marks : 70
};

var {name, age, marks} = stu;

console.log(name, age, marks, stu);


//assign to new variable name 

var stu1 = {
    name : 'bob',
    age : 25,
    marks : 60
};

var {name: person, age : ageof, marks: grade} = stu1;
console.log(person,ageof,grade);

//assign it to variable with default values

var employee = {
    name : 'charles',
    dept : 'electrical',
    dob : '1995'
}

var {name = 'default name', dept = 'default dept', address = 'default address'} = employee;
console.log(name, dept, address);
//array destructuring

var [a, b] = [1, 2, 3];
console.log(a, b);