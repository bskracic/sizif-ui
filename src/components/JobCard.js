import React from 'react';
import {Avatar, Button, Card} from "antd";
import {useNavigate} from "react-router-dom";
import Meta from "antd/es/card/Meta";
import {toDate, toTime} from "../utils/datetime-converter";

function JobCard(props) {

    const { job } = props;

    const navigate = useNavigate();
    const openRuns = () => {
        navigate(`/job/${job.id}`)
    }

    return (
        <div>
            <Card  title={job.name} style={{fontSize: '16px', margin: '10px'}} hoverable type="inner" onClick={openRuns}>
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />} description={job.type}
                />
                Last run: {`${toDate(job.last_run)} | ${toTime(job.last_run)}`}
            </Card>
        </div>
    );
}

export default JobCard;