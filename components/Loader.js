import PropTypes from 'prop-types';
import styles from '@styles/loader.module.scss';
import Image from 'next/image';
import logo from '../public/logo.png';

const Loader = (props) => (
  <div className={styles.container}>
    <Image alt="logo" className={styles.rotate} src={logo} width='150px' height='150px' />
    <div>{props.text}</div>
  </div>
)

Loader.propTypes = {
  text: PropTypes.string
}

export default Loader
