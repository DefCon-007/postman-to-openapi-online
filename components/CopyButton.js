import PropTypes from 'prop-types';
import TOAST_OPTIONS from '../lib/constants';
import toast from 'react-hot-toast';

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
          toast.success(props.alertText, TOAST_OPTIONS);
        });
    }}
  />
)

CopyButton.propTypes = {
    copyText: PropTypes.string,
    alertText: PropTypes.string.isRequired
}

export default CopyButton
