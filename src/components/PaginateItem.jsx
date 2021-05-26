import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function PaginateItem(props) {
    const {icon}=props
    return (
        <FontAwesomeIcon icon={icon} />
    );
}

export default PaginateItem;