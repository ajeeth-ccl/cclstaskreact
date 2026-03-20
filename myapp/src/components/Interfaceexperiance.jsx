import TitleDescription from "./TitleDescription"
import Interfacecards from "./Interfacecards"
import Interfacedata from "../data/Interfacedata.json"



export default function Interfaceexperiance(){
    return(
        
        <div className="interface-experiance container">
        <div className="grid-center">
            <TitleDescription
            title="Interface and experience built for humans"
            description="We work with government and critical organisations throughout the UK
to deliver digital transformation that puts you in control."
           titleclassName="interface-experiance-heading heading"
           descclassName="interface-experiance-paragraph paragraph"
            />
       
        </div>
       

<div className="flex-center">

    {Interfacedata.map((card,index)=>(
        <Interfacecards 
        key={index}
        image={card.image}
        alt={card.alt}
        title={card.title}
        description={card.description}
        />

    ))}
  
</div>
  </div>
    )
}


        // <h1 className=""></h1>
        // <p className=""></p>
    //       <div className="interface-experiance-cards">
    //     <img src="./images/interfaceexperiancecube.png" alt="image1"/>
    //     <h3 className="interface-experiance-cards-heading">ComplexEnterprise</h3>
    //     <p className="interface-experiance-cards-paragraph">Scale globally without consultant lock-in. Build capability that compounds.</p>
    // </div>
    // <div className="interface-experiance-cards">
    //     <img src="./images/interfcaeexperiancecode.png" alt="image2"/>
    //     <h3 className="interface-experiance-cards-heading">ComplexEnterprise</h3>
    //     <p className="interface-experiance-cards-paragraph">Scale globally without consultant lock-in. Build capability that compounds.</p>
    // </div>
    // <div className="interface-experiance-cards">
    //     <img src="./images/interfaceexperianceperson.png" alt="image3"/>
    //     <h3 className="interface-experiance-cards-heading">ComplexEnterprise</h3>
    //     <p className="interface-experiance-cards-paragraph">Scale globally without consultant lock-in. Build capability that compounds.</p>
    // </div>
    // <div className="interface-experiance-cards">
    //     <img src="./images/interfaceexperiancecloud.png" alt="image4"/>
    //     <h3 className="interface-experiance-cards-heading">ComplexEnterprise</h3>
    //     <p className="interface-experiance-cards-paragraph">Scale globally without consultant lock-in. Build capability that compounds.</p>
    // </div>