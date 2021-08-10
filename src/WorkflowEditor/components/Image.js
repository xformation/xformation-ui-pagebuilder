import React, { Component } from 'react';
import verticalImage from '../img/vertical-image.png';
import horizontalImage from '../img/horizontal-image.png';

export class Image extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            imageContent: false,
            shownImage: 0,
            showEditorPanel: false,
            showEditorPanelTab: 0,
            title: "Heading",
            name: 'text',
            value: '',
            placeHolder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            isActive: false
        }
    };

    showImageContent = () => {
        const { imageContent } = this.state;
        this.setState({ imageContent: !imageContent });
    }

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        const { showEditorPanel } = this.state;
        this.setState({ showEditorPanel: !showEditorPanel });
    }

    listMouseOver = (index) => {
        this.setState({ shownImage: index });
    }

    listMouseOut = () => {
        this.setState({ shownImage: 0 });
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
        const { imageContent, shownImage, showEditorPanel, showEditorPanelTab } = this.state;
        return (
            <div className="d-flex content">
                <div className="col-8 pl-0">
                    <div className="d-flex align-items-center justify-content-center left-content">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-6">
                                <img src={verticalImage} alt="" />
                            </div>
                            <div className="col-6">
                                <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 pr-0">
                    <div className="d-flex flex-row-reverse right-content">
                        <div className="paragraph-content">
                            <div className="paragraph-toggle" onClick={this.showImageContent}>
                                Image Full Width <i className="fas fa-caret-down"></i>
                            </div>
                            {imageContent === true &&
                                <div className="paragraph-contents">
                                    <div className="paragraph-content-left">
                                        {shownImage === 0 &&
                                            <div className="image-centered">
                                                <img src={horizontalImage} alt="" />
                                            </div>
                                        }
                                        {shownImage === 1 &&
                                            <div className="image-full-width">
                                                <img src={horizontalImage} alt="" />
                                            </div>
                                        }
                                        {shownImage === 2 &&
                                            <div className="image-text">
                                                <div className="row align-items-center justify-content-center">
                                                    <div className="col-6">
                                                        <img src={verticalImage} alt="" />
                                                    </div>
                                                    <div className="col-6 pl-0">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        {shownImage === 3 &&
                                            <div className="carousel">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="col-1 px-0 text-center">
                                                        <i className="far fa-angle-left"></i>
                                                    </div>
                                                    <div className="col-10 px-0 text-center">
                                                        <img src={horizontalImage} alt="" />
                                                    </div>
                                                    <div className="col-1 px-0 text-center">
                                                        <i className="far fa-angle-right"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center carousel-bullets">
                                                    <span className="active"></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                        }
                                        {shownImage === 4 &&
                                            <div className="text-on-image">
                                                <img src={horizontalImage} alt="" />
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <ul>
                                        <li onMouseOver={() => this.listMouseOver(0)} onMouseOut={this.listMouseOut} className={shownImage === 0 && 'active'}>
                                            Image Centered
                                        </li>
                                        <li onMouseOver={() => this.listMouseOver(1)} onMouseOut={this.listMouseOut} className={shownImage === 1 && 'active'}>
                                            Image Full Width
                                        </li>
                                        <li onMouseOver={() => this.listMouseOver(2)} onMouseOut={this.listMouseOut} className={shownImage === 2 && 'active'}>
                                            {`Image & Text`}
                                        </li>
                                        <li onMouseOver={() => this.listMouseOver(3)} onMouseOut={this.listMouseOut} className={shownImage === 3 && 'active'}>
                                            Carousel
                                        </li>
                                        <li onMouseOver={() => this.listMouseOver(4)} onMouseOut={this.listMouseOut} className={shownImage === 4 && 'active'}>
                                            Text on Image
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