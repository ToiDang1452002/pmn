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
const laySoDanh = (str, str_kieudanh) => {
  let array = str.split(".");
  let result = [];
  let array_so_da = [];
  array.shift();
  array.pop();
  array.forEach((item) => {
    if (!isNaN(item)) {
      // result.push(item);
      if (
        str_kieudanh == "db" ||
        str_kieudanh == "dxc" ||
        str_kieudanh == "db7l"
      ) {
        if (item.length == 3) {
          dao_3_con(item).forEach((soDao) => {
            result.push(soDao);
          });
        } else {
          dao_4_con(item).forEach((soDao) => {
            result.push(soDao);
          });
        }
      } else {
        result.push(item);
      }
    } else {
      keo_den(item).forEach((sokeo) => {
        if (
          str_kieudanh == "db" ||
          str_kieudanh == "dxc" ||
          str_kieudanh == "db7l"
        ) {
          if (sokeo.toString().length == 3) {
            dao_3_con(sokeo.toString()).forEach((soDao) => {
              result.push(soDao);
            });
          } else {
            dao_4_con(sokeo.toString()).forEach((soDao) => {
              result.push(soDao);
            });
          }
        } else {
          result.push(sokeo);
        }
      });
    }
  });

  if (str_kieudanh == "da" || str_kieudanh == "dx") {
    for (let i = 0; i < result.length; i++) {
      for (let j = i + 1; j < result.length; j++) {
        array_so_da.push(result[i] + "." + result[j]);
      }
    }
  }
  if (array_so_da != "") {
    result = array_so_da;
  }
  console.log(result);
  return result;
};
const daudui = (str) => {
  str = str.replaceAll("n", "").replaceAll(",", ".");
  var kieu_dau = "";
  var kieu_dui = "";
  var array_daudui = [];
  var sotien_dau = 0;
  var sotien_dui = 0;
  var check_number_kieudanh;
  var check_number_sotien;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      if (check_number_kieudanh != null) {
        if (str.slice(0, i - 1) == "dau" || str.slice(0, i - 1) == "d") {
          kieu_dau = str.slice(0, i - 1);
        }
        if (i - check_number_kieudanh > 1) {
          if (
            str.slice(check_number_kieudanh + 1, i) == "dui" ||
            str.slice(check_number_kieudanh + 1, i) == "duoi" ||
            str.slice(check_number_kieudanh + 1, i) == "d"
          ) {
            kieu_dui = str.slice(check_number_kieudanh + 1, i);
          }
        }
      } else {
        if (str.slice(0, i) == "dau" || str.slice(0, i) == "d") {
          kieu_dau = str.slice(0, i);
        }
      }
      check_number_kieudanh = i;
    } else {
      if (str[i] != ".") {
        if (check_number_sotien != null) {
          if (i - check_number_sotien > 1) {
            sotien_dau = str
              .slice(check_number_sotien + 1, i)
              .replaceAll(".", ",");
          }
        }
        check_number_sotien = i;
      }
    }
  }

  sotien_dui = str.slice(check_number_sotien + 1).replaceAll(".", ",");
  if (kieu_dau == "d" && kieu_dui == "d") {
    kieu_dau = "dau";
    kieu_dui = "duoi";
  }
  if (kieu_dau == "dau" && (kieu_dui == "dui" || kieu_dui == "duoi")) {
    array_daudui.push(kieu_dau + sotien_dau, kieu_dui + sotien_dui);
  }

  return array_daudui;
};
const laykieudanh = (str) => {
  let array = str.split(".");
  let dao_chuoi = daoChuoi(array.pop());
  let kieudanh = "";
  let result = "";
  let check = false;
  if (daudui(str).length == 4) {
    return daudui(str);
  } else {
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
    result = daoChuoi(kieudanh);
    return result;
  }
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
const nhanVe = (
  soDanh,
  soDai,
  soTien,
  nhan2s,
  nhan3s,
  nhan4s,
  nhandt,
  nhandx
) => {
  var result = 0;
  if (soDanh.length < 5) {
    switch (soDanh.length) {
      case 2:
        result = (nhan2s / 100) * soTien;
        break;
      case 3:
        result = (nhan3s / 100) * soTien;
        break;
      case 4:
        result = (nhan4s / 100) * soTien;
        break;
    }
  } else {
    if (soDai > 1) {
      result = (nhandx / 100) * soTien;
    } else {
      result = (nhandt / 100) * soTien;
    }
  }

  return Math.floor(result);
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
const tach_tin_lan_1 = (str, ma_dai) => {
  let array_tin_goc = str.split(".");
  let number_arr_dai = [];
  let check_number = 0;
  let result = [];
  let a = 0;
  array_tin_goc.forEach((tin, index) => {
    ma_dai.forEach((dai) => {
      if (tin == dai) {
        if (index - check_number > 1) {
          number_arr_dai.push(index);
        }

        check_number = index;
      }
    });
  });
  number_arr_dai.forEach((number) => {
    a = number - a;
    result.push(array_tin_goc.splice(0, a).join("."));
    a = number;
  });
  result.push(array_tin_goc.join("."));
  return result;
};
const tach_tin_lan_2 = (str, ma_dai) => {
  let array_tin_goc = str.split(".");
  let check_number = "";
  let array_check_number = [];
  let array_dai = [];
  let array_tin_cat = [];
  let _danhdau = 0;

  array_tin_goc.forEach((tin) => {
    ma_dai.forEach((dai) => {
      if (dai == tin) {
        array_dai.push(dai);
      }
    });
  });

  array_tin_goc.splice(0, array_dai.length);
  array_tin_goc.forEach((tin, index) => {
    if (!isNaN(tin[0])) {
      if (index - check_number > 1) {
        array_check_number.push(index);
      }
      check_number = index;
    }
  });

  array_check_number.forEach((number) => {
    _danhdau = number - _danhdau;
    array_tin_cat.push(
      array_dai.join(".") + "." + array_tin_goc.splice(0, _danhdau).join(".")
    );
    _danhdau = number;
  });

  array_tin_cat.push(array_dai.join(".") + "." + array_tin_goc.join("."));
  return array_tin_cat;
};
const tach_tin_last = (str, ma_dai) => {
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
  array_kieudanh.forEach((item, index) => {
    array_tin_goc.splice(-1, 1);
    let a = 1;
    if (daudui(item) != "") {
      daudui(item).forEach((dd) => {
        array_kieudanh.splice(index, a, dd);
        a = 0;
        index = index + 1;
      });
    }
  });

  array_kieudanh.forEach((item) => {
    array_result.push(array_tin_goc.join(".") + "." + item);
  });
  // console.log(array_result);
  return array_result;
};
const tinhtoan = (sodai, soDanh, kieudanh, sotien) => {
  let tienxac = 0;

  switch (kieudanh) {
    case "b":
    case "bao":
    // case "bl":
    case "lo":
      if (soDanh.length == 2) {
        tienxac = sodai * 18 * sotien;
      } else if (soDanh.length == 3) {
        tienxac = sodai * 17 * sotien;
      } else if (soDanh.length == 4) {
        tienxac = sodai * 16 * sotien;
      }

      break;
    case "x":
    case "xc":
      tienxac += sodai * 2 * sotien;
      break;
    case "dd":
      tienxac += sodai * 2 * sotien;
      break;
    case "dau":
      tienxac += sodai * sotien;
      break;
    case "duoi":
    case "dui":
      tienxac += sodai * sotien;
      break;
    case "da":
      if (sodai == 1) {
        tienxac = 36 * sotien;
      } else if (sodai == 2) {
        tienxac = 72 * sotien;
      } else if (sodai == 3) {
        tienxac = 72 * sotien * 3;
      } else {
        tienxac = 72 * sotien * 6;
      }
      break;
    case "dx":
      if (sodai > 1) {
        if (sodai == 2) {
          tienxac = 72 * sotien;
        } else if (sodai == 3) {
          tienxac = 72 * sotien * 3;
        } else {
          tienxac = 72 * sotien * 6;
        }
      }
      break;
    // case "dt":
    //   if (sodai == 1) {
    //     tienxac = 18 * sotien;
    //   } else {
    //     tienxac = sodai * 36 * sotien;
    //   }
    //   break;
    case "b6l":
      tienxac += sodai * 6 * sotien;
      break;

    case "b7l":
      tienxac += sodai * 7 * sotien;
      break;
    case "b8l":
      tienxac += sodai * 8 * sotien;
      break;
  }

  return Math.round(tienxac);
};

var key = [
  "laysodai",
  "laykieudanh",
  "laySoDanh",
  "laysotien",
  "laysocon",
  "tinhtoan",
  "tachtinlast",
  "tach_tin_lan_2",
  "tach_tin_lan_1",
  "nhanVe",
];
var value = [
  laysodai,
  laykieudanh,
  laySoDanh,
  laySoTien,
  laySocon,
  tinhtoan,
  tach_tin_last,
  tach_tin_lan_2,
  tach_tin_lan_1,
  nhanVe,
];

//ép key
var ex = value.reduce((acc, value, i) => {
  acc[key[i]] = value;
  return acc;
}, {});
export default ex;
