import React from "react";
import Navigation from "./Navigation";
import CarbonPricesWidget from "./CarbonPricesWidget";
import Greet from "./Greet";
import Data from "./Data";
export default function Client(){
    return(
        <div>
            <Navigation/>
        
            <Greet/>
            <Data/>
            <CarbonPricesWidget/>
        </div>
    )
}