import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Error(){
    return (
        <>
            <div class="Error-container">
                <Navbar/>
                <h1>404</h1>
                <p>The requested Page was not found from the menu, return to the <Link class='Link' to="/Home">Home Page</Link></p>
            </div>
        </>
    )
}