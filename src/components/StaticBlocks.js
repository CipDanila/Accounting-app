import React from 'react';
import './StaticBlocks.css';


function StaticBlock(props) {
    let className="text-block ";
    if (props.className) {
        className += props.className;
    }
    return (
        <div className={className}>
            <div className="text-block-content">
                <div className="text-block-icon">{props.icon}</div>
                <h3 className="text-block-title">{props.title}</h3>
                <p className="text-block-description">{props.description}</p>
            </div>
        </div>
    );
}

export default StaticBlock;