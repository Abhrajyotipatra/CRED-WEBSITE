import { nanoid } from 'nanoid';
import rentIncon from '../assets/rentpay.jpg';
import storeIcon from '../assets/store.jpg';
import cashIcon from '../assets/cash.jpg';

export const services = [
  {
    id: nanoid(),
    slug: "rentpay",
    title: "CRED RentPay",
    desc: "Pay rent with your credit card.",
    details: "CRED RentPay lets you pay monthly rent using your credit card and earn reward points on every transaction.",
    icon: rentIncon
  },
  {
    id: nanoid(),
    slug: "store",
    title: "CRED Store",
    desc: "Shop with CRED coins.",
    details: "Redeem exclusive brands and products using CRED Coins you've earned by paying bills on time.",
    icon: storeIcon
  },
  {
    id: nanoid(),
    slug: "cash",
    title: "CRED Cash",
    desc: "Instant personal loans at low interest.",
    details: "Get pre-approved personal loans instantly in your bank account, with flexible repayment options.",
    icon: cashIcon
  },
  {
    id: nanoid(),
    slug: "travel",
    title: "CRED Travel",
    desc: "Get travel perks and rewards.",
    details: "Unlock luxury hotel stays, flight discounts, and premium experiences for your travel plans.",
  },
];
