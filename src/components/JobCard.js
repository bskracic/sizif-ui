import React from 'react';
import {Avatar, Card} from "antd";
import {useNavigate} from "react-router-dom";
import Meta from "antd/es/card/Meta";

function JobCard(props) {

    const { job } = props;

    const navigate = useNavigate();
    const openDetails = () => {
        navigate(`/job/${job.id}`)
    }

    return (
        <div>
            <Card style={{fontSize: '16px', margin: '10px'}} hoverable type="inner" onClick={openDetails}>
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title={job.name}
                    description={job.type}
                />
                Last run: {job.last_run}
            </Card>
            {/*<Card*/}
            {/*    hoverable*/}
            {/*    style={{*/}
            {/*        width: '95%',*/}
            {/*        margin: '7px',*/}
            {/*        fontSize: '20px'*/}
            {/*    }}*/}

            {/*    onClick={openDetails}*/}
            {/*>*/}
            {/*    {job.name} | {job.type} | {job.last_run}*/}
            {/*</Card>*/}
        </div>
    );
}

export default JobCard;