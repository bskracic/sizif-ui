import React from 'react';
import {useParams} from "react-router-dom";

function JobDetailsPage(props) {

    const { id } = useParams();

    return (
        <div>
            {id}
        </div>
    );
}

export default JobDetailsPage;