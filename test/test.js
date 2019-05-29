/* eslint-disable import/prefer-default-export */
import chai from 'chai';
import FedExAPI from '../src';
import handleError from './requests/handleError';

chai.should();

const error = err => {
  err.should.be.a('object');
};

const success = res => {
  res.should.be.a('object');
};

export const test = (title, desc, fn, params, testFn) => {
  describe(title, () => {
    it(desc, done => {
      const fedex = new FedExAPI({
        environment: process.env.FEDEX_ENV,
        debug: true,
        key: process.env.FEDEX_KEY,
        password: process.env.FEDEX_PASSWORD,
        account_number: process.env.FEDEX_ACCOUNT_NUMBER,
        meter_number: process.env.FEDEX_METER_NUMBER,
      });
      fedex[fn](params, (err, res) => {
        if (err) {
          console.debug('results from server err', err);
          error(err);
        }
        if (handleError(done, res)) return false;

        success(res);

        if (testFn) testFn(res);

        done();
      });
    });
  });
};
