/* --------------- Bài 1 --------------- */
/*
Tìm số nguyên dương nhỏ nhất sao cho: 
1 + 2 + … + n > 10000
*/
function handleSmallestInt() {
    var sum = 0;
    var i = 1;
    while (sum <= 10000) {
        sum += i;
        i++;
    }
    return i;
}

document.getElementById("btnBai1").onclick = function () {
    var number = handleSmallestInt();
    document.getElementById("result__bai1").innerHTML = number;
}

/* --------------- Bài 2 --------------- */
/*
Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử
dụng vòng lặp và hàm)
*/

function handleIndexLoop(x, n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    return sum;
}

document.getElementById("btnBai2").onclick = function () {
    var x = +document.getElementById("x").value;
    var n = +document.getElementById("n").value;
    var sum = handleIndexLoop(x, n);
    document.getElementById("result__bai2").innerHTML = sum;
}

/* --------------- Bài 3 --------------- */
/*
Nhập vào n. Tính giai thừa 1*2*...n
*/
function handleRecursive(n) {
    var recursive = 1;
    for (var i = 1; i <= n; i++) {
        recursive *= i;
    }
    return recursive;
}

document.getElementById("btnBai3").onclick = function () {
    var n = +document.getElementById("nGiaiThua").value;
    var nGiaiThua = handleRecursive(n);
    document.getElementById("result__bai3").innerHTML = nGiaiThua;
}

/* --------------- Bài 4 --------------- */
/*
Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì
background màu đỏ và lẻ thì background màu xanh.
*/
function handleCreateDiv() {
    for (var i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            var createDiv = document.createElement('div');
            // createDiv.style.cssText = 'background-color = red; padding: 20px 0;';
            createDiv.style.background = "red";
            createDiv.style.padding = "20px 0";
            createDiv.style.margin = "20px 0";
            document.getElementById("result__bai4").appendChild(createDiv);
        }
        else {
            var createDiv = document.createElement('div');
            createDiv.style.background = "blue";
            createDiv.style.padding = "20px 0";
            createDiv.style.margin = "20px 0";
            document.getElementById("result__bai4").appendChild(createDiv);
        }
    }
}

document.getElementById("btnBai4").onclick = function () {
    handleCreateDiv();
}

/* --------------- Bài 5 --------------- */
/*
Viết chương trình có một ô input, một button. Khi click vào button thì in ra các số nguyên
tố từ 1 tới giá trị của ô input
*/

function handlePrintNumber(n) {
    var strNumber = ""
    for (var i = 1; i <= n; i++) {
        strNumber += `${i} `;
    }
    return strNumber;
}

document.getElementById("btnBai5").onclick = function(){
    var soNguyenN = +document.getElementById("soNguyen").value;
    var strNumber = handlePrintNumber(soNguyenN);
    document.getElementById("result__bai5").innerHTML = strNumber;
}