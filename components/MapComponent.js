
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = L.map(mapRef.current).setView([17.490833, 78.625833], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Custom dark style
        map.getContainer().style.filter = 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%)';

        // Custom yellow marker
        const yellowIcon = L.divIcon({
            className: 'custom-icon',
            html: '<div style="background-color: yellow; width: 20px; height: 20px; border-radius: 50%;"></div>',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        L.marker([51.519743, -0.115496], { icon: yellowIcon }).addTo(map);

        return () => map.remove();
    }, []);

    return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default MapComponent;