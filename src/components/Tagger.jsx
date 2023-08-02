import { Button, Badge } from "reactstrap"; // Button component

// Import styling sheets
import "./stylingSheets/Tagger.css";

export default function Tagger()
{
    return (
        <div className = "tagger">

            <div className = "file-uploader">
                <p><b>File Uploader</b></p>
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

                        <div className = "phases-of-game">
                            <Badge id = "game-phases" color = "dark">Game Phases</Badge>
                            <div className = "in-possession">
                                <Button id = "bp" color = "info">In Possession</Button>
                                <Button id = "build-up" color = "success" disabled>Build up</Button>
                                <Button id = "transition" color = "success" disabled>Def - Att</Button>
                                <Button id = "final-third" color = "success" disabled>Final third</Button>
                            </div>
                            <div className = "out-of-possession">
                                <Button id = "bpo" color = "info">Out Of Possession</Button>
                                <Button id = "pressing" color = "warning" disabled>Press</Button>
                                <Button id = "mixed" color = "warning" disabled>Mixed</Button>
                                <Button id = "contain" color = "warning" disabled>Contain</Button>
                            </div>
                        </div>

                        <div className = "phase-details">
                            <Badge id = "details-of-phase" color = "dark">Phase Details</Badge>
                            <div className = "build-up-details">
                                <Button id = "retain" color = "info" disabled>Retain</Button>
                                <Button id = "direct" color = "info" disabled>Direct</Button>
                            </div>
                            <div className = "transition-details">
                                <Button id = "withdrawn" color = "info" disabled>Withdrawn</Button>
                                <Button id = "midfield" color = "info" disabled>Midfield</Button>
                                <Button id = "attack" color = "info" disabled>Attack</Button>
                            </div>
                            <div className = "final-third-details">
                                <Button id = "through" color = "info" disabled>Through</Button>
                                <Button id = "over" color = "info" disabled>Over</Button>
                                <Button id = "around" color = "info" disabled>Around</Button>
                            </div>
                            <div className = "bpo-details">
                                <Button id = "high" color = "info" disabled>High block</Button>
                                <Button id = "mid" color = "info" disabled>Mid block</Button>
                                <Button id = "low" color = "info" disabled>Low block</Button>
                            </div>
                        </div>

                        <div className = "set-pieces">
                            <Badge id = "set-piece" color = "dark">Set Pieces</Badge>
                            <div className = "team-taking-sp">
                                <Button id = "home-sp" color = "primary">Home Team</Button>
                                <Button id = "away-sp" color = "primary">Away Team</Button>
                            </div>
                            <div className = "set-piece-type">
                                <Button id = "direct-fk" color = "secondary" disabled>Direct FK</Button>
                                <Button id = "indirect-fk" color = "secondary" disabled>Indirect FK</Button>
                                <Button id = "penalty" color = "secondary" disabled>Penalty</Button>
                                <Button id = "corner" color = "secondary" disabled>Corner</Button>
                                <Button id = "throw-in" color = "secondary" disabled>Throw-in</Button>
                            </div>
                            <div className = "set-piece-location">
                                <Badge id = "sp-location" color = "dark">Location</Badge>
                                <Button id = "sp-left" color = "info" disabled>Left</Button>
                                <Button id = "sp-centre" color = "info" disabled>Centre</Button>
                                <Button id = "sp-right" color = "info" disabled>Right</Button>
                            </div>
                            <div className = "set-piece-outcome">
                                <Badge id = "sp-outcome" color = "dark">Outcome</Badge>
                                <Button id = "sp-success" color = "success" disabled>Success</Button>
                                <Button id = "sp-saved" color = "warning" disabled>Saved</Button>
                                <Button id = "sp-out" color = "danger" disabled>Out</Button>
                            </div>
                        </div>

                    </div>

                    <div className = "player-actions">
                        <Badge id = "specific-actions" color = "dark">Specific Actions</Badge>
                    </div>

                </div>

            </div>

        </div>
    )
}