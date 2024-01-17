// Jobs.js
import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Jobs = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 5;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = data.slice(indexOfFirstJob, indexOfLastJob);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) {
          throw new Error("Network request failed");
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      {currentJobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            color="secondary"
            count={Math.ceil(data.length / jobsPerPage)}
            shape="rounded"
            page={currentPage}
            onChange={handlePageChange}
          />
        </Stack>
        <button className="pagination_nextBtn">
          {/* Next →:-](⌐■_■)✍️(◔◡◔)( ͡° ͜ʖ ͡°)( ͡~ ͜ʖ ͡°)→_→ */}
          Next →_→
        </button>
      </div>
    </div>
  );
};

export default Jobs;
