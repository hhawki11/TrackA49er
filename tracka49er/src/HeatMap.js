import React, { Component } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    CircleMarker,
    Popup
} from "react-leaflet";
import locData from "./GeoJson.json"

export default class HeatMap extends Component {
    render() {
        return (
            <MapContainer center={[35.3075, -80.73371887207031]} zoom={17}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locData.features.map(data => (
                    <CircleMarker
                        key={data.properties.device}
                        color='black'
                        radius={data.properties.count * 5}
                        weight={2}
                        center={[data.geometry.coordinates[1], data.geometry.coordinates[0]]}>
                        <Popup>
                            {data.properties.device} <br/> {data.properties.count}
                        </Popup>
                    </CircleMarker>

                ))}

            </MapContainer>
        )
    }
}