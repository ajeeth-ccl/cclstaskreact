 import TitleDescription from "./TitleDescription"
 import Buttons from "./Buttons"

export default function Header(){
    return(
       
  <div className="banner container">

<header className="flex-center myheader">

<nav className="navbar">

    <div className="navbarlogo">
        <a href="#home"><img src="./images/headerlogo.png" alt="logo"/></a>
   </div>
        
   
    <div className="navbarlinks">
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#services">Services</a>
        <a href="#resourses">Resources</a>
    </div>

    <div className="buttons">
       <Buttons
                   explore="Explore"
                   learn="Learn"
                   exploreclassName="primary-btn "
                   learnclassName="secondary-btn "
                   />
  
    </div>
    
  
 </nav>

</header>

 
 <div className="bannercontent">
              <TitleDescription
              title="Build systems that scale with you"
              description="Mordern business need infrastructure that grows without breaking.We deliver scalable 
       software and DevOps solutions that handle your demands today and tommarrow."
              titleclassName="banner-heading heading"
              descclassName="banner-paragraph paragraph"
              />
  
     <div className="buttons bannerbuttons" >
        <Buttons
                   explore="Explore"
                   learn="Learn"
                   exploreclassName="primary-btn banner-explore"
                   learnclassName="secondary-btn banner-learn"
                   />
 
    </div>


 </div>

  </div>
    )
}

  // <h1 className="" ></h1>
  //   <p className="">
  //       
  //   </p>
  //  <button className=""></button>
  //   <button className=""></button>