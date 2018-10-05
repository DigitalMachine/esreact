import React from "react";
import footerCss from "../../../css/mainLayout/footer/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGoogle } from '@fortawesome/fontawesome-free-brands';


export default class Footer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className = "container-fluid footer">
        <div className = "row">
          <div className = "col mr-auto">
             <p>Book Seller Company</p>
             <p>Via Paolo Dell Aguzzo, 56</p>
             <p>Senigallia, Ancona, Italia</p>
             <p>info@paolodellaguzzo.com</p>
          </div>
          <div className = "col" style={{textAlign:"right"}}>
             <div className = "pull-right">
                <a href="https://www.facebook.com/paolodellaguzzocom/" target="_blank">
                   <FontAwesomeIcon className ='font-awesome' icon={faFacebook} />
                </a>
                <a href="https://twitter.com/PaoloDellaguzzo" target="_blank">
                   <FontAwesomeIcon className ='font-awesome' icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com/in/paolodellaguzzo/" target="_blank">
                   <FontAwesomeIcon className ='font-awesome' icon={faLinkedin} />
                </a>
                <a href="https://plus.google.com/u/0/+paolodellaguzzo" target="_blank">
                   <FontAwesomeIcon className ='font-awesome' icon={faGoogle} />
                </a>
             </div>
          </div>
        </div>
      </div>
    );
  }
}
