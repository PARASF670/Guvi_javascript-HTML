function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(item) {
      return (item.charAt(0).toUpperCase() + item.slice(1));
    }).join(' ');
  }
var op = titleCase("Hey iam nishant");
console.log(op);
//or using replace

function usingrep (st) {
    return st.toLowerCase().split(" ").map(function (item) {
        return item.replace(item[0], item[0].toUpperCase());
    }).join(' ');
}
var op2 = usingrep('hlo iam nishant');
console.log(op2);