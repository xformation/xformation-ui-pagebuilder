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
            ListingData: [
                { value: 'Phasellus vestibulum nulla a mi mattis, in fringilla elit sodales.', isDelete: false },
                { value: 'Duis ullamcorper massa tincidunt, euismod tortor et, mollis erat.', isDelete: false },
                { value: 'Pellentesque lobortis nisi ut dolor laoreet sollicitudin et vitae justo..', isDelete: false },
                { value: 'Mauris maximus lorem vitae neque pellentesque, sit amet aliquam turpis feugiat.', isDelete: false },
                // { value: 'Nullam vehicula justo sit amet sodales maximus.', isDelete: false }
            ],
            padding_top: 0,
            padding_bottom: 0,
            isActive: false
        }
    };

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

    displayListing = () => {
        const { ListingData } = this.state;
        let retData = [];
        if (ListingData) {
            for (let i = 0; i < ListingData.length; i++) {
                retData.push(
                    <li>
                        <span>{i + 1}</span>
                        <p>{ListingData[i].value}</p>
                    </li>
                )
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
        // this.props.setPropertiesData(formContent, this.props.location);
    }

    render() {
        const { listContent, shownList, showEditorPanel, showEditorPanelTab, padding_top, padding_bottom } = this.state;
        return (
            <div className={`d-flex content pt-${padding_top} pb-${padding_bottom}`}>
                <div className='col-8 pl-0'>
                    <div className="d-flex flex-row flex-wrap left-content">
                        <ul>
                            {this.displayListing()}
                        </ul>
                    </div>
                </div>
                <div className="col-4 pr-0">
                    <div className="d-flex flex-row-reverse right-content">
                        <div className="paragraph-content">
                            <div className="paragraph-toggle" onClick={this.showListContent}>
                                Numbered List <i className="fas fa-caret-down"></i>
                            </div>
                            {listContent === true &&
                                <div className="paragraph-contents">
                                    <div className="paragraph-content-left">
                                        {shownList === 0 &&
                                            <div className="numbered-list">
                                                <ul>
                                                    <li>
                                                        <span>1</span>
                                                        <p>Phasellus vestibulum nulla a mi mattis, in fringilla elit sodales.</p>
                                                    </li>
                                                    <li>
                                                        <span>2</span>
                                                        <p>Duis ullamcorper massa tincidunt, euismod tortor et, mollis erat.</p>
                                                    </li>
                                                    <li>
                                                        <span>3</span>
                                                        <p>Pellentesque lobortis nisi ut dolor laoreet sollicitudin et vitae justo.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        }
                                        {shownList === 1 &&
                                            <div className="bulleted-list">
                                                <ul>
                                                    <li>
                                                        <span></span>
                                                        <p>Phasellus vestibulum nulla a mi mattis, in fringilla elit sodales.</p>
                                                    </li>
                                                    <li>
                                                        <span></span>
                                                        <p>Duis ullamcorper massa tincidunt, euismod tortor et, mollis erat.</p>
                                                    </li>
                                                    <li>
                                                        <span></span>
                                                        <p>Pellentesque lobortis nisi ut dolor laoreet sollicitudin et vitae justo.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        }
                                        {shownList === 2 &&
                                            <div className="checkbox-list">
                                                <ul>
                                                    <li>
                                                        <span></span>
                                                        <p>Phasellus vestibulum nulla a mi mattis, in fringilla elit sodales.</p>
                                                    </li>
                                                    <li>
                                                        <span></span>
                                                        <p>Duis ullamcorper massa tincidunt, euismod tortor et, mollis erat.</p>
                                                    </li>
                                                    <li>
                                                        <span></span>
                                                        <p>Pellentesque lobortis nisi ut dolor laoreet sollicitudin et vitae justo.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        }
                                    </div>
                                    <ul>
                                        <li onMouseOver={() => this.listMouseOver(0)} onMouseOut={this.listMouseOut} className={shownList === 0 && 'active'}>
                                            Numbered List
                                        </li>
                                        <li onMouseOver={() => this.listMouseOver(1)} onMouseOut={this.listMouseOut} className={shownList === 1 && 'active'}>
                                            Bulleted List
                                        </li>
                                        <li onMouseOver={() => this.listMouseOver(2)} onMouseOut={this.listMouseOut} className={shownList === 2 && 'active'}>
                                            Checkbox List
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
                {/* <div className={`${showEditorPanel === true ? 'editor-panel show' : 'editor-panel'}`}>
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
                                        <p><span>List item</span></p>
                                        <p><span>1</span></p>
                                        <div className="d-flex justify-content-between">
                                            <p>Phasellus vestibulum nulla a mi mattis, in fringilla elit sodales.</p>
                                            <i className="fal fa-trash"></i>
                                        </div>
                                    </div>
                                    <div className="tab-content mb-3">
                                        <p><span>List item</span></p>
                                        <p><span>2</span></p>
                                        <div className="d-flex justify-content-between">
                                            <p>Duis ullamcorper massa tincidunt, euismod tortor et, mollis erat.</p>
                                            <i className="fal fa-trash"></i>
                                        </div>
                                    </div>
                                    <div className="tab-content mb-3">
                                        <p><span>List item</span></p>
                                        <p><span>3</span></p>
                                        <div className="d-flex justify-content-between">
                                            <p>Pellentesque lobortis nisi ut dolor laoreet sollicitudin et vitae justo.</p>
                                            <i className="fal fa-trash"></i>
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
            */}
            </div>
        );
    }
}