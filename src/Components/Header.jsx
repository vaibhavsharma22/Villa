import React from 'react';

const Header = () => {
    return (
        <div className='header d-flex justify-content-between'>
            <div className='d-flex ms-5'>
                <div className='ms-5'>
                    <i className="fa-solid fa-envelope fs-4" style={{color:"orange",}}></i>
                    <span className='ms-2 fs-5 text-secondary'>
                        info@company.com
                    </span>
                </div>

                <div className='ms-5'>
                    <i className="fa-regular fa-map fs-4" style={{color:"orange",}}></i>
                    <span className='ms-2 fs-5 text-secondary'>
                        Sunny Islashbridge 1357
                    </span>
                </div>
            </div>


            <div className='d-flex me-5'>
                <div className='head-icon ms-4 p-2'>
                    <i className="fa-brands fa-facebook fs-2" style={{color: "white",}}></i>
                </div>
                <div className='head-icon ms-4 p-2'>
                    <i className="fa-brands fa-twitter fs-2" style={{color: "white",}}></i>
                </div>
                <div className='head-icon ms-4 p-2'>
                    <i className="fa-brands fa-linkedin fs-2" style={{color: "white",}}></i>
                </div>
                <div className='head-icon ms-4 p-2'>
                    <i className="fa-brands fa-instagram fs-2" style={{color: "white",}}></i>
                </div>
            </div>
        </div>
    )
}

export default Header
