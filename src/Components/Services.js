import React, { useState } from 'react';
import TabButton from './Tabbutton';
import Image from '../assets/images/service-img.gif';
import { service_detail } from './Data';
import Videobg from '../assets/video/Junction Animation 自主制作アニメ.mp4';

export default function Service() {
    let [changedtext, setValue] = useState();

    function tabClicked(subject) {
        console.log("Button Clicked! " + subject);
        setValue(subject);
        changedtext = subject;
    };

    return (
        <>
            <div class='main' >
                <div class='overlay'></div>
                <video src={Videobg} autoPlay loop />
                <div id="service-section">
                    <h1 className="section-title">Our Services</h1>
                    <div className="section-button">
                        <TabButton command={() => tabClicked('Web')} activeclass={changedtext == 'Web' ? "TabActive" : ""}>Web Development</TabButton>
                        <TabButton command={() => tabClicked('App')} activeclass={changedtext == 'App' ? "TabActive" : ""}>App Development</TabButton>
                        <TabButton command={() => tabClicked('CC')} activeclass={changedtext == 'CC' ? "TabActive" : ""}>Cloud Computing</TabButton>
                        <TabButton command={() => tabClicked('Game_p')} activeclass={changedtext == 'Game_p' ? "TabActive" : ""}>Game Programming</TabButton>
                    </div>
                    <div className="service-display">
                        {changedtext ?
                            (
                                <>
                                    <div id='service-data'>
                                        <div id='service-header'>{service_detail[changedtext].title}</div>
                                        <div id='service-duration'>{service_detail[changedtext].title} Course Duration-{service_detail[changedtext].duration}</div>
                                        <div id='service-deatail'>{service_detail[changedtext].description}</div>
                                    </div>
                                    <div id='service-img'><img src={service_detail[changedtext].img} height={300} width={350} /></div>
                                </>) : <p>Please choose a subject to view details</p>
                        }
                    </div>
                </div>
            </div>

        </>

    );
}