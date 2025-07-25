import { nanoid } from 'nanoid';
import rentIncon from '../assets/rentpay.jpg';
import storeIcon from '../assets/store.jpg';
import cashIcon from '../assets/cash.jpg';
import travelIcon from '../assets/travel.jpg';

export const services = [
  {
    id: nanoid(),
    slug: "rentpay",
    title: "CRED RentPay",
    desc: "Pay rent with your credit card.",
  details: "CRED RentPay lets you pay monthly rent conveniently using your credit card, eliminating the hassle of bank transfers or cash payments. It allows you to keep your finances flexible, earn valuable reward points on every transaction, and maintain a strong credit score while enjoying seamless and secure payments to your landlord.",
    icon: rentIncon
  },
  {
    id: nanoid(),
    slug: "store",
    title: "CRED Store",
    desc: "Shop with CRED coins.",
  details: "CRED Store allows members to redeem their earned CRED Coins for exclusive products and premium brand offers. From electronics and lifestyle goods to unique limited-edition merchandise, it gives you access to curated collections at special discounts, turning your bill payments into rewarding shopping experiences with exciting deals and limited-time offers.",
    icon: storeIcon
  },
  {
    id: nanoid(),
    slug: "cash",
    title: "CRED Cash",
    desc: "Instant personal loans at low interest.",
  details: "CRED Cash provides pre-approved instant personal loans with minimal documentation and quick disbursal directly to your bank account. It features competitive interest rates, flexible repayment tenure, and zero prepayment charges, making it ideal for urgent financial needs, whether it's medical emergencies, travel plans, home renovations, or unexpected personal expenses.",
    icon: cashIcon
  },
  {
    id: nanoid(),
    slug: "travel",
    title: "CRED Travel",
    desc: "Get travel perks and rewards.",
  details: "CRED Travel offers exclusive travel benefits, including discounted flight tickets, premium hotel stays, and luxury vacation packages. With curated travel deals and special partner discounts, it ensures you enjoy memorable experiences at the best value. Whether it's business trips or leisure holidays, CRED Travel rewards you every step of the journey.",
    icon: travelIcon
  },
];
