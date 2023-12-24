import { useEffect, useState } from "react";
import { useNavigate, Router, Route, Switch, Link } from "react-router-dom";
import BestSaleProduct from "./HomePage/BestSale/BestSaleProduct.js";
import OutStanding from "./HomePage/OutstandingProduct/Outstanding_Product.js";
import SaleProduct from "./HomePage/SaleProduct/SaleProduct.js";
import NewProduct from "./HomePage/New_Product/NewProduct.js";
import BestDesign from "./HomePage/Best_Design/Best_Design.js";
import Header from "./HomePage/Header/Header.js";
import Footer from "./HomePage/Footer/Footer.js";
import { key } from "localforage";
import OutstandingGroupFirst from "./HomePage/OutstandingProduct/OutstandingGroupFirst.js";
import OutstandingGroupLast from "./HomePage/OutstandingProduct/OutstandingGroupLast.js";

const Homepage = () => {
  // const navigate = useNavigate();

  // const handleProductClick = (productId) => {
  //   navigate('/content_product/${id}');
  // }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/content_product")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    };
    fetchData();
  }, []);

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
            {Object.keys(data).map((key, index) => {
              if (index % 2 === 0) {
                return <OutstandingGroupFirst dataGroup={data[key]} />;
              } else {
                return <OutstandingGroupLast dataGroup={data[key]} />;
              }
            })}
            {/*             
            {Object.keys(data).map((key) => {
              const items = data[key];
              return items.map((item, index) => (
                <div
                  className={
                    (key === "item1" && index === 0) ||
                    (key === "item2" && index === items.length - 1)
                      ? "col-6"
                      : "col-3"
                  }
                  key={item.id}
                >
                  {console.log(item.id)}
                  <OutStanding
                    sale={item.sale}
                    status={item.status}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    oldPrice={item.oldPrice}
                  />
                </div>
              ));
            })} */}
          </div>

          <div className="row products">
            <div className="col-12 col-md-3 categories-hot-products">
              <p className="hot-product">Sản phẩm mua nhiều</p>
              <div className="footer-homepage-hrtag">
                <hr
                  width="100%"
                  style={{
                    color: "#494949",
                    marginTop: "-45px",
                    marginBottom: "22px",
                  }}
                />
              </div>

              {Object.keys(data).map((key) => {
                const items = data[key];
                return items.map((item, index) => (
                  <div className="categories-page-2" key={item.id}>
                    <BestSaleProduct
                      sale={item.status}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                    />
                  </div>
                ));
              })}
            </div>

            <div className="col-9">
              <div
                className="sanphamkm"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p className="discount-product">Sản phẩm khuyến mãi</p>
                <div
                  className="next_previous"
                  style={{ paddingBottom: "15px" }}
                >
                  <a href="#" class="previous round">
                    &#8249;
                  </a>
                  <a href="#" class="next round">
                    &#8250;
                  </a>
                </div>
              </div>

              <div className="footer-homepage-hrtag">
                <hr
                  width="100%"
                  style={{ color: "#494949", marginTop: "-45px" }}
                />
              </div>
              <div className="row">
                {Object.keys(data).map((key) => {
                  const items = data[key];
                  return items.map((item, index) => (
                    <Link
                      to={`/navigate?data=${encodeURIComponent(
                        JSON.stringify(item)
                      )}`}
                      className="col-4"
                      style={{ textDecoration: "none" }}
                      key={index}
                    >
                      <div className="promotional_product">
                        <SaleProduct
                          sale={item.sale}
                          status={item.status}
                          image={item.image}
                          name={item.name}
                          price={item.price}
                          oldPrice={item.oldPrice}
                        />
                      </div>
                    </Link>
                  ));
                })}
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
            {[...Array(8)].map((_, index) => {
              const key = Object.keys(data)[index % Object.keys(data).length];
              const items = data[key];
              const item = items && items[index % items.length];

              return (
                <div className="col-3" key={item?.id || index}>
                  {item && (
                    <NewProduct
                      sale={item.sale}
                      status={item.status}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      oldPrice={item.oldPrice}
                    />
                  )}
                </div>
              );
            })}
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
            <BestDesign />
            <BestDesign />
            <BestDesign />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
