

export default function Faqitems({question,link="#home"}){
    return(
        <>
        <span className="our-client-line"></span>
    <div className="faqs-content">
        <div>{question}</div>
        <div><a href={link}>
            <img src="./images/arrow.png" alt="arrow" class="faqs-content-image"/>
            </a>
             </div>
            </div>
        </>
    )
}