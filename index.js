// -----------------------------BÀI TẬP 1 ----------------------------
/** input: nhập vào số ngày làm, 
 * xử lý : lấy số ngày làm * 10000
 * output: console.log ra kết quả tính lương
 */
var soNgaylam = 2;
var tinhLuong = soNgaylam*100000;
console.log(tinhLuong)



// -----------------------------BÀI TẬP 2 ----------------------------
/**input : nhập 5 ký số
 *  (5 số cộng lại)/5
 * console.log ra kết quả
 */
 var so1 = 2
 var so2 = 2
 var so3 = 2
 var so4 = 2
 var so5 = 2
var tinhTong= (so1+so2+so3+so4+so5)/5
console.log(tinhTong)


// -----------------------------BÀI TẬP 3 ----------------------------
/** input: nhập vào só usd muốn quy đổi
 * xử lý : lấy số usd*23500
 * console.log ra kết quả quy đổi tiền
 */
var soTien = 2
var quyDoi= soTien*23500
console.log(quyDoi)





// -----------------------------BÀI TẬP 4 ----------------------------
/** input: nhập vào chiều dài và chiều rộng
 * xử lý: diện tích = chiều dài *chiều rộng
 * chu vi = ( chiều dài + chiều rộng)*2
 * output: console.log xuất ra kết qua chi vi va diện tích
 */
var chieuDai=6
var chieuRong=2
var dienTich=chieuDai*chieuRong
var chuVi=(chieuDai+chieuRong)*2
console.log(dienTich)
console.log(chuVi)






// -----------------------------BÀI TẬP 5 ----------------------------
/**input: nhập vào số có 2 ký sô
 * * xử lý :  + lấy số hàng chục bằng cách /10 nhưng ở đây ra số thập phân nên ta dùng math.floor để lấy giá trị số chẵn
 *          + lấy số hàng đơn vị bằng cách %10
 *          + sau đó cộng số hàng chục và số hàng đơn vị
 * output: console.log xuất ra kết quả
 */

var kySo= 23
var soHangChuc = Math.floor(kySo / 10);
  var soHangDonVi = kySo % 10;
  var tong2Kyso = soHangChuc + soHangDonVi;
  console.log(tong2Kyso);