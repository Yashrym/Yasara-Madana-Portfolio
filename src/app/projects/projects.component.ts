import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card" *ngFor="let project of projects">
          <div class="project-content">
            <h3>{{project.name}}</h3>
            <p class="project-description">{{project.description}}</p>
            <div class="tech-stack">
              <span *ngFor="let tech of project.technologies">{{tech}}</span>
            </div>
            <div class="project-links">
              <a [href]="project.github" target="_blank" *ngIf="project.github" class="github-link">
                <img src="assets/icons/github.svg" alt="GitHub">
                View Code
              </a>
              <a [href]="project.demo" target="_blank" *ngIf="project.demo" class="demo-link">
                <img src="assets/icons/external-link.svg" alt="Demo">
                Live Demo
              </a>
            </div>
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
      background: #007bff;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1.5rem;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #fff;
    }

    .project-description {
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .tech-stack span {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.875rem;
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .project-links {
      display: flex;
      gap: 1rem;
    }

    .project-links a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: #fff;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    .github-link {
      background: #24292e;
    }

    .demo-link {
      background: #007bff;
    }

    .project-links a:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }

    .project-links a img {
      width: 20px;
      height: 20px;
      filter: brightness(0) invert(1);
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Study Hive',
      description: 'A comprehensive academic collaboration platform with real-time group chat, university-based authentication, and AI summarization tools. Led development and implemented key features using React, Vite, and Supabase.',
      technologies: ['React', 'Vite', 'JavaScript', 'Supabase', 'AI Integration'],
      github: 'https://github.com/StudyHive-CS47/StudyHive_CS47.git',
      demo: 'https://www.studyhive.solutions/'
    },
    {
      name: 'Real-Time Event Ticketing System',
      description: 'A full-stack ticketing platform enabling real-time booking and management of event tickets. Built with React.js (TypeScript) frontend and Spring Boot backend.',
      technologies: ['React', 'TypeScript', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/Yashrym/Real-TimeEventTicketingSystem.git'
    },
    {
      name: 'Life on Land',
      description: 'A collaborative website focused on the UN\'s Sustainable Development Goal "Life on Land", featuring interactive educational content and resource tracking.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Yashrym/Life-on-land.git'
    },
    {
      name: 'Robot Controller Using Simulink',
      description: 'Developed a Simulink-based control system for a two-tank liquid system, implementing a PID controller to maintain desired liquid levels.',
      technologies: ['Simulink', 'MATLAB', 'PID Control'],
      github: 'https://github.com/Yashrym/Simulink-Robot-Model.git'
    },
    {
      name: 'University Student Management System',
      description: 'A basic student management system developed using core Java principles, designed to demonstrate fundamental Java programming skills.',
      technologies: ['Java', 'OOP', 'File Handling'],
      github: 'https://github.com/Yashrym/University_Student_Management_System.git'
    },
    {
      name: 'Finance Tracker',
      description: 'Developed a Personal Finance Tracker application using Python with a graphical user interface (GUI) built in Tkinter.',
      technologies: ['Python', 'Tkinter'],
      github: 'https://github.com/YasaraMadana/finance-tracker'
    },
    {
      name: 'VistaRover',
      description: 'Travel app with features like location-based recommendations, budget tracking, a chatbot, a to-do list, a shopping module, and interactive maps.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AI Integration'],
      github: 'https://github.com/VistaRover'
    }
  ];
} 