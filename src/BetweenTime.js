import React, { useState } from 'react';
import axios from 'axios';
import {time} from './APIroute'
import {useNavigate} from 'react-router-dom'

const FilterLogs = () => {
    const navigate=useNavigate();
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [filteredLogs, setFilteredLogs] = useState([]);

    const handleFilter = async () => {
        try {
            // console.log(startTime);
            // console.log(endTime);
            const response = await axios.get(`${time}?startTime=${startTime}&endTime=${endTime}`);
            setFilteredLogs(response.data);
        } catch (error) {
            console.error('Error filtering logs:', error);
        }
    };

    const handlehome=()=>{
        navigate('/');
  };

    return (
        <>
        <div className="json-input-container">
            <h2>Filter Logs by Timestamp</h2>
            <div>
                <label>Start Time:</label>
                <input
                    type="datetime-local"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </div>
            <div>
                <label>End Time:</label>
                <input
                    type="datetime-local"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
            </div>
            <button onClick={handleFilter}>Filter Logs</button>

            {/* Display filtered logs */}
            <div>
                <h3>Filtered Logs:</h3>
                <ul>
                    {filteredLogs.map((log, index) => (
                        <li key={index} className="log-item">
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
        </div>
        <button onClick={handlehome}>Home Page</button>
        </>
    );
};

export default FilterLogs;
