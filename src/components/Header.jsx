// Import libraries

// Import components and icon
import Navigation from "./Nav";
import Logo from "./logo512.png";

export default function Header({activePage}) {
    return(
        <header>
            <div id="icon">
                <a href = "/">
                    <img
                    width="90"
                    alt="Movie icon"
                    src={Logo}
                    />
                </a>
            </div>

            <div className = "nav-bar">
                <Navigation activePage={activePage}/> 
            </div>
        </header>
    )
}