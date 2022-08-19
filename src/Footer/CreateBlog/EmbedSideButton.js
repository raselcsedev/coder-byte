import React from "react";
import PropTypes from 'prop-types';
import  {
    EditorState,
    convertToRaw,
    convertFromRaw,
    KeyBindingUtil,
    Modifier,
    AtomicBlockUtils,
    Entity,
  } from 'draft-js';

export default class EmbedSideButton extends React.Component {

    static propTypes = {
      setEditorState: PropTypes.func,
      getEditorState: PropTypes.func,
      close: PropTypes.func,
    };
  
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
      this.addEmbedURL = this.addEmbedURL.bind(this);
    }
  
    onClick() {
      const url = window.prompt('Enter a URL', 'https://www.youtube.com/watch?v=Mz9BlmST31w&list=PLym69wpbTIIEOesltWGUsVnY9HDWbJit_&index=1&t=6s');
      this.props.close();
      if (!url) {
        return;
      }
      this.addEmbedURL(url);
    }
  
    addEmbedURL(url) {
      const entityKey = Entity.create('embed', 'IMMUTABLE', {url});
      this.props.setEditorState(
        AtomicBlockUtils.insertAtomicBlock(
          this.props.getEditorState(),
          entityKey,
          ''
        )
      );
    }
  
    render() {
      return (
        <button
          className="md-sb-button md-sb-img-button"
          type="button"
          title="Add an Embed"
          onClick={this.onClick}
        >
          <i className="fa fa-code" />
        </button>
      );
    }
  
  }


class AtomicEmbedComponent extends React.Component {

    static propTypes = {
      data: PropTypes.object.isRequired,
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        showIframe: false,
      };
  
      this.enablePreview = this.enablePreview.bind(this);
    }
  
    componentDidMount() {
      this.renderEmbedly();
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.showIframe !== this.state.showIframe && this.state.showIframe === true) {
        this.renderEmbedly();
      }
    }
  
    getScript() {
      const script = document.createElement('script');
      script.async = 1;
      script.src = '//cdn.embedly.com/widgets/platform.js';
      script.onload = () => {
        window.embedly();
      };
      document.body.appendChild(script);
    }
  
    renderEmbedly() {
      if (window.embedly) {
        window.embedly();
      } else {
        this.getScript();
      }
    }
  
    enablePreview() {
      this.setState({
        showIframe: true,
      });
    }
  
    render() {
      const { url } = this.props.data;
      const innerHTML = `<div><a class="embedly-card" href="${url}" data-card-controls="0" data-card-theme="dark">Embedded ― ${url}</a></div>`;
      return (
        <div className="md-block-atomic-embed">
          <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
        </div>
      );
    }
  
    /*render() {
      const { url } = this.props.data;
      const innerHTML = `<div><a class="embedly-card" href="${url}" data-card-controls="0" data-card-theme="dark">Embedded ― ${url}</a></div>`;
      return (
        <div className="md-block-atomic-embed">
          {this.state.showIframe ? <div dangerouslySetInnerHTML={{ __html: innerHTML }} /> : (
            <div>
              <p>Embedded URL - <a href={url} target="_blank">{url}</a></p>
              <button type="button" onClick={this.enablePreview}>Show Preview</button>
            </div>
          )}
        </div>
      );
    }*/
  }