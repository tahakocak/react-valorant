import React, {useEffect, useState} from "react";
import ContentLoader from "react-content-loader";
import {ListSkeleton} from "../utils";

function Maps() {
    const [maps, setMaps] = useState([])

    useEffect(() => {
        fetch('https://valorant-api.com/v1/maps').then(x => x.json()).then(res => setMaps(res.data))
    }, [])


    return (
        <div className="cards">
            {maps && maps.map((map) => (
                <div className="card">
                    <img src={map.splash} alt="" className="cover"/>
                    <div className="content">
                        <h2>{map.displayName}</h2>
                        <a href={'/map/'+map.uuid}>View</a>
                    </div>
                </div>
            ))}

            {!maps[0] &&  (
                <ListSkeleton listsToRender={8} />
            )}
        </div>
    )
}

export default Maps