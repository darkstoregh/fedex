import chai from 'chai';
import FedExAPI from '../src';

chai.should();

const error = err => {
  err.should.be.a('object');
};

const success = res => {
  res.should.be.a('object');
};

export const test = (title, desc, fn, params) => {
  describe(title, () => {
    it(desc, done => {
      const fedex = new FedExAPI({
        environment: process.env.FEDEX_ENV,
        debug: true,
        key: process.env.FEDEX_KEY,
        password: process.env.FEDEX_PASSWORD,
        account_number: process.env.FEDEX_ACCOUNT_NUMBER,
        meter_number: process.env.FEDEX_METER_NUMBER,
        imperial: true,
      });
      fedex[fn](params, (err, res) => {
        if (err) {
          console.debug('results from server err', err);
          error(err);
        }

        success(res);

        done();
      });
    });
  });
};
