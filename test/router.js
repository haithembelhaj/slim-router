
describe('router.js tests', function(){

  it('should navigate', function(done){

    var router = new Router();

    router.route('/test', done);
    router.navigate('/test');
  })

  it('should extract params', function(done){


    var router = new Router();

    router.route('/test/:id', function(id){

      expect(id).to.equal('2');
      done();
    });


    router.navigate('/test/2');
  })

  it('should extract multiple params', function(done){


    var router = new Router();

    router.route('/test/:id/:name', function(id, name){

      expect(id).to.equal('2');
      expect(name).to.equal('haha');

      console.log(router.routes);

      done();
    });

    router.navigate('/test/2/haha');
  })

  it('should extract path', function(done){


    var router = new Router();

    router.route('/test/*path', function(path ){

      expect(path).to.equal('2/lorem/ipsum/2');
      done();
    });

    router.navigate('/test/2/lorem/ipsum/2');
  })
});