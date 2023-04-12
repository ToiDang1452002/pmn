import core from "./core.js";
const btn_tintoan = document.getElementById("btn_tinhtoan");
const dai = ["2d", "3d", "4d"];
const ten_dai = ["bt", "vt", "bl"];
const ma_dai = dai.concat(ten_dai);

btn_tintoan.addEventListener("click", () => {
  var str = document.getElementById("txt_data").value;

  var nhan2s = document
    .getElementById("gia_2s")
    .getElementsByTagName("td")[2].innerText;
  var nhan3s = document
    .getElementById("gia_3s")
    .getElementsByTagName("td")[2].innerText;
  var nhan4s = document
    .getElementById("gia_4s")
    .getElementsByTagName("td")[2].innerText;
  var nhandt = document
    .getElementById("gia_dt")
    .getElementsByTagName("td")[2].innerText;
  var nhandx = document
    .getElementById("gia_dx")
    .getElementsByTagName("td")[2].innerText;

  const array_tin = [];
  document.getElementById("data-table").innerHTML = "";
  // var str = "tv.10den15.b5";
  document.getElementById("txt_data").value = str;
  let tach_lan_1 = core["tach_tin_lan_1"](str, ma_dai);
  let tach_lan_2 = core["tach_tin_lan_2"];
  let tach_lan_3 = core["tachtinlast"];
  tach_lan_1.forEach((item1) => {
    tach_lan_2(item1, ma_dai).forEach((item2) => {
      tach_lan_3(item2, ma_dai).forEach((item3) => {
        array_tin.push(item3);
      });
    });
  });
  ///////////////////////////////////////////////////////
  var table = document
    .getElementById("table_chitiet")
    .getElementsByTagName("tbody")[0];

  var stt = 1;
  var tongXac = 0;
  var tongthanhTien = 0;
  var tongNhanve = 0;
  array_tin.forEach((tin) => {
    var array_dai = [];
    let kieuDanh = core["laykieudanh"](tin);
    let soTien = core["laysotien"](tin);
    switch (kieuDanh) {
      case "db":
        kieuDanh = "b";
        break;
      case "dxc":
        kieuDanh = "xc";
        break;
      case "db7l":
        kieuDanh = "b7l";
        break;
      case "x":
        kieuDanh = "xc";
        break;
    }

    //Lay mã đài
    ma_dai.forEach((dai) => {
      tin.split(".").forEach((item_tin) => {
        if (item_tin == dai) {
          if (!isNaN(item_tin[0])) {
            ten_dai.slice(0, item_tin[0]).forEach((a) => {
              array_dai.push(a);
            });
          } else {
            array_dai.push(item_tin);
          }
        }
      });
    });

    var soDai = core["laysodai"](array_dai);
    // console.log(core["laySoDanh"](tin, core["laykieudanh"](tin)));
    core["laySoDanh"](tin, core["laykieudanh"](tin)).forEach((Sodanh) => {
      var row = table.insertRow();
      var thanhtien = core["tinhtoan"](
        soDai,
        Sodanh.toString(),
        kieuDanh,
        soTien
      );
      var Nhanve = core["nhanVe"](
        Sodanh,
        soDai,
        thanhtien,
        nhan2s,
        nhan3s,
        nhan4s,
        nhandt,
        nhandx
      );
      row.insertCell(0).innerHTML = stt++;
      row.insertCell(1).innerHTML = array_dai.join(".");
      row.insertCell(2).innerHTML = kieuDanh;
      row.insertCell(3).innerHTML = Sodanh;
      row.insertCell(4).innerHTML = soTien;
      // console.log(core["laySoDanh"](tin, core["laykieudanh"](tin)));
      row.insertCell(5).innerHTML =
        thanhtien == 0 ? "Chưa tính được" : thanhtien;
      row.insertCell(6).innerHTML = Nhanve;
      tongNhanve += Nhanve;
      tongthanhTien += parseInt(soTien);
      tongXac += core["tinhtoan"](soDai, Sodanh.toString(), kieuDanh, soTien);
    });
  });
  document.getElementById("tong_sotien").value = tongthanhTien;
  document.getElementById("tong_thanhtien").value = tongXac;
  document.getElementById("tong_nhanve").value = tongNhanve;
});

document.getElementById("btn_gia").addEventListener("click", () => {
  document.getElementsByClassName("modal")[0].style.display = "block";
});

document.getElementById("close_modal").addEventListener("click", () => {
  document.getElementsByClassName("modal")[0].style.display = "none";
});
