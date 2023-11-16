//bai 1
function bai1(){
let a = +prompt("Enter number a: ");
let b = +prompt("Enter number b: ");
if (a % b == 0){
    alert("a chia het cho b")
}else{
    alert("a khong chia het cho b")
}
}
///bai 2
function bai2() {
let inputAge= +prompt("Enter student's Age: ");
if (inputAge>15){
    alert("Du tuoi hoc lop 10")
}else {
    alert("Khong du tuoi hoc lop 10")
}
}
//bai 3
function bai3(){
let inputInt = +prompt("Enter random Number: ");
if (inputInt>0){
    alert("This number is bigger than 0");
}else {
    alert("This number is smaller than 0");
}
}
// bai 4
function bai4() {
    let a = +prompt("Enter number A: ");
    let b = +prompt("Enter number B: ");
    let c = +prompt("Enter number C: ");
    if (a > b && a > c) {
        alert("Number A is Max")
    } else if (b > a && b > c) {
        alert("Number B is Max")
    } else {
        alert("Number C is Max")
    }
}

// bai 5

