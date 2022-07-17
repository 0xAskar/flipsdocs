import React from "react";

// ----------------------------------------------------------------------------
// Please respect chronological (date) order when adding new entries.
// ----------------------------------------------------------------------------
export const definitions = [
  {
    Statistic: "Delistings",
    Definition: "The number of NFTs in a collection that are listed at any price",
  },
  {
    Statistic: "Floor",
    Definition: "The minimum price (ETH) of all currently listed NFTs of a collection",
  },
  {
    Statistic: "Holders",
    Definition: "The number of unique wallets that hold at least one NFT of a collection ",
  },
  {
    Statistic: "Listings",
    Definition: "The number of NFTs in a collection that are listed for at any price",
  },
  {
    Statistic: "Mint Price",
    Definition: "The initial price(s) at which the NFTs of a collection were minted",
  },
  {
    Statistic: "Overlap",
    Definition: "The number of wallets that hold at least one NFT in X number of collections",
  },
  {
    Statistic: "Volume",
    Definition: "Total amount of ETH traded for a collection over a timespan",
  },
  

];

// ----------------------------------------------------------------------------
// PesterDataTable column definition
// ----------------------------------------------------------------------------
export const columns = [
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
  // {
  //   Header: "Date",
  //   accessor: "date",
  //   className: "pester-data-table",
  // },
];