import React from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login/Login";

const Home = ({ message }) => {
  const data = {
    id: {
      $oid: "65314d5c61fa344dd181d34e",
    },
    company_name: "Storable Careers - One Posting",
    job_title: "Sr. Financial Analyst",
    city: "United States",
    country: ["United States"],
    job_category: ["Accounting, Payroll & Financial Planning Jobs"],
    job_type: ["Full Time"],
    location_type: ["In-Person"],
    description: "<div> ... (omitted for brevity) ... </div>",
    years_of_experience: {
      $numberInt: "3",
    },
    salary: null,
    date_posted: "2023-10-18",
    application_link:
      "https://boards.greenhouse.io/embed/job_app?for=storablecareers&token=5001974004",
    company_link: "www.storable.com",
    company_logo:
      "https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/912/600/resized/LinkedIn_Posting_GH_Job_Board_(537_×_293_px)_(1).png?1677260086",
    job_board: "Greenhouse",
    job_board_link:
      "https://boards.greenhouse.io/embed/job_board?for=storablecareers",
    promoted: null,
    expired_date: null,
    us_state: null,
    requirements_summary:
      "3+ years Finance/FP&A, Consulting, or Investment Banking experience. BS/BA Degree in Finance, Accounting, Economics, Business or equivalent work experience. Inquisitive nature, strong financial modeling & communication skills, ability to manage multiple projects",
    yoe_range: {
      min: {
        $numberInt: "3",
      },
      max: {
        $numberInt: "3",
      },
    },
    date_posted_parsed: {
      $date: {
        $numberLong: "1697587200000",
      },
    },
    date_posted_epoch: {
      $numberDouble: "1697587200.0",
    },
  };

  return (
    <>
      <div>Hello Welcome to Landing Page(^人^)</div>
      <div>{data.city}</div>
    </>
  );
};

export default Home;
