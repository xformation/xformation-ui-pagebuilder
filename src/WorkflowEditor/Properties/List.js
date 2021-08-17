import React, { Component } from 'react';

export class List extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            listContent: false,
            shownList: 0,
            showEditorPanel: false,
            showEditorPanelTab: 0,
            isActive: false,
            formContent: {
                ListingData: [],
                padding_bottom: '',
                padding_top: ''
            }
        }
    };

    componentDidMount() {
        const { properties } = this.props;
        const { formContent } = this.state;
        const { ListingData, padding_bottom, padding_top } = properties;
        if (properties) {
            formContent.ListingData = ListingData;
            formContent.padding_bottom = padding_bottom;
            formContent.padding_top = padding_top;
            this.setState({
                formContent,
            });
        }
    }

    showListContent = () => {
        const { listContent } = this.state;
        this.setState({ listContent: !listContent });
    }

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        const { showEditorPanel } = this.state;
        this.setState({ showEditorPanel: !showEditorPanel });
    }

    listMouseOver = (index) => {
        this.setState({ shownList: index });
    }

    listMouseOut = () => {
        this.setState({ shownList: 0 });
    }

    showEditorPanelTab = (index) => {
        this.setState({ showEditorPanelTab: index });
    }

    setIsActive = (isActive) => {
        this.setState({
            isActive
        });
    }

    showEditorPanel = () => {
        this.props.showhideProperties();
    }

    displayListing = () => {
        const { formContent } = this.state;
        let retData = [];
        if (formContent.ListingData) {
            for (let i = 0; i < formContent.ListingData.length; i++) {
                let row = formContent.ListingData[i];
                retData.push(
                    <div className="tab-content mb-3">
                        <p><span>List item</span></p>
                        <p><span>{i + 1}</span></p>
                        <div className="d-flex justify-content-between">
                            <input type="text" value={row.value} onChange={(e) => this.handleStateChange(e, i)} />
                            <i onClick={() => this.removeListing(i)} className="fal fa-trash"></i>
                        </div>
                    </div>
                )
            }
        }
        return retData;
    }

    handleStateChange = (e, index) => {
        const { value } = e.target;
        const { formContent } = this.state;
        formContent.ListingData[index].value = value;
        this.setState({
            formContent,
        });
        this.props.onChangeContent(formContent);
    }

    removeListing = (index) => {
        const { formContent } = this.state;
        formContent.ListingData.splice(index, 1);
        this.setState({
            formContent
        });
        this.props.onChangeContent(formContent);
    }

    addNewList = () => {
        let { formContent } = this.state;
        formContent.ListingData.push({ value: '', isDelete: false });
        this.setState({
            formContent,
        });
        this.props.onChangeContent(formContent);
    }

    handleStateChangePadding = (e) => {
        const { value, name } = e.target;
        const { formContent } = this.state;
        formContent[name] = value;
        this.setState({
            formContent
        });
        this.props.onChangeContent(formContent);
    }

    render() {
        const { listContent, shownList, showEditorPanel, showEditorPanelTab } = this.state;
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
                                {this.displayListing()}
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-link add-new-item" onClick={this.addNewList}><i class="far fa-plus"></i> Add New Item</button>
                                </div>
                            </>
                        }
                        {showEditorPanelTab === 1 &&
                            <div className="tab-settings">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Padding Top</label>
                                            <select className="form-control" name="padding_top" onChange={this.handleStateChangePadding}>
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
                                            <select className="form-control" name="padding_bottom" onChange={this.handleStateChangePadding}>
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