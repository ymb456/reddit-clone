import { Component, Input } from '@angular/core';

class Article {
  public title: string;
  public description: string;

  constructor(aTitle: string, aDescription : string) {
    this.title = aTitle;
    this.description = aDescription;

  }
}
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
  <div>
  <h2>{{article.title}}</h2>
  <p>{{article.description}}</p>
  </div>
  `
})
export class ArticleComponent {
  @Input()article:  Object;
}

@Component({
  selector: 'app-root',
  template: `
  <div id = "container">
  <app-sidebar></app-sidebar>
    <div id = "content">

    <app-article
    *ngFor="let article of articles"
    [article]="article"></app-article>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Object[];
  constructor() {
    this.articles = [{
      title: 'The Angular 2 screencast',
      description: 'The easiest way to learn Angular 5 is with Fullstack.io!'
    },
    {
      title: 'Fullstack React',
      description: 'Want to learn React too?'
    },
    {
      title: 'Vue is new',
      description: 'And pretty cool syntax too'
    },
    {
      title: 'But what about elm?',
      description: 'Everybody likes elm'
    }
  ]
  }
 
}
