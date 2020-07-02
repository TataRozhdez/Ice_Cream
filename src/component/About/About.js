import React from "react";
import "./About.scss";
import Fade from "react-reveal/Fade";
import NavMenu from "../../containers/NavMenu/NavMenu";
import TextCenterBlock from "../../containers/TextCenterBlock/TextCenterBlock";
import Footer from "../../containers/Footer/Footer";

export default function About() {
  return (
    <div className="About">
      <NavMenu />
      <Fade>
        <TextCenterBlock
          bck="AboutPg"
          txtLineFirst="ABOUT"
          txtLineSecond="GELATO"
        />
        <div className="aboutTxtFragment">
          <h2>OUR PLACE</h2>
          <span>We just love ice cream!</span>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide. Tell your visitors the story of how you came up with the
            idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
        <div className="paralax-about" />
        <div className="aboutTxtFragment">
          <h2>OUR LITTLE FACTORY</h2>
          <span>It's what's on the inside that counts</span>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide. Tell your visitors the story of how you came up with the
            idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
      </Fade>
      <Footer />
    </div>
  );
}
