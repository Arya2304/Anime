import { useState } from 'react';
import TabButton from './Tabbutton';
import Image from '../assets/images/service-img.gif';
import { anime_detail } from './Data';
import Videobg from '../assets/video/Junction Animation 自主制作アニメ.mp4';

export default function Anime() {
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
                <div id="anime-section">
                    <div class="anime-button">
                        <h1 class="anime-title">Popular Anime</h1>
                        <TabButton class='btn' command={() => tabClicked('Naruto')} activeclass={changedtext == 'Naruto' ? "TabActive" : ""}>Naruto</TabButton>
                        <TabButton class='btn' command={() => tabClicked('One_piece')} activeclass={changedtext == 'One_piece' ? "TabActive" : ""}>One Piece</TabButton>
                        <TabButton class='btn' command={() => tabClicked('Bleach')} activeclass={changedtext == 'Bleach' ? "TabActive" : ""}>Bleach</TabButton>
                        <TabButton class='btn' command={() => tabClicked('AOT')} activeclass={changedtext == 'AOT' ? "TabActive" : ""}>Attack On Titan</TabButton>
                    </div>

                    <div class="anime-display">
                        {changedtext ?
                            (
                                <>
                                    <div id='anime-data'>
                                        <div id='anime-header'>{anime_detail[changedtext].title}</div>
                                        <div id='anime-duration'><a href='{anime_detail[changedtext].duration}'>{anime_detail[changedtext].title} Anime Link</a></div>
                                        <div id='anime-deatail'>{anime_detail[changedtext].description}</div>
                                    </div>
                                    <div id='anime-img'><img src={anime_detail[changedtext].img} height={300} width={350} /></div>
                                </>
                            ) : <p>Please choose a anime to view details</p>
                        }
                    </div>
                </div>
            </div>

        </>
    );
}