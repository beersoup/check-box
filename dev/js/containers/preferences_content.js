import React from 'react';
import { Component } from 'react';
import PreferencesHead from './preferences_head';
import PreferencesForm from './preferences_form';

export default class PreferencesContent extends Component {
    render() {
        return (
            <div className="col-12">
                <PreferencesHead />
                <PreferencesForm />
            </div>
        );
    }
}

