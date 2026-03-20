import TitleDescription from "./TitleDescription"
import Buttons from "./Buttons"



export default function Intersectingculture(){
    return(
        
         <div className="flex-center container">
    <div className="intersecting-culture-content">
       <TitleDescription
       title="Intersecting culture& technology around the world"
       description="We create, deliver and maintain work across the globe, around the clock. Our
             team is based in Manchester with collaborators across  Europe, and we work 
             worldwide with some of the most loved, desired and consumed brands."
       titleclassName="intersecting-culture-heading heading"
       descclassName="intersecting-culture-paragraph"
       />

              <div className="buttons intersecting-culture-buttons">
                  <Buttons
                             explore="Explore"
                             learn="Learn"
                             exploreclassName="primary-btn intersecting-culture-explore"
                             learnclassName="secondary-btn intersecting-culture-learn"
                             />

    </div>

    </div>
    <div>
        <img src="./images/globe.png"  className="intersecting-image" alt="globe"/>
    </div>

  </div>
    )
}

//  <h1 className=""></h1>
//         <p className=""></p>
//  <button className=""></button>
  //  <button className=""></button>