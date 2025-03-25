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
        <div class="profile-image">
          <img [src]="getImagePath()" alt="Yasara Madana" />
        </div>
        <div class="text-content">
          <p>I specialize in designing efficient, innovative, and user-focused systems 
          that solve real-world challenges. Whether it's crafting sleek frontends, 
          building robust backends, or integrating cutting-edge tools, I'm driven 
          by a desire to turn ideas into reality through code. Explore my work, 
          skills, and projects to see how I can bring value to your next venture!</p>
        </div>
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
      color: #fff;
    }

    h2 {
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
      background: #007bff;
    }

    .content {
      display: flex;
      align-items: center;
      gap: 3rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .profile-image {
      flex-shrink: 0;
    }

    .profile-image img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #007bff;
      box-shadow: 0 0 20px rgba(0, 123, 255, 0.3);
    }

    .text-content {
      flex: 1;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.9);
      margin: 0;
    }

    @media (max-width: 768px) {
      .content {
        flex-direction: column;
        text-align: center;
      }

      .profile-image img {
        width: 200px;
        height: 200px;
      }
    }
  `]
})
export class AboutComponent {
  getImagePath() {
    return 'assets/images/profile.jpg';
  }
} 