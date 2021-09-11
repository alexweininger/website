import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Alex Weininger. All Rights Reserved.`,
  author: {
    name: "Alex Weininger",
    accounts: [
      {
        url: "https://github.com/alexweininger",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/alexweininger",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/alexweininger",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/alexweininger",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:alex.weininger@live.com",
        label: "Email me",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
