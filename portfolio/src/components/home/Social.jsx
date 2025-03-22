import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FiFacebook } from "react-icons/fi";
import { RiMediumLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";




const Social = () => {
  const socialRef = useRef(null);

  useEffect(() => {

    const element = socialRef.current;

    
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

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className='home_social' ref={socialRef}>
      <a href="https://www.linkedin.com/in/chanuka-isuru-5030492b2/"
         className='home_social-icon' target='_blank'>
        <FiLinkedin size={30} color="black" />
        </a>

      <a href="https://medium.com/@chanukaisuru"
         className='home_social-icon' target='_blank'>
        <RiMediumLine size={30} color="black" />
      </a>

      <a href="https://m.facebook.com/"
         className='home_social-icon' target='_blank'>
        <FiFacebook size={30} color="black" />
      </a>

      <a href="https://github.com/Chanukaisuru"
         className='home_social-icon' target='_blank'>
        <FiGithub size={30} color="black" />
      </a>
    </div>
  );
};

export default Social;
