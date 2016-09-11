import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';

class PreferencesJson extends Component {
    render() {
        let skillData = [];
        skillData[0]= this.props.activeSkill;
        return (
            <div>
                <pre>
                    {JSON.stringify(skillData,null,'')}
                </pre>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        activeSkill: state.activeSkill
    };
}
export default connect(mapStateToProps)(PreferencesJson);