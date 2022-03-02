import React, {useEffect, useState} from "react";
import {ListSkeleton} from "../utils";

function Agents () {
    const [agents,setAgents] = useState([])

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true').then(x => x.json()).then(res => setAgents(res.data))
        console.log(agents[0])

    }, [])

    return (
        <div className="cards col-5">
            {agents && agents.map((agent) => (
                <div className="card">
                    <img src={agent.displayIcon} height="250" alt="" className="cover"/>
                    <div className="content">
                        <h2>{agent.displayName}</h2>
                    </div>
                </div>
            ))}

            {!agents[0] &&  (
                <ListSkeleton listsToRender={25} />
            )}
        </div>
    )
}

export default Agents