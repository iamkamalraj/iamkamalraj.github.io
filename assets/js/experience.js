AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graphic Design Intern",
    cardImage: "assets/images/experience-page/te.jpg",
    place: "My Equation (formerly Tech Analogy)",
    time: "(Nov 2023 - Dec 2023)",
    desp: "<li>Producing artworks like slide presentations, logos, posters, brochures, flyers, illustrations etc.</li><li>Designing and curating content into graphical form.</li><li>Preparing and formulating methodologies to improve the brand quality for the organization</li>",
  },
  {
    title: "Computer Aided Design Engineer Intern",
    cardImage: "assets/images/experience-page/kmd.jpg",
    place: "Karthigeya Moulds & Dies PVT. LTD.",
    time: "(Oct 2020 - Sep 2021)",
    desp: "<li>Injection Mould Design and Product Design.</li><li> Electrode modelling and 2D Drafting.</li><li>Skills: AutoCAD · Autodesk PowerShape · Cimatron.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Vegetation measurement along the line corridor using satellite imagery",
    cardImage: "assets/images/experience-page/12.jpg",
    description:
      "SIH 2023 Idea",
  },
  {
    title: "AUDIOBOOK CHURN PREDICTION",
    cardImage: "assets/images/experience-page/8558.jpg",
    description:
      "This project aims to develop a predictive model that can accurately identify such audiobook customers - Mini Project",
  },
  {
    title: "Indoor Navigation for Museums",
    cardImage: "assets/images/experience-page/indoornav.jpg",
    description:
      "User can view Muesum, artifacts and the path generated between them - SIH 2022 Idea",
    
  },
  ];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "SIH 1521 - Development of Explainable AI (XAI) based model for prediction of heavy /high impact rain events using satellite data",
    subtitle: "Indian Space Research Organisation(ISRO)",
    image: "assets/images/project-page/sih23.png",
    desp: "",
    href: "https://sih23cryptovault.netlify.app/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">View Website</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
