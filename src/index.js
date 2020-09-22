import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Client from "graphql-js-client"
import typeBundle from "./types"
import "./app.css"

const STOREFRONT_API_KEY = "d10450c25deec50f37583799d024dffc"
const API_PASSWORD = "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"

export const client = new Client(typeBundle, {
  url: "https://kensieblissdev.myshopify.com/api/2020-07/graphql.json",
  fetcherOptions: {
    headers: {
      "X-Shopify-Storefront-Access-Token": STOREFRONT_API_KEY,
      // "Content-Type": "application/json",
    },
  },
})

ReactDOM.render(<App client={client} />, document.getElementById("root"))
