import React from "react";
import styles from "./NextTaskButton.module.css";

export function NextTaskButton() {
	return (
		<div className={styles.container}>
			<svg
				className={styles.arrow}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M21.883 12L14.356 18.235L15 19L24 11.479L15 4L14.355 4.764L21.884 11H0V12H21.883Z"
				/>
			</svg>
		</div>
	);
}
