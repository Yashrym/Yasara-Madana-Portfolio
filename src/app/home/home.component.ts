import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <div class="spotlight"></div>
      <div class="content">
        <div class="text-animation">
          <h1>Welcome</h1>
          <div class="typing-container">
            <h2>I'm <span class="highlight">Yasara Madana</span></h2>
          </div>
          <p class="subtitle">Full Stack Developer | Computer Science Student</p>
        </div>
        <div class="scroll-indicator">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      text-align: center;
      padding: 2rem;
      position: relative;
      overflow: hidden;
      background: transparent;
      margin-top: -10vh;
    }

    .spotlight {
      position: absolute;
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 25%,
        transparent 50%
      );
      transform: translate(0, 0);
      pointer-events: none;
      animation: moveSpotlight 8s ease-in-out infinite;
    }

    .content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      min-height: 70vh;
    }

    .text-animation {
      margin-top: -10vh;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 1s ease forwards;
    }

    h1 {
      font-size: 4.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, #fff, #4a90e2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.8s ease forwards;
    }

    .typing-container h2 {
      font-size: 2.8rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 1rem;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.8s ease forwards 0.3s;
    }

    .highlight {
      color: #4a90e2;
      position: relative;
      display: inline-block;
    }

    .highlight::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #4a90e2;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.3s ease;
    }

    .highlight:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    .subtitle {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.7);
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.8s ease forwards 0.6s;
    }

    .scroll-indicator {
      position: relative;
      margin-top: auto;
      margin-bottom: 2rem;
      opacity: 0;
      animation: fadeIn 1s ease forwards 1s;
    }

    .mouse {
      width: 26px;
      height: 42px;
      border: 2px solid rgba(255, 255, 255, 0.7);
      border-radius: 15px;
      position: relative;
      margin: 0 auto 1rem;
    }

    .wheel {
      width: 4px;
      height: 8px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 2px;
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 1.5s ease infinite;
    }

    .arrow {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .arrow span {
      display: block;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.7);
      border-right: 2px solid rgba(255, 255, 255, 0.7);
      transform: rotate(45deg);
      animation: arrow 1.5s ease infinite;
      opacity: 0;
    }

    .arrow span:nth-child(2) {
      animation-delay: 0.2s;
    }

    .arrow span:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes moveSpotlight {
      0% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(10%, 10%) scale(1.1); }
      50% { transform: translate(-5%, 5%) scale(1); }
      75% { transform: translate(-10%, -10%) scale(1.1); }
      100% { transform: translate(0, 0) scale(1); }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scroll {
      0% { transform: translate(-50%, 0); opacity: 1; }
      100% { transform: translate(-50%, 15px); opacity: 0; }
    }

    @keyframes arrow {
      0% { opacity: 0; transform: rotate(45deg) translate(-5px, -5px); }
      50% { opacity: 1; }
      100% { opacity: 0; transform: rotate(45deg) translate(5px, 5px); }
    }

    @media (max-width: 768px) {
      .home-container {
        margin-top: -5vh;
      }

      .text-animation {
        margin-top: -5vh;
      }

      h1 {
        font-size: 3rem;
      }

      .typing-container h2 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.2rem;
      }
    }
  `]
})
export class HomeComponent {} 