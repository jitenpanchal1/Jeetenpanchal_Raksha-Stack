import React from "react";
import AHerosectiin from "../Component/AHerosectiin";
import Aourstory from "../Component/Aourstory";
import Amission from "../Component/Amission";
import Ateam from "../Component/Ateam";
import Acallaction from "../Component/Acallaction";

function AboutUs() {
    

    return (
        <div className="bg-gray-50 text-gray-800">
            <AHerosectiin />
            <Aourstory />
            <Amission />
            <Ateam />
            <Acallaction />
        </div>
    );
}

export default AboutUs;