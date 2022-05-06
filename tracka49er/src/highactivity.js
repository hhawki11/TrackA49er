import React from 'react';
import locdata from './GeoJson.json';

const data = locdata.features; // replace with data you get from get request, this is used below as a placeholder

function HighActivity() {
    //gets top 3 valuse from data
    let fi = 0; //first index
    let si = 0; //second index
    let ti = 0; //third index
        for (let x = 0; x < data.length; x++) {
            //console.log(response);
            if (Number(data[x].properties.count) > Number(data[fi].properties.count)) {
                ti = si;
                si = fi;
                fi = x;
            } else if (Number(data[x].properties.count) > Number(data[si].properties.count)) {
                ti = si;
                si = x;
            } else if (Number(data[x].properties.count) > Number(data[ti].properties.count)) {
                ti = x;
            }

        }
    return (
        <div className='plain-div'>
            <h1> Active Places</h1>
            <p> Here are some of the places on campus that currently have the highest activity. </p>

            <div className='top-3-card'>
                <div className='device'>
                    {data[fi].properties.device}
                </div>
                <div className='count'>
                    {data[fi].properties.count}
                </div>
                <p>Connections</p>
            </div>

            <div className='top-3-card'>

                <div className='device'>
                    {data[si].properties.device}
                </div>

                <div className='count'>
                    {data[si].properties.count}
                </div>

                <p>Connections</p>

            </div>

            <div className='top-3-card'>
                <div className='device'>
                    {data[ti].properties.device}
                </div>
                <div className='count'>
                    {data[ti].properties.count}
                </div>
                <p>Connections</p>
            </div>
        </div>
    );
}

export default HighActivity;
