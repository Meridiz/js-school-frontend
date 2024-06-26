import React from "react";
import styles from "./TheorySidebarButton.module.css";

interface Props {
	handleClickTheory: () => void;
}

function TheorySidebarButton({ handleClickTheory }: Props) {
	return (
		<>
			<div className={styles.sidebar} onClick={handleClickTheory}>
				<div className={styles.sidebarInner}>
					<span className={styles.titleSidebar}>
						<svg
							className={styles.theorySvg}
							width="10"
							height="10"
							viewBox="0 0 375 291"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M187.5 0L374.995 290.25H0.00549316L187.5 0Z"
								fill="#D9D9D9"
							/>
						</svg>{" "}
						Теория
					</span>
				</div>
			</div>
		</>
	);
}

export default TheorySidebarButton;
