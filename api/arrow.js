var stu = [{ user: 'hlo' }, { user: 'hgdgdglo' }, { user: 'hlo' }];
stu.forEach((item) => {
    console.log(item.user.length);
})

var square = (a,b) => a*b

var result = square(10,9);

console.log(result);

//foreach -> does not return an Array

var stu = [{user : 'ashwini'},{user : 'alex'},{user : 'bob'}];

var lengtharr = [];

stu.forEach((item, index) => {
   // console.log(item.user.length)
    lengtharr[index]=item.user.length;
    //console.log(lengtharr);
});

var output = stu.map(ele=> ele.user.length);

console.log(output)
