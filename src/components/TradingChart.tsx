import TradingViewWidget, { Themes } from "react-tradingview-widget";

export default function TradingChart() {
  return (
    <TradingViewWidget
      symbol="BITSTAMP:BTCUSD"
      theme={Themes.DARK}
      border="0"
      locale="en"
      autosize
    />
  );
}
