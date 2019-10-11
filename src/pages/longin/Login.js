import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

export class Login extends Component {

    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }
        return(
            <GoogleLogin
                clientId="56098183039-ad5e7nbodjj72jtrqi2q2i807kfnar93.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        )
    }
}
