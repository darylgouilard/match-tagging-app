import {
	Button,
	Badge,
} from "reactstrap"; // Button component

// Import styling sheets
import "./stylingSheets/Tagger.css";

export default function Tagger() {
	return (
		<div className="tagger">
			<div className="file-uploader">
				<p>
					<b>File Uploader</b>
				</p>
			</div>

			<div className="tagger-interface">
				<div className="timer">
					<h5>Timer</h5>
				</div>

				<div className="tagging-buttons">
					<Badge id="game-time" color="dark">
						Game Time
					</Badge>
					<Button
						id="first-half"
						color="primary"
					>
						First Half
					</Button>
					<Button
						id="second-half"
						color="primary"
					>
						Second Half
					</Button>

					<div className="team-actions">
						<div className="phases-of-game">
							<Badge
								id="game-phases"
								color="dark"
							>
								Game Phases
							</Badge>
							<div className="in-possession">
								<Button id="bp" color="info">
									In Possession
								</Button>
								<Button
									id="build-up"
									color="success"
									disabled
								>
									Build up
								</Button>
								<Button
									id="transition"
									color="success"
									disabled
								>
									Def - Att
								</Button>
								<Button
									id="final-third"
									color="success"
									disabled
								>
									Final third
								</Button>
							</div>
							<div className="out-of-possession">
								<Button id="bpo" color="info">
									Out Of Possession
								</Button>
								<Button
									id="pressing"
									color="warning"
									disabled
								>
									Press
								</Button>
								<Button
									id="mixed"
									color="warning"
									disabled
								>
									Mixed
								</Button>
								<Button
									id="contain"
									color="warning"
									disabled
								>
									Contain
								</Button>
							</div>
						</div>

						<div className="phase-details">
							<Badge
								id="details-of-phase"
								color="dark"
							>
								Phase Details
							</Badge>
							<div className="build-up-details">
								<Button
									id="retain"
									color="info"
									disabled
								>
									Retain
								</Button>
								<Button
									id="direct"
									color="info"
									disabled
								>
									Direct
								</Button>
							</div>
							<div className="transition-details">
								<Button
									id="withdrawn"
									color="info"
									disabled
								>
									Withdrawn
								</Button>
								<Button
									id="midfield"
									color="info"
									disabled
								>
									Midfield
								</Button>
								<Button
									id="attack"
									color="info"
									disabled
								>
									Attack
								</Button>
							</div>
							<div className="final-third-details">
								<Button
									id="through"
									color="info"
									disabled
								>
									Through
								</Button>
								<Button
									id="over"
									color="info"
									disabled
								>
									Over
								</Button>
								<Button
									id="around"
									color="info"
									disabled
								>
									Around
								</Button>
							</div>
							<div className="bpo-details">
								<Button
									id="high"
									color="info"
									disabled
								>
									High block
								</Button>
								<Button
									id="mid"
									color="info"
									disabled
								>
									Mid block
								</Button>
								<Button
									id="low"
									color="info"
									disabled
								>
									Low block
								</Button>
							</div>
						</div>

						<div className="set-pieces">
							<Badge
								id="set-piece"
								color="dark"
							>
								Set Pieces
							</Badge>
							<div className="team-taking-sp">
								<Button
									id="home-sp"
									color="primary"
								>
									Home Team
								</Button>
								<Button
									id="away-sp"
									color="primary"
								>
									Away Team
								</Button>
							</div>
							<div className="set-piece-type">
								<Button
									id="direct-fk"
									color="secondary"
									disabled
								>
									Direct FK
								</Button>
								<Button
									id="indirect-fk"
									color="secondary"
									disabled
								>
									Indirect FK
								</Button>
								<Button
									id="penalty"
									color="secondary"
									disabled
								>
									Penalty
								</Button>
								<Button
									id="corner"
									color="secondary"
									disabled
								>
									Corner
								</Button>
								<Button
									id="throw-in"
									color="secondary"
									disabled
								>
									Throw-in
								</Button>
							</div>
							<div className="set-piece-location">
								<Badge
									id="sp-location"
									color="dark"
								>
									Location
								</Badge>
								<Button
									id="sp-left"
									color="info"
									disabled
								>
									Left
								</Button>
								<Button
									id="sp-centre"
									color="info"
									disabled
								>
									Centre
								</Button>
								<Button
									id="sp-right"
									color="info"
									disabled
								>
									Right
								</Button>
							</div>
							<div className="set-piece-outcome">
								<Badge
									id="sp-outcome"
									color="dark"
								>
									Outcome
								</Badge>
								<Button
									id="sp-success"
									color="success"
									disabled
								>
									Success
								</Button>
								<Button
									id="sp-saved"
									color="warning"
									disabled
								>
									Saved
								</Button>
								<Button
									id="sp-out"
									color="danger"
									disabled
								>
									Out
								</Button>
							</div>
						</div>
					</div>

					<div className="player-actions">
						<Badge
							id="specific-actions"
							color="dark"
						>
							Specific Actions
						</Badge>

						<div className="team-making-action">
							<Button
								id="home-act"
								color="primary"
							>
								Home Team
							</Button>
							<Button
								id="away-act"
								color="primary"
							>
								Away Team
							</Button>
						</div>

						<div className="shot-actions">
							<Button id="shot" color="info">
								Shot
							</Button>

							<div className="shot-areas">
								<Button
									id="6yard"
									color="secondary"
									disabled
								>
									6-yard box
								</Button>
								<Button
									id="in-18yard"
									color="secondary"
									disabled
								>
									In pen box
								</Button>
								<Button
									id="out-18yard"
									color="secondary"
									disabled
								>
									Out pen box
								</Button>
							</div>

							<div className="shot-outcomes">
								<Button
									id="shot-goal"
									color="success"
									disabled
								>
									Goal
								</Button>
								<Button
									id="shot-saved"
									color="warning"
									disabled
								>
									Saved
								</Button>
								<Button
									id="shot-post"
									color="warning"
									disabled
								>
									Post
								</Button>
								<Button
									id="shot-offtarget"
									color="danger"
									disabled
								>
									Out
								</Button>
							</div>
						</div>

						<div className="pass-actions">
							<Button id="pass" color="info">
								Pass
							</Button>

							<div className="pass-types">
								<Button
									id="short-pass"
									color="secondary"
									disabled
								>
									Short
								</Button>
								<Button
									id="long-pass"
									color="secondary"
									disabled
								>
									Long
								</Button>
							</div>

							<div className="pass-directions">
								<Button
									id="forward-pass"
									color="secondary"
									disabled
								>
									Forward
								</Button>
								<Button
									id="lateral-pass"
									color="secondary"
									disabled
								>
									Lateral
								</Button>
								<Button
									id="backward-pass"
									color="secondary"
									disabled
								>
									Backward
								</Button>
							</div>

							<div className="pass-outcomes">
								<Button
									id="pass-success"
									color="success"
									disabled
								>
									Successful
								</Button>
								<Button
									id="pass-unsuccess"
									color="danger"
									disabled
								>
									Unsuccessful
								</Button>
							</div>
						</div>

						<div className="cross-actions">
							<Button id="cross" color="info">
								Cross
							</Button>

							<div className="cross-directions">
								<Button
									id="left-cross"
									color="secondary"
									disabled
								>
									Left wing
								</Button>
								<Button
									id="right-cross"
									color="secondary"
									disabled
								>
									Right wing
								</Button>
							</div>

							<div className="cross-outcomes">
								<Button
									id="cross-success"
									color="success"
									disabled
								>
									Successful
								</Button>
								<Button
									id="cross-unsuccess"
									color="danger"
									disabled
								>
									Unsuccessful
								</Button>
							</div>
						</div>

						<div className="defensive-actions">
							<Button
								id="def-action"
								color="info"
							>
								Defensive Action
							</Button>

							<div className="def-action-types">
								<Button
									id="tackle"
									color="secondary"
									disabled
								>
									Tackle
								</Button>
								<Button
									id="interception"
									color="secondary"
									disabled
								>
									Interception
								</Button>
								<Button
									id="clearance"
									color="secondary"
									disabled
								>
									Clearance
								</Button>
							</div>

							<div className="def-action-outcomes">
								<Button
									id="def-action-success"
									color="success"
									disabled
								>
									Successful
								</Button>
								<Button
									id="def-action-unsuccess"
									color="danger"
									disabled
								>
									Unsuccessful
								</Button>
							</div>
						</div>

						<div className="duel-actions">
							<Button id="duel" color="info">
								Duel
							</Button>

							<div className="duel-types">
								<Button
									id="ground-duel"
									color="secondary"
									disabled
								>
									Ground
								</Button>
								<Button
									id="aerial-duel"
									color="secondary"
									disabled
								>
									Aerial
								</Button>
							</div>

							<div className="duel-outcomes">
								<Button
									id="duel-won"
									color="success"
									disabled
								>
									Won
								</Button>
								<Button
									id="duel-foul"
									color="warning"
									disabled
								>
									Foul
								</Button>
								<Button
									id="duel-lost"
									color="danger"
									disabled
								>
									Lost
								</Button>
							</div>

							<div className="foul-card">
								<Button
									id="yellow-card"
									color="warning"
									disabled
								>
									Yellow
								</Button>
								<Button
									id="red-card"
									color="danger"
									disabled
								>
									Red
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
