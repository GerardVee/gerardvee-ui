## Open source showcase site

gerardvee.com is an open source showcase site that showcases user projects. The site is built with Next.js, React and Redux. It also includes the following third party APIS: Facebook, Stripe, and AWS Cognito, Gateway, Lambda & S3.

See the site [here](https://gerardvee.com).

<br>

## Use cases

Use this site to showcase your own projects. Just follow the build it yourself guide below!

<br>

## Guide
- [Open source showcase site](#open-source-showcase-site)
- [Use cases](#use-cases)
- [Guide](#guide)
- [Develop locally](#develop-locally)
- [Deploy site](#deploy-site)
- [Configuration](#configuration)
  - [.env variables](#env-variables)
  - [API Gateway end points](#api-gateway-end-points)
- [Team](#team)
  - [Hire](#hire)
  - [Members](#members)
  - [Contributing](#contributing)
- [Project information](#project-information)
  - [Built with](#built-with)
  - [License](#license)
- [Issues](#issues)
  - [Posting issues](#posting-issues)
  - [Resolving issues](#resolving-issues)
  
<br>

## Develop locally

***Note***

The admin features won't work on an insecure server due to Facebook Login. Please run on a certified site to utilize full admin features.

[Configure](#configuration). Run `yarn install` then run `yarn run dev`.

<br>

## Deploy site

***Note***

Make sure the site is certified so that Facebook Login works. Also have `pm2` installed globally.

[Configure](#configuration). Run `yarn install`, `yarn run build` then `yarn start-server`.

<br>

## Configuration

### .env variables

Save these key, value pairs to an .env file, using this syntax:

```
VARIABLE_NAME=VALUE
VARIABLE_NAME_2=VALUE
```
<br>

| variable name  | datatype  | description |
|---|---|---|
| PORT_ADDR  |  Number  | |
| NODE_ENV  | String  | Either `production` or `development`. |
| BASE_API  | String  | The host for your AWS Lambda API. Ends with `amazonaws.com`, no trailing `/`. |
| API | String | The full AWS Lambda API. Usually ends with `amazonaws.com/{ STAGE_NAME }/`. Include trailing `/`. |
| COGNITO_POOL_ID | String | The pool id for the Facebook verified, Cognito Federated Identity. |
| FB_APP_ID | Number or String | The Facebook APP ID. |
| FB_SUPERUSERS | [String] | Format: String[,String,String]*. []\* = Not needed; do NOT space after comma. An array of the admin emails. Make sure your FB account has the same email as the ones provided here. |
| STRIPE_KEY | String | Your `pk` Stripe key. |

<br><br>

### API Gateway end points

***Note***

Enable CORS, and create and link an AWS IAM Role for Authorization with Gateway.

<br>

| end point  | authorized | body | return type  | description |
|---|---|---|---|---|
| *POST* charge  | No | `amount: Number (in cents), token: String` | Stripe Charge Object  | Create the charge and return it. Use your `sk` Strike key. |
| *POST* site/contact  | No | `details: { firstName: String, lastName: String, email: String, subject: String, query: String }` | `{ success: Boolean, error?: String }`  | Send an email. |
| *GET* site/images | No |  | `[{ image_id: String, location: String }]` | An array of images. `location` is a URL that points to an S3 file. |
| *GET* site/projects | No |  | `[{ project_id: String, description: String, url: String, image: String, finished: Boolean, title: String }]` | An array of projects. `url` and `image` are URLs. |
| *POST* site/image | Yes | `location: String (URL)` | `{ success: Boolean, image: ImageObject }` | Create an `Image` item within a database. |
| *PATCH* site/image | Yes | `location: String (URL), old_location: String (URL)` | `{ success: Boolean, image: ImageObject }` | Replace `Image` item in a database if the extensions differ, otherwise, do nothing. Return the modified `Image`. |
| *DELETE* site/image | Yes | `location: String (URL)` | `{ success: Boolean, image_id: String }` | Delete `Image` item from a database, delete from S3. |
| *POST* site/image/upload | Yes | `filename: String, filetype: String` | `{ url: String (URL), signedRequest: String (URL) }` | `url` is where the image will be, and `signedRequest` is the signed URL. Pass required info for an S3 Bucket upload, using an S3 signed URL. Afterwards, call *POST* `site/image`. |
| *POST* site/project | Yes | `project: ProjectObject` | `{ success: Boolean, project: ProjectObject }` | Upload a `Project` item within a databse. |
| *PATCH* site/project | Yes | `project: ProjectObject` | `{ success: Boolean, project: ProjectObject }` | Update `Project` item in a database, return the modified `Project`. |
| *DELETE* site/project | Yes | `project_id: String` | `{ success: Boolean, project_id: String }` | Delete `Project` item from a database. |

<br><br>

## Team

`gerardvee.com` was built using various technologies, and having to deploy for production was a learning experience. Various issues came up, but at the end of the day, it was well-worth it.


### Hire

`gerardvee.com` was remade alongside [bookshelf](https://github.com/GerardVee/bookshelf), my newest and toughest project yet. [Contact me](https://gerardvee.com/contact) if you're interested.


### Members

- [gerardvee](https://github.com/GerardVee)


### Contributing

Please post an issue if you believe you've found one. I'll get right to work on it. Additionally, you can post features under issues. Just make sure to clarify that it is a feature!

<br>

## Project information

Specifics of the project. Technologies and licensing are displayed here.

### Built with

**Base**

- [Next](https://github.com/zeit/next.js)
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reduxjs/redux)

**Supported by**

- Facebook
- Stripe
- AWS Cognito
- AWS Gateway
- AWS Lambda
- AWS S3

### License

All code in this repository is provided under the [MIT License](https://github.com/GerardVee/gerardvee.com/blob/master/LICENSE.md).

<br>

## Issues

Issues are a part of life. That doesn't mean we have to live with them though! If you encounter an issue, make sure it hasn't been [resolved](https://github.com/GerardVee/gerardvee.com/issues?utf8=%E2%9C%93&q=is%3Aresolved) yet.


### Posting issues

New issue structure:

```
## Reproduce

How this issue can be reproduced.

## Work Around

(Potential work arounds), not necessary.

Potential Solutions

1. (Potential solution)
2. (Potential solution)
not necessary.

Extra information.
```

<br>

### Resolving issues

Issue resolved structure:

```
## What caused this

The specifics of what caused thise.

## What was done

What was done to help resolve this.

## What technology was used

What extra techonology if any was implemented/imported to help resolved this issue.

### Before

The code core to the issue before the change.

### After

The fixed code.

```