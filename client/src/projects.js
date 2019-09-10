const projects = [
  {
    id: '1',
    data: {
      name: 'E and E Automotive Services',
      isClient: true,
      description: {
        a: 'A website for a local business that needed a web presence.',
        b: 'This is a full-stack web apllication built and currently maintained by myself. I used a Node.js backend with Express and EJS on the client side. I incorporated the Google Maps Embeded API and used the Yelp Reviews API to dynamically display the most current Yelp user reviews for the business.',
        c: 'This project was self initiated. In need of more real-world experience I brainstormed through local businesses to see who might need some help with a website. When my own mechanic shop in my neighborhood didn\'t even have a website I knew that would be a good place to start. I built something on my own and brought it to them and they were thankful for the work. I then further worked with the owner to make any modifications. I included SEO meta content to rank this page in Google\'s search engine and used Google Cumpute Engine to deploy this project with their domain name.',
        d: ''
      },
      technologies: 'HTML, CSS, Javascript, Node.js, Express, EJS',
      thumbnail: 'https://s3.us-east-2.amazonaws.com/jasonrowland.co/eande-thumbnail.png',
      images: [
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-1.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-2.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-3.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/eande-4.png'
      ],
      appLink: 'https://eandeautomotiveservices.com/',
      githubLink: 'https://github.com/jasonrowland86/eandeautomotiveservices',
    }
  },
  {
    id: '2',
    data: {
      name: 'Whole Sky Healing Arts',
      isClient: false,
      description: {
        a: 'A personal business website built with React.',
        b: 'For this project I was asked to build a website that modeled a certain Squarespace design.',
        c: '',
        d: "https://camino-demo.squarespace.com/?nochrome=false"
      },
      technologies: 'HTML, CSS, Javascript, React, Node.js, Express',
      thumbnail: 'https://s3.us-east-2.amazonaws.com/jasonrowland.co/wholesky-app-thumbnail.png',
      images: [
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-1.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-2.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-3.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-4.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/wholesky-app-5.png'
      ],
      appLink: 'https://wholeskyhealingarts.herokuapp.com/',
      githubLink: 'https://github.com/jasonrowland86/WholeSky-React-Express',
    }
  },
  {
    id: '3',
    data: {
      name: 'UFC Fight Pick App',
      isClient: false,
      description: {
        a: 'A web application that uses the Express MVC and the isomorphic-fetch API to let users search for all fighters on the current UFC roster.',
        b: 'A user can use this website to view upcomming and past UFC event information and compare two fighter\'s stats head to head. A user can make and save their fight picks for an up coming event and view their personal past fight prediction stats.',
        c: 'I was in the process of fully rebuilding this project when the UFC-data API became no longer supported. I am now working on options to build my own API to continue developing this project.',
        d: ''
      },
      technologies: 'HTML, CSS, Javascript, Node.js, Express, PostgreSQL',
      thumbnail: 'https://s3.us-east-2.amazonaws.com/jasonrowland.co/fight-pick-app-thumbnail.png',
      images: [
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/fight-pick-app.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/fight-pick-app-1.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/fight-pick-app-2.png'
      ],
      appLink: 'https://fightpickapp.herokuapp.com/',
      githubLink: 'https://github.com/jasonrowland86/Project-2-App',
    }
  },
  {
    id: '4',
    data: {
      name: 'Aquarium App',
      isClient: false,
      description: {
        a: 'A Ruby on Rails CRUD web app that uses CSS animations to make an aquarium of fish swim around.',
        b: 'This was just a fun personal project I worked on to explore Ruby.',
        c: '',
        d: ''
      },
      technologies: 'HTML, CSS, Javascript, Ruby',
      thumbnail: 'https://s3.us-east-2.amazonaws.com/jasonrowland.co/aquarium-app-thumbnail.png',
      images: [
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-1.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-2.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-3.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-4.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/aquarium-app-5.png'
      ],
      appLink: 'https://aquarium-app.herokuapp.com/',
      githubLink: 'https://github.com/jasonrowland86/Aquarium',
    }
  },
  {
    id: '5',
    data: {
      name: 'Okurio Project Managment',
      isClient: false,
      description: {
        a: 'A collaborative project I worked on to build a project management web app. Built with React and Express, an admin can create and manage a project by assigning tasks to project memebers.',
        b: '',
        c: '',
        d: ''
      },
      technologies: 'HTML, CSS, Javascript, React, Node.js, Express, PostgreSQL',
      thumbnail: 'https://s3.us-east-2.amazonaws.com/jasonrowland.co/okurio-app-thumbnail.png',
      images: [
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/okurio-app.png'
      ],
      appLink: '',
      githubLink: 'https://github.com/RajisteB/Occurio',
    }
  },
  {
    id: '6',
    data: {
      name: 'Simon',
      isClient: false,
      description: {
        a: 'The classic game Simon. Made with Javascript.',
        b: '',
        c: '',
        d: ''
      },
      technologies: 'HTML, CSS, Javascript',
      thumbnail: 'https://s3.us-east-2.amazonaws.com/jasonrowland.co/simon-thumbnail.png',
      images: [
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-1.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-2.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-3.png',
        'https://jasonrowland-portfolio-site-images.s3.amazonaws.com/simon-4.png'
      ],
      appLink: 'https://polar-coast-40517.herokuapp.com/index.html',
      githubLink: 'https://github.com/jasonrowland86/simon',
    }
  }
]

export default projects;
