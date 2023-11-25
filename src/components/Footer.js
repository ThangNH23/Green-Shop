const Footer = () => {
  return (
    <footer>
      <div className="footer-homepage">
        <div className="container">
          <div className="footer-homepage-header">
            <div className="footer-homepage-info">
              <p>KÊNH THÔNG TIN TỪ CHÚNG TÔI</p>
              <div className="footer-homepage-social">
                <div className="facebook">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </div>
                <div className="twitter">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </div>
                <div className="youtube">
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </div>
                <div className="vimeo">
                  <i className="fa fa-vimeo" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="footer-homepage-register">
              <p className="receive">ĐĂNG KÝ NHẬN</p>
              <p>EMAIL TỪ CHÚNG TÔI</p>
            </div>
            <div className="footer-homepage-form">
              <form action="" className="footer-homepage-search">
                <input
                  type="search"
                  id="search"
                  className="footer-homepage-search"
                />
                <button>
                  <i className="fa fa-paper-plane" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
          <div className="footer-homepage-hrtag">
            <hr width="100%" style={{ color: "#494949" }} />
          </div>
          <div className="footer-homepage-content">
            <div className="footer-homepage-firstContent">
              <div className="footer-homepage-logo">
                <img src={require('../assets/Logo-Icon.png')} alt="" />
              </div>
              <div className="footer-homepage-establish">
                <p>
                  Green Shop được thành lập từ 8/2010 được sự tin tưởng của
                  khách hàng trong suốt thời gian hoạt động đến nay cửa hàng
                  ngày một phát triển
                </p>
              </div>
              <div className="footer-homepage-contact">
                <div className="phone">
                  <i
                    className="fa fa-mobile"
                    aria-hidden="true"
                    style={{
                      color: "#3fb871",
                      fontSize: 22,
                      marginRight: 10,
                    }}
                  />
                  <p>Điện thoại : (84-4) 66.558.868</p>
                </div>
                <div className="email">
                  <i
                    className="fa fa-envelope-o"
                    aria-hidden="true"
                    style={{ color: "#3fb871", marginRight: 10 }}
                  />
                  <p>Email: info@dkt.com.vn</p>
                </div>
              </div>
            </div>
            <div className="footer-homepage-secondContent">
              <div className="footer-homepage-infoCustomer">
                <p className="info_title">THÔNG TIN KHÁCH HÀNG</p>
                <div className="footer-homepage-detailInfo">
                  <p>&gt; Tài khoản của tôi</p>
                  <p>&gt; Sản phẩm yêu thích</p>
                  <p>&gt; Lịch sử mua hàng</p>
                  <p>&gt; Chính sách đổi trả</p>
                  <p>&gt; Góp ý, khiếu nại</p>
                </div>
              </div>
            </div>
            <div className="footer-homepage-thirdConten">
              <div className="footer-homepage-infoCustomer">
                <p className="info_title">HỖ TRỢ DỊCH VỤ</p>
                <div className="footer-homepage-detailInfo">
                  <p>&gt; Hệ thống cửa hàng</p>
                  <p>&gt; Hướng dẫn mua hàng</p>
                  <p>&gt; Hướng dẫn thanh toán</p>
                  <p>&gt; Tích điểm đổi quà</p>
                  <p>&gt; Câu hỏi thường gặp</p>
                </div>
              </div>
            </div>
            <div className="footer-homepage-fourContent">
              <div className="footer-homepage-infoCustomer">
                <p className="info_title">DANH SÁCH ƯU ĐÃI</p>
                <div className="footer-homepage-detailInfo">
                  <p>&gt; Chính sách giao hàng</p>
                  <p>&gt; Chính sách đổi trả sản phẩm</p>
                  <p>&gt; Chính sách bảo hành</p>
                  <p>&gt; Giới thiệu sản phẩm mới</p>
                  <p>&gt; Chính sách trả góp</p>
                </div>
              </div>
            </div>
            <div className="footer-homepage-fiveContent">
              <div className="footer-homepage-infoCustomer">
                <p className="info_title">TIN TỨC</p>
                <div className="footer-homepage-detailInfo">
                  <p>&gt; Tin mới</p>
                  <p>&gt; Khiếu nại</p>
                  <p>&gt; Tuyển dụng</p>
                  <p>&gt; Download</p>
                  <p>&gt; Tags</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
