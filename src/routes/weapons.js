import React, {useEffect, useState} from "react";
import {ListSkeleton} from "../utils";

function Weapons () {
    const [weapons,setWeapons] = useState([])

    useEffect(() => {
        fetch('https://valorant-api.com/v1/weapons').then(x => x.json()).then(res => setWeapons(res.data))
    }, [])

    return (
        <div className="cards col-4">
            {weapons && weapons.map((weapon) => (
                <div className="card">
                    <img src={weapon.displayIcon} alt=""/>
                    <div className="content">
                        <h2>{weapon.displayName}</h2>
                    </div>
                </div>
            ))}

            {!weapons[0] &&  (
                <ListSkeleton listsToRender={16} />
            )}
        </div>
    )
}

export default Weapons