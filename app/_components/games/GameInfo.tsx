"use client"

import { FC } from "react";
import { useParams } from "next/navigation";

const GameInfo: FC = () => {
    
    const {id} = useParams();
    
    return (
        <>
            INFO ABOUT GAME {id}
        </>
    )
}

export default GameInfo;