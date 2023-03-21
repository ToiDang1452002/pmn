import core from "./core.js";

const btn_tintoan = document.getElementById("btn_tinhtoan");
const ma_dai = ["2d", "3d", "4d", "tp", "la", "bp"];
document.getElementById("txt_data").value = "2d.002keo092.db5n";
var tinnhan = document.getElementById("txt_data").value;
var array_tin = tinnhan.split(".");

var _dai = [];
var _kieudanh = array_tin.pop();
var _number = [];

array_tin.forEach((tin) => {
  ma_dai.forEach((dai) => {
    if (dai == tin) {
      _dai.push(tin);
    }
  });
});
array_tin.splice(0, _dai.length);
_number = array_tin;

console.log(`So dai: ${core["laysodai"](_dai)}`);
console.log(`kieu danh: ${core["laykieudanh"](_kieudanh)}`);
console.log(`so tien: ${core["laysotien"](_kieudanh)}`);
console.log(`so con: ${core["laysocon"](_number)}`);
let _sodai = core["laysodai"](_dai);
let kieudanh = core["laykieudanh"](_kieudanh);
let sotien = core["laysotien"](_kieudanh);
console.log("tien xac", core["tinhtoan"](_sodai, _number, kieudanh, sotien));
btn_tintoan.addEventListener("click", () => {
  alert(`tien xac: ${core["tinhtoan"](_sodai, _number, kieudanh, sotien)}`);
});

// let a = "0003den9003";

// else if (a.length == 11) {
//   var so_dau = a.slice(0, 4);
//   var kieu_keo = a.slice(4, 7);
//   var so_cuoi = a.slice(7, 11);

// }
// console.log(array_keo);
