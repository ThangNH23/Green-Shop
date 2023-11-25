import PropTypes from 'prop-types';

const ProductInfo = ({ sale }) => {
  return (
    <>
      <div className="discount-product-image1">
        {sale ? (
          <div className="categories-new">
            <p>New</p>
          </div>
        ) : (
          <div className="categories-new">
            <p>50%</p>
          </div>
        )}
        <img src={require('../assets/spx2-15.png')} alt=''></img>
        {/* <img src={`${process.env.PUBLIC_URL}/src/assets/spx2-4.png`} alt='' /> */}
      </div>
      <div className="new-product-information">
        <p className="categories-name">Cây Dạ Lamm</p>
        <div className="categories-star">
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-half-o" aria-hidden="true" />
        </div>
        <div className="categories-price">
          <p className="categories-firstPrice">250.000 đ</p>
          <p className="categories-priceDiscount">250.000 đ</p>
        </div>
      </div>
    </>
  );
};

ProductInfo.propTypes = {
    sale: PropTypes.string
}

export default ProductInfo;
