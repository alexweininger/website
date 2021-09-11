import MicrosoftLogo from "assets/images/logos/Microsoft.png";
import UPLogo from "assets/images/logos/up.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import ruby from "assets/images/skills/ruby.png";
import nestjs from "assets/images/skills/nestjs.svg";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import postgres from "assets/images/skills/postgresql.png";
import redis from "assets/images/skills/redis.png";
import mysql from "assets/images/skills/mysql.png";
import heroku from "assets/images/skills/heroku.png";
import docean from "assets/images/skills/digital-ocean.png";
import aws from "assets/images/skills/aws.png";
import nginx from "assets/images/skills/nginx.png";
import ONULogo from "assets/images/logos/onu.svg";

export const companies = [
  {
    title: "Microsoft",
    alt: "PS image",
    role: "Software Engineer",
    skills: ["nodejs", "typescript", "azure", "vscode", "azure"],
    period: "2021 - Present",
    logo: MicrosoftLogo
  },
  {
    title: "Microsoft",
    alt: "PS image",
    role: "Software Engineer Intern",
    skills: ["nodejs", "typescript", "azure", "vscode", "azure"],
    period: "May 2020 - July 2020",
    logo: MicrosoftLogo
  },
  {
    title: "Microsoft",
    alt: "PS image",
    role: "Software Engineer Intern",
    skills: ["C#", ".NET", "Visual Studio", "Azure"],
    period: "May 2019 - July 2019",
    logo: MicrosoftLogo
  },
  {
    title: "University of Portland",
    alt: "University of Portland logo",
    role: "Student Web Developer",
    skills: ["javascript", "java"],
    period: "2017 - 2021",
    logo: UPLogo
  }
];

export const institutes = [
  {
    short_title: "University of Portland",
    title: "University of Portland",
    alt: "University of Portland logo",
    role: "Bachelor's Degree in Computer Science",
    skills: ["project management", "web development", "data structures"],
    period: "2017 - 2021",
    startingYear: "2017",
    logo: UPLogo,
    awards: [
    ]
  },
  {
    short_title: "Ohio Northern University",
    title: "Ohio Northern University",
    alt: "college image",
    role: "Computer Engineering",
    skills: ["computer engineering", "computer science"],
    period: "2017 - 2018",
    startingYear: "2017",
    logo: ONULogo
  }
];

export const skills = [
  {
    name: "NextJS",
    description: "Server-side web framework",
    link: "https://nestjs.com/",
    type: "development",
    image: nestjs
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "Ruby",
    description: "Web development, scrapping",
    link: "https://www.ruby-lang.org/en/",
    type: "development",
    image: ruby
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "JavaScript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "TypeScript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "HTML5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "CSS3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: redis
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws
  },
  {
    name: "Digital Ocean",
    description: "Devops",
    link: "https://www.digitalocean.com/",
    type: "devops",
    image: docean
  },
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginx
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];
