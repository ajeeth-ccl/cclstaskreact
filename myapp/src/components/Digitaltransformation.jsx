import TitleDescription from "./TitleDescription"
import Buttons from "./Buttons"


export default function Digitaltransformation(){
    return(
        
    <div class="digital-transformation container">
        <TitleDescription
          title = "Digital Transformation Shouldn’t Mean Digital Dependency"
          description="Modern businesses need infrastructure that grows without breaking.
             We deliver scalable software and DevOps solutions that handle your demands 
              today and tomorrow."
              titleclass="digital-transformation-heading heading"
              descclass="digital-transformation-paragraph paragraph"

                       />

             <div class="buttons digital-transformation-buttons">
             <Buttons
             explore="Explore"
             learn="Learn"
             exploreclass="primary-btn digital-transformation-explore"
             learnclass="secondary-btn digital-transformation-learn"
             />
    </div>

    </div>
    )
}



// <h1 class=""></h1>
//         <p class=""></p>
//<button class=""></button>
 //   <button class=""></button> 