// =========Bài 1=========
/**
 * INPUT: cho 3 số nguyên (a b c), biến tạm thời để giúp đổi chỗ (temp)
 *
 * PROCESS:
 *     1. lấy input , ví dụ  a = 1, b = 5, c = 3
 *     2. nếu a > b, a > c chuyển số bé nhất vào a; b > c chuyển số bé nhất vào c
 *
 * OUTPUT: thứ tự tăng dần
 */
var a = 1;
var b = 5;
var c = 3;
var temp;
if (a > b){
    temp = a;
    a = b;
    b = temp;
}
if (a > c){
    temp = a;
    a = c;
    c = temp;
}
if (b > c){
    temp = b;
    b = c;
    c = temp;
}
console.log("Thứ tự tăng dần là", a,b,c)

// =========Bài 2=========
/**
 * INPUT: cho B, M, A, E có giá trị tương ứng với các thành viên và user là người sử dụng máy
 *
 * PROCESS:
 *     1. lấy input , ví dụ  a = 1, b = 5, c = 3
 *     2. Xem người dùng là ai
 *
 * OUTPUT: câu chào theo người dùng
 */
var B = "bố";
var M = "mẹ";
var A = "anh trai";
var E = "em gái";
var user = 0;
user = A;
if (user == B){
    console.log("Chào", user)
}
if (user == M){
    console.log("Chào", user)
}
if (user == A){
    console.log("Chào", user)
}
if (user == E){
    console.log("Chào", user)
}

// =========Bài 3=========
/**
 * INPUT: 3 số nguyên (n1, n2, n3)
 *
 * PROCESS:
 *     1. lấy input
 *     2. Tính số chia lấy dư bằng 0 và khác 0
 *     3. Kiểm tra có bao nhiêu chẵn, bao nhiêu lẻ
 *
 * OUTPUT: kết quả chẵn, lẻ
 */
var n1 = 2;
var n2 = 2;
var n3 = 3;
if (n1 % 2 == 0 && n2 % 2 == 0 && n3 % 2 == 0){
    console.log('có 3 số chẵn')
}else if (n1 % 2 == 0 && n2 % 2 == 0 && n3 % 2 != 0){
    console.log('có 2 số chẵn và 1 số lẻ')
}else if (n1 % 2 != 0 && n2 % 2 == 0 && n3 % 2 == 0){
    console.log('có 2 số chẵn và 1 số lẻ')
}else if (n1 % 2 == 0 && n2 % 2 != 0 && n3 % 2 == 0){
    console.log('có 2 số chẵn và 1 số lẻ')
}else if (n1 % 2 != 0 && n2 % 2 == 0 && n3 % 2 != 0){
    console.log('có 1 số chẵn và 2 số lẻ')
}else if (n1 % 2 == 0 && n2 % 2 != 0 && n3 % 2 != 0){
    console.log('có 1 số chẵn và 2 số lẻ')
}else if (n1 % 2 != 0 && n2 % 2 != 0 && n3 % 2 == 0){
    console.log('có 1 số chẵn và 2 số lẻ')
}else if (n1 % 2 != 0 && n2 % 2 != 0 && n3 % 2 != 0){
    console.log('có 3 số lẻ')
}

// =========Bài 4=========
/**
 * INPUT: 3 cạnh tam giác (a, b, c)
 *
 * PROCESS:
 *     1. lấy input
 *     2. Trường hợp nhập 3 cạnh ko hợp lệ
 *     3. Các trường hợp
 *        3.1. Điều kiện để là tam giác đều
 *        3.2. Điều kiện để là tam giác cân
 *        3.3. Điều kiện để là tam giác vuông
 *        3.4. Tam giác thường
 * OUTPUT: kết quả loại tam giác
 */
var a = 2;
var b = 2;
var c = 2;
if (a + b <= c || a + c <= b || b + c <= a){
    console.log("Tam giác ko hợp lệ")
}else{
    if (a == b && b == c){
        console.log("Tam giác đều")
    }else if (a == b || a == c || b == c){
        console.log("Tam giác cân")
    }else if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a){
        console.log("Tam giác vuông")
    }else{
        console.log("Tam giác thường")
    }
}