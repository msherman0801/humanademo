import React from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src="logo.png" width="250" class="d-inline-block align-top" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/myplans"><a class="nav-link">My Plans</a></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar