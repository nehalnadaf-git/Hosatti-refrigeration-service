// src/lib/brands.ts
export interface BrandData {
  slug: string;
  name: string;
  description: string;
  appliancesServiced: string[];
  servicesAvailable: string[];
  commonProblems: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

function brand(
  slug: string,
  name: string,
  description: string,
  appliances: string[],
  services: string[],
  problems: string[],
  faqs: { question: string; answer: string }[],
): BrandData {
  return {
    slug, name, description,
    appliancesServiced: appliances,
    servicesAvailable: services,
    commonProblems: problems,
    faqs,
    metaTitle: `${name} Appliance Repair in Dharwad | Hosatti Refrigeration`,
    metaDescription: `Expert ${name} AC, fridge & washing machine repair in Dharwad. Certified technicians, genuine parts, 15+ years. Call +91-7899472430 today!`,
    keywords: [
      `${name} repair Dharwad`,
      `${name} AC repair Dharwad`,
      `${name} fridge repair Dharwad`,
      `${name} washing machine repair Dharwad`,
      `${name} service center Dharwad`,
      `${name} technician Dharwad`,
    ],
  };
}

const ALL_AC_SERVICES = [
  "ac-repair-service-dharwad",
  "ac-gas-refilling-service-dharwad",
  "ac-deep-cleaning-service-dharwad",
  "ac-installation-service-dharwad",
];
const ALL_FRIDGE_SERVICES = [
  "refrigerator-repair-service-dharwad",
  "fridge-compressor-repair-dharwad",
  "refrigerator-gas-recharge-dharwad",
];
const ALL_WM_SERVICES = [
  "fully-automatic-washing-machine-repair-dharwad",
  "semi-automatic-washing-machine-repair-dharwad",
  "washing-machine-repair-service-dharwad",
];
const ALL_COOLER_SERVICES = [
  "air-cooler-repair-service-dharwad",
  "air-cooler-motor-repair-dharwad",
];

function faq(q: string, a: string) { return { question: q, answer: a }; }

export const BRANDS: BrandData[] = [
  brand("lg", "LG",
    "LG is one of India's most popular appliance brands, known for feature-rich ACs, frost-free refrigerators, and fully automatic washing machines. Hosatti Refrigeration Service provides expert LG appliance repair in Dharwad with genuine or OEM-compatible spare parts and 15+ years of experience.",
    ["LG Split AC", "LG Window AC", "LG Inverter AC", "LG Double Door Fridge", "LG Fully Automatic Washing Machine", "LG Front Load Washing Machine"],
    [...ALL_AC_SERVICES, ...ALL_FRIDGE_SERVICES, ...ALL_WM_SERVICES],
    ["LG AC compressor not cooling", "LG fridge not cooling — thermostat fault", "LG washing machine door lock error", "LG AC PCB board failure"],
    [
      faq("Who repairs LG AC in Dharwad?", "Hosatti Refrigeration Service repairs all LG AC models in Dharwad — split, window, and inverter. Call +91-7899472430 for doorstep service."),
      faq("Who repairs LG refrigerators in Dharwad?", "We service all LG fridge models in Dharwad — single door, double door, and frost-free — with genuine parts."),
      faq("Who repairs LG washing machines in Dharwad?", "Hosatti Refrigeration Service repairs LG top-load and front-load washing machines in Dharwad, including PCB and drum issues."),
      faq("Do you fix LG AC not cooling in Dharwad?", "Yes, LG AC not cooling is one of the most common repairs we do in Dharwad. Gas refilling, compressor check, PCB repair — all covered."),
      faq("Is LG fridge compressor replacement available in Dharwad?", "Yes, we replace LG fridge compressors in Dharwad with genuine OEM-compatible compressors and full leak-test warranty."),
    ],
  ),

  brand("samsung", "Samsung",
    "Samsung makes premium ACs, multi-door refrigerators, and advanced front-load washing machines. Hosatti Refrigeration Service provides specialist Samsung appliance repair in Dharwad with trained technicians who understand Samsung's digital technology and inverter systems.",
    ["Samsung Split AC", "Samsung Inverter AC", "Samsung Double Door Fridge", "Samsung Side-by-Side Fridge", "Samsung Front Load WM", "Samsung Top Load WM"],
    [...ALL_AC_SERVICES, ...ALL_FRIDGE_SERVICES, ...ALL_WM_SERVICES],
    ["Samsung AC not cooling — inverter board fault", "Samsung fridge ice buildup — defrost heater", "Samsung washing machine error code", "Samsung AC water leaking"],
    [
      faq("Who repairs Samsung AC in Dharwad?", "Hosatti Refrigeration Service repairs all Samsung AC models in Dharwad. Call +91-7899472430 for quick doorstep service."),
      faq("Who fixes Samsung fridge not cooling in Dharwad?", "We diagnose and fix all Samsung fridge cooling issues in Dharwad — thermostat, compressor, gas leak, or defrost system."),
      faq("Who repairs Samsung washing machine door lock in Dharwad?", "We fix Samsung front-load and top-load washing machine door lock faults in Dharwad."),
      faq("Do you repair Samsung inverter ACs in Dharwad?", "Yes, including PCB/inverter board repairs that are common in Samsung inverter models."),
      faq("Is Samsung fridge ice maker repair available in Dharwad?", "Yes, we service Samsung fridge ice maker and defrost system issues in Dharwad."),
    ],
  ),

  brand("videocon", "Videocon",
    "Videocon is a trusted Indian brand with a large installed base of refrigerators and washing machines across Dharwad households. Hosatti Refrigeration Service provides complete Videocon appliance repair in Dharwad using original and compatible parts for all Videocon models.",
    ["Videocon Refrigerator", "Videocon Washing Machine", "Videocon AC"],
    [...ALL_FRIDGE_SERVICES, ...ALL_WM_SERVICES, ...ALL_AC_SERVICES],
    ["Videocon fridge compressor failure", "Videocon washing machine motor fault", "Videocon fridge thermostat problem", "Videocon AC gas leak"],
    [
      faq("Who repairs Videocon refrigerators in Dharwad?", "Hosatti Refrigeration Service provides expert Videocon fridge repair in Dharwad with doorstep service."),
      faq("Who fixes Videocon washing machines in Dharwad?", "We repair Videocon semi-automatic and fully automatic washing machines in Dharwad."),
      faq("Is Videocon fridge compressor replacement available in Dharwad?", "Yes, we replace Videocon fridge compressors in Dharwad with compatible parts."),
      faq("Who repairs Videocon ACs in Dharwad?", "Hosatti repairs Videocon split and window ACs in Dharwad with quick service."),
      faq("Do you repair old Videocon models in Dharwad?", "Yes, we service older Videocon refrigerators and washing machines. Spare parts are generally available."),
    ],
  ),

  brand("ifb", "IFB",
    "IFB is India's leader in front-load washing machines and also produces high-quality microwave ovens and dishwashers. Hosatti Refrigeration Service provides specialist IFB washing machine repair in Dharwad with expertise in IFB's drum, motor, and PCB systems.",
    ["IFB Front Load Washing Machine", "IFB Top Load Washing Machine"],
    [...ALL_WM_SERVICES],
    ["IFB washing machine drum bearing failure", "IFB PCB fault — error codes", "IFB door seal torn and leaking", "IFB motor not spinning"],
    [
      faq("Who repairs IFB washing machines in Dharwad?", "Hosatti Refrigeration Service repairs all IFB front-load and top-load washing machine models in Dharwad."),
      faq("Who fixes IFB washing machine error codes in Dharwad?", "We read and diagnose all IFB error codes in Dharwad — drain errors, door errors, motor faults — and fix the root cause."),
      faq("Is IFB drum bearing replacement available in Dharwad?", "Yes, we replace IFB drum bearings in Dharwad — a common issue in older front-load models that causes loud grinding noise."),
      faq("Who repairs IFB washing machine door seal in Dharwad?", "We replace IFB front-load door seals (bellows) in Dharwad when they crack or tear and cause water leakage."),
      faq("Is IFB washing machine PCB repair available in Dharwad?", "Yes, we repair IFB control PCBs in Dharwad for issues like machine not starting, wrong cycle selection, or display faults."),
    ],
  ),

  brand("godrej", "Godrej",
    "Godrej is a heritage Indian brand renowned for reliable refrigerators and washing machines built to last. Hosatti Refrigeration Service provides trusted Godrej appliance repair in Dharwad, keeping India's favourite refrigerators and washers running for years longer.",
    ["Godrej Refrigerator", "Godrej Washing Machine", "Godrej AC"],
    [...ALL_FRIDGE_SERVICES, ...ALL_WM_SERVICES, ...ALL_AC_SERVICES],
    ["Godrej fridge not cooling — thermostat failure", "Godrej washing machine pulsator not working", "Godrej fridge door gasket worn", "Godrej AC compressor issue"],
    [
      faq("Who repairs Godrej refrigerators in Dharwad?", "Hosatti Refrigeration Service provides expert Godrej fridge repair in Dharwad for all models."),
      faq("Who fixes Godrej washing machines in Dharwad?", "We repair Godrej semi-automatic and fully automatic washing machines in Dharwad."),
      faq("Is Godrej fridge gas refilling available in Dharwad?", "Yes, we refill refrigerant in Godrej fridges in Dharwad with the correct gas type."),
      faq("Who repairs Godrej ACs in Dharwad?", "Hosatti repairs Godrej split and window ACs in Dharwad with quick service."),
      faq("Do you repair old Godrej fridge models in Dharwad?", "Yes, we repair older Godrej fridge models that are still very repairable and worth maintaining."),
    ],
  ),

  brand("haier", "Haier",
    "Haier is a Chinese-origin global brand popular in Dharwad for its value-for-money ACs, refrigerators, and washing machines. Hosatti Refrigeration Service provides comprehensive Haier appliance repair in Dharwad with fast turnaround and genuine compatible parts.",
    ["Haier Split AC", "Haier Inverter AC", "Haier Refrigerator", "Haier Washing Machine"],
    [...ALL_AC_SERVICES, ...ALL_FRIDGE_SERVICES, ...ALL_WM_SERVICES],
    ["Haier AC PCB failure", "Haier fridge not cooling after power cut", "Haier washing machine not draining", "Haier AC gas leak"],
    [
      faq("Who repairs Haier ACs in Dharwad?", "Hosatti Refrigeration Service repairs all Haier AC models in Dharwad with quick doorstep service."),
      faq("Who fixes Haier fridge not cooling in Dharwad?", "We diagnose and repair all Haier fridge cooling failures in Dharwad — thermostat, compressor, gas, or PCB."),
      faq("Is Haier washing machine repair available in Dharwad?", "Yes, we repair Haier fully automatic and semi-automatic washing machines in Dharwad."),
      faq("Who does Haier AC gas refilling in Dharwad?", "Hosatti provides Haier AC gas refilling and leak repair in Dharwad with correct gas types."),
      faq("Do you do Haier AC deep cleaning in Dharwad?", "Yes, professional Haier AC deep cleaning available in Dharwad to restore efficiency."),
    ],
  ),

  brand("panasonic", "Panasonic",
    "Panasonic is a trusted Japanese brand known for energy-efficient ACs and reliable refrigerators. Hosatti Refrigeration Service provides expert Panasonic appliance repair in Dharwad with technicians trained in Panasonic's inverter and nanoe-X technology.",
    ["Panasonic Split AC", "Panasonic Inverter AC", "Panasonic Refrigerator"],
    [...ALL_AC_SERVICES, ...ALL_FRIDGE_SERVICES],
    ["Panasonic AC inverter error", "Panasonic fridge thermostat fault", "Panasonic AC not cooling efficiently", "Panasonic AC remote malfunction"],
    [
      faq("Who repairs Panasonic ACs in Dharwad?", "Hosatti Refrigeration Service repairs Panasonic split and inverter ACs in Dharwad. Call +91-7899472430."),
      faq("Who fixes Panasonic fridge not cooling in Dharwad?", "We service all Panasonic fridge models in Dharwad including thermostat and compressor repairs."),
      faq("Is Panasonic AC gas refilling available in Dharwad?", "Yes, Panasonic AC gas refilling and leak repair available in Dharwad for all refrigerant types."),
      faq("Who does Panasonic AC deep cleaning in Dharwad?", "Hosatti provides Panasonic AC deep cleaning service in Dharwad for improved cooling."),
      faq("Do you repair Panasonic inverter ACs in Dharwad?", "Yes, including PCB and inverter module repairs for Panasonic ACs in Dharwad."),
    ],
  ),

  brand("voltas", "Voltas",
    "Voltas is India's No. 1 AC brand by market share and also produces air coolers. Hosatti Refrigeration Service provides specialist Voltas AC repair and Voltas air cooler repair in Dharwad with trained technicians and genuine parts.",
    ["Voltas Split AC", "Voltas Window AC", "Voltas Inverter AC", "Voltas Air Cooler"],
    [...ALL_AC_SERVICES, ...ALL_COOLER_SERVICES],
    ["Voltas AC not cooling — gas leak", "Voltas AC PCB fault", "Voltas AC water drip", "Voltas cooler not cooling — pump fault"],
    [
      faq("Who repairs Voltas ACs in Dharwad?", "Hosatti Refrigeration Service repairs all Voltas AC models in Dharwad — split, window, and inverter."),
      faq("Who does Voltas AC gas refilling in Dharwad?", "We perform Voltas AC gas refilling and leak detection for all Voltas models in Dharwad."),
      faq("Who repairs Voltas air coolers in Dharwad?", "Yes, we repair Voltas air coolers in Dharwad — cooling pads, pump, and motor repairs."),
      faq("Is Voltas AC installation available in Dharwad?", "Yes, we install Voltas ACs in Dharwad with professional setup and performance testing."),
      faq("Who does Voltas AC deep cleaning in Dharwad?", "Hosatti provides Voltas AC deep cleaning in Dharwad to restore cooling and air quality."),
    ],
  ),

  brand("whirlpool", "Whirlpool",
    "Whirlpool is an American brand famous for durable fully automatic washing machines and refrigerators widely used in Dharwad. Hosatti Refrigeration Service provides expert Whirlpool appliance repair in Dharwad for all models with genuine or OEM-compatible spare parts.",
    ["Whirlpool Washing Machine", "Whirlpool Refrigerator", "Whirlpool AC"],
    [...ALL_WM_SERVICES, ...ALL_FRIDGE_SERVICES, ...ALL_AC_SERVICES],
    ["Whirlpool washing machine agitator fault", "Whirlpool fridge not cooling — control board", "Whirlpool washing machine not spinning", "Whirlpool fridge water dispenser leak"],
    [
      faq("Who repairs Whirlpool washing machines in Dharwad?", "Hosatti Refrigeration Service repairs all Whirlpool washing machine models in Dharwad. Call +91-7899472430."),
      faq("Who fixes Whirlpool fridge not cooling in Dharwad?", "We repair all Whirlpool fridge cooling issues in Dharwad with quick doorstep service."),
      faq("Is Whirlpool washing machine not draining fixed in Dharwad?", "Yes, drain pump, filter clogs, and hose issues for Whirlpool machines fixed in Dharwad."),
      faq("Who repairs Whirlpool ACs in Dharwad?", "Yes, we service Whirlpool split and window ACs in Dharwad with all repair types."),
      faq("Do you repair Whirlpool fridge compressors in Dharwad?", "Yes, Whirlpool fridge compressor diagnosis and replacement available in Dharwad."),
    ],
  ),

  brand("bosch", "Bosch",
    "Bosch is a German precision brand known for high-quality front-load washing machines and refrigerators. Hosatti Refrigeration Service provides specialist Bosch appliance repair in Dharwad, including complex Bosch front-load drum, PCB, and heating element repairs.",
    ["Bosch Front Load Washing Machine", "Bosch Refrigerator"],
    [...ALL_WM_SERVICES, ...ALL_FRIDGE_SERVICES],
    ["Bosch washing machine door lock fault", "Bosch drum bearing noise", "Bosch fridge not cooling", "Bosch washing machine E-series error codes"],
    [
      faq("Who repairs Bosch washing machines in Dharwad?", "Hosatti Refrigeration Service repairs all Bosch front-load washing machine models in Dharwad."),
      faq("Who fixes Bosch washing machine error codes in Dharwad?", "We diagnose all Bosch error codes in Dharwad and repair the root cause — motor, door, drain, or PCB."),
      faq("Is Bosch drum bearing replacement available in Dharwad?", "Yes, we replace Bosch front-load drum bearings in Dharwad when they fail and cause loud noise."),
      faq("Who repairs Bosch refrigerators in Dharwad?", "Hosatti services Bosch fridge models in Dharwad with genuine-compatible parts."),
      faq("Do you repair Bosch washing machine PCBs in Dharwad?", "Yes, Bosch control PCB repair and replacement available in Dharwad."),
    ],
  ),

  brand("siemens", "Siemens",
    "Siemens is a German engineering brand offering premium front-load washing machines and refrigerators in India. Hosatti Refrigeration Service provides expert Siemens appliance repair in Dharwad for these sophisticated appliances.",
    ["Siemens Front Load Washing Machine", "Siemens Refrigerator"],
    [...ALL_WM_SERVICES, ...ALL_FRIDGE_SERVICES],
    ["Siemens washing machine motor fault", "Siemens fridge thermostat failure", "Siemens washing machine door seal leak", "Siemens control board error"],
    [
      faq("Who repairs Siemens washing machines in Dharwad?", "Hosatti Refrigeration Service repairs Siemens washing machines in Dharwad with expert diagnostics."),
      faq("Who fixes Siemens refrigerators in Dharwad?", "We repair Siemens fridge models in Dharwad — cooling issues, thermostat, and more."),
      faq("Is Siemens washing machine door seal repair available in Dharwad?", "Yes, we replace Siemens front-load door seals in Dharwad."),
      faq("Who repairs Siemens PCBs in Dharwad?", "Hosatti repairs Siemens appliance control boards in Dharwad."),
      faq("Do you fix Siemens washing machine errors in Dharwad?", "Yes, all Siemens error codes diagnosed and repaired in Dharwad."),
    ],
  ),

  brand("electrolux", "Electrolux",
    "Electrolux is a Swedish brand with a strong presence in India across refrigerators and washing machines. Hosatti Refrigeration Service provides quality Electrolux appliance repair in Dharwad for all models.",
    ["Electrolux Refrigerator", "Electrolux Washing Machine"],
    [...ALL_FRIDGE_SERVICES, ...ALL_WM_SERVICES],
    ["Electrolux fridge compressor failure", "Electrolux washing machine motor fault", "Electrolux fridge thermostat fault", "Electrolux washing machine not draining"],
    [
      faq("Who repairs Electrolux refrigerators in Dharwad?", "Hosatti Refrigeration Service repairs Electrolux fridges in Dharwad with quick options."),
      faq("Who fixes Electrolux washing machines in Dharwad?", "We repair Electrolux washing machines in Dharwad — drain, motor, and PCB repairs."),
      faq("Is Electrolux fridge gas refilling available in Dharwad?", "Yes, Electrolux fridge gas refilling and leak repair performed in Dharwad."),
      faq("Do you replace Electrolux fridge compressors in Dharwad?", "Yes, Electrolux compressor diagnosis and replacement available in Dharwad."),
      faq("Who repairs Electrolux appliances in Dharwad?", "Hosatti Refrigeration Service is the trusted Electrolux repair expert in Dharwad. Call +91-7899472430."),
    ],
  ),

  brand("daikin", "Daikin",
    "Daikin is a Japanese brand synonymous with premium AC quality and is widely regarded as the gold standard for split ACs in India. Hosatti Refrigeration Service provides specialist Daikin AC repair in Dharwad with deep expertise in Daikin's inverter and R32 systems.",
    ["Daikin Split AC", "Daikin Inverter AC", "Daikin Window AC"],
    [...ALL_AC_SERVICES],
    ["Daikin AC inverter PCB fault", "Daikin AC R32 gas leak", "Daikin AC not cooling in Dharwad heat", "Daikin AC remote communication error"],
    [
      faq("Who repairs Daikin ACs in Dharwad?", "Hosatti Refrigeration Service repairs all Daikin split and inverter ACs in Dharwad. Call +91-7899472430."),
      faq("Who does Daikin AC gas refilling in Dharwad?", "We carry R32 and other Daikin-compatible refrigerants for Daikin AC gas refilling in Dharwad."),
      faq("Is Daikin AC deep cleaning available in Dharwad?", "Yes, professional Daikin AC deep cleaning available in Dharwad to restore performance."),
      faq("Who does Daikin AC installation in Dharwad?", "Hosatti installs Daikin ACs in Dharwad with professional copper pipe routing and pressure testing."),
      faq("Do you repair Daikin AC PCBs in Dharwad?", "Yes, Daikin inverter PCB and control board repairs available in Dharwad."),
    ],
  ),

  brand("hitachi", "Hitachi",
    "Hitachi is a Japanese brand offering premium ACs with advanced features like inverter compressors and self-cleaning coils. Hosatti Refrigeration Service provides expert Hitachi AC repair in Dharwad for all Hitachi models.",
    ["Hitachi Split AC", "Hitachi Inverter AC"],
    [...ALL_AC_SERVICES],
    ["Hitachi AC self-clean error", "Hitachi AC not cooling — inverter fault", "Hitachi AC compressor issue", "Hitachi AC water leakage"],
    [
      faq("Who repairs Hitachi ACs in Dharwad?", "Hosatti Refrigeration Service repairs all Hitachi AC models in Dharwad with doorstep service."),
      faq("Who does Hitachi AC gas refilling in Dharwad?", "We perform Hitachi AC gas refilling and leak detection for all Hitachi models in Dharwad."),
      faq("Is Hitachi AC deep cleaning available in Dharwad?", "Yes, professional Hitachi AC deep cleaning in Dharwad — coil, filter, and drain pan."),
      faq("Who does Hitachi AC installation in Dharwad?", "Hosatti installs Hitachi ACs in Dharwad with professional fitting and full system test."),
      faq("Do you repair Hitachi AC inverter boards in Dharwad?", "Yes, Hitachi inverter PCB repairs available in Dharwad."),
    ],
  ),

  brand("lloyd", "Lloyd",
    "Lloyd is a popular budget-friendly AC and appliance brand owned by Havells India, widely used in Dharwad homes. Hosatti Refrigeration Service provides reliable Lloyd AC repair and appliance service in Dharwad.",
    ["Lloyd Split AC", "Lloyd Window AC", "Lloyd Refrigerator"],
    [...ALL_AC_SERVICES, ...ALL_FRIDGE_SERVICES],
    ["Lloyd AC not cooling — gas leak", "Lloyd AC compressor failure", "Lloyd fridge thermostat fault", "Lloyd AC PCB issue"],
    [
      faq("Who repairs Lloyd ACs in Dharwad?", "Hosatti Refrigeration Service repairs all Lloyd AC models in Dharwad. Call +91-7899472430."),
      faq("Who does Lloyd AC gas refilling in Dharwad?", "We perform Lloyd AC gas refilling and leak repair in Dharwad."),
      faq("Is Lloyd AC deep cleaning available in Dharwad?", "Yes, Lloyd AC deep cleaning available in Dharwad."),
      faq("Who repairs Lloyd refrigerators in Dharwad?", "We service Lloyd fridge models in Dharwad with quick service."),
      faq("Do you install Lloyd ACs in Dharwad?", "Yes, Lloyd AC installation with professional setup in Dharwad."),
    ],
  ),

  brand("blue-star", "Blue Star",
    "Blue Star is a premium Indian AC brand, market leader in commercial cooling and increasingly popular in homes. Hosatti Refrigeration Service provides expert Blue Star AC repair in Dharwad for residential and small commercial units.",
    ["Blue Star Split AC", "Blue Star Inverter AC", "Blue Star Window AC"],
    [...ALL_AC_SERVICES],
    ["Blue Star AC not cooling — refrigerant", "Blue Star AC inverter PCB fault", "Blue Star AC water leak", "Blue Star AC compressor noise"],
    [
      faq("Who repairs Blue Star ACs in Dharwad?", "Hosatti Refrigeration Service repairs all Blue Star AC models in Dharwad. Call +91-7899472430."),
      faq("Who does Blue Star AC gas refilling in Dharwad?", "We perform Blue Star AC gas refilling and leak repair in Dharwad."),
      faq("Is Blue Star AC deep cleaning available in Dharwad?", "Yes, Blue Star AC deep cleaning service available in Dharwad."),
      faq("Who installs Blue Star ACs in Dharwad?", "Hosatti installs Blue Star ACs in Dharwad with professional copper pipe routing."),
      faq("Do you repair Blue Star inverter ACs in Dharwad?", "Yes, Blue Star inverter PCB and compressor repairs available in Dharwad."),
    ],
  ),

  brand("carrier", "Carrier",
    "Carrier is the world's original air conditioning brand, offering premium split ACs and chillers. Hosatti Refrigeration Service provides expert Carrier AC repair in Dharwad for residential Carrier units.",
    ["Carrier Split AC", "Carrier Inverter AC"],
    [...ALL_AC_SERVICES],
    ["Carrier AC not cooling", "Carrier AC gas leak", "Carrier PCB fault", "Carrier AC water dripping"],
    [
      faq("Who repairs Carrier ACs in Dharwad?", "Hosatti Refrigeration Service repairs Carrier split and inverter ACs in Dharwad."),
      faq("Who does Carrier AC gas refilling in Dharwad?", "We perform Carrier AC gas refilling in Dharwad with correct refrigerant types."),
      faq("Is Carrier AC deep cleaning available in Dharwad?", "Yes, Carrier AC deep cleaning available in Dharwad."),
      faq("Who does Carrier AC installation in Dharwad?", "Hosatti installs Carrier ACs in Dharwad with professional setup."),
      faq("Do you repair Carrier AC PCBs in Dharwad?", "Yes, Carrier AC control board repairs available in Dharwad."),
    ],
  ),

  brand("o-general", "O General",
    "O General is a Japanese-origin AC brand under the Fujitsu group, famous for superior cooling even in extreme heat — perfect for Dharwad summers. Hosatti Refrigeration Service provides specialist O General AC repair in Dharwad.",
    ["O General Split AC", "O General Cassette AC"],
    [...ALL_AC_SERVICES],
    ["O General AC not cooling in peak summer", "O General gas leak", "O General AC PCB fault", "O General AC compressor issue"],
    [
      faq("Who repairs O General ACs in Dharwad?", "Hosatti Refrigeration Service repairs O General split ACs in Dharwad. Call +91-7899472430."),
      faq("Who does O General AC gas refilling in Dharwad?", "We perform O General AC gas refilling with correct refrigerant in Dharwad."),
      faq("Is O General AC deep cleaning available in Dharwad?", "Yes, O General AC deep cleaning available in Dharwad."),
      faq("Who installs O General ACs in Dharwad?", "Hosatti installs O General ACs in Dharwad with professional fitting and testing."),
      faq("Do you repair O General AC compressors in Dharwad?", "Yes, O General AC compressor diagnosis and repair available in Dharwad."),
    ],
  ),

  brand("mitsubishi", "Mitsubishi",
    "Mitsubishi Electric produces high-quality inverter ACs with industry-leading energy efficiency. Hosatti Refrigeration Service provides expert Mitsubishi Electric AC repair in Dharwad for residential split and inverter models.",
    ["Mitsubishi Electric Split AC", "Mitsubishi Electric Inverter AC"],
    [...ALL_AC_SERVICES],
    ["Mitsubishi AC inverter error", "Mitsubishi AC not cooling", "Mitsubishi AC PCB fault", "Mitsubishi AC gas leak"],
    [
      faq("Who repairs Mitsubishi ACs in Dharwad?", "Hosatti Refrigeration Service repairs Mitsubishi Electric ACs in Dharwad. Call +91-7899472430."),
      faq("Who does Mitsubishi AC gas refilling in Dharwad?", "We perform Mitsubishi AC gas refilling in Dharwad."),
      faq("Is Mitsubishi AC deep cleaning available in Dharwad?", "Yes, Mitsubishi AC deep cleaning available in Dharwad."),
      faq("Who installs Mitsubishi ACs in Dharwad?", "Hosatti installs Mitsubishi Electric ACs in Dharwad professionally."),
      faq("Do you repair Mitsubishi AC PCBs in Dharwad?", "Yes, Mitsubishi inverter PCB repairs available in Dharwad."),
    ],
  ),

  brand("sharp", "Sharp",
    "Sharp is a Japanese electronics brand with a range of ACs and refrigerators available in India. Hosatti Refrigeration Service provides Sharp appliance repair in Dharwad for AC and fridge models.",
    ["Sharp Split AC", "Sharp Refrigerator"],
    [...ALL_AC_SERVICES, ...ALL_FRIDGE_SERVICES],
    ["Sharp AC not cooling", "Sharp fridge thermostat fault", "Sharp AC gas leak", "Sharp fridge not cooling after power cut"],
    [
      faq("Who repairs Sharp ACs in Dharwad?", "Hosatti Refrigeration Service repairs Sharp AC models in Dharwad. Call +91-7899472430."),
      faq("Who fixes Sharp refrigerators in Dharwad?", "We repair Sharp fridge models in Dharwad with quick service options."),
      faq("Is Sharp AC gas refilling available in Dharwad?", "Yes, Sharp AC gas refilling and leak repair available in Dharwad."),
      faq("Who does Sharp AC deep cleaning in Dharwad?", "Hosatti provides Sharp AC deep cleaning in Dharwad."),
      faq("Do you repair Sharp fridge compressors in Dharwad?", "Yes, Sharp fridge compressor repairs available in Dharwad."),
    ],
  ),

  brand("onida", "Onida",
    "Onida (MIRC Electronics) is a well-known Indian brand famous for affordable ACs and refrigerators. Hosatti Refrigeration Service provides Onida appliance repair in Dharwad for their AC and fridge range.",
    ["Onida Split AC", "Onida Window AC", "Onida Refrigerator"],
    [...ALL_AC_SERVICES, ...ALL_FRIDGE_SERVICES],
    ["Onida AC not cooling", "Onida fridge compressor failure", "Onida AC PCB fault", "Onida fridge thermostat issue"],
    [
      faq("Who repairs Onida ACs in Dharwad?", "Hosatti Refrigeration Service repairs Onida split and window ACs in Dharwad."),
      faq("Who fixes Onida refrigerators in Dharwad?", "We repair all Onida fridge models in Dharwad with genuine-compatible parts."),
      faq("Is Onida AC gas refilling available in Dharwad?", "Yes, Onida AC gas refilling and leak repair in Dharwad."),
      faq("Who does Onida AC deep cleaning in Dharwad?", "Hosatti provides Onida AC deep cleaning in Dharwad."),
      faq("Do you replace Onida fridge compressors in Dharwad?", "Yes, Onida fridge compressor replacement available in Dharwad."),
    ],
  ),

  brand("bpl", "BPL",
    "BPL is a classic Indian consumer electronics brand with a loyal following for their refrigerators and washing machines. Hosatti Refrigeration Service repairs BPL appliances in Dharwad, keeping these time-tested machines running.",
    ["BPL Refrigerator", "BPL Washing Machine"],
    [...ALL_FRIDGE_SERVICES, ...ALL_WM_SERVICES],
    ["BPL fridge compressor failure", "BPL washing machine motor fault", "BPL fridge not cooling", "BPL washing machine timer fault"],
    [
      faq("Who repairs BPL refrigerators in Dharwad?", "Hosatti Refrigeration Service repairs BPL fridge models in Dharwad with doorstep service."),
      faq("Who fixes BPL washing machines in Dharwad?", "We repair BPL semi-automatic washing machines in Dharwad — motor, timer, pump."),
      faq("Is BPL fridge compressor replacement available in Dharwad?", "Yes, BPL fridge compressor diagnosis and replacement in Dharwad."),
      faq("Do you repair old BPL models in Dharwad?", "Yes, older BPL refrigerators and washing machines are still repairable and we stock compatible parts."),
      faq("Who does BPL fridge gas refilling in Dharwad?", "Hosatti performs BPL fridge gas refilling in Dharwad with the correct refrigerant."),
    ],
  ),

  brand("kelvinator", "Kelvinator",
    "Kelvinator is one of India's oldest and most trusted refrigerator brands with a huge installed base in Dharwad. Hosatti Refrigeration Service specializes in Kelvinator fridge repair in Dharwad, keeping these legendary appliances running for decades.",
    ["Kelvinator Refrigerator"],
    [...ALL_FRIDGE_SERVICES],
    ["Kelvinator fridge compressor failure", "Kelvinator fridge not cooling", "Kelvinator fridge thermostat fault", "Kelvinator gas leak"],
    [
      faq("Who repairs Kelvinator refrigerators in Dharwad?", "Hosatti Refrigeration Service repairs all Kelvinator fridge models in Dharwad with expert service."),
      faq("Is Kelvinator fridge compressor replacement available in Dharwad?", "Yes, we replace Kelvinator fridge compressors in Dharwad with compatible parts."),
      faq("Who does Kelvinator fridge gas refilling in Dharwad?", "We perform Kelvinator fridge gas refilling in Dharwad with the correct gas type."),
      faq("Do you repair old Kelvinator fridges in Dharwad?", "Yes, Kelvinator fridges are built to last — we repair even older models with available compatible parts."),
      faq("Is doorstep Kelvinator fridge repair available in Dharwad?", "Yes, our technicians visit your home in Dharwad for Kelvinator fridge repair."),
    ],
  ),

  brand("tcl", "TCL",
    "TCL is a rising Chinese-origin brand gaining popularity in India for affordable ACs and smart appliances. Hosatti Refrigeration Service provides TCL AC repair in Dharwad for residents who have adopted this newer brand.",
    ["TCL Split AC", "TCL Inverter AC"],
    [...ALL_AC_SERVICES],
    ["TCL AC not cooling", "TCL AC PCB fault", "TCL AC gas leak", "TCL AC compressor issue"],
    [
      faq("Who repairs TCL ACs in Dharwad?", "Hosatti Refrigeration Service repairs TCL split and inverter ACs in Dharwad. Call +91-7899472430."),
      faq("Who does TCL AC gas refilling in Dharwad?", "We perform TCL AC gas refilling and leak repair in Dharwad."),
      faq("Is TCL AC deep cleaning available in Dharwad?", "Yes, TCL AC deep cleaning available in Dharwad to restore performance."),
      faq("Who installs TCL ACs in Dharwad?", "Hosatti installs TCL ACs in Dharwad with professional setup and testing."),
      faq("Do you repair TCL AC PCBs in Dharwad?", "Yes, TCL AC control board and inverter PCB repairs available in Dharwad."),
    ],
  ),
];

export function getBrandBySlug(slug: string): BrandData | undefined {
  return BRANDS.find((b) => b.slug === slug);
}
