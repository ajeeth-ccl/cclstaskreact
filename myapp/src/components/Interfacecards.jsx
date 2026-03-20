

export default  function Interfacecards({image,alt,title,description}){
return(
    <>
     <div className="interface-experiance-cards">
        <img src={image} alt={alt}/>
        <h3 className="interface-experiance-cards-heading">{title}</h3>
        <p className="interface-experiance-cards-paragraph">{description}</p>
    </div>
    </>
)


}