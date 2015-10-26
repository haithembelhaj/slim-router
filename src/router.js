require('../node_modules/history.js/scripts/bundled/html4+html5/native.history.js');

const escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
const namedParam = /(\(\?)?:\w+/g;
const splatParam = /\*\w+/g;

export default class Router{

  constructor(routes = {}){

    this.routes = routes;

    History.Adapter.bind(window, 'statechange', ()=> this.checkRoutes(History.getState()));
  }

  route(route, callback) {

    route = route
      .replace(escapeRegExp, '\\$&')
      .replace(namedParam, '([^\/?]+)')
      .replace(splatParam, '([^?].*?)');

    this.routes["^" + route + "(?:\\?([\\s\\S]*))?$"] = callback;
  }

  checkRoutes(state) {

    let url = state.data.url || state.hash;
    let trigger = state.data.trigger !== undefined? state.data.trigger: true;

    if(!trigger) return;

    Object.keys(this.routes).forEach((key)=>{

      let regex = new RegExp(key);

      if (regex.test(url))
        this.routes[key](...regex.exec(url).slice(1));
    });
  }

  navigate(url, trigger = true, replace = false, title = null) {

    return History[replace? 'replaceState': 'pushState']({url, trigger}, title, url);
  }

  start(url) {

    let stateObj = url? {data: {url}} : History.getState();

    this.checkRoutes(stateObj);
  }

  go(num){

    History.go(num);
  }

  back(){

    History.back();
  }

}