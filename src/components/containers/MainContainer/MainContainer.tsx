import React from "react";
import styles from "./MainContainer.module.css";

type MainContainerProps = {
	children: React.ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
	return <div className={styles.mainContainer}>{children}</div>;
};

export default MainContainer;
