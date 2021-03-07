var expected = {foo: 5, bar: 6};
var actual = { foo: 5, bar: 6 };
function assertObjectsEqual(actual, expected, testname) {
    var actualvalue = JSON.stringify(actual);
    var expectedvalue = JSON.stringify(expected);
    if ( actualvalue===expectedvalue ){ 
        console.log("Passed");
    } else {
        console.log("FAILED [" + testname + "] Expected "+expectedvalue +", but got "+actualvalue);
    }
        
    }

assertObjectsEqual(expected, actual,'my_test');
