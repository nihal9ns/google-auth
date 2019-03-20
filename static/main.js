var signIn = document.getElementById("signIn");

signIn.onclick = function(){
    console.log("WORKING");
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20email%20profile&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=https%3A%2F%2Fgoogle-auth-playground.herokuapp.com/auth&response_type=code&client_id=986525738532-b21ftr3cvmqoacp117ihsatdge799utj.apps.googleusercontent.com";    
};


// https://a539bcf3.ngrok.io/?state=state_parameter_passthrough_value&code=4/EAFO3ZBLLAaqOYD76TM1ssECndeURYRE8bh1PqZs_ukaREKHZ7aV5qzXS7Jl9IL5rnlyIKE0cVsqnI5r0OOTpKo&scope=email+profile+https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile+openid&authuser=0&hd=getproperly.com&session_state=6b71bc469978d4b421806200c681e982238df135..09f7&prompt=none
