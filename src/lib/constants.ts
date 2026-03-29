// src/lib/constants.ts

export const BUSINESS = {
  name: "Hosatti Refrigeration Service",
  tagline: "Dharwad's Most Trusted Appliance Repair Experts",
  owner: "Jameer Hosatti",
  phone: "+91-8401225984",
  whatsapp: "918401225984",
  email: "info@hosattirefrigeration.com",
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
  experience: "15+",
  founded: "2009",
  openingHours: ["Mo-Sa 07:00-19:45", "Su 07:00-19:45"],
  openingHoursDisplay: "07:00 AM – 07:45 PM, All Days",
  brands: [
    "LG", "Samsung", "IFB", "Whirlpool", "Bosch", "Haier",
    "Godrej", "Voltas", "Daikin", "Hitachi", "Blue Star",
    "Videocon", "Panasonic", "Lloyd", "Carrier", "O General",
    "Mitsubishi", "Siemens", "Electrolux", "Sharp", "Onida",
    "BPL", "Kelvinator", "TCL",
  ],
  url: "https://hosattirefrigeration.com",
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
