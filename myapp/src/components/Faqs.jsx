import Faqsdata from "../data/Faqsdata.json"
import Faqitems from "./Faqitems"


export default function Faqs(){
    return(
        
<div className="faqs container">
    <div >
        <h1>Faq's</h1>
        <img src="/images/faqpipeline.png" alt="faqpipeline"/>

    </div>
    <div className="faqs-container">
        {Faqsdata.map((item,index)=>(
            <Faqitems
             key={index} 
            question={item.question}/>
        ))}
 
 <span class="our-client-line"></span>
</div>

</div>

    )
}



{/* <span class="our-client-line"></span>
    <div class="faqs-content" >
          <div></div>
        <div> <a href="#home"><img src="./images/arrow.png" alt="arrow" class="faqs-content-image"/></a> </div>
    </div>
 <span class="our-client-line"></span>
    <div class="faqs-content">
        <div></div>
        <div><a href="#home"><img src="./images/arrow.png" alt="arrow" class="faqs-content-image"/></a> </div>
    </div>
 <span class="our-client-line"></span>
    <div class="faqs-content">
        <div></div>
        <div><a href="#home"><img src="./images/arrow.png" alt="arrow" class="faqs-content-image"/></a> </div>
    </div>
 <span class="our-client-line"></span>
    <div class="faqs-content">
        <div></div>
        <div><a href="#home"><img src="./images/arrow.png" alt="arrow" class="faqs-content-image"/></a></div>
    </div> */}