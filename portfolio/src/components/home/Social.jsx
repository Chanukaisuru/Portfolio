import React, { useEffect } from 'react';
import gsap from 'gsap';

const Social = () => {
  useEffect(() => {
    gsap.to(".home_social-icon", {
      x: 30, // Adjust the value to change the animation distance
      duration: 2, // Adjust the value to change the duration of the animation
      stagger: 0.2, // Adds a slight delay between each icon animation
    });
  }, []);

  return (
    <div className='home_social'>
        <a href="https://www.linkedin.com/in/chanuka-isuru-5030492b2/"
        className='home_social-icon' target='_blank'>
            <i className="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://medium.com/@chanukaisuru"
        className='home_social-icon' target='_blank'>
            <i className="uil uil-medium-m"></i>
        </a>

        <a href="https://m.facebook.com/"
        className='home_social-icon' target='_blank'>
            <i className="uil uil-facebook-f"></i>
        </a>

        <a href="https://github.com/Chanukaisuru"
        className='home_social-icon' target='_blank'>
            <i className="uil uil-github-alt"></i>
        </a>
    </div>
  );
};

export default Social;
