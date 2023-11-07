// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  // gradientColors:
  //     "#cccccc, #4484ce, #555555, #ff7f7f, #111111",

  // gradientColors:
  //     "#4484ce, #dddddd, " +
  //     "#666666, #ff7f7f, " +
  //     "#333333, #000000",

  gradientColors:
  "#4484ce, #4484ce, " +
  "#666666, #ff7f7f, " +
  "#333333, #000000",

  firstName: "Eoin",
  middleName: "",
  lastName: "Mc Allister",
  message: " Software Engineer | Data Processing | Machine Learning | Web Apps ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/eoin-james",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/eoin-mcallister-ml/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
    {
      image: "fa-medium",
      url: "https://medium.com/@Eoinmca_Projects",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  // imageLink: require(""),
  // imageSize: 375,
  message:
    "Dublin-based Software Engineer with a background in Computer Engineering and a Master's in Computer Science & AI. Currently, I'm crafting code at UrbanFox as a Software Engineer.",
  resume: "",
};

// PROJECTS SECTION
// Setting up projs lenght will automatically fetch your that number of recently updated projs, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projs, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "eoin-james", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      // img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      // img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 100 },
    { name: "SQL", value: 100 },
    { name: "Data Structures", value: 100 },
    { name: "C/C++", value: 100 },
    { name: "JavaScript", value: 100 },
    { name: "React", value: 100 },
    { name: "HTML/CSS", value: 100 },
    { name: "C#", value: 100 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 100 },
    { name: "Collaboration", value: 100 },
    { name: "Positivity", value: 100 },
    { name: "Adaptability", value: 100 },
    { name: "Problem Solving", value: 100 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 100 },
    { name: "Creativity", value: 100 },
  ],
};

const blog = {
  show: true,
  heading: "Medium Blogs",
  medium_api: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Eoinmca_Projects"

}

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Feel free to reach out to me on any of my social platforms or by email: ",
  email: "eoin@eoinmca.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Software / ML Engineer',
      companylogo: require('../assets/img/urbanfox.png'),
      date: 'December 2022 – Present',
    },
    {
      role: 'Deep Learning Hardware Design Engineer',
      companylogo: require('../assets/img/intel_small.png'),
      date: 'October 2021 – May 2022',
    },
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/airtel_small.png'),
      date: 'March 2019 – August 2019',
    },
    {
      role: 'M.Sc. CS & AI',
      companylogo: require('../assets/img/uni_gal_small.png'),
      date: 'September 2020 – September 2021',
    }
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, blog };
