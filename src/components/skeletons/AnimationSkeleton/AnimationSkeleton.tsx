import styles from "./AnimationSkeleton.module.less";

export function AnimationSkeleton() {
	return (
		<div className={styles.container}>
			<svg className={styles.spinner} viewBox="0 0 50 50">
				<circle
					className={styles.path}
					cx="25"
					cy="25"
					r="20"
					fill="none"
					stroke-width="5"
				></circle>
			</svg>
		</div>
	);
}
