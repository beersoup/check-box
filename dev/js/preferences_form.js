import React from 'react';
import { Component } from 'react';


export default class PreferencesForm extends Component {
    render() {
        return (
            <div className="preferences-form-control col-8">
                <form className="preferences-form">
                    <div className="form-row">
                        <div className="cooking-skill-content">
                            <span>Cooking Skill</span>
                            <div className="col-right">
                                <label className="checkbox-inline skill">
                                    <input type="checkbox" value="" />Advanced
                                </label>
                                <label className="checkbox-inline skill">
                                    <input type="checkbox" value="" />Intermediate
                                </label>
                                <label className="checkbox-inline skill">
                                    <input type="checkbox" value="" />Amateur
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="form-row">
                        <div className="cooking-skill-content">
                            <span>Time to cook</span>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="form-row">
                        <div className="diets-content">
                            <span>Diets</span>
                            <div className="col-right">
                                <label className="checkbox-inline diets">
                                    <input type="checkbox" value="" />Lacto Vegetarian
                                </label>
                                <label className="checkbox-inline diets">
                                    <input type="checkbox" value="" />Ovo Vegetarian
                                </label>
                            </div>
                            <span>&nbsp;</span>
                            <div className="col-right">
                                <label className="checkbox-inline diets">
                                    <input type="checkbox" value="" />Lacto Vegetarian
                                </label>
                                <label className="checkbox-inline diets">
                                    <input type="checkbox" value="" />Ovo Vegetarian
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                </form>
            </div>
        );
    }
}

