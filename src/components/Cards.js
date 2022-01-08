import React from "react";
import Pack from '../images/0007.png'
import '../style.css';

 const Card = () => {
   return (
     <>
     <section>
 <div class="card">
         <div className="mana font-mono">6</div>
         <div className="character-img">
         <img src={Pack} alt="mobile" />
         </div>
         <div className="char-name font-mono">
             <h1 className="font-black">DARIUS</h1>
         </div>
         <div className="info-text">
             <div className="element font-mono font-bold">
                 <p className="font-black">overwhelm</p>
             </div>
             <p className="desc font-mono">I see the enemy Nexus has 10 or less health</p>
         </div>
         <div className="power font-mono">
             <p>2</p>
         </div>
     </div>
 </section>
     </>
   )
 }

 export default Card