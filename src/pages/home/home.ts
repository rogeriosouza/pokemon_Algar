import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Http } from "@angular/http";  
import "rxjs/Rx";  
import { DatabaseProvider } from './../../providers/database/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   public pokemon: Array<any>;
  
  constructor(public navCtrl: NavController,private http: Http,  private alertCtrl: AlertController,
    private database: DatabaseProvider) {
    this.pokemon =[];

  }
     public ionViewDidEnter() {
        setTimeout(() => {
            this.loadPokemonData();
        }, 100);
    }

     public loadPokemonData() {
         this.database.getPokemon().then(result => {
            this.pokemon = result;
            if(this.pokemon.length == 0) {
                this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151")
                    .map(result => result.json())
                    .flatMap(result => result.results)
                    .map(result => <any> result)
                    .subscribe(result => {
                        this.database.createPokemon(result.name, result.url);
                        this.pokemon.push(result);
                    }, error => {
                        console.error(error);
                    });
            }
        }); 
    } 

        public showInfo(name: string) {
        this.http.get("https://pokeapi.co/api/v2/pokemon/" + name)
            .map(result => result.json())
            .flatMap(result => result.types)
            .map(result => (<any> result).type.name)
            .toArray()
            .subscribe(result => {
                this.showDialog(result);
            }, error => {
                console.error(error);
            });
              
    }
    public showDialog(data: Array<string>) {
        let alert = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'This Pokemon is of type(s) ' + data.join(", "),
            buttons: ['OK']
        });
        alert.present();
    }


}
