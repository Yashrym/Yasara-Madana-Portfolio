import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contact-container">
      <h2>Contact Me</h2>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <h3>Phone</h3>
            <a href="tel:0713259534">0713259534</a>
          </div>
          <div class="contact-item">
            <h3>Email</h3>
            <a href="mailto:madanayasara&#64;gmail.com">madanayasara&#64;gmail.com</a>
          </div>
          <div class="contact-item">
            <h3>Address</h3>
            <span>Bauddhaloka Mawatha, Colombo 007</span>
          </div>
          <div class="contact-item">
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/yasara-madana-93263b269" target="_blank">linkedin.com/in/yasara-madana-93263b269</a>
          </div>
          <div class="contact-item">
            <h3>GitHub</h3>
            <a href="https://github.com/Yashrym" target="_blank">github.com/Yashrym</a>
          </div>
          <div class="contact-item">
            <h3>Portfolio</h3>
            <a href="https://Yashrym.github.io/Yasara-Madana-Porfolio/" target="_blank">Yashrym.github.io/Yasara-Madana-Porfolio/</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
      color: #fff;
    }

    h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #fff;
      position: relative;
    }

    h2::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: #4a90e2;
    }

    .contact-content {
      display: flex;
      justify-content: center;
    }

    .contact-info {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 600px;
      backdrop-filter: blur(10px);
    }

    .contact-item {
      margin-bottom: 1.5rem;
      padding: 1rem;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }

    .contact-item:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .contact-item:last-child {
      margin-bottom: 0;
    }

    h3 {
      font-size: 1.2rem;
      color: #4a90e2;
      margin-bottom: 0.5rem;
    }

    a, span {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-size: 1.1rem;
      display: block;
      word-break: break-all;
    }

    a:hover {
      color: #4a90e2;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .contact-container {
        padding: 2rem 1rem;
      }

      .contact-info {
        padding: 1.5rem;
      }

      .contact-item {
        padding: 0.75rem;
      }

      a, span {
        font-size: 1rem;
      }
    }
  `]
})
export class ContactComponent {} 