

export default function Footer(){
    return(
        <footer classNameName="container">
            
    <div className="footer-one">
        
  <div>
    <a href="#home">
 <img src="./images/footer.png" alt="logo"/> 
    </a>
   </div>
    <div className="footer-one-content">
        <h3 className="footer-one-content-heading">Links</h3>
    
             <a href="#home">Home</a>
             <a href="#services">Services</a>
             <a href="#About">About Us</a>
             <a href="#resourses">Blog</a>
             <a href="#resourses">Contact</a>
        
    </div>
    <div className="footer-one-content">
         
        <h3 className="footer-one-content-heading">Support</h3>
            <a href="#faq">Faq</a>
            <a href="#rules">Rules</a>
            <a href="#training">Training</a>
            <a href="#sponsership">Sponsership</a>
            <a href="#media">Media</a>
        
    </div>
    <div className="footer-one-content">
         
        <h3 className="footer-one-content-heading">Crystal Code Labs</h3>
        <address className="footer-one-content-address">
            No4,2ndFloor,Santhosh Complex,Aishwarya Nagar,Udumalaipettai 642126
        </address>
    </div>


    </div>
    <div className="footer-one-images">
        <img src="./images/facebook.png" alt="facebook"/>
        <img src="./images/x.png" alt="x"/>
        <img src="./images/insta.png" alt="insta"/>
        <img src="./images/youtube.png" alt="youtube"/>
    </div>

    <span className="our-client-line footer-one-line"></span>

    <div className="flex-center footer-two">
            <a href="&copy">&copy;</a>
            <a href="#crystalcodelabs"> Crystalcodelabs2026</a>
            <a href="#privacypolicy"> PrivacyPolicy</a>
            <a href="#cookiessettings"> CookiesSettings</a>
            <a href="#terms"> Terms</a>
        
    </div>
  


</footer>
    )

}