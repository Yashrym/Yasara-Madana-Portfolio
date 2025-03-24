import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <section id="home">
        <app-home></app-home>
      </section>
      <section id="about">
        <app-about></app-about>
      </section>
      <section id="skills">
        <app-skills></app-skills>
      </section>
      <section id="projects">
        <app-projects></app-projects>
      </section>
      <section id="education">
        <app-education></app-education>
      </section>
      <section id="contact">
        <app-contact></app-contact>
      </section>
    </main>
  `,
  styles: [`
    :host {
      background: #000;
      color: #fff;
      min-height: 100vh;
      display: block;
    }
    
    main {
      padding-top: 60px; /* Space for fixed navbar */
      background: radial-gradient(circle at 50% 50%, rgba(50, 50, 50, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%);
    }
    
    section {
      min-height: 100vh;
      padding: 2rem;
      scroll-margin-top: 60px;
    }
  `]
})
export class AppComponent {
  title = 'YasaraMadana';
}
