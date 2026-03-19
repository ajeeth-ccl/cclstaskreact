import Thingswedoheader from "./Thingswedoheader"
import Thingswedocards from "./Thingswedocards"
import Thingswedobuttons from "./Thingswedobuttons"
import cardsdata from "../data/Cardsdata.json"



export default function Thingswedo(){
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
   
    
return(
    <>
    <div className="things-wedo container">

        <Thingswedoheader/>
        <div className="things-wedo-cards-container">
            {cardsdata.map((card,index)=>(
                <Thingswedocards
                key={index}
                title = {card.title}
                description={card.description}
                />
           ) )}

            
        </div>

        <Thingswedobuttons/>

    </div>
    </>
)
 



 
        
      



    
        
    
}