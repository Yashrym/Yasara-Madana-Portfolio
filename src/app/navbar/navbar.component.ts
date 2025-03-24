import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav>
      <div class="logo">YM</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
      z-index: 1000;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
    }

    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 500;
      transition: color 0.3s ease;
    }

    a:hover {
      color: #fff;
    }

    @media (max-width: 768px) {
      ul {
        gap: 1rem;
      }
      
      nav {
        padding: 0 1rem;
      }
    }
  `]
})
export class NavbarComponent {} 