# Postman to OpenAPI online converter

[![Netlify Status](https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status)](https://app.netlify.com/sites/next-dev-starter/deploys)

A small utility to convert Postman <a href='https://www.postman.com/collection/' target='_blank'>collections</a> to <a href='https://www.openapis.org/' target='_blank'>Open API</a> schema in one click.
All the conversion happens on your browser itself hence your collection data is completely secure and no data is exchanged after page is loaded.

You can either load the collection from an exported JSON or directly use the collection URL.
## 🏠 [Homepage](https://p2o.defcon007.com)

## ✨ Demo
#### Convert collection JSON file to OpenAPI schema
![Convert JSON file](./public/convert-collection-file.gif)

#### Convert collection via URL to OpenAPI schema
![Convert url](./public/convert-collection-url.gif)


### Installation

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DefCon-007/postman-to-openapi-online.git)

**Option two:** Manual clone

1. Clone this repo: `git clone https://github.com/DefCon-007/postman-to-openapi-online.git`
2. Use supported node version by `nvm use`
3. Navigate to the directory and run `npm install`
4. Run `npm run dev`
5. Make your changes
