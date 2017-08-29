## https://github.com/rogeriosouza/pokemon_Algar/blob/master/pokemon

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).


## POKEMOM API - MULTIPLATAFORMA
Link API - https://pokeapi.co/api/v2/
*Consumir Informações Diversas relacionadas a POKEMOM.



## Estrutura do Projeto

node_modules - Contém todos os pacotes npm listados no arquivo package.json.

platforms - Este local é utilizado para o build do aplicativo para plataformas como Android e iOS. Dentro desta pasta você irá achar uma pasta para a plataforma que você estiver gerando. Para adicionar uma plataforma, como por exemplo o android, simplesmente execute no terminal ionic platform add android, e uma pasta android será inserida.

plugins - Aqui é onde os plugins do cordova são armazenados quando instalados. Estes plugins habilitam que o seu aplicativo tenha funcionalidades nativas, tais como câmera, geolocalização, bluetooth, etc.

resources - Aqui são armazenados o ícone e a tela de splash do aplicativo.

src - Aqui contém todo o código fonte do seu aplicativo.

www - Todo o código fonte desenvolvido na pasta src é empacotado utilizando webpack.

config.xml - Aqui contém algumas configurações do aplicativo, tais como, nome, nome do pacote, versão, tudo isto será utilizado para instalar o aplicativo no celular.

package.json - Aqui é onde estão listados todos os pacotes npm salvos do seu projeto.

tsconfig.json - Aqui estão todas as configurações para compilar um projeto TypeScript.

tslint.json - Aqui estão as regras do lint.
## Baixe o repositório Pokeapi Sprites do GitHub. Copie o diretório sprites / pokemon do repositório para o diretório www / assets do projeto , mas mude o nome do diretório do repositório para as imagens .

## Este projeto só usará as imagens 0.png para 151.png



### PRE- REQUISITOS - Instalação
* NODEJS - https://nodejs.org 
* IONIC FRAMEWORK + Angular + TypeScripts - https://ionicframework.com/docs/ projects.
* BUILD NPM - https://www.npmjs.com
* SQLITE - https://www.npmjs.com/package/cordova-plugin-sqlite

## COMANDOS CMD - Instalação linux

$ ionic start ProjetoPokemon blank 
$ ionic codorva platform add ios ionic platform add android
$ ionic cordova plugin add cordova-sqlite-storage
$ npm install --save @ionic-native/sqlite
$ npm install
$ ionic info
$ ionic -v
$ ionic cordova run android

*O comando cordova run android roda no device ou browser.








### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

