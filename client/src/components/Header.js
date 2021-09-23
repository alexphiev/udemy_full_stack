import React, {Component} from 'react'
import {connect} from "react-redux";

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return null;
            case false:
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default:
                if (this.props.auth.googleId) {
                    return (
                        <>
                            <li><a href="/">New Survey</a></li>
                            <li><a href="/api/logout">Logout</a></li>
                        </>
                    );
                }
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="left brand-logo">Project</a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(Header);