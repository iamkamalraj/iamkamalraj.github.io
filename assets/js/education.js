AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Innovation, Design and Entrepreneurship (IDE) Bootcamp Phase-III",
    cardImage: "assets/images/education-page/ide.png",
    moocLink:
      "https://drive.google.com/file/d/1KY1TY4RSjcByM8aXR9EEOxjWlesO0qzs/view?usp=sharing",
  },
  {
    title: "ISRO - Department of Space - Smart India Hackathon-2023",
    cardImage: "assets/images/education-page/sih.png",
    moocLink:
      "https://drive.google.com/file/d/1cSiTaXXtkfGWO89Rmwh9vmZBwF5A3Ehf/view?usp=sharing",
  },
  {
    title: "Innovation, Design and Entrepreneurship (IDE) Bootcamp Phase-II",
    cardImage: "assets/images/education-page/ide.png",
    moocLink:
      "https://drive.google.com/file/d/16gaGlEhN45dGf1Psg8pN7ytpkqjlRpX1/view",
  },
  {
    title: "Build Dynamic User Interfaces (UI) for Websites",
    cardImage: "assets/images/education-page/google.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/verify/DKVVQCNJUUUZ",
  },
  {
    title: "Create High-Fidelity Designs and Prototypes in Figma",
    cardImage: "assets/images/education-page/google.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/verify/9WFBNXXNVZUC",
  },
  {
    title: "Conduct UX Research and Test Early Concepts",
    cardImage: "assets/images/education-page/google.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/verify/7Q5A3EEEUTDX",
  },
  {
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    cardImage: "assets/images/education-page/google.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/verify/E8HCJ3F6BJ33",
  },
  {
    title: "Build Wireframes and Low-Fidelity Prototypes",
    cardImage: "assets/images/education-page/google.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/verify/S72HTFNCMYFX?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    cardImage: "assets/images/education-page/google.png",
    moocLink: "https://coursera.org/share/1b00dc7217069837dd9c573692142c9c",
  },
  {
    title: "Developing Front-End Apps with React",
    cardImage: "assets/images/education-page/ibm.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/verify/63KT2R7M8XVV",
  },
  {
    title: "Blockchain",
    cardImage: "assets/images/education-page/univ.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/specialization/WWM5XYF9TB7N?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n",
  },
  {
    title: "Graphic Design Mastery & AI",
    cardImage: "assets/images/education-page/gd.jpg",
    moocLink:
      "https://www.udemy.com/certificate/UC-c7d30194-dd3e-4987-90f4-a4d410f2ec41/",
  },
  {
    title: "Python Course",
    cardImage: "assets/images/education-page/progate.png",
    moocLink: "https://progate.com/course_certificate/8722ded1r5t1dr",
  },
  {
    title: "Build Wireframes and Low-Fidelity Prototypes",
    cardImage: "assets/images/education-page/coursera.png",
    moocLink: "https://coursera.org/share/44e1a22615d837463aeec76520a260d5",
  },
  {
    title: "Adobe Photoshop",
    cardImage: "assets/images/education-page/udemy.jpeg",
    moocLink: "https://www.udemy.com/certificate/UC-G7JGN7HW/",
  },
  // {
  //   title: "Enterprise Java with Spring Boot",
  //   cardImage: "assets/images/education-page/ineuron.jpg",
  //   moocLink:
  //     "https://ineuron.ai/course/Enterprise-Java-with-Spring-Boot-Tech-Neuron?source=search",
  // },
  {
    title: "AutoCAD 2D and 3D practice drawings",
    cardImage: "assets/images/education-page/udemy.jpeg",
    moocLink: "https://www.udemy.com/certificate/UC-X7DCFAMG/",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
