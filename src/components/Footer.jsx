import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="main-footer" className="py-2">
      <div className="container footer-container">
        <div>
          <h2>
            <span id="NC">NC</span> News
          </h2>
          <p>
            NC News is an full-stack project built during a coding bootcamp with
            Northcoders - Manchester
          </p>
        </div>
        <div>
          <h2>EMAIL NEWSLETTER</h2>
        </div>
        <div>
          <h2>Site Links</h2>
          <ul>
            <Link to="/privicy/">
              <li>About</li>
            </Link>
            <Link to="/privicy/">
              <li>Privicy Policy</li>
            </Link>
            <Link to="/privicy/">
              <li>Help and Support</li>
            </Link>
            <Link to="/privicy/">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div>
          <h2>Join our club</h2>
        </div>
        <div>
          <p>Copyright &copy; 2021 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
