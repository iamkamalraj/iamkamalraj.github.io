/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
        name1 : "Overall Designer",
        designation1 : "Issued by ELOQUENCE'23, 6th National Level Symposium",
        image1 : "assets/images/references-page/2.jpg",
        message1 : "Overall design including Logo, Banners, Poster, Pamphlets, ID Cards, Certificates, Registration Cards, Invitations and Additional UI Design Elements for ELOQUENCE'23 Webiste which was organised by CSE department associated with C. Abdul Hakeem College of Engineering and Technology",

        

        sl1: 2,
        name2 : "CODING and DEBUGGING",
        designation2 : "Issued by TECHNO RENDEZVOUS'23", 
        image2: "assets/images/references-page/3.png",
        message2 : "Awarded Cash Prize in TECHNO RENDEZVOUS'23, A National Level Technical Symposium conducted by the Department Master of Computer Applications by C Abdul Hakeem College of Engineering and Technology",

    
        sl4: 4,
        name4 : "Logo Design & Development",
        designation4 : "Issued by Managing Director of Karthigeya Group Associated with Karthigeya Moulds & Dies Private Limited", 
        image4 : "assets/images/references-page/led.jpg",
        message4 : "Awarded Cash Prize and Incentive for the Logo Design and Development and special support in Graphic Design to Ledovec International Pvt Ltd.",
         
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
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
      sl4,
      image4,
      name4,
      designation4,
      message4,
      absbox_for_linkedin4,
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
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
