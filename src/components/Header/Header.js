import React from 'react';
import './Header.css'
import Image from '../../images/single-slide-1.png'
const Header = () => {
    return (
        <div className="banner">
            <div className="row py-5 text-light align-items-center">
                <div className="col-8">
                    {/* some text of university */}
                    <h1 className="fs-1 fw-bold">GLAX DU</h1>
                    <h1 className="fs-1 fw-bold">MakeYour Own World</h1>
                    <p className="fs-6 fw-bold">Not all online programs are equal. Gain the clout that comes with a Campbell Online degree. The online degree that opens doors to the best companies, hospitals, and school systems. Small Class Sizes. Dedicated Faculty. Engaging Classes. Accelerated Classes. Trained Professors. Highlights: Fully-Accredited University, Small Class Sizes, Dedicated Faculty Available.</p>
                    <div className="">
                        {/* about us button */}
                        <button type="button" className="btn btn-success mx-5 px-5 py-3 fw-bold rounded-pill">ABOUT US</button>
                        {/* contact us button */}
                        <button type="button" className="btn btn-success px-5 py-3 fw-bold rounded-pill">CONTACT US</button>
                    </div>
                </div>
                <div class="col-4">
                    <img className="img-fluid" src={Image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;