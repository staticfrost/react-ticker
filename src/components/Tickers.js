import React, { Component } from "react";
import axios from "axios";
import "./Tickers.css";
import Cryptocurrency from "./Cryptocurrency";

class Tickers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "bitcoin",
          name: "Bitcoin",
          symbol: "BTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "ethereum",
          name: "Ethereum",
          symbol: "ETH",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "litecoin",
          name: "Litecoin",
          symbol: "LTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "cardano",
          name: "Cardano",
          symbol: "ADA",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "binance-coin",
          name: "Binance Coin",
          symbol: "BNB",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "omisego",
          name: "OmiseGO",
          symbol: "OMG",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "stellar",
          name: "Stellar",
          symbol: "XML",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "icon",
          name: "Icon",
          symbol: "ICX",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        }
      ]
    };
  }

  componentDidMount() {
    this.fetchCryptocurrencyData();
    this.interval = setInterval(
      () => this.fetchCryptocurrencyData(),
      60 * 1000
    );
  }

  fetchCryptocurrencyData() {
    axios
      .get("https://api.coinmarketcap.com/v1/ticker/")
      .then(response => {
        var wanted = ["bitcoin", "ethereum", "litecoin", "cardano", "binance-coin", "omisego", "stellar", "icon"];
        var result = response.data.filter(currency =>
          wanted.includes(currency.id)
        );
        this.setState({ data: result });
      })
      .catch();
  }

  render() {
    var tickers = this.state.data.map(currency => (
      <Cryptocurrency data={currency} key={currency.id} />
    ));
    return (
      <div className="tickers-container">
        <p>
        <ul className="tickers">{tickers.slice(0, 4)}</ul>
        </p>
        <p>
        <ul className="tickers">{tickers.slice(4, 8)}</ul>
        </p>
        <p>Information updated every minute courtesy of coinmarketcap.com</p>
      </div>
    );
  }
}

export default Tickers;
