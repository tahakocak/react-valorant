import React, {useEffect, useState} from "react";
import {ListSkeleton} from "../utils";

function Tiers() {
    const [tiers,setTiers] = useState([])

    useEffect(() => {
        fetch('https://valorant-api.com/v1/competitivetiers').then(x => x.json()).then(res => setTiers(res.data[3].tiers))
    }, [])

    return (
        <div className="cards col-6">
            {tiers && tiers.map((tier) => tier.largeIcon && (
                <div className="card">
                    <img src={tier.largeIcon} height="250" alt="" />
                    <div className="content">
                        <h2>{tier.tierName}</h2>
                    </div>
                </div>
            ))}

            {!tiers[0] &&  (
                <ListSkeleton listsToRender={25} />
            )}
        </div>
    )
}

export default Tiers