import React, {useEffect, useState} from 'react';
import rest from "../rest/job";
import {useParams} from "react-router-dom";
import {Card} from "antd";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function JobDetailsPage(props) {

    const [job, setJob] = useState({})
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await rest.getJob(id);
                console.log(response.data);
                setJob(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Card>
            <Card type="inner" title="Name" style={{marginTop: '10px'}}>{job.Name}</Card>
            <Card type="inner" title="Schedule" style={{marginTop: '10px'}}>Every {job.ScheduleValue} {job.ScheduleUnit}(s)</Card>
            <Card type="inner" title="Script" style={{marginTop: '10px'}}>
                <AceEditor
                    fontSize={15}
                    mode="python"
                    theme="github"
                    value={job.Script}
                    editorProps={{ $blockScrolling: true }}
                />,
            </Card>
        </Card>
    );
}

export default JobDetailsPage;
