import PlaceContainer from "../../components/placecontainer/PlaceContainer";
import "./places.css";
import filterIcon from "../../images/Filter.svg"
import { useContext, useState } from "react";
import { PlacesContext } from "../../context/PlacesContext";

const Places = () => {
    const {places} = useContext(PlacesContext)
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="places--page">
            <div className="categories">
                <ul className={(isOpen) ? "active" : ""}>
                    <li>Restuarant</li>
                    <li>Cottage</li>
                    <li>Castle</li>
                    <li>Fantast city</li>
                    <li>Beach</li>
                    <li>Cabins</li>
                    <li>Off-grid</li>
                    <li>Farm</li>
                </ul>
                <button
                    onClick={() => setOpen(!isOpen)}
                >
                    Location 
                    <img src={filterIcon} alt="filter icon" width="20px" />
                </button>
            </div>
            <div className="places--list">
                <div className="places">
                    {
                        places.map(place => {
                            return (
                                <PlaceContainer place={place} key={place.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Places;