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
            <div className="d-flex content">
                <div className="col-8 pl-0">
                    <div className="d-flex flex-row flex-wrap left-content position-relative">
                        <img src={horizontalImage} alt="" />
                        <div className="d-flex w-100 h-100 align-items-center justify-content-center play-btn">
                            <i className="fas fa-play-circle"></i>
                        </div>
                    </div>
                </div>
                <div className="col-4 pr-0">
                    <div className="d-flex flex-row-reverse right-content">
                        <div className="editor-buttons">
                            <i className="fal fa-arrow-down"></i>
                            <i className="fal fa-copy"></i>
                            <i className="fal fa-trash" onClick={this.clearContent}></i>
                            <i className="fal fa-pen" onClick={this.showEditorPanel}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}