export interface CrewData {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const crewData: CrewData[] = [
  {
    name: 'Kathryn Vinclaire',
    role: 'Producer and Presenter',
    image: '/img/KathrynVinclairePortrait.jpg',
    quote: 'Kathryn Vinclaire’s first work in the film industry was as a camera operator, working on features, short dramas, music videos and commercials, with work being shown internationally and at the BFI’s LGBTQ+ Flare film festival. Her most recent work is behind the microphone, as a voice over artist, with clients including Switzerland Tourism, Heathrow Airport and Paco Rabanne. This documentary concept originated from her passion for aviation, and that giddy, gleeful feeling she gets when piloting an aircraft.',
  },
  {
    name: 'Anthony Shaw',
    role: 'Camera Operator',
    image: '/img/AntShaw.jpg',
    quote: 'Anthony Shaw has been working as a videographer/photographer for the past five years. His variety of work has ranged from music productions and corporate videos to documentaries. He has worked as a camera operator for the BBC, and has shot productions at music festivals including Reading & Leeds Festival and Bestival.',
  },
  {
    name: 'Luke Drake',
    role: 'Camera Operator and Editor',
    image: '/img/LukeDrake.jpeg',
    quote: 'Luke has been working as a videographer and editor in the corporate sector for the past 6 years, with clients in the automotive, finance and software industries just to name a few. Versatility and attention to detail are key strengths he’ll bring to the team.',
  },
];
