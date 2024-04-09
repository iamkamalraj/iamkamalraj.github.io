const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl2: 1,
    name1: "Overall Designer",
    designation1: "Issued by ELOQUENCE'23, 6th National Level Symposium",
    image1: "assets/images/references-page/2.jpg",
    message1:
      "Overall design including Logo, Banners, Poster, Pamphlets, ID Cards, Certificates, Registration Cards, Invitations and Additional UI Design Elements for ELOQUENCE'23 Webiste which was organised by CSE department associated with C. Abdul Hakeem College of Engineering and Technology",

    sl5: 5,
    name5: "Smart India Hackathon 2023 Finalist",
    designation5: "Issued by Indian Space Research Organisation - ISRO",
    image5: "assets/images/references-page/5.png",
    message5:
      "We successfully completed the development of an AI-based nowcasting model for predicting heavy precipitation events using INSAT-3D/3DR satellite data. Our system includes an explainable AI module (XAI) to enhance interpretability. The final output is delivered through a user-friendly web application, showcasing model accuracy and providing explanations for the generated predictions. This marks the achievement of our goals for SIH'23 Final.",

    sl4: 4,
    name4: "Logo Design & Development",
    designation4:
      "Issued by Managing Director of Karthigeya Group Associated with Karthigeya Moulds & Dies Private Limited",
    image4: "assets/images/references-page/ledo.jpg",
    message4:
      "Awarded Cash Prize and Incentive for the Logo Design and Development and special support in Graphic Design to Ledovec International Pvt Ltd.",

    sl1: 2,
    name2: "CODING and DEBUGGING",
    designation2: "Issued by TECHNO RENDEZVOUS'23",
    image2: "assets/images/references-page/3.png",
    message2:
      "Awarded Cash Prize in TECHNO RENDEZVOUS'23, A National Level Technical Symposium conducted by the Department Master of Computer Applications by C Abdul Hakeem College of Engineering and Technology",

    sl4: 6,
    name6: "Innovation Design and Entrepreneurship Bootcamp ",
    designation6: "Issued by MINISTRY OF EDUCATION, GOVERNMENT OF INDIA",
    image6: "assets/images/references-page/ide.jpg",
    message6:
      "Got selected in 1 week of exclusive Engaging sessions, expert insights, and entrepreneurial inspiration fueled our journey at the IDE Bootcamp, culminating in a successful pitch and valuable feedback.",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl5,
      image5,
      name5,
      designation5,
      message5,
      absbox_for_linkedin5,
      sl4,
      image4,
      name4,
      designation4,
      message4,
      absbox_for_linkedin4,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
      sl6,
      image6,
      name6,
      designation6,
      message6,
      absbox_for_linkedin6,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 


            <tr data-aos="zoom-in-left"> 
                       
            <td class = "referenceTitleName">
                <div>
                    <span class="imgResponsive">
                        <img src="${image5}" class="imgRes">
                    </span>
                </div>
                <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                <a href="#0" class="paperTitle">${name5} </a> 
                <div> ${designation5} </div> <div class="rConferences">
                    <div class="referenceY">${message5}</div>
                </div>
    

            </td>
            <td class="imgCol"><img src="${image5}" class="rImg1"></td>


            
            
                        <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image4}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image4}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name4} </a> 
                    <div> ${designation4} </div> <div class="rConferences">  
                        <div class="referenceY">${message4}</div>
                    </div>  
                </td>
            </tr> 

            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
    
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>


                        <tr data-aos="zoom-in-left"> 
                        <td class="imgCol"><img src="${image6}" class="rImg"></td>
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image6}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle"> ${name6} </a> 
                            <div> ${designation6} </div> <div class="rConferences">  
                                <div class="referenceY">${message6}</div>
                            </div>  
                        </td>
                    </tr> 


            
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
