# Đồ án CNPM : Web app kê đơn thuốc trực tuyến

## Các bước cài đặt
- Sau khi clone về chạy lệnh sau để cài đặt các denpendences: `npm install`
- Set Up CSDL và các port với XAMPP
- Để chạy folder Backend, Frontend : 'npm start'
- Open [http://localhost:3000](http://localhost:3000) để xem ở trình duyệt của bạn

## Các chức năng chính của Web App:
- Chức năng đăng nhập, đăng kí cho người dùng
- Chức năng sửa đổi thông tin người dùng
- Chức năng kê đơn thuốc trực tuyến
- Chức năng xem chi tiết đơn thuốc
- Chức năng quản lí tài khoản cho Admin
  
## Thành Viên
| STT | Họ và tên | MSSV | Mức độ đóng góp |
|-------|-------|-------|-------|
| 1 | Lê Chí Bình | xxxx | 99% |


## Kiểm thử phần mềm : 
### Test Case đăng nhập 
<div>
<table>
  <tr>
    <th>ID</th>
    <th>Description</th>
    <th>Steps</th>
    <th>Test Data</th>
    <th>Expected Result</th>
    <th>Result</th>
  </tr>
  <tr>
    <td>TC_01</td>
    <td>UI</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign In</li>
          <li>Kiểm tra các components của trang web</li>
          <li>Test responsive</li>
      </ul>
  </td>
    <td></td>
    <td>
    <ul>
          <li>Hiển thị trang Sign In</li>
          <li>Các components đều hiển thị</li>
          <li>Đáp ứng responsive</li>
      </ul>
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_02</td>
    <td>Sign in</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign In</li>
          <li>Nhập các thông tin</li>
          <li>Nhấn Sign in</li>
      </ul>
  </td>
    <td>
          <li>UserName : lchbnh0511</li>
          <li>Password : 123456</li>
      </td>
          Đăng nhập được vào hệ thống </td>
    <td></td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_03</td>
    <td>Tên đăng nhập</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign In</li>
          <li>Bỏ trống tên đăng nhập</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn Sign in</li>
      </ul>
  </td>
    <td>
      <li>UserName : lchbnh0511</li>
    </td>
    <td>
    <ul>Báo lỗi
      </ul>
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_04</td>
    <td>Pass word</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign In</li>
          <li>Bỏ trống mục password</li>
          <li>Nhập các thông tin còn lại</li>
          <li>Nhấn sign in</li>
      </ul>
  </td>
    <td>
      <li>UserName : lchbnh0511</li>
    </td>
    <td>
    <ul>
          Báo lỗi
      </ul>
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_05</td>
    <td>Kiểm tra Password có khớp với tên đăng nhập</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign In</li>
          <li>Nhập password khác với mật khẩu đã đăng kí</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn sign in</li>
      </ul>
  </td>
    <td>Password:111111</td>
    <td>
Báo lỗi Login Failed
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_06</td>
    <td>UI</td>
    <td>
       <ul>
          <li>Truy cập tới trang  Sign In</li>
          <li>Nhấn Don't have an account? Sign Up</li>
      </ul>
  </td>
    <td></td>
    <td>
    <ul>
       Chuyển đến trang Sign Up
      </ul>
</td>
    <td>Pass</td>
  </tr>
</table>
</div>

### Test Case Đăng kí
<div>
<table>
  <tr>
    <th>ID</th>
    <th>Description</th>
    <th>Steps</th>
    <th>Test Data</th>
    <th>Expected Result</th>
    <th>Result</th>
  </tr>
  <tr>
    <td>TC_01</td>
    <td>UI</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign Up</li>
          <li>Kiểm tra các components của trang web</li>
          <li>Test responsive</li>
      </ul>
  </td>
    <td></td>
    <td>
    <ul>
          <li>Hiển thị trang Sign Up</li>
          <li>Các components đều hiển thị</li>
          <li>Đáp ứng responsive</li>
      </ul>
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_02</td>
    <td>Kiểm tra phương thức Sign Up</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign Up</li>
          <li>Nhập các thông tin</li>
          <li>Nhấn Sign in</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>FullName : Le Chi Binh</li>
          <li>Gender : Male</li>
          <li>UserName : lchbnh0511</li>
          <li>Password : 123456</li>
        <li>Email : lechibinh0511@gmail.com</li>
        <li>SĐT : 0369721544</li>
      </ul>
 </td>
    <td>
          Tài khoản mới được tạo với các thông tin tương ứng thông tin đã nhập</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_03</td>
    <td>Kiểm tra tên đăng nhập</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign up</li>
          <li>Bỏ trống tên đăng nhập</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn Sign up</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>FullName : Le Chi Binh</li>
          <li>Gender : Male</li>
          <li>Password : 123456</li>
        <li>Email : lechibinh0511@gmail.com</li>
        <li>SĐT : 0369721544</li>
      </ul>
    </td>
    <td>
    <ul>Báo lỗi</ul>
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_04</td>
    <td>Kiểm tra nhập thông tin Fullname</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign up</li>
          <li>Bỏ trống mục fullname</li>
          <li>Nhập các thông tin còn lại</li>
          <li>Nhấn sign up</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>Gender : Male</li>
          <li>UserName : lchbnh0511</li>
          <li>Password : 123456</li>
        <li>Email : lechibinh0511@gmail.com</li>
        <li>SĐT : 0369721544</li>
      </ul>
    </td>
    <td>
    <ul>
          Báo lỗi
      </ul>
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_05</td>
    <td>Kiểm tra nhập password</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign Up</li>
          <li>Bỏ trống ô password</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn sign up</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>FullName : Le Chi Binh</li>
          <li>Gender : Male</li>
          <li>UserName : lchbnh0511</li>
        <li>Email : lechibinh0511@gmail.com</li>
        <li>SĐT : 0369721544</li>
      </ul>
    </td>
    <td>
Báo lỗi</td>
    <td>Pass</td>
  </tr>
 <tr>
    <td>TC_06</td>
    <td>Kiểm tra cảnh báo nếu không nhập email</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign Up</li>
          <li>Bỏ trống ô Email address</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn sign up</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>FullName : Le Chi Binh</li>
          <li>Gender : Male</li>
          <li>UserName : lchbnh0511</li>
          <li>Password : 123456</li>
        <li>SĐT : 0369721544</li>
      </ul>
    </td>
    <td>Báo lỗi</td>
    <td>Pass</td>
  </tr>
 <tr>
    <td>TC_07</td>
    <td>Kiểm tra báo lỗi khi bỏ trống Phone Number</td>
    <td>
       <ul>
          <li>Truy cập tới trang Sign Up</li>
          <li>Bỏ trống ô Phone number</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn sign up</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>FullName : Le Chi Binh</li>
          <li>Gender : Male</li>
          <li>UserName : lchbnh0511</li>
          <li>Password : 123456</li>
        <li>Email : lechibinh0511@gmail.com</li>
      </ul>
    </td>
    <td>Báo lỗi</td>
    <td>Pass</td>
  </tr>
</table>
</div>

### Test Case Thay đổi thông tin tài khoản
Truy cập web bằng một tài khoản user
<div>
<table>
  <tr>
    <th>ID</th>
    <th>Description</th>
    <th>Steps</th>
    <th>Test Data</th>
    <th>Expected Result</th>
    <th>Result</th>
  </tr>
  <tr>
    <td>TC_01</td>
    <td>Sửa Fullname</td>
    <td>
       <ul>
          <li>Truy cập tới trang Tài khoản của tôi</li>
          <li>Nhập tên cần sửa vào mục New Fullname</li>
          <li>Confirm</li>
      </ul>
  </td>
    <td>New fullname: Le Chi Binh</td>
    <td>
    <ul>
          <li>Không có lỗi</li>
          <li>Lưu xuống Database thành công</li>
      </ul>
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_02</td>
    <td>Sửa PassWord</td>
    <td>
       <ul>
          <li>Truy cập tới trang Tài khoản của tôi</li>
          <li>Thay đổi password tại mục New PassWord.</li>
          <li>Confirm để xác nhận</li>
      </ul>
  </td>
   <td>Newpassword: 123456</td>
    <td>
          Không có lỗi. Password được lưu xuống Database.</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_03</td>
    <td>Sửa Gender</td>
    <td>
       <ul>
          <li>Truy cập tới trang Tài khoản của tôi</li>
          <li>Tại mục New Gender chọn Gender mới.</li>
          <li>Confirm để xác nhận.</li>
      </ul>
  </td>
    <td>Gender: Female</td>
    <td>
    <ul>Không có lỗi.Lưu xuống Database thành công
      </ul>
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_04</td>
    <td>Kiểm tra chức năng cập nhật email người dùng.</td>
    <td>
       <ul>
          <li>Truy cập tới trang Tài khoản của tôi.</li>
          <li>Tại mục New Emal address: nhập email cần thay đổi </li>
          <li>Confirm để thay đổi</li>
      </ul>
  </td>
<td>New email address: abc@gmail.com</td>
    <td>Không có lỗi. Email mới được lưu xuống database thành công.</td>
</td>
    <td>Pass</td>
  </tr>
   <tr>
    <td>TC_05</td>
    <td>Kiểm tra chức năng cập nhật SDT người dùng.</td>
    <td>
       <ul>
          <li>Truy cập tới trang Tài khoản của tôi.</li>
          <li>Tại mục New Emal address: nhập SĐT cần thay đổi </li>
          <li>Confirm để thay đổi</li>
      </ul>
  </td>
<td>New Phone: 0886123123</td>
    <td>Không có lỗi. SĐT mới được lưu xuống database thành công.</td>
</td>
    <td>Pass</td>
  </tr>
</table>
</div>
### Test Case Kê đơn thuốc
<div>
<table>
  <tr>
    <th>ID</th>
    <th>Description</th>
    <th>Steps</th>
    <th>Test Data</th>
    <th>Expected Result</th>
    <th>Result</th>
  </tr>
  <tr>
    <td>TC_01</td>
    <td>UI</td>
    <td>
       <ul>
          <li>Truy cập tới trang Kê đơn thuốc</li>
          <li>Kiểm tra các components của trang web</li>
          <li>Test responsive</li>
      </ul>
  </td>
    <td></td>
    <td>
    <ul>
          <li>Hiển thị trang Kê đơn thuốc</li>
          <li>Các components đều hiển thị</li>
          <li>Đáp ứng responsive</li>
      </ul>
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_02</td>
    <td>Kiểm tra phương thức Kê đơn thuốc</td>
    <td>
       <ul>
          <li>Truy cập tới trang Kê đơn thuốc</li>
          <li>Nhập các thông tin</li>
          <li>Nhấn Xác nhận</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>Họ và tên bệnh nhân : Le Chi Binh</li>
          <li>Ngày sinh : 05/11/2003</li>
          <li>Cân nặng : 50</li>
          <li>Gender : Male</li>
          <li>Mã số BHYT: SV98948412</li>
          <li>CCCD : 123456</li>
          <li>Mã định danh y tế : 123456</li>
          <li>Địa chỉ : Đà nẵng</li>
          <li>SĐT : 0369721544</li>
      </ul>
 </td>
    <td>
          Đơn thuốc mới được tạo với các thông tin tương ứng thông tin đã nhập</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_03</td>
    <td>Kiểm tra họ và tên</td>
    <td>
       <ul>
          <li>Truy cập tới trang Kê đơn thuốc</li>
          <li>Bỏ trống Họ và tên</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn Xác nhận</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>Ngày sinh : 05/11/2003</li>
          <li>Cân nặng : 50</li>
          <li>Gender : Male</li>
          <li>Mã số BHYT: SV98948412</li>
          <li>CCCD : 123456</li>
          <li>Mã định danh y tế : 123456</li>
          <li>Địa chỉ : Đà nẵng</li>
          <li>SĐT : 0369721544</li>
      </ul>
    </td>
    <td>
    <ul>Báo lỗi</ul>
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_04</td>
    <td>Kiểm tra nhập thông tin Fullname</td>
    <td>
       <ul>
          <li>Truy cập tới trang Kê đơn thuốc</li>
          <li>Bỏ trống mục ngày sinh</li>
          <li>Nhập các thông tin còn lại</li>
          <li>Nhấn Xác nhận</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>Họ và tên bệnh nhân : Le Chi Binh</li>
          <li>Cân nặng : 50</li>
          <li>Gender : Male</li>
          <li>Mã số BHYT: SV98948412</li>
          <li>CCCD : 123456</li>
          <li>Mã định danh y tế : 123456</li>
          <li>Địa chỉ : Đà nẵng</li>
          <li>SĐT : 0369721544</li>
      </ul>
    </td>
    <td>
    <ul>
          Báo lỗi
      </ul>
</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_05</td>
    <td>Kiểm tra nhập Cân nặng</td>
    <td>
       <ul>
          <li>Truy cập tới trang Kê đơn thuốc</li>
          <li>Bỏ trống ô cân nặng</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn Xác nhận</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>Họ và tên bệnh nhân : Le Chi Binh</li>
          <li>Ngày sinh : 05/11/2003</li>
          <li>Gender : Male</li>
          <li>Mã số BHYT: SV98948412</li>
          <li>CCCD : 123456</li>
          <li>Mã định danh y tế : 123456</li>
          <li>Địa chỉ : Đà nẵng</li>
          <li>SĐT : 0369721544</li>
      </ul>
    </td>
    <td>
Báo lỗi</td>
    <td>Pass</td>
  </tr>
 <tr>
    <td>TC_06</td>
    <td>Kiểm tra cảnh báo nếu không chọn Gender</td>
    <td>
       <ul>
          <li>Truy cập tới trang Kê đơn thuốc</li>
          <li>Bỏ trống ô Gender</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn Xác nhận</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>Họ và tên bệnh nhân : Le Chi Binh</li>
          <li>Ngày sinh : 05/11/2003</li>
          <li>Cân nặng : 50</li>
          <li>Mã số BHYT: SV98948412</li>
          <li>CCCD : 123456</li>
          <li>Mã định danh y tế : 123456</li>
          <li>Địa chỉ : Đà nẵng</li>
          <li>SĐT : 0369721544</li>
      </ul>
    </td>
    <td>Báo lỗi</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_07</td>
    <td>Kiểm tra báo lỗi khi bỏ trống CCCD</td>
    <td>
       <ul>
          <li>Truy cập tới trang Kê đơn thuốc</li>
          <li>Bỏ trống ô CCCD</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn Xác nhận</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>Họ và tên bệnh nhân : Le Chi Binh</li>
          <li>Ngày sinh : 05/11/2003</li>
          <li>Cân nặng : 50</li>
          <li>Gender : Male</li>
          <li>Mã số BHYT: SV98948412</li>
          <li>Mã định danh y tế : 123456</li>
          <li>Địa chỉ : Đà nẵng</li>
          <li>SĐT : 0369721544</li>
      </ul>
    </td>
    <td>Báo lỗi</td>
    <td>Pass</td>
  </tr>
  <tr>
    <td>TC_08</td>
    <td>Kiểm tra báo lỗi khi bỏ trống Địa chỉ</td>
    <td>
       <ul>
          <li>Truy cập tới trang Kê đơn thuốc</li>
          <li>Bỏ trống ô Địa chỉ</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn Xác nhận</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>Họ và tên bệnh nhân : Le Chi Binh</li>
          <li>Ngày sinh : 05/11/2003</li>
          <li>Cân nặng : 50</li>
          <li>Gender : Male</li>
          <li>Mã số BHYT: SV98948412</li>
          <li>CCCD : 123456</li>
          <li>Mã định danh y tế : 123456</li>
          <li>SĐT : 0369721544</li>
      </ul>
    </td>
    <td>Báo lỗi</td>
    <td>Pass</td>
  </tr>
 <tr>
    <td>TC_09</td>
    <td>Kiểm tra báo lỗi khi bỏ trống Phone Number</td>
    <td>
       <ul>
          <li>Truy cập tới trang Kê đơn thuốc</li>
          <li>Bỏ trống ô Phone number</li>
          <li>Nhập các thông tin khác bình thường</li>
          <li>Nhấn Xác nhận</li>
      </ul>
  </td>
    <td>
      <ul>
          <li>Họ và tên bệnh nhân : Le Chi Binh</li>
          <li>Ngày sinh : 05/11/2003</li>
          <li>Cân nặng : 50</li>
          <li>Gender : Male</li>
          <li>Mã số BHYT: SV98948412</li>
          <li>CCCD : 123456</li>
          <li>Mã định danh y tế : 123456</li>
          <li>Địa chỉ : Đà nẵng</li>
      </ul>
    </td>
    <td>Báo lỗi</td>
    <td>Pass</td>
  </tr>
</table>
</div>

### Testcase chức năng đơn thuốc
|ID|Description|Step|TestData|Expect Result|Result|
|--|-----------|----|--------|-------------|------|
|TC_01|Kiểm tra giao diện đơn thuốc|Truy cập phần đơn thuốc|  |Hiển thị thành công các đơn hàng đã thuốc|Pass|

### Testcase Quản lí tài khoản
Truy cập web bằng một tài khoản admin
<div>
<table>
  <tr>
    <th>ID</th>
    <th>Description</th>
    <th>Steps</th>
    <th>Test Data</th>
    <th>Expected Result</th>
    <th>Result</th>
  </tr>
  
  <tr>
    <td>TC_01</td>
    <td>Xóa tài khoản</td>
    <td>
       <ul>
          <li>Vào trang quản lí tài khoản</li>
          <li>Nháy nút xóa tại tài khoản cần xóa.</li>
      </ul>
  </td>
   <td>
</td>
    <td>
          Không có lỗi, Xóa thành công.</td>
    <td>Pass</td>
  </tr>
</table>
</div>
