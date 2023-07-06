import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

async function copyTextToClipboard(text) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}

const CopyButton = (props) => (
  <div className="copy-button" onClick={() => {
    copyTextToClipboard(props.copyText)
      .then(() => {
        toast.success(props.alertText);
      });
  }}
  />
)

CopyButton.propTypes = {
  copyText: PropTypes.string,
  alertText: PropTypes.string.isRequired
}

export default CopyButton
