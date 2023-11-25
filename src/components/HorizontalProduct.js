const HorizontalProduct = ({ array }) => {
  return (
    <>
      <div className="col-4">
        <img src={require('../assets/spx2-11.png')} alt="" />
      </div>
      <div className="col-8">
        <div className="categories-page-2-info">
          <span className="categories-page-2-title">Cây đa búp xanh</span>
          <div className="categories-page-2-star">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star-half-o" aria-hidden="true" />
          </div>
          <div className="categories-page-2-infoPrice">
            <p>250.000 đ</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalProduct;
