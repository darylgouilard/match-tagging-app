import React from "react";
import { useState, useEffect } from "react"; // Hooks to store states and fetch data
import { Link, useNavigate } from "react-router-dom"; // Routing hooks
import { Button } from "reactstrap"; // Button component

export default function Tagger({setActivePage}) {

    // Set the page's title and the active page to Movies
    useEffect(() => {
        document.title = "Match Tagger | Tagger";
        setActivePage("Tagger");
    }, []);

    return (
        <div className = "tagger-grid">

            {/* Page title */}
            <h2><b>Tagger</b></h2>

            

        </div>
    );
}