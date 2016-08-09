const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Start Page', () => {
  it('should have a title and correct url', () => {
    browser.get('/');

    expect(browser.getTitle()).to.eventually.equal('Angular Seed Application');
    expect(browser.getLocationAbsUrl()).to.eventually.equal('/page1');
  });
});
