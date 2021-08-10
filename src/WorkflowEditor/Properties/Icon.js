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

    showEditorPanel = () => {
        this.props.showhideProperties();
    }

    render() {
        const { iconContent, shownIcon, showEditorPanel, showEditorPanelTab } = this.state;
        return (
            <div className='editor-panel show'>
                <div className="d-flex justify-content-between panel-heading">
                    <h5>Edit Numbered List</h5>
                    <i className="fal fa-times" onClick={this.showEditorPanel}></i>
                </div>
                <div className="panel-tabs">
                    <ul>
                        <li onClick={() => this.showEditorPanelTab(0)} className={showEditorPanelTab === 0 && 'active'}>CONTENT</li>
                        <li onClick={() => this.showEditorPanelTab(1)} className={showEditorPanelTab === 1 && 'active'}>SETTINGS</li>
                    </ul>
                    <div className="panel-tab-contents">
                        {showEditorPanelTab === 0 &&
                            <>
                                <div className="tab-content mb-3">
                                    <p><span>1</span></p>
                                    <div className="d-flex justify-content-between">
                                        <div className="row">
                                            <div className="col-6">
                                                <p><span>Image</span></p>
                                                <div className="row align-items-center justify-content-center">
                                                    <div className="col-6">
                                                        <p>
                                                            <img src={iconImage} alt="" className="w-50" />
                                                        </p>
                                                        <p><span>video.mp4</span></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <button className="btn edit-btn float-right">
                                                            <i className="fal fa-pen"></i>
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <p><span>Text</span></p>
                                                <div className="row align-items-center justify-content-center">
                                                    <div className="col-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt</p>
                                                    </div>
                                                    <div className="col-2 pl-0">
                                                        <i className="fal fa-trash float-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content mb-3">
                                    <p><span>2</span></p>
                                    <div className="d-flex justify-content-between">
                                        <div className="row">
                                            <div className="col-6">
                                                <p><span>Image</span></p>
                                                <div className="row align-items-center justify-content-center">
                                                    <div className="col-6">
                                                        <p>
                                                            <img src={iconImage} alt="" className="w-50" />
                                                        </p>
                                                        <p><span>video.mp4</span></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <button className="btn edit-btn float-right">
                                                            <i className="fal fa-pen"></i>
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <p><span>Text</span></p>
                                                <div className="row align-items-center justify-content-center">
                                                    <div className="col-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt</p>
                                                    </div>
                                                    <div className="col-2 pl-0">
                                                        <i className="fal fa-trash float-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content mb-3">
                                    <p><span>3</span></p>
                                    <div className="d-flex justify-content-between">
                                        <div className="row">
                                            <div className="col-6">
                                                <p><span>Image</span></p>
                                                <div className="row align-items-center justify-content-center">
                                                    <div className="col-6">
                                                        <p>
                                                            <img src={iconImage} alt="" className="w-50" />
                                                        </p>
                                                        <p><span>video.mp4</span></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <button className="btn edit-btn float-right">
                                                            <i className="fal fa-pen"></i>
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <p><span>Text</span></p>
                                                <div className="row align-items-center justify-content-center">
                                                    <div className="col-10">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt</p>
                                                    </div>
                                                    <div className="col-2 pl-0">
                                                        <i className="fal fa-trash float-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-link add-new-item"><i class="far fa-plus"></i> Add New Item</button>
                                </div>
                            </>
                        }
                        {showEditorPanelTab === 1 &&
                            <div className="tab-settings">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Padding Top</label>
                                            <select className="form-control">
                                                <option>10px</option>
                                                <option>20px</option>
                                                <option>30px</option>
                                                <option>40px</option>
                                                <option>50px</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Padding Bottom</label>
                                            <select className="form-control">
                                                <option>10px</option>
                                                <option>20px</option>
                                                <option>30px</option>
                                                <option>40px</option>
                                                <option>50px</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Background Color</label>
                                            <div className="d-flex background">
                                                <span></span>
                                                <p>#FFFFFF</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}