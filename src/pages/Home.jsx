import { useState } from 'react'
import './home.css'

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>JESSI SHIN</h1>
      </header>
      
      <main>
        <section className="projects-section">
          <h2 className="subtitle">Projects</h2>
          <div className="projects-list">
            <a href="">ChewCheck</a>
            <a href="https://devpost.com/software/carbonchain-m2hxz4">CarbonChain</a>
            <a href="https://brownrisdgames.itch.io/mosquito-simulator">Mosquito Simulator</a>
            <a href="https://github.com/jessiiishin/workflow">WorkFlow</a>
            <a href="https://project-brown-mock-trial.vercel.app/join-us">Brown Mock Trials (Join Us)</a>
          </div>
        </section>
        <section>
          <h2 className="subtitle">Links</h2>
          <div className="projects-list">
            <a href="https://docs.google.com/document/d/1KBAzdjLaOonfQr8kIbvjmU9exbH0lm-R-dvGjQA1cuE/edit?usp=sharing">Resume</a>
            <a href="http://github.com/jessiiishin">Github</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
