import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SqlDatabase } from 'ionix-sqlite';
import 'rxjs/add/operator/map'; 
import { Platform } from 'ionic-angular';

@Injectable()

export class DatabaseProvider {

     //storage: SQLiteObject
     isOpen: boolean;
     dbPromise: Promise<SqlDatabase>;
     sqlite: SQLite;
     db: SQLiteObject;
     storage: any;

  constructor( private platform: Platform ) {
            
       if (!this.isOpen) {
                this.sqlite = new SQLite();
                 this.platform.ready().then((readySource) => {
                 this.sqlite.create({
                     name: "data.db",
                     location: "default"
                 }).then((db) => {
                     db.executeSql("CREATE TABLE IF NOT EXISTS pokemon (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, url TEXT)", {});
                     this.isOpen = true;
                     console.log(db);
                 });
            });
         }
    }
/* 
        getPokemon(): Promise<any> {
             return new Promise((resolve, reject) => {
            try {
                this.storage.transaction((tx: any) => {
                        tx.executeSql("SELECT * FROM pokemon", [] ).then((data) =>{ 
                     let pokemon = [];
                     if (data.rows.length > 0) {
                         for (let i = 0; i < data.rows.length; i++) {
                             pokemon.push({
                                 id: data.rows.item(i).id,
                                 name: data.rows.item(i).name,
                                 url: data.rows.item(i).url
                             });
                         }
                    }
                          resolve(pokemon);
              }, (error) => {
                     reject(error);
                 });
                    
    } */

 public getPokemon(): Promise < any > {

         return new Promise((resolve, reject) => {
             this.platform.ready().then((readySource) => {
             this.sqlite.create({
                     name: "data.db",
                     location: "default"
                 }).then((db)  => {
                        this.db.executeSql ("SELECT * FROM pokemon", []).then((data) => {
                        let pokemon = [];
                        if (data.rows.length > 0) {
                            for (let i = 0; i < data.rows.length; i++) {
                                pokemon.push({
                                    id: data.rows.item(i).id,
                                    name: data.rows.item(i).name,
                                    url: data.rows.item(i).url
                                });
                            }

                        }
                        this.isOpen = true;
                        resolve(pokemon);
                    }, (error) => {
                        reject(error);
                    });
                });
             })
                 
         });
         
     }
 




    public createPokemon(name: string, url: string) {
        return new Promise((resolve,reject) => {
          this.platform.ready().then((readySource) => {
             this.sqlite.create({
                     name: "data.db",
                     location: "default"
                 }).then((db)  => {
                
                
                this.db.executeSql
                    ("INSERT INTO pokemon (name, url) VALUES (?, ?)", [name, url])
                    .then((data) =>{
                            resolve(data);
                    },(Error) => {
                        reject(Error);
                    });
                 });   

             });   
        });
    }
}
