import React, { Component } from 'react';
import { Text, List, Image, Video, Icon, Divider, Button } from './../Properties';
import { v4 } from 'uuid';

export const componentType = {
    TEXT: "text",
    LIST: "list",
    IMAGE: "image",
    VIDEO: "video",
    ICON: "icon",
    DIVIDER: "divider",
    BUTTON: "button"
};

export class HTMLProperties extends Component {
    formContentRefs;
    constructor(props) {
        super(props);
        this.state = {
            showEditorPanel: true,
            showEditorPanelTab: 0,
            formContent: {
                title: "",
                type: "",
                name: '',
                placeHolder: '',
                description: '',
                ListingData: [],
                padding_bottom: '',
                padding_top: '',
            },
        }
        this.formContentRefs = [];
    };

    showEditorPanel = () => {
        this.props.hideRightSide();
    }

    setProperties = (properties, location) => {
        const { title, type, name, placeHolder, value, description, ListingData, padding_bottom, padding_top, } = properties;
        const { formContent } = this.state;
        if (type != 'list' && type != 'icon') {
            formContent.title = title;
            formContent.value = value;
            formContent.type = type;
            formContent.name = name;
            formContent.description = description;
            formContent.placeHolder = placeHolder;
            formContent.padding_bottom = padding_bottom;
            formContent.padding_top = padding_top;
        } else {
            formContent.type = type;
            formContent.ListingData = ListingData;
            formContent.padding_bottom = padding_bottom;
            formContent.padding_top = padding_top;
        }
        this.setState({
            formContent,
        });
    };

    // onChange = (value) => {
    //     this.setState({ value });
    //     if (this.props.onChange) {
    //         this.props.onChange(
    //             value.toString('html')
    //         );
    //     }
    // };

    displayPropertiesForm = () => {
        const { formContent } = this.state;
        let tabContent = [];
        const ContentRef = this.formContentRefs || [];
        const ref = React.createRef();
        const location = {
            index: ContentRef.length
        };
        if (formContent.type === componentType.TEXT) {
            tabContent.push(<Text key={v4()} showhideProperties={this.showEditorPanel} location={location} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.LIST) {
            tabContent.push(<List key={v4()} showhideProperties={this.showEditorPanel} location={location} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.IMAGE) {
            tabContent.push(<Image key={v4()} showhideProperties={this.showEditorPanel} location={location} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.VIDEO) {
            tabContent.push(<Video key={v4()} showhideProperties={this.showEditorPanel} location={location} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.ICON) {
            tabContent.push(<Icon key={v4()} showhideProperties={this.showEditorPanel} location={location} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.DIVIDER) {
            tabContent.push(<Divider key={v4()} showhideProperties={this.showEditorPanel} location={location} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        } else if (formContent.type === componentType.BUTTON) {
            tabContent.push(<Button key={v4()} showhideProperties={this.showEditorPanel} location={location} ref={ref} properties={formContent} onChangeContent={this.onChangeProperties} />);
        }
        ContentRef.push(ref);
        this.formContentRefs = ContentRef;
        return tabContent;
    }

    onChangeProperties = (formContent) => {
        this.props.changeProperties(formContent);
    };

    render() {
        return (
            <div className=''>
                {this.displayPropertiesForm()}
            </div>
        );
    }
}