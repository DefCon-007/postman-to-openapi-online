import PropTypes from 'prop-types';
import React from 'react';
import ConvertForm from './ConvertForm';
import SchemaView from './SchemaView';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      convertedSchema: ''
    }

    this.updateConvertedSchema = this.updateConvertedSchema.bind(this);
    this.getSchemaView = this.getSchemaView.bind(this);
  }

  updateConvertedSchema(convertedSchema) {
    this.setState({
      convertedSchema
    });
  }

  getSchemaView(schema) {
    const lines = schema.split('\n');
    const schemaView = lines.map((line, index) => {
      return (
        <span>{line}</span>
      )
    });

    return schemaView;
  }

  render() {

    let close = <div className="close" onClick={() => {
      if (this.state.convertedSchema) {
        this.setState({
          convertedSchema: ''
        });
      } else {
        this.props.onCloseArticle()
      }

    }}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="convert" className={`${this.props.article === 'convert' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

          {
            this.state.convertedSchema ? (
              <SchemaView schema={this.state.convertedSchema} />
            ) : (
              <>
                <h2 className="major">Convert</h2>
                <ConvertForm updateConvertedSchema={this.updateConvertedSchema}/>
              </>
            )
          }
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <p>
            A small utility to convert Postman <a href='https://www.postman.com/collection/' target='_blank'>collections</a> to <a href='https://www.openapis.org/' target='_blank'>Open API</a> schema in one click. <br />
            All the conversion happens on your browser itself hence your collection data is completely secure and no data is exchanged after page is loaded.
            <br /><br />
            You can either load the collection from an exported JSON or directly use the collection URL. <br />
            Note: If your collection is not public, create an access token in Postman and add <code>{'?apikey=<POSTMAN_API_KEY>'}</code> at end of the URL to access it.
          </p>
          <h3>Acknowledgements</h3>
          <ul>
            <li>Thanks to <a href='https://github.com/joolfe' target='_blank'>@joolfe</a> for the awesome <a href='https://github.com/joolfe/postman-to-openapi' target='_blank'>postman-to-openapi</a> npm package which made conversion easy.</li>
            <li>Website design taken from <a href='https://codebushi.com/nextjs-website-starters/' target='_blank'>codebushi</a> and theme name is Next.js Dimension</li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main