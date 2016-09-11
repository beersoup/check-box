import React from 'react';
import { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {skillchecked, dietschecked} from '../actions/checked_box';



class PreferencesForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log('Submit')
    }
        
    
    dietsBelowLists() {
        return this.props.dietsBelowOptions.map((dietsBelowOption) => {
            return (
                <div className="preferences-row" key={dietsBelowOption.id}>
                    <div className="checkbox diets-option">
                        <input id={dietsBelowOption.inputId} type="checkbox" />
                        <label htmlFor={dietsBelowOption.inputId}>
                            {dietsBelowOption.option}
                        </label>
                    </div>
                </div>
            );
        })
    }

    dietsOptionLists() {
        return this.props.dietsOptions.map((dietsOption) => {
           return(
               <div className="preferences-row" 
                    key={dietsOption.id}
                    onClick={() => this.props.dietschecked(dietsOption)}>
                   <div className="checkbox diets-option">
                       <input id={dietsOption.inputId} type="checkbox" />
                       <label htmlFor={dietsOption.inputId}>
                           {dietsOption.option}
                       </label>
                   </div>
               </div>
           ); 
        })
    }

    skillOptionLists() {
        return this.props.cookingSkillOptions.map((cookingSkilloption) => {
            let refref = cookingSkilloption.ref;
            console.log(refref)
            return (
                <div className="checkbox skill-option"
                     key={cookingSkilloption.id}
                     onClick={() => this.props.skillchecked(cookingSkilloption)}>
                    <input id={cookingSkilloption.inputId} 
                           type="radio" name="skill"
                            ref={cookingSkilloption.ref} />
                    <label htmlFor={cookingSkilloption.inputId}>
                        {cookingSkilloption.option}
                    </label>
                </div>
            );
        });
    }
    render() {
        return (
        <div className="preferences-form-control col-8">
                <form className="preferences-form col-12" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="preferences-row">
                        <div className="cooking-skill-content col-12">
                            <div className="preferences-col-left pref-category">Cooking Skill</div>
                            <div className="preferences-col-right">
                                {this.skillOptionLists()}
                            </div>
                        </div>
                    </div>
                    <div className="preferences-row">
                        <div className="time-to-cook-content col-12">
                            <div className="preferences-col-left pref-category">Time to cook</div>
                            <div className="preferences-col-right">hthdgh</div>
                        </div>
                    </div>
                    <div className="preferences-row">
                        <div className="diets-content col-12">
                            <div className="preferences-col-left pref-category">Diets</div>
                            <div className="preferences-col-right">
                                {this.dietsOptionLists()}
                            </div>
                        </div>
                    </div>
                    <div className="preferences-row">
                        <div className="diets-content col-12">
                            <div className="preferences-col-left pref-category empty-text"></div>
                            <div className="preferences-col-right">
                                <div className="height-box"></div>
                                {this.dietsBelowLists()}
                            </div>
                        </div>
                    </div>
                    <div className="preferences-row">
                        <div className="avoid-content col-12">
                            <div className="preferences-col-left pref-category">Avoidances</div>
                            <div className="preferences-col-right">
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn-preferences">Save settings</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cookingSkillOptions: state.cookingSkillOptions,
        dietsOptions: state.dietsOptions,
        dietsBelowOptions: state.dietsBelowOptions
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {skillchecked: skillchecked, dietschecked: dietschecked}
        , dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PreferencesForm);
