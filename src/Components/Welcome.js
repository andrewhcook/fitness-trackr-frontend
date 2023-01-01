const Welcome = (props) => {

    const {token} = props;
    console.log(token)

    if(token){
        return <h1>Thanks for being a member! Keep up the good work!</h1>
    } else {
        return <div id="welcome">Welcome! Please sign up or login</div>
    }   
}

export default Welcome