/**
 * Site content and SEO architecture data for Spring Valley Leak Detection & Repair.
 * Specializing in Water, Gas, Slab, and Swimming Pool Leak Detection & Repair.
 * Serving Spring Valley, Las Vegas, NV (Clark County).
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
export const DOMAIN_URL = "https://www.springvalleyleakdetection.com";
export const BRAND_NAME = "Spring Valley Leak Detection & Repair";
export const BUSINESS_ADDRESS = {
  streetAddress: "6875 Groveview Ln",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89103",
  targetArea: "Spring Valley",
  telephone: "+1-725-313-0108",
};

export const sitePages: Record<string, PageContent> = {
  // 1. HOMEPAGE: PRIMARY AUTHORITY HUB
  home: {
    slug: "",
    urlPath: "/",
    type: "home",
    name: "Spring Valley Leak Detection & Repair",
    navTitle: "Home",
    metaTitle: "Leak Detection Spring Valley NV | Water, Gas, Slab & Pool Leaks (725) 313-0108",
    metaDescription: "Precision water, gas, slab & pool leak detection and repair in Spring Valley, NV. Non-invasive acoustic, thermal & dye testing. Call (725) 313-0108. 6875 Groveview Ln.",
    primaryKeyword: "leak detection Spring Valley NV",
    secondaryKeywords: [
      "water leak detection Spring Valley",
      "gas leak repair Spring Valley NV",
      "slab leak repair Las Vegas 89103",
      "pool leak detection Spring Valley",
      "emergency leak repair Spring Valley"
    ],
    semanticEntities: [
      "Las Vegas Valley Water District (LVVWD)",
      "Nevada State Contractors Board (NSCB)",
      "Southwest Gas safety protocols",
      "Caliche desert soil foundation movement",
      "Hydrophone underwater acoustic sensors",
      "Combustible gas electronic sniffing"
    ],
    h1: "Precision Water, Gas, Slab & Pool Leak Detection in Spring Valley, NV",
    heroKicker: "Non-Invasive Diagnostic Testing • 24/7 Rapid Repair Dispatch",
    heroSubheadline: "Hidden water leaks, dangerous gas odors, sub-slab foundation ruptures, and vanishing pool water threaten property integrity and safety. Our local dispatch desk at 6875 Groveview Ln connects you with certified, licensed leak detection specialists across Spring Valley.",
    directAnswer: "If you suspect a leak in Spring Valley—whether an unexplained surge on your Las Vegas Valley Water District bill, a rotten egg gas odor, warm flooring indicating a slab leak, or abnormal swimming pool water drop—specialized non-invasive electronic diagnostics pinpoint the rupture without destructive property demolition. Call (725) 313-0108 for immediate local dispatch.",
    featuredImage: "/src/assets/images/pool_leak_detection_1791567711591.jpg",
    imageAlt: "Technician conducting specialized pool and water leak detection in Spring Valley Nevada",
    imageCaption: "Specialized electronic hydrophone and acoustic sensors pinpoint water, gas, slab, and swimming pool leaks.",
    sections: [
      {
        heading: "Four Specialized Leak Detection & Repair Capabilities",
        subheading: "Comprehensive protection for residential and commercial properties",
        paragraphs: [
          "Leaks in Southern Nevada present distinct hazards due to desert temperatures, hard water mineral deposits, and shifting caliche soil. Our dispatch network provides specialized diagnostics across four critical categories: domestic water systems, hazardous natural gas lines, sub-concrete slab foundations, and backyard swimming pools.",
          "Rather than tearing up manicured landscaping, jackhammering random tile floors, or draining swimming pools, dispatched technicians utilize acoustic ground microphones, thermal imaging cameras, combustible gas sensors, and underwater hydrophones to locate the exact leak source within inches."
        ],
        bulletPoints: [
          "Water Leak Detection: Pinpointing concealed potable supply lines, high-pressure main yard breaks, and hidden wall cavity leaks",
          "Gas Leak Detection: Rapid identification of natural gas and propane line leaks, gas appliance shutoffs, and code-compliant re-piping",
          "Slab Leak Detection: Non-invasive sub-foundation acoustic diagnostics, isolating copper ruptures beneath concrete slabs",
          "Pool Leak Detection: Electronic listening and precision dye testing for pool skimmers, returns, lights, and underground suction lines"
        ]
      },
      {
        heading: "The Spring Valley Environmental Factor: Caliche & Desert Heat",
        subheading: "Why Southern Nevada properties suffer severe underground pipe failures",
        paragraphs: [
          "Spring Valley and the greater Las Vegas Valley rest on dense, concrete-like caliche rock layers combined with alkaline soil. During intense summer heat exceeding 110°F, ground temperatures fluctuate and pressurized lines undergo thermal stress.",
          "Copper water lines embedded under concrete slab foundations rub against hard caliche rock until pinhole leaks develop. Swimming pool plumbing lines settle under sun-baked desert soil, causing cracked return lines and failing skimmer seals. Dispatched specialists understand Clark County construction standards and deliver lasting, code-compliant repairs."
        ],
        callout: {
          title: "Immediate Safety Protocol for Gas Leaks",
          body: "If you detect a rotten-egg sulfur odor or hissing sound near your gas meter or water heater, evacuate all occupants immediately. Do not flip light switches, operate garage doors, or use phones inside. Once at a safe distance, call Southwest Gas or our emergency dispatch line at (725) 313-0108."
        }
      },
      {
        heading: "Advanced Non-Invasive Diagnostic Technology & Equipment",
        subheading: "Pinpoint accuracy that protects your concrete, walls, and landscaping",
        paragraphs: [
          "At Spring Valley Leak Detection & Repair, our specialists utilize state-of-the-art non-invasive diagnostic equipment to pinpoint the exact location of water, gas, slab, and swimming pool leaks before any repair begins.",
          "By deploying ultrasonic ground listening discs, high-resolution FLIR thermal imaging, digital combustible gas detectors, and underwater pool hydrophones, technicians isolate subterranean pipe breaches to within inches, eliminating costly exploratory demolition."
        ],
        bulletPoints: [
          "Ultrasonic acoustic sensors to hear pressurized water escaping beneath concrete slabs",
          "FLIR thermal infrared cameras detecting hidden moisture paths behind drywall",
          "Digital PPM combustible gas sniffing wands for natural gas and propane safety",
          "Underwater hydrophone listening and precision dye testing for swimming pools and spas"
        ]
      },
      {
        heading: "Spring Valley & Surrounding Service Coverage",
        subheading: "Fast dispatch across key Clark County residential communities",
        paragraphs: [
          "We dispatch throughout Spring Valley proper—including Rainbow Blvd, Flamingo Rd, and Sahara Ave corridors—as well as adjacent communities including The Lakes, Peccole Ranch, Spanish Trail, Summerlin South, and Rhodes Ranch.",
          "With mobile service units equipped with advanced digital acoustic locators and gas tracer equipment, dispatched contractors arrive quickly to mitigate damage."
        ]
      }
    ],
    faqs: [
      {
        question: "How do you detect a hidden water leak without breaking floors or walls?",
        answer: "Dispatched specialists use acoustic listening equipment that amplifies the sound of pressurized water escaping pipes, along with infrared thermal imaging to detect moisture temperature differentials behind walls and beneath flooring, locating the leak before any invasive work begins."
      },
      {
        question: "How do I know if my swimming pool has a leak or is just experiencing evaporation?",
        answer: "In Southern Nevada's dry desert climate, pools typically lose 1/4 to 1/2 inch of water per day to evaporation during summer. If your pool is losing more than 1/2 inch daily, perform a simple bucket test or call (725) 313-0108 for hydrophone acoustic testing and dye inspection."
      },
      {
        question: "What are the common signs of a slab leak in a Spring Valley home?",
        answer: "Common symptoms include warm spots on tile or vinyl flooring, the sound of water running when all fixtures are turned off, unexplained spikes on your Las Vegas Valley Water District bill, and damp baseboards near foundation walls."
      },
      {
        question: "What should I do if I smell natural gas in my home?",
        answer: "Immediately evacuate all residents and pets outside into fresh air. Do not operate any electrical switches, open garage doors, or ignite flames. From a safe exterior location, call our emergency dispatch line at (725) 313-0108 or Southwest Gas emergency services."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Pinpoint hidden supply lines and indoor leaks." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Electronic sniffing and rapid gas pipe repairs." },
      { title: "Precision Slab Leak Detection", slug: "slab-leak-detection", description: "Sub-foundation acoustic and thermal testing." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Hydrophone and dye testing for pool plumbing." }
    ],
    relatedLocations: [
      { name: "Spring Valley Center", slug: "spring-valley-center", context: "Rainbow, Flamingo & Sahara core neighborhoods." },
      { name: "The Lakes & Peccole Ranch", slug: "the-lakes", context: "Waterfront subdivisions and residential pool systems." },
      { name: "Spanish Trail", slug: "spanish-trail", context: "Guard-gated estates and custom luxury pool plumbing." },
      { name: "Summerlin South", slug: "summerlin-south", context: "Master-planned residential community leak dispatch." },
      { name: "Rhodes Ranch", slug: "rhodes-ranch", context: "Golf course communities and modern slab homes." }
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
    metaTitle: "Water Leak Detection Spring Valley NV | Hidden Pipe Leak Repair",
    metaDescription: "Unexplained high water bill or hidden pipe leak in Spring Valley? Call (725) 313-0108. Non-invasive acoustic & thermal water leak detection & fast repair.",
    primaryKeyword: "water leak detection Spring Valley",
    secondaryKeywords: [
      "hidden water leak repair Spring Valley NV",
      "water pipe leak detection Las Vegas",
      "high water bill leak detection 89103",
      "main water line leak repair Spring Valley"
    ],
    semanticEntities: [
      "Las Vegas Valley Water District (LVVWD) continuous flow alerts",
      "Ultrasonic acoustic pipe listening",
      "FLIR infrared thermal moisture detection",
      "Potable water supply line pressure decay",
      "Pinhole copper pipe corrosion"
    ],
    h1: "Non-Invasive Water Leak Detection & Repair in Spring Valley, NV",
    heroKicker: "Stop Structural Water Damage • Pinpoint Acoustic Diagnostics",
    heroSubheadline: "Pressurized potable water leaks hidden inside walls, ceilings, and underground yard lines cause thousands of dollars in structural damage and water bill spikes. Connect with local leak specialists in Spring Valley.",
    directAnswer: "Water leak detection employs ultrasonic listening devices, thermal imaging, and digital line pressure testing to identify the exact location of leaking pipes without unnecessary drywall removal or concrete tearing. Dispatched Spring Valley technicians locate the breach and perform immediate copper, PEX, or main line pipe repairs.",
    featuredImage: "/src/assets/images/hero_emergency_plumbing_1791566119640.jpg",
    imageAlt: "Service van and technician performing water leak diagnostics in Spring Valley",
    imageCaption: "Mobile leak detection units carry sensitive acoustic locators and digital line-pressurizing equipment.",
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
      { name: "The Lakes", slug: "the-lakes", context: "Residential water lines and high-water-table properties." },
      { name: "Spanish Trail", slug: "spanish-trail", context: "Luxury estate domestic supply lines." },
      { name: "Spring Valley Center", slug: "spring-valley-center", context: "Core commercial and residential water piping." }
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
    metaTitle: "Gas Leak Detection Spring Valley NV | Emergency Gas Line Repair (725) 313-0108",
    metaDescription: "Smell natural gas or rotten eggs in Spring Valley? Call (725) 313-0108 for 24/7 emergency gas leak detection & repair. Licensed Nevada gas pipe technicians.",
    primaryKeyword: "gas leak detection Spring Valley",
    secondaryKeywords: [
      "gas leak repair Spring Valley NV",
      "emergency gas line plumber Las Vegas",
      "natural gas leak detection 89103",
      "propane leak repair Spring Valley"
    ],
    semanticEntities: [
      "Southwest Gas meter lock and tag",
      "Mercaptan odorant detection",
      "Combustible gas electronic sniffing wand",
      "Black iron gas pipe threading",
      "Manometer gas pressure decay testing"
    ],
    h1: "Emergency Gas Leak Detection & Repair in Spring Valley, NV",
    heroKicker: "Hazardous Gas Containment • 24/7 Immediate Dispatch",
    heroSubheadline: "Natural gas leaks pose severe fire, explosion, and asphyxiation risks. When you smell sulfur or suspect a gas line breach, our Spring Valley dispatch line connects you instantly with certified gas piping contractors.",
    directAnswer: "Gas leak detection utilizes specialized combustible gas sensors (gas sniffers) sensitive to parts-per-million concentrations, ultrasonic detectors, and calibrated digital manometers to locate natural gas or propane leaks along supply lines, valves, and heating appliances. Dispatched Spring Valley technicians isolate the leak, make code-compliant repairs, and coordinate re-pressurization testing.",
    featuredImage: "/src/assets/images/gas_leak_detection_1791567732913.jpg",
    imageAlt: "Plumbing technician using electronic gas leak detector on natural gas supply line",
    imageCaption: "Digital combustible gas sniffing wands locate leaks along gas valves, fittings, and appliance connections.",
    sections: [
      {
        heading: "Urgent Warning Signs of a Gas Leak",
        subheading: "Recognizing physical, acoustic, and environmental danger indicators",
        paragraphs: [
          "Utility companies inject mercaptan—a chemical compound that smells like rotten eggs or sulfur—into natural gas so that leaks are immediately detectable by human scent. However, slow leaks inside crawl spaces, exterior meter manifolds, or behind drywall can go unnoticed until gas accumulates.",
          "If you smell gas, hear a hissing or whistling noise near a gas line, or notice dead patches of vegetation along underground gas pipe routes in your yard, take immediate precautions and contact emergency dispatch at (725) 313-0108."
        ],
        bulletPoints: [
          "Rotten-egg or sulfur smell lingering in the kitchen, garage, or utility closet",
          "Hissing, roaring, or whistling sound near gas appliances, meters, or supply valves",
          "Physical symptoms among occupants: dizziness, headaches, nausea, or eye irritation",
          "Vegetation or grass dying in a distinct path above buried exterior gas supply lines"
        ]
      },
      {
        heading: "Southwest Gas Meter Shutoff & Re-Certification Process",
        subheading: "What happens when the utility locks your gas meter",
        paragraphs: [
          "If Southwest Gas responds to an emergency call, utility technicians will turn off and red-tag (lock) the gas meter for public safety. Southwest Gas will not turn the meter back on until an independent, licensed plumbing contractor performs a pressure test and repairs the damaged pipe.",
          "Dispatched Nevada-licensed contractors arrive with pressure manometers to test the entire system, locate and replace corroded black iron or CSST gas lines, pull required Clark County permits if required, and provide the certified test results required for utility unlock."
        ]
      },
      {
        heading: "Gas Appliance Lines & Outdoor Pool Heaters",
        subheading: "Specialized service for indoor and outdoor gas-fired equipment",
        paragraphs: [
          "In Spring Valley, gas lines supply not only indoor furnaces, water heaters, and cooktops, but also high-BTU outdoor swimming pool heaters, fire pits, and outdoor kitchen grills.",
          "Dispatched gas technicians inspect the full run of underground poly gas lines running to detached pool equipment and patios, ensuring underground fittings are secure and protected against desert ground movement."
        ]
      }
    ],
    faqs: [
      {
        question: "Can I use soapy water to check for a gas leak myself?",
        answer: "While dish soap and water can create bubbles over an accessible, obvious fitting, it is not recommended as a complete diagnostic tool. Small leaks and hidden lines inside walls or underground require calibrated electronic combustible gas sniffers and pressure gauges."
      },
      {
        question: "How long does gas line repair take after a meter has been tagged?",
        answer: "Most residential gas line repairs and manometer pressure tests can be completed the same day. Dispatched technicians prioritize rapid turnaround to restore gas service to your home."
      },
      {
        question: "Are contractors licensed to work on gas lines in Nevada?",
        answer: "Yes. In the State of Nevada, gas piping repair must be performed by contractors holding an active C-1 Plumbing & Heating license issued by the Nevada State Contractors Board (NSCB)."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Potable supply and indoor water leak services." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Outdoor pool heater and plumbing line testing." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate dispatch for hazardous leaks." }
    ],
    relatedLocations: [
      { name: "Spring Valley Center", slug: "spring-valley-center", context: "Flamingo & Rainbow residential gas lines." },
      { name: "Spanish Trail", slug: "spanish-trail", context: "Custom home outdoor fire features and pool heaters." },
      { name: "Summerlin South", slug: "summerlin-south", context: "Modern residential gas manifold systems." }
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
    metaTitle: "Slab Leak Detection Spring Valley NV | Foundation Leak Repair (725) 313-0108",
    metaDescription: "Warm spot on your floor or high water bill in Spring Valley? Call (725) 313-0108 for non-invasive slab leak detection & repair. Acoustic & thermal testing.",
    primaryKeyword: "slab leak detection Spring Valley",
    secondaryKeywords: [
      "slab leak repair Spring Valley NV",
      "concrete slab water leak Las Vegas",
      "foundation leak repair 89103",
      "sub slab plumbing repair Spring Valley"
    ],
    semanticEntities: [
      "Post-tension concrete slab foundation",
      "Desert caliche sub-base abrasion",
      "Electromagnetic pipe and cable locator",
      "Acoustic ground sensor listening disc",
      "Overhead PEX re-route bypass"
    ],
    h1: "Non-Invasive Slab Leak Detection & Repair in Spring Valley, NV",
    heroKicker: "Protect Your Concrete Foundation • Pinpoint Acoustic Sensors",
    heroSubheadline: "Sub-slab copper pipe ruptures undermine concrete foundations and cause catastrophic flooring damage. Connect with experienced Spring Valley slab leak technicians who locate leaks without breaking concrete.",
    directAnswer: "A slab leak occurs when pressurized copper water lines running beneath or embedded inside a home's concrete foundation slab rupture due to friction against caliche rock, corrosion, or ground shifting. Dispatched Spring Valley technicians utilize acoustic ground listening discs, line tracing transmitters, and thermal imaging to pinpoint sub-slab leaks to within inches before recommending precision spot repair or an overhead PEX re-route.",
    featuredImage: "/src/assets/images/slab_leak_inspection_1791566136409.jpg",
    imageAlt: "Technician operating acoustic slab leak detector on residential flooring in Spring Valley",
    imageCaption: "Non-invasive electronic acoustic sensors detect pressurized water leaks beneath concrete slabs.",
    sections: [
      {
        heading: "Why Slab Leaks Occur in Spring Valley Homes",
        subheading: "The geological challenge of Southern Nevada caliche soil",
        paragraphs: [
          "Most single-family homes in Spring Valley and Las Vegas are built on post-tension concrete slab foundations. Beneath the slab, pressurized hot and cold water supply lines are laid in trenches before concrete is poured.",
          "Southern Nevada soil contains caliche—a hardened layer of calcium carbonate rock with sharp, jagged edges. As hot water expands and contracts copper tubing over thousands of cycles, the soft copper rubs against the hard caliche, wearing a pinhole opening into the pipe."
        ],
        bulletPoints: [
          "Thermal expansion cycles causing copper lines to rub against sharp caliche aggregate",
          "High municipal water pressure accelerating erosion at copper joints and bends",
          "Hard mineral water causing electrochemical pinhole pitting from the inside out",
          "Ground shifting and settling underneath post-tension concrete slabs"
        ]
      },
      {
        heading: "Warning Signs of a Foundation Slab Leak",
        subheading: "Identify sub-slab water loss before structural cracking occurs",
        paragraphs: [
          "Because slab leaks happen under inches of solid concrete, water often travels horizontally beneath the slab before surfacing. However, distinct indicators allow early detection.",
          "If you notice a warm spot on your floor under bare feet (hot water line leak), hear rushing water when all faucets are shut off, or observe your water meter dial spinning steadily, contact our dispatch line at (725) 313-0108."
        ],
        bulletPoints: [
          "Isolated warm or hot spots on tile, hardwood, or laminate flooring",
          "Sound of running water emanating from walls or floor when all fixtures are closed",
          "Sudden drop in hot water pressure or water heater running continuously",
          "Cracks appearing in drywall joints, baseboard trim, or exterior stucco",
          "Unexplained spike on your monthly Las Vegas Valley Water District bill"
        ]
      },
      {
        heading: "Repair Solutions: Direct Spot Repair vs. Overhead PEX Bypass",
        subheading: "Choosing the right long-term solution for your property",
        paragraphs: [
          "Once the exact leak location is pinpointed acoustically, dispatched contractors discuss your repair options with you. In a Direct Spot Repair, a small section of flooring and concrete is accessed to solder a new copper sleeve over the ruptured segment.",
          "For older homes with aging copper, an Overhead PEX Re-Route is often the superior choice. Technicians cap off the damaged line beneath the slab and run a flexible, seamless PEX line through the attic and wall cavities, eliminating sub-slab leak risk permanently."
        ]
      }
    ],
    faqs: [
      {
        question: "Does homeowners insurance cover slab leak repair in Nevada?",
        answer: "Most Nevada homeowners policies cover the cost of tear-out and restoration of flooring and concrete required to access the leak, as well as resultant water damage. The plumbing pipe repair itself is typically an out-of-pocket maintenance expense. Dispatched technicians provide detailed diagnostic documentation for your insurance adjuster."
      },
      {
        question: "How accurate is electronic acoustic slab leak detection?",
        answer: "When conducted by trained specialists, acoustic ground listening devices and thermal cameras can pinpoint the sub-slab rupture to within a 6-to-12-inch radius, preventing unnecessary floor demolition."
      },
      {
        question: "Is an overhead re-route better than breaking my concrete slab?",
        answer: "An overhead PEX re-route avoids jackhammering concrete and preserves expensive tile or hardwood flooring. It is especially recommended if your home has had previous slab leaks, as it abandons the compromised sub-slab line entirely."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Detect hidden indoor and main line leaks." },
      { title: "24/7 Emergency Leak Repair", slug: "emergency-leak-repair", description: "Immediate water shutoff and emergency response." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Yard and exterior line leak detection." }
    ],
    relatedLocations: [
      { name: "Spanish Trail", slug: "spanish-trail", context: "Custom homes with large post-tension foundations." },
      { name: "The Lakes", slug: "the-lakes", context: "1980s and 1990s slab homes with copper piping." },
      { name: "Rhodes Ranch", slug: "rhodes-ranch", context: "Modern slab plumbing diagnostics." }
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
    metaTitle: "Pool Leak Detection Spring Valley NV | Swimming Pool Repair (725) 313-0108",
    metaDescription: "Losing water in your pool in Spring Valley? Call (725) 313-0108 for precision pool leak detection. Hydrophone acoustic sensors & dye testing for pools & spas.",
    primaryKeyword: "pool leak detection Spring Valley",
    secondaryKeywords: [
      "swimming pool leak repair Spring Valley NV",
      "pool pipe leak detection Las Vegas",
      "pool skimmer leak repair 89103",
      "inground pool leak detection Spring Valley"
    ],
    semanticEntities: [
      "Hydrophone underwater acoustic sensor",
      "Fluorescent dye syringe testing",
      "Skimmer throat and throat-faceplate bond",
      "Underground return and suction line pressure test",
      "Southern Nevada desert evaporation bucket test"
    ],
    h1: "Swimming Pool Leak Detection & Repair in Spring Valley, NV",
    heroKicker: "Stop Vanishing Pool Water • Hydrophone Acoustic Diagnostics",
    heroSubheadline: "In the Southern Nevada desert, a swimming pool leak wastes hundreds of gallons of water per day and erodes the soil supporting your pool deck. Dispatched specialists locate structural, skimmer, and underground pipe leaks accurately.",
    directAnswer: "Swimming pool leak detection combines underwater hydrophone acoustic listening, precision dye testing at skimmers and light niches, and pneumatic line-pressure testing on return, suction, and main drain pipes to pinpoint water loss. Dispatched Spring Valley pool leak technicians diagnose whether the leak is in the structure or underground plumbing without draining your pool.",
    featuredImage: "/src/assets/images/pool_leak_detection_1791567711591.jpg",
    imageAlt: "Pool leak detection specialist using dye syringe and underwater acoustic hydrophone",
    imageCaption: "Underwater hydrophone microphones and precision dye testing locate leaks in pool shells, lights, and underground pipes.",
    sections: [
      {
        heading: "Is Your Pool Leaking or Just Evaporating?",
        subheading: "Understanding the bucket test in the desert climate",
        paragraphs: [
          "In Spring Valley and the Las Vegas Valley, summer evaporation rates are among the highest in North America. A typical residential pool can lose 1/4 to 1/2 inch of water per day during hot, windy summer months simply from evaporation.",
          "However, if your automatic water filler runs constantly, your chemical consumption has spiked, or your water level drops more than 1/2 inch per day, your pool is losing water through a structural crack, skimmer separation, or broken underground plumbing line."
        ],
        bulletPoints: [
          "Automatic pool water leveler running continuously throughout the day",
          "Pool losing more water than a benchmark bucket test indicates over 24 hours",
          "Air bubbles constantly blowing through pool return jets (suction line leak)",
          "Cracking or sinking pool deck pavers around the pool perimeter",
          "Wet soil, standing water, or unusually lush grass near the pool equipment pad"
        ]
      },
      {
        heading: "Advanced Pool Diagnostic Methodology",
        subheading: "Non-invasive electronic testing that saves pool water",
        paragraphs: [
          "Draining a pool in Southern Nevada can cause plaster damage or structural 'popping' from groundwater pressure. Dispatched specialists conduct all diagnostics with the pool fully filled.",
          "Using underwater hydrophone microphones, technicians listen for the distinct acoustic signature of water being drawn out through shell cracks or light conduit pipes. Precision non-toxic dye is injected around skimmer throats, return fittings, and drain covers to visually confirm water suction into micro-fissures."
        ]
      },
      {
        heading: "Underground Pool Plumbing Pressure Testing & Repair",
        subheading: "Isolating returns, skimmers, and spa jets beneath concrete decking",
        paragraphs: [
          "When leaks occur in buried PVC plumbing lines beneath concrete decking, technicians isolate each plumbing loop using inflatable test plugs and pressure gauges to identify which line is failing.",
          "Once isolated, electronic line locators pinpoint the exact break beneath the deck. Dispatched contractors perform clean, localized deck cuts to replace cracked schedule-40 PVC pipes, restoring full filtration flow without tearing up your entire yard."
        ]
      }
    ],
    faqs: [
      {
        question: "How do I perform a bucket test to verify a pool leak?",
        answer: "Fill a 5-gallon bucket with pool water and set it on the first pool step. Mark the water level inside the bucket and the pool water level outside the bucket with tape. After 24 hours of normal pool operation, compare the two marks. If the pool water dropped noticeably more than the bucket water, you have a leak."
      },
      {
        question: "Do you have to drain my pool to find the leak?",
        answer: "No. Advanced leak detection techniques—including hydrophone listening and dye testing—require the pool to be full and clean to accurately identify water flow through leaks."
      },
      {
        question: "Can an underground pool pipe leak crack my concrete pool deck?",
        answer: "Yes. Water escaping from a pressurized pool pipe saturates the soil beneath the deck, causing soil erosion or swelling that heaves and cracks concrete decking and pavers."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor and domestic water supply leak services." },
      { title: "Gas Leak Detection & Repair", slug: "gas-leak-detection", description: "Pool heater gas line leak diagnostics." },
      { title: "Underground Pipe Leak Detection", slug: "underground-leak-detection", description: "Buried yard and main line leak testing." }
    ],
    relatedLocations: [
      { name: "Spanish Trail", slug: "spanish-trail", context: "Luxury estate custom pools and infinity spas." },
      { name: "The Lakes", slug: "the-lakes", context: "Established residential pool plumbing systems." },
      { name: "Rhodes Ranch", slug: "rhodes-ranch", context: "Master-planned community swimming pools." }
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
    metaTitle: "Underground Leak Detection Spring Valley NV | Main Line & Yard Leaks",
    metaDescription: "Buried water line or irrigation leak in Spring Valley? Call (725) 313-0108. Electromagnetic line tracing & acoustic yard leak detection across Las Vegas.",
    primaryKeyword: "underground leak detection Spring Valley",
    secondaryKeywords: [
      "main water service line leak Spring Valley",
      "yard leak detection Las Vegas NV",
      "irrigation leak repair Spring Valley 89103",
      "buried pipe leak locator Spring Valley"
    ],
    semanticEntities: [
      "Electromagnetic pipe and cable locator",
      "Tracer gas hydrogen-nitrogen sniffing",
      "Underground irrigation manifold repair",
      "Main water service line trenchless pull",
      "Desert caliche rock excavation"
    ],
    h1: "Underground Pipe & Irrigation Leak Detection in Spring Valley, NV",
    heroKicker: "Locate Buried Pipe Leaks • Zero Unnecessary Digging",
    heroSubheadline: "Water leaks in buried main supply lines and desert landscape irrigation systems waste thousands of gallons of water underground before breaking the surface. Connect with specialized underground line locators.",
    directAnswer: "Underground leak detection uses electromagnetic pipe locators, acoustic ground microphones, and non-toxic tracer gas to find leaks in buried main water service lines, commercial irrigation mains, and residential landscape lines without trenching your entire property. Dispatched Spring Valley technicians pinpoint the subterranean rupture for surgical excavation and repair.",
    featuredImage: "/src/assets/images/hero_emergency_plumbing_1791566119640.jpg",
    imageAlt: "Technician tracing underground pipe lines in residential Spring Valley neighborhood",
    imageCaption: "Electromagnetic line locators and acoustic ground sensors identify buried water line breaks.",
    sections: [
      {
        heading: "Buried Main Water Lines vs. Irrigation Leaks",
        subheading: "Differentiating continuous supply leaks from timer-activated zones",
        paragraphs: [
          "Your property features two major underground pressurized systems: the main water service line running from the city meter to your home, and landscape drip irrigation lines that water desert landscaping. A leak on the main line runs 24/7, while irrigation leaks may only occur when specific automated valves open.",
          "Dispatched technicians perform pressure-decay isolation tests at the backflow preventer and main house shutoff to determine which system is losing water before conducting acoustic ground scans."
        ],
        bulletPoints: [
          "Main service line testing from city water meter box to foundation entrance",
          "Backflow preventer and pressure vacuum breaker (PVB) diagnostic testing",
          "Landscape drip line and PVC irrigation manifold leak pinpointing",
          "Trenchless pipe pulling to replace failed main lines without destroying driveways"
        ]
      },
      {
        heading: "The Danger of Caliche Soil Erosion",
        subheading: "Preventing sinkholes and driveway foundation failure",
        paragraphs: [
          "When hundreds of gallons of pressurized water leak into desert soil, the water erodes the subgrade beneath concrete driveways, walkways, and retaining walls, creating subterranean voids that suddenly collapse into sinkholes.",
          "Early underground detection stops soil erosion before costly hardscape damage occurs, protecting your structural investments."
        ]
      }
    ],
    faqs: [
      {
        question: "How do you find a buried plastic PVC pipe underground?",
        answer: "Because PVC does not conduct electricity, technicians insert a traceable fiberglass rod with a copper transmitter into the line, or introduce a safe hydrogen-nitrogen tracer gas that permeates through the soil and is detected by specialized sniffing sensors."
      },
      {
        question: "Can an underground water line leak be replaced without digging up my yard?",
        answer: "Yes. Where full line replacement is required, dispatched contractors frequently utilize trenchless pipe pulling or pneumatic directional boring, installing a new seamless water line with minimal excavation."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor and domestic water line diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Buried pool suction and return line testing." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Leaks underneath foundation slabs." }
    ],
    relatedLocations: [
      { name: "Spanish Trail", slug: "spanish-trail", context: "Expansive desert estate grounds and irrigation systems." },
      { name: "Summerlin South", slug: "summerlin-south", context: "Residential main water service line diagnostics." },
      { name: "The Lakes", slug: "the-lakes", context: "Older PVC irrigation and supply lines." }
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
    metaTitle: "Emergency Leak Repair Spring Valley NV | 24/7 Rapid Dispatch (725) 313-0108",
    metaDescription: "Active water leak or gas emergency in Spring Valley, NV? Call (725) 313-0108 for 24/7 emergency dispatch. Licensed local contractors on call day and night.",
    primaryKeyword: "emergency leak repair Spring Valley",
    secondaryKeywords: [
      "24/7 leak detection Spring Valley NV",
      "emergency plumber Spring Valley 89103",
      "urgent water leak repair Las Vegas",
      "emergency gas leak shutoff Spring Valley"
    ],
    semanticEntities: [
      "Immediate main meter emergency shutoff",
      "Nevada State Contractors Board (NSCB) licensed response",
      "24/7 on-call mobile technician vans",
      "High-pressure pipe clamp and PEX crimp containment"
    ],
    h1: "24/7 Emergency Leak Repair & Rapid Dispatch in Spring Valley, NV",
    heroKicker: "Active Leaks • 24/7 Rapid Response Across Clark County",
    heroSubheadline: "Active water floods and hazardous gas leaks require instant emergency containment. When an urgent leak threatens your property, our dispatch line connects you with on-call licensed contractors in minutes.",
    directAnswer: "Emergency leak repair delivers rapid-response containment and permanent restoration for active, catastrophic water and gas ruptures. Calling our Spring Valley emergency dispatch desk at (725) 313-0108 immediately routes your situation to on-call mobile contractors equipped with diagnostic locators and replacement components for fast containment.",
    featuredImage: "/src/assets/images/hero_emergency_plumbing_1791566119640.jpg",
    imageAlt: "Emergency leak repair mobile dispatch van in Spring Valley Nevada",
    imageCaption: "Mobile service units carry pipe clamps, crimp fittings, and emergency valves for instant on-site containment.",
    sections: [
      {
        heading: "What to Do in a Water or Gas Emergency",
        subheading: "Immediate steps to protect life and property while awaiting arrival",
        paragraphs: [
          "The first few minutes of a severe plumbing rupture dictate whether you experience minor cleanup or tens of thousands of dollars in restoration costs. For water leaks, shut off your home's main water supply valve immediately (typically located in the garage, utility closet, or near the curb at the city meter box).",
          "For gas leaks, do not attempt to locate the leak yourself. Evacuate everyone outside immediately and call our emergency line from a safe distance."
        ],
        bulletPoints: [
          "Locate and shut off the main water valve clockwise to halt pressurized water flow",
          "Switch off circuit breakers to flooded areas if it is safe to access your panel",
          "For gas odors: leave the premises immediately, do not touch electrical switches, and call dispatch",
          "Keep your phone line open for the dispatched technician's incoming arrival call"
        ]
      }
    ],
    faqs: [
      {
        question: "How fast can an emergency leak technician arrive in Spring Valley?",
        answer: "Average emergency response arrival times in Spring Valley and immediate adjacent neighborhoods range from 30 to 60 minutes."
      },
      {
        question: "Is your dispatch desk open on weekends and holidays?",
        answer: "Yes. Our dispatch desk and on-call contractor network operate 24 hours a day, 7 days a week, 365 days a year."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Pinpoint hidden potable water leaks." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Immediate gas leak containment and testing." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Foundation leak diagnostics." }
    ],
    relatedLocations: [
      { name: "Spring Valley Center", slug: "spring-valley-center", context: "Central Spring Valley emergency dispatch." },
      { name: "The Lakes", slug: "the-lakes", context: "Rapid dispatch to waterfront communities." },
      { name: "Spanish Trail", slug: "spanish-trail", context: "Gated estate emergency access." }
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
    featuredImage: "/src/assets/images/pool_leak_detection_1791567711591.jpg",
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
    featuredImage: "/src/assets/images/pool_leak_detection_1791567711591.jpg",
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
    featuredImage: "/src/assets/images/pool_leak_detection_1791567711591.jpg",
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
    featuredImage: "/src/assets/images/pool_leak_detection_1791567711591.jpg",
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
    featuredImage: "/src/assets/images/pool_leak_detection_1791567711591.jpg",
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

  // 13. ABOUT PAGE
  "about": {
    slug: "about",
    urlPath: "/about/",
    type: "about",
    name: "About Spring Valley Leak Detection & Repair",
    navTitle: "About Us",
    metaTitle: "About Us | Spring Valley Leak Detection & Repair | (725) 313-0108",
    metaDescription: "Spring Valley Leak Detection & Repair provides 24/7 non-invasive diagnostics and emergency repair for water, gas, slab & pool leaks in Spring Valley, NV.",
    primaryKeyword: "Spring Valley leak detection service",
    secondaryKeywords: [
      "about Spring Valley Leak Detection",
      "leak detection specialists Las Vegas",
      "water gas slab pool leak repair",
      "6875 Groveview Ln Las Vegas"
    ],
    semanticEntities: [
      "Nevada State Contractors Board (NSCB) standards",
      "Non-invasive ultrasonic acoustic diagnostics",
      "FLIR thermal infrared moisture inspection",
      "Upfront itemized pricing and warranty"
    ],
    h1: "About Spring Valley Leak Detection & Repair",
    heroKicker: "Precision Non-Invasive Diagnostics • 6875 Groveview Ln, Las Vegas, NV",
    heroSubheadline: "Providing 24/7 emergency water, gas, slab, and swimming pool leak detection and repair across Spring Valley and Clark County.",
    directAnswer: "Spring Valley Leak Detection & Repair provides dedicated 24/7 non-invasive leak diagnostics for residential and commercial properties in Spring Valley and Clark County, NV. Operating from 6875 Groveview Ln, our technicians utilize electronic listening discs, thermal imaging cameras, and pool hydrophones to pinpoint leaks quickly and execute durable repairs with upfront, transparent pricing.",
    featuredImage: "/src/assets/images/pool_leak_detection_1791567711591.jpg",
    imageAlt: "Spring Valley Leak Detection technical team and diagnostics equipment",
    imageCaption: "Equipped with advanced acoustic and thermal diagnostic tools, our team serves Spring Valley 24/7.",
    sections: [
      {
        heading: "Our Expertise: Non-Invasive Leak Diagnostics",
        subheading: "Eliminating guesswork and preventing destructive property damage",
        paragraphs: [
          "Hidden water, gas, slab, and pool leaks can silently cause thousands of dollars in property damage. Traditional exploratory methods—such as breaking through concrete or ripping open drywall without pinpoint verification—often create more disruption than the leak itself.",
          "At Spring Valley Leak Detection & Repair, our specialists utilize state-of-the-art non-invasive acoustic listening equipment, thermal imaging, combustible gas detection, and hydrophones to isolate leak locations to within inches before any repair begins."
        ],
        bulletPoints: [
          "24/7 Rapid Emergency Response across Spring Valley, NV",
          "Precision non-invasive acoustic, thermal, and hydrophone leak detection",
          "Clear, upfront itemized estimates before any repair begins",
          "Comprehensive solutions for domestic water lines, natural gas, concrete slabs, and swimming pools"
        ]
      },
      {
        heading: "Our Commitment to Quality & Transparent Service",
        subheading: "Professional standards and customer satisfaction",
        paragraphs: [
          "We believe in honest communication, punctuality, and lasting repairs. From central Spring Valley to The Lakes, Spanish Trail, Summerlin South, and Rhodes Ranch, property owners trust us for fast response times and dependable workmanship.",
          "All work is performed to strict Nevada building codes and industry safety protocols, ensuring your water, gas, slab, and pool systems operate reliably for years to come."
        ]
      }
    ],
    faqs: [
      {
        question: "Do you provide upfront pricing before beginning leak repairs?",
        answer: "Yes. Our technicians conduct precision non-invasive diagnostics and provide clear, itemized quotes before any repair work commences, so there are never any surprise charges."
      },
      {
        question: "How can I verify a plumber's license in Nevada?",
        answer: "You can verify contractor licenses through the public database of the Nevada State Contractors Board at nscb.nv.gov."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Domestic supply line diagnostics." },
      { title: "Gas Leak Detection & Emergency Repair", slug: "gas-leak-detection", description: "Combustible gas leak testing." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool and spa leak diagnostics." }
    ],
    relatedLocations: [
      { name: "Spring Valley Center", slug: "spring-valley-center", context: "Central core area." },
      { name: "The Lakes", slug: "the-lakes", context: "Waterfront community." },
      { name: "Spanish Trail", slug: "spanish-trail", context: "Gated estate community." }
    ],
    schemaType: "AboutPage"
  },

  // 14. CONTACT PAGE
  "contact": {
    slug: "contact",
    urlPath: "/contact/",
    type: "contact",
    name: "Contact Spring Valley Leak Detection & Repair",
    navTitle: "Contact",
    metaTitle: "Contact Us 24/7 | Spring Valley Leak Detection & Repair (725) 313-0108",
    metaDescription: "Contact Spring Valley Leak Detection 24/7 at (725) 313-0108. Located at 6875 Groveview Ln, Las Vegas, NV 89103. Water, gas, slab & pool leak dispatch.",
    primaryKeyword: "contact Spring Valley leak detection",
    secondaryKeywords: [
      "Spring Valley leak detection phone number",
      "6875 Groveview Ln Las Vegas NV 89103",
      "call leak detection Spring Valley",
      "emergency leak repair phone Las Vegas"
    ],
    semanticEntities: [
      "Telephone dispatch: (725) 313-0108",
      "Physical address: 6875 Groveview Ln, Las Vegas, NV 89103",
      "Target service area: Spring Valley, Clark County, NV",
      "24/7 live intake coordination"
    ],
    h1: "Contact Spring Valley Leak Detection & Repair",
    heroKicker: "24/7 Emergency Line: (725) 313-0108 • 6875 Groveview Ln",
    heroSubheadline: "Have an active water leak, natural gas odor, sub-slab rupture, or leaking pool in Spring Valley? Call our dedicated dispatch desk immediately.",
    directAnswer: "For urgent water, gas, slab, and swimming pool leaks, direct phone contact provides the fastest response. Call (725) 313-0108 to speak with our 24/7 team for rapid technician dispatch to your Spring Valley property, or submit an online request for immediate service.",
    featuredImage: "/src/assets/images/pool_leak_detection_1791567711591.jpg",
    imageAlt: "Contact dispatch desk for Spring Valley leak detection and repair",
    imageCaption: "Live 24/7 phone dispatch connects you with on-call leak detection specialists across Spring Valley.",
    sections: [
      {
        heading: "Direct Phone Dispatch & Business Information",
        subheading: "Immediate telephone intake protocol",
        paragraphs: [
          "Our dispatch coordinators are available 24 hours a day, 7 days a week, including weekends and holidays. When you call, we record your address, the type of leak (water, gas, slab, or pool), and whether any immediate shutoff has occurred.",
          "Our central coordination office is located at 6875 Groveview Ln, Las Vegas, NV 89103, servicing Spring Valley and surrounding Clark County neighborhoods."
        ],
        bulletPoints: [
          "Direct 24/7 Phone Line: (725) 313-0108",
          "Business Address: 6875 Groveview Ln, Las Vegas, NV 89103",
          "Target Service Area: Spring Valley, The Lakes, Spanish Trail, Summerlin South & Rhodes Ranch",
          "Average Dispatch Response Time: 30 to 60 minutes"
        ]
      }
    ],
    faqs: [
      {
        question: "Is the phone line answered 24/7?",
        answer: "Yes. Our dispatch desk is staffed 24/7/365 to handle urgent water, gas, slab, and pool leak emergencies."
      },
      {
        question: "Can I schedule non-emergency pool or slab testing in advance?",
        answer: "Yes. You can schedule routine bucket-test evaluations, pool dye testing, or preventative water line inspections for any weekday or weekend appointment."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Indoor and domestic water leaks." },
      { title: "Gas Leak Detection & Repair", slug: "gas-leak-detection", description: "Natural gas line testing." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool and spa leak diagnostics." }
    ],
    relatedLocations: [
      { name: "Spring Valley Center", slug: "spring-valley-center", context: "Central core area." },
      { name: "The Lakes", slug: "the-lakes", context: "Waterfront community." },
      { name: "Spanish Trail", slug: "spanish-trail", context: "Gated estate community." }
    ],
    schemaType: "ContactPage",
    showMap: true
  },

  // 15. PRIVACY POLICY PAGE
  "privacy-policy": {
    slug: "privacy-policy",
    urlPath: "/privacy-policy/",
    type: "about",
    name: "Privacy Policy",
    navTitle: "Privacy Policy",
    metaTitle: "Privacy Policy | Spring Valley Leak Detection & Repair",
    metaDescription: "Privacy Policy for Spring Valley Leak Detection & Repair at 6875 Groveview Ln, Las Vegas, NV 89103. Learn how referral dispatch data is collected and protected.",
    primaryKeyword: "Spring Valley Leak Detection privacy policy",
    secondaryKeywords: [
      "leak detection referral privacy policy",
      "6875 Groveview Ln privacy Las Vegas",
      "dispatch phone communication policy"
    ],
    semanticEntities: [
      "Telephone Consumer Protection Act (TCPA)",
      "Consumer data protection protocols",
      "Third-party independent contractor referral data routing",
      "Nevada consumer privacy regulations"
    ],
    h1: "Privacy Policy for Spring Valley Leak Detection & Repair",
    heroKicker: "Effective Date: October 2026 • 6875 Groveview Ln, Las Vegas, NV",
    heroSubheadline: "This Privacy Policy describes how Spring Valley Leak Detection & Repair collects, uses, and safeguards information when you visit our website or contact our 24/7 dispatch desk.",
    directAnswer: "Spring Valley Leak Detection & Repair operates from 6875 Groveview Ln, Las Vegas, NV 89103 as a referral and emergency dispatch service. We collect only necessary contact and property information (name, telephone number, address, and leak description) to connect you directly with independent, licensed leak detection contractors in Clark County, Nevada.",
    sections: [
      {
        heading: "1. Information We Collect for Referral Dispatch",
        subheading: "Data gathered to coordinate emergency and diagnostic services",
        paragraphs: [
          "When you contact our dispatch desk by calling (725) 313-0108 or submitting an online dispatch intake form, we collect personal information you voluntarily provide, including your full name, telephone number, service address (in Spring Valley or greater Las Vegas), email address, and details regarding your water, gas, slab, or pool leak emergency.",
          "We do not collect sensitive financial data such as credit card numbers or banking details through our website. Any billing or payment transactions are handled directly between you and the independent contractor performing the on-site diagnostic or repair service."
        ]
      },
      {
        heading: "2. How We Use Your Information",
        subheading: "Purpose of data processing and contractor routing",
        paragraphs: [
          "The primary purpose of collecting your information is to facilitate the referral and dispatch process. Specifically, we use your details to: (a) determine the nature of your leak emergency; (b) identify an available, on-call independent contractor licensed by the Nevada State Contractors Board (NSCB) servicing your specific neighborhood; (c) transfer your contact details to that contractor so they can call you with arrival estimates and emergency shutoff instructions; and (d) follow up on customer satisfaction.",
          "We never sell, rent, or trade your personal information to third-party marketing brokers or unrelated commercial advertisers."
        ]
      },
      {
        heading: "3. Communications & Telephone Disclosure (TCPA)",
        subheading: "Consent to receive calls and text messages for dispatch coordination",
        paragraphs: [
          "By providing your telephone number through our contact forms or by placing an inbound call to (725) 313-0108, you expressly consent to receive telephone calls and transactional SMS/text messages from our dispatch coordinators and independent licensed plumbing and leak detection contractors regarding your service request.",
          "Standard carrier message and data rates may apply. You may opt out of future non-emergency text communications at any time by replying 'STOP' or by contacting our dispatch office."
        ]
      },
      {
        heading: "4. Third-Party Independent Contractors Disclosure",
        subheading: "Understanding the referral data transfer",
        paragraphs: [
          "Spring Valley Leak Detection & Repair operates as a marketing referral and dispatch coordinator. To fulfill your request for water, gas, slab, or pool leak detection and repair, your contact and property information will be shared with an independent third-party contractor.",
          "Once your information is provided to the independent contractor, their handling of your data is governed by their independent privacy practices and contractual standards."
        ]
      },
      {
        heading: "5. Cookies & Automated Website Analytics",
        subheading: "Standard web browsing technologies",
        paragraphs: [
          "Our website uses standard technical cookies and anonymous analytics to understand site performance, visitor navigation paths, and page responsiveness. These cookies do not collect personally identifiable information and can be disabled through your browser settings."
        ]
      },
      {
        heading: "6. Contact Information for Privacy Concerns",
        subheading: "How to reach our coordination office",
        paragraphs: [
          "If you have questions regarding this Privacy Policy or wish to request the deletion or correction of your contact records, please contact our office at: Spring Valley Leak Detection & Repair, 6875 Groveview Ln, Las Vegas, NV 89103, Phone: (725) 313-0108."
        ]
      }
    ],
    faqs: [
      {
        question: "Is my personal phone number sold to marketing lists?",
        answer: "No. Your phone number is strictly used to route your emergency leak request to an on-call independent contractor in Spring Valley and to communicate arrival ETAs."
      },
      {
        question: "How do I request deletion of my service intake record?",
        answer: "You can request deletion of your contact records by calling our coordination office at (725) 313-0108 or by writing to 6875 Groveview Ln, Las Vegas, NV 89103."
      }
    ],
    relatedServices: [
      { title: "Water Leak Detection & Repair", slug: "water-leak-detection", description: "Potable supply line leak diagnostics." },
      { title: "Slab Leak Detection & Repair", slug: "slab-leak-detection", description: "Concrete slab foundation diagnostics." },
      { title: "Swimming Pool Leak Detection", slug: "pool-leak-detection", description: "Pool shell and plumbing line testing." }
    ],
    relatedLocations: [
      { name: "Spring Valley Center", slug: "spring-valley-center", context: "Central core area." },
      { name: "The Lakes", slug: "the-lakes", context: "Waterfront community." }
    ],
    schemaType: "WebPage"
  }
};
