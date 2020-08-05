import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre:string = 'Capitan America';
  nombre2: string = 'ceSaR aleJanDro';
  arreglo= [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha:Date= new Date();
  activate: boolean = true;

  idioma: string = 'fr';

  videoUrl: string = "https://www.youtube.com/embed/bgo9dJB_icw";

  idioma1: string = '';

  valorPromesa = new Promise<string>((resolve) => {

    setTimeout(() => {
    resolve('llego la data');
    }, 2500);

  });

  verFecha(lang: string){
    return this.idioma1 = lang;

  }


  heroe={
    nombreH:'Logan',
    clave:'Wolverine',
    edad: 500,
    direccion:{
      calle:'Primera',
      casa:'20'
    }
  }

}
