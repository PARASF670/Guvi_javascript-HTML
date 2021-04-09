// var p1 = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout(() => {
//             resolve("Promise 1 resolved");
//         }, 3000);
//     } else {
//         reject("Promise 1 rejected");
//     }

// });
// var p2 = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout(() => {
//             resolve("Promise 2 resolved");
//         }, 400);
//     } else {
//         reject("Promise 2 rejected");
//     }

// });
// var p3 = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout(() => {
//             resolve("Promise 3 resolved");
//         }, 1000);
//     } else {
//         reject("Promise 3 rejected");
//     }

// });
// Promise.all([p3, p2, p1]).then((result) => {
//     console.log(result);
// })
//     .catch((err) => {
//         console.log(err);
//     })
fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => {
        return res.json();
    })
    .then((result) => {
        console.log("hlo");
    })
    .catch((err) => {
        console.log("try again")
    })