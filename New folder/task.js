var variable = 20;

// (() => {
//     console.log(variable);
//     var variable = 10;
//     console.log(variable);
// }) ();
function a() {
        console.log(variable);
    var variable = 10;
    console.log(variable);
}

a()
// var variable = 30;
console.log(variable);