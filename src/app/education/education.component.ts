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
          <h3>Undergraduate BSC HONS - Computer science with industrial experience</h3>
          <p class="institution">Informatics Institute Of Technology affiliated with University Of Westminster</p>
          <p class="duration">2023 - 2027</p>
        </div>

        <div class="education-item">
          <h3>Undergraduate BSC - Applied Science</h3>
          <p class="institution">University of Sri Jayawardenepura</p>
          <p class="duration">2023 - 2026</p>
        </div>

        <div class="education-item">
          <h3>G.C.E.(A/L) Examination</h3>
          <p class="institution">Maliyadeva Balika Vidyalaya, Kurunegala</p>
          <p class="duration">2022</p>
          <p class="description">Chemistry - A | Physics - B | Biology - C</p>
        </div>

        <div class="education-item">
          <h3>G.C.E.(O/L) Examination</h3>
          <p class="institution">Maliyadeva Balika Vidyalaya, Kurunegala</p>
          <p class="duration">2018</p>
          <p class="description">8 A | 1 B</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .education-container {
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

    .education-timeline {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .education-item {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      padding: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .education-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    h3 {
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 0.5rem;
    }

    .institution {
      font-size: 1.2rem;
      color: #007bff;
      margin-bottom: 0.5rem;
    }

    .duration {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0.5rem;
    }

    .description {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .education-container {
        padding: 2rem 1rem;
      }

      .education-item {
        padding: 1.5rem;
      }

      h3 {
        font-size: 1.3rem;
      }
    }
  `]
})
export class EducationComponent {} 