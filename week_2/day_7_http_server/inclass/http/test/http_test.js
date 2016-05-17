const chai    = require('chai');
const chaiHTTP = require('chai-http');
const expect  = chai.expect;
chai.use(chaiHTTP);
const request = chai.request;

require('../server')

describe('HTTP tests', () => {
  it('should greet on get /HELLO', (done) => {
    request('localhost:3000')
      .get('/HELLO')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('HI\n');
        done();
      });
  });

  it('should catch not found', (done) => {
    request('localhost:3000')
      .get('/notthere')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.eql('NOT FOUND');
        done();
      });
  });
});

