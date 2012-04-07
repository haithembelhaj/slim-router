# RouterJs: easy routing for your ajax Web applications

[RouterJs](http://haithembelhaj.github.com/RouterJs/) is a simple router for your ajax web apps. It's build upon [History.js](https://github.com/balupton/History.js/) which means that RouterJs supports the HTML5 History Api with a fragment fallback for HTML4 browsers. Highly inspired by the Backbone Router it also supports passing parameters with `:param` and splat parts with `*splat`

#Usage

	//Instanciate the router
	var router = new Router();

	//Define some routes with their respective callback function
	router.route('posts/:id', function(id){ console.log(id)});
	router.route('route/*path', function(path){ console.log(path)});

	/* 
	* Navigate to route
	* the navigate method takes two extra arguments trigger and replace
	* trigger is by default true and replace is by default false
	*/

	router.navigate('posts/22');
	router.navigate('posts/23', false); //ommit calling the callback
	router.navigate('route/to/heaven', true, false); //just replace without history traceback

	//Navigate throught the History
	router.go(2); //forward navigation
	router.go(-3); //backward navigation
