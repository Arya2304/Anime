import { Link } from "react-router-dom";
import Annimax from "./Annimax";
export default function Navbar(){
    return(
        <>
            <nav class="Navbar">
                <div ><Link class="logo" to='/Annimax'>ANNIMAX</Link></div>
                    <ul class="nav-list">
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/Anime">Anime</Link></li>
                        <li><Link to="/Banner">Banner</Link></li>
                    </ul>
            </nav>
        </>
    );
}