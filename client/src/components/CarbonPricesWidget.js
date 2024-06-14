import React, { Component } from 'react';
import styles from "../styles/Client.module.css"
class CarbonPricesWidget extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://carboncredits.com/live-carbon-prices/index.js.php';
    script.async = true;
    document.getElementById('carbon-prices').appendChild(script);
  }

  render() {
    // const widgetStyle = {
    //   maxWidth: '800px', // Set the maximum width as per your requirement
    //   margin: '0 auto', // Center the widget horizontally

    // };

    return (
      <div id="carbon-prices" className={styles.carbonprices} ></div>
    );
  }
}

export default CarbonPricesWidget;
