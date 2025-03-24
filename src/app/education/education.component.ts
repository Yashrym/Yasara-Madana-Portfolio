import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="education-container">
      <h2>Education</h2>
      <div class="education-timeline">
        <div class="education-item">
          <h3>BSc in Computer Science</h3>
          <p class="institution">University of Colombo School of Computing</p>
          <p class="duration">2021 - Present</p>
          <p class="description">
            Studying Computer Science with a focus on Software Engineering, 
            Data Structures, Algorithms, and Web Technologies.
          </p>
        </div>
        <!-- Add more education items as needed -->
      </div>
    </div>
  `,
  styles: [`
    .education-container {
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

    .education-timeline {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .education-item {
      background: #fff;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h3 {
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    .institution {
      font-size: 1.2rem;
      color: #007bff;
      margin-bottom: 0.5rem;
    }

    .duration {
      font-size: 1rem;
      color: #666;
      margin-bottom: 1rem;
    }

    .description {
      color: #666;
      line-height: 1.6;
    }
  `]
})
export class EducationComponent {} 