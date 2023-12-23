import React from 'react';
import './DisplayComponent.css'; // Import CSS file for styling
import axios from "axios"

const DisplayComponent = ({ logs }) => {


    const handleDelete=(index)=>{

    }
    return (
        <div className="log-container">
            <h3 className="log-header">Filtered Log Display</h3>
            <ul className="log-list">
                {logs.map((log, index) => (
                    <li key={index} className="log-item">

                        {/* Delete Button in top right */}
                        <button
                            onClick={() => handleDelete(index)}
                            style={{
                                position: 'absolute',
                                // top: '5px',
                                right: '5%',
                            }}
                        >
                            Delete
                        </button>


                        <p><strong>Level:</strong> {log.level}</p>
                        <p><strong>Message:</strong> {log.message}</p>
                        <p><strong>Resource ID:</strong> {log.resourceId}</p>
                        <p><strong>Timestamp:</strong> {log.timestamp}</p>
                        <p><strong>Trace ID:</strong> {log.traceId}</p>
                        <p><strong>Span ID:</strong> {log.spanId}</p>
                        <p><strong>Commit ID:</strong> {log.commit}</p>
                        {log.metadata && (
                            <p><strong>Metadata - Parent Resource ID:</strong> {log.metadata.parentResourceId}</p>
                        )}
                        {/* Display other log properties as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayComponent;
