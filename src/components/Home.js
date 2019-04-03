import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderNavigation from './HeaderNavigation';
import PropTypes from 'prop-types';

class Home extends Component {

    static propTypes = {
        location: PropTypes.object.isRequired,
        params: PropTypes.object,
    }
    render() {
        return (
            <div>
                <HeaderNavigation {...this.props} />
                <div className="container">
                    {React.cloneElement(this.props.children, { ...this.props })}
                </div>
            </div>

        );
    }
}

export default Home;