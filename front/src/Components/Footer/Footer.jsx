import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer__navigation">
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </nav>           
          </div>            
        </BrowserRouter>
      </div> */}

      {/* <div className="footer__contact">
        <p>Email: sanchezd90@gmail.com</p>
      </div> */}

      <div className="footer__social-media">
        {/* Add social media icons or links */}
      </div>

      <div className="footer__newsletter-signup">
        {/* Add a simple signup form */}
      </div>

      <div className="footer__copyright">
        <p>
          &copy; {new Date().getFullYear()} Streamlining. All Rights Reserved.
        </p>
      </div>

      {/* <div className="footer__privacy-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-use">Terms of Use</a>
      </div> */}

      <div className="footer__sitemap">{/* Add a sitemap */}</div>

      {/* <div className="footer__back-to-top">
        <a href="#top">Back to Top</a>
      </div> */}
    </footer>
  );
};
