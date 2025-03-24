import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <h2>About Me</h2>
      <div class="content">
        <p>I'm a <strong>Computer Science Undergraduate</strong> passionate about <strong>Software Engineering</strong> 
        and bringing ideas to life through technology. I enjoy building <strong>efficient and innovative solutions</strong> 
        to real-world problems.</p>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: #333;
    }

    .content {
      text-align: center;
      max-width: 800px;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
      color: #666;
    }

    strong {
      color: #007bff;
    }
  `]
})
export class AboutComponent {} 