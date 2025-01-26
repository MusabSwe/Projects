import React, { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { updateUserPlaces, fetchUserPlaces } from './http.js';
import Error from './components/Error.jsx';
import { useFetch } from './hooks/useFetch.js';
function App() {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorOnUpdatePlace, setErrorOnUpdatePlace] = useState();

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  const { isLoading, data: userPlaces, error } = useFetch(fetchUserPlaces, []);


  // async function handleSelectPlace(selectedPlace) {
  //   setUserPlaces((prevPickedPlaces) => {
  //     if (!prevPickedPlaces) {
  //       prevPickedPlaces = [];
  //     }
  //     if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
  //       return prevPickedPlaces;
  //     }
  //     return [selectedPlace, ...prevPickedPlaces];
  //   });
  //   try {
  //     await updateUserPlaces({ places: [selectedPlace, ...userPlaces] });
  //   } catch (e) {

  //     setUserPlaces(userPlaces); // will take old value before update the selected place
  //     setErrorOnUpdatePlace(e?.message ? e?.message : 'Fail to update place');

  //   }
  // }

  // const handleRemovePlace = useCallback(async function handleRemovePlace() {
  //   setUserPlaces((prevPickedPlaces) =>
  //     prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
  //   );
  //   try {
  //     await updateUserPlaces({ places: userPlaces.filter((place) => place.id !== selectedPlace.current.id) });
  //   } catch (e) {
  //     setUserPlaces(userPlaces); // roll back will take old value before update the selected place
  //     setErrorOnUpdatePlace(e?.message ? e?.message : 'Fail to remove place');

  //   }

  //   setModalIsOpen(false);
  // }, [userPlaces]);

  const handleErrorUpdatePlace = () => {
    setErrorOnUpdatePlace(null);
  }

  return (
    <>
      <Modal open={errorOnUpdatePlace} onClose={handleErrorUpdatePlace}>
        {errorOnUpdatePlace && <Error
          title="an error occurred!"
          message={errorOnUpdatePlace}
        // onConfirm={handleErrorUpdatePlace}
        >
        </Error>
        }
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
        // onConfirm={handleRemovePlace}
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
        {error && <Error title={"an error occurred!"} message={error} />}
        {!error &&
          <Places
            title="I'd like to visit ..."
            isLoading={isLoading}
            loadingText={'Places to visit are loading...'}
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        }
        <AvailablePlaces
        // onSelectPlace={handleSelectPlace} 
        />
      </main>
    </>
  );
}

export default App;
