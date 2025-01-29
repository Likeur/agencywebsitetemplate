import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styles: ``,
})
export class ProjectComponent {
  public projectItems = [
    {
      title: 'Mingua',
      description: `Dans ce projet nous avons mis en place pour notre client une landing page optimisé pour son saas dans le domaine de la finance, son objectif étais clair, réaliser plus de vente et se démarquer de la concurrence pour sortir du lot. nous avons respecté toutes ses éxigences et avons mis sur pied un banger de site pour lui.`,
      image: 'assets/website5.webp',
      projectlink: 'https://www.google.com',
    },
    {
      title: 'finget',
      description: `Nous avons mis sur pied un site web optimisé pour le SEO avec un design attrayant pour distinguer notre client de la concurrence dans son domaine, la mission était simple: respecter sa charte graphique déjà existante toute en alliant beauté et experience utilisateur pour assurer à leur client la meilleure experience possible d'achat chez eux.`,
      image: 'assets/website4.webp',
      projectlink: 'https://www.google.com',
    },
    {
      title: 'Schema',
      description: `Ce redesign a été une partie de plaisir, nous avons procédé à une refonte complete d'un site web autréfois existant mais qui étais tombé dans l'oublie, alors la mission étais simple pour le client et nous devrions nous occuper de tout , allant de l'identité de marque à la conception du site web, c'était un defis qui a été rélevé avec succès.`,
      image: 'assets/website6.webp',
      projectlink: 'https://www.google.com',
    },
  ];
}
