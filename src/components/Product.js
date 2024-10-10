import one from "../assets/images/a.jpeg";
import two from "../assets/images/b.jpeg";
import three from "../assets/images/c.jpeg";
function Productimg()
{
  return(
   
      <div className="perfume-container">
    <div className="perfume-box">
     <img src={one} alt="perfume-1"></img>
       <p>Perfume 1: Description of Perfume 1 | 50 ml | $50.00</p>
    </div>
    
    <div className="perfume-box">
    <img src={two} alt="perfume-2"></img>
    <p>Perfume 2: Description of Perfume 2 | 100 ml | $75.00</p>
    </div>
    <div className="perfume-box">
    <img src={three} alt="perfume-3"></img>
    <p>Perfume 3: Description of Perfume 3 | 30 ml | $40.00</p>
    </div>
</div>

   
  )
}
 export default Productimg