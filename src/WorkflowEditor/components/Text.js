import React, { Component } from 'react';

export class Text extends Component {
    titleRef = null;
    constructor(props) {
        super(props);
        this.state = {
            paragraphContent: false,
            shownParagraph: 1,
            showEditorPanel: false,
            showEditorPanelTab: 0,
            title: "Heading",
            name: 'text',
            description: '',
            placeHolder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            isActive: false
        }
    };

    showParagraphContent = () => {
        const { paragraphContent } = this.state;
        this.setState({ paragraphContent: !paragraphContent });
    }

    clearContent = () => {
        this.props.onClickDelete(this.props.location);
    }

    showEditorPanel = () => {
        const { showEditorPanel } = this.state;
        this.setState({ showEditorPanel: !showEditorPanel });
    }

    paragraphMouseOver = (index) => {
        this.setState({ shownParagraph: index });
    }

    paragraphMouseOut = () => {
        this.setState({ shownParagraph: 1 });
    }

    showEditorPanelTab = (index) => {
        this.setState({ showEditorPanelTab: index });
    }

    setProperties = (sendData) => {
        const { title, placeHolder, name, value, description } = this.state;
        const { type } = this.props;
        const properties = {
            type,
            title: title,
            name: name,
            placeHolder: placeHolder,
            value: value,
            description: description,
            ...sendData
        };
        this.props.setPropertiesData(properties, this.props.location);
        this.setIsActive(true);
    }

    setIsActive = (isActive) => {
        this.setState({
            isActive
        });
    };

    handleStateChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        this.setProperties({ [name]: value });
    };

    render() {
        const { paragraphContent, shownParagraph, showEditorPanel, showEditorPanelTab, title, placeHolder, description } = this.state;
        return (
            <div className="d-flex content">
                <div className="col-8 pl-0">
                    <div className="d-flex flex-row flex-wrap left-content">
                        <h3>{title}</h3>
                        <input type="text" value={description} name="description" onChange={this.handleStateChange} placeholder={placeHolder} />
                    </div>
                </div>
                <div className="col-4 pr-0">
                    <div className="d-flex flex-row-reverse right-content">
                        <div className="paragraph-content">
                            <div className="paragraph-toggle" onClick={this.showParagraphContent}>
                                Paragraph with Heading <i className="fas fa-caret-down"></i>
                            </div>
                            {paragraphContent === true &&
                                <div className="paragraph-contents">
                                    <div className="paragraph-content-left">
                                        {shownParagraph === 0 &&
                                            <div className="paragraph">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        }
                                        {shownParagraph === 1 &&
                                            <div className="paragraph-with-heading">
                                                <h4>Heading</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        }
                                        {shownParagraph === 2 &&
                                            <div className="two-column-paragraph">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <ul>
                                        <li onMouseOver={() => this.paragraphMouseOver(0)} onMouseOut={this.paragraphMouseOut} className={shownParagraph === 0 && 'active'}>
                                            Paragraph
                                        </li>
                                        <li onMouseOver={() => this.paragraphMouseOver(1)} onMouseOut={this.paragraphMouseOut} className={shownParagraph === 1 && 'active'}>
                                            Paragraph with Heading
                                        </li>
                                        <li onMouseOver={() => this.paragraphMouseOver(2)} onMouseOut={this.paragraphMouseOut} className={shownParagraph === 2 && 'active'}>
                                            Two Column Paragraph
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