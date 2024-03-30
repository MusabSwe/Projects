import { useRef, useState, useEffect, useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

// first get places we select from localstorage
// then pass selected places to the state to display them
// when refres page or when run the wep app
// only runs once
const storedIds = JSON.parse(localStorage.getItem('selectedPlaces', JSON.stringify([]))) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

console.log("storedPlaces: ", storedPlaces);
function App() {
  // const modal = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // we use useEffect when we want
  // to execute after run the component
  // to prevent infinte loop
  // to display places based on distance of the user
  useEffect(() => {
    // provided by browser to get location of the user
    navigator.geolocation.getCurrentPosition((poeition) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        poeition.coords.latitude,
        poeition.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, []);



  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces', JSON.stringify([]))) || [];
    //  to check is the id exist in the array
    // if the value of indexOf(id) = -1 means not witin storedIds
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]))

    }

  }
  // is used to only create function only once not every time re-executed
  const handleRemovePlace = useCallback(function handleRemovePlace() {
      setPickedPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
      );
      setModalIsOpen(false);
      const storedIds = JSON.parse(localStorage.getItem('selectedPlaces', JSON.stringify([]))) || [];

      localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current)))
    }, []);


  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />

      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText={"Sorting Places by distance..."}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
