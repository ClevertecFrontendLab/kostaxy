import Lottie from "lottie-react";
import groovyWalkAnimation from "./loader.json";

import styles from './Loader.module.scss'
import { useSelector } from "react-redux";
import { isLoadingSelect } from "@redux/selectors";

export const Loader = () => {
  const isLoading = useSelector(isLoadingSelect)

  return (
    isLoading && <Lottie
      data-test-id='loader'
      className={styles.loader}
      animationData={groovyWalkAnimation}
    />
  );
};