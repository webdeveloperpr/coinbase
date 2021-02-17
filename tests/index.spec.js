const lambda = require('../src');

const buyEvent = {
  type: 'market',
  action: 'buy',
  product_id: 'BTC-USD',
  funds: '100.00',
};


const sellEvent = {
  type: 'market',
  action: 'sell',
  // get the size using an API call
  size: '',
  currency: 'BTC',
  product_id: 'BTC-USD',
};


xdescribe('lambda_handler', () => {
  it('should buy tokens', (done) => {
    lambda({}, buyEvent)
      .then((res) => done())
  });
});


xdescribe('should sell tokens', () => {
  it('should sell tokens', (done) => {
    lambda({}, sellEvent)
      .then(res => done());
  });
});
