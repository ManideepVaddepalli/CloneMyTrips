import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'


function Auth({updateData}) {
  
    return (<GoogleLogin
      onSuccess={credentialResponse => {
        var credentials = jwtDecode(credentialResponse.credential)
        //console.log(credentials)
        updateData(credentials)
      }}
      onError={() => {
        console.log('Login Failed')
      }}
    />
    )
  }
  
  export default Auth