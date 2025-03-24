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
            <h3>Email</h3>
            <a href="mailto:madanayasara&#64;gmail.com">madanayasara&#64;gmail.com</a>
          </div>
          <div class="contact-item">
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/yasara-madana" target="_blank">linkedin.com/in/yasara-madana</a>
          </div>
          <div class="contact-item">
            <h3>Discord</h3>
            <span>yasara_26007</span>
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
    }

    h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #333;
    }

    .contact-content {
      display: flex;
      justify-content: center;
    }

    .contact-info {
      background: #fff;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 600px;
    }

    .contact-item {
      margin-bottom: 1.5rem;
    }

    .contact-item:last-child {
      margin-bottom: 0;
    }

    h3 {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    a, span {
      color: #007bff;
      text-decoration: none;
      font-size: 1.1rem;
    }

    a:hover {
      text-decoration: underline;
    }
  `]
})
export class ContactComponent {} 