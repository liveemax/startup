import React from 'react';
import Empty from '../pages/Empty';




function RepositoriesEmpty() {
    return (
        <>
            <Empty
                localUser={""}
                notFound={"Not found"}
                setLocalPath={'/user'}/>
        </>
    );
}

export default RepositoriesEmpty;