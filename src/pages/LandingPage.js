import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import rest from "../rest/job";
import JobCard from "../components/JobCard";

function LandingPage(props) {

    const navigate = useNavigate();

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
        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', padding: '10px'}}>
            <div style={{flexDirection: 'column', alignContent: 'center', width: '100%'}}>
                {jobs.map((job, index) => (
                    <JobCard  job={job} />
                ))}
            </div>
        </div>
    );
}

export default LandingPage;