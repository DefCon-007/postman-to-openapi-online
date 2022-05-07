import PropTypes from 'prop-types';
import Image from 'next/image';
import logo from '../public/logo.png';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <Image alt="logo" src={logo} />
        </div>
        <div className="content">
            <div className="inner">
                <h1>P2O</h1>
                <p>An online Posman collection to Open API schema converter.<br /> <br />
                Works locally on the browser without sending any data to any server.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('convert');}}>Convert</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)
Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
