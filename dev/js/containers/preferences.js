import React from 'react';
import { Component } from 'react';
import PreferencesContent from './preferences_content';
import PreferencesJson from './preferences_json';
import MobileNav from './preferences_mobile_nav';

export default class Preferences extends Component {
    render() {
        return (
            <div>
                <MobileNav />
                <PreferencesContent />
                <PreferencesJson />
            </div>
        );
    }

}

