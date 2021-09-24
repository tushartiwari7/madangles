import React from 'react'
import PageComponent from '../../components/PageComponent';
import getHypotenuse from '../../scripts/getHypotenuse';


const hypotenuse = () => {
    return (
        <div>
            <PageComponent
                id={3}
                title="Calculate Hypotenuse"
                algorithm={getHypotenuse}
            />
        </div>
    )
}

export default hypotenuse;
