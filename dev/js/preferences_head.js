import React from 'react';
import { Component } from 'react';

export default class PreferencesHead extends Component {
    render() {
        return (
            <div className="preferences-head col-12">
                <ul className="list-preferences col-8">
                    <li><a>Profile</a></li>
                    <li><a>Preferences</a></li>
                </ul>
                <div className="horizontal-line col-12"></div>
            </div>
        );
    }

}
