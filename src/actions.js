
const actions = (api) => {
  const getAccount = (currency) => {
    return api
      .getAccounts()
      .then(x => {
        return x.find((y) => y.currency === currency)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const buy = (event) => {
    return getAccount('USD')
      .then(account => {
        return api
          .buy({
            ...event,
            funds: event.funds || parseInt(account.available).toFixed(2),
          })
          .then(x => {
            console.log(x);
          }).catch(err => {
            console.log(err.data.message);
          });
      })
  };

  const sell = (event) => {
    return getAccount(event.currency)
      .then(account => {
        api.sell({
          ...event,
          // sell everything
          size: account.balance,
        })
          .then(res => console.log(res))
          .catch(err => {
            console.log(err.data.message);
          });
      });
  }

  return {
    buy,
    sell,
  }
}

module.exports = actions