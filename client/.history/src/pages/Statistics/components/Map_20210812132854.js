import { Map as LeafletMap , TileLayer } from "react-leaflet";
import { showDataOnMap } from "../util";
import classes from "./Map.module.css";
import './Map.css';


function Map({ countries, casesType, center, zoom }) {
    return (
        <div className={classes.map}>
            <LeafletMap 
               center={center} zoom={zoom}
            >
                
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries, casesType)}
            </LeafletMap >
        </div>
    );
}

export default Map;
