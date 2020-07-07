import React from 'react'
import axios from 'axios'

//Still working last check July 7
class Profile extends React.Component{
    state={
        info:""
    }
    // componentDidMount(){
    //     this.stripeSignup()
    // }
    stripeSignup=()=>{
        let url = "https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://stripe.com/connect/default/oauth/test&client_id=ca_F4vej8oArPuLspNfljCT6ZOD5DcU7F28&state={STATE_VALUE}"
        axios.get(url,{withCredentials:true})
        .then((res)=>console.log(res))
        .catch((e)=>console.log(e))
    }
    // axios.post("https://connect.stripe.com/oauth/tokenclient_secret=sk_test_Au0wg34od1GC3qgugL3CQQQL00gaI6Hf92code="{AUTHORIZATION_CODE}"grant_type=authorization_code")
 

    render(){
        return(
            <div>
                <p>
                    <button onClick={this.stripeSignup}>Stripe SIng</button>
                    {/* 
                    <a href="https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://stripe.com/connect/default/oauth/test&client_id=ca_F4vej8oArPuLspNfljCT6ZOD5DcU7F28&state={STATE_VALUE}">Stripe Connect</a> */}
                </p>
            </div>
        )
    }
   
}

export default Profile