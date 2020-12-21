import resumePdf from './McClatchy_Mark_Resume.pdf'

export default {
  "main": {
    "name":"Mark McClatchy",
    "description1": "Full-Stack Software Engineer",
    "description2": "JavaScript | React | Redux | Node.js | Python | SQL",
    "description3": "",
    "description4": "I have an unending love of learning",
    "image":"profilepic.png",
    "bio1": `Computers have always been a part of my life. I started building them when I was 10 years old and my fascination only grew from there. In high school, I sought out engineering competitions and either started a club to pursue them or worked on my own. I also taught myself AutoCAD during study halls and other spare moments that I could find. As a young adult, I loved working in IT due to the problem solving that I was challenged by on a regular basis.`,
    
    "bio2": `My trajectory shifted to a more inward journey where I studied psychology, massage therapy, and eventually Five Element Acupuncture. My focus was on self-awareness and emotional intelligence, working to bring myself and others to a life with fewer entanglements and an ease of being. It was here that I also became passionate about understanding what true leadership is and how that differs from authority.`,
    
    "bio3": `Eventually I realized that as much as I love Acupuncture, I am at my best in a team environment and after some time as a Customer Service Manager, I put together a list of qualities that I shine in and worked to find a career that checked them all off. That is when I discovered my absolute love of software engineering. I signed up to attend App Academy and I could not have made a better choice to empower me towards the pursuit of this passion in which I am truly dedicated.`,
    
    "specialtiesLabel": `Non-technical Specialties:`,
    
    "specialties": [
      `Working in team environments`,
      `Listening`,
      `Being able to articulate challenging topics`,
      `Emotional Intelligence `,
    ],
    "contactmessage":"Here is where you should write your message to readers to have them get in contact with you.",
    "email": "markmcclatchy@gmail.com",
    "phone": "",
    "github":"https://github.com/mmcclatchy",
    "project":"https://github.com/nordicgiant2/react-nice-resume",
    "address":{
      "street":"",
      "city":"Asheville",
      "state":"NC",
      "zip": "28805"
    },
    "website": "http://www.timbakerdev.com",
    "resumedownload": resumePdf,
    "social":[
      // {
      //   "name":"facebook",
      //   "url":"https://github.com/nordicgiant2/react-nice-resume",
      //   "className":"fa fa-facebook"
      // },
      // {
      //   "name":"twitter",
      //   "url":"http://twitter.com",
      //   "className":"fa fa-twitter"
      // },
      {
        "name":"linkedin",
        "url":"https://www.linkedin.com/in/mark-mcclatchy-155367bb/",
        "className":"fa fa-linkedin"
      },
      // {
      //   "name":"instagram",
      //   "url":"http://instagram.com/tbaker_x",
      //   "className":"fa fa-instagram"
      // },
      {
        "name":"github",
        "url":"https://github.com/mmcclatchy",
        "className":"fa fa-github"
      }
    ]
  },
  "resume":{
    "skillmessage":"Here you can create a short write-up of your skills to show off to employers",
    "education":[
      {
        "school":"App Academy",
        "degree":"Full Stack Software Engineer",
        "graduated":"December 2020",
        "description":"Javascript, React.js, Node.js, Python, Express, PostgreSQL, Sequelize, Flask"
      },
      {
        "school":"Academy for Five Element Acupuncture",
        "degree":"Masters in Acupuncture",
        "graduated":"September 2013",
        "description":"Acupuncture, Chinese Medicine, Daoist Theory"
      },
      {
        "school":"Kutztown University of Pennsylvania",
        "degree":"BS in Psychology",
        "graduated":"May 2008",
        "description":"Minor in Philosophy"
      }
    ],
    "work":[
      {
        "company":"Golden Needle Acupuncture and Herbal Supply",
        "title":"Customer Service Manager",
        "years":"January 2019 - July 2020",
        "description": [
          "Promoted from Customer Service Representative to Manager within first year ", 
          "Overhauled backorder operations that saved over $65,000 a year", 
          "Maintained information for over 20,000 products on the online shopping cart services", 
          "Reviewed over 200 invoices a day ensuring accuracy and correcting any mistakes before orders were shipped"
        ]
      },
      {
        "company":"Self Employed",
        "title":"Acupuncturist",
        "years":"June 2014 - December 2018",
        "description": [
          "Devised individually crafted treatments based upon the diagnosis",
          "Cultivated deep rapport with patients to provide an atmosphere of trust and being listened to",
          "Focusing on emotional and mental health, ushered patients through difficult and traumatic times",
        ]
      },
      {
        "company":"Kutztown University",
        "title":"Information Technology Support Specialist",
        "years":"August 2002 - May 2004",
        "description": [
          "Installing and configuring hardware and software components",
          "Troubleshooting hardware and software issues", 
          "Upgrading software on all computers."
        ]
      },
      {
        "company":"East Penn School District",
        "title":"Information Technology Support Specialist",
        "years":"September 2000 - August 2002",
        "description": [
          "Installing and configuring hardware and software components",
          "Troubleshooting hardware and software issues", 
          "Upgrading software on all computers."
        ]
      }
    ],
    "skills":[
      "javascript-original",
      "react-original-wordmark",
      "python-original",
      "nodejs-original-wordmark",
      "github-original-wordmark",
      "express-original-wordmark",
      "sequelize-original-wordmark",
      "postgres-original-wordmark",
      "html5-original",
      "css3-original",
      "mocha-plain",
    ]
  },
  "portfolio":{
    "projects": [
      {
        "title":"Mediumm",
        "category":"Blog Clone",
        "image":"../mediumm.jpg",
        "url":"https://mediumm.herokuapp.com/"
      },
      {
        "title": "Triply",
        "category": "Intuitive Algorithm Generated Roadtrip Itinerary Simulator and Planner.",
        "image": "../triply.jpg",
        "url": "https://triplyroadtripapp.herokuapp.com/",
      },
      {
        "title": "Muse",
        "category": "Creativity App",
        "image": "../muse.jpg",
        "url": "https://app-muse.herokuapp.com/"
      }
    ]
  }
}
