import React from 'react';

const FullView = ({ url, handleClose }) => {
    return (
        <div className="modal-container" onClick={() => handleClose()} >
            <div className="modal-body">
                <img width='500' height="500" src={url} />
            </div>
        </div>
    );
};

export default FullView;