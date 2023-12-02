import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductInfo from "../components/ProductInfo";
import HorizontalProduct from "../components/HorizontalProduct";
import News from "../components/News.js";

const Homepage = () => {
  const [highLineProduct, setHighLineProduct] = useState([
    {
      image: "",
      name: "",
      discount: false,
      evaluation: 1,
      price: 1000,
    },
    {
      image: "",
      name: "",
      discount: true,
      evaluation: 1,
      price: 1000,
    },
    {
      image: "",
      name: "",
      discount: true,
      evaluation: 1,
      price: 1000,
    },
    {
      image: "",
      name: "",
      discount: true,
      evaluation: 1,
      price: 1000,
    },
    {
      image: "",
      name: "",
      discount: true,
      evaluation: 1,
      price: 1000,
    },
    {
      image: "",
      name: "",
      discount: "",
      evaluation: 1,
      price: 1000,
    },
  ]);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch("https://63a571e42a73744b008e23f7.mockapi.io/API/Product")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log("day la data", data);
  //       });
  //   };

  //   fetchData();
  // }, []);

  // console.log("Data mock", data);

  return (
    <>
      <Header />
      <div className="categories">
        <div className="container">
          <div className="row">
            <div className="col-12 outstanding-product">Sản phẩm nổi bật</div>
            <div className="footer-homepage-hrtag">
              <hr
                width="100%"
                style={{ color: "#494949", marginTop: "-30px" }}
              />
            </div>
          </div>
          <div className="row outstanding-product">
            {highLineProduct.map((item, index) => {
              return (
                <div
                  className={
                    index === 0 || index === highLineProduct.length - 1
                      ? "col-6"
                      : "col-3"
                  }
                >
                  <ProductInfo sale={item.discount} />
                </div>
              );
            })}

            {/* <div className="col-6">
              <div className="categories-page-1">
                <ProductInfo sale={true} />
              </div> */}

            {/* null undefine false => false => var ? "true" : "false" ==>  "false"
              "a" 1 true => true => var ? "1" : "false" ==>  "1" */}

            {/* <div className="row">
                <div className="col-6">
                  <ProductInfo sale={true} />
                </div>
                <div className="col-6">
                  <ProductInfo sale={true} />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <ProductInfo sale={true} />
                </div>
                <div className="col-6">
                  <ProductInfo sale={true} />
                </div>
              </div>

              <div className="categories-page-1">
                <ProductInfo sale={true} />
              </div>
            </div> */}
          </div>

          <div className="row products">
            <div className="col-12 col-md-3 categories-hot-products">
              <p className="hot-product">Sản phẩm mua nhiều</p>
              <div className="footer-homepage-hrtag">
                <hr
                  width="100%"
                  style={{ color: "#494949", marginTop: "-45px" }}
                />
              </div>

              {highLineProduct.map((item, index) => (
                <div className="categories-page-2">
                  <HorizontalProduct />
                </div>
              ))}
            </div>

            <div className="col-9">
              <p className="discount-product">Sản phẩm khuyến mãi</p>
              <div className="footer-homepage-hrtag">
                <hr
                  width="100%"
                  style={{ color: "#494949", marginTop: "-45px" }}
                />
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="promotional_product">
                    <ProductInfo sale={true} />
                  </div>

                  <div className="promotional_product">
                    <ProductInfo sale={true} />
                  </div>
                </div>

                <div className="col-4">
                  <div className="promotional_product">
                    <ProductInfo sale={true} />
                  </div>
                  <div className="promotional_product">
                    <ProductInfo sale={true} />
                  </div>
                </div>

                <div className="col-4">
                  <div className="promotional_product">
                    <ProductInfo sale={true} />
                  </div>
                  <div className="promotional_product">
                    <ProductInfo sale={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="image-famous">
                <img src={require("../assets/img-content-1.png")} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="new-product-text">Sản phẩm mới</p>
              <div className="footer-homepage-hrtag">
                <hr
                  width="100%"
                  style={{ color: "#494949", marginTop: "-45px" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <ProductInfo sale={true} />
              <ProductInfo />
            </div>
            <div className="col-3">
              <ProductInfo />
              <ProductInfo />
            </div>
            <div className="col-3">
              <ProductInfo />
              <ProductInfo />
            </div>
            <div className="col-3">
              <ProductInfo />
              <ProductInfo />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="news">Tin tức</p>
              <div className="footer-homepage-hrtag">
                <hr
                  width="100%"
                  style={{ color: "#494949", marginTop: 5, marginBottom: 30 }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <News />
            <News />
            <News />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
