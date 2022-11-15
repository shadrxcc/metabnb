import React from 'react'
import '../styles/footer.css'
import metalogo from '../assets/metabnbwhite.svg'
import fb from '../assets/facebook.svg'
import ig from '../assets/instagram.svg'
import tw from '../assets/twitter.svg'

function Footer() {
  return (
    <div id="footer" className="py-5 px-5">
      <div className="row">
        <div className="col-md me-lg-5">
          <img
            src={metalogo}
            className="mb-lg-5 img-fluid"
            alt="metabnb logo"
          ></img>
          <div className="d-flex pt-5 gap-4">
            <img src={fb} alt="facebook logo"></img>
            <img src={ig} alt="instagram logo"></img>
            <img src={tw} alt="twitter logo"></img>
          </div>
        </div>
        <div className="col-md pt-2 text-start">
          <h5>Community</h5>
          <p className="footer-links">NFT</p>
          <p className="footer-links">Tokens</p>
          <p className="footer-links">Landlords</p>
          <p className="footer-links">Discord</p>
        </div>
        <div className="col-md pt-2 text-start">
          <h5>Places</h5>
          <p className="footer-links">Castle</p>
          <p className="footer-links">Farm</p>
          <p className="footer-links">Beach</p>
          <p className="footer-links">Learn more</p>
        </div>
        <div className="col-md pt-2 text-start">
          <h5>About us</h5>
          <p className="footer-links">Road map</p>
          <p className="footer-links">Creators</p>
          <p className="footer-links">Career</p>
          <p className="footer-links">Contact us</p>
        </div>
      </div>
      <div className="row ">
        <div className="col-12 copyright mb-3">
          <p>&copy; 2022 Metabnb</p>
        </div>
      </div>
    </div>
  );
}

export default Footer