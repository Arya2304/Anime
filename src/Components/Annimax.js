import Videobg from '../assets/video/Sparkle  Your Name AMV.mp4';
export default function Annimax() {
    return (
        <div class='main' >
            <div class='overlay'></div>
            <video src={Videobg} autoPlay loop />
            <div class='home-content'><h1>ANNIMAX</h1><p>THE WORLD OF ANIME</p> </div>
        </div>
    )
}

