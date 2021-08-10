import React, { Component } from 'react';
import horizontalImage from '../img/horizontal-image.png';

export class Video extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            showEditorPanel: false,
            showEditorPanelTab: 0
        }
    };

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        const { showEditorPanel } = this.state;
        this.setState({ showEditorPanel: !showEditorPanel });
    }

    showEditorPanelTab = (index) => {
        this.setState({ showEditorPanelTab: index });
    }

    render() {
        const { showEditorPanel, showEditorPanelTab } = this.state;
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
                                    <p><span>Text Caption</span></p>
                                    <p>Enter text caption here</p>
                                </div>
                                <div className="tab-content mb-3">
                                    <p><span>video</span></p>
                                    <div className="d-flex">
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-9">
                                                <div className="row align-items-center justify-content-center">
                                                    <div className="col-4">
                                                        <p>
                                                            <img src={horizontalImage} alt="" />
                                                        </p>
                                                    </div>
                                                    <div className="col-8 pl-0">
                                                        <p><span>video.mp4</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn edit-btn float-right">
                                                    <i className="fal fa-pen"></i>
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
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