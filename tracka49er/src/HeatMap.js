import React, { useState } from "react";

import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup
} from "react-leaflet";
import locData from "./GeoJson.json"

function HeatMap() {
    console.log(locData);
    return (
        <div>
            <MapContainer center={[35.3075, -80.73371887207031]} zoom={17}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locData.features.map(data => (
                    <CircleMarker
                        key={data.properties.device}
                        color='black'
                        radius={data.properties.count * .3}
                        weight={2}
                        center={[data.geometry.coordinates[1], data.geometry.coordinates[0]]}>
                        <Popup>
                            {data.properties.device} <br /> {data.properties.count}
                        </Popup>
                    </CircleMarker>

                ))}

            </MapContainer>
        </div>
    );
}


function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function HeatForm() {
    const [day, setDay] = useState('')
    const [hour, setHour] = useState('')
    const setBUTTON = useState('')


    const handleDayChange = event => {
        setDay(event.target.value)
    };

    const handleHourChange = event => {
        setHour(event.target.value)
    };

    const handleBUTTON = event => {
        setBUTTON(event.target.value)
    }

    const handleSubmit = event => {

        event.preventDefault();
        alert(`Your state values: \n
                hour: ${hour} \n
                day: ${day} \n
                You can replace this alert with your process`);
        try {
            let test = 1
            let url = 'http://localhost:8080/active5?fhour=' + hour + '&fdow=' + day
            let response = JSON.parse(httpGet(url));
           //let response1 = JSON.parse(httpGet(url1));


            for (let x = 0; x < locData.features.length; x++) {

                //console.log(response);
                if (response[locData.features[x].properties.device]) {
                    locData.features[x].properties.count = response[locData.features[x].properties.device];
                }
            }
        } catch (error) {
            console.error(error);
        }


        setHour(event.target.value)
    };



    return (

        <div className='main-div'>
The size of the circle indicates the activity! The bigger thd circle the more 49ers!

            <form onSubmit={handleSubmit}>

                <div className='side-panel'>


                    <label for="fhour">Select a Time:</label><br />
                    <select name="fhour" value={hour} onChange={handleHourChange} defaultValue={0}>

                        <option value="0">12 AM</option>
                        <option value="1">1 AM</option>
                        <option value="2">2 AM</option>
                        <option value="3">3 AM</option>
                        <option value="4">4 AM</option>
                        <option value="5">5 AM</option>
                        <option value="6">6 AM</option>
                        <option value="7">7 AM</option>
                        <option value="8">8 AM</option>
                        <option value="9">9 AM</option>
                        <option value="10">10 AM</option>
                        <option value="11">11 AM</option>
                        <option value="12">12 PM</option>
                        <option value="13">1 PM</option>
                        <option value="14">2 PM</option>
                        <option value="15">3 PM</option>
                        <option value="16">4 PM</option>
                        <option value="17">5 PM</option>
                        <option value="18">6 PM</option>
                        <option value="19">7 PM</option>
                        <option value="20">8 PM</option>
                        <option value="21">9 PM</option>
                        <option value="22">10 PM</option>
                        <option value="23">11 PM</option>

                    </select>

                    <label for="fdow">Enter Day of Week:</label><br />
                    <input type="Day" name="Day" placeholder="Enter Day" onChange={handleDayChange} value={day} /><br />

                    <button type="submit" onChange={handleBUTTON}>Submit</button>
                </div>



            </form>
            <div>
                <HeatMap />
            </div>
        </div>
    );
}

export default HeatForm;