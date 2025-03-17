import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Chanuka</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" 
                    className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio"
                     className="footer_link">Projects</a>
                </li>

              {/*  <li>
                    <a href="#project"
                     className="footer_link">Projects</a>
                </li>*/}
            </ul>

            <div className="footer_social">
               <a href="https://m.facebook.com/"
                  className='footer_social-link' target='_blank'
                  >
                  <i class="bx bxl-facebook"></i>
               </a>

               <a href="https://www.instagram.com/"
                   className='footer_social-link' target='_blank'>
                   <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://www.tiktok.com/@chanu_ka_i?_t=8r0B8zOwE59&_r=1"
                    className='footer_social-link' target='_blank'>
                    <i class="bx bxl-tiktok"></i>
                </a>

                <a href="https://medium.com/@chanukaisuru"
                 className='footer_social-link' target='_blank'>
                 <i class="bx bxl-medium"></i>
              </a>
            </div>

             <span className="footer_copy">
                &copy; Crypticaléoder. All rights reserved
             </span>
        </div>
    </footer>
  );
};

export default Footer;