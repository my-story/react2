import React from 'react';
// import { Spinner } from 'react-spinners-css';
import Spinner from '../../public/images/spinner-loader.gif';

function Loader(){

        return(
          <div className="loader-page">
       
            {/* <Spinner color="#5BA5A6" /> */}
            <img src={Spinner} alt="loading reboundwithus" />

          </div>
        )
    
}

export default Loader;