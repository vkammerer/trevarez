# Borne tactile pour l'exposition permanente "Bâtir un rêve" au château de Trévarez.

[![Travis](https://img.shields.io/travis/xseignard/trevarez.svg?style=flat-square)](https://travis-ci.org/xseignard/trevarez) [![Code Climate](https://img.shields.io/codeclimate/coverage/github/xseignard/trevarez.svg?style=flat-square)](https://codeclimate.com/github/xseignard/trevarez/coverage)

Visible [ici pour l'instant](http://xseignard.github.io/trevarez/)

### Installation
```
npm i
```

### Development
```
npm run dev
```

### Web Build
```
npm run build
```

### App Build
OSX:
```
npm run build:osx
```

Windows
```
npm run build:win
```

### Deployment
```
npm run deploy
```

### Release installer
```
npm version [major|minor|patch]
git push && git push --tag
```

### Build mobile app

L'app repose sur la webview de [crosswalk](https://crosswalk-project.org/) qui est sensé unifier les webview d'un device à l'autre.

#### Android

S'assurer d'avoir le SDK android d'installé: [Guide d'installation du SDK android](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html)

Ajouter la plateforme android: lancer cette commande une seule fois `npm run cordova:platfom:android`

Lancer l'app (sur l'émulateur ou un device connecté et reconnu par `adb`) avec `npm run cordova:run:android`

#### iOS

TODO!!
