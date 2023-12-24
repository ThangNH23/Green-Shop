import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Body_ProductDetail from "../Body_productDetail/Body_ProductDetail";
import "../Header_PoductDetail/Header_ProductDetail.css";
import Hero from "../../HomePage/Header/Hero";


const Header_ProductDetail = ({ name, image, price, oldPrice }) => {
  const location = useLocation();
  const searchData = new URLSearchParams(location.search);
  const dataParam = searchData.get("data");
  const item = dataParam ? JSON.parse(decodeURIComponent(dataParam)) : null;

  const [counter, setCounter] = useState(1);
  const handleCounter = () => {
    setCounter(counter + 1);
  }
  const handleMinus = () => {
    setCounter(counter - 1);
  }


  return (
    <>
    <Hero/>
      <div className="header_detail">
        <div className="row">
          <div className="col-5">
            <div className="header_ProductImage">
              <img src={item.image} alt={item.name}></img>
              <p>{price}</p>
            </div>
            <div className="otherProduct"></div>
          </div>

          <div className="col-7">
            <div className="info_productDetail">
              <p className="info_productDetail_name">{item.name}</p>
              <div className="categories-star">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-half-o" aria-hidden="true" />
              </div>
              <div className="info_productDetail_price">
                <p className="newPrice">{item.price} đ</p>
                <p className="oldPrice">{item.oldPrice} đ</p>
              </div>
              <div className="footer-homepage-hrtagg">
                <hr width="80%" style={{ color: "#494949" }} />
              </div>
            </div>

            <div className="info_productDetail_content">
              <p>
                Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung
                bình từ 0.8-1,2cm. Lá hình trứng, mép lá nguyên <br />
                gân lá nối rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm
                ở mặt trên, quanh gân lá có màu trắng sữa; <br />
                mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài
                khi rụng để lại các khía màu nâu nhạt.
              </p>
            </div>

            <div className="footer-homepage-hrtag">
              <hr width="80%" style={{ color: "#494949" }} />
            </div>

            {/* số lượng */}
            <div className="info_productDetail_quantity">
              <p className="quantity">Số lượng</p>
              <div id="buy-amount">
                <button className="minusButton" onClick={handleMinus}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <input type="text" name="amount" id="amount" value={counter}></input>
                <button className="plusButton" onClick={handleCounter}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="footer-homepage-hrtag">
              <hr width="80%" style={{ color: "#494949" }} />
            </div>

            <div className="buttons">
              <div className="buy-now">
                <button>MUA NGAY</button>
              </div>
              <div className="search">
                <i class="fa fa-search" aria-hidden="true"></i>
              </div>
              <div className="favorite">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </div>
            </div>

            <div className="socials">
              <div className="facebook_button">
                <button>
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                  <p>Like</p>
                </button>
              </div>
              <div className="facebook_logo_quantity">
                <div class="wrap">
                  <div class="arrow"></div>
                  <div class="arrow-cover"></div>
                  <div class="box ">
                    <span>0</span>
                  </div>
                </div>
              </div>

              <div className="tweet_button">
                <button>
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <p>Tweet</p>
                </button>
              </div>

              <div className="google_button">
                <button>
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                  <p>1</p>
                </button>
              </div>
              <div className="goole_logo_quantity">
                <div class="wrap">
                  <div class="arrow"></div>
                  <div class="arrow-cover"></div>
                  <div class="box_google">
                    <span>0</span>
                  </div>
                </div>
              </div>

              <div className="share_button">
                <button>
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>
                  <p>Share</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Body_ProductDetail />
      </div>
    </>
  );
};

export default Header_ProductDetail;
