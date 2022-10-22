function changeTab(e) {
  document.getElementById("btnBai1").classList.remove("button-18");
  document.getElementById("btnBai2").classList.remove("button-18");
  document.getElementById("btnBai3").classList.remove("button-18");
  document.getElementById("btnBai4").classList.remove("button-18");
  document.getElementById("btnBai5").classList.remove("button-18");
  document.getElementById("btnBai6").classList.remove("button-18");
  document.getElementById("btnBai7").classList.remove("button-18");
  document.getElementById("btnBai8").classList.remove("button-18");
  document.getElementById("btnBai9").classList.remove("button-18");
  document.getElementById("btnBai10").classList.remove("button-18");

  e.target.classList.add("button-18");

  document.getElementById("bai1").classList.remove("show");
  document.getElementById("bai2").classList.remove("show");
  document.getElementById("bai3").classList.remove("show");
  document.getElementById("bai4").classList.remove("show");
  document.getElementById("bai5").classList.remove("show");
  document.getElementById("bai6").classList.remove("show");
  document.getElementById("bai7").classList.remove("show");
  document.getElementById("bai8").classList.remove("show");
  document.getElementById("bai9").classList.remove("show");
  document.getElementById("bai10").classList.remove("show");

  var activeTabId = e.target.getAttribute("data-target");
  document.getElementById(activeTabId).classList.add("show");
}
// var arr = +document.getElementById('[txtMang]').value;

function ex1() {
  var sum = +document.getElementById("[txtMang]").value;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = sum;
}

function ex2() {
  var arr = [-1, 6, 2, -3, 4, 5, -6];
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count = count + 1;
    }
  }
  console.log(count);
}
ex2();

function ex3() {
  var arr = [10, 2, 3, 4, 5, 6, 7, 8, 9];
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}
ex3();

function ex4() {
  var arr = [3, 2, 3, 4, 5, 6, 7, 8];
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  if (typeof newArr === "undefined") {
    console.log("-1");
  } else {
    var min = newArr[0];
    for (var j = 0; j < newArr.length; j++) {
      if (newArr[j] < min) {
        min = newArr[j];
      }
    }
    console.log(min);
  }
}
ex4();
function ex5() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var timSoChan = 0;

  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      timSoChan = arr[i];
      break;
    }
  }
  console.log(timSoChan);
}

function ex6() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var a = 4 ; var b = 8;
  var swap = 0

  for (var i = 0; i < arr.length; i++) {
    if ( arr[i] == a){
      swap = arr[a]
      arr[a] = arr[b]
      arr[b] = swap;
    }
  }console.log(arr);  

}ex6();



function ex7() {
  var arr = [4, 1, 5, 3, 2, 9];
  var isSwapped = false;

  for (var j = arr.length; j >= 0; j--) {
    for (var i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
    if (isSwapped === false) {
      console.log(arr);
      return;
    }
  }
  console.log(arr);
}
function ex8() {
  var arr = [4, 13, 5, 3, 2, 9];
  function isprime(n) {
    var flag = true;

    if (n < 2) {
      flag = false;
      console.log("-1");
      return;
    }
    let i = 2;
    while (i < n) {
      if (n % i == 0) {
        flag = false;
        break;
      }
      i++;
    }
    return flag;
  }
  for (var i = 0; i < arr.length; i++) {
    if (isprime(arr[i]) == true) {
      console.log(arr[i]);
      break;
    }
  }
}ex8();

function ex9(){
  var arr = [4.1, 1, 5, 2, 3, 2, 9];
  var dem = 0
  var check = 0
  function checkNumber(n){
    var flag = true;

    if (Math.ceil(n) !== Math.floor(n)) {
      flag = false;
     
    }
    return flag;
  }
  for (var i = 0; i < arr.length; i++) {
    check = checkNumber(arr[i])
    if(check === true){
      dem++
    }
  }
  console.log(dem)

}ex9();
 
function ex10(){
  var arr = [-4, 1, 5, -2, 3, -2, 3, 9];
  var soAm = 0
  var soDuong = 0
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
      soDuong++
    }else {
      soAm++
    }
  }
  if(soAm > soDuong){
    console.log("số âm nhiều hơn số dương")
  }else{
    console.log("số âm ít hơn số dương")
  }
}ex10();