import React, { Component } from 'react';
import iconImage from '../img/icon-image.png';

export class Icon extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            iconContent: false,
            shownIcon: 2,
            showEditorPanel: false,
            showEditorPanelTab: 0,
            title: "Heading",
            name: 'text',
            value: '',
            placeHolder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            isActive: false
        }
    };

    showIconContent = () => {
        const { iconContent } = this.state;
        this.setState({ iconContent: !iconContent });
    }

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        const { showEditorPanel } = this.state;
        this.setState({ showEditorPanel: !showEditorPanel });
    }

    iconMouseOver = (index) => {
        this.setState({ shownIcon: index });
    }

    iconMouseOut = () => {
        this.setState({ shownIcon: 2 });
    }

    showEditorPanelTab = (index) => {
        this.setState({ showEditorPanelTab: index });
    }

    setProperties = (sendData) => {
        const { title, placeHolder, name, value } = this.state;
        const { type } = this.props;
        const properties = {
            type,
            title: title,
            name: name,
            placeHolder: placeHolder,
            value: value,
            ...sendData
        };
        this.props.setPropertiesData(properties, this.props.location);
        this.setIsActive(true);
    }

    setIsActive = (isActive) => {
        this.setState({
            isActive
        });
    }

    render() {
        const { iconContent, shownIcon, showEditorPanel, showEditorPanelTab } = this.state;
        return (
            <div className="d-flex content">
                <div className="col-8 pl-0">
                    <div className="d-flex flex-row flex-wrap text-center left-content">
                        <div className="row">
                            <div className="col-4">
                                <p><img src={iconImage} alt="" className="mb-2 w-50" /></p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="col-4">
                                <p><img src={iconImage} alt="" className="mb-2 w-50" /></p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="col-4">
                                <p><img src={iconImage} alt="" className="mb-2 w-50" /></p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 pr-0">
                    <div className="d-flex flex-row-reverse right-content">
                        <div className="paragraph-content">
                            <div className="paragraph-toggle" onClick={this.showIconContent}>
                                {`Column Icon & Text`} <i className="fas fa-caret-down"></i>
                            </div>
                            {iconContent === true &&
                                <div className="paragraph-contents">
                                    <div className="paragraph-content-left">
                                        {shownIcon === 0 &&
                                            <div className="d-block text-center column-list">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p><img src={iconImage} alt="" className="mb-2 w-50" /></p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {shownIcon === 1 &&
                                            <div className="d-block text-center column-list">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p><img src={iconImage} alt="" className="mb-2 w-50" /></p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p><img src={iconImage} alt="" className="mb-2 w-50" /></p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {shownIcon === 2 &&
                                            <div className="d-block text-center column-list">
                                                <div className="d-flex">
                                                    <div className="col-4 pl-0">
                                                        <p><img src={iconImage} alt="" className="mb-2 w-50" /></p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                    </div>
                                                    <div className="col-4 pl-0">
                                                        <p><img src={iconImage} alt="" className="mb-2 w-50" /></p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                    </div>
                                                    <div className="col-4 pl-0">
                                                        <p><img src={iconImage} alt="" className="mb-2 w-50" /></p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <ul>
                                        <li onMouseOver={() => this.iconMouseOver(0)} onMouseOut={this.iconMouseOut} className={shownIcon === 0 && 'active'}>
                                            {`Icon & Text`}
                                        </li>
                                        <li onMouseOver={() => this.iconMouseOver(1)} onMouseOut={this.iconMouseOut} className={shownIcon === 1 && 'active'}>
                                            {`2 Column Icon & Text`}
                                        </li>
                                        <li onMouseOver={() => this.iconMouseOver(2)} onMouseOut={this.iconMouseOut} className={shownIcon === 2 && 'active'}>
                                            {`3 Column Icon & Text`}
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="editor-buttons">
                            <i className="fal fa-arrow-down"></i>
                            <i className="fal fa-copy"></i>
                            <i className="fal fa-trash" onClick={this.clearContent}></i>
                            <i className="fal fa-pen" onClick={() => this.setProperties({})}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}