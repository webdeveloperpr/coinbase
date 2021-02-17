const api = require('./api');
const actions = require('./actions')(api);

const buyEvent = {
  type: 'market',
  action: 'buy',
  product_id: 'BTC-USD',
};


const sellEvent = {
  type: 'market',
  action: 'sell',
  product_id: 'BTC-USD',
  currency: 'BTC',
};

/**
 * @param {*} ctx 
 * @param {object} event
 * @param {string} event.action
 * @param {string} event.ticker
 * @param {string} event.exchange
 * @param {string} event.time
 */
const lambda = (ctx, evt = {}) => {

  if (evt.action == 'buy') {
    return actions.buy(buyEvent);
  }

  if (evt.action == 'sell') {
    return actions.sell(sellEvent);
  }
}

module.exports = lambda;