import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

function Map() {
    const [map, setMap] = useState([])
    const {uuid} = useParams()
    const navigate = useNavigate();

    useEffect(async () => {
        await fetch('https://valorant-api.com/v1/maps/' + uuid).then(res => res.json()).then(res => setMap(res.data))
    }, [uuid])

    if (map.uuid !== uuid){
        navigate('/maps')
    }

    console.log(map)
    return (
        <div className="detail-container">
            <div className="left">
                <img src={map.splash} alt=""/>
            </div>
            <div className="right">
                <img src={map.displayIcon} alt=""/>
            </div>
        </div>
    )
}

export default Map