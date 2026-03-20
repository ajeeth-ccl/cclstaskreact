

export default function TitleDescription({title,description,titleclass,descclass}){
    return(
        <>
         <h1 className={titleclass}>{title}</h1>
         <p className={descclass}>{description}</p>
        </>
       
    )

}