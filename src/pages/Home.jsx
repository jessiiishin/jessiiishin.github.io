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
            <p>ChewCheck (in progress)</p>
            <a href="https://devpost.com/software/carbonchain-m2hxz4"
              target="blank" rel="noopener noreferrer">CarbonChain</a>
            <a href="https://brownrisdgames.itch.io/mosquito-simulator"
              target="blank" rel="noopener noreferrer">Mosquito Simulator</a>
            <a href="https://project-brown-mock-trial.vercel.app/join-us"
              target="blank" rel="noopener noreferrer">Brown Mock Trials (Join Us)</a>
            <a href="https://github.com/jessiiishin/workflow"
              target="blank" rel="noopener noreferrer">WorkFlow</a>
          </div>
        </section>
        <section>
          <h2 className="subtitle">Links</h2>
          <div className="projects-list">
            <a href="https://docs.google.com/document/d/1KBAzdjLaOonfQr8kIbvjmU9exbH0lm-R-dvGjQA1cuE/edit?usp=sharing"
              target="blank" rel="noopener noreferrer">Resume</a>
            <a href="http://github.com/jessiiishin"
              target="blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/jessi-shin-974b00328/"
              target="blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
