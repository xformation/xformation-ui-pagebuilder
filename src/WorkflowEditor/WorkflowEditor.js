import React, { Component } from 'react';
import './css/workflow.css';
import { Text, List, Image, Video, Icon, Divider, Button, HTMLProperties } from './components';
import { Scrollbars } from 'react-custom-scrollbars';
import { menuIcons } from './img';

export const componentType = {
    TEXT: "text",
    LIST: "list",
    IMAGE: "image",
    VIDEO: "video",
    ICON: "icon",
    DIVIDER: "divider",
    BUTTON: "button"
};

export class WorkflowEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            sidebarData: [
                {
                    title: 'Text',
                    type: componentType.TEXT,
                    value: 'text',
                    iconImg: menuIcons.text
                },
                {
                    title: 'List',
                    type: componentType.LIST,
                    value: 'list',
                    iconImg: menuIcons.list
                },
                {
                    title: 'Image',
                    type: componentType.IMAGE,
                    value: 'image',
                    iconImg: menuIcons.image
                },
                {
                    title: 'Video',
                    type: componentType.VIDEO,
                    value: 'video',
                    iconImg: menuIcons.video
                },
                {
                    title: 'Icon',
                    type: componentType.ICON,
                    value: 'icon',
                    iconImg: menuIcons.icon
                },
                {
                    title: 'Divider',
                    type: componentType.DIVIDER,
                    value: 'divider',
                    iconImg: menuIcons.divider
                },
                {
                    title: 'Button',
                    type: componentType.BUTTON,
                    value: 'button',
                    iconImg: menuIcons.button
                }
            ],
            formDataContent: [],
            formData: {},
            showRightPart: false,
        };
        this.formContentRefs = {};
        this.propertiesRef = React.createRef();
    };

    displaySideBar = () => {
        const { sidebarData } = this.state;
        const sidebarReturnData = [];
        for (let i = 0; i < sidebarData.length; i++) {
            let row = sidebarData[i];
            sidebarReturnData.push(
                <li key={`options-${i}`} onClick={e => this.displayFormContent(row)}>
                    <div className="d-block">
                        <span><img src={row.iconImg} alt={row.title} width="40" height="40" /></span>
                        <p>{row.title}</p>
                    </div>
                </li>
            )
        }
        return sidebarReturnData;
    }

    displayFormContent = (fieldData) => {
        const { formDataContent, activeTab, activeLocation } = this.state;
        const { type } = fieldData;
        const tabContent = formDataContent[activeTab] || [];
        const tabContentRef = this.formContentRefs[activeTab] || [];
        const ref = React.createRef();
        const index = tabContent.length;
        const location = {
            tab: activeTab,
            index: tabContentRef.length
        };
        if (type === componentType.TEXT) {
            tabContent.push(<Text type={type} ref={ref} location={location} key={`comp-${activeTab}-${index}`} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} activeLocation={activeLocation} />);
        } else if (type === componentType.LIST) {
            tabContent.push(<List type={type} ref={ref} location={location} key={`comp-${activeTab}-${index}`} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} activeLocation={activeLocation} />);
        } else if (type === componentType.IMAGE) {
            tabContent.push(<Image type={type} ref={ref} location={location} key={`comp-${activeTab}-${index}`} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} activeLocation={activeLocation} />);
        } else if (type === componentType.VIDEO) {
            tabContent.push(<Video type={type} ref={ref} location={location} key={`comp-${activeTab}-${index}`} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} activeLocation={activeLocation} />);
        } else if (type === componentType.ICON) {
            tabContent.push(<Icon type={type} ref={ref} location={location} key={`comp-${activeTab}-${index}`} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} activeLocation={activeLocation} />);
        } else if (type === componentType.DIVIDER) {
            tabContent.push(<Divider type={type} ref={ref} location={location} key={`comp-${activeTab}-${index}`} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} activeLocation={activeLocation} />);
        } else if (type === componentType.BUTTON) {
            tabContent.push(<Button type={type} ref={ref} location={location} key={`comp-${activeTab}-${index}`} onClickDelete={this.onClickDelete} setPropertiesData={this.setProperty} activeLocation={activeLocation} />);
        }
        tabContentRef.push(ref);
        formDataContent[activeTab] = tabContent;
        this.setState({
            formDataContent,
        });
        this.formContentRefs[activeTab] = tabContentRef;
    }

    displayContent = () => {
        const { formDataContent } = this.state;
        const retData = [];
        for (let i = 0; i < formDataContent.length; i++) {
            retData.push(
                <div className="formDataContent" key={formDataContent[i]}>
                    {formDataContent[i] && formDataContent[i].map(value => value)}
                </div>
            );
        }
        return retData;
    }

    onClickDelete = (location) => {
        const { formDataContent } = this.state;
        if (location) {
            const { tab, index } = location;
            const refs = this.formContentRefs[tab];
            let number = -1;
            for (let i = 0; i < refs.length; i++) {
                if (refs[i] && refs[i].current && refs[i].current.props.location.index === index) {
                    number = i;
                    break;
                }
            }
            if (number !== -1) {
                formDataContent[tab].splice(number, 1);
                this.formContentRefs[tab].splice(number, 1);
                this.setState({
                    formDataContent,
                    activeLocation: {},
                    showRightPart: false
                });
            }
        }
    };

    setProperty = (data, location) => {
        const { activeLocation } = this.state;
        if (activeLocation) {
            let refArr = this.formContentRefs[activeLocation.index];
            if (refArr && refArr.length > 0) {
                const ref = refArr[activeLocation.index];
                ref && ref.current.setIsActive(false);
            }
            this.setState({
                showRightPart: true,
                activeLocation: location
            });
        } else {
            this.setState({
                showRightPart: true,
                activeLocation: location
            });
        }
        this.propertiesRef.current.setProperties(data, location);
    }
    
    showRightbar = () => {
        const { showRightPart } = this.state;
        let showright = !showRightPart;
        this.setState({
            showRightPart: showright,
        })
    }

    changeWorkProperties = (formdata) => {
        const { activeLocation } = this.state;
        const tab = this.formContentRefs[activeLocation.index];
        if (tab) {
            const ref = tab[activeLocation.index];
            if (ref) {
                ref.current.changeProperties(formdata);
            }
        }
    }


    render() {
        const { showRightPart } = this.state;
        return (
            <div className="d-block editor-container">
                <div className="heading">
                    PAGE BUILDER
                </div>
                <div className="d-block page-heading">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <h2>Topic 1 | page 1</h2>
                            </div>
                            <div className="col-6">
                                <div className="d-block text-right">
                                    <button className="btn btn-primary preview-btn">Preview</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-side">
                    <Scrollbars
                        style={{ maxHeight: '100%' }}
                    >
                        <ul>
                            {this.displaySideBar()}
                        </ul>
                    </Scrollbars>
                </div>
                <div className="right-container">
                    <div style={{ height: 'calc(100% - 0px)', display: 'flex', paddingLeft: '15px', paddingRight: '15px' }}>
                        <Scrollbars
                            style={{ maxHeight: '100%' }}
                        >
                            {this.displayContent()}
                        </Scrollbars>
                    </div>
                </div>
                <div className={`right-side ${showRightPart ? '' : 'd-none'}`}>
                    <div className="d-block">
                        <HTMLProperties ref={this.propertiesRef} hideRightSide={this.showRightbar} changeProperties={this.changeWorkProperties} />
                    </div>
                </div>
            </div>
        );
    }
}