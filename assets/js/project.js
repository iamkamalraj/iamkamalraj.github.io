AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "PIAX - CASE STUDY",
    cardImage: "assets/images/project-page/casestudy.webp",
    description: "User Experiance Research",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://www.behance.net/gallery/204023151/PIAX-Case-Study",
    Githublink: "https://www.behance.net/iamkamalraj",
  },
  {
    title: "Brand Identity - PIAX",
    cardImage: "assets/images/project-page/brand.webp",
    description: "User Experiance Research",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink:
      "https://www.behance.net/gallery/201037419/PIAX-Brand-Identity",
    Githublink: "https://www.behance.net/iamkamalraj",
  },
  {
    title: "Piax - Competitor analysis",
    cardImage: "assets/images/project-page/comp.webp",
    description: "User Experiance Research",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink:
      "https://www.behance.net/gallery/195837353/Piax-Competitor-analysis",
    Githublink: "https://www.behance.net/iamkamalraj",
  },
  {
    title: "Smart India Hackathon 2023 - ISRO",
    cardImage: "assets/images/project-page/sih23.png",
    description:
      "SIH 1521 - Development of Explainable AI (XAI) based model for prediction of heavy /high impact rain events using satellite data",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://sih23cryptovault.netlify.app/",
    Githublink: "https://github.com/iamkamalraj/Smart-India-Hackathon-23",
  },
  {
    title: "ELOQUENCE'23 (6th National Level Symposium) ",
    cardImage: "assets/images/project-page/eloq.webp",
    description: "6th National Level Technical Symposium",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://dribbble.com/iamkamalraj",
    Githublink: "https://github.com/iamkamalraj",
  },
  {
    title: "logo Design (for Karthigeya Group)",
    cardImage: "assets/images/project-page/alllogo.png",
    description: "Ledovec International",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/flappybird.png",
    Previewlink: "https://www.karthigeya.com/",
    Githublink: "https://www.behance.net/iamkamalraj",
  },
  {
    title: "Progate Website (Using HTML & CSS)",
    cardImage: "assets/images/project-page/chess.jpg",
    description: "Using HTML & CSS",
    tagimg: "https://image.flaticon.com/icons/png/512/643/chess.png",
    Previewlink: "https://codepen.io/iamkamalraj/pen/dyJLNzY",
    Githublink: "https://github.com/iamkamalraj/HTML",
  },
  {
    title: "Guesser Game (A quiz game built using Java)",
    cardImage: "assets/images/project-page/quiz.jpg",
    description: "A quiz game built using Java.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/iamkamalraj/",
    Githublink: "https://github.com/iamkamalraj/Guesser-Game",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
