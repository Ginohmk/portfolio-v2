// Certificate

import MicroverseFullStack from '../../assets/images/fullstack_microverse.png';
import MicroverseJavascript from '../../assets/images/javascript_microverse.png';
import AlxFullstack from '../../assets/images/fullstack_alx.png';
import Oracle from '../../assets/images/oracle.jpg';

export const ResumeEducation: {
  id: number;
  eduName: string;
  year: string;
  course: string;
  grade?: string;
}[] = [
  {
    id: 1,
    eduName: 'MICROVERSE LOS ANGELES (REMOTE).',
    year: '2006 - 2010',
    course: 'FULL STACK WEB DEVELOPER',
  },
  {
    id: 2,
    eduName: 'ALX (REMOTE).',
    year: '2006 - 2010',
    course: 'FULL STACK WEB DEVELOPER',
  },
  {
    id: 3,
    eduName: 'AUCHI POLYTECHNIC, EDO STATE, NIGERIA.',
    year: '2006 - 2010',
    course: 'COMPUTER SCIENCE (HIGHER NATIONAL DIPLOMA)',
    grade: 'DISTINCTION (3.70/4.0)',
  },
  {
    id: 4,
    eduName: 'IDAH POLYTECHNIC, KOGI STATE, NIGERIA.',
    year: '2006 - 2010',
    course: 'COMPUTER SCIENCE (NATIONAL DIPLOMA)',
    grade: 'DISTINCTION (3.60/4.0)',
  },
];

export const ResumeExperience: {
  id: number;
  companyName: string;
  year: string;
  position: string;
}[] = [
  {
    id: 1,
    companyName: 'LECTIE',
    year: '2006 - Present',
    position: 'FRONTEND WEB DEVELOPER',
  },
  {
    id: 2,
    companyName: 'HNG (REMOTE INTERSHIP)',
    year: '2006 - 2010',
    position: 'FRONTEND WEB DEVELOPER',
  },
  {
    id: 3,
    companyName: 'MICROVERSE (REMOTE)',
    year: '2006 - 2010',
    position: 'CODE REVIEWER',
  },
];
export const Certificate: {
  id: number;
  image: string;
}[] = [
  {
    id: 1,

    image: `${MicroverseFullStack}`,
  },
  {
    id: 2,

    image: `${MicroverseJavascript}`,
  },
  {
    id: 3,

    image: `${AlxFullstack}`,
  },
  {
    id: 4,

    image: `${Oracle}`,
  },
];
