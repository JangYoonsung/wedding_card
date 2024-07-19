'use client';

import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import React from 'react';

const Map: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
  });

  const position = {
    lat: 35.69444363808703,
    lng: 139.72386490455133,
  };

  if (!isLoaded) return;

  return (
    <GoogleMap
      zoom={15}
      center={position}
      mapContainerStyle={{ width: '100%', height: '30vh', margin: 'auto' }}
      mapContainerClassName="rounded"
      options={{ disableDefaultUI: true, mapTypeId: google.maps.MapTypeId.ROADMAP }}>
      <div
        style={{ boxShadow: '0px 0px 10px rgba(0,0,0,0.5)' }}
        className="m-2 p-2 text-xs font-bold rounded absolute bg-white">
        <a
          className="text-primary font-bold"
          href={`https://www.google.com/maps/place/%E3%82%BB%E3%83%B3%E3%83%88%E3%82%A2%E3%82%AF%E3%82%A2%E3%83%81%E3%83%A3%E3%83%9A%E3%83%AB+%E5%B8%82%E3%83%B6%E8%B0%B7%E3%82%B5%E3%83%AD%E3%83%B3/@${position.lat},${position.lng},17z/data=!3m1!4b1!4m6!3m5!1s0x60188dbeaae65147:0xd1447cd44345767a!8m2!3d${position.lat}!4d${position.lng}!16s%2Fg%2F11pq23k5y_?entry=ttu`}
          target="_blank"
          rel="noopener noreferrer">
          Google Mapで見る
        </a>
      </div>
      <MarkerF position={position} />
    </GoogleMap>
  );
};

export default Map;
