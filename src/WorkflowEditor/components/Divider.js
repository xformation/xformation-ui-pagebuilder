import React, { Component } from 'react';

export class Divider extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            dividerContent: false,
            shownDivider: 0,
            showEditorPanel: false,
            showEditorPanelTab: 0,
            title: "Heading",
            name: 'text',
            value: '',
            placeHolder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            isActive: false
        }
    };

    showDividerContent = () => {
        const { dividerContent } = this.state;
        this.setState({ dividerContent: !dividerContent });
    }

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        const { showEditorPanel } = this.state;
        this.setState({ showEditorPanel: !showEditorPanel });
    }

    dividerMouseOver = (index) => {
        this.setState({ shownDivider: index });
    }

    dividerMouseOut = () => {
        this.setState({ shownDivider: 0 });
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
        const { dividerContent, shownDivider, showEditorPanel, showEditorPanelTab } = this.state;
        return (
            <div className="d-flex content">
                <div className="col-8 pl-0">
                    <div className="d-flex flex-row flex-wrap text-center left-content">
                        <div className="d-block w-100 mt-3 divider"></div>
                    </div>
                </div>
                <div className="col-4 pr-0">
                    <div className="d-flex flex-row-reverse right-content">
                        <div className="paragraph-content">
                            <div className="paragraph-toggle" onClick={this.showDividerContent}>
                                {`Divider`} <i className="fas fa-caret-down"></i>
                            </div>
                            {dividerContent === true &&
                                <div className="paragraph-contents">
                                    <div className="paragraph-content-left">
                                        {shownDivider === 0 &&
                                            <div className="d-flex h-100 align-items-center justify-content-center">
                                                <div className="d-block w-100 divider"></div>
                                            </div>
                                        }
                                        {shownDivider === 1 &&
                                            <div className="d-flex h-100 align-items-center justify-content-center">

                                            </div>
                                        }
                                    </div>
                                    <ul>
                                        <li onMouseOver={() => this.dividerMouseOver(0)} onMouseOut={this.dividerMouseOut} className={shownDivider === 0 && 'active'}>
                                            {`Divider`}
                                        </li>
                                        <li onMouseOver={() => this.dividerMouseOver(1)} onMouseOut={this.dividerMouseOut} className={shownDivider === 1 && 'active'}>
                                            {`Spacer`}
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