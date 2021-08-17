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
            ListingData: [
                { value: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', isDelete: false, icon: iconImage, name: 'video.mp4' },
                { value: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', isDelete: false, icon: iconImage, name: 'video.mp4' },
                { value: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', isDelete: false, icon: iconImage, name: 'video.mp4' },
            ],
            padding_top: 0,
            padding_bottom: 0,
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

    setProperties = () => {
        const { ListingData, padding_top, padding_bottom } = this.state;
        const { type } = this.props;
        const properties = {
            type,
            ListingData: ListingData,
            padding_bottom: padding_bottom,
            padding_top: padding_top,
        };
        this.props.setPropertiesData(properties, this.props.location);
        this.setIsActive(true);
    }

    setIsActive = (isActive) => {
        this.setState({
            isActive
        });
    }

    displayIconList = () => {
        const { ListingData } = this.state;
        let retData = [];
        if (ListingData) {
            for (let i = 0; i < ListingData.length; i++) {
                retData.push(
                    <div className="col-4">
                        <p><img src={iconImage} alt="" className="mb-2 w-50" /></p>
                        <p>
                            {ListingData[i].value}
                        </p>
                    </div>
                );
            }
        }
        return retData;
    }

    changeProperties = (formContent) => {
        const { ListingData, padding_top, padding_bottom } = formContent;
        this.setState({
            ListingData: ListingData,
            padding_top: padding_top,
            padding_bottom: padding_bottom,
        });
    }

    render() {
        const { iconContent, shownIcon, showEditorPanel, showEditorPanelTab, padding_top, padding_bottom } = this.state;
        return (
            <div className={`d-flex content pt-${padding_top} pb-${padding_bottom}`}>
                <div className='col-8 pl-0'>
                    <div className="d-flex flex-row flex-wrap text-center left-content">
                        <div className="row">
                            {this.displayIconList()}
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
                            <i className="fal fa-pen" onClick={() => this.setProperties()}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}