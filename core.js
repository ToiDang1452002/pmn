const laysodai = (array) => {
  let sodai = 0;
  if (array.length == 1) {
    array.forEach((dai) => {
      if (dai == "2d") {
        sodai = 2;
      } else if (dai == "3d") {
        sodai = 3;
      } else if (dai == "4d") {
        sodai = 4;
      } else {
        sodai = 1;
      }
    });
  } else {
    sodai = array.length;
  }
  return sodai;
};
const daoChuoi = (str) => {
  let str_dao = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str_dao += str[i];
  }
  return str_dao;
};
const laykieudanh = (str) => {
  let dao_chuoi = daoChuoi(str);
  let kieudanh = "";
  let check = false;
  for (let i = 0; i < dao_chuoi.length; i++) {
    if (isNaN(dao_chuoi[i])) {
      if (dao_chuoi[i] != "n" && dao_chuoi[i] != ",") {
        kieudanh += dao_chuoi[i];
        check = true;
      }
    } else {
      if (check == true) {
        kieudanh += dao_chuoi[i];
      }
    }
  }
  return daoChuoi(kieudanh);
};
const laySoTien = (str) => {
  let dao_chuoi = daoChuoi(str);
  let sotien = "";
  let check = false;
  for (let i = 0; i < dao_chuoi.length; i++) {
    if (isNaN(dao_chuoi[i])) {
      if (dao_chuoi[i] != "n" && dao_chuoi[i] != ",") {
        check = true;
      } else if (dao_chuoi[i] == ",") {
        sotien += ".";
      }
    } else {
      if (check == false) {
        sotien += dao_chuoi[i];
      }
    }
  }
  return daoChuoi(sotien);
};
const laySocon = (array) => {
  let socon = "";
  array.forEach((item) => {
    if (isNaN(item)) {
      false;
    } else {
      socon = array.length;
    }
  });
  return socon;
};
const dao_3_con = (_number) => {
  let array_dao = [];
  array_dao.push(_number[0] + _number[1] + _number[2]);
  array_dao.push(_number[0] + _number[2] + _number[1]);
  array_dao.push(_number[1] + _number[0] + _number[2]);
  array_dao.push(_number[1] + _number[2] + _number[0]);
  array_dao.push(_number[2] + _number[0] + _number[1]);
  array_dao.push(_number[2] + _number[1] + _number[0]);
  return [...new Set(array_dao)];
};

