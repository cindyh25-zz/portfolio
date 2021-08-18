import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './Project';
import LyftImg from '../images/Lyft.png';
import HubSpotImg from '../images/HubSpot.png';
import TelieImg from '../images/Telie.png';
import PearImg from '../images/Pear.png';
import { SectionHeader } from '../constants/styles';
import { telieLink } from '../constants/links';

const projects = [
  {
    title: 'Lyft',
    imgSrc: LyftImg,
    description:
      'I worked on getting more drivers on the road with the driver growth team to meet the post-covid (hopefully 🥴) demand. I created products to optimize organic traffic and onboard new drivers more efficiently.',
    isPrimaryCTA: false,
    ctaText: 'Contact me for details',
    role: 'Frontend engineer',
  },
  {
    title: 'HubSpot',
    imgSrc: HubSpotImg,
    description:
      "I built programmable automation tools to help growing businesses customize workflows so that they can market, sell, and operate how they want. I also started and didn't finish all of my team's book club books (oops!).",
    isPrimaryCTA: false,
    ctaText: 'Contact me for details',
    role: 'Frontend engineer',
  },
  {
    title: 'Telie',
    imgSrc: TelieImg,
    description:
      "I was the sole designer on a mission to make movie and tv show discovery a social and playful experience. This is my quarantine baby, and I've learned so much about building and shipping from scratch!",
    isPrimaryCTA: true,
    ctaHref: telieLink,
    ctaText: 'Check it out',
    role: 'Designer',
  },
  {
    title: 'Pear',
    imgSrc: PearImg,
    description:
      'I was a founding designer creating a community building app for Cornell students. We’ve worked through setbacks and a successful soft launch to bring Pear to life for all students this fall.',
    isPrimaryCTA: false,
    ctaText: 'Check it out in Fall 2021',
    role: 'Designer',
  },
];
const WorkPage = () => {
  return (
    <section id="work">
      <SectionHeader>Selected work</SectionHeader>
      {projects.map((projectProps) => (
        <Project {...projectProps} />
      ))}
    </section>
  );
};

export default WorkPage;
