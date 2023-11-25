const Header = () => {
  return (
    <header>
      <div className="header-info">
        <div className="container">
          <div className="header-info-content">
            <div className="header-info-contact">
              <div className="header-info-time">
                <i className="fa-regular fa-clock" />
                <span>Open time: 08:00 - 18:00 Monday - Sunday</span>
              </div>
              <div className="header-info-social">
                <div className="facebook">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </div>
                <div className="twitter">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </div>
                <div className="tumblr">
                  <i className="fa fa-tumblr" aria-hidden="true" />
                </div>
                <div className="vimeo">
                  <i className="fa fa-vimeo" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="header-info-account">
              <div className="header-info-login">
                <i className="fa fa-user" aria-hidden="true" />
                <span>Đăng nhập</span>
              </div>
              <div className="header-info-logout">
                <i className="fa fa-user-plus" aria-hidden="true" />
                <span>Đăng ký</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-background">
        <div className="container">
          <div className="body-content">
            <div className="body-logo">
              <img src={require('../assets/Logo-Icon.png')} alt=''></img>
              <img src={require('../assets/06Gio-hang.png')} alt=''></img>
            </div>
            <div className="body-support">
              <div className="body-call">
                <i className="fa fa-phone" aria-hidden="true" />
                <span>HỖ TRỢ : (04) 6674 2332 - (04) 3786 8904</span>
              </div>
              <div className="body-search">
                <form action="" className="body-search-box">
                  <input
                    className="search"
                    id="search"
                    type="search"
                    placeholder="Tìm kiếm..."
                  />
                  <div>
                    <hr className="body-space" size={30} width={1} />
                  </div>
                  <button className="search-btn">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
            <div className="body-shopping-cart">
              <div className="body-icon-cart">
                <i className="fa fa-shopping-basket" aria-hidden="true" />
              </div>
              <div className="body-shopping-product">
                <p>0 Sản phẩm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="container">
          <div className="nav-bar-background">
            <div className="nav-bar-icon">
              <i className="fa fa-bars" aria-hidden="true" />
            </div>
            <div className="nav-bar-header">
              <nav>
                <ul className="nav-bar-main-menu">
                  <li>
                    <a className="homepage" href="/">
                      TRANG CHỦ
                    </a>
                  </li>
                  <li>
                    <a className="introduce" href="/">
                      GIỚI THIỆU
                    </a>
                  </li>
                  <li className="nav-bar-dropdown">
                    <a className="sanpham" href="/">
                      <span className="produc-text">SẢN PHẨM</span>
                      <i className="fa fa-sort-desc" aria-hidden="true" />
                    </a>
                    <ul className="nav-bar-product-list">
                      <li>
                        <a href="/">item-1</a>
                      </li>
                      <li>
                        <a href="/">item-2</a>
                      </li>
                      <li>
                        <a href="/">item-3</a>
                      </li>
                      <li>
                        <a href="/">item-4</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-bar-dropdown">
                    <a className="sanphammoi" href="/">
                      <span className="produc-text">SẢN PHẨM MỚI</span>
                      <i className="fa fa-sort-desc" aria-hidden="true" />
                    </a>
                    <ul className="nav-bar-product-list">
                      <li>
                        <a href="/">item-1</a>
                      </li>
                      <li>
                        <a href="/">item-2</a>
                      </li>
                      <li>
                        <a href="/">item-3</a>
                      </li>
                      <li>
                        <a href="/">item-4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="tintuc" href="/">
                      TIN TỨC
                    </a>
                  </li>
                  <li>
                    <a className="lienhe" href="/">
                      LIÊN HỆ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="carousel-caption d-none d-md-block"
                style={{ marginBottom: 100 }}
              >
                <p className="content-title">GREEN SHOP</p>
                <p className="content-hire">CHO THUÊ CÂY CẢNH TẾT 21016</p>
                <p className="content-text">
                  <i>
                    (Miễn phí vận chuyển với những đơn hàng có giá trị trên
                    5.000.000 đ)
                  </i>
                </p>
              </div>
              <img
                className="d-block w-100"
                src={require('../assets/background_image-1.png')}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={require('../assets/background_image-1.png')}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={require('../assets/background_image-1.png')}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
