import Videobg from '../assets/video/[4k] One Piece  Notion  - [EditAMV].mp4';
export default function Home(){
    return(
        <div class='main' >
        <div class='overlay'></div>
            <video src={Videobg} autoPlay loop/>
            <div class='home-content'><h1>Welcome</h1><p>To Our Website!</p> </div>
        </div>
    )
}