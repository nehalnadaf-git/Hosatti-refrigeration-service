// src/lib/constants.ts

export const BUSINESS = {
  name: "Hosatti Refrigeration Service",
  tagline: "Dharwad's Most Trusted Appliance Repair Experts",
  owner: "Jameer Hosatti",
  phone: "+91-7899472430",
  whatsapp: "917899472430",
  email: "info@hosatti.com",
  address: {
    street: "Jaya Nagar, Opp Gurukul Academy, Saptapur Last Stop",
    city: "Dharwad",
    state: "Karnataka",
    pincode: "580001",
    country: "India",
    full: "Jaya Nagar, Opp Gurukul Academy, Saptapur Last Stop, Jay Nagar, Dharwad, Karnataka 580001, India",
  },
  geo: {
    lat: 15.4589,
    lng: 75.0078,
  },
  experience: "15+ Years",
  founded: "2009",
  openingHours: ["Mo-Sa 09:30-19:00", "Su 09:30-13:00"],
  openingHoursDisplay: "Mon-Sat: 09:30 AM – 07:00 PM, Sun: 09:30 AM – 01:00 PM",
  payments: "UPI (Paytm, Google Pay) & Cash",
  brands: [
    "LG", "Samsung", "IFB", "Whirlpool", "Bosch", "Haier",
    "Godrej", "Voltas", "Daikin", "Hitachi", "Blue Star",
    "Videocon", "Panasonic", "Lloyd", "Carrier", "O General",
    "Mitsubishi", "Siemens", "Electrolux", "Sharp", "Onida",
    "BPL", "Kelvinator", "TCL",
  ],
  url: "https://www.hosatti.com",
  social: {
    google: "REPLACE_WITH_GOOGLE_MAPS_CID",
  },
} as const;

export const BRAND = {
  navy: "#1a237e",
  navyLight: "#3949ab",
  navyDark: "#0d1b6b",
  gold: "#f9a825",
  goldLight: "#fdd835",
  goldDark: "#f57f17",
} as const;
