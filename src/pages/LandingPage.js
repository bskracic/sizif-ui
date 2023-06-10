import React, {useEffect, useState} from 'react';
import rest from "../rest/job";
import JobCard from "../components/JobCard";
import {Card} from "antd";

function LandingPage(props) {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await rest.getJobs();
                console.log(response.data);
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <Card title="Jobs">
                {jobs.map((job, index) => (
                    <JobCard  job={job} />
                ))}
            </Card>
        </div>
    );
}

export default LandingPage;