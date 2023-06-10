import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card, List, Spin,} from "antd";
import rest from "../rest/job";
import {CheckCircleOutlined, CheckCircleTwoTone, LoadingOutlined} from "@ant-design/icons";
import * as PropTypes from "prop-types";
import {toDate, toTime} from "../utils/datetime-converter";


const LoadingIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);

function Panel(props) {
    return null;
}

Panel.propTypes = {
    header: PropTypes.string,
    children: PropTypes.node
};

function JobRunsPage(props) {

    const {id} = useParams();
    const [job, setJob] = useState({Runs: []});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const openDetails = () => {
        navigate(`/job/${job.ID}/details`)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await rest.getJob(id);
                console.log(response.data);
                setJob(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <Card title={job.Name} style={{fontSize: '16px'}}>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <p>Runs every {job.ScheduleValue} {job.ScheduleUnit}(s)</p>
                    <Button style={{marginLeft: '5px'}} onClick={openDetails}>Settings</Button>
                </div>
                {loading ? (<Spin indicator={LoadingIcon} />) : (
                    <List
                        itemLayout="horizontal"
                        dataSource={job.Runs}
                        renderItem={(run, index) => (
                                <List.Item.Meta
                                    title={<a><CheckCircleOutlined style={{color: 'green'}} /> #{run.ID} </a>}
                                    description={`${toDate(run.FinishedAt)} | ${toTime(run.FinishedAt)}`}
                                />
                        )}
                    />
                )}
            </Card>

        </div>
    );
}


export default JobRunsPage;