const dao_4_con = (_number) => {
  let array_dao = [];
  array_dao.push(_number[0] + _number[1] + _number[2] + _number[3]);
  array_dao.push(_number[0] + _number[1] + _number[3] + _number[2]);
  array_dao.push(_number[0] + _number[2] + _number[1] + _number[3]);
  array_dao.push(_number[0] + _number[2] + _number[3] + _number[1]);
  array_dao.push(_number[0] + _number[3] + _number[1] + _number[2]);
  array_dao.push(_number[0] + _number[3] + _number[2] + _number[1]);
  array_dao.push(_number[1] + _number[0] + _number[2] + _number[3]);
  array_dao.push(_number[1] + _number[0] + _number[3] + _number[2]);
  array_dao.push(_number[1] + _number[2] + _number[0] + _number[3]);
  array_dao.push(_number[1] + _number[2] + _number[3] + _number[0]);
  array_dao.push(_number[1] + _number[3] + _number[0] + _number[2]);
  array_dao.push(_number[1] + _number[3] + _number[2] + _number[0]);
  array_dao.push(_number[2] + _number[0] + _number[1] + _number[3]);
  array_dao.push(_number[2] + _number[0] + _number[3] + _number[1]);
  array_dao.push(_number[2] + _number[1] + _number[0] + _number[3]);
  array_dao.push(_number[2] + _number[1] + _number[3] + _number[0]);
  array_dao.push(_number[2] + _number[3] + _number[0] + _number[1]);
  array_dao.push(_number[2] + _number[3] + _number[1] + _number[0]);
  array_dao.push(_number[3] + _number[0] + _number[1] + _number[2]);
  array_dao.push(_number[3] + _number[0] + _number[2] + _number[1]);
  array_dao.push(_number[3] + _number[1] + _number[0] + _number[2]);
  array_dao.push(_number[3] + _number[1] + _number[2] + _number[0]);
  array_dao.push(_number[3] + _number[2] + _number[0] + _number[1]);
  array_dao.push(_number[3] + _number[2] + _number[1] + _number[0]);
  return [...new Set(array_dao)];
};
const keo_den = (str_number) => {
  var array_keo = [];
  if (str_number.length == 7) {
    var so_dau = str_number.slice(0, 2);
    var kieu_keo = str_number.slice(2, 5);
    var so_cuoi = str_number.slice(5, 7);

    if (kieu_keo == "keo") {
      for (let i = so_dau.slice(0, 1); i <= so_cuoi.slice(0, 1); i++) {
        array_keo.push(i + so_cuoi.slice(1, 2));
      }
    } else if (kieu_keo == "den") {
      for (let i = Number(so_dau); i <= so_cuoi; i++) {
        if (Number(i) < 10) {
          array_keo.push("0" + i);
        } else {
          array_keo.push(i);
        }
      }
    }
  } else if (str_number.length == 9) {
    var so_dau = str_number.slice(0, 3);
    var kieu_keo = str_number.slice(3, 6);
    var so_cuoi = str_number.slice(6, 9);
    if (kieu_keo == "keo") {
      if (so_cuoi.slice(0, 1) - so_dau.slice(0, 1) != 0) {
        for (let i = so_dau.slice(0, 1); i <= so_cuoi.slice(0, 1); i++) {
          array_keo.push(i + so_dau.slice(1, 2) + so_dau.slice(2, 3));
        }
      } else {
        for (let i = so_dau.slice(1, 2); i <= so_cuoi.slice(1, 2); i++) {
          array_keo.push(so_dau.slice(0, 1) + i + so_dau.slice(2, 3));
        }
      }
    } else if (kieu_keo == "den") {
      for (let i = Number(so_dau); i <= so_cuoi; i++) {
        if (i < 10) {
          array_keo.push("00" + i);
        } else if (i < 100) {
          array_keo.push("0" + i);
        } else {
          array_keo.push(i);
        }
      }
    }
  }
  return array_keo;
};
const tinhtoan = (sodai, array_number, kieudanh, sotien) => {
  let tienxac = 0;
  switch (kieudanh) {
    case "b":
    case "bao":
    case "lo":
      array_number.forEach((so) => {
        if (!isNaN(so)) {
          if (so.length == 2) {
            tienxac += Number(sodai * 18 * sotien);
          } else if (so.length == 3) {
            tienxac += Number(sodai * 17 * sotien);
          } else if (so.length == 4) {
            tienxac += Number(sodai * 16 * sotien);
          }
        } else {
          if (keo_den(so)[0].length == 2) {
            tienxac += sodai * keo_den(so).length * 18 * sotien;
          } else {
            tienxac += sodai * keo_den(so).length * 17 * sotien;
          }
        }
      });
      break;
    case "x":
    case "xc":
      array_number.forEach((so) => {
        if (!isNaN(so)) {
          if (so.length == 3) {
            tienxac += sodai * 2 * sotien;
          }
        } else {
          tienxac += sodai * keo_den(so).length * 2 * sotien;
        }
      });
      break;
    case "dd":
      array_number.forEach((so) => {
        if (!isNaN(so)) {
          if (so.length == 2) {
            tienxac += sodai * 2 * sotien;
          }
        } else {
          tienxac += sodai * keo_den(so).length * 2 * sotien;
        }
      });
      break;
    case "dau":
    case "dui":
      array_number.forEach((so) => {
        if (!isNaN(so)) {
          if (so.length == 2) {
            tienxac += sodai * sotien;
          }
        } else {
          tienxac += sodai * keo_den(so).length * sotien;
        }
      });
      break;
    case "da":
      let socap = 0;
      for (let i = 0; i < array_number.length; i++) {
        socap += i;
      }
      if (sodai == 1) {
        tienxac = 36 * socap * sotien;
      } else if (sodai == 2) {
        tienxac = 72 * socap * sotien;
      } else if (sodai == 3) {
        tienxac = 72 * socap * sotien * 3;
      } else {
        tienxac = 72 * socap * sotien * 6;
      }
      break;
    case "dx":
      if (sodai > 1) {
        let socap = 0;
        for (let i = 0; i < array_number.length; i++) {
          socap += i;
        }
        if (sodai == 2) {
          tienxac = 72 * socap * sotien;
        } else if (sodai == 3) {
          tienxac = 72 * socap * sotien * 3;
        } else {
          tienxac = 72 * socap * sotien * 6;
        }
      }
      break;
    case "dt":
      let socap_dt = 0;
      for (let i = 0; i < array_number.length; i++) {
        socap_dt += i;
      }
      if (sodai == 1) {
        tienxac = 18 * socap_dt * sotien;
      } else {
        tienxac = sodai * 36 * socap_dt * sotien;
      }
      break;
    case "b6l":
      array_number.forEach((so) => {
        if (!isNaN(so)) {
          tienxac += sodai * 6 * sotien;
        } else {
          tienxac += sodai * keo_den(so).length * 6 * sotien;
        }
      });
      break;
      break;
    case "b7l":
      array_number.forEach((so) => {
        if (!isNaN(so)) {
          tienxac += sodai * 7 * sotien;
        } else {
          tienxac += sodai * keo_den(so).length * 7 * sotien;
        }
      });
      break;
    case "b8l":
      array_number.forEach((so) => {
        if (!isNaN(so)) {
          tienxac += sodai * 8 * sotien;
        } else {
          tienxac += sodai * keo_den(so).length * 8 * sotien;
        }
      });
      break;
    case "db":
      array_number.forEach((so) => {
        if (!isNaN(so)) {
          if (so.length == 3) {
            var array_dao_3_con = dao_3_con(so);
            tienxac += sodai * array_dao_3_con.length * 17 * sotien;
          } else if (so.length == 4) {
            var array_dao_4_con = dao_4_con(so);
            tienxac += sodai * array_dao_4_con.length * 16 * sotien;
          }
        } else {
          if (keo_den(so)[0].length == 3) {
            for (let i = 0; i < keo_den(so).length; i++) {
              tienxac += sodai * dao_3_con(keo_den(so)[i]).length * 17 * sotien;
            }
          } else {
            for (let i = 0; i < keo_den(so).length; i++) {
              tienxac += sodai * dao_4_con(keo_den(so)[i]).length * 16 * sotien;
            }
          }
        }
      });
      break;
    case "dxc":
      array_number.forEach((so) => {
        if (!isNaN(so)) {
          if (so.length == 3) {
            var array_dao_3_con = dao_3_con(so);
            tienxac += sodai * array_dao_3_con.length * 2 * sotien;
          }
        } else {
          for (let i = 0; i < keo_den(so).length; i++) {
            tienxac += sodai * dao_3_con(keo_den(so)[i]).length * 2 * sotien;
          }
        }
      });
      break;
    case "db7l":
      array_number.forEach((so) => {
        if (!isNaN(so)) {
          if (so.length == 3) {
            var array_dao_3_con = dao_3_con(so);
            tienxac += sodai * array_dao_3_con.length * 7 * sotien;
          } else if (so.length == 4) {
            var array_dao_4_con = dao_4_con(so);
            tienxac += sodai * array_dao_4_con.length * 7 * sotien;
          }
        } else {
          if (keo_den(so)[0].length == 3) {
            for (let i = 0; i < keo_den(so).length; i++) {
              tienxac += sodai * dao_3_con(keo_den(so)[i]).length * 7 * sotien;
            }
          } else {
            for (let i = 0; i < keo_den(so).length; i++) {
              tienxac += sodai * dao_4_con(keo_den(so)[i]).length * 7 * sotien;
            }
          }
        }
      });
      break;
  }
  return Math.round(tienxac);
};

var key = ["laysodai", "laykieudanh", "laysotien", "laysocon", "tinhtoan"];
var value = [laysodai, laykieudanh, laySoTien, laySocon, tinhtoan];

//ép key
var ex = value.reduce((acc, value, i) => {
  acc[key[i]] = value;
  return acc;
}, {});
export default ex;
