let arrMangSo = [];
document.getElementById("fromNhapSo").onsubmit = function (event) {
  event.preventDefault();

  let arrfield = document.querySelectorAll("#fromNhapSo input");
  for (let field of arrfield) {
    // console.log(field);
    let num = field.value * 1;
    arrMangSo.push(num);
    // console.log(typeof field.value);
  }
  document.getElementById("txtMangSo").innerHTML = arrMangSo;

  // reset form
  document.getElementById("fromNhapSo").reset();
};
// Bài 1
document.getElementById("btn_TinhTong").onclick = () => {
  //   console.log(arrMangSo);
  let tongDuong = 0;
  for (let i = 0; i < arrMangSo.length; i++) {
    if (arrMangSo[i] >= 0) {
      tongDuong += arrMangSo[i];
    }
  }
  document.getElementById(
    "ketQuaBai1"
  ).innerHTML = `Tổng dương của mảng trên là : ${tongDuong}`;
};
//Bài 2
document.getElementById("btn_demDuong").onclick = () => {
  let soDuong = 0;
  for (let i = 0; i < arrMangSo.length; i++) {
    if (arrMangSo[i] >= 0) {
      soDuong++;
    }
  }
  document.getElementById(
    "ketQuaBai2"
  ).innerHTML = `Mảng trên có ${soDuong} là số dương`;
};
//Bài 4
document.getElementById("btn_DuongNhoNhat").onclick = () => {
  let minDuong = arrMangSo[0];
  for (let i = 0; i < arrMangSo.length; i++) {
    if (arrMangSo[i] > 0 && arrMangSo[i] < minDuong) {
      minDuong = arrMangSo[i];
    }
  }
  document.getElementById(
    "ketQuaBai4"
  ).innerHTML = `Min dương của mảng trên có giá trị là : ${minDuong} `;
};
// Bai 3
document.getElementById("btn_SoNhoNhat").onclick = () => {
  let min = arrMangSo[0];
  for (let i = 0; i < arrMangSo.length; i++) {
    if (arrMangSo[i] < min) {
      min = arrMangSo[i];
    }
  }
  document.getElementById(
    "ketQuaBai3"
  ).innerHTML = `Min của mảng trên có giá trị là : ${min} `;
};
//Bai 5
document.getElementById("btn_ChanCuoi").onclick = () => {
  let numChan = arrMangSo[0];
  for (let i = 0; i < arrMangSo.length; i++) {
    if (arrMangSo[i] % 2 == 0) {
      numChan = arrMangSo[i];
    }
  }
  document.getElementById(
    "ketQuaBai5"
  ).innerHTML = `Số chẵn cuối trong mảng là : ${numChan} `;
};
//bài 6
document.getElementById("btn_DoiViTri").onclick = () => {
  let index1 = document.getElementById("index1").value * 1;
  let index2 = document.getElementById("index2").value * 1;
  let temp;
  for (let i = 0; i < arrMangSo.length; i++) {
    if (i == index1) {
      for (let j = 0; j < arrMangSo.length; j++) {
        if (j == index2) {
          temp = arrMangSo[i];
          arrMangSo[i] = arrMangSo[j];
          arrMangSo[j] = temp;
        }
      }
    }
  }
  document.getElementById(
    "ketQuaBai6"
  ).innerHTML = `Mảng đã đổi vị trí : ${arrMangSo} `;
};
//bài 7
document.getElementById("btn_SapXep").onclick = () => {
  document.getElementById(
    "ketQuaBai7"
  ).innerHTML = `Mảng đã sắp xếp : ${arrMangSo.sort((a, b) => a - b)} `;
};

//Bài 8
//chia hết cho 1 và cho chính nó
function soNguyenTo(n) {
  let soNT = true;
  if (n < 2) {
    soNT = false;
  } else if (n == 2) {
    soNT = true;
  } else if (n % 2 == 0) {
    soNT = false;
  } else {
    for (let i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        soNT = false;
        break;
      }
    }
  }
  if (soNT == true) {
    return soNT;
  }
}
document.getElementById("btn_SoNguyenTo").onclick = () => {
  let soNT;
  for (let i = 0; i < arrMangSo.length; i++) {
    if (soNguyenTo(arrMangSo[i]) == true) {
      soNT = arrMangSo[i];
      break;
    }
  }
  document.getElementById(
    "ketQuaBai8"
  ).innerHTML = `Mảng đã sắp xếp : ${soNT} `;
};
//Bài 9
document.getElementById("btn_DemNguyen").onclick = () => {
  let soN = 0;
  for (let i = 0; i < arrMangSo.length; i++) {
    if (Number.isInteger(arrMangSo[i]) == true) {
      soN++;
    }
  }
  document.getElementById(
    "ketQuaBai9"
  ).innerHTML = `Số nguyên có trong mảng: ${soN} `;
};

//Bài 10
document.getElementById("btn_SoSanh").onclick = () => {
  let soDuong = 0;
  let soAm = 0;

  for (let i = 0; i < arrMangSo.length; i++) {
    if (arrMangSo[i] >= 0) {
      soDuong++;
    } else {
      soAm++;
    }
  }
  // console.log(soDuong);
  // console.log(soAm);
  if (soDuong == soAm) {
    document.getElementById("ketQuaBai10").innerHTML = ` Số dương = Số âm `;
  } else if (soDuong < soAm) {
    document.getElementById("ketQuaBai10").innerHTML = ` Số dương < Số âm`;
  } else {
    document.getElementById("ketQuaBai10").innerHTML = ` Số dương > Số âm`;
  }
};
