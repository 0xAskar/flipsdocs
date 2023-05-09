import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const cryptoCommands = [
  {
    Statistic: "ATH",
    Definition:  "Displays the all time high of a token.",
    Command: "/ath [token]"
  },
  {
    Statistic: "ATL",
    Definition:  "Displays the all time low of a token.",
    Command: "/atl [token]"
  },
  {
    Statistic: "Coin",
    Definition: "Displays a token's price, daily change, and marketcap.",
    Command: "/coin [token]"
  },
  {
    Statistic: "Coin-Chart",
    Definition: "Charts the price of a token in USD over X number of days.",
    Command: "/coin-chart [token] [num_days]"
  },
  {
    Statistic: "Coin-Chart2",
    Definition: "Charts one token against another over X number of days.",
    Command: "/coin-chart2 [token1] [token2] [num_days]"
  },
  {
    Statistic: "Coin-Image",
    Definition: "Display the current image of a token.",
    Command: "/coin-image [token]"
  },
  {
    Statistic: "Range",
    Definition: "Displays the all time high, low, and current price of a token.",
    Command: "/range [token]"
  },

  {
    Statistic: "Trendy",
    Definition: "Returns the top 10 trendy tokens..",
    Command: "/trendy"
  },
  {
    Statistic: "TVL",
    Definition: "Displays the total value locked of a protocol.",
    Command: "/tvl [token]"
  },
  {
    Statistic: "TVL-Ratio",
    Definition: "Calculates the ratio of the total value locked over the market cap of a protocol.",
    Command: "/tvl-ratio [token]"
  },
  
];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const cryptoColumns = [
  {
    Header: "Statistic",
    accessor: "Statistic",
    className: "pester-data-table left",
    // Cell: ({ cell: { value }, row: { original } }) => (
    //   <a href={`${original.url}`} target="blank" rel="noreferrer noopener">
    //     {value}
    //   </a>
    // ),
  },
  {
    Header: "Definition",
    accessor: "Definition",
    className: "pester-data-table left",
  },
  {
    Header: "Command",
    accessor: "Command",
    className: "pester-data-table left",
  },
  // {
  //   Header: "Date",
  //   accessor: "date",
  //   className: "pester-data-table",
  // },
];