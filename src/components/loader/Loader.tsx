import Lottie from "lottie-react";
import groovyWalkAnimation from "./loader.json";

import styles from './Loader.module.scss'
import { useSelector } from "react-redux";

const Loader = () => {
  const isLoading = useSelector((state: any) => state.loader.isLoading)

  return (
    isLoading && <Lottie
      data-test-id='loader'
      className={styles.loader}
      animationData={groovyWalkAnimation}
    />
  );
};

export default Loader;