

import React, { useState } from 'react';
import './Injecter.css';
import {store} from  './APIroute'
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const Injecter = () => {
    const navigate=useNavigate();
    const [inputValues, setInputValues] = useState({
        level: '',
        message: '',
        resourceId: '',
        timestamp: '',
        traceId: '',
        spanId: '',
        commit: '',
        metadata: {
            parentResourceId: ''
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };
    const handlehome=()=>{
        navigate('/');
  };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const jsonData = JSON.stringify(inputValues, null, 2);
    //     console.log(jsonData);
    //     // You can store jsonData in a variable or perform further operations
    // };



    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // const jsonData = JSON.stringify(inputValues);
            // console.log(jsonData);
            const response = await axios.post(store, inputValues);
            console.log(response.data);
             navigate('/');
             // Handle success response from the backend
        } catch (error) {
            console.error(error); // Handle error response
        }
    };

    return (
        <div className="json-input-container">
            <h2>Enter Data</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Level:
                    <input
                        type="text"
                        name="level"
                        value={inputValues.level}
                        onChange={handleInputChange}
                        autoComplete='off'
                        required
                    />
                </label>
                <label>
                    Message:
                    <input
                        type="text"
                        name="message"
                        value={inputValues.message}
                        onChange={handleInputChange}
                        autoComplete='off'
                        required
                    />
                </label>
                <label>
                    Resource ID:
                    <input
                        type="text"
                        name="resourceId"
                        value={inputValues.resourceId}
                        onChange={handleInputChange}
                        autoComplete='off'
                        required
                    />
                </label>
                <label>
                    Timestamp:
                    <input
                       type="datetime-local"
                       name="timestamp"
                       value={inputValues.timestamp}
                    //    onChange={(e) => setStartTime(e.target.value)}
                    onChange={handleInputChange}
                    autoComplete='off'
                        required

                   />
                </label>
                <label>
                    Trace ID:
                    <input
                        type="text"
                        name="traceId"
                        value={inputValues.traceId}
                        onChange={handleInputChange}
                        autoComplete='off'
                        required
                    />
                </label>
                <label>
                    Span ID:
                    <input
                        type="text"
                        name="spanId"
                        value={inputValues.spanId}
                        onChange={handleInputChange}
                        autoComplete='off'
                        required
                    />
                </label>
                <label>
                    Commit:
                    <input
                        type="text"
                        name="commit"
                        value={inputValues.commit}
                        onChange={handleInputChange}
                        autoComplete='off'
                        required
                    />
                </label>
                <label>
                    Parent Resource ID:
                    <input
                        type="text"
                        name="parentResourceId"
                        value={inputValues.metadata.parentResourceId}
                        onChange={(e) =>
                            setInputValues({
                                ...inputValues,
                                metadata: {
                                    parentResourceId: e.target.value
                                }
                            })
                        }
                        autoComplete='off'
                        required
                    />
                </label>
                <button type="submit">Store It!</button>
            </form>
            <button onClick={handlehome}>Home Page</button>
        </div>
    );
};

export default Injecter;
