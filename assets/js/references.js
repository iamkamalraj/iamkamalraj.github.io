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
        image1 : "https://media.licdn.com/dms/image/D5622AQGmuWxIi4zHVA/feedshare-shrink_1280/0/1696773423851?e=1700092800&v=beta&t=U3kQkxME_lS4Ks-1fDomUg05e3e8cYBOzBz92EXoaEg",
        message1 : "Overall design including Logo, Banners, Poster, Pamphlets, ID Cards, Certificates, Registration Cards, Invitations and Additional UI Design Elements for ELOQUENCE'23 Webiste which was organised by CSE department associated with C. Abdul Hakeem College of Engineering and Technology",
        

        sl2:2,
        name2 : "Logo Design & Development",
        designation2 : "Issued by Managing Director of Karthigeya Group Associated with Karthigeya Moulds & Dies Private Limited", 
        image2: "assets/images/references-page/led.jpg",
        message2 : "Awarded Cash Prize and Incentive for the Logo Design and Development and special support in Graphic Design to Ledovec International Pvt Ltd.",
        
        
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
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
