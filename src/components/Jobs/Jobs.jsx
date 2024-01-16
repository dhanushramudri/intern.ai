// Jobs.js
import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
  const [data, setData] = useState([]);

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

  return (
    <div>
      {data.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
