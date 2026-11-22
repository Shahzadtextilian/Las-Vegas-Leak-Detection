/**
 * Site content and SEO architecture data for Leak Detection NV.
 * Specializing in Water, Gas, Slab, and Swimming Pool Leak Detection & Repair.
 * Statewide Nevada coverage across Southern, Northern & Rural Nevada cities.
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
export const BRAND_NAME = "Leak Detection NV";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61595284141007";
export const BUSINESS_ADDRESS = {
  streetAddress: "6875 Groveview Ln",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89103",
  targetArea: "Nevada Statewide",
  telephone: "+1-725-313-0108",
};

export const sitePages: Record<string, PageContent> = {
  // 1. HOMEPAGE: NEVADA STATEWIDE AUTHORITY HUB
  home: {
    slug: "",
    urlPath: "/",
    type: "home",
    name: "Leak Detection NV — Statewide Water, Gas, Slab & Pool Specialists",
    navTitle: "Home",
    metaTitle: "Leak Detection Across Nevada | All NV Cities (725) 313-0108",
    metaDescription: "Hidden water, slab, pool or gas leak anywhere in Nevada? Connect 24/7 with NSCB-licensed pros in Las Vegas, Henderson, Reno, Sparks & Carson City. Call (725) 313-0108.",
    primaryKeyword: "leak detection Nevada",
    secondaryKeywords: [
      "water leak detection Las Vegas NV",
      "leak detection Reno Sparks NV",
      "slab leak repair Henderson NV",
      "gas leak detection Carson City Nevada",
      "pool leak detection North Las Vegas",
      "leak detection Spring Valley NV"
    ],
    semanticEntities: [
      "Nevada State Contractors Board (NSCB)",
      "Las Vegas Valley Water District (LVVWD)",
      "Truckee Meadows Water Authority (TMWA)",
      "Southwest Gas & NV Energy safety protocols",
      "Southern Nevada caliche soil & Northern Nevada freeze-thaw",
      "Hydrophone underwater acoustic sensors",
      "Combustible gas electronic sniffing"
    ],
    h1: "Precision Water, Gas, Slab & Pool Leak Detection Across All Nevada Cities",
    heroKicker: "Nevada Statewide 24/7 Dispatch • Southern, Northern & Rural Cities",
    heroSubheadline: "Hidden water leaks, hazardous gas odors, sub-slab ruptures, and vanishing pool water threaten Nevada properties from Las Vegas, Henderson, and Spring Valley to Reno, Sparks, and Carson City. Connect 24/7 with NSCB-licensed specialists near you.",
    directAnswer: "Leak Detection NV provides 24/7 non-invasive electronic water, natural gas, concrete slab, and swimming pool leak detection across every major city in Nevada—including Las Vegas, Henderson, North Las Vegas, Spring Valley, Summerlin, Reno, Sparks, Carson City, Pahrump, Mesquite, Boulder City, and Elko. Coordinated from our Las Vegas hub at 6875 Groveview Ln (89103), our Nevada State Contractors Board (NSCB) licensed contractor network dispatches technicians equipped with ultrasonic acoustic locators, FLIR thermal imaging, pool hydrophones, and digital gas sniffers to isolate leaks within inches. Call (725) 313-0108 for 24/7 dispatch.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Nevada statewide emergency leak detection and plumbing diagnostic service",
    imageCaption: "Non-invasive electronic acoustic, thermal, and hydrophone diagnostics dispatched across Nevada cities 24/7.",
    sections: [
      {
        heading: "Four Specialized Leak Detection Capabilities Across Nevada",
        subheading: "Comprehensive protection for residential, commercial, and HOA properties statewide",
        paragraphs: [
          "From extreme Mojave Desert heat in Clark County to sub-freezing Sierra Nevada winters in Washoe, Carson, and Elko counties, Nevada plumbing systems endure intense thermal stress. Our statewide dispatch network connects property owners with specialists across four critical disciplines: potable water systems, hazardous natural gas and propane lines, concrete slab foundations, and backyard swimming pools.",
          "Rather than tearing up driveways, jackhammering random tile floors, or draining pools prematurely, dispatched Nevada technicians deploy amplified acoustic ground microphones, FLIR thermal imaging cameras, combustible gas PPM sniffers, and underwater hydrophones to locate the exact leak point without exploratory demolition."
        ],
        bulletPoints: [
          "Water Leak Detection: Pinpointing concealed supply lines, high-pressure yard main breaks, freeze-burst pipes, and hidden wall cavity leaks",
          "Gas Leak Detection: Rapid identification of natural gas and propane line leaks, meter lock clearances, and code-compliant black iron or CSST re-piping",
          "Slab Leak Detection: Non-invasive sub-foundation acoustic diagnostics, isolating copper and PEX ruptures beneath post-tension concrete slabs",
          "Pool & Spa Leak Detection: Electronic listening and precision dye testing for pool skimmers, returns, light conduits, and underground suction lines"
        ]
      },
      {
        heading: "Full Nevada City & Regional Coverage: Southern, Northern & Rural NV",
        subheading: "Dedicated regional dispatch spanning every major Nevada municipality",
        paragraphs: [
          "Headquartered in Clark County at 6875 Groveview Ln, Las Vegas, NV 89103, Leak Detection NV coordinates licensed regional contractors across the entire Silver State—from dense metropolitan corridors in Southern Nevada to high-elevation valleys along the Sierra front and I-80 rural communities.",
          "Whether you need rapid 30–60 minute emergency response in Las Vegas, Spring Valley, Henderson, or North Las Vegas, or same-day diagnostic dispatch in Reno, Sparks, Carson City, Tahoe, Pahrump, Mesquite, Boulder City, or Elko, one call routes you directly to vetted regional pros."
        ],
        bulletPoints: [
          "Clark County & Southern NV: Las Vegas, Henderson, North Las Vegas, Spring Valley, Paradise, Enterprise, Summerlin South, Whitney, Sunrise Manor, Boulder City, Mesquite & Laughlin",
          "Washoe County & Lake Tahoe: Reno, Sparks, Spanish Springs, Sun Valley, Verdi, Incline Village & Crystal Bay",
          "Capital, Western & Nye Corridor: Carson City, Minden, Gardnerville, Dayton, Fernley, Fallon & Pahrump",
          "Northern & Eastern Rural Nevada: Elko, Spring Creek, Winnemucca, Lovelock, Ely & Tonopah"
        ]
      },
      {
        heading: "Nevada Climate Hazards: Caliche Heat vs. Northern Freeze-Thaw",
        subheading: "Why properties across Nevada experience severe underground pipe failures",
        paragraphs: [
          "Southern Nevada cities like Las Vegas, Henderson, Spring Valley, and Mesquite sit atop rock-hard calcium carbonate caliche layers paired with 110°F+ summer heat and high municipal water pressure. Copper pipes embedded under concrete slabs rub against abrasive caliche during thermal expansion until pinhole leaks form.",
          "Across Northern and Central Nevada—including Reno, Sparks, Carson City, Incline Village, Fernley, and Elko—winter overnight freezes below 10°F, seismic valley shifting, and aging galvanized or copper supply lines cause exterior hose bibs, crawlspace manifolds, and buried service mains to split without immediate surface flooding."
        ],
        callout: {
          title: "Statewide Emergency Gas Leak Protocol",
          body: "If you smell rotten eggs (mercaptan) or hear hissing near a gas meter, furnace, or propane tank anywhere in Nevada, evacuate all occupants immediately on foot. Do not flip switches or use phones indoors. From outside, call 911 or your local gas utility (Southwest Gas or NV Energy), then call (725) 313-0108 for certified pressure testing and repair."
        }
      },
      {
        heading: "Advanced Non-Invasive Diagnostic Technology & Equipment",
        subheading: "Pinpoint accuracy that protects your slab, walls, and landscaping",
        paragraphs: [
          "Every dispatched team in our Nevada network utilizes calibrated, non-invasive electronic diagnostic instruments to verify exact leak coordinates before opening a single wall or section of concrete.",
          "By combining ultrasonic ground listening discs, high-resolution FLIR thermal cameras, inert tracer gas sniffing, and submersible pool hydrophones, contractors isolate leaks accurately while cutting restoration costs dramatically."
        ],
        bulletPoints: [
          "Ultrasonic acoustic sensors to hear pressurized water escaping beneath concrete slabs and asphalt",
          "FLIR thermal infrared cameras revealing concealed moisture trails behind walls and subfloors",
          "Digital PPM combustible gas wands for natural gas and rural propane distribution lines",
          "Underwater hydrophone listening and precision dye testing for residential and HOA pools"
        ]
      },
      {
        heading: "Nevada Water Utility Credits & Homeowners Insurance Support",
        subheading: "Documentation formatted for LVVWD, TMWA, Henderson Utilities & NV insurers",
        paragraphs: [
          "A hidden yard main or slab break can trigger massive tiered surcharges from Nevada water agencies—including the Las Vegas Valley Water District (LVVWD), City of Henderson Utilities, North Las Vegas Utilities, Truckee Meadows Water Authority (TMWA) in Reno/Sparks, Carson City Public Works, and Virgin Valley Water District.",
          "Upon completing diagnostics and repairs, dispatched contractors provide detailed, timestamped written reports and repair invoices designed to support municipal leak credit adjustments as well as Nevada homeowners insurance access-and-egress claims."
        ]
      },
      {
        heading: "Licensed Nevada Contractors Under Strict NSCB C-1 Standards",
        subheading: "Transparent upfront pricing and verified trade compliance statewide",
        paragraphs: [
          "Plumbing, gas piping, and pressurized fire or potable line repairs across Nevada are regulated by the Nevada State Contractors Board (NSCB). Working with unvetted general handymen risks code violations, denied utility unlocks, and invalid insurance paperwork.",
          "Our statewide matching desk connects you strictly with independent plumbing and leak detection contractors maintaining active NSCB licensing, liability coverage, and calibrated non-destructive leak testing instrumentation."
        ],
        bulletPoints: [
          "Clear written diagnostic and repair estimates prior to invasive work",
          "Static pressure decay testing to confirm complete system integrity post-repair",
          "Direct spot repairs, trenchless yard pulls, or overhead PEX repipe solutions",
          "24/7/365 phone triage at (725) 313-0108 for urgent residential and commercial calls"
        ]
      }
    ],
    faqs: [
      {
        question: "Which cities in Nevada do you cover for leak detection?",
        answer: "Leak Detection NV coordinates licensed leak detection specialists across all major Nevada cities—including Las Vegas, Henderson, North Las Vegas, Spring Valley, Summerlin, Boulder City, Mesquite, Laughlin, Pahrump, Reno, Sparks, Carson City, Incline Village, Fernley, Fallon, Winnemucca, and Elko. Call (725) 313-0108 for 24/7 dispatch."
      },
      {
        question: "Who should I call for verified leak detection in Nevada?",
        answer: "Leak Detection NV connects homeowners and property managers with specialists adhering to Nevada State Contractors Board (NSCB) C-1 plumbing and contractor licensing standards. Coordinated 24/7 from our Las Vegas hub at 6875 Groveview Ln, dispatched technicians use ultrasonic acoustic ground geophones, FLIR infrared thermal cameras, pool hydrophones, and calibrated PPM combustible gas sniffers. Call (725) 313-0108."
      },
      {
        question: "How fast can an emergency leak technician arrive?",
        answer: "Across the Las Vegas Valley (Las Vegas, Spring Valley, Henderson, North Las Vegas) and major Reno/Sparks metro corridors, mobile emergency arrival averages 30 to 60 minutes. Same-day and priority dispatch is available across Carson City, Pahrump, Mesquite, Boulder City, and surrounding Nevada communities 24 hours a day."
      },
      {
        question: "How do you detect a hidden water leak without breaking floors or walls?",
        answer: "Dispatched specialists use electronic acoustic listening devices that amplify pressurized water escaping pipes beneath concrete or behind drywall, paired with FLIR thermal imaging and safe tracer gas to mark the exact rupture point before any repair begins."
      },
      {
        question: "How much does leak detection cost in Nevada?",
        answer: "Non-invasive electronic leak detection across Nevada generally ranges from $195 to $395 depending on property size and system complexity (interior supply line vs. concrete slab manifold or pool hydrophone inspection). Dispatched contractors provide upfront pricing before work starts and supply documentation suitable for insurance and municipal utility credits."
      },
      {
        question: "Do Northern Nevada homes have different leak risks than Southern Nevada?",
        answer: "Yes. Southern Nevada properties (Las Vegas, Henderson, Spring Valley, Mesquite) most often suffer copper slab abrasion from caliche soil, extreme heat, and high municipal PSI, while Northern Nevada cities (Reno, Sparks, Carson City, Tahoe, Elko) face winter freeze-thaw pipe bursts, crawlspace manifold splits, and seismic ground movement."
      },
      {
        question: "How do I qualify for a water bill leak credit with LVVWD or TMWA?",
        answer: "After locating and fixing a concealed leak, submit your licensed contractor's itemized diagnostic invoice and proof of repair to your utility—such as the Las Vegas Valley Water District (LVVWD), City of Henderson, or Truckee Meadows Water Authority (TMWA). Utilities evaluate documented hidden leaks for excess consumption credits."
      },
      {
        question: "Does homeowners insurance cover slab leak detection and repair in Nevada?",
        answer: "Many Nevada homeowners policies cover the cost of locating a sudden slab leak, opening access through flooring/concrete, and restoring resultant water damage, while actual pipe replacement may vary by policy. Dispatched contractors provide detailed diagnostic documentation for your adjuster."
      },
      {
        question: "What should I do if I smell natural gas or propane in my home?",
        answer: "Immediately evacuate all people and pets outdoors to fresh air. Do not operate light switches, phones, or garage doors inside. Call 911 and your utility (Southwest Gas or NV Energy) from outside, then call (725) 313-0108 for certified pressure testing and gas line repair."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Pinpoint hidden supply lines and indoor leaks across Nevada." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Electronic sniffing and code-compliant gas pipe repairs." },
      { title: "Precision Slab Leak Detection", slug: "slab-leak-detection", description: "Sub-foundation acoustic and thermal testing statewide." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone and dye testing for pools and spas." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Full Las Vegas Valley 24/7 dispatch." },
      { name: "Henderson & Green Valley", slug: "henderson", context: "Southern Clark County residential & pool leaks." },
      { name: "North Las Vegas", slug: "north-las-vegas", context: "Aliante, Eldorado & commercial water mains." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Northern Nevada freeze-thaw & TMWA leak diagnostics." },
      { name: "Sparks & Spanish Springs", slug: "sparks", context: "Washoe Valley slab, yard & crawlspace leaks." },
      { name: "Carson City & Minden", slug: "carson-city", context: "Capital corridor & Carson Valley diagnostics." },
      { name: "Spring Valley Core", slug: "spring-valley-center", context: "Central 6875 Groveview Ln dispatch hub." }
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
    metaTitle: "Water & Slab Leak Detection Across Nevada | No Digging (725) 313-0108",
    metaDescription: "High water bill or wet spots anywhere in Nevada? Acoustic and thermal imaging pinpoints hidden pipe leaks from Las Vegas to Reno without tearing up floors. Call (725) 313-0108.",
    primaryKeyword: "water leak detection Nevada",
    secondaryKeywords: [
      "hidden water leak repair Las Vegas NV",
      "water pipe leak detection Reno Sparks",
      "high water bill leak detection Henderson",
      "main water line leak repair Nevada"
    ],
    semanticEntities: [
      "Las Vegas Valley Water District (LVVWD) & TMWA smart meter alerts",
      "Ultrasonic acoustic pipe listening",
      "FLIR infrared thermal moisture detection",
      "Potable water supply line pressure decay",
      "Pinhole copper pipe corrosion & freeze-thaw splits"
    ],
    h1: "Non-Invasive Water Leak Detection & Repair Across Nevada",
    heroKicker: "All Nevada Cities • Stop Water Damage Without Exploratory Demolition",
    heroSubheadline: "Pressurized potable water leaks inside walls, ceilings, crawlspaces, and yard lines trigger costly structural damage and utility spikes. Connect 24/7 with licensed leak specialists across Las Vegas, Henderson, Reno, Sparks, Carson City, and statewide.",
    directAnswer: "Water leak detection employs ultrasonic listening devices, thermal imaging, and digital pressure-decay testing to pinpoint hidden leaks without unnecessary drywall cutting or excavation. Dispatched Nevada technicians locate the rupture across Southern and Northern NV cities and perform durable copper, PEX, or main line repairs.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Service technician performing non-invasive water leak diagnostics in Nevada",
    imageCaption: "Mobile leak detection units carry acoustic locators and digital line-pressurizing equipment across Nevada.",
    sections: [
      {
        heading: "Detecting Hidden Potable Water Leaks in Spring Valley",
        subheading: "Advanced non-destructive diagnostic methodology",
        paragraphs: [
          "A small pinhole leak measuring just 1/16th of an inch can waste over 25,000 gallons of water per month, leading to exorbitant penalties from the Las Vegas Valley Water District. Even worse, water escaping behind drywall creates mold blooms within 48 hours in warm Nevada climates.",
          "Dispatched technicians never guess where water is coming from. By combining digital acoustic ground microphones that capture the high-frequency hiss of pressurized water with FLIR thermal imaging cameras that detect temperature changes caused by moisture, technicians pinpoint the rupture within inches."
        ],
        bulletPoints: [
          "Pinpoint leaks behind painted drywall, under cabinets, and within ceiling spaces",
          "Pressure isolation testing to determine whether leaks originate indoors or in main yard lines",
          "Digital inspection documentation for homeowner insurance property claims",
          "Durable spot repairs using commercial-grade braze fittings or freeze-resilient PEX piping"
        ]
      },
      {
        heading: "Common Sources of Domestic Water Leaks",
        subheading: "Where residential water supply lines fail most frequently",
        paragraphs: [
          "In Spring Valley homes constructed between 1980 and 2010, type-M copper piping is frequently installed. The mineral-heavy municipal water supply gradually erodes the inner walls of copper lines, particularly near soldered elbows and tee connections.",
          "Additionally, high municipal water pressure exceeding 80 PSI can stress supply lines to toilets, washing machines, and reverse osmosis filtration systems. Dispatched plumbers evaluate system pressure and install Pressure Reducing Valves (PRVs) to safeguard your home against future ruptures."
        ]
      },
      {
        heading: "Local Spring Valley Water Utility Alignment",
        subheading: "Resolving smart meter continuous flow notifications",
        paragraphs: [
          "The Las Vegas Valley Water District (LVVWD) utilizes smart automated water meters that alert homeowners to continuous water flow. If you receive an automated leak alert or high consumption warning, call our dispatch line immediately.",
          "Dispatched technicians verify whether the leak is on the customer side of the meter and provide an official repair receipt suitable for submitting an LVVWD leak adjustment credit."
        ]
      }
    ],
    faqs: [
      {
        question: "How much does water leak detection cost in Spring Valley?",
        answer: "Standard electronic water leak detection pricing depends on the size of the home and whether the leak is indoors or underground. Dispatched contractors provide transparent, upfront pricing before beginning testing."
      },
      {
        question: "Can an acoustic locator find a leak underneath tile flooring?",
        answer: "Yes. Advanced acoustic sensors are designed to detect sound waves traveling through concrete, tile, and hardwood without damaging finished floor surfaces."
      },
      {
        question: "How long does a typical water leak detection service take?",
        answer: "Most residential water leak detection inspections are completed within 1.5 to 3 hours, including pressure testing and acoustic pinpointing."
      }
    ],
    relatedServices: [
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Pinpoint leaks beneath concrete slabs." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Detect leaks in outdoor pool plumbing." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Locate buried main yard and irrigation lines." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "LVVWD continuous flow & copper leak repairs." },
      { name: "Henderson & Green Valley", slug: "henderson", context: "High-pressure residential supply lines." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Freeze-thaw and crawlspace potable leaks." },
      { name: "Sparks & Spanish Springs", slug: "sparks", context: "Washoe Valley main line diagnostics." }
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
    metaTitle: "Gas Leak Detection Across Nevada | 24/7 Emergency Help (725) 313-0108",
    metaDescription: "Smell gas anywhere in Nevada? Leave the home and call 911 or Southwest Gas / NV Energy first. Then call (725) 313-0108 for licensed gas leak testing in Las Vegas, Reno & statewide.",
    primaryKeyword: "gas leak detection Nevada",
    secondaryKeywords: [
      "gas leak repair Las Vegas NV",
      "emergency gas line plumber Reno Sparks",
      "natural gas leak detection Henderson Carson City",
      "propane leak repair Nevada"
    ],
    semanticEntities: [
      "Southwest Gas & NV Energy meter lock clearances",
      "Mercaptan odorant detection",
      "Combustible gas electronic sniffing wand",
      "Black iron & CSST gas pipe threading",
      "Manometer gas pressure decay testing"
    ],
    h1: "24/7 Emergency Gas Leak Detection & Repair Across Nevada",
    heroKicker: "Hazardous Gas Containment • Statewide 24/7 Dispatch",
    heroSubheadline: "Natural gas and propane leaks pose severe fire and explosion risks. When you smell sulfur or need a locked gas meter re-certified anywhere in Nevada, connect 24/7 with NSCB-licensed gas piping specialists.",
    directAnswer: "Gas leak detection uses parts-per-million (PPM) electronic combustible gas sniffers, ultrasonic sensors, and calibrated digital manometers to locate natural gas or propane leaks along supply lines, meters, and appliances. Dispatched Nevada technicians isolate the leak, execute code-compliant repairs, and certify pressure tests for utility unlock.",
    featuredImage: "/images/gas_leak_detection_1791567732913.webp",
    imageAlt: "Plumbing technician using electronic gas leak detector on natural gas supply line",
    imageCaption: "Digital combustible gas sniffing wands locate leaks along gas valves, fittings, and appliance connections across Nevada.",
    sections: [
      {
        heading: "Urgent Warning Signs of a Gas Leak",
        subheading: "Recognizing physical, acoustic, and environmental danger indicators",
        paragraphs: [
          "Utilities inject mercaptan—a sulfur-like rotten-egg odorant—into natural gas and propane so leaks are detectable by scent. However, slow leaks inside crawlspaces, exterior meter risers, or underground yard trenches can go unnoticed until gas accumulates.",
          "If you smell gas, hear a hissing sound near a gas appliance, or notice dying vegetation along buried gas routes anywhere in Nevada, evacuate outside immediately, alert 911 or your gas utility, and call (725) 313-0108 for certified repair."
        ],
        bulletPoints: [
          "Rotten-egg or sulfur odor lingering near kitchens, garages, utility closets, or exterior meters",
          "Hissing, roaring, or whistling sound near gas furnaces, water heaters, or supply valves",
          "Physical symptoms among occupants: dizziness, headaches, nausea, or eye irritation",
          "Dead grass or blistering soil above buried natural gas or propane lines"
        ]
      },
      {
        heading: "Southwest Gas & NV Energy Meter Shutoff Re-Certification",
        subheading: "Restoring service quickly when your Nevada gas meter is locked or red-tagged",
        paragraphs: [
          "If Southwest Gas (Southern & Northern NV) or NV Energy responds to an odor call, utility technicians lock and red-tag the meter until a licensed contractor repairs the breach and completes a certified pressure test.",
          "Dispatched NSCB C-1 contractors arrive with calibrated manometers to pressure-test the entire gas tree, replace corroded black iron, galvanized, or CSST piping, pull required municipal permits, and submit test signoffs for service restoration."
        ]
      },
      {
        heading: "Residential, Commercial & Rural Propane Gas Systems",
        subheading: "Serving Las Vegas pool heaters, Reno furnaces, and rural Nevada propane tanks",
        paragraphs: [
          "Whether servicing high-BTU pool heaters and outdoor kitchens in Las Vegas and Henderson, winter forced-air furnaces in Reno, Sparks, and Carson City, or buried rural propane lines in Pahrump and Elko, dispatched technicians inspect every run to strict Nevada code standards."
        ]
      }
    ],
    faqs: [
      {
        question: "Can I use soapy water to check for a gas leak myself?",
        answer: "While dish soap can show bubbles on an exposed fitting, concealed leaks inside walls, crawlspaces, or underground trenches require calibrated electronic combustible gas sniffers and manometer pressure-drop testing."
      },
      {
        question: "How long does gas line repair take after a Nevada utility locks the meter?",
        answer: "Most residential gas leak isolations, pipe repairs, and manometer pressure tests are completed the same day so your utility can unlock service promptly."
      },
      {
        question: "Are contractors licensed to repair gas piping across Nevada?",
        answer: "Yes. All gas piping diagnostics and repairs are routed to independent contractors holding active Nevada State Contractors Board (NSCB) C-1 plumbing/heating credentials."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Potable supply and indoor water leak services." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Outdoor pool heater and plumbing line testing." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate dispatch for hazardous leaks." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Southwest Gas meter & appliance leak testing." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Winter heating & NV Energy gas line certifications." },
      { name: "Henderson & Green Valley", slug: "henderson", context: "Pool heater & outdoor kitchen gas lines." },
      { name: "Carson City & Minden", slug: "carson-city", context: "Residential & commercial gas line diagnostics." }
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
    metaTitle: "Slab Leak Detection Across Nevada | Foundation Repair (725) 313-0108",
    metaDescription: "Warm floor spot or high water bill in Nevada? Non-invasive acoustic & thermal slab leak detection across Las Vegas, Henderson, Reno & statewide. Call (725) 313-0108.",
    primaryKeyword: "slab leak detection Nevada",
    secondaryKeywords: [
      "slab leak repair Las Vegas NV",
      "concrete slab water leak Henderson",
      "foundation leak repair Reno Sparks",
      "sub slab plumbing repair Nevada"
    ],
    semanticEntities: [
      "Post-tension concrete slab foundation",
      "Desert caliche sub-base abrasion & valley soil settling",
      "Electromagnetic pipe and cable locator",
      "Acoustic ground sensor listening disc",
      "Overhead PEX re-route bypass"
    ],
    h1: "Non-Invasive Slab Leak Detection & Repair Across Nevada",
    heroKicker: "Protect Your Concrete Foundation • Pinpoint Acoustic Sensors Statewide",
    heroSubheadline: "Sub-slab copper and PEX pipe ruptures undermine concrete foundations and ruin expensive flooring. Connect with Nevada slab leak technicians who locate leaks within inches without destructive jackhammering.",
    directAnswer: "A slab leak occurs when pressurized water lines beneath a home's concrete foundation rupture due to caliche rock abrasion, soil settling, freeze stress, or corrosion. Dispatched Nevada technicians use acoustic ground listening discs, line tracing transmitters, and thermal imaging to pinpoint sub-slab leaks before executing spot repairs or overhead PEX re-routes.",
    featuredImage: "/images/slab_leak_inspection_1791566136409.webp",
    imageAlt: "Technician operating acoustic slab leak detector on residential flooring in Nevada",
    imageCaption: "Non-invasive electronic acoustic sensors detect pressurized water leaks beneath concrete slabs across Nevada.",
    sections: [
      {
        heading: "Why Slab Leaks Occur in Nevada Homes",
        subheading: "Caliche soil abrasion, high water pressure, and thermal foundation movement",
        paragraphs: [
          "Across Las Vegas, Henderson, Spring Valley, North Las Vegas, Mesquite, Pahrump, and newer master-planned communities in Reno and Sparks, most homes rest on post-tension concrete slab foundations with pressurized lines routed below.",
          "In Southern Nevada, sharp calcium carbonate caliche wears pinholes into expanding copper tubing, while in Northern Nevada valley clay expansion and seismic micro-shifts stress joints and slab penetrations."
        ],
        bulletPoints: [
          "Thermal expansion cycles causing sub-slab copper to rub against caliche rock",
          "High municipal water pressure accelerating erosion at solder elbows and tees",
          "Hard mineral groundwater causing electrochemical pinhole pitting",
          "Seasonal soil contraction and settling beneath post-tension slabs"
        ]
      },
      {
        heading: "Warning Signs of a Foundation Slab Leak",
        subheading: "Identify sub-slab water loss before structural cracking occurs",
        paragraphs: [
          "Because water travels horizontally beneath concrete before surfacing, subtle warning signs appear first. Noticeable warm floor patches, running water sounds when all taps are shut, or a climbing water bill warrant immediate inspection.",
          "Call (725) 313-0108 anywhere in Nevada for non-invasive acoustic isolation before opening floors."
        ],
        bulletPoints: [
          "Isolated warm or hot spots on tile, hardwood, or LVP flooring",
          "Sound of hissing or rushing water when all indoor fixtures are shut off",
          "Water heater running continuously or drop in hot water pressure",
          "Cracks appearing in drywall joints, baseboard trim, or tile grout",
          "Unexplained spike on LVVWD, Henderson, or TMWA water utility bills"
        ]
      },
      {
        heading: "Repair Solutions: Direct Spot Repair vs. Overhead PEX Bypass",
        subheading: "Choosing the right long-term fix for your Nevada property",
        paragraphs: [
          "Once acoustic sensors pinpoint the break, contractors review repair paths with you. A Direct Spot Repair opens a small localized tile/concrete patch to repair the damaged pipe segment.",
          "For properties with aging Type M copper, an Overhead PEX Re-Route caps the abandoned sub-slab run and routes seamless freeze-resilient PEX through attic or wall cavities, eliminating future under-slab risk."
        ]
      }
    ],
    faqs: [
      {
        question: "Does homeowners insurance cover slab leak repair in Nevada?",
        answer: "Most Nevada homeowners policies cover access tear-out and restoration of flooring and concrete required to reach the leak, plus resultant water damage, while the pipe fix itself varies by carrier. Dispatched technicians supply detailed diagnostic reports for adjusters."
      },
      {
        question: "How accurate is electronic acoustic slab leak detection?",
        answer: "Trained specialists using amplified ground geophones and FLIR thermal cameras isolate sub-slab leaks within a tight 6-to-12-inch target radius, avoiding unnecessary demolition."
      },
      {
        question: "Is an overhead PEX re-route better than breaking concrete?",
        answer: "An overhead PEX re-route avoids jackhammering post-tension slabs and preserves costly tile or hardwood. It is strongly recommended if a home has experienced multiple copper pinholes."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Detect hidden indoor and main line leaks." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate water shutoff and emergency response." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Yard and exterior line leak detection." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "1980s–2010s copper post-tension slab homes." },
      { name: "Henderson & Green Valley", slug: "henderson", context: "Master-planned concrete slab diagnostics." },
      { name: "North Las Vegas", slug: "north-las-vegas", context: "High-PSI slab pinhole detection." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Thermal & ultrasonic slab locating." }
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
    metaTitle: "Pool Leak Detection Across Nevada | Swimming Pool Repair (725) 313-0108",
    metaDescription: "Losing pool water anywhere in Nevada? Call (725) 313-0108 for hydrophone acoustic sensors & dye testing across Las Vegas, Henderson, Mesquite, Reno & statewide.",
    primaryKeyword: "pool leak detection Nevada",
    secondaryKeywords: [
      "swimming pool leak repair Las Vegas NV",
      "pool pipe leak detection Henderson",
      "pool skimmer leak repair Reno Sparks",
      "inground pool leak detection Mesquite"
    ],
    semanticEntities: [
      "Hydrophone underwater acoustic sensor",
      "Fluorescent dye syringe testing",
      "Skimmer throat and throat-faceplate bond",
      "Underground return and suction line pressure test",
      "Nevada evaporation bucket test"
    ],
    h1: "Swimming Pool Leak Detection & Repair Across Nevada",
    heroKicker: "Stop Vanishing Pool Water • Hydrophone Acoustic Diagnostics Statewide",
    heroSubheadline: "Across Nevada's desert and high-altitude valleys, a swimming pool leak wastes thousands of gallons of water and erodes pool deck soil. Dispatched specialists diagnose structural, skimmer, and underground line leaks without draining your pool.",
    directAnswer: "Swimming pool leak detection combines underwater hydrophone acoustic listening, precision dye testing at skimmers and light niches, and pneumatic line-pressure testing on returns, suction lines, and main drains. Dispatched Nevada technicians pinpoint leaks in Las Vegas, Henderson, Mesquite, Reno, and statewide without draining your pool.",
    featuredImage: "/images/pool_leak_detection_1791567711591.webp",
    imageAlt: "Pool leak detection specialist using dye syringe and underwater acoustic hydrophone in Nevada",
    imageCaption: "Underwater hydrophone microphones and precision dye testing locate leaks in pool shells, lights, and underground pipes.",
    sections: [
      {
        heading: "Is Your Nevada Pool Leaking or Just Evaporating?",
        subheading: "Understanding the bucket test in desert heat and mountain winds",
        paragraphs: [
          "Across Las Vegas, Henderson, Mesquite, and Laughlin—and in windy high-desert valleys like Reno, Sparks, and Carson City—pools routinely lose 1/4 to 1/2 inch of water daily during peak summer heat and low humidity.",
          "However, if your autofill valve runs constantly, chemical balance fluctuates wildly, or daily water loss exceeds 1/2 inch beyond a benchmark bucket test, water is escaping through a structural crack, skimmer separation, or broken underground PVC line."
        ],
        bulletPoints: [
          "Automatic pool water leveler running continuously day and night",
          "Pool dropping noticeably faster than a 24-hour bucket test control",
          "Air bubbles blowing out of pool return jets (underground suction leak)",
          "Sinking or cracking concrete pavers and deck expansion joints",
          "Damp soil or unusually lush growth near the pool equipment pad"
        ]
      },
      {
        heading: "Advanced Pool Diagnostic Methodology",
        subheading: "Non-invasive testing with the pool completely full",
        paragraphs: [
          "Draining a pool in Nevada heat or freeze cycles risks plaster delamination and structural popping. Dispatched specialists conduct diagnostics with the pool full and clear.",
          "Using submersible hydrophones, divers and technicians listen for pressurized suction signatures around light niches, hydro-therapy returns, and main drains, verifying micro-cracks with non-toxic dye syringes."
        ]
      },
      {
        heading: "Underground Pool Plumbing Pressure Testing & Repair",
        subheading: "Isolating returns, skimmers, and spa jets beneath decking",
        paragraphs: [
          "Technicians isolate individual underground plumbing runs with inflatable test plugs and pneumatic gauges to verify which line fails pressure.",
          "Electronic line locators mark the exact underground break beneath concrete decking so contractors can perform clean, localized repairs."
        ]
      }
    ],
    faqs: [
      {
        question: "How do I perform a bucket test to verify a pool leak?",
        answer: "Fill a 5-gallon bucket with pool water, place it on the first pool step, and mark the water level inside and outside the bucket. Compare both marks after 24 hours with normal pump operation—if the pool drops noticeably more than the bucket, a leak is likely."
      },
      {
        question: "Do you have to drain my pool to find the leak?",
        answer: "No. Hydrophone listening, pneumatic pressure testing, and dye testing require the pool to remain full and operational."
      },
      {
        question: "Can an underground pool pipe leak damage my deck or foundation?",
        answer: "Yes. Water escaping from pressurized pool plumbing erodes or swells soil beneath pavers and concrete decks, causing cracking and settling."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor and domestic water supply leak services." },
      { title: "Gas Leak Detection & Repair", slug: "gas-leak-detection", description: "Pool heater gas line leak diagnostics." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Buried yard and main line leak testing." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Backyard residential & HOA community pools." },
      { name: "Henderson & Green Valley", slug: "henderson", context: "Luxury pool, spa & infinity edge diagnostics." },
      { name: "Mesquite & Virgin Valley", slug: "mesquite", context: "Resort golf pools & high-mineral equipment lines." },
      { name: "Boulder City & Laughlin", slug: "boulder-city", context: "Colorado River corridor pools & spas." }
    ],
    schemaType: "Service"
  },

  // 6. SERVICE 5: UNDERGROUND PIPE LEAK DETECTION
  "underground-leak-detection": {
    slug: "underground-leak-detection",
    urlPath: "/underground-leak-detection/",
    type: "service",
    name: "Underground Pipe & Irrigation Leak Detection",
    navTitle: "Underground Leaks",
    metaTitle: "Underground Leak Detection Across Nevada | Main Line & Yard Leaks (725) 313-0108",
    metaDescription: "Buried water line, well line or irrigation leak anywhere in Nevada? Call (725) 313-0108 for electromagnetic tracing & acoustic yard leak detection statewide.",
    primaryKeyword: "underground leak detection Nevada",
    secondaryKeywords: [
      "main water service line leak Las Vegas",
      "yard leak detection Reno Sparks NV",
      "irrigation leak repair Henderson Nevada",
      "buried pipe leak locator Nevada"
    ],
    semanticEntities: [
      "Electromagnetic pipe and cable locator",
      "Tracer gas hydrogen-nitrogen sniffing",
      "Underground irrigation manifold repair",
      "Main water service line trenchless pull",
      "Caliche rock & northern freeze-zone excavation"
    ],
    h1: "Underground Pipe & Irrigation Leak Detection Across Nevada",
    heroKicker: "Locate Buried Pipe Leaks Statewide • Zero Unnecessary Digging",
    heroSubheadline: "Leaks in buried main water lines, rural well mains, and irrigation piping waste thousands of gallons underground before surfacing. Connect with specialized underground line locators across Nevada.",
    directAnswer: "Underground leak detection uses electromagnetic pipe locators, acoustic ground microphones, and non-toxic tracer gas to pinpoint leaks in buried main service lines, rural well runs, and irrigation manifolds without trenching your entire property. Dispatched Nevada technicians isolate the break for surgical repair.",
    featuredImage: "/images/diagnostic_tech_1791662650738.webp",
    imageAlt: "Technician tracing underground pipe lines in residential Nevada neighborhood",
    imageCaption: "Electromagnetic line locators and acoustic ground sensors identify buried water line breaks across Nevada.",
    sections: [
      {
        heading: "Buried Main Water Lines vs. Irrigation & Well Leaks",
        subheading: "Differentiating continuous supply breaks from timer-activated zones",
        paragraphs: [
          "Nevada properties rely on pressurized buried piping: the municipal main line or well supply running to the structure, plus desert drip irrigation or lawn sprinkler zones. Main line breaks leak 24/7, while zone leaks lose pressure during scheduled cycles.",
          "Dispatched specialists perform pressure-decay isolation tests at backflow preventers and curb shutoffs before scanning underground runs."
        ],
        bulletPoints: [
          "Main service line testing from street water meter or wellhead to foundation",
          "Backflow preventer and pressure vacuum breaker (PVB) diagnostic testing",
          "Landscape drip line and PVC irrigation manifold leak pinpointing",
          "Trenchless pipe pulling to replace failed mains without destroying driveways"
        ]
      },
      {
        heading: "Preventing Subterranean Erosion & Sinkholes",
        subheading: "Protecting driveways, retaining walls, and desert hardscapes",
        paragraphs: [
          "Pressurized water eroding soil beneath concrete driveways, walkways, and pavers creates hidden voids that can collapse suddenly. Early underground pinpointing saves landscaping and structural hardscaping statewide."
        ]
      }
    ],
    faqs: [
      {
        question: "How do you find a buried plastic PVC or poly pipe underground?",
        answer: "Technicians insert a traceable fiberglass sonde rod with a transmitter into the line or pressurize it with safe hydrogen-nitrogen tracer gas detected above ground at parts-per-million sensitivity."
      },
      {
        question: "Can an underground water line leak be replaced without digging up my entire yard?",
        answer: "Yes. Where full replacement is needed, dispatched Nevada contractors frequently use trenchless pipe pulling or directional boring to minimize surface disturbance."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor and domestic water line diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Buried pool suction and return line testing." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Leaks underneath foundation slabs." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Buried desert yard mains & drip manifolds." },
      { name: "Pahrump & Nye County", slug: "pahrump", context: "Long-run well water mains & rural supply lines." },
      { name: "Sparks & Spanish Springs", slug: "sparks", context: "Sub-frost-line irrigation & yard lines." },
      { name: "Elko & Rural Nevada", slug: "elko-rural-nevada", context: "Deep-buried rural water service lines." }
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
    metaTitle: "24/7 Emergency Leak Repair Across Nevada | Rapid Dispatch (725) 313-0108",
    metaDescription: "Active water flood, burst pipe or gas emergency anywhere in Nevada? Call (725) 313-0108 for 24/7 emergency dispatch in Las Vegas, Henderson, Reno, Sparks & statewide.",
    primaryKeyword: "emergency leak repair Nevada",
    secondaryKeywords: [
      "24/7 leak detection Las Vegas NV",
      "emergency plumber Reno Sparks NV",
      "urgent water leak repair Henderson",
      "emergency gas leak shutoff Nevada"
    ],
    semanticEntities: [
      "Immediate main meter emergency shutoff",
      "Nevada State Contractors Board (NSCB) licensed response",
      "24/7 on-call mobile technician vans",
      "High-pressure pipe clamp and PEX crimp containment"
    ],
    h1: "24/7 Emergency Leak Repair & Rapid Dispatch Across Nevada",
    heroKicker: "Active Leaks • 24/7 Statewide Response • Licensed Specialists",
    heroSubheadline: "Burst pipes, frozen supply lines, active indoor floods, and hazardous gas odors demand instant containment. Call our 24/7 dispatch line to connect immediately with on-call Nevada contractors.",
    directAnswer: "Emergency leak repair delivers rapid containment and permanent restoration for active water floods, freeze bursts, and gas line ruptures anywhere in Nevada. Calling (725) 313-0108 routes your emergency directly to on-call NSCB-licensed technicians equipped with electronic locators and repair hardware.",
    featuredImage: "/images/drain_hydro_jetting_1791566153107.webp",
    imageAlt: "Emergency leak repair mobile dispatch unit in Nevada",
    imageCaption: "Mobile service units carry pipe clamps, PEX fittings, and emergency valves for fast on-site containment across Nevada.",
    sections: [
      {
        heading: "What to Do in a Water or Gas Emergency",
        subheading: "Immediate steps to protect life and property while awaiting dispatch",
        paragraphs: [
          "The first minutes of a severe rupture dictate whether you face minor cleanup or catastrophic restoration bills. For active water leaks, close your home's main water shutoff valve (garage, utility room, crawlspace, or curb meter box).",
          "For natural gas or propane odors, never try to locate the leak yourself. Evacuate everyone outside immediately and call from a safe distance."
        ],
        bulletPoints: [
          "Shut off the main water supply valve clockwise to halt pressurized flooding",
          "Switch off electrical breakers to flooded rooms only if safe to access the panel",
          "For gas odors: evacuate immediately, touch no switches, and call 911 / utility / dispatch",
          "Keep your telephone clear for the dispatched Nevada technician's arrival call"
        ]
      }
    ],
    faqs: [
      {
        question: "How fast can an emergency leak technician arrive in Nevada cities?",
        answer: "Average arrival times across major Las Vegas Valley and Reno/Sparks metro corridors are 30 to 60 minutes, with priority same-day emergency dispatch across Carson City, Pahrump, Mesquite, Boulder City, and rural Nevada."
      },
      {
        question: "Is your Nevada dispatch desk open on weekends and holidays?",
        answer: "Yes. Our dispatch line at (725) 313-0108 and on-call contractor network operate 24 hours a day, 7 days a week, 365 days a year."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Pinpoint hidden potable water leaks." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Immediate gas leak containment and testing." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Foundation leak diagnostics." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "24/7 Clark County rapid dispatch." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "24/7 freeze-burst & emergency diagnostics." },
      { name: "Henderson & Green Valley", slug: "henderson", context: "Emergency residential & commercial dispatch." },
      { name: "North Las Vegas", slug: "north-las-vegas", context: "Urgent main & slab leak response." }
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
    directAnswer: "If you need leak detection in central Spring Valley, our dispatch desk at 6875 Groveview Ln connects you with local technicians experienced with local residential slab foundations, older copper piping, commercial strip malls, and backyard swimming pools. Call (725) 313-0108 for fast dispatch.",
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
      }
    ],
    faqs: [
      {
        question: "How fast can you dispatch to homes near Rainbow Blvd and Flamingo Rd?",
        answer: "Dispatched mobile technicians typically arrive within 30 to 45 minutes across central Spring Valley."
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
      }
    ],
    faqs: [
      {
        question: "Can you detect a pool leak that is hidden beneath concrete pavers?",
        answer: "Yes. Dispatched specialists utilize acoustic hydrophones and line-pressure testing to pinpoint underground pipe ruptures beneath pool decking and pavers."
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
      }
    ],
    faqs: [
      {
        question: "Can dispatched technicians access guard-gated communities in Spanish Trail?",
        answer: "Yes. Dispatched contractors are licensed and insured, coordinating gate clearance directly with property owners and security personnel for smooth access."
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
      }
    ],
    faqs: [
      {
        question: "How fast can a technician arrive in Summerlin South?",
        answer: "Average response times in Summerlin South typically range from 30 to 50 minutes."
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
    metaDescription: "Precision water, gas, slab & pool leak detection in Rhodes Ranch, NV 89148. 24/7 emergency dispatch. Call (725) 313-0108. 6875 Groveview Ln.",
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
      }
    ],
    faqs: [
      {
        question: "Can you fix an autofill valve that is constantly filling my pool?",
        answer: "Yes. An autofill that runs continuously is either miscalibrated, defective, or concealing a significant pool leak. Dispatched technicians inspect the autofill line and perform complete pool leak diagnostics."
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

  // 12B. NEVADA CITIES: LAS VEGAS METRO
  "las-vegas": {
    slug: "las-vegas",
    urlPath: "/las-vegas/",
    type: "location",
    name: "Las Vegas Leak Detection & Repair",
    navTitle: "Las Vegas",
    metaTitle: "Leak Detection Las Vegas NV | Water, Slab, Gas & Pool (725) 313-0108",
    metaDescription: "Hidden water, slab, pool or gas leak in Las Vegas, NV? 24/7 dispatch across Paradise, Enterprise, Summerlin, Downtown & Centennial Hills. Call (725) 313-0108.",
    primaryKeyword: "leak detection Las Vegas NV",
    secondaryKeywords: [
      "water leak detection Las Vegas",
      "slab leak repair Las Vegas NV",
      "pool leak detection Las Vegas",
      "gas leak repair Las Vegas 89101 89103 89149"
    ],
    semanticEntities: [
      "Las Vegas Valley Water District (LVVWD)",
      "Paradise, Enterprise, Sunrise Manor & Summerlin corridors",
      "Caliche hardpan concrete slab foundations",
      "Southwest Gas emergency service lockouts"
    ],
    h1: "24/7 Water, Gas, Slab & Pool Leak Detection in Las Vegas, NV",
    heroKicker: "Serving All Las Vegas ZIP Codes • Paradise, Enterprise, Summerlin & Downtown",
    heroSubheadline: "From historic downtown neighborhoods and Strip-adjacent commercial properties to Paradise, Enterprise, Sunrise Manor, Whitney, and Centennial Hills, dispatched specialists pinpoint leaks cleanly across the entire Las Vegas Valley.",
    directAnswer: "Leak Detection NV dispatches NSCB-licensed specialists across every Las Vegas neighborhood—including Downtown (89101), Spring Valley (89103), Paradise, Enterprise, Summerlin, and Centennial Hills—within 30–60 minutes. Technicians deploy acoustic geophones, FLIR thermal imaging, pool hydrophones, and digital gas sniffers without exploratory destruction. Call (725) 313-0108.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Leak detection specialist serving Las Vegas Valley residential and commercial properties",
    imageCaption: "Rapid 24/7 mobile dispatch across Downtown Las Vegas, Paradise, Enterprise, Summerlin, and Centennial Hills.",
    sections: [
      {
        heading: "Las Vegas Valley Plumbing & Soil Challenges",
        subheading: "Protecting slabs, pools, and high-PSI potable lines across Clark County",
        paragraphs: [
          "Las Vegas properties endure extreme 110°F+ summers, abrasive caliche bedrock beneath concrete slabs, and elevated LVVWD municipal delivery pressures often exceeding 80 PSI. Over time, Type M copper pipes beneath slabs develop pinhole perforations while buried PVC irrigation lines crack from soil expansion.",
          "Dispatched specialists isolate breaks through marble, travertine, porcelain tile, and concrete decking using electronic correlation and produce certified repair reports eligible for LVVWD high-bill leak credits."
        ],
        bulletPoints: [
          "Full coverage across Downtown, Arts District, Westside, Paradise & Enterprise",
          "Northwest coverage across Summerlin, Lone Mountain & Centennial Hills",
          "East Valley dispatch for Sunrise Manor, Whitney & Nellis corridor",
          "LVVWD Tier-3 excess leak credit documentation included upon repair"
        ]
      }
    ],
    faqs: [
      {
        question: "How quickly can a technician reach my Las Vegas property?",
        answer: "From our central Las Vegas dispatch hub at 6875 Groveview Ln (89103), mobile units typically arrive within 30 to 60 minutes across Las Vegas, Paradise, Enterprise, Summerlin, and Sunrise Manor."
      },
      {
        question: "Do you service Las Vegas commercial buildings, HOAs, and pools?",
        answer: "Yes. Dispatched NSCB C-1 contractors handle single-family homes, guard-gated HOAs, multifamily complexes, commercial mains, and commercial/residential pools."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor & main line diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Concrete slab acoustic locating." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone & dye testing." }
    ],
    relatedLocations: [
      { name: "Henderson & Green Valley", slug: "henderson", context: "Adjacent southeast Clark County metro." },
      { name: "North Las Vegas", slug: "north-las-vegas", context: "Northern Las Vegas Valley dispatch." },
      { name: "Spring Valley Core", slug: "spring-valley-center", context: "Southwest valley headquarters." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12C. NEVADA CITIES: HENDERSON
  "henderson": {
    slug: "henderson",
    urlPath: "/henderson/",
    type: "location",
    name: "Henderson Leak Detection & Repair",
    navTitle: "Henderson",
    metaTitle: "Leak Detection Henderson NV | Green Valley, Anthem & Seven Hills (725) 313-0108",
    metaDescription: "Water, slab, pool or gas leak in Henderson, NV? Fast non-invasive detection across Green Valley, Anthem, Seven Hills, Inspirada & Lake Las Vegas. Call (725) 313-0108.",
    primaryKeyword: "leak detection Henderson NV",
    secondaryKeywords: [
      "slab leak detection Henderson NV",
      "pool leak detection Green Valley Henderson",
      "water leak repair Anthem Seven Hills 89052",
      "gas leak detection Henderson Nevada"
    ],
    semanticEntities: [
      "City of Henderson Department of Utility Services",
      "Green Valley, Anthem, Seven Hills, MacDonald Highlands & Lake Las Vegas",
      "High-elevation hillside water pressure zones",
      "Post-tension concrete slab & resort pool diagnostics"
    ],
    h1: "Water, Gas, Slab & Pool Leak Detection in Henderson, NV",
    heroKicker: "Serving Green Valley, Anthem, Seven Hills, Inspirada & Lake Las Vegas",
    heroSubheadline: "Hillside pressure zones, custom swimming pools, and post-tension slab foundations across Henderson demand precision non-invasive leak locating. Call 24/7 for rapid dispatch across 89002, 89012, 89014, 89044, 89052, and 89074.",
    directAnswer: "Leak Detection NV dispatches licensed Henderson specialists across Green Valley, Anthem, Seven Hills, MacDonald Highlands, Inspirada, Whitney Ranch, and Lake Las Vegas. Using acoustic geophones, FLIR thermal cameras, and pool hydrophones, technicians pinpoint leaks cleanly and provide documentation formatted for City of Henderson utility adjustments. Call (725) 313-0108.",
    featuredImage: "/images/pool_leak_detection_1791567711591.webp",
    imageAlt: "Technician performing pool and slab leak detection in Henderson Nevada",
    imageCaption: "Non-invasive pool, slab, and potable water diagnostics serving Henderson and Green Valley.",
    sections: [
      {
        heading: "Elevated Pressure & Hillside Plumbing in Henderson",
        subheading: "Managing PRVs, custom pools, and concrete slabs in 89052 & 89012",
        paragraphs: [
          "Neighborhoods along Anthem, Seven Hills, and MacDonald Highlands experience significant elevation changes, placing heavy hydrostatic pressure on pressure-reducing valves (PRVs), domestic copper risers, and pool equipment loops.",
          "Dispatched specialists isolate hidden leaks in Green Valley, Cadence, and Lake Las Vegas without disturbing custom stone decking or interior finishes, and supply repair paperwork compatible with City of Henderson Utilities billing reviews."
        ],
        bulletPoints: [
          "Green Valley, Green Valley Ranch & Whitney Ranch (89014, 89074)",
          "Anthem, Seven Hills, Sun City Anthem & Inspirada (89052, 89044)",
          "Lake Las Vegas, Cadence & Downtown Water Street District (89011, 89015)",
          "MacDonald Highlands & Foothills elevated estate diagnostics (89012, 89002)"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you serve Sun City Anthem, Seven Hills, and Lake Las Vegas in Henderson?",
        answer: "Yes. Dispatched mobile technicians cover all Henderson ZIP codes including 89002, 89011, 89012, 89014, 89015, 89044, 89052, and 89074."
      },
      {
        question: "Can you inspect high water bills from the City of Henderson Utilities?",
        answer: "Yes. Technicians perform meter-to-home static pressure tests, locate the exact indoor or yard leak, and issue detailed repair documentation for utility credit consideration."
      }
    ],
    relatedServices: [
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Resort pool, spa & skimmer testing." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Sub-slab pinpointing without floor demolition." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Outdoor BBQ, fire pit & furnace gas testing." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Adjacent Clark County valley dispatch." },
      { name: "Boulder City & Laughlin", slug: "boulder-city", context: "Highway 93 / 95 southeast corridor." },
      { name: "Spring Valley Core", slug: "spring-valley-center", context: "West valley operations center." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12D. NEVADA CITIES: NORTH LAS VEGAS
  "north-las-vegas": {
    slug: "north-las-vegas",
    urlPath: "/north-las-vegas/",
    type: "location",
    name: "North Las Vegas Leak Detection & Repair",
    navTitle: "North Las Vegas",
    metaTitle: "Leak Detection North Las Vegas NV | Aliante & Craig Ranch (725) 313-0108",
    metaDescription: "Water, slab, gas or yard leak in North Las Vegas? 24/7 non-invasive diagnostics across Aliante, Eldorado, Craig Ranch & Apex Industrial. Call (725) 313-0108.",
    primaryKeyword: "leak detection North Las Vegas NV",
    secondaryKeywords: [
      "water leak repair North Las Vegas",
      "slab leak detection Aliante NV 89084",
      "underground leak detection North Las Vegas 89031",
      "gas leak plumber North Las Vegas"
    ],
    semanticEntities: [
      "City of North Las Vegas Utilities Department",
      "Aliante, Eldorado, Craig Ranch & Tule Springs",
      "Expansive alluvial desert clay & caliche soils",
      "Commercial & industrial pressurized fire/water mains"
    ],
    h1: "Water, Gas, Slab & Pool Leak Detection in North Las Vegas, NV",
    heroKicker: "Serving Aliante, Eldorado, Craig Ranch, Tule Springs & 89030–89086",
    heroSubheadline: "Rapid growth across North Las Vegas neighborhoods and industrial corridors brings hard water erosion, high-PSI main breaks, and sub-slab pinholes. Connect 24/7 with licensed leak specialists near you.",
    directAnswer: "Leak Detection NV dispatches NSCB-licensed technicians throughout North Las Vegas—including Aliante, Eldorado, Craig Ranch, Sun City Aliante, and Downtown NLV (89030, 89031, 89032, 89081, 89084, 89086). Electronic acoustic listening, tracer gas, and thermal imaging locate leaks quickly without guesswork excavation. Call (725) 313-0108.",
    featuredImage: "/images/slab_leak_inspection_1791566136409.webp",
    imageAlt: "Acoustic slab and water line leak detection in North Las Vegas NV",
    imageCaption: "Non-invasive leak detection serving Aliante, Craig Ranch, Eldorado, and commercial facilities in North Las Vegas.",
    sections: [
      {
        heading: "Protecting North Las Vegas Residential & Commercial Lines",
        subheading: "Addressing soil shifting, irrigation manifolds, and high water bills",
        paragraphs: [
          "North Las Vegas spans older mid-century homes along Cheyenne and Lake Mead Blvd as well as newer subdivisions in Aliante, Valley Vista, and Villages at Tule Springs. High mineral hardness and fluctuating soil compaction put steady stress on service mains and sub-slab lines.",
          "Dispatched specialists provide fast meter-isolation testing, pinpoint yard and slab ruptures accurately, and supply detailed reports for City of North Las Vegas Utilities billing inquiries."
        ],
        bulletPoints: [
          "Aliante, Sun City Aliante & Tule Springs (89084, 89085, 89086)",
          "Eldorado, Craig Ranch & Losee Rd Corridors (89031, 89081)",
          "Downtown North Las Vegas, Cheyenne & Lamb Industrial (89030, 89032)"
        ]
      }
    ],
    faqs: [
      {
        question: "How fast can emergency crews reach Aliante or Craig Ranch?",
        answer: "Mobile emergency dispatch typically arrives within 30 to 60 minutes throughout North Las Vegas neighborhoods and business parks."
      },
      {
        question: "Can you locate leaks in large commercial warehouses near Apex or I-15?",
        answer: "Yes. Dispatched contractors carry long-range acoustic correlators and inert tracer gas gear suited for buried commercial water mains and warehouse slab lines."
      }
    ],
    relatedServices: [
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Buried yard & commercial main line tracing." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Concrete foundation acoustic testing." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate shutoff and emergency repair." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Central Clark County corridor." },
      { name: "Henderson & Green Valley", slug: "henderson", context: "Southeast valley coverage." },
      { name: "Mesquite & Virgin Valley", slug: "mesquite", context: "I-15 Northeast Clark County corridor." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12E. NEVADA CITIES: RENO & LAKE TAHOE
  "reno": {
    slug: "reno",
    urlPath: "/reno/",
    type: "location",
    name: "Reno & Lake Tahoe Leak Detection",
    navTitle: "Reno & Tahoe",
    metaTitle: "Leak Detection Reno NV | Water, Slab, Gas & Freeze Pipes (725) 313-0108",
    metaDescription: "Hidden water, gas or freeze-burst leak in Reno, Midtown, South Reno or Lake Tahoe? 24/7 NSCB-licensed acoustic & thermal detection. Call (725) 313-0108.",
    primaryKeyword: "leak detection Reno NV",
    secondaryKeywords: [
      "water leak detection Reno Nevada",
      "slab leak repair South Reno 89511 89521",
      "frozen pipe leak repair Reno NV",
      "gas leak detection Reno Incline Village"
    ],
    semanticEntities: [
      "Truckee Meadows Water Authority (TMWA)",
      "NV Energy natural gas safety clearances",
      "Midtown, Old Southwest, Damonte Ranch, Somersett, Verdi & Incline Village",
      "High-Sierra freeze-thaw burst piping & crawlspace manifolds"
    ],
    h1: "Water, Gas, Slab & Freeze-Pipe Leak Detection in Reno & Tahoe, NV",
    heroKicker: "Northern Nevada Dispatch • Midtown, South Reno, Somersett & Incline Village",
    heroSubheadline: "Sub-freezing Sierra nights, seismic valley shifts, and aging Truckee Meadows supply lines cause silent crawlspace, slab, and yard leaks. Connect 24/7 with NSCB-licensed Northern Nevada leak detection pros.",
    directAnswer: "Leak Detection NV coordinates 24/7 non-invasive leak detection across Reno, Old Southwest, Midtown, Damonte Ranch, Double Diamond, Somersett, Verdi, and Incline Village / Crystal Bay (Lake Tahoe). Equipped with acoustic listening sensors, FLIR thermal imaging, and digital gas detectors, technicians pinpoint freeze splits, slab leaks, and underground breaks cleanly. Call (725) 313-0108.",
    featuredImage: "/images/diagnostic_tech_1791662650738.webp",
    imageAlt: "Technician performing thermal and acoustic leak detection in Reno Nevada",
    imageCaption: "Non-invasive acoustic and FLIR thermal diagnostics across Reno, South Reno, and Lake Tahoe communities.",
    sections: [
      {
        heading: "Northern Nevada Plumbing Challenges: Freeze-Thaw & Seismic Stress",
        subheading: "Protecting crawlspaces, mountain cabins, and Washoe County slabs",
        paragraphs: [
          "Unlike Southern Nevada, Reno and the Sierra front experience 100+ freeze-thaw days each year. Uninsulated exterior wall lines, crawlspace copper manifolds, and shallow yard mains split during cold snaps and thaw silently behind finishes.",
          "Meanwhile, newer South Reno and Damonte Ranch neighborhoods rest on slab foundations exposed to Washoe Valley soil movement. Dispatched technicians pinpoint concealed moisture through radiant-heated floors, hardwood, and concrete without damaging historic Midtown plaster or luxury Tahoe finishes."
        ],
        bulletPoints: [
          "Downtown Reno, Midtown & Old Southwest historic homes (89501, 89502, 89509)",
          "South Reno, Damonte Ranch, Double Diamond & ArrowCreek (89511, 89521)",
          "Northwest Reno, Somersett, Caughlin Ranch & Verdi (89503, 89523, 89439)",
          "Incline Village & Crystal Bay Lake Tahoe luxury properties (89451, 89402)",
          "TMWA (Truckee Meadows Water Authority) smart-meter leak verification support"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you handle winter freeze-burst pipe detection in Reno and Incline Village?",
        answer: "Yes. Dispatched technicians use FLIR infrared thermal cameras and acoustic sensors to pinpoint pinhole splits inside exterior walls, attics, and crawlspaces after winter freezes."
      },
      {
        question: "Can diagnostic documentation help with a high TMWA water bill?",
        answer: "Yes. Licensed contractors supply itemized repair invoices and pressure-test findings suitable for Truckee Meadows Water Authority (TMWA) high-usage inquiries."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Wall, crawlspace & radiant floor leaks." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Furnace, boiler & NV Energy meter testing." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Rapid freeze-burst emergency containment." }
    ],
    relatedLocations: [
      { name: "Sparks & Spanish Springs", slug: "sparks", context: "East Truckee Meadows metro coverage." },
      { name: "Carson City & Minden", slug: "carson-city", context: "South along I-580 / Hwy 395 corridor." },
      { name: "Elko & Rural Nevada", slug: "elko-rural-nevada", context: "I-80 Fernley, Fallon & Northern NV." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12F. NEVADA CITIES: SPARKS
  "sparks": {
    slug: "sparks",
    urlPath: "/sparks/",
    type: "location",
    name: "Sparks & Spanish Springs Leak Detection",
    navTitle: "Sparks",
    metaTitle: "Leak Detection Sparks NV | Spanish Springs & Wingfield (725) 313-0108",
    metaDescription: "Water, slab, gas or underground leak in Sparks, Spanish Springs, Wingfield Springs or Sun Valley, NV? 24/7 acoustic & thermal detection. Call (725) 313-0108.",
    primaryKeyword: "leak detection Sparks NV",
    secondaryKeywords: [
      "water leak detection Sparks Nevada",
      "underground leak repair Spanish Springs 89436",
      "slab leak detection Wingfield Springs",
      "gas leak repair Sparks NV 89431"
    ],
    semanticEntities: [
      "Spanish Springs, Wingfield Springs, Sun Valley & Sparks Marina",
      "Truckee Meadows Water Authority & Washoe County utilities",
      "High-iron / mineral groundwater scaling & frost-depth mains",
      "Industrial warehouse & residential slab diagnostics"
    ],
    h1: "Water, Gas, Slab & Yard Leak Detection in Sparks, NV",
    heroKicker: "Serving Sparks, Spanish Springs, Wingfield Springs, Sun Valley & 89431–89441",
    heroSubheadline: "From older residential corridors near Victorian Square to rapidly expanding homes in Spanish Springs and Wingfield Springs, dispatched technicians isolate buried yard, slab, and crawlspace leaks without tearing up property.",
    directAnswer: "Leak Detection NV dispatches licensed leak specialists across Sparks, Spanish Springs, Wingfield Springs, Sun Valley, and the Tahoe-Reno Industrial Center corridor. Ultrasonic acoustic listening, tracer gas, and thermal imaging locate buried potable mains, sub-slab breaks, and gas leaks cleanly. Call (725) 313-0108.",
    featuredImage: "/images/water_heater_repair_1791566167061.webp",
    imageAlt: "Leak detection technician servicing Sparks and Spanish Springs residence",
    imageCaption: "Acoustic and thermal leak locating across Sparks, Spanish Springs, and Wingfield Springs.",
    sections: [
      {
        heading: "Underground Mains & Irrigation Systems in Sparks & Spanish Springs",
        subheading: "Pinpointing deep frost-line service lines and mineral-worn copper",
        paragraphs: [
          "Properties in Spanish Springs and Wingfield Springs often sit on spacious lots with long underground water service lines, pressurized lawn manifolds, and concrete patios. Meanwhile, established Sparks neighborhoods contend with aging galvanized and copper piping.",
          "Using tracer gas pressurization and ground microphones, dispatched contractors mark the exact spot of underground breaks without trenching driveways or lawns."
        ],
        bulletPoints: [
          "Downtown Sparks, Sparks Marina & Glendale Industrial (89431, 89434)",
          "Spanish Springs, Wingfield Springs & Red Hawk communities (89436, 89441)",
          "Sun Valley, Lockwood & I-80 East / Fernley connector (89433)"
        ]
      }
    ],
    faqs: [
      {
        question: "Can you locate buried yard leaks in Spanish Springs on large acreage lots?",
        answer: "Yes. Dispatched specialists utilize electromagnetic line tracers and nitrogen-hydrogen tracer gas to trace long service runs from street meters or wellheads directly to the break."
      },
      {
        question: "Are technicians available 24/7 in Sparks for winter pipe bursts?",
        answer: "Yes. Emergency dispatch operates 24 hours a day year-round across Sparks and Washoe County."
      }
    ],
    relatedServices: [
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Long yard main & sprinkler line tracing." },
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor supply & crawlspace diagnostics." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "24/7 combustible gas testing." }
    ],
    relatedLocations: [
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Adjacent Washoe County metro." },
      { name: "Carson City & Minden", slug: "carson-city", context: "Carson Valley south corridor." },
      { name: "Elko & Rural Nevada", slug: "elko-rural-nevada", context: "Fernley, Fallon & East I-80 corridor." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12G. NEVADA CITIES: CARSON CITY & CARSON VALLEY
  "carson-city": {
    slug: "carson-city",
    urlPath: "/carson-city/",
    type: "location",
    name: "Carson City & Carson Valley Leak Detection",
    navTitle: "Carson City",
    metaTitle: "Leak Detection Carson City NV | Minden, Gardnerville & Dayton (725) 313-0108",
    metaDescription: "Water, slab, gas or well line leak in Carson City, Minden, Gardnerville or Dayton, NV? Non-invasive acoustic & thermal locating 24/7. Call (725) 313-0108.",
    primaryKeyword: "leak detection Carson City NV",
    secondaryKeywords: [
      "water leak detection Carson City Nevada",
      "leak repair Minden Gardnerville NV",
      "slab leak detection Dayton NV",
      "gas leak detection Carson City 89701"
    ],
    semanticEntities: [
      "Carson City Public Works Water Utility",
      "Carson Valley, Minden, Gardnerville, Genoa & Dayton",
      "Historic Capitol district & ranch well supply lines",
      "Winter freeze-thaw & seismic fault-zone pipe stress"
    ],
    h1: "Water, Gas, Slab & Well-Line Leak Detection in Carson City, NV",
    heroKicker: "Serving Carson City, Minden, Gardnerville, Genoa & Dayton (89701–89423)",
    heroSubheadline: "Whether protecting historic Carson City homes, state capital commercial buildings, or Carson Valley properties in Minden, Gardnerville, and Dayton, dispatched technicians pinpoint leaks without exploratory damage.",
    directAnswer: "Leak Detection NV coordinates 24/7 non-invasive leak detection across Carson City (89701, 89703, 89706), Dayton, Minden, Gardnerville, and Genoa. Licensed specialists locate hidden water, slab, crawlspace, well-main, and natural gas/propane leaks with acoustic, thermal, and tracer gas equipment. Call (725) 313-0108.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Leak detection specialist serving Carson City and Carson Valley Nevada",
    imageCaption: "Non-invasive electronic leak diagnostics across Carson City, Dayton, Minden, and Gardnerville.",
    sections: [
      {
        heading: "Capital Corridor & Carson Valley Diagnostics",
        subheading: "Municipal water lines, high water tables, and rural ranch piping",
        paragraphs: [
          "Carson City and Douglas/Lyon County homes feature diverse plumbing infrastructure: 19th- and mid-20th-century crawlspaces downtown, modern post-tension slabs in newer subdivisions, and pressurized domestic well lines across Minden, Gardnerville, and Dayton.",
          "Dispatched NSCB-licensed technicians isolate silent water losses under driveways, beneath hardwood floors, and along propane or natural gas feeds with pinpoint non-destructive instruments."
        ],
        bulletPoints: [
          "Downtown Carson City, Westside & Stewart corridor (89701, 89703, 89706)",
          "Minden, Gardnerville, Gardnerville Ranchos & Genoa (89410, 89423, 89411)",
          "Dayton, Mound House & Highway 50 East properties (89403)"
        ]
      }
    ],
    faqs: [
      {
        question: "Do your technicians travel to Minden, Gardnerville, and Dayton as well as Carson City?",
        answer: "Yes. Regional Northern/Western Nevada dispatch covers Carson City, Douglas County (Minden, Gardnerville, Genoa, Zephyr Cove), and Lyon County (Dayton, Silver Springs)."
      },
      {
        question: "Can you find a leak on a private domestic well line in Carson Valley?",
        answer: "Yes. Using pressure isolation at the wellhead pressure tank paired with acoustic ground microphones and tracer gas, technicians locate underground breaks between the well and house."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Crawlspace, wall & main line testing." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Private well & buried yard line locating." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Natural gas & propane leak diagnostics." }
    ],
    relatedLocations: [
      { name: "Reno & Lake Tahoe", slug: "reno", context: "North along Hwy 395 & Lake Tahoe." },
      { name: "Sparks & Spanish Springs", slug: "sparks", context: "Truckee Meadows east corridor." },
      { name: "Elko & Rural Nevada", slug: "elko-rural-nevada", context: "Fernley, Fallon & Central/Northern NV." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12H. NEVADA CITIES: PAHRUMP
  "pahrump": {
    slug: "pahrump",
    urlPath: "/pahrump/",
    type: "location",
    name: "Pahrump & Nye County Leak Detection",
    navTitle: "Pahrump",
    metaTitle: "Leak Detection Pahrump NV | Well Lines, Slab & Propane (725) 313-0108",
    metaDescription: "Water, well main, slab or propane gas leak in Pahrump, NV (89048, 89060, 89061)? 24/7 non-invasive acoustic & tracer gas locating. Call (725) 313-0108.",
    primaryKeyword: "leak detection Pahrump NV",
    secondaryKeywords: [
      "water leak detection Pahrump Nevada",
      "well line leak repair Pahrump 89048",
      "slab leak detection Pahrump NV 89060",
      "propane gas leak repair Pahrump"
    ],
    semanticEntities: [
      "Nye County / Pahrump Valley",
      "Private domestic water wells & booster pump systems",
      "Great Basin Utilities & rural acreage supply runs",
      "Buried propane & Mojave caliche slab foundations"
    ],
    h1: "Water, Slab, Well-Main & Gas Leak Detection in Pahrump, NV",
    heroKicker: "Serving Pahrump Valley • ZIP Codes 89048, 89060 & 89061",
    heroSubheadline: "Just west over the Spring Mountains, Pahrump homes rely on private wells, long acreage supply lines, post-tension slabs, and propane systems. Connect 24/7 with specialists equipped for rural and suburban diagnostics.",
    directAnswer: "Leak Detection NV provides 24/7 dispatch to Pahrump (89048, 89060, 89061) and southern Nye County. Whether your well pump cycles nonstop, your water bill spikes on Great Basin Utilities, or a propane line loses pressure, technicians pinpoint hidden breaks without trenching your acreage. Call (725) 313-0108.",
    featuredImage: "/images/diagnostic_tech_1791662650738.webp",
    imageAlt: "Technician tracing buried well and water lines in Pahrump Nevada",
    imageCaption: "Acoustic and tracer-gas diagnostics for Pahrump slabs, long-run well lines, and propane feeds.",
    sections: [
      {
        heading: "Well Pump Rapid-Cycling & Long Yard Lines in Pahrump",
        subheading: "Pinpointing underground leaks across 1-to-5-acre Mojave desert parcels",
        paragraphs: [
          "When a private well pump in Pahrump cycles on every few minutes with indoor taps shut, pressurized water is escaping underground between the well casing, storage tank, and home—or beneath your concrete slab.",
          "Because desert gravel and caliche absorb thousands of gallons without forming surface puddles, electronic tracer gas and ground microphones pinpoint the exact spot cleanly."
        ],
        bulletPoints: [
          "Well-to-house main line isolation and pressure decay testing",
          "Mountain Falls, Calvada Valley & Winery Estates slab & pool diagnostics",
          "Buried propane tank-to-home line electronic PPM sniffing"
        ]
      }
    ],
    faqs: [
      {
        question: "Why does my Pahrump well pump keep turning on when no water is running?",
        answer: "Continuous short-cycling indicates either a failed pressure-tank check valve or an underground water leak between the wellhead and household fixtures. Dispatched technicians isolate each section to pinpoint the exact break."
      },
      {
        question: "Do you dispatch to Mountain Falls, Calvada Valley, and north Pahrump?",
        answer: "Yes. Priority Highway 160 dispatch covers all of 89048, 89060, and 89061."
      }
    ],
    relatedServices: [
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Well-main & buried yard pipe locating." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Concrete slab acoustic pinpointing." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Propane & natural gas leak testing." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Highway 160 Clark County dispatch." },
      { name: "Spring Valley Core", slug: "spring-valley-center", context: "West valley dispatch hub." },
      { name: "Carson City & Minden", slug: "carson-city", context: "Western Nevada rural & well service." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12I. NEVADA CITIES: MESQUITE
  "mesquite": {
    slug: "mesquite",
    urlPath: "/mesquite/",
    type: "location",
    name: "Mesquite & Virgin Valley Leak Detection",
    navTitle: "Mesquite",
    metaTitle: "Leak Detection Mesquite NV | Sun City & Virgin Valley (725) 313-0108",
    metaDescription: "Water, slab, pool or gas leak in Mesquite or Bunkerville, NV (89027)? Non-invasive acoustic, thermal & pool hydrophone testing. Call (725) 313-0108.",
    primaryKeyword: "leak detection Mesquite NV",
    secondaryKeywords: [
      "water leak detection Mesquite Nevada",
      "slab leak repair Sun City Mesquite",
      "pool leak detection Mesquite 89027",
      "irrigation leak repair Virgin Valley"
    ],
    semanticEntities: [
      "Virgin Valley Water District (VVWD)",
      "Sun City Mesquite, Oasis, Falcon Ridge & Bunkerville",
      "High-mineral geothermal/hard water scaling",
      "Golf community swimming pools & post-tension slabs"
    ],
    h1: "Water, Slab, Pool & Gas Leak Detection in Mesquite, NV",
    heroKicker: "Serving Mesquite, Sun City Mesquite, Bunkerville & Virgin Valley (89027)",
    heroSubheadline: "High-mineral Virgin Valley water, scorching Mojave summers, and resort golf community slabs and pools require accurate, non-destructive leak diagnostics. Call 24/7 for licensed dispatch in Mesquite.",
    directAnswer: "Leak Detection NV connects Mesquite and Bunkerville homeowners (89027) with licensed technicians for water, slab, swimming pool, irrigation, and gas leak diagnostics. Equipment includes ultrasonic ground sensors, FLIR thermal imaging, and pool hydrophones to minimize property disruption and support Virgin Valley Water District leak reviews. Call (725) 313-0108.",
    featuredImage: "/images/pool_leak_detection_1791567711591.webp",
    imageAlt: "Pool and slab leak detection serving Mesquite and Virgin Valley Nevada",
    imageCaption: "Non-invasive pool hydrophone and acoustic slab diagnostics in Mesquite, NV.",
    sections: [
      {
        heading: "Hard Water & Desert Soil Leaks in the Virgin Valley",
        subheading: "Protecting Sun City Mesquite slabs, resort pools, and drip lines",
        paragraphs: [
          "Mesquite tap water carries high mineral concentrations that accelerate pinhole corrosion inside copper manifolds, water heaters, and angle stops. Combined with 115°F summer ground heat, concrete slab lines and pool skimmers face intense stress.",
          "Dispatched technicians diagnose Sun City Mesquite, Falcon Ridge, and Bunkerville properties cleanly without breaking tile or draining pools."
        ],
        bulletPoints: [
          "Sun City Mesquite, Falcon Ridge & Canyon Crest slab and water diagnostics",
          "HOA and private backyard swimming pool dye & hydrophone inspections",
          "Virgin Valley Water District (VVWD) leak repair documentation"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you serve Sun City Mesquite and Bunkerville?",
        answer: "Yes. Dispatched specialists cover all neighborhoods in Mesquite and Bunkerville across ZIP codes 89027 and 89007."
      },
      {
        question: "Can you locate a pool leak in Mesquite without draining the pool?",
        answer: "Yes. Technicians use underwater hydrophones, dye testing, and pressure plugs while the pool stays completely full."
      }
    ],
    relatedServices: [
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Resort & backyard pool hydrophone testing." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Pinpointing under-tile copper leaks." },
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Main line & indoor leak locating." }
    ],
    relatedLocations: [
      { name: "North Las Vegas", slug: "north-las-vegas", context: "Southwest along the I-15 corridor." },
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Clark County regional hub." },
      { name: "Boulder City & Laughlin", slug: "boulder-city", context: "Southern Nevada Colorado River corridor." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12J. NEVADA CITIES: BOULDER CITY & LAUGHLIN
  "boulder-city": {
    slug: "boulder-city",
    urlPath: "/boulder-city/",
    type: "location",
    name: "Boulder City & Laughlin Leak Detection",
    navTitle: "Boulder City",
    metaTitle: "Leak Detection Boulder City & Laughlin NV | (725) 313-0108",
    metaDescription: "Water, slab, pool or gas leak in Boulder City (89005) or Laughlin (89029)? 24/7 non-invasive acoustic, thermal & pool leak diagnostics. Call (725) 313-0108.",
    primaryKeyword: "leak detection Boulder City NV",
    secondaryKeywords: [
      "water leak detection Boulder City",
      "leak detection Laughlin NV 89029",
      "slab leak repair Boulder City 89005",
      "pool leak detection Boulder City"
    ],
    semanticEntities: [
      "Boulder City Historic District & Lake Mead corridor",
      "Laughlin Colorado River residential & resort corridor",
      "City of Boulder City Utilities & Big Bend Water District",
      "Vintage galvanized mains & desert caliche slabs"
    ],
    h1: "Water, Gas, Slab & Pool Leak Detection in Boulder City & Laughlin, NV",
    heroKicker: "Serving Boulder City (89005), Lake Mead & Laughlin (89029)",
    heroSubheadline: "From 1930s historic homes near Downtown Boulder City to riverfront properties and slabs in Laughlin, dispatched technicians deliver fast, non-invasive electronic leak pinpointing.",
    directAnswer: "Leak Detection NV dispatches NSCB-licensed specialists along the U.S. 93 / 95 corridor to Boulder City (89005) and Laughlin (89029). Electronic acoustic geophones, thermal cameras, and pool hydrophones locate corroded historic mains, concrete slab ruptures, and pool leaks cleanly. Call (725) 313-0108.",
    featuredImage: "/images/water_heater_repair_1791566167061.webp",
    imageAlt: "Leak detection technician servicing Boulder City and Laughlin Nevada homes",
    imageCaption: "Non-invasive leak detection serving Boulder City historic homes and Laughlin riverfront properties.",
    sections: [
      {
        heading: "Historic Plumbing & Colorado River Corridor Challenges",
        subheading: "Aging galvanized supply runs, river-heat pool loss, and rocky subsoils",
        paragraphs: [
          "Boulder City features historic 1930s–1970s homes with aging galvanized or early copper lines running through rocky Lake Mead basalt and caliche. Meanwhile, Laughlin endures some of the highest summer temperatures in the United States, straining pool lines, slab foundations, and main shutoffs.",
          "Dispatched specialists locate hidden leaks cleanly and furnish documentation compatible with Boulder City Municipal Utilities and Big Bend Water District reviews."
        ],
        bulletPoints: [
          "Historic Downtown Boulder City, Lakeview & Hemenway Valley (89005)",
          "Laughlin residential subdivisions, riverfront condos & hospitality properties (89029)",
          "Non-invasive locating tailored for vintage plaster, tile, and rocky terrain"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you service both Boulder City and Laughlin?",
        answer: "Yes. Southern Clark County dispatch covers Boulder City, Searchlight, and Laughlin 24/7."
      },
      {
        question: "Can you trace aging galvanized yard lines in historic Boulder City neighborhoods?",
        answer: "Yes. Electromagnetic pipe locators easily trace metallic galvanized and copper mains from street meters to older foundations."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Historic supply & yard main locating." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Desert pool & spa diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Sub-concrete pinhole detection." }
    ],
    relatedLocations: [
      { name: "Henderson & Green Valley", slug: "henderson", context: "Adjacent northwest Clark County city." },
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Regional dispatch center." },
      { name: "Mesquite & Virgin Valley", slug: "mesquite", context: "Eastern Clark County service area." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12K. NEVADA CITIES: ELKO, FERNLEY, FALLON, WINNEMUCCA & RURAL NEVADA
  "elko-rural-nevada": {
    slug: "elko-rural-nevada",
    urlPath: "/elko-rural-nevada/",
    type: "location",
    name: "Elko, Fernley, Fallon & Rural Nevada Leak Detection",
    navTitle: "Elko & Rural NV",
    metaTitle: "Leak Detection Elko, Fernley, Fallon & Winnemucca NV (725) 313-0108",
    metaDescription: "Freeze-burst pipe, water, well or gas leak in Elko, Spring Creek, Fernley, Fallon, Winnemucca or Ely, NV? 24/7 licensed detection. Call (725) 313-0108.",
    primaryKeyword: "leak detection Elko NV",
    secondaryKeywords: [
      "water leak detection Fernley Fallon NV",
      "frozen pipe leak repair Elko Spring Creek 89801",
      "underground leak detection Winnemucca Lovelock",
      "gas leak repair Ely Tonopah Nevada"
    ],
    semanticEntities: [
      "Elko, Spring Creek, Winnemucca, Lovelock, Battle Mountain & Ely",
      "Fernley, Fallon, Yerington & Hawthorne Western NV",
      "Sub-zero winter freeze-thaw burst piping",
      "Deep-buried rural well mains, ranches & propane distribution"
    ],
    h1: "Water, Freeze-Burst, Well & Gas Leak Detection in Elko & Rural Nevada",
    heroKicker: "Serving Elko, Spring Creek, Fernley, Fallon, Winnemucca, Lovelock & Ely",
    heroSubheadline: "Sub-zero high-desert winters, expansive ranch well systems, and remote municipal mains across Northern and Eastern Nevada require specialized non-invasive acoustic and tracer-gas leak detection. Call 24/7 for regional contractor matching.",
    directAnswer: "Leak Detection NV coordinates licensed leak detection specialists across Northern, Central, and Eastern Nevada—including Elko (89801), Spring Creek (89815), Fernley (89408), Fallon (89406), Winnemucca (89445), Lovelock, Battle Mountain, Ely (89301), and Tonopah. Technicians locate freeze-burst indoor lines, buried well mains, and propane leaks accurately. Call (725) 313-0108.",
    featuredImage: "/images/gas_leak_detection_1791567732913.webp",
    imageAlt: "Technician using electronic gas and acoustic water detectors in Northern Nevada",
    imageCaption: "Electronic tracer gas and thermal leak diagnostics serving Elko, Fernley, Fallon, Winnemucca, and Ely.",
    sections: [
      {
        heading: "Deep Freeze & Rural Infrastructure Diagnostics Across the I-80 & Hwy 50 Corridors",
        subheading: "Pinpointing buried mains and crawlspace freeze splits across northern valleys",
        paragraphs: [
          "Across Elko, Spring Creek, Winnemucca, and Ely, winter temperatures regularly drop well below zero, freezing uninsulated crawlspace pipes, ranch hydrants, and shallow municipal connections. Meanwhile, rapidly growing western towns like Fernley and Fallon contend with aging irrigation ditches, high groundwater tables, and slab leaks.",
          "Using helium-nitrogen tracer gas, acoustic ground microphones, and FLIR thermal cameras, dispatched pros find exact underground leaks without tearing up frozen gravel drives or ranch landscaping."
        ],
        bulletPoints: [
          "I-80 Corridor: Fernley, Lovelock, Winnemucca, Battle Mountain, Elko & Spring Creek",
          "Lahontan & Mineral Basins: Fallon, Yerington & Hawthorne",
          "U.S. 50 & U.S. 95 / 6: Austin, Eureka, Ely & Tonopah",
          "Commercial, ranch, municipal water main & propane leak pinpointing"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you serve Fernley, Fallon, and Winnemucca in addition to Elko?",
        answer: "Yes. Our Northern and Rural Nevada dispatch network covers Fernley (89408), Fallon (89406), Winnemucca (89445), Lovelock (89419), Elko (89801), Spring Creek (89815), and Ely (89301)."
      },
      {
        question: "Can tracer gas find a water leak buried 4 feet deep below the frost line?",
        answer: "Yes. Non-toxic hydrogen-nitrogen tracer gas rises upward through soil, compacted gravel, and asphalt, allowing technicians to pinpoint deep frost-line leaks accurately."
      }
    ],
    relatedServices: [
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Deep well-main & yard line tracer gas." },
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Freeze-burst wall & crawlspace locating." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Propane & natural gas safety testing." }
    ],
    relatedLocations: [
      { name: "Sparks & Spanish Springs", slug: "sparks", context: "West along I-80 Truckee Meadows." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Northern Nevada regional metro." },
      { name: "Carson City & Minden", slug: "carson-city", context: "Hwy 50 / Carson Valley connection." }
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
    metaTitle: "How It Works | Nevada Non-Invasive Leak Detection Process (725) 313-0108",
    metaDescription: "Our 5-step non-invasive leak detection process for water, gas, slab & pool leaks across all Nevada cities. Acoustic, thermal & hydrophone testing. Call (725) 313-0108.",
    primaryKeyword: "how leak detection works Nevada",
    secondaryKeywords: [
      "leak detection process Las Vegas Reno",
      "non-invasive leak diagnostics",
      "slab leak detection procedure Nevada",
      "leak repair workflow statewide"
    ],
    semanticEntities: [
      "Non-invasive ultrasonic acoustic diagnostics",
      "FLIR thermal infrared moisture inspection",
      "Electronic pool hydrophone listening",
      "Combustible gas PPM sniffers",
      "Nevada State Contractors Board (NSCB) standards"
    ],
    h1: "How Our Precision Leak Detection & Repair Process Works Across Nevada",
    heroKicker: "5-Step Non-Invasive Diagnostic & Permanent Repair Process",
    heroSubheadline: "From 24/7 emergency intake to acoustic and thermal localization anywhere in Nevada, here is how our licensed contractor network protects your property without destructive guesswork.",
    directAnswer: "Our Nevada leak detection process follows five systematic stages: 24/7 rapid triage, non-invasive electronic diagnostics (acoustic ground microphones, thermal imaging, combustible gas sniffers, and pool hydrophones), pinpoint target marking within inches, upfront written itemized estimates, and NSCB code-compliant repairs with pressure verification. Call (725) 313-0108.",
    featuredImage: "/images/diagnostic_tech_1791662650738.webp",
    imageAlt: "Nevada technician conducting non-invasive acoustic and thermal leak diagnostics",
    imageCaption: "Mobile diagnostic technicians using ultrasonic acoustic listening and digital scanning tools across Nevada.",
    sections: [
      {
        heading: "Step 1: Rapid 24/7 Assessment & Regional Dispatch",
        subheading: "Immediate telephone triage to protect your Nevada property",
        paragraphs: [
          "When you call (725) 313-0108 from any city in Nevada, an intake coordinator assesses your leak symptoms immediately and guides you through safe main water or gas shutoff precautions if needed.",
          "Your request is dispatched directly to qualified regional technicians serving Las Vegas, Henderson, North Las Vegas, Spring Valley, Reno, Sparks, Carson City, Pahrump, Mesquite, Boulder City, or rural NV."
        ],
        bulletPoints: [
          "24/7/365 phone triage across all Nevada ZIP codes",
          "Immediate shutoff guidance to limit active water or gas exposure",
          "Regional matching with NSCB-licensed specialists carrying calibrated gear"
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
          "Ultrasonic acoustic sensors to hear pressurized water beneath concrete slabs",
          "Thermal infrared imaging to map hidden moisture trails behind walls and floors",
          "Hydrophones and dye testing for swimming pools and spas without draining",
          "Digital PPM combustible gas wands for natural gas and rural propane systems"
        ]
      },
      {
        heading: "Step 3: Pinpoint Leak Location Identification",
        subheading: "Isolating pipe ruptures to within inches",
        paragraphs: [
          "By cross-referencing acoustic frequencies and thermal gradients, technicians mark the exact breach beneath foundation slabs, inside wall cavities, or under pool decking—minimizing any repair access footprint."
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
        subheading: "Permanent craftsmanship plus utility rebate documentation",
        paragraphs: [
          "All repairs conform to Nevada State Contractors Board (NSCB) regulations and local municipal codes. Post-repair static pressure testing verifies airtight and watertight integrity, with repair documentation prepared for insurance or utility credits (LVVWD, Henderson, TMWA, VVWD)."
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
        question: "Are technicians licensed and insured in Nevada?",
        answer: "Yes. Work is performed by independent licensed contractors complying with Nevada State Contractors Board (NSCB) standards and local codes statewide."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Concealed potable line diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Concrete foundation diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool plumbing & shell testing." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Combustible gas safety testing." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Southern Nevada rapid response." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Northern Nevada diagnostics." },
      { name: "Henderson & Green Valley", slug: "henderson", context: "Clark County residential coverage." }
    ],
    schemaType: "HowTo"
  },

  // 13b. ABOUT PAGE (Alias & Company Profile)
  "about": {
    slug: "about",
    urlPath: "/about/",
    type: "about",
    name: "About Leak Detection NV | Statewide Plumber Network",
    navTitle: "About Us",
    metaTitle: "About Leak Detection NV | Nevada Licensed Plumber Network",
    metaDescription: "We connect homeowners across Las Vegas, Henderson, Reno, Sparks, Carson City & all Nevada cities with pre-screened, NSCB-licensed leak detection pros. Call (725) 313-0108.",
    primaryKeyword: "Leak Detection NV network",
    secondaryKeywords: [
      "about Leak Detection NV",
      "leak detection specialists Nevada",
      "water gas slab pool leak repair statewide",
      "6875 Groveview Ln Las Vegas"
    ],
    semanticEntities: [
      "Nevada State Contractors Board (NSCB) standards",
      "Non-invasive ultrasonic acoustic diagnostics",
      "FLIR thermal infrared moisture inspection",
      "Statewide Nevada contractor matching"
    ],
    h1: "About Leak Detection NV — Statewide Licensed Specialist Network",
    heroKicker: "Precision Non-Invasive Diagnostics • Serving All Nevada Cities",
    heroSubheadline: "Coordinating 24/7 emergency water, gas, slab, and swimming pool leak detection across Las Vegas, Henderson, North Las Vegas, Spring Valley, Reno, Sparks, Carson City, and rural Nevada.",
    directAnswer: "Leak Detection NV connects residential and commercial property owners across the entire state of Nevada with pre-screened, independent Nevada State Contractors Board (NSCB) licensed leak detection specialists. Headquartered at 6875 Groveview Ln, Las Vegas, NV 89103, our 24/7 dispatch network coordinates acoustic, thermal, tracer-gas, and hydrophone diagnostics statewide. Call (725) 313-0108.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Leak Detection NV statewide diagnostic equipment and technical standards",
    imageCaption: "Matching Nevada property owners 24/7 with NSCB-licensed acoustic and thermal leak specialists.",
    sections: [
      {
        heading: "Our Mission: Non-Invasive Precision Across Every Nevada City",
        subheading: "Eliminating guesswork and protecting Nevada homes from Las Vegas to Reno",
        paragraphs: [
          "Hidden water, slab, gas, and pool leaks can silently cause severe structural damage. Exploratory demolition—breaking through post-tension concrete slabs or tearing open walls blindly—frequently costs more than the pipe repair itself.",
          "Leak Detection NV bridges property owners across Southern, Northern, and Rural Nevada with vetted independent specialists equipped with electronic acoustic listening gear, FLIR infrared thermography, calibrated gas sniffers, and underwater pool hydrophones."
        ],
        bulletPoints: [
          "24/7 Rapid Emergency Dispatch across Southern, Northern & Rural Nevada",
          "Non-invasive acoustic, thermal, tracer gas, and hydrophone leak detection",
          "Pre-screened independent contractors complying with NSCB C-1 standards",
          "Documentation formatted for LVVWD, Henderson, TMWA & insurance claims"
        ]
      },
      {
        heading: "Headquartered in Las Vegas, Dispatched Statewide",
        subheading: "Strict licensing verification and transparent estimates",
        paragraphs: [
          "From our Las Vegas coordination office at 6875 Groveview Ln, our intake desk routes urgent and scheduled inspections to qualified regional contractors in Las Vegas, Henderson, North Las Vegas, Spring Valley, Reno, Sparks, Carson City, Pahrump, Mesquite, Boulder City, and Elko.",
          "All contractors are responsible for adhering to Nevada building codes and providing transparent written quotes before repair work commences."
        ]
      }
    ],
    faqs: [
      {
        question: "Do dispatched contractors provide upfront pricing before beginning leak repairs?",
        answer: "Yes. Specialists conduct non-invasive diagnostics and present itemized written quotes before starting repairs."
      },
      {
        question: "How can I verify a plumber's license in Nevada?",
        answer: "You can verify any contractor's license and bond status through the official Nevada State Contractors Board public database at nscb.nv.gov."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Domestic supply line diagnostics." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Combustible gas leak testing." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool and spa leak diagnostics." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Las Vegas Valley regional hub." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Northern Nevada & Washoe metro." },
      { name: "Henderson & Green Valley", slug: "henderson", context: "Southeast Clark County metro." }
    ],
    schemaType: "AboutPage"
  },

  // 14. CONTACT & NAP PAGE
  "contact": {
    slug: "contact",
    urlPath: "/contact/",
    type: "contact",
    name: "Contact & NAP | Leak Detection NV",
    navTitle: "Contact & NAP",
    metaTitle: "Contact Leak Detection NV | Statewide 24/7 Dispatch (725) 313-0108",
    metaDescription: "Request 24/7 leak detection anywhere in Nevada. Call (725) 313-0108 anytime for Las Vegas, Henderson, Reno, Sparks, Carson City & Spring Valley. HQ: 6875 Groveview Ln, Las Vegas, NV 89103.",
    primaryKeyword: "contact Leak Detection NV",
    secondaryKeywords: [
      "Leak Detection NV phone number",
      "6875 Groveview Ln Las Vegas NV 89103",
      "call leak detection Nevada",
      "emergency leak repair phone Las Vegas Reno"
    ],
    semanticEntities: [
      "Telephone: (725) 313-0108",
      "Headquarters address: 6875 Groveview Ln, Las Vegas, NV 89103",
      "Target service area: All Nevada Cities Statewide",
      "24/7 emergency dispatch coordination"
    ],
    h1: "Contact Leak Detection NV — 24/7 Statewide Dispatch",
    heroKicker: "24/7 Emergency Line: (725) 313-0108 • HQ: 6875 Groveview Ln, Las Vegas, NV 89103",
    heroSubheadline: "Have an active water leak, natural gas odor, sub-slab rupture, or leaking pool anywhere in Nevada? Call our 24/7 dispatch desk directly for immediate regional routing.",
    directAnswer: "For urgent water, gas, slab, and swimming pool leaks anywhere in Nevada, calling directly gives you the fastest triage. Dial (725) 313-0108 to reach our 24/7 dispatch desk headquartered at 6875 Groveview Ln, Las Vegas, NV 89103 for service across Las Vegas, Henderson, North Las Vegas, Spring Valley, Reno, Sparks, Carson City, Pahrump, Mesquite, Boulder City, and Elko.",
    featuredImage: "/images/contact_office_1791662625889.webp",
    imageAlt: "Leak Detection NV dispatch office and coordination center at 6875 Groveview Ln",
    imageCaption: "Live 24/7 emergency telephone support and statewide Nevada service coordination from 6875 Groveview Ln.",
    sections: [
      {
        heading: "Official Business Information & NAP Details",
        subheading: "Verified headquarters in Las Vegas serving all Nevada municipalities",
        paragraphs: [
          "Leak Detection NV operates 24 hours a day, 7 days a week from our Las Vegas coordination office. When you call (725) 313-0108, our desk immediately triages your issue, shares shutoff safety guidance, and matches your address with a licensed specialist in your Nevada city.",
          "Our physical headquarters is located at 6875 Groveview Ln, Las Vegas, NV 89103, supporting priority Clark County dispatch and regional contractor routing across Northern, Central, and Southern Nevada."
        ],
        bulletPoints: [
          "Company Name: Leak Detection NV",
          "Headquarters Address: 6875 Groveview Ln, Las Vegas, NV 89103",
          "Primary 24/7 Telephone: (725) 313-0108",
          "Operating Hours: 24 Hours a Day, 7 Days a Week, 365 Days a Year",
          "Statewide Coverage: Las Vegas, Henderson, North Las Vegas, Spring Valley, Reno, Sparks, Carson City, Pahrump, Mesquite, Boulder City & Elko",
          "Core Services: Water Leak Detection, Slab Leak Detection, Pool Leak Detection, Gas Leak Detection"
        ]
      }
    ],
    faqs: [
      {
        question: "Is your phone line answered 24 hours a day across all of Nevada?",
        answer: "Yes. Our dispatch line at (725) 313-0108 is answered 24/7/365 for urgent water, gas, slab, and pool emergencies in every Nevada city."
      },
      {
        question: "What should I do while waiting for a technician to arrive?",
        answer: "If water is actively flooding, shut off your main water shutoff valve (garage, crawlspace, or curb meter box). If you smell natural gas or propane, evacuate immediately and call from outside."
      },
      {
        question: "Can I schedule non-emergency pool, well, or slab testing in advance?",
        answer: "Yes. Call (725) 313-0108 anytime to schedule preventative acoustic inspections, pool bucket evaluations, or pre-purchase plumbing leak checks."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor and domestic water supply lines." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Under-foundation acoustic diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone pool and spa diagnostics." },
      { title: "Gas Leak Detection & Repair", slug: "gas-leak-detection", description: "Natural gas & propane line testing." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Clark County metro dispatch." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Washoe County & Tahoe dispatch." },
      { name: "Henderson & Green Valley", slug: "henderson", context: "Southeast valley dispatch." }
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
    metaTitle: "Leak Detection Cost in Nevada & Price Guide (2026) | Leak Detection NV",
    metaDescription: "How much does leak detection cost in Nevada? See 2026 price ranges for Las Vegas, Henderson, Reno & statewide, plus insurance & utility credit guides.",
    primaryKeyword: "Nevada leak detection blog",
    secondaryKeywords: [
      "slab leak warning signs Las Vegas Reno",
      "pool bucket test guide",
      "smell gas emergency protocol",
      "caliche soil pipe damage"
    ],
    semanticEntities: [
      "Slab leak diagnostics",
      "Swimming pool 24-hour bucket test",
      "Combustible natural gas safety",
      "Nevada soil & freeze-thaw geology"
    ],
    h1: "Leak Detection NV Blog & Homeowner Diagnostic Guides",
    heroKicker: "Technical Guides • DIY Diagnostics • Emergency Protocols Statewide",
    heroSubheadline: "Practical homeowner guides and technical insights from licensed leak detection specialists serving Nevada cities.",
    directAnswer: "Explore in-depth guides covering slab leak warning signs, the swimming pool bucket test, natural gas safety procedures, water meter checks, and Nevada utility leak credits. For 24/7 dispatch anywhere in Nevada, call (725) 313-0108.",
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
    metaTitle: "Privacy Policy | Leak Detection NV",
    metaDescription: "How Leak Detection NV collects, uses and protects your personal information, and the privacy choices available to you.",
    primaryKeyword: "Leak Detection NV privacy policy",
    secondaryKeywords: [
      "leak detection privacy policy",
      "6875 Groveview Ln privacy Las Vegas",
      "customer data protection policy"
    ],
    semanticEntities: [
      "Telephone Consumer Protection Act (TCPA)",
      "Consumer data protection protocols",
      "Nevada consumer privacy regulations"
    ],
    h1: "Privacy Policy for Leak Detection NV",
    heroKicker: "Effective Date: October 2026 • HQ: 6875 Groveview Ln, Las Vegas, NV 89103",
    heroSubheadline: "This Privacy Policy describes how Leak Detection NV collects, uses, and safeguards information when you visit our website or contact our statewide service line.",
    directAnswer: "Leak Detection NV operates from 6875 Groveview Ln, Las Vegas, NV 89103. We collect only necessary contact and property information (name, telephone number, Nevada service address, and leak description) to coordinate leak detection and repair services across Nevada.",
    sections: [
      {
        heading: "1. Information We Collect",
        subheading: "Data gathered to coordinate diagnostic and repair services",
        paragraphs: [
          "When you contact our team by calling (725) 313-0108 or submitting an inquiry, we collect personal information you voluntarily provide, including your full name, telephone number, service address in Nevada, email address, and details regarding your water, gas, slab, or pool leak issue.",
          "We do not collect sensitive financial data such as credit card numbers or banking passwords through our website. Payment transactions are handled directly with the servicing contractor."
        ]
      },
      {
        heading: "2. How We Use Your Information",
        subheading: "Purpose of service scheduling and communication",
        paragraphs: [
          "The information you provide is used strictly to communicate with you regarding your service request, connect you with regional Nevada technicians, provide upfront written estimates, and coordinate service delivery.",
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
          "If you have questions regarding this Privacy Policy or wish to request deletion or correction of your contact records, contact: Leak Detection NV, 6875 Groveview Ln, Las Vegas, NV 89103, Phone: (725) 313-0108."
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
        answer: "Call (725) 313-0108 or write to 6875 Groveview Ln, Las Vegas, NV 89103."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Potable supply line leak diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Concrete slab foundation diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool shell and plumbing line testing." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Las Vegas headquarters area." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Northern Nevada coverage." }
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
    metaTitle: "Legal Disclaimer & Licensing | Leak Detection NV",
    metaDescription: "Leak Detection NV is a referral service. Work across Nevada is performed by independent licensed contractors. Read our licensing and service terms.",
    primaryKeyword: "Leak Detection NV disclaimer licensing",
    secondaryKeywords: [
      "leak detection referral service",
      "independent licensed contractors Nevada",
      "NSCB plumbing licensing terms",
      "Nevada contractor referral"
    ],
    semanticEntities: [
      "Nevada State Contractors Board (NSCB)",
      "Independent contractor referral service",
      "Limitation of liability terms",
      "Nevada statewide service agreements"
    ],
    h1: "Legal Disclaimer & Contractor Licensing Information",
    heroKicker: "Referral Service Terms • Independent Licensed Nevada Contractors",
    heroSubheadline: "Transparency and licensing standards for homeowners and commercial property owners across all Nevada cities.",
    directAnswer: "Leak Detection NV is a customer referral and matching service. All leak detection, plumbing, gas piping, slab excavation, and restoration services across Nevada are performed exclusively by independent, third-party licensed contractors holding valid Nevada State Contractors Board (NSCB) licenses. Leak Detection NV does not directly employ plumbers or perform plumbing work.",
    sections: [
      {
        heading: "1. Contractor Matching & Referral Service",
        subheading: "Independent plumbing and leak specialists across Nevada",
        paragraphs: [
          "Leak Detection NV operates as an independent lead generation and customer matching portal connecting property owners across Nevada—including Las Vegas, Henderson, North Las Vegas, Spring Valley, Reno, Sparks, Carson City, Pahrump, Mesquite, Boulder City, and rural Nevada—with pre-screened, independent plumbing contractors.",
          "When you contact our dispatch line at (725) 313-0108, your request is routed to an independent contractor possessing appropriate state trade licenses, commercial liability insurance, and electronic leak detection equipment."
        ]
      },
      {
        heading: "2. Independent Contractor Responsibility & Licensing",
        subheading: "Nevada State Contractors Board (NSCB) compliance",
        paragraphs: [
          "Each independent contractor dispatched to your property is solely responsible for evaluating job site conditions, executing technical diagnostics, providing itemized repair estimates, and completing all plumbing or gas repairs in compliance with the Nevada State Contractors Board (NSCB) and applicable county/municipal plumbing codes.",
          "Property owners are encouraged to verify contractor license numbers, bond standing, and insurance coverage directly with the servicing contractor prior to authorizing major excavation or repair work."
        ]
      },
      {
        heading: "3. Limitation of Liability & Warranties",
        subheading: "Service terms and guarantees",
        paragraphs: [
          "Leak Detection NV does not guarantee, warrant, or assume liability for the work, acts, omissions, or representations of independent service providers. Any warranties, guarantees, or service contracts are entered into directly between the property owner and the servicing contractor.",
          "Emergency dispatch arrival estimates (such as 30–60 minute metro response windows) depend on regional traffic, weather conditions, distance, and call volumes."
        ]
      },
      {
        heading: "4. Business Office & Questions",
        subheading: "Contact our Las Vegas headquarters",
        paragraphs: [
          "If you have questions regarding these licensing disclosures or service policies, contact our headquarters at 6875 Groveview Ln, Las Vegas, NV 89103, or call (725) 313-0108."
        ]
      }
    ],
    faqs: [
      {
        question: "Does Leak Detection NV perform plumbing work directly?",
        answer: "No. Leak Detection NV connects Nevada homeowners with pre-screened, independent plumbing contractors licensed by the Nevada State Contractors Board (NSCB)."
      },
      {
        question: "Are dispatched contractors licensed and insured?",
        answer: "Yes. Independent plumbing professionals in our network maintain active NSCB licenses, general liability insurance, and workers' compensation coverage."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Potable supply line leak diagnostics." },
      { title: "Gas Leak Detection & Repair", slug: "gas-leak-detection", description: "24/7 emergency gas line diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Sub-foundation acoustic diagnostics." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Southern Nevada service area." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Northern Nevada service area." }
    ],
    schemaType: "WebPage"
  },

  // 18. SITEMAP PAGE
  "sitemap": {
    slug: "sitemap",
    urlPath: "/sitemap/",
    type: "about",
    name: "Sitemap | Leak Detection NV Statewide",
    navTitle: "Sitemap",
    metaTitle: "Sitemap | Leak Detection NV All Nevada Cities Directory",
    metaDescription: "Browse every Leak Detection NV page: water, gas, slab & pool leak detection, plus city pages for Las Vegas, Henderson, Reno, Sparks, Carson City, Spring Valley & rural NV.",
    primaryKeyword: "Leak Detection NV sitemap Nevada",
    secondaryKeywords: [
      "Nevada leak detection pages directory",
      "Las Vegas Reno plumbing site map",
      "water gas slab pool leak navigation"
    ],
    semanticEntities: [
      "Leak Detection NV site index",
      "Nevada statewide city navigation directory",
      "Clark, Washoe, Carson, Nye & Elko County pages"
    ],
    h1: "Leak Detection NV Sitemap & Statewide Directory",
    heroKicker: "Complete Directory • All Nevada Cities & Services",
    heroSubheadline: "Easily navigate every service page, Nevada city dispatch guide, technical article, and company policy.",
    directAnswer: "Browse every page on Leak Detection NV: water leak detection, 24/7 gas leak testing, slab leak acoustic locating, swimming pool hydrophone testing, cost guides, and dedicated city pages across Las Vegas, Henderson, North Las Vegas, Spring Valley, Reno, Sparks, Carson City, Pahrump, Mesquite, Boulder City, and Elko.",
    sections: [
      {
        heading: "Core Leak Detection Service Pages",
        subheading: "Non-invasive electronic diagnostic capabilities statewide",
        paragraphs: [
          "Specialized non-destructive services protecting homes, slabs, yards, and pools across Nevada:"
        ],
        bulletPoints: [
          "Home / Main Hub: Statewide Water, Gas, Slab & Pool Leak Detection",
          "Water Leak Detection & Repair: Acoustic & thermal diagnostics for hidden pipes",
          "Gas Leak Detection & Emergency Repair: 24/7 electronic sniffing and utility clearances",
          "Slab Leak Detection & Repair: Sub-concrete foundation acoustic geophones & infrared",
          "Pool Leak Detection & Repair: Underwater hydrophones & precision dye testing",
          "Underground & Yard Pipe Leaks: Buried potable mains, wells & irrigation lines",
          "24/7 Emergency Leak Diagnostics: Immediate statewide rapid dispatch"
        ]
      },
      {
        heading: "Nevada Cities & Regional Dispatch Coverage",
        subheading: "Southern, Northern, Capital, Western & Rural Nevada",
        paragraphs: [
          "Dedicated city hubs covering soil conditions, freeze-thaw exposure, and municipal utility rebate filings:"
        ],
        bulletPoints: [
          "Las Vegas, Henderson, North Las Vegas & Boulder City / Laughlin",
          "Spring Valley Core, The Lakes, Spanish Trail, Summerlin South & Rhodes Ranch",
          "Reno, Lake Tahoe (Incline Village), Sparks & Spanish Springs",
          "Carson City, Minden, Gardnerville, Dayton, Pahrump & Mesquite",
          "Elko, Spring Creek, Fernley, Fallon, Winnemucca, Lovelock & Ely"
        ]
      },
      {
        heading: "Educational Guides & Cost Resources",
        subheading: "Technical knowledge base and price guides",
        paragraphs: [
          "In-depth articles covering DIY leak testing, water bill rebates, and Nevada leak pricing:"
        ],
        bulletPoints: [
          "Blog & Knowledge Base Main Hub",
          "Pool, Sprinkler & Backyard Leaks in Spring Valley, Las Vegas",
          "Spring Valley Leak Detection: A Desert Homeowner’s Guide (2026)",
          "5 Warning Signs of a Slab Leak in Spring Valley & Las Vegas Homes",
          "The 24-Hour Bucket Test: How to Tell if Your Pool is Leaking or Evaporating",
          "What to Do When You Smell Natural Gas in Your Home: Step-by-Step Safety Guide",
          "How Desert Caliche Soil Destroys Underground Plumbing in Southern Nevada",
          "How to Read Your Water Meter to Detect Hidden Leaks Before a High Bill",
          "How to Get a Leak Credit on Your Las Vegas Valley Water District (LVVWD) Bill"
        ]
      },
      {
        heading: "Company Information & Legal",
        subheading: "Headquarters, licensing, and policies",
        paragraphs: [
          "Transparency and compliance information for our Las Vegas headquarters at 6875 Groveview Ln, Las Vegas, NV 89103:"
        ],
        bulletPoints: [
          "About Us: Nevada Statewide Licensed Specialist Network",
          "Contact & Location: 24/7 Dispatch Desk & Embedded Google Map",
          "How It Works: 5-Step Non-Invasive Diagnostic Process",
          "Privacy Policy: Consumer data protection & TCPA compliance",
          "Legal Disclaimer & Licensing: Referral service terms & NSCB contractor disclosures"
        ]
      }
    ],
    faqs: [
      {
        question: "Where is Leak Detection NV physically headquartered?",
        answer: "Our dispatch headquarters is located at 6875 Groveview Ln, Las Vegas, NV 89103, coordinating licensed leak specialists across all Nevada cities 24/7. Call (725) 313-0108."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection", slug: "water-leak-detection", description: "Pinpoint hidden supply lines." },
      { title: "Gas Leak Detection", slug: "gas-leak-detection", description: "24/7 gas line safety testing." }
    ],
    relatedLocations: [
      { name: "Las Vegas Metro", slug: "las-vegas", context: "Southern Nevada hub." },
      { name: "Reno & Lake Tahoe", slug: "reno", context: "Northern Nevada hub." }
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
    metaDescription: "Rising water bill in Spring Valley, Las Vegas? Learn where desert homes hide leaks, what a pro visit involves, and what shapes pricing. Call (725) 313-0108.",
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
