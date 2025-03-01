import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Social = () => {
  const socialRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Trigger the GSAP animation when the component is in view
            gsap.fromTo(
              ".home_social-icon",
              { x: -100, opacity: 0 },
              { x: 30, opacity: 1, duration: 2, stagger: 0 }
            );
          }
        });
      },
      { threshold: 0.1 } // Adjust this value for when you want the animation to trigger
    );

    if (socialRef.current) {
      observer.observe(socialRef.current);
    }

    return () => {
      if (socialRef.current) {
        observer.unobserve(socialRef.current);
      }
    };
  }, []);

  return (
    <div className='home_social' ref={socialRef}>
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
