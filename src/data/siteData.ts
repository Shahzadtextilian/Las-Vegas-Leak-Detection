/**
 * Site content and SEO architecture data for Las Vegas Leak Detection Services.
 * Specializing in Water, Gas, Slab, Irrigation & Swimming Pool Leak Detection & Repair.
 * Target City: Las Vegas, Nevada (ZIP codes 89129, 89108, 89131, 89149, 89101, 89103, 89117, 89135, 89148 & metro Las Vegas).
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PageContent {
  slug: string;
  urlPath: string;
  type: 'home' | 'service' | 'location' | 'about' | 'contact';
  name: string;
  navTitle: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  semanticEntities: string[];
  h1: string;
  heroKicker: string;
  heroSubheadline: string;
  directAnswer: string;
  featuredImage?: string;
  imageAlt?: string;
  imageCaption?: string;
  sections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    bulletPoints?: string[];
    callout?: {
      title: string;
      body: string;
    };
  }[];
  faqs: FAQItem[];
  relatedServices?: { title: string; slug: string; description: string }[];
  relatedLocations?: { name: string; slug: string; context: string }[];
  schemaType: string;
  showMap?: boolean;
}

export const PHONE_NUMBER = "(725) 313-0108";
export const PHONE_HREF = "tel:+17253130108";
export const DOMAIN_URL = "https://www.leakdetectionnv.com";
export const BRAND_NAME = "Las Vegas Leak Detection Services";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61596668115271";
export const BUSINESS_ADDRESS = {
  streetAddress: "3320 N Pioneer Way",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89129",
  targetArea: "Las Vegas, NV",
  telephone: "+1-725-313-0108",
};

export const sitePages: Record<string, PageContent> = {
  // 1. HOMEPAGE: LAS VEGAS, NEVADA AUTHORITY HUB
  home: {
    slug: "",
    urlPath: "/",
    type: "home",
    name: "Las Vegas Leak Detection Services — Water, Gas, Slab & Pool Specialists",
    navTitle: "Home",
    metaTitle: "Las Vegas Leak Detection Services | Water, Slab & Gas (725) 313-0108",
    metaDescription: "Hidden water, slab, pool or gas leak in Las Vegas, NV? Connect 24/7 with NSCB-licensed specialists serving 89129 & metro Las Vegas. Call (725) 313-0108.",
    primaryKeyword: "leak detection Las Vegas NV",
    secondaryKeywords: [
      "water leak detection Las Vegas Nevada",
      "slab leak repair Las Vegas NV",
      "gas leak detection Las Vegas",
      "pool leak detection Las Vegas",
      "Las Vegas Leak Detection Services 89129"
    ],
    semanticEntities: [
      "Las Vegas Valley Water District (LVVWD)",
      "Nevada State Contractors Board (NSCB)",
      "Southwest Gas Las Vegas safety protocols",
      "Mohave Desert caliche soil & post-tension slabs",
      "Post-tension concrete slab acoustic diagnostics",
      "Hydrophone underwater acoustic sensors",
      "Combustible gas electronic sniffing"
    ],
    h1: "Precision Water, Gas, Slab & Pool Leak Detection in Las Vegas, NV",
    heroKicker: "Serving Las Vegas, Nevada • Northwest, Centennial Hills, Summerlin, Spring Valley & Downtown",
    heroSubheadline: "Hidden sub-slab pipe ruptures, desert hard-water copper pinholes, hazardous gas odors, and leaking yard or pool mains threaten homes across Las Vegas. Connect 24/7 with NSCB-licensed specialists dispatched from 3320 N Pioneer Way, Las Vegas, NV 89129.",
    directAnswer: "Las Vegas Leak Detection Services coordinates 24/7 non-invasive electronic water, natural gas, concrete slab, underground yard-line, and swimming pool leak detection across Las Vegas, Nevada. From Northwest Las Vegas & Lone Mountain (89129) and Centennial Hills (89131 / 89149) to Summerlin, Spring Valley, Downtown Las Vegas, and Paradise/Enterprise, our Nevada State Contractors Board (NSCB) licensed contractor network dispatches technicians with ultrasonic acoustic locators, FLIR thermal imaging, tracer gas, and digital gas sniffers to isolate leaks within inches. Call (725) 313-0108.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Emergency leak detection and plumbing diagnostic service in Las Vegas Nevada",
    imageCaption: "Non-invasive electronic acoustic, FLIR thermal, and tracer gas diagnostics dispatched across Las Vegas, NV 24/7.",
    sections: [
      {
        heading: "Four Specialized Leak Detection Capabilities in Las Vegas, NV",
        subheading: "Non-destructive diagnostics for desert slabs, backyard pools, and commercial properties",
        paragraphs: [
          "Across the Las Vegas Valley, homes sit atop rock-hard caliche soil and absorb extreme summer heat above 110°F, high municipal delivery pressure, and mineral-heavy Colorado River water. That combination wears on buried copper manifolds, PEX transitions, and PVC pool plumbing year-round.",
          "Rather than tearing open textured drywall in Spring Valley or jackhammering post-tension concrete slabs in Northwest Las Vegas or Summerlin, dispatched specialists deploy amplified acoustic ground microphones, FLIR infrared thermal cameras, combustible gas PPM sniffers, and underwater hydrophones to pinpoint the exact rupture cleanly."
        ],
        bulletPoints: [
          "Water Leak Detection: Locating concealed interior wall, ceiling, and high-pressure yard main breaks",
          "Gas Leak Detection: Rapid identification of natural gas and propane line leaks, Southwest Gas meter clearances, and code-compliant repairs",
          "Slab Leak Detection: Non-invasive sub-foundation acoustic diagnostics isolating copper and PEX ruptures under concrete slabs",
          "Pool & Spa Leak Detection: Electronic hydrophone listening and precision dye testing for pool skimmers, returns, and underground pipes"
        ]
      },
      {
        heading: "Las Vegas Neighborhood Coverage: 89129 & Metro Las Vegas",
        subheading: "Fast 24/7 dispatch from 3320 N Pioneer Way across every Las Vegas district",
        paragraphs: [
          "Every corridor of Las Vegas presents distinct plumbing infrastructure—from 1950s–1980s copper and galvanized supply runs in Downtown Las Vegas and Paradise to modern post-tension slabs and backyard pools across Northwest Las Vegas (89129), Centennial Hills, Summerlin South, Spring Valley, and Rhodes Ranch.",
          "Call (725) 313-0108 any hour of the day or night to connect directly with licensed local technicians equipped for your exact Las Vegas neighborhood and soil profile."
        ],
        bulletPoints: [
          "Northwest Las Vegas & Lone Mountain (89129 / 89108): 3320 N Pioneer Way dispatch hub, post-tension slabs & 80+ PSI PRV zones",
          "Centennial Hills & Skye Canyon (89131 / 89149): Foothill booster zones, custom backyard pools & drip irrigation mains",
          "Summerlin, The Lakes & Peccole Ranch (89117 / 89135 / 89144): Caliche rock strata, waterfront estates & pool hydraulics",
          "Spring Valley & Spanish Trail (89103 / 89113 / 89147): 1980s–2000s sub-slab copper manifolds & estate plumbing",
          "Downtown Las Vegas, Paradise & Enterprise (89101 / 89119 / 89139): Historic mains, commercial lines & growing southwest slabs"
        ]
      },
      {
        heading: "Why Las Vegas Homes Develop Hidden Plumbing & Slab Leaks",
        subheading: "Desert caliche friction, mineral scaling, and high LVVWD water pressure",
        paragraphs: [
          "Las Vegas Valley water carries high dissolved calcium and magnesium, which gradually deposits scale inside copper hot-water lines and water heaters while accelerating pinhole corrosion at soldered elbows.",
          "Beneath desert concrete slabs, expansive clay pockets and rock-hard caliche layers force buried piping to flex under 80+ PSI municipal pressure—causing silent leaks that evaporate quickly in dry desert air until your LVVWD water bill jumps or warm spots appear on tile floors."
        ],
        callout: {
          title: "Las Vegas Emergency Gas Leak Protocol",
          body: "If you smell rotten eggs (mercaptan) or hear hissing near a gas meter, furnace, water heater, or outdoor BBQ line in Las Vegas, evacuate all occupants immediately on foot. Do not flip light switches or use phones indoors. From outside, call 911 or Southwest Gas at (877) 860-6020, then call (725) 313-0108 for certified pressure testing and repair."
        }
      },
      {
        heading: "Advanced Non-Invasive Diagnostic Technology & Equipment",
        subheading: "Pinpoint accuracy that protects your tile, post-tension slab, and yard",
        paragraphs: [
          "Every dispatched team serving Las Vegas uses calibrated, non-invasive electronic diagnostic instruments to verify exact leak coordinates before opening a wall, desert rock yard, or patch of concrete.",
          "Combining ultrasonic ground listening discs, high-resolution FLIR thermal cameras, inert tracer gas sniffing, and submersible hydrophones limits repair footprints and slashes restoration expense."
        ],
        bulletPoints: [
          "Ultrasonic acoustic sensors to hear pressurized water escaping beneath concrete slabs and desert pavers",
          "FLIR thermal infrared cameras revealing concealed moisture trails and hot-water slab lines",
          "Digital PPM combustible gas wands for natural gas lines, heaters, and outdoor kitchens",
          "Underwater hydrophone listening and precision dye testing for residential and HOA pools"
        ]
      },
      {
        heading: "LVVWD 50% Leak Credit Reports & Insurance Support",
        subheading: "Itemized documentation for Las Vegas Valley Water District & homeowners insurers",
        paragraphs: [
          "A concealed yard main break, sub-slab pinhole, or continuous pool autofill leak can rapidly trigger Tier-3 and Tier-4 overage penalties on your monthly bill from the Las Vegas Valley Water District (LVVWD).",
          "Once diagnostics and repairs are finished, dispatched contractors supply detailed written inspection findings, static pressure verification results, and itemized repair invoices designed for LVVWD 50% leak credit reviews and homeowners insurance claims."
        ]
      },
      {
        heading: "Licensed Contractors Under Strict Nevada NSCB C-1 Standards",
        subheading: "Upfront itemized estimates and verified code compliance in Las Vegas",
        paragraphs: [
          "Plumbing, gas piping, and pressurized water line repairs in Las Vegas are regulated by the Nevada State Contractors Board (NSCB) and Clark County / City of Las Vegas building codes. Hiring unlicensed handymen risks failed pressure inspections, denied Southwest Gas unlocks, and rejected LVVWD adjustment requests.",
          "Our dispatch desk connects Las Vegas property owners strictly with independent contractors maintaining active NSCB licensing, general liability insurance, and calibrated non-destructive leak locating instrumentation."
        ],
        bulletPoints: [
          "Clear written diagnostic and repair estimates prior to invasive work",
          "Static pressure decay testing confirming complete repair integrity",
          "Direct spot repairs, trenchless yard pulls, or overhead PEX repipe options",
          "24/7/365 emergency phone triage at (725) 313-0108"
        ]
      }
    ],
    faqs: [
      {
        question: "Which neighborhoods in Las Vegas, NV do you serve?",
        answer: "Las Vegas Leak Detection Services coordinates 24/7 licensed leak detection specialists across every Las Vegas district—including Northwest Las Vegas & Lone Mountain (89129 / 89108), Centennial Hills & Skye Canyon (89131 / 89149), Summerlin South & The Lakes (89117 / 89135 / 89144), Spring Valley & Spanish Trail (89103 / 89113 / 89147), Rhodes Ranch (89148), Downtown Las Vegas (89101), and Paradise / Enterprise (89119 / 89123 / 89139). Call (725) 313-0108."
      },
      {
        question: "Who should I call for verified leak detection in Las Vegas, Nevada?",
        answer: "Las Vegas Leak Detection Services connects Las Vegas homeowners and commercial property owners with independent specialists adhering to Nevada State Contractors Board (NSCB) C-1 plumbing and contractor licensing standards. Dispatched technicians use ultrasonic acoustic ground geophones, FLIR infrared thermal cameras, tracer gas sniffers, and calibrated PPM combustible gas detectors. Call (725) 313-0108."
      },
      {
        question: "Do you locate hot-water slab leaks beneath post-tension concrete slabs in Las Vegas?",
        answer: "Yes. Post-tension slabs are standard across Las Vegas and cutting blindly risks severing tension cables. Dispatched technicians use FLIR thermal imaging and ultrasonic ground sensors to mark the exact leak within inches so contractors can execute targeted spot access or an overhead PEX re-route."
      },
      {
        question: "Can you find a leak on a buried desert yard main or pool line without digging up my pavers?",
        answer: "Yes. By pressurizing underground lines with inert nitrogen-hydrogen tracer gas paired with acoustic listening and underwater hydrophones, technicians pinpoint leaks beneath desert rock, turf, and concrete pavers cleanly."
      },
      {
        question: "How much does leak detection cost in Las Vegas, NV?",
        answer: "Non-invasive electronic leak detection in Las Vegas typically ranges from $195 to $395 depending on property size and system complexity (interior wall/yard main vs. concrete slab manifold or swimming pool hydrophone testing). Dispatched contractors provide upfront written pricing before testing or repair work begins."
      },
      {
        question: "Can your repair report help with a high LVVWD Las Vegas water bill?",
        answer: "Yes. After isolating and repairing a concealed leak, your dispatched contractor supplies an itemized written invoice and pressure-test record you can submit to the Las Vegas Valley Water District (LVVWD) for leak adjustment credit review."
      },
      {
        question: "Does homeowners insurance cover slab leak detection in Las Vegas?",
        answer: "Many Nevada homeowners policies cover the tear-out access cost and resultant water damage restoration from sudden pipe bursts, while pipe replacement coverage varies by policy. Dispatched technicians supply detailed documentation for your adjuster."
      },
      {
        question: "What should I do if I smell natural gas or propane in my Las Vegas home?",
        answer: "Immediately evacuate all people and pets outdoors to fresh air. Do not operate light switches, phones, or garage doors indoors. Call 911 and Southwest Gas at (877) 860-6020 from outside, then call (725) 313-0108 for certified manometer testing and gas line repair."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Pinpoint hidden supply lines and slab splits in Las Vegas." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Electronic sniffing and code-compliant gas pipe repairs." },
      { title: "Precision Slab Leak Detection", slug: "slab-leak-detection", description: "Sub-foundation acoustic and thermal testing." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone and dye testing for pools and spas." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas & Lone Mountain (89129)", slug: "las-vegas", context: "3320 N Pioneer Way HQ corridor & 89129/89108." },
      { name: "Centennial Hills & Skye Canyon (89131)", slug: "centennial-hills", context: "North valley booster zones & modern slabs." },
      { name: "Summerlin South & The Lakes (89135)", slug: "summerlin-south", context: "Caliche foothills, slabs & custom pools." },
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "Rainbow & Flamingo corridor homes." },
      { name: "Downtown Las Vegas (89101)", slug: "downtown-las-vegas", context: "Historic Charleston homes & commercial mains." }
    ],
    schemaType: "LocalBusiness",
    showMap: true
  },

  // 2. SERVICE 1: WATER LEAK DETECTION
  "water-leak-detection": {
    slug: "water-leak-detection",
    urlPath: "/water-leak-detection/",
    type: "service",
    name: "Water Leak Detection & Repair",
    navTitle: "Water Leaks",
    metaTitle: "Water Leak Detection Las Vegas, NV | No Digging (725) 313-0108",
    metaDescription: "High LVVWD bill or wet spots in Las Vegas, NV? Acoustic & thermal imaging pinpoints wall, yard & slab leaks without tearing up floors. Call (725) 313-0108.",
    primaryKeyword: "water leak detection Las Vegas NV",
    secondaryKeywords: [
      "hidden water leak repair Las Vegas Nevada",
      "wall leak detection Las Vegas",
      "hard water pipe leak repair 89129 89103",
      "high LVVWD water bill leak detection Las Vegas"
    ],
    semanticEntities: [
      "Las Vegas Valley Water District (LVVWD)",
      "Ultrasonic acoustic pipe listening",
      "FLIR infrared thermal moisture detection",
      "Potable water supply line pressure decay",
      "Desert hard-water copper & PEX pinhole splits"
    ],
    h1: "Non-Invasive Water Leak Detection & Repair in Las Vegas, NV",
    heroKicker: "Serving Las Vegas, Nevada • Protect Walls, Tile Floors & Concrete Slabs",
    heroSubheadline: "Pressurized potable water leaks inside walls, ceilings, slabs, and buried yard lines trigger costly structural damage and LVVWD bill spikes. Connect 24/7 with licensed Las Vegas leak specialists.",
    directAnswer: "Water leak detection in Las Vegas uses ultrasonic listening devices, FLIR thermal imaging, and digital pressure-decay testing to pinpoint hidden leaks without unnecessary drywall cutting or floor demolition. Dispatched specialists locate the rupture anywhere across 89129 and metro Las Vegas and perform durable copper, PEX, or main line repairs.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Service technician performing non-invasive water leak diagnostics in Las Vegas Nevada",
    imageCaption: "Mobile leak detection units carry acoustic locators and digital line-pressurizing equipment across Las Vegas.",
    sections: [
      {
        heading: "Detecting Hidden Potable Water Leaks in Las Vegas",
        subheading: "Advanced non-destructive diagnostic methodology for desert homes and slabs",
        paragraphs: [
          "A pinhole leak measuring just 1/16th of an inch wastes over 25,000 gallons of water per month—driving up tiered municipal water bills from the Las Vegas Valley Water District (LVVWD) and saturating drywall cavities, framing, or sub-slab soils.",
          "Dispatched technicians never tear open walls blindly. By combining digital acoustic ground microphones that capture the high-frequency hiss of pressurized water with FLIR thermal imaging cameras that reveal hidden moisture trails, technicians pinpoint leaks within inches."
        ],
        bulletPoints: [
          "Pinpoint leaks behind stucco or drywall, under cabinets, and inside ceilings",
          "Pressure isolation testing separating indoor piping from exterior yard or irrigation lines",
          "Digital inspection documentation for homeowners insurance property claims",
          "Durable repairs using commercial-grade copper fittings or scale-resilient PEX piping"
        ]
      },
      {
        heading: "Common Sources of Water Leaks in Las Vegas Homes",
        subheading: "Mineral hard water scaling, caliche movement, and high municipal pressure",
        paragraphs: [
          "Established neighborhoods across Downtown Las Vegas, Paradise, and Spring Valley often contain older copper or galvanized supply lines worn thin by decades of hard desert water and elevated mineral deposits.",
          "Meanwhile, high-elevation booster zones in Northwest Las Vegas (89129), Centennial Hills, and Summerlin frequently push static municipal water pressure above 80 PSI—stressing PRVs (Pressure Reducing Valves), water heaters, and exterior hose bibs."
        ]
      },
      {
        heading: "LVVWD Water Meter Alignment & 50% Leak Credits",
        subheading: "Resolving continuous meter spin and unexpected utility bill spikes",
        paragraphs: [
          "If the low-flow indicator on your LVVWD water meter keeps spinning while every indoor faucet and appliance is turned off, water is escaping between the curb box and your home or underneath your slab.",
          "Dispatched technicians isolate whether the leak sits on your customer service main or indoors and issue an itemized repair invoice suitable for Las Vegas Valley Water District 50% leak credit review."
        ]
      },
      {
        heading: "Las Vegas Static Pressure (PRV) & Smart Meter Isolation Testing",
        subheading: "Preventing repeat pipe failures in high-PSI valley zones",
        paragraphs: [
          "Municipal elevation changes across Northwest Las Vegas, Summerlin, and Centennial Hills drive residential street pressures above 80–110 PSI. When a home's Pressure Reducing Valve (PRV) fails, excess pressure hammers water-heater relief valves, ice-maker lines, and sub-slab copper elbows.",
          "Every comprehensive water leak detection inspection includes static hose-bib pressure checks and street-meter low-flow clock tests—separating indoor supply leaks from exterior drip manifolds cleanly."
        ],
        bulletPoints: [
          "Digital static PSI verification (safe Las Vegas target: 55–65 PSI)",
          "Thermal imaging scans across tiled shower pans, kitchen islands, and ceiling joists",
          "Same-day copper spot repairs, PEX-A sections, or failing PRV replacement"
        ]
      }
    ],
    faqs: [
      {
        question: "How much does water leak detection cost in Las Vegas, NV?",
        answer: "Standard electronic water leak detection in Las Vegas depends on home size and whether the leak is inside walls/ceilings, under a concrete slab, or underground. Dispatched contractors provide upfront written pricing before beginning testing."
      },
      {
        question: "Can an acoustic locator find a leak underneath porcelain tile or hardwood flooring?",
        answer: "Yes. Amplified acoustic sensors detect sound waves traveling through concrete slabs, tile, and subfloors without damaging finished flooring surfaces."
      },
      {
        question: "How long does a typical water leak inspection take in Las Vegas?",
        answer: "Most residential water leak inspections take 1.5 to 3 hours, including pressure decay testing and exact target marking."
      },
      {
        question: "How do I tell if a high water bill is caused by a running toilet or a hidden pipe leak?",
        answer: "Run a 15-minute zero-consumption test at your front yard LVVWD water meter box after shutting off interior toilet angle stops. If the low-flow dial keeps spinning with toilets isolated, a concealed supply or yard pipe leak is active."
      }
    ],
    relatedServices: [
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Pinpoint leaks beneath concrete slabs." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Locate buried main yard and irrigation lines." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate shutoff and burst pipe containment." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "3320 N Pioneer Way HQ & Lone Mountain." },
      { name: "Centennial Hills (89131)", slug: "centennial-hills", context: "High-PSI booster & modern supply lines." },
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "Residential supply & slab diagnostics." }
    ],
    schemaType: "Service"
  },

  // 3. SERVICE 2: GAS LEAK DETECTION
  "gas-leak-detection": {
    slug: "gas-leak-detection",
    urlPath: "/gas-leak-detection/",
    type: "service",
    name: "Gas Leak Detection & Emergency Repair",
    navTitle: "Gas Leaks",
    metaTitle: "Gas Leak Detection Las Vegas, NV | 24/7 Emergency (725) 313-0108",
    metaDescription: "Smell gas in Las Vegas, NV? Leave home and call 911 or Southwest Gas first. Call (725) 313-0108 for licensed gas leak testing in 89129 & Las Vegas.",
    primaryKeyword: "gas leak detection Las Vegas NV",
    secondaryKeywords: [
      "gas leak repair Las Vegas Nevada",
      "Southwest Gas meter lock test Las Vegas",
      "natural gas plumber 89129 89101",
      "outdoor BBQ & pool heater gas leak Las Vegas"
    ],
    semanticEntities: [
      "Southwest Gas meter lock clearances",
      "Mercaptan odorant detection",
      "Combustible gas electronic sniffing wand",
      "Black iron & CSST gas pipe threading",
      "Manometer gas pressure decay testing"
    ],
    h1: "24/7 Emergency Gas Leak Detection & Repair in Las Vegas, NV",
    heroKicker: "Hazardous Gas Containment • 24/7 Las Vegas Dispatch",
    heroSubheadline: "Natural gas and propane leaks pose severe fire and explosion hazards at furnaces, water heaters, outdoor kitchens, and pool heaters. Connect 24/7 with NSCB-licensed gas piping specialists serving Las Vegas, Nevada.",
    directAnswer: "Gas leak detection in Las Vegas uses parts-per-million (PPM) electronic combustible gas sniffers, ultrasonic sensors, and calibrated digital manometers to locate natural gas or propane leaks along supply lines, meters, pool heaters, and kitchen appliances. Dispatched technicians isolate the leak, execute code-compliant repairs, and certify pressure tests for Southwest Gas unlock.",
    featuredImage: "/images/gas_leak_detection_1791567732913.webp",
    imageAlt: "Plumbing technician using electronic gas leak detector on natural gas supply line",
    imageCaption: "Digital combustible gas sniffing wands locate leaks along gas valves, fittings, and appliance connections in Las Vegas.",
    sections: [
      {
        heading: "Urgent Warning Signs of a Gas Leak in Las Vegas",
        subheading: "Recognizing physical, acoustic, and environmental danger indicators",
        paragraphs: [
          "Southwest Gas and propane suppliers inject mercaptan—a sulfur-like rotten-egg odorant—into fuel gas so leaks are detectable by smell. Slow leaks inside attic chases, exterior meter risers, or buried patio lines to pool heaters and BBQ islands can linger undetected until gas accumulates.",
          "If you smell gas, hear hissing near a furnace or water heater, or notice dead landscaping along a buried gas trench in Las Vegas, evacuate outside immediately, alert 911 or Southwest Gas at (877) 860-6020, and call (725) 313-0108 for certified repair."
        ],
        bulletPoints: [
          "Rotten-egg or sulfur odor near kitchens, garages, attics, or exterior meters",
          "Hissing, roaring, or whistling sound near gas water heaters, pool heaters, or supply valves",
          "Physical symptoms among occupants: dizziness, headaches, nausea, or eye irritation",
          "Dead shrubs or bubbling water near buried outdoor BBQ or fire-feature gas lines"
        ]
      },
      {
        heading: "Southwest Gas Meter Shutoff & Pressure Re-Certification",
        subheading: "Restoring hot water and appliances quickly when your meter is locked",
        paragraphs: [
          "When Southwest Gas responds to an odor complaint in Las Vegas, technicians lock and red-tag the gas meter until a licensed contractor locates the leak, completes code-compliant repairs, and passes a pressure inspection.",
          "Dispatched NSCB C-1 contractors arrive with calibrated manometers to pressure-test the gas distribution tree, replace leaking black iron, galvanized, or CSST lines, coordinate City of Las Vegas or Clark County permits, and clear the path for utility unlock."
        ]
      },
      {
        heading: "Indoor Appliances, Pool Heaters & Outdoor Kitchen Piping",
        subheading: "Serving Las Vegas residential heating, restaurants, and backyard fire features",
        paragraphs: [
          "Whether servicing commercial kitchens in Downtown Las Vegas and Paradise or buried backyard gas lines for pool heaters, fire bowls, and built-in grills in Northwest Las Vegas (89129), Centennial Hills, and Summerlin, dispatched technicians pressure-verify every run to strict Nevada code standards."
        ]
      },
      {
        heading: "Digital Manometer Pressure-Decay Testing & CSST Bonding",
        subheading: "Isolating residential distribution trees for Clark County & City green-tag clearance",
        paragraphs: [
          "Tracing elusive gas leaks requires isolating the meter outlet riser, garage water-heater drop, attic furnace leg, and patio risers section by section using calibrated manometers and electronic PPM sniffers.",
          "Technicians also inspect Corrugated Stainless Steel Tubing (CSST) electrical bonding clamps, sediment drip legs, and exterior black-iron corrosion so your entire system passes City of Las Vegas or Clark County green-tag inspection on the first check."
        ],
        bulletPoints: [
          "Electronic combustible gas sniffing calibrated down to 5–10 parts per million (PPM)",
          "Full-system air-pressure test gauge setup for Southwest Gas red-tag meter unlocks",
          "Replacement of corroded underground coated-steel pool heater and BBQ island risers"
        ]
      }
    ],
    faqs: [
      {
        question: "Can I use soapy water to check for a gas leak myself?",
        answer: "While soap solution can bubble on an accessible exposed union, hidden leaks inside walls, attic chases, or underground trenches require calibrated PPM combustible gas sniffers and manometer pressure-drop testing."
      },
      {
        question: "How long does gas line repair take after Southwest Gas locks my Las Vegas meter?",
        answer: "Most residential gas leak isolations, pipe repairs, and manometer pressure tests are completed the same day so Southwest Gas can unlock service promptly."
      },
      {
        question: "Are technicians licensed to work on gas lines in Las Vegas?",
        answer: "Yes. All gas piping diagnostics and repairs are routed to independent contractors holding active Nevada State Contractors Board (NSCB) C-1 plumbing/heating credentials."
      },
      {
        question: "Do I need a municipal permit to clear a Southwest Gas red-tag in Las Vegas?",
        answer: "System-wide gas line repairs and pressure tests generally require a City of Las Vegas or Clark County green-tag inspection before Southwest Gas unlocks the meter; your licensed contractor coordinates testing and gauge setup."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Potable supply and slab water leak services." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Buried yard & main line testing." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate dispatch for hazardous leaks." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "Southwest Gas meter & backyard gas line testing." },
      { name: "Downtown Las Vegas (89101)", slug: "downtown-las-vegas", context: "Residential & commercial gas line testing." },
      { name: "Paradise & Enterprise (89123)", slug: "paradise-enterprise", context: "Pool heater & patio fire-feature gas lines." }
    ],
    schemaType: "Service"
  },

  // 4. SERVICE 3: SLAB LEAK DETECTION
  "slab-leak-detection": {
    slug: "slab-leak-detection",
    urlPath: "/slab-leak-detection/",
    type: "service",
    name: "Precision Slab Leak Detection & Repair",
    navTitle: "Slab Leaks",
    metaTitle: "Slab Leak Detection Las Vegas, NV | No Digging (725) 313-0108",
    metaDescription: "Warm floor spot or high LVVWD bill in Las Vegas, NV? Non-invasive acoustic & thermal slab leak detection in 89129 & metro Las Vegas. Call (725) 313-0108.",
    primaryKeyword: "slab leak detection Las Vegas NV",
    secondaryKeywords: [
      "slab leak repair Las Vegas Nevada",
      "foundation water leak 89129 Las Vegas",
      "sub slab plumbing repair Centennial Hills Summerlin",
      "hot water slab leak Las Vegas"
    ],
    semanticEntities: [
      "Post-tension concrete slab foundation",
      "Mohave Desert caliche & expansive clay movement",
      "Electromagnetic pipe and cable locator",
      "Acoustic ground sensor listening disc",
      "Overhead PEX re-route bypass"
    ],
    h1: "Non-Invasive Slab Leak Detection & Repair in Las Vegas, NV",
    heroKicker: "Protect Your Concrete Foundation • Pinpoint Acoustic Sensors",
    heroSubheadline: "Sub-slab copper and PEX pipe ruptures beneath Las Vegas post-tension concrete foundations damage tile floors and destabilize soil. Connect with technicians who locate leaks within inches.",
    directAnswer: "A slab leak in Las Vegas occurs when pressurized water lines beneath a home's concrete foundation rupture due to caliche soil shifting, thermal expansion, mineral scaling, or pipe abrasion. Dispatched specialists use acoustic ground listening discs, pipe locators, and FLIR thermal imaging to pinpoint the break before executing spot repairs or overhead PEX re-routes.",
    featuredImage: "/images/slab_leak_inspection_1791566136409.webp",
    imageAlt: "Technician operating acoustic slab leak detector on residential flooring in Las Vegas",
    imageCaption: "Non-invasive electronic acoustic sensors detect pressurized water leaks beneath concrete slabs in Las Vegas.",
    sections: [
      {
        heading: "Why Slab Leaks Occur in Las Vegas Homes",
        subheading: "Caliche hardpan soil, hard water scaling, and high water pressure",
        paragraphs: [
          "Neighborhoods across Northwest Las Vegas (89129), Centennial Hills, Spring Valley, Summerlin, and Paradise are overwhelmingly built on slab-on-grade and post-tension concrete foundations with hot and cold supply piping routed underneath.",
          "As compacted desert caliche and clay shift during monsoon downpours and high static water pressure pulses through copper loops, buried pipes rub against aggregate rock or corrode internally from Las Vegas hard water until pinholes open."
        ],
        bulletPoints: [
          "Hard-water mineral deposits accelerating internal copper pinhole corrosion",
          "Elevated 80+ PSI municipal water pressure stressing soldered joints and manifolds",
          "Abrasive caliche rock contact beneath post-tension concrete pours",
          "Hot-water recirculating loops causing continuous thermal expansion friction"
        ]
      },
      {
        heading: "Warning Signs of a Foundation Slab Leak",
        subheading: "Identify sub-slab water loss before structural cracking occurs",
        paragraphs: [
          "Because water spreads horizontally beneath concrete before wicking upward, subtle clues emerge first: localized warm spots on tile or LVP, continuous running water sounds at night, or sudden spikes on your LVVWD water bill.",
          "Call (725) 313-0108 for non-invasive acoustic isolation before breaking concrete or tearing up flooring."
        ],
        bulletPoints: [
          "Isolated warm or hot patches underfoot on porcelain tile, stone, or laminate",
          "Sound of hissing or rushing water when every faucet and appliance is shut off",
          "Water heater running nonstop or noticeable drop in hot water pressure",
          "Cracking grout, buckled hardwood planks, or musty odors along baseboards",
          "Unexplained Tier-3 jump on your Las Vegas Valley Water District (LVVWD) bill"
        ]
      },
      {
        heading: "Repair Solutions: Direct Spot Repair vs. Overhead PEX Bypass",
        subheading: "Choosing the right long-term fix for your Las Vegas property",
        paragraphs: [
          "Once acoustic sensors isolate the break within inches, contractors review clear options with you. A Direct Spot Repair opens a small localized patch above the pipe segment to braze or replace the damaged section.",
          "If your home has aging copper prone to repeat pinholes beneath a post-tension slab, an Overhead PEX Re-Route abandons the under-slab line and runs durable PEX through conditioned attic or interior wall chases—avoiding tension cables entirely."
        ]
      },
      {
        heading: "Post-Tension Tendon Safety & Copper Type-L vs. PEX-A Diagnostics",
        subheading: "Protecting structural tension cables across Las Vegas single-family slabs",
        paragraphs: [
          "Modern and 1990s-era Las Vegas subdivisions sit atop post-tensioned concrete slabs laced with steel cables carrying 30,000+ pounds of force. Guessing with a jackhammer risks snapping a structural cable or ruining continuous porcelain tile.",
          "By combining electromagnetic pipe line-tracing, FLIR thermal imaging of hot-water loops, and acoustic listening discs, specialists pinpoint whether the leak sits on a manifold, hot supply, or cold drop before recommending a surgical spot repair or permanent overhead PEX-A reroute."
        ],
        bulletPoints: [
          "Zero exploratory concrete breaking across post-tension garage or living-room slabs",
          "Line-isolation pressure drops separating hot-water recirculating loops from cold mains",
          "Written NSCB-licensed invoice details accepted for LVVWD 50% leak credit claims"
        ]
      }
    ],
    faqs: [
      {
        question: "Does homeowners insurance cover slab leak repair in Las Vegas?",
        answer: "Most Nevada homeowners policies cover access tear-out and restoration of flooring and concrete required to reach the leak, plus resultant water damage, while actual pipe repair varies by policy. Dispatched technicians provide detailed diagnostic reports for adjusters."
      },
      {
        question: "How accurate is electronic acoustic slab leak detection?",
        answer: "Using amplified ground geophones and FLIR infrared cameras, specialists isolate sub-slab leaks within a tight 6-to-12-inch target radius—avoiding destructive guesswork trenching."
      },
      {
        question: "Is an overhead PEX re-route safer than breaking a post-tension slab?",
        answer: "Yes. Most Las Vegas slabs contain high-tension steel cables. An overhead insulated PEX re-route avoids cutting near tension cables and preserves finished tile or marble flooring."
      },
      {
        question: "Can a slab leak qualify for an LVVWD 50% high water bill credit?",
        answer: "Yes. Once an NSCB-licensed plumber isolates and repairs or caps off the leaking under-slab line and verifies zero meter spin, the itemized repair report supports your LVVWD leak credit filing."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Detect hidden indoor and wall leaks." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate water shutoff and emergency response." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Yard and irrigation main leak detection." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "Post-tension concrete slab neighborhoods." },
      { name: "Centennial Hills (89131)", slug: "centennial-hills", context: "North valley residential slab diagnostics." },
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "1980s–2000s sub-slab copper manifolds." }
    ],
    schemaType: "Service"
  },

  // 5. SERVICE 4: POOL LEAK DETECTION
  "pool-leak-detection": {
    slug: "pool-leak-detection",
    urlPath: "/pool-leak-detection/",
    type: "service",
    name: "Swimming Pool Leak Detection & Repair",
    navTitle: "Pool Leaks",
    metaTitle: "Pool Leak Detection Las Vegas, NV | Dye & Hydrophone (725) 313-0108",
    metaDescription: "Losing pool or spa water in Las Vegas, NV? Call (725) 313-0108 for hydrophone acoustic sensors, pressure testing & dye testing without draining your pool.",
    primaryKeyword: "pool leak detection Las Vegas NV",
    secondaryKeywords: [
      "swimming pool leak repair Las Vegas",
      "spa leak detection 89129 Centennial Hills",
      "pool skimmer leak repair Las Vegas NV",
      "underground pool pipe leak Summerlin Spring Valley"
    ],
    semanticEntities: [
      "Hydrophone underwater acoustic sensor",
      "Fluorescent dye syringe testing",
      "Skimmer throat and faceplate sealing",
      "Underground return and suction line pressure test",
      "Evaporation bucket test"
    ],
    h1: "Swimming Pool & Spa Leak Detection in Las Vegas, NV",
    heroKicker: "Stop Vanishing Pool Water • Hydrophone Acoustic Diagnostics",
    heroSubheadline: "Dry Mohave Desert heat in Las Vegas masks leaking pool skimmers, underground PVC returns, and spa plumbing. Dispatched specialists pinpoint structural and underground leaks without draining your pool.",
    directAnswer: "Swimming pool leak detection in Las Vegas combines underwater hydrophone acoustic listening, precision dye testing at skimmers and light niches, and pneumatic line-pressure testing on returns, suction lines, and main drains. Dispatched technicians isolate leaks cleanly across Northwest Las Vegas (89129), Centennial Hills, Summerlin, Spring Valley, and Paradise with your pool full.",
    featuredImage: "/images/pool_leak_detection_1791567711591.webp",
    imageAlt: "Pool leak detection specialist using dye syringe and underwater acoustic hydrophone",
    imageCaption: "Underwater hydrophone microphones and precision dye testing locate leaks in pool shells, lights, and underground pipes.",
    sections: [
      {
        heading: "Is Your Las Vegas Pool Leaking or Just Evaporating?",
        subheading: "Separating triple-digit desert evaporation from active plumbing leaks",
        paragraphs: [
          "Triple-digit desert summers and arid winds across Las Vegas naturally evaporate 1/4 to 1/2 inch of pool water per day. However, water loss exceeding 1/2 inch daily, a nonstop autofill line, or rising LVVWD water bills points directly to an active leak.",
          "Caliche soil shifting and thermal deck expansion also crack PVC fittings near pool equipment pads, skimmer throats, and shallow return lines right below travertine or concrete coping."
        ],
        bulletPoints: [
          "Automatic pool leveler running continuously day and night",
          "Pool water dropping noticeably faster than a 24-hour bucket test control",
          "Air bubbles blowing from return jets when the pump runs (suction leak)",
          "Shifting deck pavers, damp desert gravel, or wet ground near the equipment pad"
        ]
      },
      {
        heading: "Non-Invasive Testing With Your Pool Completely Full",
        subheading: "Hydrophones, dye syringes, and isolated line pressure checks",
        paragraphs: [
          "Draining a swimming pool in Las Vegas desert sun rapidly dries out and cracks expensive plaster or pebble finishes. Dispatched specialists perform all leak testing with your pool completely full.",
          "Technicians inspect light conduits, main drains, and skimmer throats with inert dye syringes while isolating underground suction and return lines with pneumatic gauges."
        ]
      },
      {
        heading: "Isolating Suction, Return, Autofill & Spa Spillway Leaks",
        subheading: "Pinpointing buried pool plumbing beneath travertine, cool-deck, and pavers",
        paragraphs: [
          "Pool leaks behave differently depending on whether your filtration pump is running or off. Higher water loss with the pump running points to pressurized return jets, water features, or heater bypass manifolds; water loss with the pump shut off points to suction lines, skimmer seals, light conduits, or structural plaster cracks.",
          "Dispatched specialists test each underground PVC loop individually with rubber test plugs, air-water acoustic injection, and submersible hydrophones so any deck repair stays limited to one small marked paver."
        ],
        bulletPoints: [
          "Isolated pressure testing on skimmer suction, main drain, sweep, and return lines",
          "Autofill float valve, Jandy actuator, and multiport backwash seal inspections",
          "Non-staining underwater dye checks around tile lines, hydro-therapy jets, and light niches"
        ]
      }
    ],
    faqs: [
      {
        question: "How do I perform a bucket test to verify a pool leak in Las Vegas?",
        answer: "Fill a 5-gallon bucket with pool water, set it on a top pool step, and mark water lines inside and outside the bucket. Check after 24 hours—if the pool dropped noticeably more than the water inside the bucket, a leak is present."
      },
      {
        question: "Do you have to drain my pool to find the leak?",
        answer: "No. Submersible hydrophone listening, dye testing, and line pressure testing all operate with the pool full—protecting your plaster from desert heat."
      },
      {
        question: "Can caliche shifting crack underground pool plumbing in Las Vegas?",
        answer: "Yes. Caliche expansion and deck settling frequently stress skimmer throats and PVC glue joints beneath pavers, triggering quiet water loss."
      },
      {
        question: "Why does my pool lose water only when the spa spillover or pump turns on?",
        answer: "Water loss occurring strictly while circulation runs typically indicates a pressurized return line fracture, a leaking waterfall/sheer-descent manifold, or a worn backwash valve allowing water to escape down the waste line."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Domestic supply and autofill water lines." },
      { title: "Gas Leak Detection & Repair", slug: "gas-leak-detection", description: "Pool heater natural gas & propane line testing." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Buried yard and main line leak testing." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "Backyard residential & HOA pool diagnostics." },
      { name: "The Lakes & Peccole Ranch (89117)", slug: "the-lakes", context: "Pool hydraulics & skimmer checks." },
      { name: "Summerlin South (89135)", slug: "summerlin-south", context: "Custom pool & caliche deck diagnostics." }
    ],
    schemaType: "Service"
  },

  // 6. SERVICE 5: UNDERGROUND PIPE LEAK DETECTION
  "underground-leak-detection": {
    slug: "underground-leak-detection",
    urlPath: "/underground-leak-detection/",
    type: "service",
    name: "Underground Pipe, Yard & Irrigation Leak Detection",
    navTitle: "Underground Leaks",
    metaTitle: "Underground & Yard Leak Detection Las Vegas, NV | (725) 313-0108",
    metaDescription: "Buried main water line, street meter pipe or irrigation leak in Las Vegas, NV? Call (725) 313-0108 for tracer gas & acoustic underground leak locating.",
    primaryKeyword: "underground leak detection Las Vegas NV",
    secondaryKeywords: [
      "main water service line leak Las Vegas",
      "yard irrigation leak repair 89129 Las Vegas",
      "buried pipe leak locator Las Vegas NV",
      "curb meter to house water leak Las Vegas"
    ],
    semanticEntities: [
      "Electromagnetic pipe and cable locator",
      "Tracer gas hydrogen-nitrogen sniffing",
      "LVVWD curb meter to house service main",
      "Underground desert drip irrigation repair",
      "Caliche hardpan trenchless pipe pulling"
    ],
    h1: "Underground Main, Yard & Irrigation Leak Detection in Las Vegas, NV",
    heroKicker: "Locate Buried Pipe Leaks • Zero Unnecessary Yard Trenching",
    heroSubheadline: "Leaks in street-to-home water mains and buried desert drip irrigation lines waste thousands of gallons beneath rock landscaping and driveways before surfacing. Connect with underground line locators in Las Vegas.",
    directAnswer: "Underground leak detection in Las Vegas uses electromagnetic pipe locators, acoustic ground microphones, and non-toxic tracer gas to pinpoint breaks in buried water service mains and drip irrigation manifolds without trenching your driveway or desert landscaping.",
    featuredImage: "/images/diagnostic_tech_1791662650738.webp",
    imageAlt: "Technician tracing buried water lines in Las Vegas Nevada neighborhood",
    imageCaption: "Electromagnetic line locators and tracer gas sniffers identify buried water main and irrigation leaks in Las Vegas.",
    sections: [
      {
        heading: "Street Meter Mains vs. Desert Drip Irrigation Leaks",
        subheading: "Pinpointing buried failures across urban parcels and estate Las Vegas lots",
        paragraphs: [
          "Properties across Las Vegas rely on buried copper, PVC, or poly supply lines running from an LVVWD street meter box to the home's main shutoff valve—plus intricate underground PVC/poly drip manifolds feeding desert palms and xeriscape plantings.",
          "When hot desert soil and porous alluvial gravel swallow escaping water without visible puddles, pressurized tracer gas rises straight to the surface above the break so technicians can mark the exact excavation point."
        ],
        bulletPoints: [
          "Main service line testing from LVVWD curb meter box to home foundation",
          "Continuous low-flow meter spin isolation and pressure decay verification",
          "Backflow preventer and desert drip irrigation manifold leak pinpointing",
          "Trenchless pipe pulling to replace failed lines without destroying driveways"
        ]
      },
      {
        heading: "Preventing Driveway Washouts & Caliche Foundation Settling",
        subheading: "Stopping subterranean soil erosion before concrete flatwork buckles",
        paragraphs: [
          "Pressurized water eroding desert silt beneath driveways, sidewalks, and courtyard pavers creates hidden voids that cause concrete settlement and cracking. Early acoustic pinpointing saves landscaping and decorative stone."
        ]
      },
      {
        heading: "Tracer Gas Physics & Curb-to-House Service Main Diagnostics",
        subheading: "Finding silent Schedule-40 PVC and copper breaks deep below desert rock",
        paragraphs: [
          "Plastic PVC and polyethylene irrigation mains often transmit minimal acoustic noise compared to rigid metal pipe. Dispatched specialists inject a safe, non-toxic 95% nitrogen / 5% hydrogen tracer gas blend into the isolated yard line.",
          "Because hydrogen molecules are lighter than air, tracer gas escapes the buried pipe breach and rises straight through caliche gravel, synthetic turf, and interlocking pavers to surface sensors—allowing surgical repairs or trenchless HDPE pipe pulling."
        ],
        bulletPoints: [
          "Differentiates customer main yard breaks from pressurized drip irrigation zones",
          "Backflow PVB assembly, anti-siphon valve, and smart-controller solenoid testing",
          "LVVWD compliance documentation verifying permanent repair and zero curb-meter spin"
        ]
      }
    ],
    faqs: [
      {
        question: "How do you locate a buried plastic PVC or poly irrigation pipe?",
        answer: "Technicians insert a traceable fiberglass sonde line or pressurize the pipe with safe hydrogen-nitrogen tracer gas, then scan the ground surface with calibrated electronic sniffers to mark the exact break."
      },
      {
        question: "Can a broken underground main be repaired without digging up my entire driveway?",
        answer: "Yes. Pinpointing the break restricts digging to a single targeted access pit, or contractors can use trenchless pipe pulling for aging lines."
      },
      {
        question: "How do I verify if my underground leak is between the LVVWD street meter and my house?",
        answer: "Turn off your home's main water shutoff valve (usually in the garage or near the front hose bib) and watch the low-flow indicator at the curb meter box. If the meter dial continues moving, the break is underground in your yard service line."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor and wall water line diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Leaks underneath foundation slabs." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Rapid shutoff and burst main containment." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "Yard mains & desert irrigation piping." },
      { name: "Centennial Hills (89131)", slug: "centennial-hills", context: "Larger lot mains & buried drip zones." },
      { name: "Downtown Las Vegas (89101)", slug: "downtown-las-vegas", context: "Historic curb-to-home water mains." }
    ],
    schemaType: "Service"
  },

  // 7. SERVICE 6: EMERGENCY LEAK REPAIR
  "emergency-leak-repair": {
    slug: "emergency-leak-repair",
    urlPath: "/emergency-leak-repair/",
    type: "service",
    name: "24/7 Emergency Leak Repair Dispatch",
    navTitle: "Emergency Repair",
    metaTitle: "24/7 Emergency Leak Repair Las Vegas, NV | Rapid Dispatch (725) 313-0108",
    metaDescription: "Active water flood, burst slab pipe or gas emergency in Las Vegas, NV? Call (725) 313-0108 24/7 for rapid dispatch across 89129 & metro Las Vegas.",
    primaryKeyword: "emergency leak repair Las Vegas NV",
    secondaryKeywords: [
      "24/7 leak detection Las Vegas",
      "emergency plumber Las Vegas Nevada",
      "burst pipe repair Las Vegas",
      "emergency gas leak shutoff 89129"
    ],
    semanticEntities: [
      "Immediate main meter emergency shutoff",
      "Nevada State Contractors Board (NSCB) licensed response",
      "24/7 on-call mobile technician vans",
      "Pressurized pipe clamp and PEX containment"
    ],
    h1: "24/7 Emergency Leak Repair & Rapid Dispatch in Las Vegas, NV",
    heroKicker: "Active Leaks • 24/7 Las Vegas Response • Licensed Specialists",
    heroSubheadline: "Sudden slab ruptures, failed water heaters, high-pressure burst mains, and hazardous gas odors demand instant containment. Call our 24/7 dispatch line to connect immediately with on-call contractors serving Las Vegas.",
    directAnswer: "Emergency leak repair in Las Vegas delivers rapid containment and permanent restoration for active water floods, burst lines, and gas line ruptures across 89129 and the Las Vegas Valley. Calling (725) 313-0108 routes your emergency directly to on-call NSCB-licensed technicians equipped with electronic locators and repair hardware.",
    featuredImage: "/images/drain_hydro_jetting_1791566153107.webp",
    imageAlt: "Emergency leak repair mobile dispatch unit serving Las Vegas Nevada",
    imageCaption: "Mobile service units carry pipe clamps, PEX fittings, and emergency shutoff valves for fast on-site containment in Las Vegas.",
    sections: [
      {
        heading: "What to Do in a Water or Gas Emergency in Las Vegas",
        subheading: "Immediate steps to protect life and property while awaiting dispatch",
        paragraphs: [
          "The first minutes of a ruptured supply line or water heater failure determine whether you face minor cleanup or major structural dry-out. Close your home's main water shutoff valve (garage, front exterior wall, or curb meter key).",
          "For natural gas or propane odors, never try to locate the leak yourself. Evacuate everyone outside immediately and call from a safe distance."
        ],
        bulletPoints: [
          "Turn the main water shutoff valve clockwise to stop pressurized indoor flooding",
          "Switch off electrical breakers to flooded areas only if safe to access the panel",
          "For gas odors: evacuate outdoors immediately, touch no switches, and call 911 / Southwest Gas / (725) 313-0108",
          "Keep your phone line open for the dispatched technician's arrival update"
        ]
      },
      {
        heading: "Curb Meter Shutoff & Preventing Sub-Slab Heave or Mold",
        subheading: "Controlling secondary structural damage in desert climates",
        paragraphs: [
          "Even in arid Las Vegas heat, trapped water beneath vinyl plank flooring, cabinets, or drywall paper creates rapid microbial growth within 24 to 48 hours and can soften clay pockets beneath foundation footings.",
          "On-call NSCB-licensed contractors carry heavy curb-meter keys, full-port quarter-turn ball valves, copper/PEX press fittings, and emergency isolation manifolds to stop active leaks immediately—day, night, weekends, or holidays."
        ]
      }
    ],
    faqs: [
      {
        question: "Are technicians available 24/7 in Las Vegas for late-night water or gas emergencies?",
        answer: "Yes. Our dispatch line at (725) 313-0108 and on-call contractor network operate 24 hours a day, 7 days a week, 365 days a year—including overnight emergencies, weekends, and holidays."
      },
      {
        question: "Which Las Vegas areas do you cover for emergency service?",
        answer: "We coordinate 24/7 coverage across Las Vegas including Northwest (89129 / 89108), Centennial Hills (89131 / 89149), Summerlin, Spring Valley, Downtown Las Vegas, Paradise, and Enterprise."
      },
      {
        question: "What if my indoor main shutoff gate valve is stuck or corroded?",
        answer: "Do not force an older frozen gate valve stem, which can snap under pressure. On-call technicians arrive with curb-box meter keys to shut water off cleanly at the street and upgrade failing shutoffs to reliable quarter-turn ball valves."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Pinpoint hidden potable water leaks." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Immediate gas leak containment and testing." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Foundation leak diagnostics." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "24/7 HQ corridor emergency dispatch." },
      { name: "Centennial Hills (89131)", slug: "centennial-hills", context: "North valley emergency response." },
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "24/7 west-central emergency service." }
    ],
    schemaType: "EmergencyService"
  },

  // 8. LOCATION 1: SPRING VALLEY CENTER
  "spring-valley-center": {
    slug: "spring-valley-center",
    urlPath: "/spring-valley-center/",
    type: "location",
    name: "Spring Valley Core & Central Corridor",
    navTitle: "Spring Valley Core",
    metaTitle: "Leak Detection Spring Valley NV | Rainbow & Flamingo Corridor (725) 313-0108",
    metaDescription: "Leak detection in central Spring Valley, NV 89103, 89147. Water, gas, slab & pool leak repair near Rainbow Blvd & Flamingo Rd. Call (725) 313-0108.",
    primaryKeyword: "leak detection Spring Valley NV 89103",
    secondaryKeywords: [
      "plumber Spring Valley NV",
      "water leak repair Rainbow Blvd",
      "slab leak detection 89147",
      "pool leak repair Flamingo Rd Las Vegas"
    ],
    semanticEntities: [
      "Rainbow Boulevard commercial corridor",
      "Flamingo Road residential subdivisions",
      "Clark County building code requirements",
      "Spring Valley caliche soil foundation profiles"
    ],
    h1: "Leak Detection & Repair in Central Spring Valley, NV",
    heroKicker: "Serving 89103, 89147, Rainbow Blvd & Flamingo Rd",
    heroSubheadline: "From established residential subdivisions to busy commercial corridors along Rainbow and Sahara, dispatched technicians provide non-invasive water, gas, slab, and swimming pool leak diagnostics across central Spring Valley.",
    directAnswer: "If you need leak detection in central Spring Valley, our dispatch desk connects you with local technicians experienced with local residential slab foundations, older copper piping, commercial strip malls, and backyard swimming pools. Call (725) 313-0108 for fast dispatch.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Technician performing leak detection in Spring Valley neighborhood",
    imageCaption: "Rapid service response across Rainbow Blvd, Flamingo Rd, and surrounding Spring Valley neighborhoods.",
    sections: [
      {
        heading: "Plumbing Infrastructure in Central Spring Valley",
        subheading: "Managing 1980s–2000s residential plumbing and pool systems",
        paragraphs: [
          "Central Spring Valley features a dense mix of established single-family neighborhoods built predominantly between 1980 and 2005. Homes in this area often feature original copper water lines that have endured decades of hard Las Vegas water.",
          "Dispatched specialists regularly resolve slab leaks under tile floors, hidden leaks behind drywall, aging swimming pool skimmer cracks, and underground gas lines serving pool heaters and kitchen ranges."
        ]
      },
      {
        heading: "Caliche Sub-Slab Copper Fatigue & Overhead PEX Re-Routes in 89103 / 89147",
        subheading: "Non-invasive diagnostics along Rainbow Blvd, Flamingo Rd & Tropicana Ave",
        paragraphs: [
          "Because many Spring Valley homes built in the late 1980s and 1990s have buried hot-water copper loops resting on cemented caliche shelves, spot patches alone can leave neighboring copper segments vulnerable. Acoustic listening and thermal imaging isolate the exact failure so contractors can advise transparently between a targeted spot fix and a permanent overhead PEX-A reroute.",
          "We also verify post-repair meter stillness and supply NSCB-licensed invoices ready for LVVWD 50% leak credit filing."
        ]
      }
    ],
    faqs: [
      {
        question: "How fast can you dispatch to homes near Rainbow Blvd and Flamingo Rd?",
        answer: "Dispatched mobile technicians typically respond rapidly across central Spring Valley (89103 / 89147), arriving with acoustic, thermal, and pressure-testing gear on board."
      },
      {
        question: "Why do 1990s homes in Spring Valley develop warm spots on tile floors?",
        answer: "Hard Las Vegas water scale combined with continuous hot-water recirculation thins buried under-slab copper tubing until a pinhole opens beneath tile or travertine."
      },
      {
        question: "Can you test both backyard swimming pools and indoor plumbing in one Spring Valley visit?",
        answer: "Yes. Specialists isolate your domestic curb meter from backyard pool autofill and circulation loops to identify every source of excessive LVVWD water consumption."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Pinpoint hidden supply line leaks." },
      { title: "Slab Leak Detection", slug: "slab-leak-detection", description: "Non-invasive concrete foundation diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool shell and plumbing line testing." }
    ],
    relatedLocations: [
      { name: "The Lakes", slug: "the-lakes", context: "Adjacent master-planned community." },
      { name: "Spanish Trail", slug: "spanish-trail", context: "Nearby luxury gated community." },
      { name: "Rhodes Ranch", slug: "rhodes-ranch", context: "Southwest Las Vegas residential sector." }
    ],
    schemaType: "LocalBusiness"
  },

  // 9. LOCATION 2: THE LAKES & PECCOLE RANCH
  "the-lakes": {
    slug: "the-lakes",
    urlPath: "/the-lakes/",
    type: "location",
    name: "The Lakes & Peccole Ranch Leak Detection",
    navTitle: "The Lakes",
    metaTitle: "Leak Detection The Lakes NV | Peccole Ranch Water & Pool Leak Repair",
    metaDescription: "Water, gas, slab & pool leak detection in The Lakes & Peccole Ranch, NV 89117. Call (725) 313-0108 for non-invasive acoustic & dye testing dispatch.",
    primaryKeyword: "leak detection The Lakes Las Vegas",
    secondaryKeywords: [
      "pool leak detection The Lakes NV",
      "slab leak repair Peccole Ranch",
      "water leak plumber 89117",
      "gas leak detection The Lakes"
    ],
    semanticEntities: [
      "Lake Sahara artificial lake community",
      "Peccole Ranch greenbelt master plan",
      "High groundwater sub-slab interactions",
      "Residential swimming pool density"
    ],
    h1: "Water, Gas, Slab & Pool Leak Detection in The Lakes & Peccole Ranch",
    heroKicker: "Serving The Lakes, Peccole Ranch & West Sahara (89117)",
    heroSubheadline: "Waterfront homes around Lake Sahara and lush neighborhoods in Peccole Ranch feature high pool concentrations and unique moisture considerations. Dispatched specialists deliver non-invasive leak diagnostics.",
    directAnswer: "If you need leak detection in The Lakes or Peccole Ranch, our dispatch network connects you directly with local technicians who specialize in swimming pool plumbing, sub-slab foundation leaks, and underground irrigation systems across the 89117 zip code.",
    featuredImage: "/images/pool_leak_detection_1791567711591.webp",
    imageAlt: "Pool leak detection testing at home in The Lakes neighborhood",
    imageCaption: "Acoustic hydrophone testing for swimming pool plumbing in The Lakes community.",
    sections: [
      {
        heading: "Water & Pool Plumbing in The Lakes",
        subheading: "Managing mature landscape lines and swimming pool plumbing",
        paragraphs: [
          "Developed in the late 1980s, The Lakes features custom lakeside homes, mature trees, and private backyard pools. Over time, shifting soils and root pressure can cause underground PVC pool lines and domestic copper supply lines to fracture.",
          "Dispatched technicians bring specialized pool hydrophones and electronic gas sniffers to quickly identify and isolate leaks without property destruction."
        ]
      },
      {
        heading: "Lake Sahara Water Table & Pool Deck Settlement Diagnostics (89117)",
        subheading: "Separating structural shell cracks, skimmer seals, and sub-slab copper pinholes",
        paragraphs: [
          "Homes bordering Lake Sahara and the Peccole Ranch greenbelts contend with mature root systems, poolside concrete decking, and moist subsurface soils that can mask early domestic main and pool-return leaks.",
          "Using submersible hydrophones, fluorescent dye testing around skimmer throats and light niches, and pressure-decay testing on autofill and return lines, dispatched specialists locate leaks while keeping your pool completely full."
        ]
      }
    ],
    faqs: [
      {
        question: "Can you detect a pool leak that is hidden beneath concrete pavers?",
        answer: "Yes. Dispatched specialists utilize acoustic hydrophones and line-pressure testing to pinpoint underground pipe ruptures beneath pool decking and pavers."
      },
      {
        question: "How do I tell if my pool in The Lakes is leaking or evaporating in desert heat?",
        answer: "Complete a 24-hour bucket test with the autofill valve switched off. If the pool water drops noticeably further than the water level inside the bucket, schedule hydrophone and dye testing."
      },
      {
        question: "Do tree roots along Peccole Ranch greenbelts damage underground water or irrigation mains?",
        answer: "Yes. Mature ficus, mesquite, and palm roots frequently squeeze PVC irrigation manifolds and older street-to-house supply mains, which we locate non-invasively using tracer gas."
      }
    ],
    relatedServices: [
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone and dye testing." },
      { title: "Slab Leak Detection", slug: "slab-leak-detection", description: "Foundation leak diagnostics." },
      { title: "Gas Leak Detection", slug: "gas-leak-detection", description: "Pool heater and domestic gas lines." }
    ],
    relatedLocations: [
      { name: "Spring Valley Center", slug: "spring-valley-center", context: "Central commercial and residential corridor." },
      { name: "Spanish Trail", slug: "spanish-trail", context: "Adjacent luxury estate community." },
      { name: "Summerlin South", slug: "summerlin-south", context: "West Las Vegas master-planned area." }
    ],
    schemaType: "LocalBusiness"
  },

  // 10. LOCATION 3: SPANISH TRAIL
  "spanish-trail": {
    slug: "spanish-trail",
    urlPath: "/spanish-trail/",
    type: "location",
    name: "Spanish Trail Luxury Estate Leak Detection",
    navTitle: "Spanish Trail",
    metaTitle: "Leak Detection Spanish Trail Las Vegas NV | Estate Pool, Slab & Gas Leaks",
    metaDescription: "Guard-gated luxury leak detection in Spanish Trail, NV 89113. Pool plumbing, large slab foundations & gas lines. Call (725) 313-0108 for discreet dispatch.",
    primaryKeyword: "leak detection Spanish Trail Las Vegas",
    secondaryKeywords: [
      "estate leak detection Spanish Trail NV",
      "pool leak repair Spanish Trail 89113",
      "slab leak detection Spanish Trail",
      "luxury home plumber Spring Valley"
    ],
    semanticEntities: [
      "Spanish Trail Country Club guard-gated estate",
      "Custom architectural swimming pools and spas",
      "Extensive post-tension foundation slabs",
      "High-capacity domestic water and gas lines"
    ],
    h1: "Water, Gas, Slab & Pool Leak Detection in Spanish Trail, NV",
    heroKicker: "Discreet White-Glove Service • Guard-Gated Estate Dispatch",
    heroSubheadline: "Spanish Trail's custom luxury estates, championship golf course homes, and architectural infinity pools require skilled, discreet technicians equipped for complex multi-line plumbing systems.",
    directAnswer: "If you need leak detection in Spanish Trail, our dispatch network connects you directly with top-tier plumbing and leak detection contractors experienced with high-end estate plumbing, custom swimming pool hydraulics, large concrete slabs, and outdoor gas fire features. Call (725) 313-0108.",
    featuredImage: "/images/slab_leak_inspection_1791566136409.webp",
    imageAlt: "Technician servicing luxury estate pool in Spanish Trail Las Vegas",
    imageCaption: "Specialized diagnostics for custom estate pools and expansive post-tension slab foundations.",
    sections: [
      {
        heading: "Complex Estate Plumbing in Spanish Trail",
        subheading: "High-capacity lines, multi-pool systems, and custom finishes",
        paragraphs: [
          "Spanish Trail estates feature multi-thousand-square-foot floor plans with complex plumbing configurations: multiple water heaters, recirculating loops, expansive post-tension slabs, and custom swimming pool and water feature arrays.",
          "Dispatched contractors use non-invasive acoustic locators and floor-protection runners to safeguard imported marble and hardwood finishes while pinpointing sub-slab and pool line breaks."
        ]
      },
      {
        heading: "Multi-Zone Recirculation Loops & Estate Gas Feature Testing (89113)",
        subheading: "Comprehensive diagnostics for multi-heater residences and resort pools",
        paragraphs: [
          "Large Spanish Trail estates frequently operate zoned domestic hot-water recirculation loops, dual water heaters, outdoor misting lines, and natural-gas fire features. When pressure drops occur, ultrasonic correlators and FLIR infrared cameras isolate the exact hot loop or patio riser without disturbing stone flooring or custom millwork."
        ]
      }
    ],
    faqs: [
      {
        question: "Can dispatched technicians access guard-gated communities in Spanish Trail?",
        answer: "Yes. Dispatched contractors are licensed and insured, coordinating gate clearance directly with property owners and security personnel for smooth access."
      },
      {
        question: "How do you locate slab leaks under marble or travertine flooring in 89113 estates?",
        answer: "FLIR thermal imaging and non-invasive acoustic listening locate sub-slab leaks directly through dense stone tile without exploratory cutting, enabling surgical spot access or an overhead PEX reroute."
      },
      {
        question: "Can you test outdoor BBQ islands, fire bowls, and pool heaters for gas leaks?",
        answer: "Yes. Technicians use calibrated PPM electronic gas sniffers and manometer pressure-decay gauges to inspect all patio and equipment-pad gas lines."
      }
    ],
    relatedServices: [
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Custom estate pools and waterfalls." },
      { title: "Slab Leak Detection", slug: "slab-leak-detection", description: "Large foundation footprint diagnostics." },
      { title: "Gas Leak Detection", slug: "gas-leak-detection", description: "Outdoor kitchens and fire features." }
    ],
    relatedLocations: [
      { name: "Spring Valley Center", slug: "spring-valley-center", context: "Core Spring Valley area." },
      { name: "The Lakes", slug: "the-lakes", context: "Nearby waterfront community." },
      { name: "Rhodes Ranch", slug: "rhodes-ranch", context: "Golf course community to the south." }
    ],
    schemaType: "LocalBusiness"
  },

  // 11. LOCATION 4: SUMMERLIN SOUTH
  "summerlin-south": {
    slug: "summerlin-south",
    urlPath: "/summerlin-south/",
    type: "location",
    name: "Summerlin South Leak Detection & Repair",
    navTitle: "Summerlin South",
    metaTitle: "Leak Detection Summerlin South NV | Water, Slab, Gas & Pool Leaks",
    metaDescription: "Leak detection in Summerlin South, NV 89135, 89148. Water, gas, slab & pool leaks. Non-invasive acoustic & dye diagnostics. Call (725) 313-0108.",
    primaryKeyword: "leak detection Summerlin South NV",
    secondaryKeywords: [
      "pool leak detection Summerlin",
      "slab leak repair Summerlin South 89135",
      "water leak detection Desert Foothills",
      "gas leak plumber Summerlin Las Vegas"
    ],
    semanticEntities: [
      "Summerlin South Master Association",
      "Desert Foothills and Red Rock proximity",
      "Caliche rock excavation challenges",
      "Modern PEX and copper hybrid plumbing"
    ],
    h1: "Water, Gas, Slab & Pool Leak Detection in Summerlin South, NV",
    heroKicker: "Serving 89135, 89148, The Ridges & Desert Foothills",
    heroSubheadline: "Bordering the scenic Spring Mountains, Summerlin South features premier residential neighborhoods, modern custom pools, and rocky caliche soil. Dispatched specialists solve complex leak challenges quickly.",
    directAnswer: "If you need leak detection in Summerlin South, our dispatch network connects you directly with local technicians equipped for modern residential plumbing, post-tension slabs, swimming pool return lines, and domestic gas systems. Call (725) 313-0108.",
    featuredImage: "/images/water_heater_repair_1791566167061.webp",
    imageAlt: "Technician inspecting pool and water lines in Summerlin South Nevada",
    imageCaption: "Fast leak detection response across Summerlin South and West Las Vegas Valley.",
    sections: [
      {
        heading: "Caliche and Rock Formations in Summerlin South",
        subheading: "Managing pipe stress near the Spring Mountain foothills",
        paragraphs: [
          "Properties in Summerlin South sit atop heavy caliche and limestone strata. Ground vibrations and thermal shifts can cause friction between buried pipes and subsurface rock, leading to slab leaks and broken irrigation lines.",
          "Dispatched technicians utilize high-precision electronic locators to find leaks without excavating manicured landscaping or breaking concrete unnecessarily."
        ]
      },
      {
        heading: "Foothill Static Water Pressure & Drip Irrigation Mains in 89135 / 89148",
        subheading: "Managing elevated booster zone PSI and rocky caliche trenches",
        paragraphs: [
          "Higher elevation neighborhoods toward Red Rock Canyon and The Ridges receive boosted LVVWD delivery pressure that rapidly strains aging residential Pressure Reducing Valves (PRVs) and copper manifolds. Dispatched specialists check static PSI alongside acoustic and nitrogen tracer-gas testing across backyard pools, travertine decks, and concealed drip irrigation lines."
        ]
      }
    ],
    faqs: [
      {
        question: "How fast can a technician arrive in Summerlin South?",
        answer: "Mobile dispatch teams serving West Las Vegas and Summerlin South respond rapidly 24/7 with full acoustic, thermal, and hydrophone diagnostic kits."
      },
      {
        question: "Why do water leaks in Summerlin South yards rarely leave puddles?",
        answer: "Coarse foothill gravel and cemented caliche pockets channel escaping irrigation and main-line water deep underground rather than pooling on desert rock. Tracer gas pinpoints these buried breaks within inches."
      },
      {
        question: "Can you test post-tension concrete slabs in Summerlin South without risking tension cables?",
        answer: "Yes. Non-invasive acoustic sensors and infrared thermography isolate the break location before any access decision, and overhead PEX reroutes bypass tension cables entirely."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor and domestic water leak diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool shell and plumbing line testing." },
      { title: "Slab Leak Detection", slug: "slab-leak-detection", description: "Sub-slab foundation leak testing." }
    ],
    relatedLocations: [
      { name: "The Lakes", slug: "the-lakes", context: "Adjacent western community." },
      { name: "Spanish Trail", slug: "spanish-trail", context: "Nearby luxury community." },
      { name: "Spring Valley Center", slug: "spring-valley-center", context: "Central dispatch hub." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12. LOCATION 5: RHODES RANCH
  "rhodes-ranch": {
    slug: "rhodes-ranch",
    urlPath: "/rhodes-ranch/",
    type: "location",
    name: "Rhodes Ranch & Southwest Las Vegas Leak Detection",
    navTitle: "Rhodes Ranch",
    metaTitle: "Leak Detection Rhodes Ranch NV | Southwest Las Vegas Water & Pool Leaks",
    metaDescription: "Precision water, gas, slab & pool leak detection in Rhodes Ranch, NV 89148. 24/7 emergency dispatch. Call (725) 313-0108.",
    primaryKeyword: "leak detection Rhodes Ranch NV",
    secondaryKeywords: [
      "pool leak repair Rhodes Ranch",
      "slab leak detection 89148",
      "water leak plumber Southwest Las Vegas",
      "gas leak repair Rhodes Ranch NV"
    ],
    semanticEntities: [
      "Rhodes Ranch Golf Club community",
      "Southwest Las Vegas residential growth corridor",
      "High density of in-ground residential pools",
      "Post-tension slab plumbing configurations"
    ],
    h1: "Water, Gas, Slab & Pool Leak Detection in Rhodes Ranch, NV",
    heroKicker: "Serving Rhodes Ranch, Nevada Trails & 89148",
    heroSubheadline: "Guard-gated golf course homes and family neighborhoods in Rhodes Ranch feature extensive swimming pools and post-tension slabs. Dispatched technicians provide non-invasive leak diagnostics.",
    directAnswer: "If you need leak detection in Rhodes Ranch or Southwest Las Vegas, our dispatch line connects you with local contractors equipped for swimming pool pressure testing, sub-slab acoustic testing, gas appliance inspections, and domestic water line repairs. Call (725) 313-0108.",
    featuredImage: "/images/gas_leak_detection_1791567732913.webp",
    imageAlt: "Technician testing pool and slab plumbing in Rhodes Ranch home",
    imageCaption: "Non-invasive leak detection for golf course residences and swimming pools in Rhodes Ranch.",
    sections: [
      {
        heading: "Plumbing Infrastructure in Rhodes Ranch",
        subheading: "Managing post-tension slabs and high-demand pool equipment",
        paragraphs: [
          "Rhodes Ranch is known for its resort-style atmosphere, where nearly every home features an in-ground swimming pool or spa. The desert sun and hard water put heavy wear on pool plumbing and automatic water levelers.",
          "Dispatched technicians identify underground pool pipe breaks, leaking autofill valves, slab leaks, and gas heater lines with pinpoint accuracy."
        ]
      },
      {
        heading: "Golf-Course Post-Tension Slabs & Pool Heater Gas Lines in 89148",
        subheading: "Protecting Southwest Las Vegas homes from hard-water scaling and autofill waste",
        paragraphs: [
          "Homes across Rhodes Ranch and Nevada Trails combine post-tension concrete slabs with high-demand backyard pools, heated spas, and desert drip manifolds. Unchecked pool autofill or sub-slab pinholes can trigger dramatic Tier-3 and Tier-4 LVVWD water bill spikes within one month.",
          "Dispatched specialists test pool hydraulics, indoor copper/PEX runs, and Southwest Gas heater risers on a single diagnostic visit."
        ]
      }
    ],
    faqs: [
      {
        question: "Can you fix an autofill valve that is constantly filling my pool?",
        answer: "Yes. An autofill that runs continuously is either miscalibrated, defective, or concealing a significant pool leak. Dispatched technicians inspect the autofill line and perform complete pool leak diagnostics."
      },
      {
        question: "Do you inspect pool heater gas leaks in Rhodes Ranch?",
        answer: "Yes. Using electronic PPM combustible gas sniffers and pressure gauges, NSCB-licensed technicians locate leaking underground or equipment-pad gas lines serving heaters and outdoor kitchens."
      },
      {
        question: "Can Rhodes Ranch homeowners claim an LVVWD leak credit after fixing a hidden yard or slab leak?",
        answer: "Yes. Dispatched contractors supply itemized repair invoices and post-repair meter zero-flow verification formatted for LVVWD leak credit review."
      }
    ],
    relatedServices: [
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Autofill and return line testing." },
      { title: "Slab Leak Detection", slug: "slab-leak-detection", description: "Post-tension slab leak diagnostics." },
      { title: "Water Leak Detection", slug: "water-leak-detection", description: "Domestic supply line leak repairs." }
    ],
    relatedLocations: [
      { name: "Spanish Trail", slug: "spanish-trail", context: "Nearby luxury gated community." },
      { name: "Spring Valley Center", slug: "spring-valley-center", context: "Central Spring Valley area." },
      { name: "Summerlin South", slug: "summerlin-south", context: "West Las Vegas master-planned area." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12B. LAS VEGAS DISTRICT 1: NORTHWEST LAS VEGAS & LONE MOUNTAIN (89129 / 89108)
  "las-vegas": {
    slug: "las-vegas",
    urlPath: "/las-vegas/",
    type: "location",
    name: "Northwest Las Vegas & Lone Mountain Leak Detection",
    navTitle: "Northwest Las Vegas (89129)",
    metaTitle: "Leak Detection Las Vegas NV 89129 | Northwest & Lone Mountain (725) 313-0108",
    metaDescription: "Water, slab, pool or gas leak in Northwest Las Vegas or Lone Mountain (89129 / 89108)? Dispatched from 3320 N Pioneer Way. Call (725) 313-0108 24/7.",
    primaryKeyword: "leak detection Las Vegas NV 89129",
    secondaryKeywords: [
      "slab leak detection Northwest Las Vegas",
      "pool leak repair Lone Mountain 89129",
      "water leak detection 3320 N Pioneer Way",
      "gas leak repair 89129 89108 Las Vegas"
    ],
    semanticEntities: [
      "Las Vegas Valley Water District (LVVWD)",
      "3320 N Pioneer Way Las Vegas NV 89129",
      "Lone Mountain, Cheyenne Ave & Durango Dr corridor",
      "Post-tension concrete slab & 80+ PSI PRV plumbing"
    ],
    h1: "Water, Gas, Slab & Pool Leak Detection in Northwest Las Vegas (89129)",
    heroKicker: "Serving Northwest Las Vegas, Lone Mountain, Cheyenne & Durango • 89129 / 89108",
    heroSubheadline: "Centered right around our 3320 N Pioneer Way office, Northwest Las Vegas and Lone Mountain neighborhoods feature post-tension concrete slabs, backyard swimming pools, and elevated foothill water pressure that stress copper and PEX lines.",
    directAnswer: "Las Vegas Leak Detection Services coordinates 24/7 non-invasive leak detection across Northwest Las Vegas and Lone Mountain (89129 / 89108) from our dispatch hub at 3320 N Pioneer Way, Las Vegas, NV 89129, USA. Licensed Nevada specialists locate sub-slab leaks, buried irrigation breaks, swimming pool leaks, and gas line faults using acoustic geophones, FLIR thermal imaging, and tracer gas. Call (725) 313-0108.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Technician performing non-invasive leak detection in Northwest Las Vegas NV 89129",
    imageCaption: "Non-invasive electronic leak diagnostics serving Northwest Las Vegas, Lone Mountain, and 89129 properties.",
    sections: [
      {
        heading: "Northwest Las Vegas Slabs, High PSI & Backyard Pools (89129)",
        subheading: "Pinpointing leaks cleanly beneath tile flooring, pavers, and caliche soil",
        paragraphs: [
          "Neighborhoods along W Cheyenne Ave, N Durango Dr, Lone Mountain Rd, and US-95 sit atop dense desert caliche hardpan and receive municipal water at elevated foothill booster pressures. Failed pressure-reducing valves (PRVs) and mineral scale frequently cause pinhole leaks in hot-water slab loops and pool autofill lines.",
          "Dispatched NSCB-licensed technicians isolate silent water losses under driveways, beneath porcelain tile, and along pool decks without exploratory demolition—and provide itemized documentation compatible with LVVWD 50% leak credit reviews."
        ],
        bulletPoints: [
          "3320 N Pioneer Way, W Cheyenne Ave & N Durango Dr residential corridors (89129 / 89108)",
          "Post-tension slab acoustic localization protecting tension cables and tile floors",
          "LVVWD high-bill diagnostic reports and PRV pressure verification"
        ]
      },
      {
        heading: "Cheyenne & Durango High-PSI Protection & Older vs. Modern Builds",
        subheading: "Diagnosing 1990s copper manifolds and newer PEX residential developments",
        paragraphs: [
          "From 1990s copper-plumbed subdivisions near Cheyenne & Buffalo to newer master-planned blocks off Lone Mountain & Durango, Northwest Las Vegas homes face both mineral scaling and elevated delivery pressure. Dispatched technicians check static PSI, inspect yard main lines from the LVVWD curb box, and locate pool or spa pipe ruptures cleanly without trenching pavers."
        ]
      }
    ],
    faqs: [
      {
        question: "Where is your Northwest Las Vegas dispatch office located?",
        answer: "Our business office is located at 3320 N Pioneer Way, Las Vegas, NV 89129, USA, coordinating 24/7 dispatch across Northwest Las Vegas and the entire Las Vegas Valley. Call (725) 313-0108."
      },
      {
        question: "Do your diagnostic reports support LVVWD high water bill adjustments?",
        answer: "Yes. Technicians perform meter-isolation testing and furnish an itemized location and repair report formatted for Las Vegas Valley Water District (LVVWD) leak credit reviews."
      },
      {
        question: "How do I know if high water pressure in 89129 caused my slab or heater leak?",
        answer: "If your static pressure at an exterior hose bib exceeds 75–80 PSI, a worn Pressure Reducing Valve (PRV) is overloading gaskets and copper joints. Technicians test static pressure during every Northwest Las Vegas leak visit."
      }
    ],
    relatedServices: [
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Post-tension slab acoustic diagnostics." },
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Wall, yard & main line testing." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone & dye pool diagnostics." }
    ],
    relatedLocations: [
      { name: "Centennial Hills & Skye Canyon (89131)", slug: "centennial-hills", context: "North along US-95 & Durango." },
      { name: "Summerlin South (89135)", slug: "summerlin-south", context: "West valley foothill neighborhoods." },
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "South along Rainbow & Buffalo." }
    ],
    schemaType: "LocalBusiness",
    showMap: true
  },

  // 12C. LAS VEGAS DISTRICT 2: CENTENNIAL HILLS & SKYE CANYON (89131 / 89149)
  "centennial-hills": {
    slug: "centennial-hills",
    urlPath: "/centennial-hills/",
    type: "location",
    name: "Centennial Hills & Skye Canyon Leak Detection",
    navTitle: "Centennial Hills (89131 / 89149)",
    metaTitle: "Leak Detection Centennial Hills & Skye Canyon Las Vegas NV | (725) 313-0108",
    metaDescription: "Water, slab, pool or gas leak in Centennial Hills, Providence or Skye Canyon (89131 / 89149)? 24/7 acoustic & tracer gas locating. Call (725) 313-0108.",
    primaryKeyword: "leak detection Centennial Hills Las Vegas NV",
    secondaryKeywords: [
      "water leak detection Skye Canyon 89166",
      "slab leak repair Centennial Hills 89131",
      "pool leak detection Providence 89149",
      "gas leak detection North Las Vegas Valley 89131"
    ],
    semanticEntities: [
      "Centennial Parkway, North Durango & US-95 corridor",
      "Providence, Skye Canyon & Elkhorn Springs",
      "Upper valley alluvial gravel & cemented caliche",
      "Foothill booster pressure zones & drip irrigation"
    ],
    h1: "Water, Slab, Pool & Gas Leak Detection in Centennial Hills & Skye Canyon",
    heroKicker: "Serving Centennial Hills, Providence & Skye Canyon • 89131 / 89149",
    heroSubheadline: "Elevated foothill water pressures, large landscaped lots, and modern post-tension slabs in Centennial Hills and Skye Canyon strain yard irrigation mains, pool plumbing, and PRVs.",
    directAnswer: "Las Vegas Leak Detection Services dispatches licensed technicians 24/7 across Centennial Hills, Providence, and Skye Canyon (89131 / 89149). Equipped with hydrogen-nitrogen tracer gas, acoustic ground microphones, and FLIR thermal cameras, specialists isolate buried irrigation breaks, foothill PRV leaks, and slab pinholes cleanly. Call (725) 313-0108.",
    featuredImage: "/images/diagnostic_tech_1791662650738.webp",
    imageAlt: "Acoustic and thermal leak detection serving Centennial Hills and Skye Canyon Las Vegas",
    imageCaption: "Non-invasive acoustic, thermal, and tracer-gas diagnostics in Centennial Hills and Skye Canyon (89131 / 89149).",
    sections: [
      {
        heading: "Foothill Pressure Zones & Pool Plumbing in 89131 / 89149",
        subheading: "Tracing underground runs through desert gravel and caliche hardpan",
        paragraphs: [
          "Communities across Centennial Hills, Elkhorn, Providence, and Skye Canyon sit at higher northwest valley elevations where booster pumps push supply pressures high and desert gravel rapidly absorbs underground irrigation or pool-line water loss before any surface puddle appears.",
          "Rather than excavating decorative desert rock or pavers blindly, dispatched specialists pinpoint the exact breach with tracer gas, hydrophones, and acoustic correlation."
        ],
        bulletPoints: [
          "Centennial Pkwy, Farm Rd, Providence & Skye Canyon slab & main testing",
          "Buried drip irrigation & yard main tracer gas pinpointing",
          "PRV high-pressure diagnostics & backyard swimming pool hydrophone testing"
        ]
      },
      {
        heading: "Skye Canyon & Providence Pool Decks, Autofills & Copper-to-PEX Risers",
        subheading: "Eliminating hidden desert water waste across north-valley estates",
        paragraphs: [
          "Larger backyard footprints in Centennial Hills, Providence, and Skye Canyon pair custom pools and travertine decking with multi-zone desert irrigation timers. Dispatched technicians isolate pool return lines, autofill valves, and exterior PRV risers using hydrophone listening and tracer gas—pinpointing leaks cleanly without uprooting landscaping."
        ]
      }
    ],
    faqs: [
      {
        question: "Why does my LVVWD water bill spike in Centennial Hills with no wet spots in the yard?",
        answer: "Porous desert gravel and sandy alluvial soil let buried irrigation mains or curb-to-home service pipes leak hundreds of gallons downward without surfacing. Tracer gas and acoustic sensors pinpoint the exact underground break."
      },
      {
        question: "Can tracer gas find water leaks under paved driveways or desert rock?",
        answer: "Yes. Safe nitrogen-hydrogen tracer gas rises cleanly through desert rock, caliche soil, and concrete pavers so electronic sensors pinpoint the leak within inches."
      },
      {
        question: "Do you inspect swimming pool and spa leaks in Skye Canyon and Providence?",
        answer: "Yes. Submersible hydrophones, dye testing, and line pressure testing locate suction, return, and skimmer leaks across north-valley pools without draining water."
      }
    ],
    relatedServices: [
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Yard main & buried drip line tracing." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Post-tension slab acoustic diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone & skimmer dye testing." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "South along N Durango Dr & 3320 N Pioneer Way." },
      { name: "Summerlin South (89135)", slug: "summerlin-south", context: "West valley foothill communities." },
      { name: "Downtown Las Vegas (89101)", slug: "downtown-las-vegas", context: "Central Las Vegas via US-95." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12D. LAS VEGAS DISTRICT 3: DOWNTOWN LAS VEGAS & CHARLESTON (89101 / 89102 / 89104)
  "downtown-las-vegas": {
    slug: "downtown-las-vegas",
    urlPath: "/downtown-las-vegas/",
    type: "location",
    name: "Downtown Las Vegas & Charleston Corridor Leak Detection",
    navTitle: "Downtown Las Vegas (89101)",
    metaTitle: "Leak Detection Downtown Las Vegas NV 89101 | Charleston & Arts District (725) 313-0108",
    metaDescription: "Water, slab, main line or gas leak in Downtown Las Vegas, Charleston Blvd or Huntridge (89101/89102/89104)? 24/7 licensed diagnostics. Call (725) 313-0108.",
    primaryKeyword: "leak detection Downtown Las Vegas NV 89101",
    secondaryKeywords: [
      "water leak detection Downtown Las Vegas 89101",
      "slab leak repair Charleston Blvd Las Vegas",
      "commercial leak detection Arts District Las Vegas",
      "gas leak repair 89101 89104 Las Vegas"
    ],
    semanticEntities: [
      "Downtown Las Vegas, Arts District & Fremont Street",
      "Scotch 80s, John S. Park & Huntridge historic districts",
      "Aging mid-century galvanized & copper supply lines",
      "Commercial service mains & Southwest Gas meter testing"
    ],
    h1: "Water, Gas, Slab & Commercial Leak Detection in Downtown Las Vegas (89101)",
    heroKicker: "Serving Downtown Las Vegas, Arts District, Scotch 80s & Huntridge • 89101 / 89102 / 89104",
    heroSubheadline: "Mid-century historic homes in Scotch 80s and John S. Park, aging commercial water mains along Charleston and Fremont, and older cast-iron or copper pipes require pinpoint non-destructive diagnostics.",
    directAnswer: "Las Vegas Leak Detection Services connects Downtown Las Vegas and Charleston corridor property owners (89101 / 89102 / 89104) with NSCB-licensed technicians equipped for acoustic main-line tracing, FLIR thermal scanning, slab isolation, and commercial gas line safety testing. Call (725) 313-0108.",
    featuredImage: "/images/slab_leak_inspection_1791566136409.webp",
    imageAlt: "Acoustic leak detection inside Downtown Las Vegas 89101 property",
    imageCaption: "Non-invasive slab, main-line, and gas leak diagnostics serving Downtown Las Vegas and Charleston neighborhoods.",
    sections: [
      {
        heading: "Historic Mid-Century Homes & Commercial Mains in 89101–89104",
        subheading: "Protecting vintage tile, terrazzo floors, and active commercial corridors",
        paragraphs: [
          "Neighborhoods like Scotch 80s, Rancho Circle, Huntridge, and John S. Park feature 1940s–1970s homes with original galvanized steel yard mains or aging copper lines beneath terrazzo and concrete slabs. Meanwhile, Arts District and Charleston Boulevard restaurants and retail buildings rely on pressurized commercial water and gas runs.",
          "Dispatched specialists isolate hot vs. cold lines and underground mains using ultrasonic ground geophones, FLIR thermal imaging, and tracer gas—enabling surgical spot access or clean PEX repiping."
        ],
        bulletPoints: [
          "Scotch 80s, John S. Park & Huntridge vintage slab & main-line tracing",
          "Downtown Las Vegas, Fremont & Arts District commercial water & gas testing",
          "Southwest Gas red-tag clearance and LVVWD high-bill documentation"
        ]
      },
      {
        heading: "Historic Curb-to-House Supply Lines & Commercial Red-Tag Clearances",
        subheading: "Protecting Downtown Las Vegas residences and hospitality properties",
        paragraphs: [
          "Aging steel and thin-wall copper mains beneath historic Downtown Las Vegas lawns and paved alleys frequently develop slow pinholes along threaded couplings and curb meter tails. Likewise, commercial hospitality and restaurant operators along Fremont Street and Charleston Blvd rely on rapid manometer pressure-decay testing whenever Southwest Gas issues a safety lock."
        ]
      }
    ],
    faqs: [
      {
        question: "Do you inspect older galvanized street-to-home water mains in Downtown Las Vegas?",
        answer: "Yes. Dispatched specialists trace corroded curb-to-home water mains with acoustic sensors and nitrogen tracer gas and provide trenchless or spot-repair options."
      },
      {
        question: "Can you locate gas or water leaks for commercial businesses near Charleston Blvd?",
        answer: "Yes. NSCB C-1 contractors handle commercial supply lines, backflow/meter leaks, and manometer gas pressure certification for commercial unlocks."
      },
      {
        question: "Can older homes in Scotch 80s and Huntridge receive overhead PEX reroutes instead of cutting vintage floors?",
        answer: "Yes. When historic terrazzo, hardwood, or concrete slabs hide repeated copper failures, an overhead PEX-A reroute routes new supply lines cleanly through attic spaces to preserve original flooring."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Historic supply & curb main diagnostics." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Residential & commercial gas line safety." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Buried yard & commercial main tracing." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "Northwest dispatch HQ via US-95." },
      { name: "Paradise & Enterprise (89123)", slug: "paradise-enterprise", context: "South toward Strip corridor & Silverado." },
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "West along Sahara & Flamingo." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12E. LAS VEGAS DISTRICT 4: PARADISE, SILVERADO RANCH & ENTERPRISE (89119 / 89123 / 89139)
  "paradise-enterprise": {
    slug: "paradise-enterprise",
    urlPath: "/paradise-enterprise/",
    type: "location",
    name: "Paradise, Silverado Ranch & Enterprise Leak Detection",
    navTitle: "Paradise & Enterprise (89123)",
    metaTitle: "Leak Detection Paradise, Silverado Ranch & Enterprise NV | (725) 313-0108",
    metaDescription: "Water, slab, pool or gas leak in Paradise, Silverado Ranch or Enterprise (89119/89123/89139)? 24/7 licensed non-invasive diagnostics. Call (725) 313-0108.",
    primaryKeyword: "leak detection Paradise Enterprise Las Vegas NV",
    secondaryKeywords: [
      "slab leak detection Silverado Ranch 89123",
      "pool leak repair Enterprise Las Vegas 89139",
      "water leak detection Paradise NV 89119",
      "gas leak repair South Las Vegas 89123"
    ],
    semanticEntities: [
      "Paradise, Silverado Ranch, Southern Highlands border & Enterprise",
      "Eastern Ave, Maryland Pkwy, Las Vegas Blvd South & Blue Diamond Rd",
      "Gypsum desert silt & high-mineral copper pinhole wear",
      "Multi-family, commercial & residential pool plumbing"
    ],
    h1: "Water, Slab, Pool & Gas Leak Detection in Paradise & Enterprise",
    heroKicker: "Serving Paradise, Silverado Ranch, Blue Diamond & Enterprise • 89119 / 89123 / 89139",
    heroSubheadline: "Gypsum-rich desert soils in South Las Vegas accelerate copper pipe pitting beneath slabs, while Silverado Ranch and Enterprise backyard pools and commercial buildings demand fast electronic pinpointing.",
    directAnswer: "Las Vegas Leak Detection Services coordinates 24/7 non-invasive leak diagnostics across Paradise, Silverado Ranch, and Enterprise (89119 / 89123 / 89139). Certified technicians pinpoint sub-slab pinhole leaks, underground yard mains, pool shell/pipe leaks, and combustible gas faults using acoustic correlation, FLIR thermal imaging, and digital gas sniffers. Call (725) 313-0108.",
    featuredImage: "/images/water_heater_repair_1791566167061.webp",
    imageAlt: "Water and slab leak detection in Paradise, Silverado Ranch and Enterprise Las Vegas",
    imageCaption: "Precision acoustic, thermal, and pressure diagnostics across Paradise, Silverado Ranch, and Enterprise.",
    sections: [
      {
        heading: "South Las Vegas Gypsum Soil & Sub-Slab Diagnostics",
        subheading: "Stopping silent slab copper corrosion in 89119, 89123 & 89139",
        paragraphs: [
          "Across Paradise, Silverado Ranch, and Enterprise, soil chemistry rich in gypsum and sulfates interacts with buried copper supply pipes and foundation moisture—accelerating exterior pitting and sub-slab pinholes alongside commercial water mains near Eastern Ave and Las Vegas Blvd South.",
          "Dispatched specialists combine pressure-decay isolation, FLIR thermal imaging, and nitrogen tracer gas to pinpoint the exact leak point before recommending targeted spot access or overhead PEX rerouting."
        ],
        bulletPoints: [
          "Silverado Ranch, Warm Springs & Blue Diamond slab and pool diagnostics",
          "Paradise & Maryland Pkwy residential, HOA & commercial main locating",
          "LVVWD 50% leak credit reporting and Southwest Gas PPM safety testing"
        ]
      },
      {
        heading: "Commercial Backflow, Multi-Family Slabs & Backyard Pool Shells (89119–89139)",
        subheading: "Comprehensive South Las Vegas non-invasive water, pool & gas support",
        paragraphs: [
          "Whether tracing a leaking pool autofill line in Enterprise, isolating a pressurized riser in a Paradise multi-unit complex, or marking a sub-slab copper rupture in Silverado Ranch, dispatched NSCB-licensed specialists deliver surgical pinpointing and clean documentation for insurers and LVVWD."
        ]
      }
    ],
    faqs: [
      {
        question: "Are technicians experienced with post-tension slab leaks in Silverado Ranch and Enterprise?",
        answer: "Yes. Dispatched specialists use non-invasive acoustic sensors and FLIR infrared cameras to mark sub-slab leaks within inches so repairs or overhead PEX re-routes never endanger post-tension cables."
      },
      {
        question: "Do you test residential pools and commercial mains along Eastern Ave and Flamingo?",
        answer: "Yes. Dispatched NSCB C-1 contractors perform full-pool hydrophone diagnostics as well as commercial water and gas main isolation across South Las Vegas."
      },
      {
        question: "Why do copper pipes in Paradise and Enterprise corrode from the outside?",
        answer: "South-central valley soils often contain elevated sulfate and gypsum salts that chemically pit bare copper tubing sitting beneath concrete slabs or damp utility trenches."
      }
    ],
    relatedServices: [
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Non-invasive foundation leak diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone & dye pool leak testing." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "24/7 combustible gas testing." }
    ],
    relatedLocations: [
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "West along Tropicana & Flamingo." },
      { name: "Rhodes Ranch (89148)", slug: "rhodes-ranch", context: "West along Blue Diamond Rd." },
      { name: "Downtown Las Vegas (89101)", slug: "downtown-las-vegas", context: "North along Maryland Pkwy & Las Vegas Blvd." }
    ],
    schemaType: "LocalBusiness"
  },

  // 13. HOW IT WORKS / ABOUT PAGE
  "how-it-works": {
    slug: "how-it-works",
    urlPath: "/how-it-works/",
    type: "about",
    name: "How Leak Detection & Repair Works",
    navTitle: "How It Works",
    metaTitle: "How It Works | Las Vegas Non-Invasive Leak Detection (725) 313-0108",
    metaDescription: "Our 5-step non-invasive leak detection for water, gas, slab & pool leaks in Las Vegas, NV. Acoustic, thermal & hydrophone testing. Call (725) 313-0108.",
    primaryKeyword: "how leak detection works Las Vegas NV",
    secondaryKeywords: [
      "leak detection process Las Vegas",
      "non-invasive leak diagnostics",
      "slab leak detection procedure Las Vegas",
      "leak repair workflow Nevada"
    ],
    semanticEntities: [
      "Non-invasive ultrasonic acoustic diagnostics",
      "FLIR thermal infrared moisture inspection",
      "Electronic pool hydrophone listening",
      "Combustible gas PPM sniffers",
      "Nevada State Contractors Board (NSCB) standards"
    ],
    h1: "How Our Precision Leak Detection & Repair Process Works in Las Vegas",
    heroKicker: "5-Step Non-Invasive Diagnostic & Permanent Repair Process",
    heroSubheadline: "From 24/7 emergency intake to acoustic and thermal localization in Las Vegas, NV, here is how our licensed contractor network protects your property without destructive guesswork.",
    directAnswer: "Our Las Vegas leak detection process follows five systematic stages: 24/7 rapid triage, non-invasive electronic diagnostics (acoustic ground microphones, thermal imaging, combustible gas sniffers, and pool hydrophones), pinpoint target marking within inches, upfront written itemized estimates, and NSCB code-compliant repairs with pressure verification. Call (725) 313-0108.",
    featuredImage: "/images/diagnostic_tech_1791662650738.webp",
    imageAlt: "Technician conducting non-invasive acoustic and thermal leak diagnostics in Las Vegas",
    imageCaption: "Mobile diagnostic technicians using ultrasonic acoustic listening and digital scanning tools in Las Vegas.",
    sections: [
      {
        heading: "Step 1: Rapid 24/7 Assessment & Las Vegas Dispatch",
        subheading: "Immediate telephone triage to protect your property",
        paragraphs: [
          "When you call (725) 313-0108 from anywhere in Las Vegas, an intake coordinator assesses your leak symptoms immediately and guides you through safe main water or gas shutoff precautions if needed.",
          "Your request is dispatched directly to qualified technicians serving Northwest Las Vegas (89129 / 89108), Centennial Hills (89131 / 89149), Summerlin, Spring Valley, Downtown Las Vegas (89101), and Paradise / Enterprise."
        ],
        bulletPoints: [
          "24/7/365 phone triage across 89129 and all metro Las Vegas ZIP codes",
          "Immediate shutoff guidance to limit active water or gas exposure",
          "Matching with NSCB-licensed specialists carrying calibrated diagnostic gear"
        ]
      },
      {
        heading: "Step 2: Non-Invasive Advanced Diagnostic Technology",
        subheading: "Zero-destruction acoustic, thermal, and electronic testing",
        paragraphs: [
          "Traditional plumbers often cut exploratory drywall holes or jackhammer concrete slabs by guesswork. Dispatched leak specialists pinpoint first.",
          "Technicians deploy FLIR thermal cameras, ultrasonic ground geophones, calibrated gas sniffers, tracer gas, and underwater hydrophones to track exact pressure drops and leak frequencies."
        ],
        bulletPoints: [
          "Ultrasonic acoustic sensors to hear pressurized water beneath concrete slabs & pavers",
          "Thermal infrared imaging to map hidden moisture trails behind walls and floors",
          "Hydrophones and dye testing for swimming pools and spas without draining",
          "Digital PPM combustible gas wands for natural gas and outdoor appliance lines"
        ]
      },
      {
        heading: "Step 3: Pinpoint Leak Location Identification",
        subheading: "Isolating pipe ruptures to within inches",
        paragraphs: [
          "By cross-referencing acoustic frequencies and thermal gradients, technicians mark the exact breach beneath post-tension foundation slabs, inside framing walls, or under pool decking—minimizing any repair access footprint."
        ]
      },
      {
        heading: "Step 4: Upfront Written Itemized Estimate",
        subheading: "Clear solutions and transparent pricing before repair begins",
        paragraphs: [
          "Once located, the contractor reviews repair options with you (direct spot repair, overhead PEX bypass, trenchless pull) and provides a clear itemized written estimate before work commences."
        ]
      },
      {
        heading: "Step 5: NSCB Code-Compliant Repair & Pressure Verification",
        subheading: "Permanent craftsmanship plus LVVWD 50% leak credit documentation",
        paragraphs: [
          "All repairs conform to Nevada State Contractors Board (NSCB) regulations and Clark County / City of Las Vegas plumbing codes. Post-repair static pressure testing verifies airtight and watertight integrity, with itemized repair documentation prepared for insurance or Las Vegas Valley Water District (LVVWD) credit review."
        ]
      }
    ],
    faqs: [
      {
        question: "How long does a typical leak detection inspection take?",
        answer: "Most residential water, gas, slab, or pool leak inspections take between 60 and 120 minutes, isolating line pressures and marking the leak location on the same visit."
      },
      {
        question: "Do dispatched contractors provide written estimates before beginning repair work?",
        answer: "Yes. You receive clear repair options and itemized written pricing prior to authorizing repair work."
      },
      {
        question: "Are technicians licensed and insured for Las Vegas work?",
        answer: "Yes. Work is performed by independent licensed contractors complying with Nevada State Contractors Board (NSCB) standards and Las Vegas / Clark County municipal codes."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Concealed potable line diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Concrete foundation diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool plumbing & shell testing." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Combustible gas safety testing." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "3320 N Pioneer Way HQ dispatch." },
      { name: "Centennial Hills (89131)", slug: "centennial-hills", context: "North valley diagnostics." },
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "West-central slab & pool coverage." }
    ],
    schemaType: "HowTo"
  },

  // 13b. ABOUT PAGE (Alias & Company Profile)
  "about": {
    slug: "about",
    urlPath: "/about/",
    type: "about",
    name: "About Las Vegas Leak Detection Services | Licensed Specialist Network",
    navTitle: "About Us",
    metaTitle: "About Las Vegas Leak Detection Services | Licensed Plumber Network",
    metaDescription: "We connect Las Vegas, NV property owners with pre-screened, NSCB-licensed leak detection specialists serving 89129 & metro Las Vegas. Call (725) 313-0108.",
    primaryKeyword: "Las Vegas Leak Detection Services",
    secondaryKeywords: [
      "about Las Vegas Leak Detection Services",
      "leak detection specialists Las Vegas Nevada",
      "water gas slab pool leak repair Las Vegas",
      "3320 N Pioneer Way Las Vegas"
    ],
    semanticEntities: [
      "Las Vegas, Nevada local dispatch",
      "Nevada State Contractors Board (NSCB) standards",
      "Non-invasive ultrasonic acoustic diagnostics",
      "FLIR thermal infrared moisture inspection"
    ],
    h1: "About Las Vegas Leak Detection Services — Licensed Specialist Network",
    heroKicker: "Precision Non-Invasive Diagnostics • Serving Las Vegas, Nevada",
    heroSubheadline: "Coordinating 24/7 emergency water, gas, slab, yard-line, and swimming pool leak detection across Northwest Las Vegas (89129), Centennial Hills, Summerlin, Spring Valley, Downtown, and Enterprise.",
    directAnswer: "Las Vegas Leak Detection Services connects residential and commercial property owners in Las Vegas, Nevada with pre-screened, independent Nevada State Contractors Board (NSCB) licensed leak detection specialists. Coordinated 24/7 from our office at 3320 N Pioneer Way, Las Vegas, NV 89129, USA, our network matches Las Vegas calls with acoustic, thermal, tracer-gas, and hydrophone diagnostics. Call (725) 313-0108.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Las Vegas Leak Detection Services diagnostic equipment and technical standards",
    imageCaption: "Matching Las Vegas property owners 24/7 with NSCB-licensed acoustic and thermal leak specialists.",
    sections: [
      {
        heading: "Our Mission: Non-Invasive Precision Across Las Vegas, NV",
        subheading: "Eliminating guesswork and protecting desert homes and post-tension slabs",
        paragraphs: [
          "Hidden water, slab, gas, pool, and irrigation leaks can silently damage Las Vegas flooring, stucco walls, and desert foundations. Exploratory demolition—breaking through post-tension concrete slabs or tearing open walls blindly—frequently costs more than fixing the pipe itself.",
          "Las Vegas Leak Detection Services bridges Las Vegas property owners with vetted independent specialists equipped with electronic acoustic listening gear, FLIR infrared thermography, calibrated gas sniffers, and underwater pool hydrophones."
        ],
        bulletPoints: [
          "24/7 Rapid Emergency Dispatch across Las Vegas (89129 & metro valley ZIP codes)",
          "Non-invasive acoustic, thermal, tracer gas, and hydrophone leak detection",
          "Pre-screened independent contractors complying with NSCB C-1 standards",
          "Documentation formatted for LVVWD 50% leak credits & insurance claims"
        ]
      },
      {
        heading: "Verified Licensing & Transparent Upfront Estimates",
        subheading: "Strict Nevada State Contractors Board verification",
        paragraphs: [
          "From our coordination office at 3320 N Pioneer Way, Las Vegas, NV 89129, USA, our intake desk routes urgent and scheduled inspections directly to qualified contractors serving Las Vegas.",
          "All servicing contractors are responsible for adhering to City of Las Vegas / Clark County building codes and providing transparent written quotes before repair work commences."
        ]
      }
    ],
    faqs: [
      {
        question: "Do dispatched contractors provide upfront pricing before beginning leak repairs?",
        answer: "Yes. Specialists conduct non-invasive diagnostics and present itemized written quotes before starting repairs."
      },
      {
        question: "How can I verify a plumber's license in Las Vegas, Nevada?",
        answer: "You can verify any contractor's license and bond status through the official Nevada State Contractors Board public database at nscb.nv.gov."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Domestic supply line diagnostics." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Combustible gas leak testing." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool and spa leak diagnostics." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "3320 N Pioneer Way HQ district." },
      { name: "Centennial Hills (89131)", slug: "centennial-hills", context: "North Las Vegas Valley." },
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "West-central Las Vegas." }
    ],
    schemaType: "AboutPage"
  },

  // 14. CONTACT & NAP PAGE
  "contact": {
    slug: "contact",
    urlPath: "/contact/",
    type: "contact",
    name: "Contact & Dispatch | Las Vegas Leak Detection Services",
    navTitle: "Contact & NAP",
    metaTitle: "Contact Las Vegas Leak Detection Services | 24/7 Dispatch (725) 313-0108",
    metaDescription: "Request 24/7 leak detection in Las Vegas, NV (89129 & metro valley). Call (725) 313-0108 anytime for fast acoustic, slab, pool & gas leak dispatch.",
    primaryKeyword: "contact Las Vegas Leak Detection Services",
    secondaryKeywords: [
      "Las Vegas Leak Detection Services phone number",
      "3320 N Pioneer Way Las Vegas NV 89129",
      "call leak detection Las Vegas NV",
      "emergency leak repair phone Las Vegas"
    ],
    semanticEntities: [
      "Telephone: (725) 313-0108",
      "Business office address: 3320 N Pioneer Way, Las Vegas, NV 89129, USA",
      "Target service area: Las Vegas, Nevada (89129 & metro Las Vegas)",
      "24/7 emergency dispatch coordination"
    ],
    h1: "Contact Las Vegas Leak Detection Services — 24/7 Dispatch",
    heroKicker: "24/7 Emergency Line: (725) 313-0108 • 3320 N Pioneer Way, Las Vegas, NV 89129",
    heroSubheadline: "Have an active water leak, burst yard main, natural gas odor, or sub-slab rupture in Las Vegas, Nevada? Call our 24/7 dispatch desk directly for immediate local matching.",
    directAnswer: "For urgent water, gas, slab, yard-line, and swimming pool leaks in Las Vegas, NV, calling directly gives you the fastest triage. Dial (725) 313-0108 to reach our 24/7 dispatch desk (business office: 3320 N Pioneer Way, Las Vegas, NV 89129, USA) for rapid contractor matching across Northwest Las Vegas, Centennial Hills, Summerlin, Spring Valley, Downtown, and Enterprise.",
    featuredImage: "/images/contact_office_1791662625889.webp",
    imageAlt: "Las Vegas Leak Detection Services dispatch office and coordination center",
    imageCaption: "Live 24/7 emergency telephone support serving Las Vegas, Nevada from 3320 N Pioneer Way.",
    sections: [
      {
        heading: "Official Business Information & Las Vegas Dispatch",
        subheading: "24/7 live triage for Las Vegas homes and businesses",
        paragraphs: [
          "Las Vegas Leak Detection Services operates 24 hours a day, 7 days a week. When you call (725) 313-0108 from Las Vegas, our desk immediately triages your issue, shares main shutoff safety guidance, and matches your address with a licensed specialist serving your neighborhood.",
          "Our Las Vegas business office is located at 3320 N Pioneer Way, Las Vegas, NV 89129, USA, coordinating dedicated NSCB-licensed technicians throughout Las Vegas (89129 and metro Las Vegas ZIP codes)."
        ],
        bulletPoints: [
          "Company Name: Las Vegas Leak Detection Services",
          "Target Service City: Las Vegas, Nevada (89129, 89108, 89131, 89149, 89101, 89103, 89117, 89135, 89148 & metro valley)",
          "Primary 24/7 Telephone: (725) 313-0108",
          "Business Address: 3320 N Pioneer Way, Las Vegas, NV 89129, USA",
          "Operating Hours: 24 Hours a Day, 7 Days a Week, 365 Days a Year",
          "Core Services: Water Leak Detection, Slab Leak Detection, Yard & Irrigation Lines, Pool & Gas Leak Detection"
        ]
      }
    ],
    faqs: [
      {
        question: "Is your phone line answered 24 hours a day for Las Vegas emergencies?",
        answer: "Yes. Our dispatch line at (725) 313-0108 is answered 24/7/365 for urgent water, burst pipe, gas, slab, and pool emergencies in Las Vegas, NV."
      },
      {
        question: "What should I do while waiting for a technician to arrive?",
        answer: "If water is actively flooding, shut off your main water shutoff valve (garage, front exterior wall, or curb meter box). If you smell natural gas or propane, evacuate immediately and call from outside."
      },
      {
        question: "Can I schedule non-emergency pool, slab, or yard-line testing in advance?",
        answer: "Yes. Call (725) 313-0108 anytime to schedule preventative acoustic inspections or pre-purchase plumbing leak checks in Las Vegas."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor, yard & domestic supply lines." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Under-foundation acoustic diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone pool and spa diagnostics." },
      { title: "Gas Leak Detection & Repair", slug: "gas-leak-detection", description: "Natural gas & propane line testing." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "3320 N Pioneer Way HQ dispatch." },
      { name: "Centennial Hills (89131)", slug: "centennial-hills", context: "North valley dispatch." },
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "West-central Las Vegas dispatch." }
    ],
    schemaType: "ContactPage",
    showMap: true
  },

  // 15. BLOG PAGE METADATA
  "blog": {
    slug: "blog",
    urlPath: "/blog/",
    type: "about",
    name: "Leak Detection Blog & Knowledge Base",
    navTitle: "Blog",
    metaTitle: "Leak Detection Cost & Homeowner Guides (2026) | Las Vegas Leak Detection Services",
    metaDescription: "How much does leak detection cost in Las Vegas? See 2026 price ranges, DIY meter checks, bucket test steps, gas safety & LVVWD leak credit guides.",
    primaryKeyword: "Las Vegas leak detection blog",
    secondaryKeywords: [
      "slab leak warning signs",
      "pool bucket test guide",
      "smell gas emergency protocol",
      "leak detection cost guide 2026"
    ],
    semanticEntities: [
      "Slab leak diagnostics",
      "Swimming pool 24-hour bucket test",
      "Combustible natural gas safety",
      "Water meter leak verification"
    ],
    h1: "Las Vegas Leak Detection Blog & Homeowner Diagnostic Guides",
    heroKicker: "Technical Guides • DIY Diagnostics • Emergency Protocols",
    heroSubheadline: "Practical homeowner guides and technical insights from licensed leak detection specialists serving Las Vegas, Nevada.",
    directAnswer: "Explore in-depth guides covering slab leak warning signs, the swimming pool bucket test, natural gas safety procedures, water meter checks, and LVVWD 50% leak credit documentation. For 24/7 dispatch in Las Vegas, NV, call (725) 313-0108.",
    sections: [],
    faqs: [],
    schemaType: "Blog"
  },

  // 16. PRIVACY POLICY PAGE
  "privacy-policy": {
    slug: "privacy-policy",
    urlPath: "/privacy-policy/",
    type: "about",
    name: "Privacy Policy",
    navTitle: "Privacy Policy",
    metaTitle: "Privacy Policy | Las Vegas Leak Detection Services",
    metaDescription: "How Las Vegas Leak Detection Services collects, uses and protects your personal information, and the privacy choices available to you.",
    primaryKeyword: "Las Vegas Leak Detection Services privacy policy",
    secondaryKeywords: [
      "leak detection privacy policy",
      "3320 N Pioneer Way privacy Las Vegas",
      "customer data protection policy"
    ],
    semanticEntities: [
      "Telephone Consumer Protection Act (TCPA)",
      "Consumer data protection protocols",
      "Nevada consumer privacy regulations"
    ],
    h1: "Privacy Policy for Las Vegas Leak Detection Services",
    heroKicker: "Effective Date: October 2026 • Office: 3320 N Pioneer Way, Las Vegas, NV 89129, USA",
    heroSubheadline: "This Privacy Policy describes how Las Vegas Leak Detection Services collects, uses, and safeguards information when you visit our website or contact our Las Vegas service line.",
    directAnswer: "Las Vegas Leak Detection Services maintains its business office at 3320 N Pioneer Way, Las Vegas, NV 89129, USA. We collect only necessary contact and property information (name, telephone number, Las Vegas service address, and leak description) to coordinate leak detection and repair services.",
    sections: [
      {
        heading: "1. Information We Collect",
        subheading: "Data gathered to coordinate diagnostic and repair services",
        paragraphs: [
          "When you contact our team by calling (725) 313-0108 or submitting an inquiry, we collect personal information you voluntarily provide, including your full name, telephone number, service address, email address, and details regarding your water, gas, slab, or pool leak issue.",
          "We do not collect sensitive financial data such as credit card numbers or banking passwords through our website. Payment transactions are handled directly with the servicing contractor."
        ]
      },
      {
        heading: "2. How We Use Your Information",
        subheading: "Purpose of service scheduling and communication",
        paragraphs: [
          "The information you provide is used strictly to communicate with you regarding your service request, connect you with licensed local technicians, provide upfront written estimates, and coordinate service delivery.",
          "We never sell, rent, or trade your personal information to unrelated commercial data brokers."
        ]
      },
      {
        heading: "3. Communications & Telephone Disclosure (TCPA)",
        subheading: "Consent for service-related calls and messages",
        paragraphs: [
          "By providing your telephone number or calling (725) 313-0108, you consent to receive telephone calls and transactional SMS/text messages regarding your appointment schedule and technician arrival times.",
          "Standard carrier message and data rates may apply. You may opt out of non-emergency text communications at any time by replying 'STOP' or notifying our office."
        ]
      },
      {
        heading: "4. Cookies & Website Analytics",
        subheading: "Standard web browsing technologies",
        paragraphs: [
          "Our website uses standard technical cookies and anonymous analytics to understand site performance, visitor navigation paths, and page responsiveness. These cookies can be disabled through your browser settings."
        ]
      },
      {
        heading: "5. Contact Information for Privacy Concerns",
        subheading: "How to reach our office",
        paragraphs: [
          "If you have questions regarding this Privacy Policy or wish to request deletion or correction of your contact records, contact: Las Vegas Leak Detection Services, 3320 N Pioneer Way, Las Vegas, NV 89129, USA, Phone: (725) 313-0108."
        ]
      }
    ],
    faqs: [
      {
        question: "Is my personal phone number sold to unrelated marketing lists?",
        answer: "No. Your phone number is used strictly to coordinate your leak detection appointment and technician arrival."
      },
      {
        question: "How do I request deletion of my contact records?",
        answer: "Call (725) 313-0108 or write to 3320 N Pioneer Way, Las Vegas, NV 89129, USA."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Potable supply line leak diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Concrete slab foundation diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool shell and plumbing line testing." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "3320 N Pioneer Way HQ service area." },
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "Central Spring Valley service area." }
    ],
    schemaType: "WebPage"
  },

  // 17. DISCLAIMER & LICENSING PAGE
  "disclaimer": {
    slug: "disclaimer",
    urlPath: "/disclaimer/",
    type: "about",
    name: "Legal Disclaimer & Licensing",
    navTitle: "Disclaimer",
    metaTitle: "Legal Disclaimer & Licensing | Las Vegas Leak Detection Services",
    metaDescription: "Las Vegas Leak Detection Services is a referral service. Work in Las Vegas, NV is performed by independent licensed contractors. Read our service terms.",
    primaryKeyword: "Las Vegas Leak Detection Services disclaimer licensing",
    secondaryKeywords: [
      "leak detection referral service",
      "independent licensed contractors Las Vegas NV",
      "NSCB plumbing licensing terms",
      "Nevada contractor referral"
    ],
    semanticEntities: [
      "Nevada State Contractors Board (NSCB)",
      "Independent contractor referral service",
      "Limitation of liability terms",
      "Las Vegas service agreements"
    ],
    h1: "Legal Disclaimer & Contractor Licensing Information",
    heroKicker: "Referral Service Terms • Independent Licensed Contractors Serving Las Vegas",
    heroSubheadline: "Transparency and licensing standards for homeowners and commercial property owners in Las Vegas, Nevada.",
    directAnswer: "Las Vegas Leak Detection Services is a customer referral and matching service. All leak detection, plumbing, gas piping, slab excavation, and restoration services in Las Vegas, NV are performed exclusively by independent, third-party licensed contractors holding valid Nevada State Contractors Board (NSCB) licenses. Las Vegas Leak Detection Services does not directly employ plumbers or perform plumbing work.",
    sections: [
      {
        heading: "1. Contractor Matching & Referral Service",
        subheading: "Independent plumbing and leak specialists serving Las Vegas, NV",
        paragraphs: [
          "Las Vegas Leak Detection Services operates as an independent lead generation and customer matching portal connecting property owners in Las Vegas, Nevada—including Northwest Las Vegas (89129), Centennial Hills (89131), Summerlin, Spring Valley, Downtown Las Vegas, and Paradise / Enterprise—with pre-screened, independent plumbing contractors.",
          "When you contact our dispatch line at (725) 313-0108, your request is routed to an independent contractor possessing appropriate Nevada state trade licenses, commercial liability insurance, and electronic leak detection equipment."
        ]
      },
      {
        heading: "2. Independent Contractor Responsibility & Licensing",
        subheading: "Nevada State Contractors Board (NSCB) compliance",
        paragraphs: [
          "Each independent contractor dispatched to your property is solely responsible for evaluating job site conditions, executing technical diagnostics, providing itemized repair estimates, and completing all plumbing or gas repairs in compliance with the Nevada State Contractors Board (NSCB) and Las Vegas / Clark County municipal codes.",
          "Property owners are encouraged to verify contractor license numbers, bond standing, and insurance coverage directly with the servicing contractor prior to authorizing major excavation or repair work."
        ]
      },
      {
        heading: "3. Limitation of Liability & Warranties",
        subheading: "Service terms and guarantees",
        paragraphs: [
          "Las Vegas Leak Detection Services does not guarantee, warrant, or assume liability for the work, acts, omissions, or representations of independent service providers. Any warranties, guarantees, or service contracts are entered into directly between the property owner and the servicing contractor.",
          "Emergency dispatch arrival estimates depend on traffic, weather conditions, distance, and active call volumes."
        ]
      },
      {
        heading: "4. Business Office & Questions",
        subheading: "Contact our administrative office",
        paragraphs: [
          "If you have questions regarding these licensing disclosures or service policies, contact our office at 3320 N Pioneer Way, Las Vegas, NV 89129, USA, or call (725) 313-0108."
        ]
      }
    ],
    faqs: [
      {
        question: "Does Las Vegas Leak Detection Services perform plumbing work directly?",
        answer: "No. Las Vegas Leak Detection Services connects property owners with pre-screened, independent plumbing contractors licensed by the Nevada State Contractors Board (NSCB)."
      },
      {
        question: "Are dispatched contractors licensed and insured in Nevada?",
        answer: "Yes. Independent plumbing professionals in our network maintain active NSCB licenses, general liability insurance, and workers' compensation coverage."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Potable supply line leak diagnostics." },
      { title: "Gas Leak Detection & Repair", slug: "gas-leak-detection", description: "24/7 emergency gas line diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Sub-foundation acoustic diagnostics." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "3320 N Pioneer Way HQ service area." },
      { name: "Centennial Hills (89131)", slug: "centennial-hills", context: "North Las Vegas Valley service area." }
    ],
    schemaType: "WebPage"
  },

  // 18. SITEMAP PAGE
  "sitemap": {
    slug: "sitemap",
    urlPath: "/sitemap/",
    type: "about",
    name: "Sitemap | Las Vegas Leak Detection Services",
    navTitle: "Sitemap",
    metaTitle: "Sitemap | Las Vegas Leak Detection Services Directory",
    metaDescription: "Browse every Las Vegas Leak Detection Services page: water, gas, slab & pool leak detection, plus Las Vegas, NV neighborhood pages across 89129 & metro.",
    primaryKeyword: "Las Vegas Leak Detection Services sitemap",
    secondaryKeywords: [
      "Las Vegas leak detection directory",
      "Las Vegas plumbing site map",
      "water gas slab pool leak navigation"
    ],
    semanticEntities: [
      "Las Vegas Leak Detection Services site index",
      "Las Vegas district navigation directory",
      "Las Vegas 89129 service pages"
    ],
    h1: "Las Vegas Leak Detection Services Sitemap & Directory",
    heroKicker: "Complete Directory • Las Vegas, Nevada Services & Districts",
    heroSubheadline: "Easily navigate every leak detection service page, Las Vegas neighborhood guide, technical article, and company policy.",
    directAnswer: "Browse every page on Las Vegas Leak Detection Services: water leak detection, 24/7 gas leak testing, slab leak acoustic locating, swimming pool hydrophone testing, cost guides, and dedicated Las Vegas neighborhood pages covering 89129 and the metro valley.",
    sections: [
      {
        heading: "Core Leak Detection Service Pages",
        subheading: "Non-invasive electronic diagnostic capabilities in Las Vegas",
        paragraphs: [
          "Specialized non-destructive services protecting homes, slabs, yards, irrigation mains, and pools in Las Vegas, NV:"
        ],
        bulletPoints: [
          "Home / Main Hub: Las Vegas Water, Gas, Slab & Pool Leak Detection",
          "Water Leak Detection & Repair: Acoustic & thermal diagnostics for hidden pipes",
          "Gas Leak Detection & Emergency Repair: 24/7 electronic sniffing and Southwest Gas clearances",
          "Slab Leak Detection & Repair: Sub-concrete foundation acoustic geophones & infrared",
          "Pool Leak Detection & Repair: Underwater hydrophones & precision dye testing",
          "Underground & Irrigation Pipe Leaks: Buried potable mains, drip & irrigation lines",
          "24/7 Emergency Leak Diagnostics: Immediate rapid dispatch in Las Vegas"
        ]
      },
      {
        heading: "Las Vegas, Nevada Neighborhoods & Service Areas",
        subheading: "Complete coverage across 89129 & metro Las Vegas ZIP codes",
        paragraphs: [
          "Dedicated local neighborhood pages addressing Las Vegas's caliche soils, post-tension slabs, hard-water scaling, and high-PSI delivery zones:"
        ],
        bulletPoints: [
          "Northwest Las Vegas & Lone Mountain (89129 / 89108)",
          "Centennial Hills & Skye Canyon (89131 / 89149)",
          "Downtown Las Vegas & Charleston Corridor (89101)",
          "Paradise, Silverado Ranch & Enterprise (89123)",
          "Spring Valley Core (89103 / 89147)",
          "The Lakes & Peccole Ranch (89117)",
          "Spanish Trail Estates (89113)",
          "Summerlin South (89135 / 89148)",
          "Rhodes Ranch (89148)"
        ]
      },
      {
        heading: "Educational Guides & Cost Resources",
        subheading: "Technical knowledge base and price guides",
        paragraphs: [
          "In-depth articles covering DIY leak testing, water bill credits, and leak detection pricing:"
        ],
        bulletPoints: [
          "Blog & Knowledge Base Main Hub",
          "Pool, Sprinkler & Backyard Leaks Guide",
          "Desert Homeowner’s Leak Detection Guide (2026)",
          "5 Warning Signs of a Slab Leak",
          "The 24-Hour Bucket Test: How to Tell if Your Pool is Leaking or Evaporating",
          "What to Do When You Smell Natural Gas in Your Home: Step-by-Step Safety Guide",
          "How Caliche & Subsurface Soil Impact Underground Plumbing",
          "How to Read Your Water Meter to Detect Hidden Leaks Before a High Bill",
          "How to Get a Utility Leak Credit on High Water Bills",
          "Post-Tension Slab Leak Repair in Las Vegas: Spot Patch vs. Overhead PEX Re-Route",
          "Southwest Gas Red-Tag Meter Lockout in Las Vegas: Pressure Testing & Unlock Guide"
        ]
      },
      {
        heading: "Company Information & Legal",
        subheading: "Office details, licensing, and policies",
        paragraphs: [
          "Transparency and compliance information for Las Vegas Leak Detection Services (office: 3320 N Pioneer Way, Las Vegas, NV 89129, USA; telephone: (725) 313-0108):"
        ],
        bulletPoints: [
          "About Us: Las Vegas Licensed Specialist Network",
          "Contact & Dispatch: 24/7 Emergency Line & Office Info",
          "How It Works: 5-Step Non-Invasive Diagnostic Process",
          "Privacy Policy: Consumer data protection & TCPA compliance",
          "Legal Disclaimer & Licensing: Referral service terms & NSCB contractor disclosures"
        ]
      }
    ],
    faqs: [
      {
        question: "Which city does Las Vegas Leak Detection Services serve?",
        answer: "Las Vegas Leak Detection Services serves Las Vegas, Nevada—covering Northwest Las Vegas (89129 / 89108), Centennial Hills (89131 / 89149), Summerlin South, The Lakes, Spring Valley, Spanish Trail, Rhodes Ranch, Downtown Las Vegas, and Paradise / Enterprise. Call (725) 313-0108."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection", slug: "water-leak-detection", description: "Pinpoint hidden supply lines." },
      { title: "Gas Leak Detection", slug: "gas-leak-detection", description: "24/7 gas line safety testing." }
    ],
    relatedLocations: [
      { name: "Northwest Las Vegas (89129)", slug: "las-vegas", context: "3320 N Pioneer Way HQ hub." },
      { name: "Centennial Hills (89131)", slug: "centennial-hills", context: "North valley hub." }
    ],
    schemaType: "WebPage"
  },

  // 19. SPRING VALLEY LEAK DETECTION: A DESERT HOMEOWNER'S GUIDE
  "spring-valley-leak-detection-guide": {
    slug: "spring-valley-leak-detection-guide",
    urlPath: "/blog/spring-valley-leak-detection-guide/",
    type: "about",
    name: "Spring Valley Leak Detection: A Desert Homeowner’s Guide",
    navTitle: "Desert Leak Guide",
    metaTitle: "Spring Valley Leak Detection: A Desert Homeowner’s Guide",
    metaDescription: "Rising water bill in Spring Valley, Las Vegas? Learn where desert homes hide leaks, what a pro visit involves, and pricing factors. Call (725) 313-0108.",
    primaryKeyword: "Spring Valley leak detection guide",
    secondaryKeywords: [
      "desert home leak detection",
      "Las Vegas slab leak cost",
      "water bill spike Spring Valley NV",
      "leak detection cost estimate"
    ],
    semanticEntities: [
      "Spring Valley Nevada residential plumbing",
      "Clark County caliche soil and slab leaks",
      "Non-invasive ultrasonic acoustic diagnostics",
      "Las Vegas Valley Water District high bill credits"
    ],
    h1: "Spring Valley Leak Detection: Finding Hidden Water Problems in a Desert Home",
    heroKicker: "Desert Homeowner’s Guide • Spring Valley, NV",
    heroSubheadline: "Practical advice on finding hidden water, slab, and gas leaks in Southern Nevada homes before structural damage and high bills occur.",
    directAnswer: "Rising water bill in Spring Valley, Las Vegas? Learn where desert homes hide leaks, what a pro visit involves, and what shapes pricing. Call (725) 313-0108.",
    sections: [
      {
        heading: "Why Desert Homes Hide Leaks So Well",
        subheading: "Evaporative climate, slab foundations, and mineral-heavy hard water",
        paragraphs: [
          "Dry air and hot soil can make a leak harder to spot. Moisture evaporates quickly in Southern Nevada’s arid climate, so the telltale puddle or dark wall stain may never show up on the surface.",
          "Add slab foundations, copper lines buried under poured concrete patios, and complex drip irrigation systems running underground through hard caliche, and a severe leak can quietly run for months with zero visible clues.",
          "Furthermore, Clark County tap water has high mineral content (calcium and magnesium), leaving heavy mineral buildup that wears on copper pipe walls, valves, and solder fittings over time."
        ],
        bulletPoints: [
          "Arid desert air accelerates evaporation, masking subsurface water pooling",
          "Slab-on-grade foundations route pressurized lines directly beneath structural concrete",
          "Hard water mineral scaling and caliche friction thin pipes from the inside out"
        ]
      },
      {
        heading: "Five Quick Checks You Can Do Today",
        subheading: "Simple DIY tests to verify your plumbing system before calling",
        paragraphs: [
          "Before calling anyone, a few simple checks can tell you whether a leak is likely active on your property:"
        ],
        bulletPoints: [
          "Run a water meter test: Turn off every tap, faucet, ice maker, and appliance, then watch your front yard meter. If the low-flow dial or digital indicator keeps moving, pressurized water is escaping somewhere on your property.",
          "Try a toilet dye test: Place 4–5 drops of food coloring or a dye tablet in the toilet tank without flushing. Wait 15 minutes; if colored water seeps into the bowl, your flapper or fill valve is leaking silently.",
          "Walk your irrigation zones: Check your yard while the timer is running. Soggy patches in desert gravel, geysers, bubbling emitter lines, or unusually weak spray heads often point to a broken underground lateral line.",
          "Watch the pool level: Normal Las Vegas evaporation accounts for 1/4 to 1/2 inch per day. A drop that exceeds normal evaporation can signal a leak in the pool skimmer, return plumbing, or gunite shell.",
          "Compare recent utility bills: A steady climb in CCFs or gallons on your Las Vegas Valley Water District (LVVWD) bill with no change in household habits is a strong hint of a subterranean rupture."
        ]
      },
      {
        heading: "What a Professional Visit Looks Like",
        subheading: "Non-invasive electronic acoustic, thermal, and pressure decay diagnostic stages",
        paragraphs: [
          "A licensed technician usually begins with questions: when did your water bill change, and where have you noticed anything odd such as warm tiles, running water sounds, or damp baseboards? From there, the diagnostic work moves systematically through non-invasive stages:",
          "1. Pressure Testing: Isolates whether the pressure drop is occurring on the potable cold supply, hot water recirculating loop, or dedicated irrigation lines.",
          "2. Acoustic Listening: Electronic ground microphones and amplified listening discs pick up the faint ultrasonic frequency of water escaping a pinhole pipe breach beneath tile or concrete.",
          "3. Thermal Imaging: High-resolution infrared cameras reveal subtle temperature differentials caused by concealed hot water slab leaks or moisture accumulation inside drywall cavities.",
          "4. Tracer Gas or Camera Inspection: Non-toxic safe helium/nitrogen tracer gas or fiber-optic micro-cameras are deployed to trace stubborn, deeply buried lines."
        ],
        bulletPoints: [
          "Non-invasive tools pinpoint the rupture within inches without exploratory trenching",
          "Repairs require opening only a minimal, targeted patch rather than whole floors",
          "You receive an audit-ready written diagnostic report for insurance and LVVWD credits"
        ]
      },
      {
        heading: "Water, Slab, or Gas: Knowing the Difference",
        subheading: "Distinguishing potable, structural slab, and combustible gas line issues",
        paragraphs: [
          "Water leaks inside walls, under slabs, and in landscaping call for fundamentally different diagnostic equipment. Slab leaks sit beneath the concrete floor and often show up as localized warm spots underfoot, unexplained indoor humidity, or the sound of hissing water at night.",
          "Gas is a separate, critical life-safety matter entirely. Larger commercial properties and multi-unit complexes frequently hire specialized gas leak survey companies to inspect every line and document the findings with calibrated parts-per-million (PPM) sensors.",
          "EMERGENCY GAS PROTOCOL: If you ever smell rotten eggs (mercaptan) or hear loud hissing near a gas furnace, water heater, or meter, leave the building immediately on foot. Do not use light switches, phones, or garage door openers. Call Southwest Gas at (877) 860-6020 or 911 from outside, then call our licensed gas testing team for code-compliant pressure testing."
        ],
        bulletPoints: [
          "Slab leaks create warm floor tiles, sound of rushing water, and foundation dampness",
          "Combustible gas leaks require immediate evacuation and emergency notification"
        ]
      },
      {
        heading: "Understanding the Price Tag & Leak Detection Cost Factors",
        subheading: "Access, scope, diagnostic equipment, and insurance report inclusions",
        paragraphs: [
          "Most homeowners start with one question: how much does leak detection cost? There’s no single flat number because no two Spring Valley houses or plumbing layouts are alike. Leak detection costs generally follow how complicated the physical search is. A quick diagnostic check on an exposed fixture line is a small, straightforward job, while tracing a concealed line under a finished post-tension slab takes specialized acoustic gear and technician time.",
          "Key factors that move the price include:",
          "• Access: Slab leak detection cost rises when pipes sit beneath thick structural concrete, hardwood flooring, or imported stone tile.",
          "• Scope: Gas leak detection cost depends on property square footage, pipe length, and how many appliance drops require pressure decay isolation.",
          "• Time & Depth: Leak locating cost grows when irrigation lines are buried deep in rocky caliche soil or run beneath paved driveways.",
          "Always ask for a written leak detection cost estimate before work begins. Find out what the cost of leak detection includes, such as an itemized diagnostic report for your homeowners insurance, and whether surgical repairs or pipe reroutes are billed separately. Before approving any cost for leak detection, ask the technician to walk you through each line item.",
          "Whatever the initial leak detection cost turns out to be, finding and isolating a leak early is almost always thousands of dollars cheaper than repairing catastrophic sub-slab foundation shifting or black mold damage later."
        ],
        bulletPoints: [
          "Surgical acoustic detection saves thousands compared to exploratory demolition",
          "Reputable providers provide written upfront estimates before beginning work",
          "Detailed diagnostic reports can be submitted to LVVWD for 50% leak bill credits"
        ]
      },
      {
        heading: "A Note for Landlords and Property Managers",
        subheading: "Protecting tenants, mitigating mold liabilities, and securing utility rebates",
        paragraphs: [
          "Rental property owners and HOA managers in Spring Valley have extra reasons to act fast: tenant comfort, water-damage liability, and escalating turnover costs.",
          "Documented findings and digital pressure decay logs from a licensed professional visit make insurance claim conversations, LVVWD high bill adjustments, and contractor scheduling much smoother and dispute-free."
        ],
        bulletPoints: [
          "Written inspection certificates satisfy tenant habitability requirements",
          "Immediate response prevents expensive drywall mold remediation disputes"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does a professional leak detection visit take?",
        answer: "Many standard residential inspections take between 1 to 3 hours, depending on the property size, number of plumbing fixtures, and how stubborn the underground leak is."
      },
      {
        question: "Will walls or floors be opened during the detection process?",
        answer: "No. Professional leak detection is 100% non-invasive. Acoustic listening discs, infrared thermal imaging, and pressure decay gauges locate the leak through floors and drywall. Only the confirmed spot needs to be opened for the actual repair."
      },
      {
        question: "Does homeowners insurance help cover the cost?",
        answer: "Many Nevada homeowners policies cover resulting water damage repairs and access to tear out and replace flooring for a covered plumbing peril, though policies vary. Always request an itemized diagnostic report to submit to your insurer."
      },
      {
        question: "What should I do before the technician arrives at my Spring Valley home?",
        answer: "Secure all pets, ensure unobstructed access to the main water shutoff valve (garage or front hose bib) and the front yard street water meter box, and have a copy of your recent LVVWD water bill handy."
      }
    ],
    relatedServices: [
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Sub-concrete copper pipe locating without floor tear-out." },
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Potable supply line and acoustic pinhole tracing." },
      { title: "Gas Leak Detection & Repair", slug: "gas-leak-detection", description: "Emergency combustible gas sniffing and safety testing." }
    ],
    relatedLocations: [
      { name: "Spring Valley Core (89103)", slug: "spring-valley-center", context: "Rapid 30-min dispatch." },
      { name: "The Lakes (89117)", slug: "the-lakes", context: "Desert community plumbing." },
      { name: "Spanish Trail (89113)", slug: "spanish-trail", context: "Estate home slab diagnostics." }
    ],
    schemaType: "TechArticle"
  }
};
