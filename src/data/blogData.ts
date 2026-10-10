export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Slab Leaks' | 'Pool Leaks' | 'Gas Leaks' | 'Water Leaks' | 'Prevention & Tips';
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  authorRole: string;
  featuredImage: string;
  tags: string[];
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string[];
      keyTakeaways?: string[];
    }[];
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'signs-of-slab-leak',
    slug: 'signs-of-slab-leak-in-las-vegas-homes',
    title: '5 Warning Signs of a Slab Leak in Spring Valley & Las Vegas Homes',
    category: 'Slab Leaks',
    date: 'October 8, 2026',
    readTime: '6 min read',
    excerpt: 'Detecting underground copper pipe ruptures beneath concrete foundations before extensive structural damage and mold occur.',
    author: 'Spring Valley Diagnostic Team',
    authorRole: 'Master Leak Specialists',
    featuredImage: '/src/assets/images/slab_leak_inspection_1791566136409.webp',
    tags: ['Slab Leak', 'Foundation', 'Las Vegas Plumbing', 'Caliche Soil'],
    content: {
      introduction: 'In Spring Valley and the Las Vegas Valley, most single-family residences are built directly on concrete slab-on-grade foundations. Pressurized hot and cold potable copper water lines are routed beneath the concrete slab before emerging at fixtures. When these lines develop leaks, the symptoms can remain hidden for weeks until severe damage occurs.',
      sections: [
        {
          heading: '1. Unexplained Warm or Hot Spots on Flooring',
          body: [
            'One of the most distinctive telltale symptoms of a domestic hot water line slab leak is an isolated warm area on tile, luxury vinyl plank, or carpeted flooring.',
            'Because hot water radiates upward through the concrete slab, walking barefoot over the floor will reveal an unmistakable localized hot spot. If a patch of your kitchen or bathroom floor feels unusually warm, a pressurized hot water pipe beneath the slab is almost certainly discharging heated water.'
          ],
          keyTakeaways: [
            'Warm floor spots usually indicate hot supply line ruptures',
            'Water heaters will frequently run constantly to maintain temperature'
          ]
        },
        {
          heading: '2. The Sound of Running Water When Fixtures Are Off',
          body: [
            'If you hear the faint sound of hissing, rushing, or dripping water while your house is completely quiet and all faucets, toilets, and irrigation valves are tightly shut, pressurized water is escaping somewhere in your system.',
            'Press your ear against floor tiles or baseboards in adjoining hallways. A continuous hissing sound is the acoustic frequency of water escaping a pressurized copper pinhole beneath concrete.'
          ]
        },
        {
          heading: '3. A Sudden Spike on Your Las Vegas Valley Water District (LVVWD) Bill',
          body: [
            'A pinhole copper rupture smaller than a pencil tip running 24 hours a day can waste between 3,000 and 15,000 gallons of water in a single billing cycle.',
            'If your monthly LVVWD utility bill increases significantly without changes in household occupancy or landscape irrigation cycles, a concealed sub-slab leak is the prime suspect.'
          ]
        },
        {
          heading: '4. Damp Baseboards, Discolored Grout, or Warped Floorboards',
          body: [
            'Capillary action pulls sub-slab moisture upward into drywall, wood baseboards, and flooring adhesive. Look for dark, discolored tile grout lines, buckled vinyl planks, peeling laminate, or swollen wood molding along perimeter walls.',
            'In severe cases, efflorescence—a white, powdery mineral deposit left behind as mineral-rich hard Las Vegas water evaporates—will appear on concrete and tile joints.'
          ]
        },
        {
          heading: '5. Low Domestic Water Pressure Throughout the House',
          body: [
            'When a significant line rupture occurs underneath the slab, hydraulic line pressure drops across downstream fixtures. You may notice sluggish shower spray or faucets taking twice as long to fill a basin.',
            'Professional non-invasive acoustic listening discs and ultrasonic sensors can isolate the exact location of the pipe rupture within inches without destructive exploratory jackhammering.'
          ]
        }
      ],
      conclusion: 'If you recognize any of these symptoms in your Spring Valley property, shut off your main water valve and call Spring Valley Leak Detection & Repair immediately at (725) 313-0108 for non-invasive acoustic localization and same-day repair.'
    }
  },
  {
    id: 'pool-bucket-test',
    slug: 'how-swimming-pool-bucket-test-works',
    title: 'The 24-Hour Bucket Test: How to Tell if Your Pool is Leaking or Evaporating',
    category: 'Pool Leaks',
    date: 'October 5, 2026',
    readTime: '5 min read',
    excerpt: 'Learn the definitive DIY calibration test to distinguish normal desert evaporation from underground pool plumbing ruptures.',
    author: 'Spring Valley Diagnostic Team',
    authorRole: 'Pool Hydraulics Specialist',
    featuredImage: '/src/assets/images/pool_leak_detection_1791567711591.webp',
    tags: ['Pool Leak Detection', 'Bucket Test', 'Evaporation', 'Spring Valley Pools'],
    content: {
      introduction: 'During Southern Nevada summers, intense dry desert winds and ambient temperatures exceeding 105°F cause rapid swimming pool evaporation. Homeowners often wonder: is my pool water drop normal evaporation, or do I have a crack in my pool plumbing or shell? The simple 24-Hour Bucket Test provides the answer.',
      sections: [
        {
          heading: 'Why Desert Evaporation Confuses Homeowners',
          body: [
            'Under normal Las Vegas weather conditions, an uncovered swimming pool loses between 1/4 inch and 1/2 inch of water per day due to sun exposure, humidity deficit, and wind currents.',
            'However, if your pool water level is dropping by more than 1/2 inch to 1 full inch in 24 hours, or if your automatic water fill valve is cycling continuously, you are likely losing thousands of gallons to a subterranean plumbing breach or structural shell fracture.'
          ]
        },
        {
          heading: 'Step-by-Step Instructions: Performing the Bucket Test',
          body: [
            'Step 1: Fill a standard 5-gallon plastic bucket with pool water up to approximately 2 to 3 inches from the top rim.',
            'Step 2: Place the bucket on the first or second step of your pool, ensuring at least half of the bucket is submerged in the pool water. This keeps water temperatures identical inside and outside the bucket.',
            'Step 3: Turn off the automatic pool fill valve completely so no municipal water enters the pool during the test.',
            'Step 4: Using waterproof electrical tape or a marker, mark the exact water level INSIDE the bucket. Then mark the exact pool water level on the OUTSIDE of the bucket.',
            'Step 5: Run your pool pump normally for 24 hours. After 24 hours, measure both lines with a ruler.'
          ],
          keyTakeaways: [
            'Equal water loss inside and outside indicates normal desert evaporation',
            'If the pool water line dropped significantly further than the bucket water line, a leak is present'
          ]
        },
        {
          heading: 'Pump Running vs. Pump Off: Isolating Suction vs. Return Leaks',
          body: [
            'If the bucket test proves a leak, repeat the test for 24 hours with the filtration pump turned OFF.',
            'If the pool loses more water while the pump is RUNNING, the leak is typically located on the pressurized return lines or cleaner pipes.',
            'If the pool loses more water while the pump is OFF, the leak is usually located on the suction line (skimmers or main drain) or within the pool shell itself.'
          ]
        }
      ],
      conclusion: 'If your bucket test confirms water loss exceeding evaporation, professional electronic hydrophone listening and dye injection can pinpoint underground cracked PVC lines or failing light niches without draining your pool. Call (725) 313-0108.'
    }
  },
  {
    id: 'gas-leak-safety-guide',
    slug: 'what-to-do-when-you-smell-gas',
    title: 'Natural Gas Leak Safety Guide: What to Do If You Smell Rotten Eggs',
    category: 'Gas Leaks',
    date: 'October 1, 2026',
    readTime: '4 min read',
    excerpt: 'Critical life-safety steps to take immediately when natural gas or propane odors are detected in your Spring Valley residence.',
    author: 'Spring Valley Diagnostic Team',
    authorRole: 'Certified Gas Piping Inspector',
    featuredImage: '/src/assets/images/gas_leak_detection_1791567732913.webp',
    tags: ['Gas Leak', 'Home Safety', 'Southwest Gas', 'Emergency Protocol'],
    content: {
      introduction: 'Natural gas is naturally colorless and odorless. For safety, utility suppliers infuse mercaptan—a harmless chemical additive that produces a distinct, pungent sulfur or rotten-egg odor—so leaks can be detected quickly before dangerous gas accumulation creates an explosion hazard.',
      sections: [
        {
          heading: 'Immediate Evacuation Protocol: Do NOT Hesitate',
          body: [
            'If you smell a strong rotten egg odor inside your home or hear a loud hissing sound near your furnace, water heater, kitchen range, or exterior meter, evacuate immediately.',
            'Alert all occupants and pets, leave doors open as you exit to ventilate, and move at least 150 feet away upwind from the building.'
          ],
          keyTakeaways: [
            'Do not flip any light switches or electrical appliances',
            'Do not use your mobile phone or landline inside the structure',
            'Do not open or close garage doors with electric openers',
            'Do not light matches, candles, or lighters'
          ]
        },
        {
          heading: 'Shutting Off the Main Gas Meter (If Safe)',
          body: [
            'If the gas meter is located outdoors and you can safely access it without entering an odor-filled room, use an adjustable crescent wrench to turn the gas valve perpendicular (90 degrees) to the pipe. This shuts off the flow of natural gas to the entire property.',
            'Once shut off, never attempt to turn the gas back on yourself. Gas lines must undergo pressure decay testing by a certified technician before service restoration.'
          ]
        },
        {
          heading: 'How Technicians Pinpoint and Repair Combustible Gas Leaks',
          body: [
            'Dispatched technicians utilize sensitive electronic combustible gas sniffers calibrated in parts per million (PPM), bubble leak detection solutions, and digital manometer pressure gauges.',
            'Once the compromised pipe joint, rusted black iron nipple, or damaged appliance flex line is identified, technicians perform code-compliant repairs and full pressure tests before safely restoring gas flow.'
          ]
        }
      ],
      conclusion: 'For gas leak emergencies, evacuate immediately and call 911 or Southwest Gas from outside, then call our 24/7 emergency line at (725) 313-0108 for code-compliant gas line testing and repair.'
    }
  },
  {
    id: 'caliche-soil-pipe-damage',
    slug: 'desert-caliche-soil-pipe-damage',
    title: 'Why Clark County Caliche Soil & Hard Water Accelerate Pipe Deterioration',
    category: 'Water Leaks',
    date: 'September 26, 2026',
    readTime: '6 min read',
    excerpt: 'Understanding the unique geology of Spring Valley and how dense caliche layers cause subterranean plumbing failures.',
    author: 'Spring Valley Diagnostic Team',
    authorRole: 'Geological Plumbing Consultant',
    featuredImage: '/src/assets/images/drain_hydro_jetting_1791566153107.webp',
    tags: ['Caliche Soil', 'Clark County', 'Hard Water', 'Pipe Corrosion'],
    content: {
      introduction: 'Homeowners in Spring Valley and the Las Vegas Valley experience pipe leaks at rates noticeably higher than national averages. The primary culprit is not defective plumbing—it is the brutal combination of dense subterranean caliche rock, alkaline desert soils, and high mineral content in Lake Mead tap water.',
      sections: [
        {
          heading: 'What is Caliche and How Does it Crush Underground Pipes?',
          body: [
            'Caliche is a sedimentary rock layer formed when calcium carbonate cements desert gravel, sand, and clay into an impenetrable rock matrix as hard as concrete.',
            'When single-family homes were constructed across Spring Valley in the 1980s, 1990s, and 2000s, copper water supply lines were laid in shallow foundation trenches directly against sharp caliche shelves.',
            'As water flows through pipes and thermal expansion causes the metal to expand and contract, the copper repeatedly rubs against immovable caliche stone until friction wears away the pipe wall, creating a pinpoint rupture.'
          ]
        },
        {
          heading: 'The Role of Desert Hard Water & Galvanic Soil Corrosion',
          body: [
            'Municipal water in Clark County contains high concentrations of dissolved calcium and magnesium (typically 16 to 22 grains per gallon, categorized as very hard).',
            'Over decades, mineral scaling combined with chemical velocity erosion inside hot water copper pipes thins the pipe wall from the inside, while alkaline exterior soils attack the exterior. This twin-front degradation leads to sudden pinhole failures.'
          ],
          keyTakeaways: [
            'Hot water recirculating loops are especially vulnerable to friction thinning',
            'Hard water accelerates mineral build-up and localized galvanic pitting'
          ]
        },
        {
          heading: 'Modern Solutions: Non-Invasive Reroutes vs. Direct Repairs',
          body: [
            'Rather than jackhammering through structural concrete slabs to patch a weak copper line that may leak again months later, modern leak technicians frequently recommend an overhead PEX reroute.',
            'By threading durable, corrosion-proof PEX tubing through ceiling and attic cavities, technicians bypass the compromised subterranean pipe entirely, providing a permanent solution that caliche rock can never damage again.'
          ]
        }
      ],
      conclusion: 'If your home is over 15 years old and you suspect an underground line leak, call Spring Valley Leak Detection & Repair at (725) 313-0108 to diagnose your system and discuss durable PEX reroute options.'
    }
  },
  {
    id: 'reading-water-meter-leaks',
    slug: 'how-to-read-water-meter-for-hidden-leaks',
    title: 'How to Read Your Las Vegas Water Meter to Check for Hidden Leaks',
    category: 'Prevention & Tips',
    date: 'September 20, 2026',
    readTime: '4 min read',
    excerpt: 'Use your front yard water meter box to test your entire home plumbing system for hidden leaks in under 15 minutes.',
    author: 'Spring Valley Diagnostic Team',
    authorRole: 'Water Conservation Specialist',
    featuredImage: '/src/assets/images/hero_emergency_plumbing_1791566119640.webp',
    tags: ['Water Meter', 'LVVWD', 'Leak Prevention', 'Water Conservation'],
    content: {
      introduction: 'Your municipal water meter is an incredibly precise diagnostic tool. Because every drop of pressurized water entering your property passes through this meter, you can verify whether water is silently leaking anywhere inside your walls, under your slab, or across your yard in just a few minutes.',
      sections: [
        {
          heading: 'Locating Your Meter Box',
          body: [
            'In Spring Valley, your water meter is located inside a concrete or plastic ground box near the sidewalk or curb in your front yard.',
            'Use a screwdriver or meter key to carefully lift the lid (watch for spiders or debris). Wipe away any dust on the glass meter face.'
          ]
        },
        {
          heading: 'The 15-Minute Zero-Consumption Test',
          body: [
            'Step 1: Ensure absolutely no water is being used inside or outside your property. Turn off all faucets, washing machines, dishwashers, and pool autofills.',
            'Step 2: Look at the meter face. Modern digital meters have a small triangular or star-shaped low-flow indicator (or a digital dripping faucet icon). If this indicator is spinning or flashing even slightly, water is moving through the meter.',
            'Step 3: For older mechanical dials, write down the exact reading numbers, wait 15 to 20 minutes without using any water, and recheck. If the numbers increased, you have a leak.'
          ],
          keyTakeaways: [
            'A spinning low-flow indicator with all faucets off proves an active leak',
            'Shutting off your main house shutoff valve isolates whether the leak is inside or in the yard supply line'
          ]
        },
        {
          heading: 'Isolating the Yard Main vs. Interior Plumbing',
          body: [
            'To find out if the leak is between the meter and the house (the main yard line) or inside the home: turn off the main house water shutoff valve (usually located in the garage or near the front hose bib).',
            'Check the meter again. If the indicator STOPPED spinning, the leak is INSIDE the house (slab leak, toilet flapper, pipe pinhole).',
            'If the indicator is STILL spinning with the house valve closed, the leak is located UNDERGROUND in your yard between the city meter and your home.'
          ]
        }
      ],
      conclusion: 'Whether your leak is buried in your front yard or hidden beneath your slab foundation, our non-invasive acoustic locators can find it quickly. Call (725) 313-0108 for emergency diagnostics.'
    }
  }
];
