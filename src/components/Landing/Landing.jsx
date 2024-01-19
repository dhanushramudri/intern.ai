import React from "react";
import Header from "../Header/Header";
import "./Landing.css";
import Footer from "../Footer/Footer";
import LandingSearch from "../../Images/landing_search.png";
import LandingSuitcase from "../../Images/landing_suitcase.png";
import LandingPen from "../../Images/landing_pen.png";
import LandingMagnifier from "../../Images/landing_magnifier.png";
import LandingNotepad from "../../Images/landing_notepad.png";

const Landing = () => {
  return (
    <>
      <Header />
      <div className="landingpage_container">
        <div className="landing_container1">
          <div className="title">
            <div className="title_container">
              <div className="container1_title">
                <span className="unsuckify">Unsuckify</span> the job search
              </div>
              <p className="container1_description">
                We use AI to scan{" "}
                <span className="unsuckify">
                  <span>176,611</span>
                </span>{" "}
                tech jobs in real-time directly from company pages. Every
                company, every job, actually hiring on the internet.{" "}
              </p>
              <button className="landing_joinbutton">Join Now</button>
              <button className="landing_searchbutton">🔎 Search Jobs</button>
            </div>
          </div>
          <div>
            <img src={LandingSearch} alt="search" />
          </div>
        </div>
        <div className="landing_container2">
          <div className="landing_page_how_title">
            Why use <span className="unsuckify">Intern</span>.ai?
          </div>
          <div className="landing_page_cards_container">
            <div
              className="landing_page_card"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="landing_page_card_img_container">
                <img
                  src={LandingSuitcase}
                  className="landing_page_card_img1"
                  alt="landing page card"
                />
              </div>
              <div className="landing_page_card_content1">
                <h1 className="landing_page_card_title">
                  Access the hidden job market
                </h1>
                <div className="landing_page_card_subtitle">
                  We scan the career pages of every single company on the
                  internet to find jobs that you’ll never find on LinkedIn,
                  Indeed, or any other job search tool 🤫
                </div>
              </div>
            </div>
          </div>
          <div className="landing_page_cards_container">
            <div
              className="landing_page_card"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="landing_page_card_img_container">
                <img
                  src={LandingMagnifier}
                  className="landing_page_card_img2"
                  alt="card"
                />
              </div>
              <div className="landing_page_card_content2">
                <h1 className="landing_page_card_title">
                  No expired jobs... ever.
                </h1>
                <div className="landing_page_card_subtitle">
                  Job boards are filled with old listings that companies forget
                  to take down. Joby constantly scans companies directly and
                  ONLY has listings that are hiring now. No more wasting your
                  time applying for roles that closed 3 months ago 💅
                </div>
              </div>
            </div>
          </div>
          <div className="landing_page_cards_container">
            <div
              className="landing_page_card"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="landing_page_card_notepad_container">
                <img
                  src={LandingNotepad}
                  className="landing_page_card_notepad_img"
                  alt="notepad"
                />
                <img
                  src={LandingPen}
                  className="landing_page_card_pen_img"
                  alt="cardpen"
                />
              </div>
              <div className="landing_page_card_content1">
                <h1 className="landing_page_card_title">Get Hired Faster</h1>
                <div className="landing_page_card_subtitle">
                  Spend less time searching and more time applying. Joby is your
                  one-stop-shop job search engine to beat them all. Find your
                  dream job faster 🕒
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div>container2</div>
        <div>container3</div>
        <div>container4</div>
        <div>container5</div>
        <div>container6</div> */}
      </div>
      <Footer />
    </>
  );
};

export default Landing;
