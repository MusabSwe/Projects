import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
// const places = localStorage.getItem('places'); // we can access data immedatily synchronslly 
export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // to use async await we should add a function then add async before function name
  // react compnents does not support async I mean we can not type
  // export default async function AvailablePlaces
  async function fetchPlaces() {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/places');
      const responseData = await response.json();
      // ok 200, 300
      // !ok 400, 500
      if (!response.ok) {
        // if it is not inside a try catch the app will crash
        throw new Error('Faild to fetch places');
      }
      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(responseData.places, position.coords.latitude, position.coords.longitude)
        setAvailablePlaces(sortedPlaces);
        // we add here inside navigator since can not accept await and its type a callback
        // so we add inside callback until its finish then call
        setIsLoading(false);
      })

    } catch (error) {
      // result of error is an object
      setError(error);
      setIsLoading(false);
    }
    
  }

  useEffect(() => {
    // if call fetch in a component will result in infinte loop call, so we execute inside useEffect 
    // fetch provided by broswer not react
    // fetch('http://localhost:3000/places')
    //   .then((res) => {
    //     return res.json(); // return a new promise , so we add a new then 

    //   }).then((resData) => {
    //     console.log(resData);
    //     setAvailablePlaces(resData.places);
    //   }).catch((err) => {
    //     console.log('err: ', err);
    //   });

    fetchPlaces();
  }, [])

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
