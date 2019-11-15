import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';



const Contact =() => {
    return(
        <div>
            <h1 className="title is-2 has-text-centered" style={{marginTop:'50px'}}>
                Contact
            </h1>
            <h1 className="subtitle is-4 has-text-centered" style={{marginTop:'20px'}}>
                Vous pouvez nous contacter sur
            </h1>
            <div className='columns is-centered' >
                <div className="column is-3">
                    <span>
                        <MailIcon style={{position:'relative', top:'5px', marginRight:'10px',  fontSize:'25px'}}/>
                        <span style={{marginTop:'-20px'}}>                        
                            Ferhatromaissa1997@gmail.com
                        </span>
                    </span>
                </div>
                <div className="column is-3">
                    <span>
                    <HomeIcon style={{position:'relative', top:'5px', marginRight:'10px',  fontSize:'25px'}}/>
                        <span style={{marginTop:'-20px'}}>                        
                            Villa n°7  Oued Forcha, Annaba, Algérie
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Contact;
