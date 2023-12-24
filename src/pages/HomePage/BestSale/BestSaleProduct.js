const BestSaleProduct = ({ image, name, price, evaluation, sale, discount }) => {
    return (
      <>
        <div className="col-4">
          {/* {sale ? (
            <div className="categories-new">
              <p>NEW</p>
            </div>
          ) : (
            <div className="categories-discount">
              <p>50%</p>
            </div>
          )} */}
          <img src={image} alt="name" />
        </div>
        <div className="col-8">
          <div className="categories-page-2-info">
            <span className="categories-page-2-title">{name}</span>
            <div className="categories-page-2-star">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star-half-o" aria-hidden="true" />
            </div>
            <div className="categories-page-2-infoPrice">
              <p className="categories-firstPrice">{price} đ</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default BestSaleProduct;