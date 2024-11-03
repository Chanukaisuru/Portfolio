import React from 'react';

const Social = () => {
  return (
    <div className='home_social'>
        <a href="https://www.linkedin.com/in/chanuka-isuru-5030492b2/"
        className='home_social-icon' target='_blank'>
            <i class="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://medium.com/@chanukaisuru"
        className='home_social-icon' target='_blank'>
            <i class="uil uil-medium-m"></i>
        </a>

        <a href="https://m.facebook.com/"
        className='home_social-icon' target='_blank'>
            <i class="uil uil-facebook-f"></i>
        </a>

        <a href="https://github.com/Chanukaisuru"
        className='home_social-icon' target='_blank'>
            <i class="uil uil-github-alt"></i>
        </a>
    </div>
    
  );
};

export default Social;