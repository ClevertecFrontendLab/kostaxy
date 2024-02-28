import Lottie from "lottie-react";
import groovyWalkAnimation from "./loader.json";

import styles from './Loader.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { hideLoader } from "@redux/usersReducer";

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