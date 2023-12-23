// FilterComponent.js

import React, { useState } from 'react';
import './Filter.css';
import axios from "axios"
import DisplayComponent from './DisplayComponent';
import {useNavigate} from "react-router-dom"
import {filter} from './APIroute'

const Filter = () => {
    const navigate = useNavigate();
    const [filteredLogs, setFilteredLogs] = useState([]);
    const [display, setDisplay] = useState(false);
    const [filters, setFilters] = useState({
        level: '',
        message:'',
        resourceId: '',
        timestamp: '',
        traceId: '',
        spanId: '',
        // Add more filter properties as needed
        // For example:
        commit: '',
        metadata: {
            parentResourceId: ''
        }
    });

    const [showInput, setShowInput] = useState({
        level: false,
        resourceId: false,
        timestamp: false,
        traceId: false,
        spanId: false,
        // Add more for other filter properties
        // For example:
        commit: false,
        metadata: false
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setShowInput({
            ...showInput,
            [name.replace('Checkbox', '')]: checked
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => {
            if (name === 'metadata.parentResourceId') {
                return {
                    ...prevFilters,
                    metadata: {
                        ...prevFilters.metadata,
                        parentResourceId: value
                    }
                };
            } else {
                return {
                    ...prevFilters,
                    [name]: value
                };
            }
        });
    };
    
    const handletime=()=>{
        navigate("/time");
    }
    const handleFilterSubmit = async(e) => {

        e.preventDefault();
        setDisplay(true);

        const queryParams = new URLSearchParams(filters).toString();

        try {
            const response = await axios.get(`${filter}?${queryParams}`);
            console.log(response.data); // Handle the filtered log data
            setFilteredLogs(response.data);
        } catch (error) {
            console.error('Error filtering logs:', error);
        }
        // console.log(filters); // Check the filters data on submit
    };


      const handlehome=()=>{
            setDisplay(false);
            navigate('/');
      };
   
    if(display===false){
    return (
       
        <div className="json-input-container">
            <h2>Filter Logs</h2>
            <label>
                <input
                    type="checkbox"
                    name="levelCheckbox"
                    onChange={handleCheckboxChange}
                />
                Level:
                {showInput.level && (
                    <input
                        type="text"
                        name="level"
                        value={filters.level}
                        onChange={handleInputChange}
                        autoComplete='off'
                    />
                )}
            </label>
            <label>
                <input
                    type="checkbox"
                    name="messageCheckbox"
                    onChange={handleCheckboxChange}
                    
                />
                message:
                {showInput.message && (
                    <input
                        type="text"
                        name="message"
                        value={filters.message}
                        onChange={handleInputChange}
                        autoComplete='off'
                    />
                )}
            </label>
            <label>
                <input
                    type="checkbox"
                    name="resourceIdCheckbox"
                    onChange={handleCheckboxChange}
                   
                />
                Resource ID:
                {showInput.resourceId && (
                    <input
                        type="text"
                        name="resourceId"
                        value={filters.resourceId}
                        onChange={handleInputChange}
                        autoComplete='off'
                    />
                )}
            </label>
            {/* Add similar checkbox and input fields for other properties */}
            {/* Example for additional properties */}
            <label>
                <input
                    type="checkbox"
                    name="timestampCheckbox"
                    onChange={handleCheckboxChange}
                    
                />
                Timestamp:
                {showInput.timestamp && (
                   
                   <input
                       type="datetime-local"
                       name="timestamp"
                       value={filters.timestamp}
                    //    onChange={(e) => setStartTime(e.target.value)}
                    onChange={handleInputChange}
                   />
                )}
            </label>
            <label>
                <input
                    type="checkbox"
                    name="traceIdCheckbox"
                    onChange={handleCheckboxChange}
                   
                />
                Trace ID:
                {showInput.traceId && (
                    <input
                        type="text"
                        name="traceId"
                        value={filters.traceId}
                        onChange={handleInputChange}
                        autoComplete='off'
                    />
                )}
            </label>
            <label>
                <input
                    type="checkbox"
                    name="spanIdCheckbox"
                    onChange={handleCheckboxChange}
                />
                Span ID:
                {showInput.spanId && (
                    <input
                        type="text"
                        name="spanId"
                        value={filters.spanId}
                        onChange={handleInputChange}
                        autoComplete='off'
                    />
                )}
            </label>
            <label>
                <input
                    type="checkbox"
                    name="commitCheckbox"
                    onChange={handleCheckboxChange}
                />
                Commit:
                {showInput.commit && (
                    <input
                        type="text"
                        name="commit"
                        value={filters.commit}
                        onChange={handleInputChange}
                        autoComplete='off'
                    />
                )}
            </label>
            <label>
                <input
                    type="checkbox"
                    name="metadataCheckbox"
                    onChange={handleCheckboxChange}
                />
                metadata.parentResourceId:
                {showInput.metadata && (
                    <input
                        type="text"
                        name="metadata"
                        value={filters.metadata.parentResourceId}
                        onChange={handleInputChange}
                        autoComplete='off'
                    />
                )}
            </label>
            {/* Continue adding similar checkbox and input fields for other properties */}
            <button onClick={handleFilterSubmit}>Apply Filters</button>
             
             <div class="space">OR</div>

             <button onClick={handletime}>Filter between Timestamp</button>
            </div>
                
       
    );
     }
    else{
        return(
            <>
            <DisplayComponent logs={filteredLogs} />
            <button onClick={handlehome}>Home Page</button>
            </>
        );
    }
};

    export default Filter;
