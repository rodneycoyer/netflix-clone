import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './watch.scss';

const Watch = () => {
    return (
        <div className="watch">
            <div className="back-btn">
                <ArrowBackIcon/>
                Home
            </div>
            <video
                className="video" 
                src="https://youtu.be/NPY5Iq-tCvk"
                autoPlay
                progress
                controls
            />
        </div>
    );
}

export default Watch;


