/**
 * Site content and SEO architecture data for Leak Detection NV.
 * Specializing in Water, Gas, Slab, Well-Line & Swimming Pool Leak Detection & Repair.
 * Target City: Carson City, Nevada (ZIP codes 89701, 89702, 89703, 89705, 89706).
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
  targetArea: "Carson City, NV",
  telephone: "+1-725-313-0108",
};

export const sitePages: Record<string, PageContent> = {
  // 1. HOMEPAGE: CARSON CITY, NEVADA AUTHORITY HUB
  home: {
    slug: "",
    urlPath: "/",
    type: "home",
    name: "Carson City Leak Detection — Water, Gas, Slab & Pool Specialists",
    navTitle: "Home",
    metaTitle: "Leak Detection in Carson City, NV | Water, Slab & Gas (725) 313-0108",
    metaDescription: "Hidden water, slab, pool or gas leak in Carson City, NV? Connect 24/7 with NSCB-licensed specialists serving 89701, 89703 & 89706. Call (725) 313-0108.",
    primaryKeyword: "leak detection Carson City NV",
    secondaryKeywords: [
      "water leak detection Carson City Nevada",
      "slab leak repair Carson City NV",
      "gas leak detection Carson City",
      "pool leak detection Carson City",
      "underground well leak detection 89701 89703 89706"
    ],
    semanticEntities: [
      "Carson City Public Works Water Utility",
      "Nevada State Contractors Board (NSCB)",
      "Southwest Gas Carson City safety protocols",
      "Eagle Valley freeze-thaw & crawlspace plumbing",
      "Post-tension concrete slab acoustic diagnostics",
      "Hydrophone underwater acoustic sensors",
      "Combustible gas electronic sniffing"
    ],
    h1: "Precision Water, Gas, Slab & Pool Leak Detection in Carson City, NV",
    heroKicker: "Serving Carson City, Nevada • Downtown, Westside, Silver Oak, Clearview & Empire Ranch",
    heroSubheadline: "Hidden crawlspace leaks, winter freeze-thaw pipe bursts, sub-slab ruptures, hazardous gas odors, and leaking yard mains threaten properties across Carson City. Connect 24/7 with NSCB-licensed specialists serving 89701, 89702, 89703, 89705 & 89706.",
    directAnswer: "Leak Detection NV coordinates 24/7 non-invasive electronic water, natural gas, concrete slab, private well-line, and swimming pool leak detection in Carson City, Nevada. Whether you live near Downtown & Capitol District (89701), Westside & Kings Canyon (89703), North Carson & Silver Oak (89706), Clearview (89705), or Empire Ranch, our Nevada State Contractors Board (NSCB) licensed contractor network dispatches technicians with ultrasonic acoustic locators, FLIR thermal imaging, tracer gas, and digital gas sniffers to isolate leaks within inches. Call (725) 313-0108.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Emergency leak detection and plumbing diagnostic service in Carson City Nevada",
    imageCaption: "Non-invasive electronic acoustic, FLIR thermal, and tracer gas diagnostics dispatched in Carson City, NV 24/7.",
    sections: [
      {
        heading: "Four Specialized Leak Detection Capabilities in Carson City, NV",
        subheading: "Non-destructive diagnostics for historic homes, modern slabs, and commercial properties",
        paragraphs: [
          "Sitting at nearly 4,700 feet in Eagle Valley at the foot of the Sierra Nevada Carson Range, Carson City homes face severe seasonal temperature swings—from hot, dry summer days above 95°F to sub-freezing winter nights well below 15°F. That cycle places heavy expansion and contraction stress on copper, galvanized, and PEX plumbing lines.",
          "Rather than tearing open historic plaster walls in Downtown Carson City or jackhammering finished concrete slabs in Silver Oak or Lompa Ranch, dispatched specialists deploy amplified acoustic ground microphones, FLIR infrared thermal cameras, combustible gas PPM sniffers, and underwater hydrophones to pinpoint the exact rupture cleanly."
        ],
        bulletPoints: [
          "Water Leak Detection: Locating concealed wall, crawlspace freeze-burst, and high-pressure yard main breaks",
          "Gas Leak Detection: Rapid identification of natural gas and propane line leaks, Southwest Gas meter clearances, and code-compliant repairs",
          "Slab Leak Detection: Non-invasive sub-foundation acoustic diagnostics isolating copper and PEX ruptures under concrete slabs",
          "Pool & Spa Leak Detection: Electronic hydrophone listening and precision dye testing for pool skimmers, returns, and underground pipes"
        ]
      },
      {
        heading: "Carson City Neighborhood Coverage: 89701, 89702, 89703, 89705 & 89706",
        subheading: "Fast 24/7 dispatch across every Carson City district",
        paragraphs: [
          "Every district of Nevada's State Capital presents distinct plumbing infrastructure—from century-old raised crawlspaces around the Capitol and Westside Historic District to newer slab-on-grade homes along Lompa Lane, Silver Oak, and Empire Ranch, plus rural domestic well lines in Lakeview and Pinion Hills.",
          "Call (725) 313-0108 any hour of the day or night to connect directly with licensed local technicians equipped for Carson City's exact housing stock and geology."
        ],
        bulletPoints: [
          "Downtown & Capitol District (89701): Historic crawlspaces, vintage galvanized/copper lines & commercial corridors along Carson St",
          "Westside, Kings Canyon & Lakeview (89703): Foothill booster zones, freeze-exposed supply runs & mountain-edge well mains",
          "North Carson, Lompa & Silver Oak (89706): Post-tension concrete slabs, Northridge subdivisions & backyard swimming pools",
          "South Carson, Clearview & Stewart (89701 / 89705): Carson River floodplain high water table & S Carson St service mains",
          "East Carson, Empire Ranch & Pinion Hills: High-desert clay/granite strata, long acreage well runs & buried propane feeds"
        ]
      },
      {
        heading: "Why Carson City Homes Develop Hidden Plumbing & Slab Leaks",
        subheading: "Freeze-thaw bursts, Sierra fault movement, and aging pipe materials",
        paragraphs: [
          "In Westside, Kings Canyon, and downtown Carson City, overnight winter freezes often split copper or CPVC lines inside unheated crawlspaces, garages, and exterior walls—staying frozen until daytime temperatures rise and water begins leaking invisibly beneath subfloors.",
          "Across Eagle Valley and the Carson River corridor, alluvial clay shifting, high water tables, and granitic gravel wear underground water mains and slab penetrations until low-flow meter dials spin continuously or warm spots appear on tile floors."
        ],
        callout: {
          title: "Carson City Emergency Gas Leak Protocol",
          body: "If you smell rotten eggs (mercaptan) or hear hissing near a gas meter, furnace, water heater, or propane tank in Carson City, evacuate all occupants immediately on foot. Do not flip light switches or use phones indoors. From outside, call 911 or Southwest Gas, then call (725) 313-0108 for certified pressure testing and repair."
        }
      },
      {
        heading: "Advanced Non-Invasive Diagnostic Technology & Equipment",
        subheading: "Pinpoint accuracy that protects your crawlspace, slab, and yard",
        paragraphs: [
          "Every dispatched team serving Carson City uses calibrated, non-invasive electronic diagnostic instruments to verify exact leak coordinates before opening a wall, subfloor, or patch of concrete.",
          "Combining ultrasonic ground listening discs, high-resolution FLIR thermal cameras, inert tracer gas sniffing, and submersible hydrophones limits repair footprints and slashes restoration expense."
        ],
        bulletPoints: [
          "Ultrasonic acoustic sensors to hear pressurized water escaping beneath slabs, asphalt, and crawlspaces",
          "FLIR thermal infrared cameras revealing concealed moisture trails and hot-water slab lines",
          "Digital PPM combustible gas wands for natural gas and Pinion Hills / perimeter propane lines",
          "Underwater hydrophone listening and precision dye testing for residential and HOA pools"
        ]
      },
      {
        heading: "Carson City Water Utility Leak Reports & Insurance Support",
        subheading: "Itemized documentation for Carson City Public Works & homeowners insurers",
        paragraphs: [
          "A concealed yard main break, leaking crawlspace pipe, or running toilet/well fault can quickly inflate your monthly bill from Carson City Public Works (Water Utility Division).",
          "Once diagnostics and repairs are finished, dispatched contractors supply detailed written inspection findings, static pressure verification results, and itemized repair invoices designed for municipal utility leak adjustment inquiries and homeowners insurance claims."
        ]
      },
      {
        heading: "Licensed Contractors Under Strict Nevada NSCB C-1 Standards",
        subheading: "Upfront itemized estimates and verified code compliance in Carson City",
        paragraphs: [
          "Plumbing, gas piping, and pressurized water line repairs in Carson City are regulated by the Nevada State Contractors Board (NSCB) and the Carson City Building Division. Hiring unlicensed handymen risks failed pressure inspections, denied utility gas unlocks, and rejected insurance documentation.",
          "Our dispatch desk connects Carson City property owners strictly with independent contractors maintaining active NSCB licensing, general liability insurance, and calibrated non-destructive leak locating instrumentation."
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
        question: "Which neighborhoods in Carson City, NV do you serve?",
        answer: "Leak Detection NV coordinates 24/7 licensed leak detection specialists across every Carson City, Nevada district—including Downtown & Capitol District (89701), Westside Historic District & Kings Canyon (89703), Lakeview, North Carson & Silver Oak (89706), South Carson, Clearview & Stewart (89705), and Empire Ranch / Pinion Hills. Call (725) 313-0108."
      },
      {
        question: "Who should I call for verified leak detection in Carson City, Nevada?",
        answer: "Leak Detection NV connects Carson City homeowners and commercial property owners with independent specialists adhering to Nevada State Contractors Board (NSCB) C-1 plumbing and contractor licensing standards. Dispatched technicians use ultrasonic acoustic ground geophones, FLIR infrared thermal cameras, tracer gas sniffers, and calibrated PPM combustible gas detectors. Call (725) 313-0108."
      },
      {
        question: "Do you locate winter freeze-burst pipe leaks inside Carson City crawlspaces and walls?",
        answer: "Yes. Freezing Sierra nights frequently cause pinhole splits inside exterior walls, crawlspaces, and unheated garages. Dispatched technicians use FLIR thermal imaging and acoustic sensors to pinpoint hidden freeze breaks without tearing out entire walls."
      },
      {
        question: "Can you find a leak on a private domestic well line in Lakeview or Pinion Hills?",
        answer: "Yes. By isolating pressure at the wellhead tank and pressurizing the buried line with inert nitrogen-hydrogen tracer gas paired with acoustic listening, technicians trace long underground well runs directly to the break."
      },
      {
        question: "How much does leak detection cost in Carson City, NV?",
        answer: "Non-invasive electronic leak detection in Carson City typically ranges from $195 to $395 depending on property size and system complexity (interior crawlspace/wall line vs. concrete slab manifold or swimming pool hydrophone testing). Dispatched contractors provide upfront pricing before testing or repair work begins."
      },
      {
        question: "Can your repair report help with a high Carson City Public Works water bill?",
        answer: "Yes. After isolating and repairing a concealed leak, your dispatched contractor supplies an itemized written invoice and pressure-test record you can submit to Carson City Public Works Water Utility for leak adjustment review."
      },
      {
        question: "Does homeowners insurance cover slab or crawlspace leak detection in Carson City?",
        answer: "Many Nevada homeowners policies cover the tear-out access cost and resultant water damage restoration from sudden pipe bursts, while pipe replacement coverage varies by policy. Dispatched technicians supply detailed documentation for your adjuster."
      },
      {
        question: "What should I do if I smell natural gas or propane in my Carson City home?",
        answer: "Immediately evacuate all people and pets outdoors to fresh air. Do not operate light switches, phones, or garage doors indoors. Call 911 and Southwest Gas from outside, then call (725) 313-0108 for certified manometer testing and gas line repair."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Pinpoint hidden supply lines and freeze splits in Carson City." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Electronic sniffing and code-compliant gas pipe repairs." },
      { title: "Precision Slab Leak Detection", slug: "slab-leak-detection", description: "Sub-foundation acoustic and thermal testing." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone and dye testing for pools and spas." }
    ],
    relatedLocations: [
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "Historic homes, crawlspaces & Capitol corridor." },
      { name: "Westside & Kings Canyon (89703)", slug: "west-carson-lakeview", context: "Foothill freeze-thaw & booster zones." },
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "Slab foundations & Northridge homes." },
      { name: "South Carson & Clearview (89705)", slug: "south-carson-clearview", context: "Carson River corridor & commercial mains." },
      { name: "Empire Ranch & Pinion Hills", slug: "east-carson-empire-ranch", context: "Private wells, acreage mains & propane lines." }
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
    metaTitle: "Water Leak Detection Carson City, NV | No Digging (725) 313-0108",
    metaDescription: "High water bill or wet spots in Carson City, NV? Acoustic and thermal imaging pinpoints wall, crawlspace & slab pipe leaks without tearing up floors. Call (725) 313-0108.",
    primaryKeyword: "water leak detection Carson City NV",
    secondaryKeywords: [
      "hidden water leak repair Carson City Nevada",
      "crawlspace leak detection Carson City",
      "frozen pipe leak repair 89701 89703",
      "high water bill leak detection Carson City"
    ],
    semanticEntities: [
      "Carson City Public Works Water Utility",
      "Ultrasonic acoustic pipe listening",
      "FLIR infrared thermal moisture detection",
      "Potable water supply line pressure decay",
      "Crawlspace copper & PEX freeze-thaw splits"
    ],
    h1: "Non-Invasive Water Leak Detection & Repair in Carson City, NV",
    heroKicker: "Serving Carson City, Nevada • Protect Walls, Crawlspaces & Slabs",
    heroSubheadline: "Pressurized potable water leaks inside walls, raised crawlspaces, slabs, and yard lines trigger costly structural damage and utility spikes. Connect 24/7 with licensed Carson City leak specialists.",
    directAnswer: "Water leak detection in Carson City uses ultrasonic listening devices, FLIR thermal imaging, and digital pressure-decay testing to pinpoint hidden leaks without unnecessary drywall cutting or floor demolition. Dispatched specialists locate the rupture anywhere in 89701–89706 and perform durable copper, PEX, or main line repairs.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Service technician performing non-invasive water leak diagnostics in Carson City Nevada",
    imageCaption: "Mobile leak detection units carry acoustic locators and digital line-pressurizing equipment across Carson City.",
    sections: [
      {
        heading: "Detecting Hidden Potable Water Leaks in Carson City",
        subheading: "Advanced non-destructive diagnostic methodology for crawlspaces and slabs",
        paragraphs: [
          "A pinhole leak measuring just 1/16th of an inch wastes over 25,000 gallons of water per month—driving up municipal water bills from Carson City Public Works and saturating wooden floor joists, subfloors, or drywall cavities.",
          "Dispatched technicians never tear open walls blindly. By combining digital acoustic ground microphones that capture the high-frequency hiss of pressurized water with FLIR thermal imaging cameras that reveal hidden moisture trails, technicians pinpoint leaks within inches."
        ],
        bulletPoints: [
          "Pinpoint leaks behind plaster or drywall, under cabinets, and inside crawlspaces",
          "Pressure isolation testing separating indoor piping from exterior yard or well lines",
          "Digital inspection documentation for homeowners insurance property claims",
          "Durable repairs using commercial-grade copper fittings or freeze-resilient PEX piping"
        ]
      },
      {
        heading: "Common Sources of Water Leaks in Carson City Homes",
        subheading: "Aging galvanized lines, freeze-thaw splits, and high foothill pressure",
        paragraphs: [
          "Older residences in Downtown Carson City and the Westside Historic District often retain aging galvanized steel or early Type M copper piping susceptible to internal mineral scaling and corrosion at threaded or soldered joints.",
          "Meanwhile, steep elevation gradients along Kings Canyon, Lakeview, and foothill pressure zones can push static municipal water pressure above 80 PSI—stressing PRVs (Pressure Reducing Valves), water heaters, and winter-exposed hose bibs."
        ]
      },
      {
        heading: "Carson City Public Works Water Meter Alignment",
        subheading: "Resolving continuous meter spin and unexpected utility bill spikes",
        paragraphs: [
          "If the low-flow dial on your Carson City water meter keeps spinning while every indoor faucet and appliance is turned off, water is escaping between the curb box and your home or underneath your foundation.",
          "Dispatched technicians isolate whether the leak sits on your customer service main or indoors and issue an official repair invoice suitable for Carson City Public Works billing review."
        ]
      }
    ],
    faqs: [
      {
        question: "How much does water leak detection cost in Carson City, NV?",
        answer: "Standard electronic water leak detection in Carson City depends on home size and whether the leak is inside walls/crawlspaces or underground. Dispatched contractors provide upfront pricing before beginning testing."
      },
      {
        question: "Can an acoustic locator find a leak underneath hardwood or tile flooring?",
        answer: "Yes. Amplified acoustic sensors detect sound waves traveling through concrete, tile, and subfloors without damaging finished flooring surfaces."
      },
      {
        question: "How long does a typical water leak inspection take in Carson City?",
        answer: "Most residential water leak inspections take 1.5 to 3 hours, including pressure decay testing and exact target marking."
      }
    ],
    relatedServices: [
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Pinpoint leaks beneath concrete slabs." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Locate buried main yard and well lines." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate shutoff and freeze-burst containment." }
    ],
    relatedLocations: [
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "Historic crawlspaces & older supply lines." },
      { name: "Westside & Kings Canyon (89703)", slug: "west-carson-lakeview", context: "High-PSI booster & freeze-exposed lines." },
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "Residential supply & slab diagnostics." }
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
    metaTitle: "Gas Leak Detection Carson City, NV | 24/7 Emergency (725) 313-0108",
    metaDescription: "Smell gas in Carson City, NV? Leave the home and call 911 or Southwest Gas first. Then call (725) 313-0108 for licensed gas leak testing in Carson City 89701–89706.",
    primaryKeyword: "gas leak detection Carson City NV",
    secondaryKeywords: [
      "gas leak repair Carson City Nevada",
      "Southwest Gas meter lock test Carson City",
      "natural gas plumber 89701 89706",
      "propane leak repair Carson City NV"
    ],
    semanticEntities: [
      "Southwest Gas meter lock clearances",
      "Mercaptan odorant detection",
      "Combustible gas electronic sniffing wand",
      "Black iron & CSST gas pipe threading",
      "Manometer gas pressure decay testing"
    ],
    h1: "24/7 Emergency Gas Leak Detection & Repair in Carson City, NV",
    heroKicker: "Hazardous Gas Containment • 24/7 Carson City Dispatch",
    heroSubheadline: "Natural gas and propane leaks pose severe fire and explosion hazards during winter heating season and year-round. Connect 24/7 with NSCB-licensed gas piping specialists serving Carson City, Nevada.",
    directAnswer: "Gas leak detection in Carson City uses parts-per-million (PPM) electronic combustible gas sniffers, ultrasonic sensors, and calibrated digital manometers to locate natural gas or propane leaks along supply lines, meters, and heating appliances. Dispatched technicians isolate the leak, execute code-compliant repairs, and certify pressure tests for Southwest Gas unlock.",
    featuredImage: "/images/gas_leak_detection_1791567732913.webp",
    imageAlt: "Plumbing technician using electronic gas leak detector on natural gas supply line",
    imageCaption: "Digital combustible gas sniffing wands locate leaks along gas valves, fittings, and furnace connections in Carson City.",
    sections: [
      {
        heading: "Urgent Warning Signs of a Gas Leak in Carson City",
        subheading: "Recognizing physical, acoustic, and environmental danger indicators",
        paragraphs: [
          "Southwest Gas and propane suppliers inject mercaptan—a sulfur-like rotten-egg odorant—into fuel gas so leaks are detectable by smell. Slow leaks inside crawlspaces, exterior meter risers, or buried ranch propane runs can linger undetected until gas builds up.",
          "If you smell gas, hear hissing near a furnace or water heater, or notice dead vegetation along a buried gas line in Carson City, evacuate outside immediately, alert 911 or Southwest Gas, and call (725) 313-0108 for certified repair."
        ],
        bulletPoints: [
          "Rotten-egg or sulfur odor near kitchens, garages, crawlspaces, or exterior meters",
          "Hissing, roaring, or whistling sound near gas furnaces, boilers, or supply valves",
          "Physical symptoms among occupants: dizziness, headaches, nausea, or eye irritation",
          "Dead grass or soil bubbling above buried natural gas or propane trenches"
        ]
      },
      {
        heading: "Southwest Gas Meter Shutoff & Pressure Re-Certification",
        subheading: "Restoring heating and hot water quickly when your meter is locked",
        paragraphs: [
          "When Southwest Gas responds to an odor complaint in Carson City, technicians lock and red-tag the gas meter until a licensed contractor locates the leak, completes code-compliant repairs, and passes an inspection.",
          "Dispatched NSCB C-1 contractors arrive with calibrated manometers to pressure-test the gas distribution tree, replace leaking black iron, galvanized, or CSST lines, pull required Carson City permits, and clear the path for utility unlock."
        ]
      },
      {
        heading: "Natural Gas & Rural Propane Piping Systems",
        subheading: "Serving winter home furnaces, commercial kitchens, and perimeter propane tanks",
        paragraphs: [
          "Whether servicing forced-air furnaces and hydronic boilers in Downtown and Westside Carson City or buried propane tanks in Empire Ranch and Pinion Hills, dispatched technicians pressure-verify every run to strict Nevada code standards."
        ]
      }
    ],
    faqs: [
      {
        question: "Can I use soapy water to check for a gas leak myself?",
        answer: "While soap solution can bubble on an accessible exposed union, hidden leaks inside crawlspaces, walls, or underground trenches require calibrated PPM combustible gas sniffers and manometer pressure-drop testing."
      },
      {
        question: "How long does gas line repair take after Southwest Gas locks my Carson City meter?",
        answer: "Most residential gas leak isolations, pipe repairs, and manometer pressure tests are completed the same day so Southwest Gas can unlock service promptly."
      },
      {
        question: "Are technicians licensed to work on gas lines in Carson City?",
        answer: "Yes. All gas piping diagnostics and repairs are routed to independent contractors holding active Nevada State Contractors Board (NSCB) C-1 plumbing/heating credentials."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Potable supply and freeze-burst water leak services." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Buried yard & well line testing." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate dispatch for hazardous leaks." }
    ],
    relatedLocations: [
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "Southwest Gas meter & furnace leak testing." },
      { name: "Empire Ranch & Pinion Hills", slug: "east-carson-empire-ranch", context: "Natural gas & buried propane line testing." },
      { name: "South Carson & Clearview (89705)", slug: "south-carson-clearview", context: "Residential & commercial gas lines." }
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
    metaTitle: "Slab Leak Detection Carson City, NV | No Digging (725) 313-0108",
    metaDescription: "Warm floor spot or high water bill in Carson City, NV? Non-invasive acoustic & thermal slab leak detection in North Carson, Silver Oak & 89701–89706. Call (725) 313-0108.",
    primaryKeyword: "slab leak detection Carson City NV",
    secondaryKeywords: [
      "slab leak repair Carson City Nevada",
      "foundation water leak Silver Oak Carson City",
      "sub slab plumbing repair 89706 89701",
      "hot water slab leak Carson City"
    ],
    semanticEntities: [
      "Post-tension concrete slab foundation",
      "Eagle Valley clay & granitic soil movement",
      "Electromagnetic pipe and cable locator",
      "Acoustic ground sensor listening disc",
      "Overhead PEX re-route bypass"
    ],
    h1: "Non-Invasive Slab Leak Detection & Repair in Carson City, NV",
    heroKicker: "Protect Your Concrete Foundation • Pinpoint Acoustic Sensors",
    heroSubheadline: "Sub-slab copper and PEX pipe ruptures beneath North Carson, Lompa, Clearview, and Silver Oak concrete foundations damage flooring and soils. Connect with technicians who locate leaks within inches.",
    directAnswer: "A slab leak in Carson City occurs when pressurized water lines beneath a home's concrete foundation rupture due to Eagle Valley clay shifting, thermal contraction, abrasive rock contact, or corrosion. Dispatched specialists use acoustic ground listening discs, pipe locators, and FLIR thermal imaging to pinpoint the break before executing spot repairs or overhead PEX re-routes.",
    featuredImage: "/images/slab_leak_inspection_1791566136409.webp",
    imageAlt: "Technician operating acoustic slab leak detector on residential flooring in Carson City",
    imageCaption: "Non-invasive electronic acoustic sensors detect pressurized water leaks beneath concrete slabs in Carson City.",
    sections: [
      {
        heading: "Why Slab Leaks Occur in Carson City Homes",
        subheading: "Seasonal soil contraction, seismic stress, and pipe abrasion",
        paragraphs: [
          "Modern neighborhoods across North Carson, Silver Oak, Lompa Ranch, Clearview, and Empire Ranch are commonly built on post-tension concrete slabs with hot and cold supply piping routed beneath the concrete pour.",
          "As Eagle Valley clay swells with snowmelt or high water tables and shifts along Carson Range seismic micro-faults, pressurized copper pipes rub against buried rocks or flex at slab penetrations until pinholes form."
        ],
        bulletPoints: [
          "Thermal expansion and winter-to-summer contraction friction under concrete",
          "Foothill municipal water pressure stressing soldered elbows and manifolds",
          "Electrochemical corrosion in mineral-rich soils along the Carson River valley",
          "Ground settling beneath post-tension slabs and garage aprons"
        ]
      },
      {
        heading: "Warning Signs of a Foundation Slab Leak",
        subheading: "Identify sub-slab water loss before structural cracking occurs",
        paragraphs: [
          "Because water spreads horizontally beneath concrete before wicking upward, subtle clues emerge first: localized warm spots on tile or LVP, continuous running water sounds at night, or sudden spikes on your Carson City water bill.",
          "Call (725) 313-0108 for non-invasive acoustic isolation before breaking concrete or tearing up flooring."
        ],
        bulletPoints: [
          "Isolated warm or hot patches underfoot on tile, laminate, or hardwood",
          "Sound of hissing or rushing water when every faucet and appliance is shut off",
          "Water heater running nonstop or noticeable drop in hot water pressure",
          "Cracking grout, buckled hardwood planks, or musty odors along baseboards",
          "Unexplained jump on your Carson City Public Works water bill"
        ]
      },
      {
        heading: "Repair Solutions: Direct Spot Repair vs. Overhead PEX Bypass",
        subheading: "Choosing the right long-term fix for your Carson City property",
        paragraphs: [
          "Once acoustic sensors isolate the break within inches, contractors review clear options with you. A Direct Spot Repair opens a small localized patch above the pipe segment to braze or replace the damaged section.",
          "If your home has aging Type M copper prone to repeat pinholes, an Overhead PEX Re-Route abandons the under-slab line and runs freeze-resilient insulated PEX through conditioned attic or interior wall chases."
        ]
      }
    ],
    faqs: [
      {
        question: "Does homeowners insurance cover slab leak repair in Carson City?",
        answer: "Most Nevada homeowners policies cover access tear-out and restoration of flooring and concrete required to reach the leak, plus resultant water damage, while actual pipe repair varies by policy. Dispatched technicians provide detailed diagnostic reports for adjusters."
      },
      {
        question: "How accurate is electronic acoustic slab leak detection?",
        answer: "Using amplified ground geophones and FLIR infrared cameras, specialists isolate sub-slab leaks within a tight 6-to-12-inch target radius—avoiding destructive guesswork trenching."
      },
      {
        question: "Is an overhead PEX re-route safer than breaking a post-tension slab?",
        answer: "Yes. Post-tension slabs contain high-tension steel cables. An overhead insulated PEX re-route avoids cutting near tension cables and preserves finished flooring."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Detect hidden indoor and crawlspace leaks." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate water shutoff and emergency response." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Yard and well line leak detection." }
    ],
    relatedLocations: [
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "Post-tension concrete slab neighborhoods." },
      { name: "South Carson & Clearview (89705)", slug: "south-carson-clearview", context: "Residential & commercial slab diagnostics." },
      { name: "Empire Ranch & Pinion Hills", slug: "east-carson-empire-ranch", context: "East Carson slab & foundation leaks." }
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
    metaTitle: "Pool Leak Detection Carson City, NV | Dye & Hydrophone (725) 313-0108",
    metaDescription: "Losing pool or spa water in Carson City, NV? Call (725) 313-0108 for hydrophone acoustic sensors, pressure testing & dye testing without draining your pool.",
    primaryKeyword: "pool leak detection Carson City NV",
    secondaryKeywords: [
      "swimming pool leak repair Carson City",
      "spa leak detection Silver Oak Carson City",
      "pool skimmer leak repair 89701 89706",
      "underground pool pipe leak Carson City"
    ],
    semanticEntities: [
      "Hydrophone underwater acoustic sensor",
      "Fluorescent dye syringe testing",
      "Skimmer throat and faceplate sealing",
      "Underground return and suction line pressure test",
      "Evaporation bucket test"
    ],
    h1: "Swimming Pool & Spa Leak Detection in Carson City, NV",
    heroKicker: "Stop Vanishing Pool Water • Hydrophone Acoustic Diagnostics",
    heroSubheadline: "High-altitude winds and winter freezes in Carson City strain pool skimmers, underground PVC returns, and spa plumbing. Dispatched specialists pinpoint structural and underground leaks without draining your pool.",
    directAnswer: "Swimming pool leak detection in Carson City combines underwater hydrophone acoustic listening, precision dye testing at skimmers and light niches, and pneumatic line-pressure testing on returns, suction lines, and main drains. Dispatched technicians isolate leaks cleanly across Silver Oak, Westside, Clearview, and Empire Ranch with your pool full.",
    featuredImage: "/images/pool_leak_detection_1791567711591.webp",
    imageAlt: "Pool leak detection specialist using dye syringe and underwater acoustic hydrophone",
    imageCaption: "Underwater hydrophone microphones and precision dye testing locate leaks in pool shells, lights, and underground pipes.",
    sections: [
      {
        heading: "Is Your Carson City Pool Leaking or Just Evaporating?",
        subheading: "Separating windy Eagle Valley evaporation from active structural leaks",
        paragraphs: [
          "Dry mountain air and afternoon Washoe Zephyr winds across Carson City naturally accelerate pool evaporation. However, water loss exceeding 1/2 inch per day, a nonstop autofill line, or dropping water levels with the cover on points directly to a leak.",
          "Freeze-thaw winters also crack PVC fittings near pool equipment pads, skimmer throats, and shallow return lines right below deck expansion joints."
        ],
        bulletPoints: [
          "Automatic pool leveler running continuously day and night",
          "Pool water dropping noticeably faster than a 24-hour bucket test control",
          "Air bubbles blowing from return jets when the pump runs (suction leak)",
          "Shifting deck pavers, damp turf, or wet ground near the equipment pad"
        ]
      },
      {
        heading: "Non-Invasive Testing With Your Pool Completely Full",
        subheading: "Hydrophones, dye syringes, and isolated line pressure checks",
        paragraphs: [
          "Draining a swimming pool risks hydrostatic shell pop in high-water-table zones along the Carson River or plaster cracking. Dispatched specialists perform testing with the pool full.",
          "Technicians inspect light conduits, main drains, and skimmer throats with inert dye syringes while isolating underground suction and return lines with pneumatic gauges."
        ]
      }
    ],
    faqs: [
      {
        question: "How do I perform a bucket test to verify a pool leak in Carson City?",
        answer: "Fill a 5-gallon bucket with pool water, set it on a top pool step, and mark water lines inside and outside the bucket. Check after 24 hours—if the pool dropped noticeably more than the water inside the bucket, a leak is present."
      },
      {
        question: "Do you have to drain my pool to find the leak?",
        answer: "No. Submersible hydrophone listening, dye testing, and line pressure testing all operate with the pool full."
      },
      {
        question: "Can winter freezes crack underground pool plumbing in Carson City?",
        answer: "Yes. If lines or skimmer housings are not winterized thoroughly, freezing water splits PVC tees and deck returns, causing leaks when the pump restarts in spring."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Domestic supply and autofill water lines." },
      { title: "Gas Leak Detection & Repair", slug: "gas-leak-detection", description: "Pool heater natural gas & propane line testing." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Buried yard and main line leak testing." }
    ],
    relatedLocations: [
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "Backyard residential & HOA pool diagnostics." },
      { name: "South Carson & Clearview (89705)", slug: "south-carson-clearview", context: "High water table & pool shell checks." },
      { name: "Westside & Kings Canyon (89703)", slug: "west-carson-lakeview", context: "Foothill pool & spa freeze diagnostics." }
    ],
    schemaType: "Service"
  },

  // 6. SERVICE 5: UNDERGROUND PIPE LEAK DETECTION
  "underground-leak-detection": {
    slug: "underground-leak-detection",
    urlPath: "/underground-leak-detection/",
    type: "service",
    name: "Underground Pipe, Yard & Well Leak Detection",
    navTitle: "Underground Leaks",
    metaTitle: "Underground & Well Leak Detection Carson City, NV | (725) 313-0108",
    metaDescription: "Buried main water line, private well pipe or irrigation leak in Carson City, NV? Call (725) 313-0108 for tracer gas & acoustic underground leak locating.",
    primaryKeyword: "underground leak detection Carson City NV",
    secondaryKeywords: [
      "main water service line leak Carson City",
      "well line leak detection Pinion Hills Lakeview",
      "yard irrigation leak repair Carson City NV",
      "buried pipe leak locator 89701 89703 89706"
    ],
    semanticEntities: [
      "Electromagnetic pipe and cable locator",
      "Tracer gas hydrogen-nitrogen sniffing",
      "Private domestic well supply main",
      "Underground irrigation manifold repair",
      "Carson City frost-depth buried lines"
    ],
    h1: "Underground Main, Yard & Well-Line Leak Detection in Carson City, NV",
    heroKicker: "Locate Buried Pipe Leaks • Zero Unnecessary Yard Trenching",
    heroSubheadline: "Leaks in street-to-home water mains, long private well runs, and irrigation lines waste thousands of gallons beneath frost depth before surfacing. Connect with underground line locators in Carson City.",
    directAnswer: "Underground leak detection in Carson City uses electromagnetic pipe locators, acoustic ground microphones, and non-toxic tracer gas to pinpoint breaks in buried water service mains, private domestic well lines, and irrigation manifolds without trenching your driveway or yard.",
    featuredImage: "/images/diagnostic_tech_1791662650738.webp",
    imageAlt: "Technician tracing buried water lines in Carson City Nevada neighborhood",
    imageCaption: "Electromagnetic line locators and tracer gas sniffers identify buried water main and well leaks in Carson City.",
    sections: [
      {
        heading: "Street Meter Mains vs. Private Well & Irrigation Leaks",
        subheading: "Pinpointing buried failures across urban parcels and 1+ acre Carson City lots",
        paragraphs: [
          "Properties across Carson City rely on deep-buried supply lines set below winter frost depth—either from a Carson City Public Works street meter or from a private wellhead pressure tank in Lakeview, Pinion Hills, or South Carson.",
          "When sandy alluvial soil or decomposed granite swallows escaping water without visible puddles, pressurized tracer gas rises straight to the surface above the break so technicians can mark the exact excavation point."
        ],
        bulletPoints: [
          "Main service line testing from street curb meter or wellhead to foundation",
          "Well pump short-cycling isolation and pressure decay verification",
          "Backflow preventer and lawn sprinkler manifold leak pinpointing",
          "Trenchless pipe pulling to replace failed lines without destroying driveways"
        ]
      },
      {
        heading: "Preventing Driveway Washouts & Foundation Settling",
        subheading: "Stopping subterranean soil erosion before concrete buckles",
        paragraphs: [
          "Pressurized water eroding Eagle Valley silt or gravel beneath driveways, sidewalks, and porch slabs creates hidden voids that can settle or crack. Early acoustic pinpointing saves landscaping and concrete flatwork."
        ]
      }
    ],
    faqs: [
      {
        question: "How do you locate a buried plastic PVC or poly well pipe?",
        answer: "Technicians insert a traceable fiberglass sonde line or pressurize the pipe with safe hydrogen-nitrogen tracer gas, then scan the ground surface with calibrated electronic sniffers to mark the exact break."
      },
      {
        question: "Can a broken underground main be repaired without digging up my entire driveway?",
        answer: "Yes. Pinpointing the break restricts digging to a single targeted access pit, or contractors can use trenchless pipe pulling for aging lines."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor and crawlspace water line diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Leaks underneath foundation slabs." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Rapid shutoff and burst main containment." }
    ],
    relatedLocations: [
      { name: "Empire Ranch & Pinion Hills", slug: "east-carson-empire-ranch", context: "Long-run well mains & acreage piping." },
      { name: "Westside & Kings Canyon (89703)", slug: "west-carson-lakeview", context: "Lakeview & foothill buried mains." },
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "Historic curb-to-home water mains." }
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
    metaTitle: "24/7 Emergency Leak Repair Carson City, NV | Rapid Dispatch (725) 313-0108",
    metaDescription: "Active water flood, freeze-burst pipe or gas emergency in Carson City, NV? Call (725) 313-0108 24/7 for rapid dispatch across 89701, 89702, 89703, 89705 & 89706.",
    primaryKeyword: "emergency leak repair Carson City NV",
    secondaryKeywords: [
      "24/7 leak detection Carson City",
      "emergency plumber Carson City Nevada",
      "frozen pipe burst repair Carson City",
      "emergency gas leak shutoff 89701"
    ],
    semanticEntities: [
      "Immediate main meter emergency shutoff",
      "Nevada State Contractors Board (NSCB) licensed response",
      "24/7 on-call mobile technician vans",
      "Freeze-burst pipe clamp and PEX containment"
    ],
    h1: "24/7 Emergency Leak Repair & Rapid Dispatch in Carson City, NV",
    heroKicker: "Active Leaks • 24/7 Carson City Response • Licensed Specialists",
    heroSubheadline: "Winter freeze-burst pipes, flooded crawlspaces, sudden slab ruptures, and hazardous gas odors demand instant containment. Call our 24/7 dispatch line to connect immediately with on-call contractors serving Carson City.",
    directAnswer: "Emergency leak repair in Carson City delivers rapid containment and permanent restoration for active water floods, freeze bursts, and gas line ruptures across 89701–89706. Calling (725) 313-0108 routes your emergency directly to on-call NSCB-licensed technicians equipped with electronic locators and repair hardware.",
    featuredImage: "/images/drain_hydro_jetting_1791566153107.webp",
    imageAlt: "Emergency leak repair mobile dispatch unit serving Carson City Nevada",
    imageCaption: "Mobile service units carry pipe clamps, PEX fittings, and emergency shutoff valves for fast on-site containment in Carson City.",
    sections: [
      {
        heading: "What to Do in a Water or Gas Emergency in Carson City",
        subheading: "Immediate steps to protect life and property while awaiting dispatch",
        paragraphs: [
          "The first minutes of a freeze-burst pipe or ruptured supply line determine whether you face minor cleanup or major structural dry-out. Close your home's main water shutoff valve (garage, crawlspace, basement, or curb meter key).",
          "For natural gas or propane odors, never try to locate the leak yourself. Evacuate everyone outside immediately and call from a safe distance."
        ],
        bulletPoints: [
          "Turn the main water shutoff valve clockwise to stop pressurized indoor flooding",
          "Switch off electrical breakers to flooded areas only if safe to access the panel",
          "For gas odors: evacuate outdoors immediately, touch no switches, and call 911 / Southwest Gas / (725) 313-0108",
          "Keep your phone line open for the dispatched technician's arrival update"
        ]
      }
    ],
    faqs: [
      {
        question: "Are technicians available 24/7 in Carson City for winter freeze-burst emergencies?",
        answer: "Yes. Our dispatch line at (725) 313-0108 and on-call contractor network operate 24 hours a day, 7 days a week, 365 days a year—including freezing overnight emergencies and holidays."
      },
      {
        question: "Which Carson City ZIP codes do you cover for emergency service?",
        answer: "All Carson City ZIP codes including 89701, 89702, 89703, 89705, and 89706."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Pinpoint hidden potable water leaks." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Immediate gas leak containment and testing." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Foundation leak diagnostics." }
    ],
    relatedLocations: [
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "24/7 central Carson City dispatch." },
      { name: "Westside & Kings Canyon (89703)", slug: "west-carson-lakeview", context: "Freeze-burst & foothill emergency response." },
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "24/7 residential emergency service." }
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

  // 12B. CARSON CITY DISTRICT 1: DOWNTOWN CARSON CITY & CAPITOL CORRIDOR (89701)
  "carson-city": {
    slug: "carson-city",
    urlPath: "/carson-city/",
    type: "location",
    name: "Downtown Carson City & Capitol District Leak Detection",
    navTitle: "Downtown Carson (89701)",
    metaTitle: "Leak Detection Carson City NV | Water, Slab & Gas (725) 313-0108",
    metaDescription: "Water, crawlspace, slab or gas leak in Downtown Carson City, NV (89701)? 24/7 non-invasive acoustic, thermal & tracer gas locating. Call (725) 313-0108.",
    primaryKeyword: "leak detection Carson City NV",
    secondaryKeywords: [
      "water leak detection Carson City 89701",
      "crawlspace leak repair Downtown Carson City",
      "slab leak detection Carson City NV",
      "gas leak detection Capitol District Carson City"
    ],
    semanticEntities: [
      "Carson City Public Works Water Utility",
      "Downtown Carson Street & State Capitol Historic District",
      "Governor’s Mansion Historic Zone & Stewart Street",
      "Winter freeze-thaw crawlspace & aging galvanized mains"
    ],
    h1: "Water, Gas, Crawlspace & Slab Leak Detection in Carson City, NV (89701)",
    heroKicker: "Serving Downtown Carson City, Capitol Corridor & Historic Westside (89701)",
    heroSubheadline: "Century-old raised crawlspaces, historic brick commercial buildings along Carson Street, and seasonal freeze-thaw cycles in 89701 require pinpoint acoustic and thermal diagnostics—without damaging vintage plaster or hardwood floors.",
    directAnswer: "Leak Detection NV coordinates 24/7 non-invasive leak detection across Downtown Carson City and the Capitol District (89701). Licensed Nevada specialists locate concealed crawlspace splits, slab leaks, yard main ruptures, and Southwest Gas meter-side leaks using ultrasonic acoustic microphones, FLIR thermal imaging, and tracer gas. Call (725) 313-0108.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Technician performing non-invasive leak detection in Downtown Carson City NV",
    imageCaption: "Non-invasive electronic leak diagnostics serving Downtown Carson City, Capitol District, and 89701 properties.",
    sections: [
      {
        heading: "Historic Crawlspaces & Downtown Mains in Carson City (89701)",
        subheading: "Pinpointing leaks cleanly beneath vintage homes and commercial corridors",
        paragraphs: [
          "Downtown Carson City properties around the Nevada State Capitol, Robinson Street, and the Governor’s Mansion Historic Zone include 19th- and mid-20th-century crawlspace foundations paired with updated copper or PEX service risers. Winter cold snaps below 15°F and shifting alluvial soil stress buried galvanized and cast-iron feeds.",
          "Dispatched NSCB-licensed technicians trace silent water losses under driveways, beneath original hardwood subfloors, and along commercial service lines without exploratory demolition—and provide itemized documentation compatible with Carson City Public Works leak credit reviews."
        ],
        bulletPoints: [
          "Downtown Carson Street, 5th Street & State Capitol commercial corridors (89701)",
          "Historic Westside crawlspace freeze-split and supply riser pinpointing",
          "Carson City Public Works Water Utility high-bill diagnostic documentation"
        ]
      }
    ],
    faqs: [
      {
        question: "Can you locate a water leak beneath historic hardwood floors or crawlspaces in Downtown Carson City?",
        answer: "Yes. Dispatched specialists use FLIR infrared thermal cameras and ultrasonic acoustic listening sensors to isolate sub-floor and crawlspace leaks without tearing out historic plaster or wood finishes."
      },
      {
        question: "Do your diagnostic reports support Carson City Public Works water bill adjustments?",
        answer: "Yes. Technicians perform meter-isolation testing and furnish an itemized location and repair report formatted for Carson City Public Works high-usage billing reviews."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Crawlspace, wall & main line testing." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Buried yard & municipal supply locating." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Natural gas & Southwest Gas testing." }
    ],
    relatedLocations: [
      { name: "Westside & Lakeview (89703)", slug: "west-carson-lakeview", context: "Adjacent Kings Canyon & Sierra foothills." },
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "Lompa Lane & Northridge slabs." },
      { name: "South Carson & Clearview (89705)", slug: "south-carson-clearview", context: "S Carson St & Snyder Ave corridor." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12C. CARSON CITY DISTRICT 2: WESTSIDE, KINGS CANYON & LAKEVIEW (89703)
  "west-carson-lakeview": {
    slug: "west-carson-lakeview",
    urlPath: "/west-carson-lakeview/",
    type: "location",
    name: "Westside, Kings Canyon & Lakeview Leak Detection",
    navTitle: "West Carson & Lakeview (89703)",
    metaTitle: "Leak Detection West Carson City & Lakeview NV 89703 | (725) 313-0108",
    metaDescription: "Water, well main, freeze-burst or gas leak in West Carson City, Kings Canyon or Lakeview (89703)? 24/7 acoustic & tracer gas locating. Call (725) 313-0108.",
    primaryKeyword: "leak detection West Carson City NV 89703",
    secondaryKeywords: [
      "water leak detection Lakeview Carson City",
      "well line leak repair Kings Canyon 89703",
      "frozen pipe repair Westside Carson City",
      "gas leak detection 89703 Carson City NV"
    ],
    semanticEntities: [
      "Kings Canyon Road, Ash Canyon & Foothill Drive",
      "Lakeview Estates & Highway 50 West corridor",
      "Sierra Nevada granite foothills & high-PSI pressure zones",
      "Private domestic well lines & winter freeze-thaw bursts"
    ],
    h1: "Water, Freeze-Pipe, Well & Gas Leak Detection in West Carson & Lakeview (89703)",
    heroKicker: "Serving Westside, Kings Canyon, Ash Canyon & Lakeview • ZIP Code 89703",
    heroSubheadline: "Foothill elevation pressure zones, granite boulder terrain, and deep winter freezes along Kings Canyon and Lakeview put constant strain on main shutoffs, private well lines, and exterior wall piping.",
    directAnswer: "Leak Detection NV dispatches licensed technicians 24/7 across West Carson City, Kings Canyon, Ash Canyon, and Lakeview (89703). Equipped with hydrogen-nitrogen tracer gas, acoustic ground microphones, and FLIR thermal cameras, specialists isolate buried well-main breaks, foothill PRV leaks, and freeze-split wall pipes cleanly. Call (725) 313-0108.",
    featuredImage: "/images/diagnostic_tech_1791662650738.webp",
    imageAlt: "Acoustic and thermal leak detection serving West Carson City and Lakeview 89703",
    imageCaption: "Non-invasive acoustic, thermal, and tracer-gas diagnostics in West Carson City and Lakeview (89703).",
    sections: [
      {
        heading: "Foothill Pressure Zones & Freeze Protection in 89703",
        subheading: "Tracing underground runs through Sierra granite and foothill gravel",
        paragraphs: [
          "Neighborhoods along Kings Canyon Road, Ash Canyon, and Lakeview sit against the eastern slope of the Carson Range, where colder canyon air drains overnight and elevation differences spike water delivery pressures. Rocky granite soil hides underground leaks easily while failed pressure-reducing valves (PRVs) accelerate indoor pinhole splits.",
          "Rather than excavating long hillside driveways or tearing open finished walls, dispatched specialists pinpoint the exact breach with tracer gas and acoustic correlation."
        ],
        bulletPoints: [
          "Westside Historic District, Kings Canyon & Ash Canyon foothill homes (89703)",
          "Lakeview Estates well-to-house main isolation & pressure decay testing",
          "PRV high-pressure diagnostics & winter freeze-burst thermal scanning"
        ]
      }
    ],
    faqs: [
      {
        question: "Why does my Lakeview or Kings Canyon well pump keep short-cycling?",
        answer: "Frequent pump cycling with indoor fixtures shut usually points to a leaking underground check valve or a fractured supply line between the well casing and home. Dispatched specialists isolate each section to mark the exact break."
      },
      {
        question: "Can tracer gas find water leaks under rocky Sierra foothill soil or paved driveways?",
        answer: "Yes. Safe nitrogen-hydrogen tracer gas rises cleanly through granite gravel, soil, and asphalt so electronic sensors pinpoint the leak within inches."
      }
    ],
    relatedServices: [
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Well-main & buried hillside line tracing." },
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Freeze-burst wall & PRV line testing." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate shutoff & winter pipe containment." }
    ],
    relatedLocations: [
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "Central Carson City corridor." },
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "Northridge & Lompa neighborhoods." },
      { name: "South Carson & Clearview (89705)", slug: "south-carson-clearview", context: "Foothill Drive south to Clearview." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12D. CARSON CITY DISTRICT 3: NORTH CARSON, LOMPA & SILVER OAK (89706)
  "north-carson-silver-oak": {
    slug: "north-carson-silver-oak",
    urlPath: "/north-carson-silver-oak/",
    type: "location",
    name: "North Carson, Lompa & Silver Oak Leak Detection",
    navTitle: "North Carson & Silver Oak (89706)",
    metaTitle: "Leak Detection North Carson & Silver Oak NV 89706 | (725) 313-0108",
    metaDescription: "Slab, pool, sprinkler or gas leak in North Carson, Lompa Lane or Silver Oak (89706)? 24/7 non-invasive acoustic & thermal diagnostics. Call (725) 313-0108.",
    primaryKeyword: "leak detection North Carson City NV 89706",
    secondaryKeywords: [
      "slab leak detection Silver Oak Carson City",
      "pool leak detection North Carson 89706",
      "water leak repair Lompa Lane Carson City",
      "gas leak repair Northridge 89706"
    ],
    semanticEntities: [
      "Silver Oak Golf Course, Northridge & Lompa Ranch",
      "College Parkway & North Carson Street corridor",
      "Post-tension concrete slab copper pinholes",
      "Residential swimming pool & irrigation manifolds"
    ],
    h1: "Slab, Pool, Water & Gas Leak Detection in North Carson & Silver Oak (89706)",
    heroKicker: "Serving Silver Oak, Lompa Lane, College Parkway & Northridge • 89706",
    heroSubheadline: "Modern concrete slab homes in Silver Oak, Lompa Ranch, and Northridge frequently develop silent sub-slab hot water pinholes, irrigation manifold splits, and pool plumbing leaks. Call 24/7 for non-destructive pinpointing.",
    directAnswer: "Leak Detection NV connects North Carson and Silver Oak homeowners (89706) with NSCB-licensed technicians equipped for sub-slab acoustic testing, FLIR thermal floor scanning, swimming pool hydrophone testing, and gas line safety checks. Pinpoint leaks without breaking tile or draining pools. Call (725) 313-0108.",
    featuredImage: "/images/slab_leak_inspection_1791566136409.webp",
    imageAlt: "Acoustic slab leak detection inside North Carson and Silver Oak 89706 home",
    imageCaption: "Non-invasive slab, pool, and irrigation leak diagnostics serving North Carson and Silver Oak (89706).",
    sections: [
      {
        heading: "Post-Tension Slab & Backyard Pool Diagnostics in 89706",
        subheading: "Protecting finished flooring and landscaped yards across North Carson",
        paragraphs: [
          "Subdivisions around Silver Oak, Lompa Lane, and College Parkway feature slab-on-grade and post-tension foundations where hot water copper manifolds run directly under concrete floors, tile, and engineered hardwood. Early symptoms include warm floor spots, unexplained water meter movement, or damp baseboards.",
          "Dispatched specialists isolate hot vs. cold slab lines using ultrasonic ground geophones and FLIR thermal imaging, enabling targeted spot access or clean overhead PEX rerouting."
        ],
        bulletPoints: [
          "Silver Oak, Northridge & College Parkway sub-slab acoustic localization",
          "Lompa Lane & Arrowhead corridor commercial and residential main testing",
          "Hydrophone & dye testing for backyard pools without draining water"
        ]
      }
    ],
    faqs: [
      {
        question: "How do technicians locate a slab leak in Silver Oak without jackhammering my whole floor?",
        answer: "By isolating individual hot and cold lines and sweeping the concrete slab with ultrasonic acoustic sensors and FLIR infrared cameras, specialists mark the exact leak point within inches before any repair access begins."
      },
      {
        question: "Can you test leaking swimming pools and lawn drip zones in 89706?",
        answer: "Yes. Dispatched pros pressure-test pool return and suction lines with underwater hydrophones and trace buried yard irrigation manifolds with electronic correlators."
      }
    ],
    relatedServices: [
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Non-invasive concrete slab pinpointing." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone & skimmer dye diagnostics." },
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor supply & meter leak locating." }
    ],
    relatedLocations: [
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "South along N Carson St." },
      { name: "East Carson & Empire Ranch (89706)", slug: "east-carson-empire-ranch", context: "East along Fairview & Hwy 50 E." },
      { name: "Westside & Lakeview (89703)", slug: "west-carson-lakeview", context: "West across I-580 / Ash Canyon." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12E. CARSON CITY DISTRICT 4: SOUTH CARSON, CLEARVIEW & STEWART (89701 / 89705)
  "south-carson-clearview": {
    slug: "south-carson-clearview",
    urlPath: "/south-carson-clearview/",
    type: "location",
    name: "South Carson, Clearview & Stewart Leak Detection",
    navTitle: "South Carson & Clearview (89705)",
    metaTitle: "Leak Detection South Carson City & Clearview NV | (725) 313-0108",
    metaDescription: "Water, slab, yard main or gas leak in South Carson City, Clearview, Koontz Ln or Stewart (89701/89705)? 24/7 licensed diagnostics. Call (725) 313-0108.",
    primaryKeyword: "leak detection South Carson City NV",
    secondaryKeywords: [
      "water leak detection Clearview Carson City 89705",
      "underground leak repair South Carson Street",
      "slab leak detection Koontz Lane Carson City",
      "gas leak repair Stewart Carson City NV"
    ],
    semanticEntities: [
      "South Carson Street, Clearview Drive & Snyder Avenue",
      "Koontz Lane, Stewart & Carson River Road corridor",
      "High water table floodplain loam & granite fill",
      "Commercial service mains & multi-family slab lines"
    ],
    h1: "Water, Slab, Yard Main & Gas Leak Detection in South Carson & Clearview (89705)",
    heroKicker: "Serving South Carson St, Clearview, Snyder Ave & Stewart • 89701 / 89705",
    heroSubheadline: "High groundwater near the Carson River corridor, busy South Carson commercial mains, and residential slab lines around Clearview and Snyder Avenue demand fast electronic pinpointing before moisture damages foundations.",
    directAnswer: "Leak Detection NV coordinates 24/7 leak detection across South Carson City, Clearview, Snyder Avenue, Koontz Lane, and Stewart (89701 / 89705). Certified technicians distinguish true pressurized pipe leaks from seasonal groundwater using acoustic correlation, water-chemistry testing, thermal imaging, and digital gas sniffers. Call (725) 313-0108.",
    featuredImage: "/images/water_heater_repair_1791566167061.webp",
    imageAlt: "Water and underground main leak detection in South Carson City and Clearview NV",
    imageCaption: "Precision acoustic and pressure diagnostics across South Carson Street, Clearview, and Stewart.",
    sections: [
      {
        heading: "South Carson Commercial Mains & High-Water-Table Diagnostics",
        subheading: "Separating pressurized plumbing breaks from seasonal Carson River moisture",
        paragraphs: [
          "Along South Carson Street, Snyder Avenue, and Carson River Road, sandy floodplain soils and seasonal runoff can mimic subsurface water leaks. Conversely, commercial fire/water mains and older copper slab lines can leak quietly beneath parking lots and home foundations.",
          "Dispatched specialists combine pressure-decay isolation, chlorine/fluoride moisture tracing, and nitrogen tracer gas to confirm whether moisture stems from a broken potable pipe or groundwater—saving property owners unnecessary trenching."
        ],
        bulletPoints: [
          "South Carson Street retail, automotive & multi-family commercial main locating",
          "Clearview Drive, Snyder Ave & Koontz Ln slab and crawlspace diagnostics",
          "Natural gas & propane line leak testing for residential and light commercial sites"
        ]
      }
    ],
    faqs: [
      {
        question: "How can you tell if dampness near Clearview or Carson River Rd is a pipe leak or groundwater?",
        answer: "Technicians perform static meter isolation pressure tests and test standing moisture for municipal chlorine/fluoride traces, combined with acoustic listening to confirm active pipe flow."
      },
      {
        question: "Do you handle commercial water mains along South Carson Street?",
        answer: "Yes. Dispatched NSCB C-1 contractors carry long-range acoustic correlators and tracer gas kits for commercial supply lines and parking lot mains."
      }
    ],
    relatedServices: [
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Commercial & yard main leak tracing." },
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Meter isolation & indoor supply testing." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "24/7 combustible gas testing." }
    ],
    relatedLocations: [
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "North along S Carson St." },
      { name: "East Carson & Empire Ranch", slug: "east-carson-empire-ranch", context: "Northeast toward Hwy 50 E & Pinion Hills." },
      { name: "Westside & Lakeview (89703)", slug: "west-carson-lakeview", context: "West toward Foothill Dr." }
    ],
    schemaType: "LocalBusiness"
  },

  // 12F. CARSON CITY DISTRICT 5: EAST CARSON, EMPIRE RANCH & PINION HILLS
  "east-carson-empire-ranch": {
    slug: "east-carson-empire-ranch",
    urlPath: "/east-carson-empire-ranch/",
    type: "location",
    name: "East Carson, Empire Ranch & Pinion Hills Leak Detection",
    navTitle: "East Carson & Empire Ranch",
    metaTitle: "Leak Detection East Carson City & Empire Ranch NV | (725) 313-0108",
    metaDescription: "Water, slab, well line or propane leak in East Carson City, Empire Ranch or Pinion Hills? 24/7 non-invasive acoustic & tracer gas locating. Call (725) 313-0108.",
    primaryKeyword: "leak detection East Carson City NV",
    secondaryKeywords: [
      "water leak detection Empire Ranch Carson City",
      "well line leak repair Pinion Hills Carson City",
      "slab leak detection East Carson 89701",
      "propane gas leak detection Pinion Hills NV"
    ],
    semanticEntities: [
      "Empire Ranch, Pinion Hills & Deer Run Road",
      "Highway 50 East & Fairview Drive corridor",
      "High-desert clay hardpan & granitic sand strata",
      "Acreage private domestic wells & buried propane lines"
    ],
    h1: "Water, Well-Main, Slab & Gas Leak Detection in East Carson & Empire Ranch",
    heroKicker: "Serving Empire Ranch, Pinion Hills, Deer Run Rd & Hwy 50 East • 89701 / 89706",
    heroSubheadline: "East Carson combines modern golf-course slab homes in Empire Ranch with expansive acreage lots, private wells, and buried propane systems along Pinion Hills and Deer Run Road. Call 24/7 for precision non-invasive leak detection.",
    directAnswer: "Leak Detection NV coordinates 24/7 non-invasive leak diagnostics across East Carson City, Empire Ranch, Pinion Hills, Fairview Drive, and Deer Run Road (89701 / 89706). Specialists trace long underground well lines, concrete slab pinholes, irrigation mains, and buried propane/natural gas feeds cleanly without tearing up driveways or pastures. Call (725) 313-0108.",
    featuredImage: "/images/gas_leak_detection_1791567732913.webp",
    imageAlt: "Acoustic and tracer gas leak detection in East Carson City and Empire Ranch NV",
    imageCaption: "Tracer gas, acoustic slab, and well-line leak diagnostics serving Empire Ranch and Pinion Hills.",
    sections: [
      {
        heading: "Empire Ranch Slabs & Pinion Hills Well Mains",
        subheading: "Locating deep buried breaks across hardpan clay and acreage driveways",
        paragraphs: [
          "High-desert clay hardpan and compacted granite sand in East Carson absorb thousands of gallons of leaked water before any damp patch surfaces. Homes along Deer Run Road and Pinion Hills often rely on 100-to-300-foot buried service lines from wellheads or street meters, while Empire Ranch properties rely on sub-slab copper manifolds and pressurized yard irrigation.",
          "Using inert hydrogen-nitrogen tracer gas, electromagnetic pipe locators, and calibrated PPM gas sniffers, dispatched specialists mark the exact fault spot above ground cleanly."
        ],
        bulletPoints: [
          "Empire Ranch & Fairview Drive concrete slab acoustic & thermal diagnostics",
          "Pinion Hills & Deer Run Rd long-run well main and pressure-tank isolation",
          "Buried propane and Southwest Gas natural gas line PPM sniffing"
        ]
      }
    ],
    faqs: [
      {
        question: "Can you locate a buried leak on a 200-foot driveway well line in Pinion Hills?",
        answer: "Yes. Technicians trace the buried pipe path electromagnetically and pressurize the line with tracer gas and acoustic sensors to pinpoint the leak without trenching the entire driveway."
      },
      {
        question: "Do you inspect buried propane lines as well as natural gas lines in East Carson?",
        answer: "Yes. Dispatched specialists use manometer drop testing and calibrated digital PPM sniffers compatible with both propane and Southwest Gas natural gas systems."
      }
    ],
    relatedServices: [
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Long well-main & yard pipe tracing." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Empire Ranch slab acoustic diagnostics." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Propane & natural gas leak testing." }
    ],
    relatedLocations: [
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "Northwest via Airport Rd & Hwy 50." },
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "West along Fairview Dr & 5th St." },
      { name: "South Carson & Clearview (89705)", slug: "south-carson-clearview", context: "Southwest toward Carson River Rd." }
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
    metaTitle: "How It Works | Carson City Non-Invasive Leak Detection (725) 313-0108",
    metaDescription: "Our 5-step non-invasive leak detection process for water, gas, slab & pool leaks in Carson City, Nevada. Acoustic, thermal & hydrophone testing. Call (725) 313-0108.",
    primaryKeyword: "how leak detection works Carson City NV",
    secondaryKeywords: [
      "leak detection process Carson City",
      "non-invasive leak diagnostics",
      "slab leak detection procedure Carson City",
      "leak repair workflow Nevada"
    ],
    semanticEntities: [
      "Non-invasive ultrasonic acoustic diagnostics",
      "FLIR thermal infrared moisture inspection",
      "Electronic pool hydrophone listening",
      "Combustible gas PPM sniffers",
      "Nevada State Contractors Board (NSCB) standards"
    ],
    h1: "How Our Precision Leak Detection & Repair Process Works in Carson City",
    heroKicker: "5-Step Non-Invasive Diagnostic & Permanent Repair Process",
    heroSubheadline: "From 24/7 emergency intake to acoustic and thermal localization in Carson City, NV, here is how our licensed contractor network protects your property without destructive guesswork.",
    directAnswer: "Our Carson City leak detection process follows five systematic stages: 24/7 rapid triage, non-invasive electronic diagnostics (acoustic ground microphones, thermal imaging, combustible gas sniffers, and pool hydrophones), pinpoint target marking within inches, upfront written itemized estimates, and NSCB code-compliant repairs with pressure verification. Call (725) 313-0108.",
    featuredImage: "/images/diagnostic_tech_1791662650738.webp",
    imageAlt: "Technician conducting non-invasive acoustic and thermal leak diagnostics in Carson City",
    imageCaption: "Mobile diagnostic technicians using ultrasonic acoustic listening and digital scanning tools in Carson City.",
    sections: [
      {
        heading: "Step 1: Rapid 24/7 Assessment & Carson City Dispatch",
        subheading: "Immediate telephone triage to protect your property",
        paragraphs: [
          "When you call (725) 313-0108 from anywhere in Carson City, an intake coordinator assesses your leak symptoms immediately and guides you through safe main water or gas shutoff precautions if needed.",
          "Your request is dispatched directly to qualified technicians serving Downtown Carson City (89701), Westside & Kings Canyon (89703), North Carson & Silver Oak (89706), Clearview (89705), and Empire Ranch."
        ],
        bulletPoints: [
          "24/7/365 phone triage across all Carson City ZIP codes (89701–89706)",
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
          "Ultrasonic acoustic sensors to hear pressurized water beneath concrete slabs & crawlspaces",
          "Thermal infrared imaging to map hidden moisture trails behind walls and floors",
          "Hydrophones and dye testing for swimming pools and spas without draining",
          "Digital PPM combustible gas wands for natural gas and propane systems"
        ]
      },
      {
        heading: "Step 3: Pinpoint Leak Location Identification",
        subheading: "Isolating pipe ruptures to within inches",
        paragraphs: [
          "By cross-referencing acoustic frequencies and thermal gradients, technicians mark the exact breach beneath foundation slabs, inside crawlspace joists, or under pool decking—minimizing any repair access footprint."
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
        subheading: "Permanent craftsmanship plus Carson City Public Works documentation",
        paragraphs: [
          "All repairs conform to Nevada State Contractors Board (NSCB) regulations and Carson City plumbing codes. Post-repair static pressure testing verifies airtight and watertight integrity, with itemized repair documentation prepared for insurance or Carson City Public Works utility review."
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
        question: "Are technicians licensed and insured for Carson City work?",
        answer: "Yes. Work is performed by independent licensed contractors complying with Nevada State Contractors Board (NSCB) standards and Carson City municipal codes."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Concealed potable line diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Concrete foundation diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool plumbing & shell testing." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Combustible gas safety testing." }
    ],
    relatedLocations: [
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "Central Carson City dispatch." },
      { name: "Westside & Kings Canyon (89703)", slug: "west-carson-lakeview", context: "West Carson diagnostics." },
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "North Carson slab & pool coverage." }
    ],
    schemaType: "HowTo"
  },

  // 13b. ABOUT PAGE (Alias & Company Profile)
  "about": {
    slug: "about",
    urlPath: "/about/",
    type: "about",
    name: "About Leak Detection NV | Carson City Specialist Network",
    navTitle: "About Us",
    metaTitle: "About Leak Detection NV | Carson City Licensed Plumber Network",
    metaDescription: "We connect Carson City, Nevada property owners with pre-screened, NSCB-licensed leak detection specialists serving 89701–89706. Call (725) 313-0108.",
    primaryKeyword: "Leak Detection NV Carson City",
    secondaryKeywords: [
      "about Leak Detection NV",
      "leak detection specialists Carson City Nevada",
      "water gas slab pool leak repair Carson City",
      "6875 Groveview Ln Las Vegas"
    ],
    semanticEntities: [
      "Carson City, Nevada local dispatch",
      "Nevada State Contractors Board (NSCB) standards",
      "Non-invasive ultrasonic acoustic diagnostics",
      "FLIR thermal infrared moisture inspection"
    ],
    h1: "About Leak Detection NV — Carson City Licensed Specialist Network",
    heroKicker: "Precision Non-Invasive Diagnostics • Serving Carson City, Nevada",
    heroSubheadline: "Coordinating 24/7 emergency water, gas, slab, well-line, and swimming pool leak detection across Downtown Carson City, Westside, Silver Oak, Clearview, and Empire Ranch.",
    directAnswer: "Leak Detection NV connects residential and commercial property owners in Carson City, Nevada with pre-screened, independent Nevada State Contractors Board (NSCB) licensed leak detection specialists. Coordinated 24/7 from our dispatch desk at 6875 Groveview Ln, Las Vegas, NV 89103, our network matches Carson City calls with acoustic, thermal, tracer-gas, and hydrophone diagnostics. Call (725) 313-0108.",
    featuredImage: "/images/hero_emergency_plumbing_1791566119640.webp",
    imageAlt: "Leak Detection NV diagnostic equipment and technical standards for Carson City",
    imageCaption: "Matching Carson City property owners 24/7 with NSCB-licensed acoustic and thermal leak specialists.",
    sections: [
      {
        heading: "Our Mission: Non-Invasive Precision Across Carson City, NV",
        subheading: "Eliminating guesswork and protecting Eagle Valley homes",
        paragraphs: [
          "Hidden water, freeze-burst, slab, gas, and well leaks can silently damage residential crawlspaces and foundations. Exploratory demolition—breaking through concrete slabs or tearing open historic plaster blindly—frequently costs more than fixing the pipe itself.",
          "Leak Detection NV bridges Carson City property owners with vetted independent specialists equipped with electronic acoustic listening gear, FLIR infrared thermography, calibrated gas sniffers, and underwater pool hydrophones."
        ],
        bulletPoints: [
          "24/7 Rapid Emergency Dispatch across Carson City (89701, 89702, 89703, 89705, 89706)",
          "Non-invasive acoustic, thermal, tracer gas, and hydrophone leak detection",
          "Pre-screened independent contractors complying with NSCB C-1 standards",
          "Documentation formatted for Carson City Public Works & insurance claims"
        ]
      },
      {
        heading: "Verified Licensing & Transparent Upfront Estimates",
        subheading: "Strict Nevada State Contractors Board verification",
        paragraphs: [
          "From our coordination office at 6875 Groveview Ln, Las Vegas, NV 89103, our intake desk routes urgent and scheduled inspections directly to qualified contractors serving Carson City.",
          "All servicing contractors are responsible for adhering to Carson City Building Division codes and providing transparent written quotes before repair work commences."
        ]
      }
    ],
    faqs: [
      {
        question: "Do dispatched contractors provide upfront pricing before beginning leak repairs?",
        answer: "Yes. Specialists conduct non-invasive diagnostics and present itemized written quotes before starting repairs."
      },
      {
        question: "How can I verify a plumber's license in Carson City, Nevada?",
        answer: "You can verify any contractor's license and bond status through the official Nevada State Contractors Board public database at nscb.nv.gov."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Domestic supply line diagnostics." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Combustible gas leak testing." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool and spa leak diagnostics." }
    ],
    relatedLocations: [
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "Central Carson City district." },
      { name: "Westside & Kings Canyon (89703)", slug: "west-carson-lakeview", context: "West Carson foothills." },
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "North Carson suburbs." }
    ],
    schemaType: "AboutPage"
  },

  // 14. CONTACT & NAP PAGE
  "contact": {
    slug: "contact",
    urlPath: "/contact/",
    type: "contact",
    name: "Contact & Dispatch | Leak Detection NV — Carson City",
    navTitle: "Contact & NAP",
    metaTitle: "Contact Leak Detection NV | Carson City 24/7 Dispatch (725) 313-0108",
    metaDescription: "Request 24/7 leak detection in Carson City, NV (89701–89706). Call (725) 313-0108 anytime for fast acoustic, slab, well & gas leak dispatch.",
    primaryKeyword: "contact Leak Detection NV Carson City",
    secondaryKeywords: [
      "Leak Detection NV phone number",
      "6875 Groveview Ln Las Vegas NV 89103",
      "call leak detection Carson City NV",
      "emergency leak repair phone Carson City"
    ],
    semanticEntities: [
      "Telephone: (725) 313-0108",
      "Business office address: 6875 Groveview Ln, Las Vegas, NV 89103",
      "Target service area: Carson City, Nevada (89701–89706)",
      "24/7 emergency dispatch coordination"
    ],
    h1: "Contact Leak Detection NV — 24/7 Carson City Dispatch",
    heroKicker: "24/7 Emergency Line: (725) 313-0108 • Serving Carson City, NV (89701–89706)",
    heroSubheadline: "Have an active water leak, freeze-burst pipe, natural gas odor, or sub-slab rupture in Carson City, Nevada? Call our 24/7 dispatch desk directly for immediate local matching.",
    directAnswer: "For urgent water, gas, slab, well-line, and swimming pool leaks in Carson City, NV, calling directly gives you the fastest triage. Dial (725) 313-0108 to reach our 24/7 dispatch desk (business office: 6875 Groveview Ln, Las Vegas, NV 89103) for rapid contractor matching across 89701, 89702, 89703, 89705, and 89706.",
    featuredImage: "/images/contact_office_1791662625889.webp",
    imageAlt: "Leak Detection NV dispatch office and coordination center",
    imageCaption: "Live 24/7 emergency telephone support serving Carson City, Nevada.",
    sections: [
      {
        heading: "Official Business Information & Carson City Dispatch",
        subheading: "24/7 live triage for Carson City homes and businesses",
        paragraphs: [
          "Leak Detection NV operates 24 hours a day, 7 days a week. When you call (725) 313-0108 from Carson City, our desk immediately triages your issue, shares main shutoff safety guidance, and matches your address with a licensed specialist serving your neighborhood.",
          "Our administrative dispatch office is located at 6875 Groveview Ln, Las Vegas, NV 89103, coordinating dedicated NSCB-licensed technicians throughout Carson City (89701–89706)."
        ],
        bulletPoints: [
          "Company Name: Leak Detection NV",
          "Target Service City: Carson City, Nevada (89701, 89702, 89703, 89705, 89706)",
          "Primary 24/7 Telephone: (725) 313-0108",
          "Administrative Office: 6875 Groveview Ln, Las Vegas, NV 89103",
          "Operating Hours: 24 Hours a Day, 7 Days a Week, 365 Days a Year",
          "Core Services: Water Leak Detection, Slab Leak Detection, Well & Yard Lines, Pool & Gas Leak Detection"
        ]
      }
    ],
    faqs: [
      {
        question: "Is your phone line answered 24 hours a day for Carson City emergencies?",
        answer: "Yes. Our dispatch line at (725) 313-0108 is answered 24/7/365 for urgent water, freeze-burst, gas, slab, and pool emergencies in Carson City, NV."
      },
      {
        question: "What should I do while waiting for a technician to arrive?",
        answer: "If water is actively flooding, shut off your main water shutoff valve (garage, crawlspace, wellhead, or curb meter box). If you smell natural gas or propane, evacuate immediately and call from outside."
      },
      {
        question: "Can I schedule non-emergency pool, well, or crawlspace testing in advance?",
        answer: "Yes. Call (725) 313-0108 anytime to schedule preventative acoustic inspections or pre-purchase plumbing leak checks in Carson City."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor, crawlspace & domestic supply lines." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Under-foundation acoustic diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone pool and spa diagnostics." },
      { title: "Gas Leak Detection & Repair", slug: "gas-leak-detection", description: "Natural gas & propane line testing." }
    ],
    relatedLocations: [
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "Central Carson City dispatch." },
      { name: "Westside & Kings Canyon (89703)", slug: "west-carson-lakeview", context: "West Carson & Lakeview dispatch." },
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "North Carson dispatch." }
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
    metaTitle: "Leak Detection Cost & Homeowner Guides (2026) | Leak Detection NV",
    metaDescription: "How much does leak detection cost? See 2026 price ranges, DIY meter checks, pool bucket test steps, gas emergency protocols & utility leak credit guides.",
    primaryKeyword: "Carson City leak detection blog",
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
    h1: "Leak Detection NV Blog & Homeowner Diagnostic Guides",
    heroKicker: "Technical Guides • DIY Diagnostics • Emergency Protocols",
    heroSubheadline: "Practical homeowner guides and technical insights from licensed leak detection specialists serving Carson City, Nevada.",
    directAnswer: "Explore in-depth guides covering slab leak warning signs, the swimming pool bucket test, natural gas safety procedures, water meter checks, and municipal leak credit documentation. For 24/7 dispatch in Carson City, NV, call (725) 313-0108.",
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
    heroKicker: "Effective Date: October 2026 • Office: 6875 Groveview Ln, Las Vegas, NV 89103",
    heroSubheadline: "This Privacy Policy describes how Leak Detection NV collects, uses, and safeguards information when you visit our website or contact our Carson City service line.",
    directAnswer: "Leak Detection NV maintains its business office at 6875 Groveview Ln, Las Vegas, NV 89103. We collect only necessary contact and property information (name, telephone number, Carson City service address, and leak description) to coordinate leak detection and repair services.",
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
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "Central Carson City service area." },
      { name: "North Carson & Silver Oak (89706)", slug: "north-carson-silver-oak", context: "North Carson service area." }
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
    metaDescription: "Leak Detection NV is a referral service. Work in Carson City, NV is performed by independent licensed contractors. Read our licensing and service terms.",
    primaryKeyword: "Leak Detection NV disclaimer licensing",
    secondaryKeywords: [
      "leak detection referral service",
      "independent licensed contractors Carson City NV",
      "NSCB plumbing licensing terms",
      "Nevada contractor referral"
    ],
    semanticEntities: [
      "Nevada State Contractors Board (NSCB)",
      "Independent contractor referral service",
      "Limitation of liability terms",
      "Carson City service agreements"
    ],
    h1: "Legal Disclaimer & Contractor Licensing Information",
    heroKicker: "Referral Service Terms • Independent Licensed Contractors Serving Carson City",
    heroSubheadline: "Transparency and licensing standards for homeowners and commercial property owners in Carson City, Nevada.",
    directAnswer: "Leak Detection NV is a customer referral and matching service. All leak detection, plumbing, gas piping, slab excavation, and restoration services in Carson City, NV are performed exclusively by independent, third-party licensed contractors holding valid Nevada State Contractors Board (NSCB) licenses. Leak Detection NV does not directly employ plumbers or perform plumbing work.",
    sections: [
      {
        heading: "1. Contractor Matching & Referral Service",
        subheading: "Independent plumbing and leak specialists serving Carson City, NV",
        paragraphs: [
          "Leak Detection NV operates as an independent lead generation and customer matching portal connecting property owners in Carson City, Nevada—including Downtown Capitol District (89701), Westside & Kings Canyon (89703), North Carson & Silver Oak (89706), Clearview (89705), and Empire Ranch—with pre-screened, independent plumbing contractors.",
          "When you contact our dispatch line at (725) 313-0108, your request is routed to an independent contractor possessing appropriate Nevada state trade licenses, commercial liability insurance, and electronic leak detection equipment."
        ]
      },
      {
        heading: "2. Independent Contractor Responsibility & Licensing",
        subheading: "Nevada State Contractors Board (NSCB) compliance",
        paragraphs: [
          "Each independent contractor dispatched to your property is solely responsible for evaluating job site conditions, executing technical diagnostics, providing itemized repair estimates, and completing all plumbing or gas repairs in compliance with the Nevada State Contractors Board (NSCB) and Carson City municipal codes.",
          "Property owners are encouraged to verify contractor license numbers, bond standing, and insurance coverage directly with the servicing contractor prior to authorizing major excavation or repair work."
        ]
      },
      {
        heading: "3. Limitation of Liability & Warranties",
        subheading: "Service terms and guarantees",
        paragraphs: [
          "Leak Detection NV does not guarantee, warrant, or assume liability for the work, acts, omissions, or representations of independent service providers. Any warranties, guarantees, or service contracts are entered into directly between the property owner and the servicing contractor.",
          "Emergency dispatch arrival estimates depend on traffic, winter mountain weather conditions, distance, and active call volumes."
        ]
      },
      {
        heading: "4. Business Office & Questions",
        subheading: "Contact our administrative office",
        paragraphs: [
          "If you have questions regarding these licensing disclosures or service policies, contact our office at 6875 Groveview Ln, Las Vegas, NV 89103, or call (725) 313-0108."
        ]
      }
    ],
    faqs: [
      {
        question: "Does Leak Detection NV perform plumbing work directly?",
        answer: "No. Leak Detection NV connects property owners with pre-screened, independent plumbing contractors licensed by the Nevada State Contractors Board (NSCB)."
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
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "Central Carson City service area." },
      { name: "Westside & Kings Canyon (89703)", slug: "west-carson-lakeview", context: "West Carson service area." }
    ],
    schemaType: "WebPage"
  },

  // 18. SITEMAP PAGE
  "sitemap": {
    slug: "sitemap",
    urlPath: "/sitemap/",
    type: "about",
    name: "Sitemap | Leak Detection NV — Carson City, Nevada",
    navTitle: "Sitemap",
    metaTitle: "Sitemap | Leak Detection NV Carson City, Nevada Directory",
    metaDescription: "Browse every Leak Detection NV page: water, gas, slab & pool leak detection, plus Carson City, NV neighborhood pages across 89701, 89703, 89705 & 89706.",
    primaryKeyword: "Leak Detection NV sitemap Carson City",
    secondaryKeywords: [
      "Carson City leak detection directory",
      "Carson City plumbing site map",
      "water gas slab pool leak navigation"
    ],
    semanticEntities: [
      "Leak Detection NV site index",
      "Carson City district navigation directory",
      "Carson City 89701 89703 89705 89706 service pages"
    ],
    h1: "Leak Detection NV Sitemap & Carson City Directory",
    heroKicker: "Complete Directory • Carson City, Nevada Services & Districts",
    heroSubheadline: "Easily navigate every leak detection service page, Carson City district guide, technical article, and company policy.",
    directAnswer: "Browse every page on Leak Detection NV: water leak detection, 24/7 gas leak testing, slab leak acoustic locating, swimming pool hydrophone testing, cost guides, and dedicated Carson City neighborhood pages covering 89701, 89702, 89703, 89705, and 89706.",
    sections: [
      {
        heading: "Core Leak Detection Service Pages",
        subheading: "Non-invasive electronic diagnostic capabilities in Carson City",
        paragraphs: [
          "Specialized non-destructive services protecting homes, crawlspaces, slabs, wells, and pools in Carson City, NV:"
        ],
        bulletPoints: [
          "Home / Main Hub: Carson City Water, Gas, Slab & Pool Leak Detection",
          "Water Leak Detection & Repair: Acoustic & thermal diagnostics for hidden pipes",
          "Gas Leak Detection & Emergency Repair: 24/7 electronic sniffing and Southwest Gas clearances",
          "Slab Leak Detection & Repair: Sub-concrete foundation acoustic geophones & infrared",
          "Pool Leak Detection & Repair: Underwater hydrophones & precision dye testing",
          "Underground & Well Pipe Leaks: Buried potable mains, wells & irrigation lines",
          "24/7 Emergency Leak Diagnostics: Immediate rapid dispatch in Carson City"
        ]
      },
      {
        heading: "Carson City, Nevada Districts & Service Areas",
        subheading: "Complete coverage across ZIP codes 89701–89706",
        paragraphs: [
          "Dedicated local district pages addressing Carson City's freeze-thaw patterns, crawlspaces, concrete slabs, and private well mains:"
        ],
        bulletPoints: [
          "Downtown Carson City & Capitol District (89701)",
          "Westside, Kings Canyon & Lakeview (89703)",
          "North Carson, Lompa Lane & Silver Oak (89706)",
          "South Carson, Clearview & Stewart (89701 / 89705)",
          "East Carson, Empire Ranch & Pinion Hills"
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
          "How to Get a Utility Leak Credit on High Water Bills"
        ]
      },
      {
        heading: "Company Information & Legal",
        subheading: "Office details, licensing, and policies",
        paragraphs: [
          "Transparency and compliance information for Leak Detection NV (office: 6875 Groveview Ln, Las Vegas, NV 89103; telephone: (725) 313-0108):"
        ],
        bulletPoints: [
          "About Us: Carson City Licensed Specialist Network",
          "Contact & Dispatch: 24/7 Emergency Line & Office Info",
          "How It Works: 5-Step Non-Invasive Diagnostic Process",
          "Privacy Policy: Consumer data protection & TCPA compliance",
          "Legal Disclaimer & Licensing: Referral service terms & NSCB contractor disclosures"
        ]
      }
    ],
    faqs: [
      {
        question: "Which city does Leak Detection NV primarily target?",
        answer: "Leak Detection NV serves Carson City, Nevada—covering Downtown & Capitol District (89701), Westside & Kings Canyon (89703), North Carson & Silver Oak (89706), Clearview (89705), and Empire Ranch. Call (725) 313-0108."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection", slug: "water-leak-detection", description: "Pinpoint hidden supply lines." },
      { title: "Gas Leak Detection", slug: "gas-leak-detection", description: "24/7 gas line safety testing." }
    ],
    relatedLocations: [
      { name: "Downtown & Capitol (89701)", slug: "carson-city", context: "Central Carson City hub." },
      { name: "Westside & Kings Canyon (89703)", slug: "west-carson-lakeview", context: "West Carson hub." }
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
