export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const responseData = await response.json();
    // ok 200, 300
    // !ok 400, 500
    if (!response.ok) {
        // if it is not inside a try catch the app will crash
        throw new Error('Faild to fetch places');
    }
    console.log(responseData.places)
    return responseData.places;
}