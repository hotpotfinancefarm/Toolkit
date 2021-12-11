import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  // {
  //   label: "Trade",
  //   icon: "TradeIcon",
  //   items: [
  //     {
  //       label: "Exchange",
  //       href: "https://www.traderjoexyz.com/#/trade?outputCurrency=0x0Aa4ef05B43700BF4b6E6Dc83eA4e9C2CF6Af0fA",
  //     },
  //     {
  //       label: "Liquidity",
  //       href: "https://www.traderjoexyz.com/#/pool/avax/0x0Aa4ef05B43700BF4b6E6Dc83eA4e9C2CF6Af0fA",
  //     },
  //   ],
  // },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Dividend Burn Pots",
    icon: "PoolIcon",
    href: "/pools",
  },
  // {
  //   label: "Lottery",
  //   icon: "TicketIcon",
  //   href: "/lottery",
  // },
  {
    label: "Bonds",
    icon: "TicketIcon",
    href: "/bonds",
  },
  {
    label: "ILO",
    icon: "SunIcon",
    href: "/ilo",
  },
  {
    label: "Referrals",
    icon: "SunIcon",
    href: "/referrals",
  },
  // {
  //   label: "NFT",
  //   icon: "NftIcon",
  //   href: "/nft",
  // },
  // {
  //   label: "Team Battle",
  //   icon: "TeamBattleIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "Profile & Teams",
  //   icon: "GroupsIcon",
  //   status: status.LIVE,
  //   items: [
  //     {
  //       label: "Leaderboard",
  //       href: "/teams",
  //       status: status.NEW,
  //     },
  //     {
  //       label: "YourProfile",
  //       href: "/",
  //     },
  //   ],
  //   calloutClass: "rainbow",
  // },
  // {
  //   label: "Info",
  //   icon: "InfoIcon",
  //   items: [
  //     {
  //       label: "Overview",
  //       href: "https://pancakeswap.info",
  //     },
  //     {
  //       label: "Tokens",
  //       href: "https://pancakeswap.info/tokens",
  //     },
  //     {
  //       label: "Pairs",
  //       href: "https://pancakeswap.info/pairs",
  //     },
  //     {
  //       label: "Accounts",
  //       href: "https://pancakeswap.info/accounts",
  //     },
  //   ],
  // },
  // {
  //   label: "IFO",
  //   icon: "IfoIcon",
  //   items: [
  //     {
  //       label: "Next",
  //       href: "/ifo",
  //     },
  //     {
  //       label: "History",
  //       href: "/ifo/history",
  //     },
  //   ],
  // },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Github",
        href: "https://github.com/hotpotfinancefarm",
      },
      {
        label: "Docs",
        href: "https://docs.hotpot.farm/",
      },
      {
        label: "Medium",
        href: "https://medium.com/@hotpotfinancefarm",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/hotpotfinanceofficial",
    // items: [
    //   {
    //     label: "English",
    //     href: "https://t.me/hotpotfinanceofficial",
    //   },
    //   // {
    //   //   label: "Bahasa Indonesia",
    //   //   href: "https://t.me/hotpotfinanceofficial",
    //   // },
    //   // {
    //   //   label: "中文",
    //   //   href: "https://t.me/hotpotfinanceofficial",
    //   // },
    //   // {
    //   //   label: "Tiếng Việt",
    //   //   href: "https://t.me/hotpotfinanceofficial",
    //   // },
    //   // {
    //   //   label: "Italiano",
    //   //   href: "https://t.me/hotpotfinanceofficial",
    //   // },
    //   // {
    //   //   label: "русский",
    //   //   href: "https://t.me/hotpotfinanceofficial",
    //   // },
    //   // {
    //   //   label: "Türkiye",
    //   //   href: "https://t.me/hotpotfinanceofficial",
    //   // },
    //   // {
    //   //   label: "Português",
    //   //   href: "https://t.me/hotpotfinanceofficial",
    //   // },
    //   // {
    //   //   label: "Español",
    //   //   href: "https://t.me/hotpotfinanceofficial",
    //   // },
    //   // {
    //   //   label: "日本語",
    //   //   href: "https://t.me/hotpotfinanceofficial",
    //   // },
    //   // {
    //   //   label: "Français",
    //   //   href: "https://t.me/hotpotfinanceofficial",
    //   // },
    //   // {
    //   //   label: "Announcements",
    //   //   href: "https://twitter.com/Hotpot_FinOff",
    //   // },
    // ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/Hotpot_FinOff",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 0;
