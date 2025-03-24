import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
      <h2>Projects</h2>
      <div class="projects-grid">
        <div class="project-card" *ngFor="let project of projects">
          <h3>{{project.name}}</h3>
          <p>{{project.description}}</p>
          <div class="tech-stack">
            <span *ngFor="let tech of project.technologies">{{tech}}</span>
          </div>
          <div class="project-links">
            <a [href]="project.github" target="_blank" *ngIf="project.github">GitHub</a>
            <a [href]="project.demo" target="_blank" *ngIf="project.demo">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .projects-container {
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: #fff;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
    }

    .project-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .project-card p {
      color: #666;
      margin-bottom: 1rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .tech-stack span {
      background: #f0f0f0;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.875rem;
      color: #666;
    }

    .project-links {
      display: flex;
      gap: 1rem;
    }

    .project-links a {
      text-decoration: none;
      color: #007bff;
      font-weight: 500;
    }

    .project-links a:hover {
      text-decoration: underline;
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Portfolio Website',
      description: 'Personal portfolio website built with Angular',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio-url.com'
    },
    // Add more projects here
  ];
} 