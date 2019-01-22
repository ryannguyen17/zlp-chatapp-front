# Web Chat NT Zalopay


#### Yêu cầu

- Xây dựng một ứng dụng chat có các tính năng sau:
    - Đăng nhập/Đăng ký.
    - Hỗ trợ chat giữa 2 user hoặc chat nhóm.
    - Hỗ trợ notification khi có tin nhắn mới.
    - Hiển thị lịch sử chat trong khung chat.
    - Có thể đề xuất thêm chức năng khác nếu thích (bonus điểm).
- Frontend sử dụng ReactJS. Giao diện có thể tham khảo Zalo PC hoặc FB Messenger.
- Dùng Redux để làm State management.
- Backend sử dụng NodeJS hoặc Java.
- Database có thể dùng MongoDB, Redis, hoặc RocksDB (recommended).
- Sử dụng JWT để authenticate các API call.
- Có thể dùng Swagger để thiết kế API.

#### Hướng dẫn

- Xác định các chức năng mà app của em hỗ trợ.
- Thiết kế các màn hình theo các chức năng trên.
- Thiết kế database để lưu trữ dữ liệu. Nên lưu ý cách thiết kế DB trên document-base DB và key-value store sẽ khác nhau. Nên cân nhắc lựa chọn loại DB phù hợp.
- Thiết kế API. API là phần quan trọng để giao tiếp giữa frontend và backend, cần thiết kế một cách cẩn thận trước khi bắt đầu code.
- Thiết kế API cho phần Socket.
- Backend:
    - Implement các API.
    - Verify tính đúng đắn của API dùng **Postman** hoặc **Insomnia**.
- Frontend:
    - Implement các component giao diện.
    - Thiết kế global state (nếu có dùng Redux)
    - Implement các xử lý trên Frontend.

