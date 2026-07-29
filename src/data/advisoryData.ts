import { NewsletterInfo } from '../types';

export const ADVISORY_INFO = {
  name: "Sagar Tandon",
  businessName: "Sagar Tandon Advisory",
  businessId: "3575778-3",
  location: "Helsinki, Finland",
  ytjUrl: "https://tietopalvelu.ytj.fi/yritys/3575778-3",
  email: "sagar.tandon@proton.me",
  
  specializations: [
    "Impact Investing",
    "Investment Research",
    "Private Markets",
    "Accelerator Design",
    "Nordic Market Entry",
    "Conscious Finance"
  ],

  roles: [
    {
      category: "Board Member",
      entities: [
        { name: "Perfat Technologies", location: "Finland", url: "https://perfat.fi" },
        { name: "Swedish Algae Factory", location: "Sweden", url: "https://swedishalgaefactory.com" }
      ]
    },
    {
      category: "Honorary & Strategic Advisor",
      entities: [
        { name: "EIT Community New European Bauhaus", url: "https://www.eiturbanmobility.eu/eit-community-new-european-bauhaus/" },
        { name: "Atlan", note: "Strategic Informal Advisor", url: "https://atlan.space" }
      ]
    },
    {
      category: "Mentor",
      entities: [
        { name: "Viikkii Food Design Factory", url: "https://www.helsinki.fi/en/food-design-factory" },
        { name: "EIT Food Accelerator Network", url: "https://www.eitfood.eu/projects/eit-fan" }
      ]
    },
    {
      category: "Speaker & Juror",
      entities: [
        { name: "Slush (Side Events)", url: "https://slush.org" },
        { name: "Apelago Turku", url: "https://apelago.fi" },
        { name: "WePlanet", url: "https://www.weplanet.org" },
        { name: "EIT Community NEB", url: "https://www.eiturbanmobility.eu/eit-community-new-european-bauhaus/" }
      ]
    }
  ],

  researchInitiative: {
    name: "Upstream Institute",
    url: "https://upstreaminstitute.space-z.ai/",
    description: "Focused on the reimagination of capital stewardship at the intersection of philosophy, science, tech, and finance, integrating the works of David Bohm from the lens of Paavo Pylkkänen.",
    guidanceMentors: [
      { name: "Paavo Pylkkänen", role: "Theoretical Physicist & Philosopher of Mind", url: "https://en.wikipedia.org/wiki/Paavo_Pylkk%C3%A4nen" },
      { name: "Elina Pylkkänen", role: "Director General & Economist", url: "https://tem.fi/en/director-general-elina-pylkkanen" }
    ]
  }
};

export const NEWSLETTERS: NewsletterInfo[] = [
  {
    id: "idex",
    title: "Impact Design (+) Experiences (IDEX)",
    subtitle: "Conscious Capitalism & Regenerative Finance",
    description: "Essays exploring the confluence of Conscious Capitalism, regenerative capital structures, quantum philosophy, and systemic transformation.",
    topics: ["Conscious Capitalism", "Regenerative Finance", "Capital Stewardship", "Quantum Mindsets"],
    url: "https://idex.substack.com",
    icon: "layers"
  },
  {
    id: "first-followers",
    title: "First Followers",
    subtitle: "Impact Investing & Venture Capital",
    description: "Deep-dive research on impact investing, innovative finance models, private markets, venture capital dynamics, and Nordic ecosystem insights.",
    topics: ["Impact Investing", "Innovative Finance", "Private Markets", "Venture Capital"],
    url: "https://firstfollowers.substack.com",
    icon: "compass"
  }
];
