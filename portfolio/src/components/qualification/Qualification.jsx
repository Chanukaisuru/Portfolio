import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const qualificationRef = useRef(null);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // GSAP animation for only the content in qualification_data_b and qualification_data
            gsap.fromTo(
              ".qualification_data_b > div:first-child", // Animate content section in qualification_data_b
              { x: -250, opacity: 0 },
              { x: 0, opacity: 1, duration: 2, ease: "power3.out" }
            );

            gsap.fromTo(
              ".qualification_data > div:last-child", // Animate content section in qualification_data
              { x: 200, opacity: 0 },
              { x: 0, opacity: 1, duration: 2, ease: "power3.out" }
            );
          }
        });
      },
      { threshold: 0.1, once: false } // Trigger animation on each entry
    );

    if (qualificationRef.current) {
      observer.observe(qualificationRef.current);
    }

    return () => {
      if (qualificationRef.current) {
        observer.unobserve(qualificationRef.current);
      }
    };
  }, [toggleState]);

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container container" ref={qualificationRef}>
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data_b">
              <div>
                <h3 className="qualification_title">Bachelor of Information & Communication Technology Honours</h3>
                <span className="qualification_subtitle">Uva Wellassa University of Sri Lanka</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span> {/* Middle line, static */}
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div> {/* Middle line, static */}
              </div>
              <div>
                <h3 className="qualification_title">G.C.E. (A/L)</h3>
                <span className="qualification_subtitle">MR/Narandeniya National College</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2020
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            {/* Experience content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
