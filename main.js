import core from "./core.js";

const btn_tintoan = document.getElementById("btn_tinhtoan");
const ma_dai = ["2d", "3d", "4d", "tp", "la", "bp"];
document.getElementById("txt_data").value = "2d.12den25.b5";
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
// btn_tintoan.addEventListener("click", () => {
//   alert(`tien xac: ${core["tinhtoan"](_sodai, _number, kieudanh, sotien)}`);
// });

let str = "tp.la.231keo931.b5.xc5";
let array_tin_goc = str.split(".");
let check_dai = "";
let array_kieudanh = [];
let array_result = [];
array_tin_goc.forEach((item, index) => {
  if (isNaN(item) && isNaN(item[0])) {
    ma_dai.forEach((dai) => {
      if (dai == item) {
        check_dai = index;
      }
    });
    if (index != check_dai) {
      array_kieudanh.push(item);
    }
  }
});

array_kieudanh.forEach(() => {
  array_tin_goc.splice(-1, 1);
});

array_kieudanh.forEach((item) => {
  array_result.push(array_tin_goc.join(".") + "." + item);
});

console.log(array_result);

array_result.forEach((item) => {
  // console.log(item);
  var array_tin = item.split(".");

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
  let _sodai = core["laysodai"](_dai);
  let kieudanh = core["laykieudanh"](_kieudanh);
  let sotien = core["laysotien"](_kieudanh);
  console.log("tien xac", core["tinhtoan"](_sodai, _number, kieudanh, sotien));
});
