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
  for (let i = 0; i <= arrMangSo.length; i++) {
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
  //   console.log(arrMangSo);
  let soDuong = 0;
  for (let i = 0; i <= arrMangSo.length; i++) {
    if (arrMangSo[i] >= 0) {
      soDuong++;
    }
  }
  document.getElementById(
    "ketQuaBai2"
  ).innerHTML = `Mảng trên có ${soDuong} là số dương`;
};
//Bài 3
document.getElementById("btn_DuongNhoNhat").onclick = () => {
  let minDuong = arrMangSo[0];
  for (let i = 0; i <= arrMangSo.length; i++) {
    if (arrMangSo[i] > 0 && arrMangSo[i] < minDuong) {
      minDuong = arrMangSo[i];
    }
  }
  document.getElementById(
    "ketQuaBai4"
  ).innerHTML = `Min dương của mảng trên có giá trị là : ${minDuong} `;
};
