const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const resp = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    
    return {
      statusCode: 200,
      body: JSON.stringify(resp.data)
    };
  } catch (err) {
    console.error(err);
  }
}