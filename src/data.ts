import { ServiceItem, GalleryItem, ReviewItem, OpeningHour } from "./types";

export const BUSINESS_INFO = {
  name: "West Midlands Handyman",
  owner: "Phillip",
  phone: "07432056767",
  email: "midlands_handyman@hotmail.com",
  whatsappUrl: "https://wa.me/447432056767",
  tagline: "No Job Too Small",
  location: "West Midlands, UK",
  serviceAreas: [
    "Birmingham",
    "Coventry",
    "Wolverhampton",
    "Solihull",
    "Sutton Coldfield",
    "Dudley",
    "Sandwell",
    "Walsall",
    "West Bromwich",
    "Stourbridge",
    "Halesowen",
    "Shirley"
  ]
};

export const SERVICES: ServiceItem[] = [
  // Carpentry & Flat Pack
  {
    id: "flat-pack",
    name: "Flat Pack Furniture Assembly",
    category: "carpentry-assembly",
    description: "Expert assembly of flat pack furniture from IKEA, Argos, Wayfair, etc. (wardrobes, desks, beds, dining tables, storage units). Done quickly & correctly.",
    popular: true
  },
  {
    id: "door-hanging",
    name: "Door Hanging & Trimming",
    category: "carpentry-assembly",
    description: "Re-hanging existing doors, fitting new hinges, door trimming after new carpets are laid, and adjusting doors that sticky, squeak or won't latch properly.",
    popular: true
  },
  {
    id: "shelving-mounting",
    name: "Shelving, Mirror & Art Hanging",
    category: "carpentry-assembly",
    description: "Secure wall mounting of heavy shelves, designer mirrors, picture frames, curtain poles, and blinds on any wall type (solid brick or plasterboard)."
  },
  {
    id: "cabinet-repair",
    name: "Cabinet & Fitting Repairs",
    category: "carpentry-assembly",
    description: "Fixing loose cupboard hinges, broken drawer runners, replacing kitchen handles, and reinforcing worn cabinets and bedroom furniture."
  },

  // Repairs & Decorating (Interior Maintenance)
  {
    id: "patch-plaster",
    name: "Patch Plastering & Repairs",
    category: "repairs-decorating",
    description: "Professional repair of cracked plaster, water-damaged ceilings, holes in walls, and preparation of surfaces for pristine decoration.",
    popular: true
  },
  {
    id: "wall-painting",
    name: "Painting & Decorating",
    category: "repairs-decorating",
    description: "Small painting jobs, single walls or full rooms, woodwork painting (skirting boards, door frames), fence stains, and touch-up decorations.",
    popular: true
  },
  {
    id: "drywall-repair",
    name: "Drywall Holes & Cracks",
    category: "repairs-decorating",
    description: "Mending accidental holes, deep dings from moving furniture, stress cracks, and structural drywall sheet replacements."
  },
  {
    id: "skirting-boards",
    name: "Skirting Boards & Architraves",
    category: "repairs-decorating",
    description: "Replacing damaged skirting board sections, installing new decorative architraves and trim to complete the look of your newly styled rooms."
  },
  {
    id: "tv-mounting",
    name: "TV Wall Mounting & Cord Tidy",
    category: "repairs-decorating",
    description: "Safe, solid mount installation of any size television, leveling, and clean routing of power and HDMI cables for a premium look."
  },

  // Plumbing
  {
    id: "toilet-seats",
    name: "Toilet Repair & Seat Fits",
    category: "plumbing-heating",
    description: "Installing robust toilet seats, resolving minor flush/siphon mechanism issues, and stopping silent leaks or running water in the pan."
  },
  {
    id: "leaking-taps",
    name: "Tap Repair & Replacements",
    category: "plumbing-heating",
    description: "Replacing worn washers to stop drips, installing completely new modern mixer taps in kitchens, hand basins, or garden exterior taps.",
    popular: true
  },
  {
    id: "re-silicone",
    name: "Bath & Shower Re-Siliconing",
    category: "plumbing-heating",
    description: "Removing mouldy, leaky silicone sealant from baths, showers, and sinks, and replacing it with pristine anti-mould waterproof modern sealant.",
    popular: true
  },
  {
    id: "radiator-bleed",
    name: "Radiator Bleeding & Repairs",
    category: "plumbing-heating",
    description: "Releasing trapped air in cold radiators, replacing faulty radiator valves (TRVs), and flushing small debris to improve winter heating efficiency."
  },
  {
    id: "appliance-install",
    name: "Washing Machine & Dishwasher Install",
    category: "plumbing-heating",
    description: "Proper connections to water feeds, drain hoses, and leveling alignment for new washing machines, washer-dryers, and built-in dishwashers."
  },

  // Outdoor
  {
    id: "fencing-repair",
    name: "Fencing Repairs & Installs",
    category: "outdoor-garden",
    description: "Replacing rotted fence posts with concrete spurs, renewing storm-damaged lap panels, repairing garden gates, and storm reinforcement.",
    popular: true
  },
  {
    id: "garden-maintenance",
    name: "Garden Cleanup & Mowing",
    category: "outdoor-garden",
    description: "Lawn mowing, hedge trimming, weed clearance, seasonal garden clean-ups, fence painting, and overall garden space tidy-up.",
    popular: true
  },
  {
    id: "jet-washing",
    name: "Patio & Driveway Jet Washing",
    category: "outdoor-garden",
    description: "Heavy-duty pressure washing to blast away black spot, weeds, moss, and slippery grime from stone patios, concrete driveways, and pathways.",
    popular: true
  },
  {
    id: "gutter-clearance",
    name: "Gutter Cleaning & Repairs",
    category: "outdoor-garden",
    description: "Removing leaves and silt blockages that cause dampness, sealing leaks at gutter brackets/joins, and replacing broken bracket sections."
  },
  {
    id: "slabbing-patio",
    name: "Slabbing & Small Paving",
    category: "outdoor-garden",
    description: "Laying individual paving slabs, path adjustments, minor pointing/mortar joint repairs, and building small garden steps."
  },

  // Flooring & Tiling
  {
    id: "laminate-flooring",
    name: "Laminate & Vinyl Flooring",
    category: "flooring-tiling",
    description: "Expert fitting of laminate boards, luxury vinyl tiles (LVT), or underlay. Includes door reductions and transitions for a professional finish."
  },
  {
    id: "splashback-tiling",
    name: "Kitchen & Bath Tiling",
    category: "flooring-tiling",
    description: "Small tiling projects including kitchen splashbacks, basin tiling, replacing broken or cracked tiles, and applying clean grout finishes."
  },
  {
    id: "re-grouting",
    name: "Re-Grouting & Tile Refresh",
    category: "flooring-tiling",
    description: "Scraping away discoloured wall or floor grout and reapplying premium fresh tile grout to return bathrooms & kitchens to a brand new feel."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Door Hanging & Aligning",
    category: "Carpentry",
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop", // plain door
    afterImg: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&auto=format&fit=crop", // pristine interior door setup
    description: "Trimmed and hung five modern internal doors to fit over heavy, plush new carpets."
  },
  {
    id: "g2",
    title: "Patio Restoration",
    category: "Jet Washing",
    beforeImg: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop", // concrete / rough ground
    afterImg: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=600&auto=format&fit=crop", // beautiful polished flagstone path
    description: "Jet-washing blasted years of black lichen, moss, and grime off a family garden patio."
  },
  {
    id: "g3",
    title: "Shower Re-seal & Clean",
    category: "Plumbing",
    beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop", // messy bathroom tiles
    afterImg: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop", // clean tiles/shower
    description: "Stripped away deteriorated dark silicone sealant and replaced with antimicrobial kitchen/bath silicone."
  },
  {
    id: "g4",
    title: "Storm Fence Replacement",
    category: "Fencing",
    beforeImg: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=600&auto=format&fit=crop", // messy outdoor wood
    afterImg: "https://images.unsplash.com/photo-1510563800743-aed236490d08?q=80&w=600&auto=format&fit=crop", // solid beautiful wooden garden fence
    description: "Secure installation of three heavy-duty timber fencing panels reinforced with concrete spurs."
  },
  {
    id: "g5",
    title: "Flat Pack Master Wardrobe",
    category: "Assembly",
    beforeImg: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600&auto=format&fit=crop", // chaotic furniture parts
    afterImg: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop", // perfect elegant structured wardrobes
    description: "Assembly of large sliding door wardrobe with internal shelving, drawers, and soft-close mechanisms."
  },
  {
    id: "g6",
    title: "Drywall & Plaster Repair",
    category: "Plastering",
    beforeImg: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop", // renovation scene
    afterImg: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop", // smooth white living room wall
    description: "Repaired door handle dent on drywall, finished with smooth skim plaster coat and white satin matching finish."
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    author: "Nicola H.",
    location: "Solihull",
    rating: 5,
    text: "Absolutely fantastic job! Phillip arrived right on time to re-hang three interior doors that wouldn't close after we had new carpets fitted. He was friendly, clean, and did the job perfectly in no time. No mess left behind either. Highly recommend!",
    service: "Door hanging & trimming",
    date: "June 2026"
  },
  {
    id: "r2",
    author: "Mark S.",
    location: "Sutton Coldfield",
    rating: 5,
    text: "Phillip assembled a complex corner wardrobe and a double bed that was absolute chaos in flat pack boxes. He had his own tools, worked tirelessly, and assembled them perfectly. Will definitely use his handyman service again.",
    service: "Flat Pack Furniture Assembly",
    date: "May 2026"
  },
  {
    id: "r3",
    author: "Sarah & David G.",
    location: "Halesowen",
    rating: 5,
    text: "We had storm damage on two garden fence panels. Phillip came out for a quote, gave a very fair price, and had it fully repaired with heavy-duty posts by the next afternoon. Extremely reliable services in the West Midlands.",
    service: "Fencing Repairs",
    date: "April 2026"
  },
  {
    id: "r4",
    author: "Gurcharan S.",
    location: "Wolverhampton",
    rating: 5,
    text: "Phillip resealed our leaky bathroom shower tray and swapped our faulty kitchen mixture tap. He takes great pride in his work, very tidy, and the price was exactly what he quoted. Trusted craftsman.",
    service: "Plumbing / Tap Repair & Re-seal",
    date: "March 2026"
  }
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: "Monday", hours: "08:00 - 18:00", status: "open" },
  { day: "Tuesday", hours: "08:00 - 18:00", status: "open" },
  { day: "Wednesday", hours: "08:00 - 18:00", status: "open" },
  { day: "Thursday", hours: "08:00 - 18:00", status: "open" },
  { day: "Friday", hours: "08:00 - 18:00", status: "open" },
  { day: "Saturday", hours: "09:00 - 16:00", status: "open" },
  { day: "Sunday", hours: "By Appointment / Emergencies Only", status: "limited" }
];
