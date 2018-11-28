import { Component } from '@angular/core';

@Component ({
  selector: 'app-sidebar',
  template: `
  <div id = "sidebar">
    Sidebar will go here
  </div>
`
})
export class SidebarComponent {}

@Component({
  selector: 'app-article',
  template:
  `
  <div>Article Goes Here</div>
  `
})
export class ArticleComponent {}

@Component({
  selector: 'app-root',
  template: `
  <div id = "container">
  <app-sidebar></app-sidebar>
    <div id = "content">
    <app-article></app-article>
    <app-article></app-article>
    <app-article></app-article>
    <app-article></app-article>
    <app-article></app-article>
    <app-article></app-article>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jack!';
}
