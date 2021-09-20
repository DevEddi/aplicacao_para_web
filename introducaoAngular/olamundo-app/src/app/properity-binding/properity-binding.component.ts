import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properity-binding',
  templateUrl: './properity-binding.component.html',
  styleUrls: ['./properity-binding.component.css']
})
export class ProperityBindingComponent implements OnInit {
  imageURL: string = "https://i.pinimg.com/236x/5f/af/8e/5faf8eb8c998ec0fe548eb66ae0c45f5.jpg";
  marcado: boolean = false;
  classe_titulo: string = "titulo_vermelho";
  constructor() { }



  ngOnInit(): void {
    setInterval(()=>{
      this.marcado = !this.marcado;
    }, 1000);
    setInterval(()=>{
      if(this.classe_titulo == 'titulo_vermelho'){
        this.classe_titulo = 'titulo_azul';
      }else{
        this.classe_titulo = 'titulo_vermelho';
      }
    }, 1000);
  }

}
