import React from 'react';
import { Form } from './Form.jsx'
import GoogleMap from './GoogleMap'
import ShowPost from './ShowPost.jsx'
import SignIn from './SignIn.jsx';
import { SignUp } from './SignUp.jsx';
import { SignOut } from './SignOut.jsx';
import { hot } from 'react-hot-loader/root';
import { ShowMembers } from './ShowMembers.jsx';
import axios from 'axios';
import QRCodeComponent from './QRCode.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            comments: [],
            signup: false,
        };
        this.handleLoggedIn = this.handleLoggedIn.bind(this);
        this.handleUpdateComments = this.handleUpdateComments.bind(this);

        this.onMarkerClick = this.onMarkerClick.bind(this);

        this.signUpTrue = this.signUpTrue.bind(this);

    }

    componentDidMount(){
        if(localStorage.getItem("id")!==null){
            this.setState({logged:!this.state.logged});
        }
        this.handleUpdateComments();
        if(localStorage.getItem("id")!==null){
            this.setState({logged:!this.state.logged});
        }
    }

    componentDidUpdate(previousProps, previousState){
        if(previousState.comments.length !== this.state.comments.length){
            this.handleUpdateComments();
        }
    }

    async onMarkerClick(data){
        // const lat = data.latLng.lat();
        // const lng = data.latLng.lng();
        // try{
        //     const resDB = await axios.get(`http://localhost:3000/api/filteredcomments/${lat}/${lng}`);
        //     const arrOfFilteredComments = [];
        //     for( let i = 0; i < resDB.data.length; i++){
        //         arrOfFilteredComments.push(resDB.data[i]);
        //     }
        //     this.setState({comments:[...arrOfFilteredComments]});
            
        // }catch(err){
        //     console.log('Error in get filtered pins : ' + err);
        // }
    }

    handleLoggedIn() {
        //console.log('Just to check if we are here ')
        this.setState({ logged: !this.state.logged });
    }

    async handleUpdateComments() {
        try {
            const response = await fetch("http://localhost:3000/api/comments");
            const jsonData = await response.json();
            this.setState({comments:[...jsonData]});
            //setComments(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }

    signUpTrue () {
        this.setState({signup: !this.state.signup})
    }
    //const [isLogged, setLogged] = useState(false); 
    render() {
        //functions
        return (
            <div>
                {this.state.logged && <div>
                    <QRCodeComponent userID = {localStorage.getItem("id")} />
                    <Form handleUpdateComments={this.handleUpdateComments} />
                    <GoogleMap onMarkerClick={this.onMarkerClick}/>
                    <ShowPost comments={this.state.comments}/>
                    <ShowMembers />
                    <SignOut />
                </div>}
                {!this.state.logged && !this.state.signup && <div><SignIn handleLoggedIn={this.handleLoggedIn} /> 
                <button className='register' onClick={() => this.signUpTrue()}>Register</button></div>}
                {!this.state.logged && this.state.signup && <div><SignUp handleLoggedIn={this.handleLoggedIn} /></div>}

            </div>
        )
    }
}

//Plan: add Google map in this file with nested React Router

export default App;