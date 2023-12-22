import React from 'react';
import Header from '../Components/Header';
import Navigate from "../Components/Navbar";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Navigate />
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='../../public/images/banner.jpg' className="d-block w-100" alt="banner-01" />
          </div>
          <div className="carousel-item">
            <img src="../../public/images/banner-02.jpg" className="d-block w-100" alt="banner-02" />
          </div>
          <div className="carousel-item">
            <img src="../../public/images/banner-03.jpg" className="d-block w-100" alt="banner-03" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='featured d-flex px-5'>
        <div className='featured_1 ms-3'>
          <img src='../../public/images/featured.jpg'></img>
        </div>
        <div className='featured_2'>
          <p className='h3 text-danger fw-bold'>|Featured</p>
          <p className='h1 fw-bold'>Best Appartment And Sea View</p>
          <div class="modal" tabindex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-danger">Best Useful Links</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p>
                    Loremsjhould beb implementes heresew so it scan be show cased
                  </p>
                  <p>How does it work</p>
                </div>
                <div classn="modal-footer">
                  <p>Why is the Villa Agency the Best ?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='featured_3'>
            <div className='d-flex'>
              <img src="../../public/images/info-icon-01.png"alt='info-icon-png'></img>
             <p className='h3'>250 m^2 <br/> <span className='h5'>Total Space</span></p>
            </div>
            <div className='d-flex'>
              <img src="../../public/images/info-icon-02.png"alt='info-icon-png'></img>
             <p className='h3'>250 m^2 <br/> <span className='h5'>Total Space</span></p>
            </div>
            <div className='d-flex'>
              <img src="../../public/images/info-icon-03.png"alt='info-icon-png'></img>
             <p className='h3'>250 m^2 <br/> <span className='h5'>Total Space</span></p>
            </div>
            <div className='d-flex'>
              <img src="../../public/images/info-icon-04.png"alt='info-icon-png'></img>
             <p className='h3'>250 m^2 <br/> <span className='h5'>Total Space</span></p>
            </div>
        </div>
      </div>

      <div className='video_section text-center fw-bold'>
      <div className='w-25 my-5 m-auto'>
            <p className='h4 fw-bold mb-5 text-danger'>|VIDEO VIEW</p>
            <p className='h1 fw-bold'>Get Closer View and Different Feeling</p>
      </div>
        <img src='../../public/images/video-frame.jpg' alt="video-frame"></img>
      </div>

      <div>
        <div className='details_section w-100 d-flex justify-content-evenly'>
             <div className='d-flex justify-content-evenly'>
              <h1>34</h1>
              <h1>Buildings Finished Now</h1>
             </div>
             <div className='d-flex justify-content-evenly'>
              <h1>34</h1>
              <h1>Buildings Finished Now</h1>
             </div>
             <div className='d-flex justify-content-evenly'>
              <h1 className='text-danger me-5'>34</h1>
              <p className="h5">Buildings Finished Now</p>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
