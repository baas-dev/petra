// TradingViewWidget.jsx
import React, { memo, useEffect, useRef } from "react"
import { SymbolOverview } from "react-ts-tradingview-widgets"

function TradingViewWidget() {
  const container = useRef<any>()

  return (
    <SymbolOverview
      colorTheme="light"
      chartType="area"
      downColor="#800080"
      borderDownColor="#800080"
      wickDownColor="#800080"
      height={"300"}
      width={"100%"}
      dateFormat={"dd MMM 'yy"}
      symbols={[["FRED:MORTGAGE30US|12M"]]}
      copyrightStyles={{ span: { visibility: "hidden" } }}
    />
  )
}

export default TradingViewWidget
