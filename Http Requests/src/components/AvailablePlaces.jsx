import React from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js'
import { useFetch } from '../hooks/useFetch.js';



async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();
  // we add promise since the function is async and accespt only promise
  // so below convert to promise and provided by browser 
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude)
      resolve(sortedPlaces);
    })
  })
}

export default function AvailablePlaces({ onSelectPlace }) {

  const { data: availablePlaces, error, isLoading } = useFetch(fetchSortedPlaces, [])


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
