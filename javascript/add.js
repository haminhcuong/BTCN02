function calculatebtn_Click() {
    var check = true;
    var notification = "";
    var arr = document.getElementsByTagName('input');
    var firstNumber = arr[0].value;
    var secondNumber = arr[1].value;
    var add = arr[2].checked;
    var sub = arr[3].checked;
    var mul = arr[4].checked;
    var div = arr[5].checked;
    document.getElementById('notification').style.color = "red";
    console.log(arr);
    if (firstNumber == "" | secondNumber == "") {
        notification = "Chưa điền đủ hai số để thực hiện phép tính";
        document.getElementById('notification').value = notification;
        check = false;
        return;
    } else if (isNaN(secondNumber) & isNaN(firstNumber)) {
        notification = "Giá trị nhập ở ô Số thứ nhất và ô Số thứ hai không phải là số";
        document.getElementById('notification').value = notification;
        check = false;
        return;
    } else if (isNaN(firstNumber)) {
        notification = "Giá trị nhập ở ô Số thứ nhất không phải là số";
        document.getElementById('notification').value = notification;
        check = false;
        return;
    } else if (isNaN(secondNumber)) {
        notification = "Giá trị nhập ở ô Số thứ hai không phải là số";
        document.getElementById('notification').value = notification;
        check = false;
        return;
    } else if (add == false & sub == false & mul == false & div == false) {
        notification = "Bấm nút Tính mà chưa chọn phép tính";
        document.getElementById('notification').value = notification;
        check = false;
        return;
    } else if (div == true & secondNumber == 0) {
        notification = "Chọn phép chia thì Số thứ hai phải khác 0";
        document.getElementById('notification').value = notification;
        check = false;
        return;
    }

    document.getElementById('notification').value = "Đã tính ra kết quả";

    if (add) {
        var result = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (sub) {
        var result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (mul) {
        var result = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (div) {
        var result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }

    document.getElementById('result').value = result;
}

function reset_Click() {
    document.getElementById('notification').value = "";
    var arr = document.getElementsByTagName('input');
    arr[0].value = "";
    arr[1].value = "";
    arr[2].checked = false;
    arr[3].checked = false;
    arr[4].checked = false;
    arr[5].checked = false;
    document.getElementById('result').value = "";
}