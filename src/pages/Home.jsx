import React, { useEffect } from "react"; // useEffect to change the page's title
import "../Styles.css";

export default function Home({setActivePage}) {

    // Set the page's title and active page to Home
    useEffect(() => {
        document.title = "Match Tagger | Home";
        setActivePage("Home");
    }, [setActivePage]);

    return (
        <main>
        </main>
    );
}