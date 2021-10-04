import React from 'react';

const Footer = () => {
    return (
        // footer section
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 bg-success p-4 fw-bold text-light">
            {/* about us */}
            <div className="col">
                <h4>ABOUT US</h4>
                <p><i class="fas fa-home"></i> Fulbari, Khulna, Bangladesh</p>
                <p><i class="fas fa-envelope-square"></i> education@email.com</p>
                <p><i class="fas fa-phone-alt"></i> +98 558 547 589</p>
            </div>
            {/* quick link */}
            <div className="col">
                <h4>QUICK LINK</h4>
                <p>Home</p>
                <p>About us</p>
                <p>Courses</p>
                <p>Admission</p>
                <p>Terms & Conditions</p>
            </div>
            {/* courses */}
            <div className="col">
                <h4>COURSES</h4>
                <p>Under Graduate Programmes</p>
                <p>Graduate Programmes</p>
                <p>Diploma Courses</p>
                <p>Others Programmes</p>
                <p>Short Courses</p>
            </div>
            {/* newslatter */}
            <div className="col">
                <h4>News Latter</h4>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Your E-mail Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                </div>

                <button type="button" class="btn btn-danger">SUBMIT</button>

            </div>
            <div className="d-flex m-auto p-5">
                <div><h2><i class="fab fa-facebook-square me-3"></i></h2></div>
                <div><h2><i class="fab fa-twitter me-3"></i></h2></div>
                <div><h2><i class="fab fa-instagram-square me-3"></i></h2></div>
                <div><h2><i class="fas fa-envelope-open-text me-3"></i></h2></div>
            </div>
        </div>
    );
};

export default Footer;