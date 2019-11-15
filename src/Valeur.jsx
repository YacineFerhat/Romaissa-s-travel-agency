import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
const Valeur =() => {
    return(

        <div className="columns is-centered">               
            <div className="column is-3 has-text-centered">
                <PhoneIcon style={{fontSize:'55px'}}/>
                <h1 className="title is-4" style={{marginTop:'15px'}}>
                    Assistance téléphonique 
                </h1>
            </div>
            <div className="column has-text-centered is-3">
                <AttachMoneyIcon style={{fontSize:'55px'}}/>
                <h1 className="title is-4" style={{marginTop:'15px'}}>
                    Prix imbattables
                </h1>
            </div>
            <div className="column has-text-centered is-3">
                <FlightTakeoffIcon style={{fontSize:'55px'}}/>
                <h1 className="title is-4" style={{marginTop:'15px'}}>
                    Destinations incontournables
                </h1>
            </div>
        </div>
    )
}

export default Valeur ;