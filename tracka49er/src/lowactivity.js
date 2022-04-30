import React from 'react';
import locdata from './GeoJson.json';


const data = locdata.features;

function LowActivity() {
    return (
        <div className='plain-div'>
            <h1> Best Places to Study</h1>
            <p> Here are some of the places on campus that currently have the lowest activity. </p>

            <div className='top-3-card'>
                <div className='device'>
                    {data[11].properties.device}
                </div>
                <div className='count'>
                    {data[11].properties.count}
                </div>
                <p>Connections</p>
            </div>

            <div className='top-3-card'>

                <div className='device'>
                    {data[4].properties.device}
                </div>

                <div className='count'>
                    {data[4].properties.count}
                </div>

                <p>Connections</p>

            </div>

            <div className='top-3-card'>
                <div className='device'>
                    {data[6].properties.device}
                </div>
                <div className='count'>
                    {data[6].properties.count}
                </div>
                <p>Connections</p>
            </div>
        </div>
    );

}

export default LowActivity;