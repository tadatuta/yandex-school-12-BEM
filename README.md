# yandex-school-12-BEM

There is the twelfth task for Yandex interfaces design school. The aim of the project is to learn BEM architecture and technologies by Yandex.

Application has three different versions: for mobile, for tablet and for desktop. Version you see depends on your device. 

[App at heroku](https://bem-dzen.herokuapp.com/)

[About development](./MINDS_FLOW.md)

## Commands?

* `npm i` - install dependencies
* `npm start` - run in dev-mode
* `npm run bundle` - create bundles for different versions
* `export PLATFOLM=desktop && npm run build` - create bundle only for desktop
* `cd server && npm start` - run server which works with bundles. Depending on the useragent the server sends to the user different static files.
