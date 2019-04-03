import React, { Component } from 'react';
import {Link} from 'react-router'
export class SideNavBar extends Component {
    render() {
        return (
            <div className="side-nav">
                
                <ul>
                    <li><Link activeClassName='is-active' to="/r/cats" >Cats</Link></li>
                    <li><Link activeClassName='is-active' to="/r/alternativeart"> Alternative Art</Link></li>
                    <li><Link activeClassName='is-active' to="/r/pics"> Pics</Link></li>
                    <li><Link activeClassName='is-active' to="/r/gifs">gifs</Link></li>
                    <li><Link activeClassName='is-active' to="/r/photoshopbattles">Photoshop Battles</Link></li>
                </ul>
            </div>
        );
    }
}

export default SideNavBar;