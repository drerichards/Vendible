import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hideModal, onLogout } from '../actions/index'
import './css/NavBar.css'
import icon from '../images/shopping-icon.png'

class NavBar extends Component {
    renderContent() {
        switch (!this.props.auth.id) {
            case null:
                return
            case false:
                let email = this.props.auth.email.replace('@gmail.com', '')
                return <div onClick={() => this.props.dispatch(hideModal())}>
                    <a className='shopcart' href='/shopping_cart'>
                        <img src={icon} alt='cart' /> {this.props.cart.length} item(s)</a>
                    <p className='userName'>Signed in as: {email}</p>
                    <button type='button' className='btn btn-secondary' onClick={() => this.props.dispatch(onLogout())}>
                        Logout</button>
                </div>
            default:
                return <div>
                    <p>Use Email: "vendible.login@gmail.com"</p>
                    <p>Password: "vendible"</p>
                    <a href='https://stormy-fortress-32507.herokuapp.com/auth/google'>
                        <button type='button' className='btn btn-primary'>
                            Google Sign In</button></a>
                </div>
        }
    }
    closeModal(e) {
        e.preventDefault()
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        return (
            <div className='nav-position'>
                <nav className='navbar navbar-expand-lg navbar-light navigation'>
                    <a className='navbar-brand' style={{ color: '#C2E812' }} href='/' onClick={() => this.props.dispatch(hideModal())}>Vendible</a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        {!this.props.auth.id ? <div></div> :
                            <ul id='navlink' className='navbar-nav mr-auto' onClick={() => this.props.dispatch(hideModal())}>
                                <li className='nav-item'><a className='nav-link' href="/departments">Shop Departments</a></li>
                            </ul>
                        }
                        <div className='right'>{this.renderContent()}</div>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = state => ({ auth: state.auth, cart: state.cart })
export default connect(mapStateToProps)(NavBar)
