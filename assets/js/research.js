/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "TAMILNADU STATE COUNCIL FOR SCIENCE AND TECHNOLOGY",
    authors:
      "Kamal Raj,Shafwaan Ahmed,Rahul B,Vadepeer M,",
    conferences:
      "SUBMISSION OF PROJECT PROPOSAL UNDER STUDENT PROJECTS SCHEME",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/cahcet123.png",
    citation: {
      vancouver:
        "Kamal Raj,Shafwaan Ahmed,Rahul B,Vadepeer M,",
    },
    abstract:
      "Blockchain-Based eVaults: A New Solution for Secure and Efficient Legal Records Management. A blockchain-based eVault for legal records has more storage methods and highly secured, making it an ideal platform for storing sensitive legal records. The leveraging blockchain technology, the system ensures data integrity and data breach resistance while employing smart contract to automate access permission and increase security. Inheriting the cryptographic techniques for privacy protection, the proposed work addresses the key concerns in legal industry. The methodology explores the benefits, challenges in implementation of blockchain for legal record management, practical applications, marks a significant step toward secure and efficient record keeping in the legal sector.",
    absbox: "absPopup1",
  },

  
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
