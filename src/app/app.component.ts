import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Calculadora cuma';
  a:number = 0
  b:number = 0
  r:number = 0

  suma = () => this.r = Number(this.a) + Number(this.b)
  resta = () => this.r = Number(this.a) - Number(this.b)
  multiplica = () => this.r = Number(this.a) * Number(this.b)
  divide = () => this.r = Number(this.a) / Number(this.b)
}
