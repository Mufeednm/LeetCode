var sortBy = function(arr, fn) {
    return arr.slice().sort((a, b) => fn(a) - fn(b));
};

const arr = [{"x": 1}, {"x": 0}, {"x": -1}];
const fn = (d) => d.x;
const sortedArr = sortBy(arr, fn);
console.log(sortedArr);

// let a = {
//     name :"mufeed",
//     lastname:"musthafa",
//     age :20,
//     place :"mongam"
// }
// for (const key in a) {

//         const element = a[key];
//         console.log(key,":",element);
//     }
 