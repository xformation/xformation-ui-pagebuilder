import React, { Component } from 'react';
import horizontalImage from '../img/horizontal-image.png';

export class Video extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            showEditorPanel: false,
            showEditorPanelTab: 0,
            formContent: {
                padding_bottom: '',
                padding_top: '',
                url: '',
                placeHolder: '',
                description: '',
            },
        }
    };

    componentDidMount() {
        const { properties } = this.props;
        const { padding_bottom, padding_top, url, description, placeHolder } = properties;
        const { formContent } = this.state;
        if (properties) {
            formContent.padding_bottom = padding_bottom;
            formContent.padding_top = padding_top;
            formContent.url = url;
            formContent.placeHolder = placeHolder;
            formContent.description = description;
            this.setState({
                formContent
            });
        }
    }

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        this.props.showhideProperties();
    }

    showEditorPanelTab = (index) => {
        this.setState({ showEditorPanelTab: index });
    }

    handleStateChange = (e) => {
        const { value, name } = e.target;
        const { formContent } = this.state;
        formContent[name] = value;
        this.setState({
            formContent
        });
        this.props.onChangeContent(formContent);
    }

    render() {
        const { showEditorPanel, showEditorPanelTab, formContent } = this.state;
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
                                    <input type="text" value={formContent['description']} name="description" placeholder={formContent['placeHolder']} onChange={this.handleStateChange} />
                                </div>
                                <div className="tab-content mb-3">
                                    <p><span>video</span></p>
                                    <div className="d-flex">
                                        <div className="row align-items-center justify-content-center">
                                            <div className="col-9">
                                                <div className="row align-items-center justify-content-center">
                                                    <div className="col-4">
                                                        <input type="text" value={formContent['url']} name="url" onChange={this.handleStateChange} />
                                                    </div>
                                                    <div className="col-8 pl-0">
                                                        <p><span>video.mp4</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col-3">
                                                <button className="btn edit-btn float-right">
                                                    <i className="fal fa-pen"></i>
                                                    Edit
                                                </button>
                                            </div> */}
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
                                            <select className="form-control" name="padding_top" onChange={this.handleStateChange}>
                                                <option value="1">1px</option>
                                                <option value="2">2px</option>
                                                <option value="3">3px</option>
                                                <option value="4">4px</option>
                                                <option value="5">5px</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Padding Bottom</label>
                                            <select className="form-control" name="padding_bottom" onChange={this.handleStateChange}>
                                                <option value="1">1px</option>
                                                <option value="2">2px</option>
                                                <option value="3">3px</option>
                                                <option value="4">4px</option>
                                                <option value="5">5px</option>
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