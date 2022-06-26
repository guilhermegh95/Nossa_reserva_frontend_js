import React from 'react';
import Button from './Forms/Button';
import styles from './Login/Login.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeOptions from './HomeOptions';

const Home = () => {
  return (
    <section className={styles.login}>
    <div>
      <Routes>
        <Route path="/" element={<HomeOptions />} />
      </Routes>
    </div>
  </section>
  )
};

export default Home;
