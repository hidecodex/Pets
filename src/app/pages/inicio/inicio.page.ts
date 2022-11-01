import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { WelcomePage } from '../welcome/welcome.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})


export class InicioPage implements OnInit {
  
  public start:string; 
  public congratulations:string;
  public data: any;
  
  constructor(public modalCtrl: ModalController, private activeroute: ActivatedRoute, private router: Router) {

    this.start = 'COMENCEMOS!!!';

    this.congratulations = 'Inicio de sesion Exitoso';


    // Se llama a la ruta activa y se obtiene sus parametros mediante una subscripcion
    this.activeroute.queryParams.subscribe(params => 
    { // Utilizamos lambda
    if (this.router.getCurrentNavigation().extras.state) { // Validamos que en la navegacion actual tenga extras
      this.data = this.router.getCurrentNavigation().extras.state.login; // Si tiene extra rescata lo enviado
      console.log(this.data) // Muestra por consola lo traido
    }else{this.router.navigate(["/login"])}} // Si no tiene extra la navegacion actual navegar al login
    );
  }


  ngOnInit(): void {}

  

  async Welcome() {
    const modal = await this.modalCtrl.create({
      component: WelcomePage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'welcome-modal',
    })


    return await modal.present();
  }
  



  logout(): void{
    this.Welcome();
  }

}