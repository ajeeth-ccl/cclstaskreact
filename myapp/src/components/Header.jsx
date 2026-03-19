 

export default function Header(){
    return(
       
  <div class="banner container">

<header class="flex-center myheader">

<nav class="navbar">

    <div class="navbarlogo">
        <a href="#home"><img src="./images/headerlogo.png" alt="logo"/></a>
   </div>
        
   
    <div class="navbarlinks">
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#services">Services</a>
        <a href="#resourses">Resources</a>
    </div>

    <div class="buttons">
  <button class="primary-btn ">Explore</button>
    <button class="secondary-btn ">Learn</button>
    </div>
  
 </nav>

</header>

 
 <div class="bannercontent">

    <h1 class="banner-heading heading" >Build systems that scale with you</h1>
    <p class="banner-paragraph paragraph">
        Mordern business need infrastructure that grows without breaking.We deliver scalable 
        software and DevOps solutions that handle your demands today and tommarrow.
    </p>
     <div class="buttons bannerbuttons" >
  <button class="primary-btn banner-explore">Explore</button>
    <button class="secondary-btn banner-learn">Learn</button>
    </div>


 </div>

  </div>
    )
}