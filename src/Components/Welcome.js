const Welcome = (props) => {

    const {token} = props;
    console.log(token)

    if(token){
        return <h1>Thanks for being a member! Keep up the good work!</h1>
    } else {
        return <h1>Welcome! Please sign up or login using the link in the top left of the page.</h1>
    }   
}

export default Welcome