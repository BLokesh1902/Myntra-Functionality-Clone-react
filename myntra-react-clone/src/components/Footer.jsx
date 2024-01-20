import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="footer_container">
        <div class="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <Link to="/">Men</Link>
          <Link to="/">Women</Link>
          <Link to="/">Kids</Link>
          <Link to="/">Home & Living</Link>
          <Link to="/">Beauty</Link>
          <Link to="/">Gift Card</Link>
          <Link to="/">Myntra Insider</Link>
        </div>

        <div class="footer_column">
          <h3>CUSTOMER POLICIES</h3>

          <Link to="/">Contact Us</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Terms Of Use</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Track Orders</Link>
          <Link to="/">Shipping</Link>
          <Link to="/">Cancellation</Link>
        </div>

        <div class="footer_column">
          <h3>USEFUL LINKS</h3>

          <Link to="/">Blog</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Site Map</Link>
          <Link to="/">Corporate Information</Link>
          <Link to="/">Whitehat</Link>
          <Link to="/">Cleartrip</Link>
          <Link to="/">Myntra Insider</Link>

        </div>
      </div>
      <hr />

      <div class="copyright">© 2023 www.myntra.com. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
