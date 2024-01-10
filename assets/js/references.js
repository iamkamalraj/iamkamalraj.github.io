const referenceTable = document.querySelector(".pain");

const references = [
    {
        sl: 1,
        name: "SIH'23-Finalist (Smart India Hackathon 2023)",
        designation: "Issued by ISRO for SIH 1521 - Development of Explainable AI (XAI) based model for prediction of heavy /high impact rain events using satellite data",
        image: "assets/images/references-page/4.png",
        message: "The final output is delivered through a user-friendly web application, showcasing model accuracy and providing explanations for the generated predictions. This marks the achievement of my goals for SIH'23 Final.",
    },
    {
        sl: 3,
        name: "Overall Designer",
        designation: "Issued by ELOQUENCE'23, 6th National Level Symposium",
        image: "assets/images/references-page/2.jpg",
        message: "Overall design including Logo, Banners, Poster, Pamphlets, ID Cards, Certificates, Registration Cards, Invitations and Additional UI Design Elements for ELOQUENCE'23 Webiste which was organised by CSE department associated with C. Abdul Hakeem College of Engineering and Technology",
    },
    {
        sl: 4,
        name: "CODING and DEBUGGING",
        designation: "Issued by TECHNO RENDEZVOUS'23",
        image: "assets/images/references-page/3.png",
        message: "Awarded Cash Prize in TECHNO RENDEZVOUS'23, A National Level Technical Symposium conducted by the Department Master of Computer Applications by C Abdul Hakeem College of Engineering and Technology",
    },
        {
        sl: 2,
        name: "Logo Design & Development",
        designation: "Issued by Managing Director of Karthigeya Group Associated with Karthigeya Moulds & Dies Private Limited",
        image: "assets/images/references-page/led.jpg",
        message: "Awarded Cash Prize and Incentive for the Logo Design and Development and special support in Graphic Design to Ledovec International Pvt Ltd.",
    },

  
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl,
      image,
      name,
      designation,
      message,
    }) => {
      if (sl === 1 || sl === 4) {
        output += `<tr data-aos="zoom-in-left"> 
                    <td class="imgCol"><img src="${image}" class="rImg"></td>
                    <td class="referenceTitleName">
                        <div>
                            <span class="imgResponsive">
                                <img src="${image}" class="imgRes">
                            </span>
                        </div>
                        <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                        <a href="#0" class="paperTitle"> ${name} </a> 
                        <div> ${designation} </div> <div class="rConferences">  
                            <div class="referenceY">${message}</div>
                        </div>  
                    </td>
                </tr>`;
      } else {
        output += `<tr data-aos="zoom-in-left"> 
                    <td class="referenceTitleName">
                        <div>
                            <span class="imgResponsive">
                                <img src="${image}" class="imgRes">
                            </span>
                        </div>
                        <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                        <a href="#0" class="paperTitle"> ${name} </a> 
                        <div> ${designation} </div> <div class="rConferences">  
                            <div class="referenceY">${message}</div>
                        </div>  
                    </td>
                    <td class="imgCol"><img src="${image}" class="rImg"></td>
                </tr>`;
      }
    }
  );
  referenceTable.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", fillData);
