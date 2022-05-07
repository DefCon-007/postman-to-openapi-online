import PropTypes from 'prop-types';
import styles from '@styles/horizontalLineText.module.scss';

const HorizontalLineText = (props) => (
  <div className={styles.separator}>
  <div className={styles.line}></div>
  <h2 className={styles.text}>{props.text}</h2>
  <div className={styles.line}></div>
</div>
)

HorizontalLineText.propTypes = {
    text: PropTypes.string
}

export default HorizontalLineText
