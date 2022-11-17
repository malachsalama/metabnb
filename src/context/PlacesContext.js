import { createContext } from "react";
import { useLocalStorage } from "../hooks/LocalStorage";
import { placesData } from "../data/PlacesData";

export const PlacesContext = createContext();

const PlacesContextProvider = ({ children }) => {
    const [places, setPlaces] = useLocalStorage("places", placesData)

    const likePlace = (id) => {
        let newLikedPlace = places.map(place => place.id === id ? {...place, liked: !place.liked} : place);
        setPlaces(newLikedPlace);
    }

    return (
        <PlacesContext.Provider value={{places, likePlace}}>
            { children }
        </PlacesContext.Provider>
    )
}

export default PlacesContextProvider