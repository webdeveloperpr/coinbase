require('dotenv').config()
const CoinbasePro = require('coinbase-pro');

const credentials = ((isTestingEnv, env) => {
  const prodURL = 'https://api.pro.coinbase.com'
  const sandboxURL = 'https://api-public.sandbox.pro.coinbase.com';

  if (isTestingEnv) {
    return {
      API_KEY: env.TEST_BOT_2_API_KEY,
      SECRET_KEY: env.TEST_BOT_2_SECRET,
      PASS_PHRASE: env.TEST_BOT_2_PASS_PHRASE,
      API_URL: sandboxURL
    }
  }

  return {
    API_KEY: env.BOT_2_API_KEY,
    SECRET_KEY: env.BOT_2_SECRET,
    PASS_PHRASE: env.BOT_2_PASS_PHRASE,
    API_URL: prodURL
  }
  // Always use test settings for now
})(true || process.env.NODE_ENV == 'test', process.env)

// API Keys can be generated here:
// https://pro.coinbase.com/profile/api
// https://public.sandbox.pro.coinbase.com/profile/api
const api = new CoinbasePro.AuthenticatedClient(
  credentials.API_KEY,
  credentials.SECRET_KEY,
  credentials.PASS_PHRASE,
  credentials.API_URL,
);

module.exports = api;
