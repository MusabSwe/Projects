import React, { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js'
import { useFetch } from '../hooks/useFetch.js';

// navigator.geolocation.getCurrentPosition((position) => {
//   const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)
//   setAvailablePlaces(sortedPlaces);
//   // we add here inside navigator since can not accept await and its type a callback
//   // so we add inside callback until its finish then call
//   setIsLoading(false);
// })

// const places = localStorage.getItem('places'); // we can access data immedatily synchronslly 
export default function AvailablePlaces({ onSelectPlace }) {

  const { data: availablePlaces, error, isLoading, setData: setAvailablePlaces } = useFetch(fetchAvailablePlaces, [])


  if (error) {
    return <Error title="an error occurred!" message={error.message ? error?.message : 'Fail to load places'} />
  }

  return (
    <Places
      title="Available Places"
      isLoading={isLoading}
      loadingText={'Places are loading...'}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
