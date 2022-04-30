import React from 'react';
import locdata from './GeoJson.json';

const data = locdata.features; // replace with data you get from get request, this is used below as a placeholder

function HighActivity() {
    return (
        <div className='plain-div'>
            <h1> Active Places</h1>
            <p> Here are some of the places on campus that currently have the highest activity. </p>

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

export default HighActivity;