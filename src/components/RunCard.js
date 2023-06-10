import {useNavigate} from "react-router-dom";
import {Button, Card} from "antd";
import React from "react";
import {
    CheckCircleTwoTone,
    CloseCircleTwoTone,
    SyncOutlined
} from "@ant-design/icons";
function RunCard(props) {

    const { run } = props;

    const navigate = useNavigate();
    const openDetails = () => {
        navigate(`/job/${run.JobId}/${run.ID}`)
    }

    let statusIcon = {};

    if(run.Status === 1) {
        statusIcon = ( <SyncOutlined spin /> );
    } else if (run.Status === 2) {
            statusIcon = ( <CheckCircleTwoTone size={20} twoToneColor="#52c41a" /> );
    } else {
        statusIcon = (<CloseCircleTwoTone twoToneColor="red" />);
    }

    return (
        <div>
            <Card
                title={(<p>{statusIcon} Job ID: {run.ID}</p>)}
                style={{fontSize: '16px', width: '100%'}} type="inner" extra={<Button onClick={openDetails}>Details</Button>}>
            </Card>
        </div>
    );
}



export default RunCard;