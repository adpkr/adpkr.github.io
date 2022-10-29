/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img id="profile" src="/person.png" alt="" />
          </div>
          

          <div className="banner-content">
            <h6>Hello, I'm Amardeep Kumar</h6>
            <h3>JAVA Backend Developer</h3>
            <p>
            Seeking a role, where I will be able to apply my skills, work experiences in the Technology and
             IT sector by making differences through quality, with strict adherence in achieving the Organization Goals.
             <br/>
             <br/>
             “A Developer knows he has achieved perfection not when there is nothing left
              to add, but when there is nothing left to take away.”
              <br/>
              <br/>
              Why You Should Hire me?<br/>
              1. Ability to code for more than 12 Hours a day,<br/>
              2. Ready to work for all 7 Days of Week,<br/>
              3. Ready to join within a span of 5--7 Days,<br/>
              4. Ready to fill any kind of Job contract (If Needed),<br/>
              {/* 5. As I am an MBA have Organization Ethics and Disciplines,<br/> */}
              5. Comfortable to work in Teams,<br/>
              6. Ready to work any number of Odd Hours,<br/>
              7.	 Especially wants to learn and work on JAVA.<br/>
              8.	 Just Need a Chance to Join, To learn from you and To work for you.<br/>

            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
