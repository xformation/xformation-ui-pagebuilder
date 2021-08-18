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
            padding_top: 0,
            padding_bottom: 0,
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

    setProperties = (updatedData) => {
        const { title, placeHolder, name, value, description, padding_top, padding_bottom } = this.state;
        const { type } = this.props;
        const properties = {
            type,
            title: title,
            name: name,
            placeHolder: placeHolder,
            value: value,
            description: description,
            padding_bottom: padding_bottom,
            padding_top: padding_top,
            ...updatedData
        };
        this.props.setPropertiesData(properties, this.props.location);
        this.setIsActive(true);
    }

    componentDidUpdate(prevProps, prevState){
        if(JSON.stringify(prevProps.properties) !== JSON.stringify(this.props.properties)){
            this.setState({
                ...this.props.properties
            });
        }
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

    changeProperties = (formContent) => {
        const { title, placeHolder, name, value, description, padding_top, padding_bottom } = formContent;
        this.setState({
            title: title,
            placeHolder: placeHolder,
            name: name,
            value: value,
            description: description,
            padding_top: padding_top,
            padding_bottom: padding_bottom,
        });
        // this.props.setPropertiesData(formContent, this.props.location);
    };

    render() {
        const { paragraphContent, shownParagraph, showEditorPanel, showEditorPanelTab, title, placeHolder, description, padding_top, padding_bottom } = this.state;
        let a=10;
        return (
            <div className={`d-flex content pt-${padding_top} pb-${padding_bottom}`}>
                <div className='col-8 pl-0'>
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