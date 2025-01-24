import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styles: ``
})
export class ProjectComponent {
  public projectItems = [
    {
      title: 'Project 1',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet error ipsum sapiente at quibusdam repellendus corporis quaerat minima illum, officia commodi dicta non alias fuga corrupti excepturi consectetur voluptates!
                        Id est distinctio voluptatem. Suscipit fugit quis officiis ipsa aliquid! Tenetur error impedit odit provident veniam nemo veritatis vitae voluptates facere iusto mollitia voluptatem amet, delectus maiores, placeat dolorem assumenda.`,
      image: 'assets/images/project1.jpg',
      projectlink : 'https://www.google.com'
    },
    {
      title: 'Project 2',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet error ipsum sapiente at quibusdam repellendus corporis quaerat minima illum, officia commodi dicta non alias fuga corrupti excepturi consectetur voluptates!
                        Id est distinctio voluptatem. Suscipit fugit quis officiis ipsa aliquid! Tenetur error impedit odit provident veniam nemo veritatis vitae voluptates facere iusto mollitia voluptatem amet, delectus maiores, placeat dolorem assumenda.`,
      image: 'assets/images/project2.jpg',
      projectlink : 'https://www.google.com'
    },
    {
      title: 'Project 3',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eveniet error ipsum sapiente at quibusdam repellendus corporis quaerat minima illum, officia commodi dicta non alias fuga corrupti excepturi consectetur voluptates!
                        Id est distinctio voluptatem. Suscipit fugit quis officiis ipsa aliquid! Tenetur error impedit odit provident veniam nemo veritatis vitae voluptates facere iusto mollitia voluptatem amet, delectus maiores, placeat dolorem assumenda.`,
      image: 'assets/images/project3.jpg',
      projectlink : 'https://www.google.com'
    }
  ];
}
