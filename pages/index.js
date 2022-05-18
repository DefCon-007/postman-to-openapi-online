import React from 'react'
import Head from "next/head"

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

const baseUrl = 'https://p2o.defcon007.com',
    title = 'Postman to OpenAPI',
    description = 'Convert Postman collections to Open API schema in one click.  Works locally on the browser without sending any data to any server.',
    coverImageUrl = baseUrl + '/images/cover-image.jpg';

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading"
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: "" })
        }, 100)
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout
            })
        }, 350)
    }

    handleCloseArticle() {
        this.setState({
            articleTimeout: !this.state.articleTimeout
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: ""
            })
        }, 350)
    }
    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? "is-article-visible" : ""}`}>
                <div>
                    <Head>
                        {/* Primary Meta Tags */}
                        <title>{title}</title>
                        <meta name="title" content={title} />
                        <meta name="description" content="" />

                        {/* Open Graph / Facebook */}
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content={baseUrl} />
                        <meta property="og:title" content={title} />
                        <meta property="og:description" content={description} />
                        <meta property="og:image" content={coverImageUrl} />

                        {/* Twitter */}
                        <meta property="twitter:card" content="summary_large_image" />
                        <meta property="twitter:url" content={baseUrl} />
                        <meta property="twitter:title" content={title} />
                        <meta property="twitter:description" content={description} />
                        <meta property="twitter:image" content={coverImageUrl} />
                    </Head>

                    <div id="wrapper">
                        <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                        <Main
                            isArticleVisible={this.state.isArticleVisible}
                            timeout={this.state.timeout}
                            articleTimeout={this.state.articleTimeout}
                            article={this.state.article}
                            onCloseArticle={this.handleCloseArticle}
                        />
                        <Footer timeout={this.state.timeout} />
                    </div>

                    <div id="bg" />
                </div>
            </div>
        )
    }
}

export default IndexPage
