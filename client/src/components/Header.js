import React, {Component} from 'react'

class Header extends Component {
    render () {
        return  (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">Project</a>
                    <ul className="right">
                        <li><a href="">Login with Google</a></li>
                        <li><a href="">New Survey</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;