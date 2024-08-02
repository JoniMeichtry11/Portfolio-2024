import { Component } from '@angular/core';
import { MouseFollowerComponent } from '../../components';
import { ProjectsList } from '../../core/models/ProjectsList';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [MouseFollowerComponent],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent {
  proyectsList: ProjectsList[] = [
    {
      year: 2024,
      name: 'Churros dos hermanos',
      buildWith: ['Angular', 'Tailwind CSS', 'SCSS', 'Firebase', 'SEO'],
      linkName: 'churrosdoshermanos.com.ar',
      link: 'https://churrosdoshermanos.com.ar'
    },
    {
      year: 2024,
      name: 'Cheddar Express',
      buildWith: ['Angular', 'NodeJS', 'NGRX', 'Firebase', 'Mercado Pago'],
      linkName: 'cheddarexpress.web.app',
      link: 'https://cheddarexpress.web.app/'
    },
    {
      year: 2024,
      name: 'Churros Administrator',
      buildWith: ['NextJS', 'Tailwind CSS', 'SCSS', 'Firebase'],
      linkName: 'churros-administrator.web.app',
      link: 'https://churros-administrator.web.app/'
    },
    {
      year: 2024,
      name: 'Restaurante borcelle catering',
      buildWith: ['Angular', 'Tailwind CSS', 'SCSS', 'Firebase'],
      linkName: 'borcelle-catering-demo.web.app',
      link: 'https://borcelle-catering-demo.web.app/'
    },
    {
      year: 2024,
      name: 'Dartdental',
      buildWith: ['Angular', 'Tailwind CSS', 'SCSS', 'Firebase'],
      linkName: 'dart-demo.web.app',
      link: 'https://dart-demo.web.app/'
    },
    {
      year: 2024,
      name: 'Pupkitt Pet Care',
      buildWith: ['Angular', 'Tailwind CSS', 'SCSS', 'Firebase'],
      linkName: 'pupkitt-pet-care-demo.web.app',
      link: 'https://pupkitt-pet-care-demo.web.app/'
    },
    {
      year: 2023,
      name: 'Kephri',
      buildWith: ['Angular', 'Tailwind CSS', 'SCSS', 'Firebase'],
      linkName: 'kephri-cafeteria-online-demo.web.app',
      link: 'hhttps://kephri-cafeteria-online-demo.web.app/'
    },
    {
      year: 2023,
      name: 'Christophersen',
      buildWith: ['Angular', 'Tailwind CSS', 'SCSS', 'Firebase'],
      linkName: 'https://christophersen-demo.web.app',
      link: 'https://christophersen-demo.web.app/'
    },
    {
      year: 2023,
      name: 'Emergencias MT',
      buildWith: ['Ionic', 'Tailwind CSS', 'Android Studio'],
      linkName: 'github.com/JoniMeichtry11/emergencias-maria-teresa',
      link: 'https://github.com/JoniMeichtry11/emergencias-maria-teresa'
    },
    {
      year: 2023,
      name: 'Invitación de boda',
      buildWith: ['Angular', 'SCSS', 'Firebase'],
      linkName: 'invitaciondylanestefania.web.app',
      link: 'https://invitaciondylanestefania.web.app/'
    },
    {
      year: 2022,
      name: 'My Day App',
      buildWith: ['Angular', 'tailwind CSS', 'Firebase'],
      linkName: 'github.com/JoniMeichtry11/laboratorio-mydayapp-angular',
      link: 'https://github.com/JoniMeichtry11/laboratorio-mydayapp-angular'
    },
    {
      year: 2022,
      name: 'Foto Random Stack MEAN',
      buildWith: ['MongoDB', 'Express', 'Angular', 'NodeJS'],
      linkName: 'foto-random.netlify.app',
      link: 'https://foto-random.netlify.app/'
    },
    {
      year: 2022,
      name: 'Precios cripto',
      buildWith: ['Angular', 'Bootstrap', 'Netlify'],
      linkName: 'precios-criptos.netlify.app',
      link: 'https://precios-criptos.netlify.app/'
    },
    {
      year: 2022,
      name: 'Presupuesto App',
      buildWith: ['Angular', 'Bootstrap', 'Netlify'],
      linkName: 'mipresupuesto.netlify.app',
      link: 'https://mipresupuesto.netlify.app/'
    },
    {
      year: 2022,
      name: 'Budget with React',
      buildWith: ['React', 'Bootstrap'],
      linkName: 'github.com/JoniMeichtry11/Budget-Whit-React',
      link: 'https://github.com/JoniMeichtry11/Budget-Whit-React'
    },
    {
      year: 2022,
      name: 'Pokemon Redux',
      buildWith: ['React', 'Redux', 'Bootstrap', 'Netlify'],
      linkName: 'buypokemon.netlify.app',
      link: 'https://buypokemon.netlify.app/'
    },
    {
      year: 2022,
      name: 'Employees React',
      buildWith: ['React', 'Bootstrap', 'Netlify'],
      linkName: 'employees2022.netlify.app',
      link: 'https://employees2022.netlify.app/'
    },
    {
      year: 2021,
      name: 'Tour heroes challenge',
      buildWith: ['Angular', 'Bootstrap', 'Firebase'],
      linkName: 'tour-heroes-5ef56.web.app',
      link: 'https://tour-heroes-5ef56.web.app/'
    },
    {
      year: 2021,
      name: 'Memes y Amigos',
      buildWith: ['Angular', 'Bootstrap', 'Firebase'],
      linkName: 'memes-1cd61.web.app/memes/list-memes',
      link: 'https://memes-1cd61.web.app/memes/list-memes'
    },
    {
      year: 2021,
      name: 'Mi Música',
      buildWith: ['Angular', 'Bootstrap', 'Firebase'],
      linkName: 'mi-musica-73129.web.app/',
      link: 'https://mi-musica-73129.web.app'
    },
    {
      year: 2021,
      name: 'WeatherApp',
      buildWith: ['Angular', 'SCSS', 'Firebase'],
      linkName: 'local-climate.netlify.app',
      link: 'https://local-climate.netlify.app/'
    },
    {
      year: 2021,
      name: 'Fixture Mundial 2022',
      buildWith: ['HTML5', 'CSS', 'Javascript', 'Netlify'],
      linkName: 'fixtureqatar2022.netlify.app',
      link: 'https://fixtureqatar2022.netlify.app/'
    },
    {
      year: 2021,
      name: 'Barcode scanner with physical scanner',
      buildWith: ['HTML', 'CSS', 'Javascript'],
      linkName: 'github.com/JoniMeichtry11/barcode-scanner-with-physical-scanner',
      link: 'https://github.com/JoniMeichtry11/barcode-scanner-with-physical-scanner'
    },
    {
      year: 2021,
      name: 'Facial recognition with javascript',
      buildWith: ['HTML', 'CSS', 'Javascript'],
      linkName: 'github.com/JoniMeichtry11/facial-recognition-with-javascript',
      link: 'https://github.com/JoniMeichtry11/facial-recognition-with-javascript'
    },
    {
      year: 2021,
      name: 'Viaje Random',
      buildWith: ['HTML', 'CSS', 'Javascript'],
      linkName: 'viajaralmundo.netlify.app',
      link: 'https://viajaralmundo.netlify.app/'
    },
    {
      year: 2021,
      name: 'Chat Javascript',
      buildWith: ['HTML', 'CSS', 'Javascript'],
      linkName: 'github.com/JoniMeichtry11/Chat-JavaScript',
      link: 'https://github.com/JoniMeichtry11/Chat-JavaScript'
    },
    {
      year: 2021,
      name: 'Servidor con Typescript y MySQL',
      buildWith: ['SQL', 'Express', 'Typescript'],
      linkName: 'github.com/JoniMeichtry11/Chat-JavaScript',
      link: 'https://github.com/JoniMeichtry11/Chat-JavaScript'
    },
    {
      year: 2021,
      name: 'Backend con Json Web Token',
      buildWith: ['Javascript', 'Express', 'Typescript'],
      linkName: 'github.com/JoniMeichtry11/Backend-con-Json-Web-Token-',
      link: 'https://github.com/JoniMeichtry11/Backend-con-Json-Web-Token-'
    },
    {
      year: 2021,
      name: 'Napoleon',
      buildWith: ['HTML', 'CSS', 'Javascript'],
      linkName: 'napo.netlify.app',
      link: 'https://napo.netlify.app/'
    },
  ];
}
