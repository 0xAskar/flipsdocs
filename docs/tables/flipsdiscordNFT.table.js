import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const NFTCommands = [
  {
    Statistic: "Cfloor",
    Definition:  "Displays a collection's floor chart for a specific time frame.",
    Command: "/cfloor [symbols] [days]"
  },
  {
    Statistic: "Cholders",
    Definition: "Displays a collection's holders chart for a specific time frame",
    Command: "/cholders [symbols] [days]"
  },
  {
    Statistic: "Clistings",
    Definition: "Displays a collection's listings chart for a specific time frame",
    Command: "/clistings [symbols] [days]"
  },
  {
    Statistic: "Gas",
    Definition: "Displays current average Ethereum gas price in gwei",
    Command: "/gas"
  },
  {
    Statistic: "Floor",
    Definition: "Displays a collection's current floor price and 24h change",
    Command: "/floor"
  },
  {
    Statistic: "Floor",
    Definition: "Displays a collection's current floor price and 24h change",
    Command: "/floor [symbol]"
  },
  {
    Statistic: "Holders",
    Definition: "Displays a collection's current holder count and 24h change",
    Command: "/holder [symbol]"
  },
  {
    Statistic: "Ranks",
    Definition: "Returns the top 10 collection in order of 24h floor % change.",
    Command: "/ranks"
  },
  {
    Statistic: "Stats",
    Definition: "Displays the past [day] stats for a collection.",
    Command: "/stats [symbol] [days]"
  },
  

];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const NFTColumns = [
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