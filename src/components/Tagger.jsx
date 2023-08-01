import { Button, Badge } from "reactstrap"; // Button component

// Import styling sheets
import "./stylingSheets/Tagger.css";

export default function Tagger()
{
    return (
        <div className = "tagger">
            <div className = "file-uploader">
                <h4>File Uploader</h4>
            </div>

            <div className = "tagger-interface">
                <div className = "timer">
                    <h5>Timer</h5>
                </div>
                <div className = "tagging-buttons">
                    <Badge id = "game-time" color = "dark">Game Time</Badge>
                    <Button id = "first-half" color = "primary">First Half</Button>
                    <Button id = "second-half" color = "primary">Second Half</Button>
                    <div className = "team-actions">
                        
                    </div>
                    <div className = "player-actions">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}