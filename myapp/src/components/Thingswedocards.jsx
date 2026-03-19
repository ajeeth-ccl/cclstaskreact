

export default function Thingswedocards({title,description}){
    return(
         <div className="things-wedo-cards">
            
            <h3 className="things-wedo-cards-heading">{title}</h3>
            <p className="things-wedo-cards-paragraph">{description} </p>
        </div>
    )

}