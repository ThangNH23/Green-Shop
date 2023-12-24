import PropTypes from "prop-types";

const NewProduct = ({ name, price, image, oldPrice, evaluation, sale, status }) => {
  // const ShouldShowNew = sale === "NEW";
  // const ShouldShowDiscount = sale === "-50%";
  // console.log("shouldNew", ShouldShowNew);
  // console.log("Discount", ShouldShowDiscount);

  return (
    <>
      <div className="discount-product-image1">
        {status === true && (
          <div className="categories-new">
            <p>NEW</p>
          </div>
        )}

        {sale !== 0 && (
          <div className="categories-discount ">
            <p>{sale}%</p>
          </div>
        )}
        <img src={image} alt={name}></img>
      </div>
      <div className="new-product-information">
        <p className="categories-name">{name}</p>
        <div className="categories-star">
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-half-o" aria-hidden="true" />
        </div>
        <div className="categories-price">
          <p className="categories-firstPrice">{price} đ</p>
          <p className="categories-priceDiscount">{oldPrice} đ</p>
        </div>
      </div>
    </>
  );
};

NewProduct.propTypes = {
  sale: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default NewProduct;
