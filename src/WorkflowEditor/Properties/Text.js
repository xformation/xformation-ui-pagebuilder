import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

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
            placeHolder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            isActive: false,
            description: '',
            value: RichTextEditor.createEmptyValue(),
        }
    };

    componentDidMount() {
        console.log(this.props.properties);
        const { properties } = this.props;
        if (properties) {
            console.log('true');
            const { title, name, description, placeHolder } = properties;
            this.setState({
                'title': title,
                'name': name,
                'description': description,
                'placeHolder': placeHolder
            });
        }
    }

    showEditorPanelTab = (index) => {
        this.setState({ showEditorPanelTab: index });
    }

    showEditorPanel = () => {
        this.props.showhideProperties();
    }

    setProperty = (properties) => {
        console.log(properties);
        const { title, type, name, placeHolder, value } = properties;
        // const { formContent } = this.state;
        // formContent.title = title;
        // formContent.value = value;
        // formContent.isRequired = isRequired;
        // formContent.type = type;
        // formContent.name = name;
        // formContent.notice = notice;
        // formContent.placeHolder = placeHolder;
        // formContent.id = id;
        // formContent.errorMessage = errorMessage;
        // formContent.options = options;
        // formContent.validations = validations;
        // this.setState({
        //     formContent
        // });
    }


    render() {
        const { paragraphContent, shownParagraph, showEditorPanel, showEditorPanelTab, title, name, description, placeHolder } = this.state;
        const toolbarConfig = {
            // Optionally specify the groups to display (displayed in the order listed).
            display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
            INLINE_STYLE_BUTTONS: [
                { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
                { label: 'Italic', style: 'ITALIC' },
                { label: 'Underline', style: 'UNDERLINE' }
            ],
            BLOCK_TYPE_DROPDOWN: [
                { label: 'Normal', style: 'unstyled' },
                { label: 'Heading Large', style: 'header-one' },
                { label: 'Heading Medium', style: 'header-two' },
                { label: 'Heading Small', style: 'header-three' }
            ],
            BLOCK_TYPE_BUTTONS: [
                { label: 'UL', style: 'unordered-list-item' },
                { label: 'OL', style: 'ordered-list-item' }
            ]
        };
        return (
            <div className='editor-panel show'>
                <div className="d-flex justify-content-between panel-heading">
                    <h5>Edit Paragraph with Heading</h5>
                    <i className="fal fa-times" onClick={this.showEditorPanel}></i>
                </div>
                <div className="panel-tabs">
                    <ul>
                        <li onClick={() => this.showEditorPanelTab(0)} className={showEditorPanelTab === 0 && 'active'}>CONTENT</li>
                        <li onClick={() => this.showEditorPanelTab(1)} className={showEditorPanelTab === 1 && 'active'}>SETTINGS</li>
                    </ul>
                    <div className="panel-tab-contents">
                        {showEditorPanelTab === 0 &&
                            <div className="tab-content">
                                <h6>{title}</h6>
                                <input type="text" value={description} name="description" placeholder={placeHolder} />
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                                {/* <RichTextEditor toolbarConfig={toolbarConfig} value={this.state.value}
                                    onChange={this.onChange} /> */}
                            </div>
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