
describe('router.js tests', function(){

  it('should navigate', function(done){

    var router = new Router();

    router.route('/test', done);
    router.navigate('/test');
  })

  it('should extract params', function(done){

    var router = new Router();
    var callback = sinon.spy();

    router.route('/test/:id', callback);

    router.navigate('/test/2');

    expect(callback.calledWith('2')).to.equal(true);
    done();
  })

  it('should trigger on optional part', function(done){

    var router = new Router();
    var callback = sinon.spy();

    router.route('/test(/)', callback);

    router.navigate('/test');
    router.navigate('/test/');

    expect(callback.callCount).to.equal(2);
    done();
  })

  it('should extract param from optional part', function(done){

    var router = new Router();
    var callback = sinon.spy();

    router.route('/test(/:id)', callback);

    router.navigate('/test/2');

    expect(callback.calledWith('2')).to.equal(true);
    done();
  })

  it('should extract multiple params', function(done){

    var router = new Router();
    var callback = sinon.spy();

    router.route('/test/:id/:name', callback);

    router.navigate('/test/2/haha');

    expect(callback.calledWith('2', 'haha')).to.equal(true);
    done();
  })

  it('should extract path', function(done){

    var router = new Router();
    var callback = sinon.spy();

    router.route('/test/*path', callback);

    router.navigate('/test/2/lorem/ipsum/2');

    expect(callback.calledWith('2/lorem/ipsum/2')).to.equal(true);
    done();
  })

  it('should omit trigger', function(done){

    var router = new Router();

    var callback = sinon.spy();

    router.route('/test', callback);

    router.navigate('/test', false);

    expect(callback.called).to.equal(false);
    done();
  })
});