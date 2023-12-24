import React from 'react';
import PropTypes from "prop-types";
import { useState } from "react";
import '../Body_productDetail/Body_productDetail.css';


const Body_ProductDetail = () => {
    const [activeContent, setActiveContent] = useState('productInfo');

    const showContent = (contentId) => {
      setActiveContent(contentId);
    };
  
    return (
      <div className="body_productDetail">
        <div className='row'>
          <div className='col-12'>
            <div className="title_ofProduct">
              <button className='info-button' onClick={() => showContent('productInfo')}>Thông tin sản phẩm</button>
              <button onClick={() => showContent('customerReview')}>Khách hàng đánh giá</button>
              <button onClick={() => showContent('aboutUs')}>Về chúng tôi</button>
            </div>
      
            <div className='content_Product'>
              <div className="content" style={{ display: activeContent === 'productInfo' ? 'block' : 'none' }}>
                <p>Tên phổ thông: Dạ lam, Huỳnh tinh cảnh, Dong vằn.</p>
                <p>Tên khoa học: Calathea zebrina</p>
                <p>Họ thực vật: Marantaceae (củ dong)</p>
                <p>Chiều cao: 0,8-1,2m</p>
                <p>Cây lam có nguồn gốc từ Brazil, được du nhập và phân bố rộng ở khắp Việt Nam</p>
                <p>Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên,
                  gân lá nối rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, <br/>
                  quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại
                  các khía màu nâu nhạt. <br/>
                  Cây dạ lam thuộc loại cây bóng bán phần hoặc hoàn toàn, như cầu nước tương đối cao. Cây được nhân giống từ 
                  tách bụi, cây mọc khỏe, tốc độ sinh trưởng nhanh với sức sống mạnh. <br/>
                  Đây là loại cây có dáng đẹp, màu lá mướt mát tươi khỏe, cây rất phù hợp trồng trang trí nội thất-văn phòng. <br/>
                  Ngoài ra, cây còn có đặc điểm lọc khí, làm xanh mát môi trường, giúp điều hòa không khí, đặc biệt tốt cho 
                  những môi trường thường xuyên sử dụng các loại máy móc tảng nhiệt. Có thể bày cây ở <br/> 
                  hành lang hay giữa sảnh, đặt ở cạnh bàn làm việc hay trang trí các góc phòng có diện tích trung bình.
                </p>
              </div>
        
              <div className="content" style={{ display: activeContent === 'customerReview' ? 'block' : 'none' }}>
              <div className="reviewSection">

                    <div className="reviewItem">
                        <div className="top">
                            <div className="clientImage">
                              <img src='https://res.cloudinary.com/djveiec3v/image/upload/v1703319280/hgl0njngj5mkzrgcirc4.jpg' alt=''></img>
                                <span>Nguyen Thang</span>
                            </div>
                            <ul>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-half-o" aria-hidden="true" /></li>
                            </ul>
                        </div>
                        <article>
                          <p className="review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                              voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                              facere exercitationem!</p>
                          <p>Jan 01, 2023</p>
                        </article>
                    </div>

                    <div className="reviewItem">
                        <div className="top">
                            <div className="clientImage">
                                <img src='https://res.cloudinary.com/djveiec3v/image/upload/v1703319280/hgl0njngj5mkzrgcirc4.jpg' alt=''></img>
                                <span>Nguyen Thang</span>
                            </div>
                            <ul>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-half-o" aria-hidden="true" /></li>
                            </ul>
                        </div>
                        <article>
                          <p className="review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                              voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                              facere exercitationem!</p>
                          <p>Jan 01, 2023</p>
                        </article>
                    </div>

                    <div className="reviewItem">
                        <div className="top">
                            <div className="clientImage">
                              <img src='https://res.cloudinary.com/djveiec3v/image/upload/v1703319280/hgl0njngj5mkzrgcirc4.jpg' alt='my_photo'></img>
                              <span>Nguyen Thang</span>
                            </div>
                            <ul>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star" aria-hidden="true" /></li>
                              <li><i className="fa fa-star-half-o" aria-hidden="true" /></li>
                            </ul>
                        </div>
                        <article>
                          <p className="review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                              voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                              facere exercitationem!</p>
                          <p>Jan 01, 2023</p>
                        </article>
                    </div>
                </div>
              </div>
        
              <div className="content" style={{ display: activeContent === 'aboutUs' ? 'block' : 'none' }}>
                <h2>Về chúng tôi</h2>
                <p>Thông tin về chúng tôi...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Body_ProductDetail
