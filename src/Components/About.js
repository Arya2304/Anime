import Videobg from '../assets/video/Skyfall  - Demon Slayer [AMV].mp4';
export default function About(){
    return(
        <div class='main' >
        <div class='overlay'></div>
            <video src={Videobg} autoPlay loop/>
            <div class='about-content'><h1>About Us</h1><p>Anime is a diverse and captivating art form originating from Japan. It encompasses a wide range of genres, from action-packed adventures to heartwarming slice-of-life stories, often featuring unique and expressive character designs. With its rich storytelling, stunning visuals, and immersive soundtracks, anime has captured the hearts of millions worldwide, transcending cultural boundaries.</p> </div>
        </div>
    )
}