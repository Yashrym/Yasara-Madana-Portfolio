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
        <h1>Hello I'm Yasara Madana</h1>
        <h2>Computer Science Undergraduate</h2>
        <p>I specialize in designing efficient, innovative, and user-focused systems that solve real-world challenges. Whether it’s crafting sleek frontends, building robust backends, or integrating cutting-edge tools, I’m driven by a desire to turn ideas into reality through code. Explore my work, skills, and projects to see how I can bring value to your next venture!</p>
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

    @keyframes moveSpotlight {
      0% {
        transform: translate(0, 0) scale(1);
      }
      25% {
        transform: translate(10%, 10%) scale(1.1);
      }
      50% {
        transform: translate(-5%, 5%) scale(1);
      }
      75% {
        transform: translate(-10%, -10%) scale(1.1);
      }
      100% {
        transform: translate(0, 0) scale(1);
      }
    }

    .content {
      position: relative;
      z-index: 1;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(to right, #fff, #ccc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: fadeIn 1s ease-out;
    }

    h2 {
      font-size: 2rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 1rem;
      animation: fadeIn 1s ease-out 0.3s backwards;
    }

    p {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.6);
      max-width: 600px;
      margin-bottom: 2rem;
      animation: fadeIn 1s ease-out 0.6s backwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .social-links {
      display: flex;
      gap: 1.5rem;
      animation: fadeIn 1s ease-out 0.9s backwards;
    }

    .social-links a img {
      width: 30px;
      height: 30px;
      transition: transform 0.3s ease;
      filter: brightness(0) invert(1);
      opacity: 0.8;
    }

    .social-links a:hover img {
      transform: scale(1.1);
      opacity: 1;
    }
  `]
})
export class HomeComponent {} 