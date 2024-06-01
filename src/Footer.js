import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure you create this file and add the CSS there

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About AiSangeet</h5>
            <p>AiSangeet is a revolutionary AI music generation platform, transforming the way music is created and experienced. Join us in exploring the future of music.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: vishaltiwari.up2019@gmail.com</li>
              <li>Phone: +91 9369358493</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="social-icons">
            <i class="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center mt-3">
            <p>&copy; 2024 AiSangeet. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
