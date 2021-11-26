import "./styles.css";

import { Button } from "../button";

export const TopBanner = () => {
    return (
       <header className = "top_banner">
           <img className ="banner_img"
                src ="https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbExJDlWHAFgh2En2Hd7gF-A_KsZyo680uYjkpCGaQpk2bE92Rcyop1ZBbrCmGGUXBpUACTXdvtCIFWxunvH01OB3j-U.webp?r=64a" 
                alt = "banner_img"/>
            <img className = "title_img" 
                src = "https://occ-0-748-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABf0hY-BaDQXu-prj_pBotBcKyeV0bl_LeGV_-2Q50nz9jAHlsaaLYNtYW5-4noZ2bXzPrapKzXtJ1_sf1JFNIw-1gmbPhmXqB_ULiQleHL_uaA5gRtsN2rQUq3SvXJU8no3iWLsNTDy_cM-n6qfewFznK7CajPqn83HC8cJdrT5w2Q.webp?r=405" 
                alt = "title_img"/>
            <div className="text_area">
                <h1 className= "message"> Watch Season 4 Now </h1>
                <h2 className= "synopsis"> The elite agents at The Oppenheim Group sell the luxe life to affluent buyers in LA. Relationships are everything, and that often means major drama.</h2>
            </div>
            <div className = "button_section">
                <Button buttonStyle= "btn_play" text = "Play"/>
                <Button buttonStyle= "btn_moreInfo" text = "More Info"/>
            </div>
       </header>
    );
};

