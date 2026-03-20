import TitleDescription from "./TitleDescription"
import Thingswedocards from "./Thingswedocards"
import cardsdata from "../data/Cardsdata.json"
import Buttons from "./Buttons"



export default function Thingswedo(){

   
    
return(
    <>
    <div className="things-wedo container">
         <div className="grid-center">
            <TitleDescription
       title="What  we do"
       description="We work with government and critical organizations throught out the UK to deliver 
        digital transformation that puts you in control."
       titleclass="heading"
       descclass="things-wedo-paragraph paragraph"
       />

   
</div>

        
        <div className="things-wedo-cards-container">
            {cardsdata.map((card,index)=>(
                <Thingswedocards
                key={index}
                title = {card.title}
                description={card.description}
                />
           ) )}

            
        </div>

            <div className="things-wedo-buttons">
                <Buttons
                     explore="Explore"
                     learn="Learn"
                     exploreclass="primary-btn things-wedo-explore"
                     learnclass="secondary-btn things-wedo-learn"
                     />

    </div>
          

    </div>
    </>
)
 
//   <h1 className=""></h1>

//     <p className="">
//     </p>
//   <button class=""></button>
//     <button class=""></button>
/*         
  <div class="">

    <div class="things-wedo-cards-container">
        <div class="things-wedo-cards" >
        
            <h3 class="things-wedo-cards-heading"></h3>
            <p class="things-wedo-cards-paragraph"> </p>
        </div>
        <div class="things-wedo-cards">
            
            <h3 class="things-wedo-cards-heading"></h3>
            <p class="things-wedo-cards-paragraph"> </p>
        </div>
        <div class="things-wedo-cards">
            
            <h3 class="things-wedo-cards-heading"></h3>
            <p class="things-wedo-cards-paragraph"> </p>
        </div>
        <div class="things-wedo-cards">
             
            <h3 class="things-wedo-cards-heading"></h3>
            <p class="things-wedo-cards-paragraph">  </p>
        </div>
        <div class="things-wedo-cards">
            
            <h3 class="things-wedo-cards-heading"></h3>
            <p class="things-wedo-cards-paragraph">  </p>
        </div>
        <div class="things-wedo-cards">
            
            <h3 class="things-wedo-cards-heading"></h3>
            <p class="things-wedo-cards-paragraph">  </p>
        </div>
    </div>



    </div> */


 
        
      



    
        
    
}