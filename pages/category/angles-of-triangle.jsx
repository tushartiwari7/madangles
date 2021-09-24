import React from 'react';
import sumofangles from '../../scripts/sumofangles';
import PageComponent from '../../components/PageComponent';
const angles = () => {
    return (
        <div>
        <PageComponent 
        id={4}
        title="Check whether Angles form a Triangle"
        variant="angle"
        algorithm={sumofangles}
        />
        </div>
    )
}

export default angles;
