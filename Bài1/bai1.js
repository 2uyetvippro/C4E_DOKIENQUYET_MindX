function isNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    let isNguyenTo = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return isNguyenTo;
}

document.querySelector('.hienthi').onclick = function () {
    let x = document.getElementById("nhapa").value;
    let y = document.getElementById("nhapb").value;
    let arry = [];

    for (let i = x; i <= y; i++) {
        let check = isNguyenTo(i);
        if (check == 1){
            arry.push(i);
            document.getElementById("songuyento").innerHTML = arry;
        }

    }
}