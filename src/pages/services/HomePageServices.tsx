// Skill Import
import reactSkill from '../../assets/images/reactSkill.svg';
import jsSkill from '../../assets/images/jsSkill.svg';
import reduxSkill from '../../assets/images/reduxSkill.svg';
import jestSkill from '../../assets/images/jestSkill.svg';
import html5Skill from '../../assets/images/html5Skill.svg';
import bootstrapSkill from '../../assets/images/bootstrapSkill.svg';
import css3Skill from '../../assets/images/css3Skill.svg';
import gitSkill from '../../assets/images/gitSkill.svg';
import photoshopSkill from '../../assets/images/photoshopSkill.svg';
import githubSkill from '../../assets/images/githubSkill.svg';
import postgresqlSkill from '../../assets/images/postgresqlSkill.svg';

// Hobby Import
import { FiMusic } from 'react-icons/fi';
import { MdGamepad } from 'react-icons/md';
import { IoFastFood } from 'react-icons/io5';

// Testimony Import
//-- Images

import profile from '../../assets/images/test_image.jpg';
import { FaBehanceSquare } from 'react-icons/fa'; //Behance icon

// Hobbie Data
export const hobbies: {
  id: number;
  hobby: string;
  content: string;
  icon: React.ReactElement;
}[] = [
  {
    id: 1,
    hobby: 'Music',
    content: 'I Love listening to slow music instrumental like deep codify.',
    icon: <FiMusic />,
  },
  {
    id: 2,
    hobby: 'Cooking',
    content: 'Cooking is like my second nature, i can never go wrong with it.',
    icon: <IoFastFood />,
  },
  {
    id: 3,
    hobby: 'Games',
    content: 'I love playing indoor games like monopoly with friends.',
    icon: <MdGamepad />,
  },
];

// Skills Data
export const skills: {
  id: number;
  skill: string;
  image: string;
}[] = [
  {
    id: 1,
    skill: 'React',
    image: `${reactSkill}`,
  },
  {
    id: 2,
    skill: 'javascript',
    image: `${jsSkill}`,
  },
  {
    id: 3,
    skill: 'Redux',
    image: `${reduxSkill}`,
  },
  {
    id: 4,
    skill: 'Jest',
    image: `${jestSkill}`,
  },
  {
    id: 5,
    skill: 'HTML',
    image: `${html5Skill}`,
  },
  {
    id: 6,
    skill: 'bootstrap',
    image: `${bootstrapSkill}`,
  },
  {
    id: 7,
    skill: 'Git',
    image: `${gitSkill}`,
  },
  {
    id: 8,
    skill: 'github',
    image: `${githubSkill}`,
  },
  {
    id: 9,
    skill: 'photoshop',
    image: `${photoshopSkill}`,
  },
  {
    id: 10,
    skill: 'css3',
    image: `${css3Skill}`,
  },
  {
    id: 11,
    skill: 'postgresql',
    image: `${postgresqlSkill}`,
  },
];

// Testimony Data

export const testimonyData: {
  id: number;
  name: string;
  image: string;
  icon: React.ReactElement;
  testify: string;
  link: string;
  profession: string;
}[] = [
  {
    id: 1,
    name: 'Jane Frankly',
    image: `${profile}`,
    profession: 'Designer',
    icon: <FaBehanceSquare />,
    testify:
      'Mike is a dedicated colleague, a team player and , with the zeal to see the work through.',
    link: 'https://github.com/Ginohmk',
  },
  {
    id: 2,
    name: 'Bob Rosy',
    image: `${profile}`,
    profession: 'Designer',
    icon: <FaBehanceSquare />,
    testify:
      'Mike is a dedicated colleague, a team player and , with the zeal to see the work through.',
    link: 'https://github.com/Ginohmk',
  },
  {
    id: 3,
    name: 'Samson JB',
    image: `${profile}`,
    profession: 'Designer',
    icon: <FaBehanceSquare />,
    testify:
      'Mike is a dedicated colleague, a team player and , with the zeal to see the work through.',
    link: 'https://',
  },
  {
    id: 4,
    name: 'Linko Juka',
    image: `${profile}`,
    profession: 'Designer',
    icon: <FaBehanceSquare />,
    testify:
      'Mike is a dedicated colleague, a team player and , with the zeal to see the work through.',
    link: 'https://github.com/Ginohmk',
  },
];