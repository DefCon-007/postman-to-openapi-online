import Image from 'next/image';
import { usePostHog } from 'posthog-js/react';
import PropTypes from 'prop-types';
import logo from '../public/logo.png';

const Header = (props) => {
  const { onOpenArticle } = props,
    posthog = usePostHog(),
    handleLinkClick = (event, articleId) => {
      event.preventDefault();
      onOpenArticle(articleId);

      posthog.capture(
        "navigation_clicked",
        {
          id: articleId
        }
      );
    };

  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <Image alt="logo" src={logo} width='150px' height='150px' />
      </div>
      <div className="content">
        <div className="inner">
          <h1>P2O</h1>
          <p>Convert Postman collections to Open API schema in one click.<br /> <br />
            Works locally on the browser without sending any data to any server.</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="#" onClick={(event) => { handleLinkClick(event, 'convert'); }}>Convert</a></li>
          <li><a href="#" onClick={(event) => { handleLinkClick(event, 'about') }}>About</a></li>
        </ul>
      </nav>
    </header>
  )
};

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Header
