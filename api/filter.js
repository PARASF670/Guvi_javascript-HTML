var stu = [{name :'alex' , marks :50},{name :'bob' , marks :60},{name :'charles' , marks :70}];
var newarr = stu.filter(function (element) {
    return (element.marks > 50);
}).map(function (element) {
        return element.name;
})
console.log(newarr);