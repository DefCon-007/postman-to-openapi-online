import postmanToOpenApi from 'postman-to-openapi-module';
import HorizontalLineText from './HorizontalLineText';

function ConvertForm(props) {
  let updateConvertedSchema = props.updateConvertedSchema;

  const handleFormSubmit = (event) => {
    event.preventDefault(); // don't redirect the page

    const collectionFile = event.target['collection-file'].files,
      collectionUrl = event.target['collection-url'].value;

    if (collectionFile.length > 0) {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const text = postmanToOpenApi(e.target.result)
        updateConvertedSchema(text);
        console.log(text)
        // alert(text)
      };
      reader.readAsText(collectionFile[0])

      ga.event({
        action: "collection_converted",
        params : {
          type: 'file_upload'
        }
      });

    } else if (collectionUrl.length > 0) {
      ga.event({
        action: "collection_converted",
        params : {
          type: 'url'
        }
      });

    } else {
      ga.event({
        action: "empty_convert_clicked",
        params : { }
      });
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="field">
        <label htmlFor="collection-url">Collection URL</label>
        <input type="text" name="collection-url" id="collection-url" />
      </div>

      <br />
      <HorizontalLineText text="OR" />
      <br />

      <div className="field">
        <label htmlFor="collection-file">Collection File</label>
        <input type="file" name="collection-file" id="collection-file" />
      </div>

      <ul className="actions">
        <li><input type="submit" value="Submit" className="special" /></li>
      </ul>
    </form>
  );
}

export default ConvertForm
