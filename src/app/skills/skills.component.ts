import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skills-container">
      <h2>Tech Stack</h2>
      
      <div class="skill-section">
        <h3>Frontend</h3>
        <div class="skill-grid">
          <div class="skill-item" *ngFor="let skill of frontendSkills">
            <img [src]="skill.icon" [alt]="skill.name">
            <span>{{skill.name}}</span>
          </div>
        </div>
      </div>

      <div class="skill-section">
        <h3>Backend</h3>
        <div class="skill-grid">
          <div class="skill-item" *ngFor="let skill of backendSkills">
            <img [src]="skill.icon" [alt]="skill.name">
            <span>{{skill.name}}</span>
          </div>
        </div>
      </div>

      <div class="skill-section">
        <h3>Databases</h3>
        <div class="skill-grid">
          <div class="skill-item" *ngFor="let skill of databaseSkills">
            <img [src]="skill.icon" [alt]="skill.name">
            <span>{{skill.name}}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .skills-container {
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

    h3 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      color: #444;
    }

    .skill-section {
      margin-bottom: 3rem;
    }

    .skill-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 2rem;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .skill-item img {
      width: 40px;
      height: 40px;
      transition: transform 0.3s ease;
    }

    .skill-item:hover img {
      transform: scale(1.1);
    }

    .skill-item span {
      font-size: 1rem;
      color: #666;
    }
  `]
})
export class SkillsComponent {
  frontendSkills = [
    { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'Angular', icon: 'https://angular.io/assets/images/logos/angular/angular.svg' }
  ];

  backendSkills = [
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Spring Boot', icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' }
  ];

  databaseSkills = [
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg' },
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' },
    { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' }
  ];
} 