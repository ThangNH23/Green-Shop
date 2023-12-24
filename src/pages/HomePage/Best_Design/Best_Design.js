const BestDesign = () => {
    return (
      <>
        <div className="col-4">
          <div className="news-image1">
            <img src={require('../../../assets/new-image1.png')} alt="" />
          </div>
          <div className="news-infoDetail">
            <i className="news-infoDetail-time">
              Thứ 7, ngày 31, tháng 12, năm 2015
            </i>
            <p className="news-infoDetail-title">
              15 thiết kế phòng ngủ tuyệt đẹp làm vạn người mê
            </p>
            <p className="news-infoDetail-detail">
              Cùng Sài Gòn Hoa tìm hiểu một vài thiết kế sân vườn được ưa chuộng
              hiện nay nhé ! Kết hợp hàng rào
            </p>
            <i>
              <a className="news-infoDetail-continues" href="/">
                Đọc tiếp
              </a>
            </i>
          </div>
        </div>
      </>
    );
  };
  
  export default BestDesign;
  