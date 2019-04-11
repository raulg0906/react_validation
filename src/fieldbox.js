import React, {Component} from 'react';
import './fieldbox.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import submitted from './submitted'
import validator from 'validator'




class fieldBox extends Component{
    state ={
        name:'',
        nameError: '',
        nameClass:'',
        email:'',
        emailError:'',
        emailClass:'',
        user:'',
        userError:'',
        userClass:'',
        password:'',
        passwordError:'',
        passwordClass:'',
        cpassword:'',
        cpasswordError:'',
        cpasswordClass:'',
        website:'',
        websiteError:'',
        websiteClass:''


    }

    handleChange= (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

        handleSubmit = (e) => {
            e.preventDefault()
            let valid = true

            if (this.state.name !==''){
                this.setState({
                    nameError:'',
                    nameClass:''
                })
            }else{
                valid = false
                this.setState({
                    nameError:"-Cannot be blank",
                    nameClass:'error'
                })
            }

            if(validator.isEmail(this.state.email)){
                this.setState({
                    emailError:'',
                    emailClass:''
                })
            }else{
                valid = false
                this.setState({
                    emailError:"-Please enter a valid email address",
                    emailClass: "error"
                })
            }

            if (this.state.user !==''){
                this.setState({
                    userError:'',
                    userClass:''
                })
            }else{
                valid = false
                this.setState({
                    userError:"-Pick a valid Username",
                    userClass:'error'
                })
            }

            if (this.state.password !==''){
                this.setState({
                    passwordError:'',
                    passwordClass:''
                })
            }else{
                valid = false
                this.setState({
                    passwordError:"-Choose a valid Password",
                    passwordClass:'error'
                })
            }

            if (this.state.cpassword !==''){
                this.setState({
                    cpasswordError:'',
                    cpasswordClass:''
                })
            }else{
                valid = false
                this.setState({
                    cpasswordError:"-Choose a valid Password",
                    cpasswordClass:'error'
                })
            }


            if (this.state.website !==''){
                this.setState({
                    websiteError:'',
                    websiteClass:''
                })
            }else{
                valid = false
                this.setState({
                    websiteError:"-Please Enter a valid website",
                    websiteClass:'error'
                })
            }



            if(valid) {
                this.props.history.push('/submitted')
            }
           
    }
    render(){
        return(
            <div className="fieldbox">
                <label className="title">Profile Form - All Fields Required </label>
                <form className="form" onSubmit={this.handleSubmit}> 
                    <label htmlFor='name' className={this.state.nameClass}>
                         Name{this.state.nameError}
                    </label>
                    <input 
                           className={this.state.nameClass}
                           type="text" 
                           name='name' 
                           id='name' 
                           onChange={this.handleChange} 
                           value={this.state.name}/>

                    <label htmlFor='email' className={this.state.emailClass}>
                         Email{this.state.emailError}
                    </label>
                    <input 
                           className={this.state.emailClass}
                           type="text" 
                           name='email' 
                           id='email' 
                           onChange={this.handleChange} 
                           value={this.state.email}/>

                    <label htmlFor='user' className={this.state.userClass}>
                         Username{this.state.userError}
                    </label>
                    <input 
                           className={this.state.userClass}
                           type="text" 
                           name='user' 
                           id='user' 
                           onChange={this.handleChange} 
                           value={this.state.user}/>

                    <label htmlFor='password' className={this.state.passwordClass}>
                         Password{this.state.passwordError}
                    </label>
                    <input 
                           className={this.state.passwordClass}
                           type="password" 
                           name='password' 
                           id='password' 
                           onChange={this.handleChange} 
                           value={this.state.password}/>

                    <label htmlFor='cpassword' className={this.state.cpasswordClass}>
                         Confirm password{this.state.cpasswordError}
                    </label>
                    <input 
                           className={this.state.cpasswordClass}
                           type="password" 
                           name='cpassword' 
                           id='cpassword' 
                           onChange={this.handleChange} 
                           value={this.state.cpassword}/>

                    <label htmlFor='website' className={this.state.websiteClass}>
                         Website{this.state.websiteError}
                    </label>
                    <input 
                           className={this.state.websiteClass}
                           type="text" 
                           name='website' 
                           id='website' 
                           onChange={this.handleChange} 
                           value={this.state.website}/>
                
                    <button type ="submit" className="submitbutton">Submit</button>
                </form>
            </div>
        )
    }
}

export default fieldBox;