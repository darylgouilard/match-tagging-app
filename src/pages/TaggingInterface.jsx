import React from "react";
import { useState, useEffect } from "react"; // Hooks to store states and fetch data
import { Link, useNavigate } from "react-router-dom"; // Routing hooks
import { Button } from "reactstrap"; // Button component

// Import tagger grid
import Tagger from "../components/Tagger.jsx";

export default function TaggerUI({setActivePage}) {

    // Set the page's title and the active page to Movies
    useEffect(() => {
        document.title = "Match Tagger | Tagger";
        setActivePage("Tagger");
    }, [setActivePage]);

    return (
        <div className = "tagger-ui">

            <div className = "tagger-grid">
                <Tagger />
            </div>

        </div>
    );
}