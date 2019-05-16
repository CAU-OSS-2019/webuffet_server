![Getting started](./img/webuffet_market_banner.png)  
  
  
# [WEBuffet](https://github.com/CAU-OSS-2019/webuffet) API server


## Core features

- User identification
  - We identify our user by unique identifier and email which are provided by chrome identity API.
  
- Storage service
  - You can save theme to server. It can help to immediately use saved theme in another pc/laptop.

- Theme market service  
  - You can upload theme to market. It makes to users can check, evaluate, and download each other's themes.


## API document

Our API server host name is http://api.webuffet.net  
> Not yet supported (2019.05.16)

### Storage service

#### - <code>GET storage/:user_id</code>

**Description:**  
Load all theme of the user

**Return:**
All theme id, title and thumbnail

#### - <code>GET /storage/:user_id/:theme_id</code>

**Description:**  
Load specific theme of the user

**Return:**
Specific theme data

#### - <code>POST /storage/:user_id</code>

**Description:**  
Save new theme of the user

**Return:**
Created theme id

#### - <code>PUT /storage/:user_id/:theme_id</code>

**Description:**  
Update specific theme changes of the user

**Return:**
> None

#### - <code>DELETE /storage/:user_id</code>

**Description:**  
Delete all theme of the user

**Return:**
> None

#### - <code>DELETE /storage/:user_id/:theme_id</code>

**Description:**  
Delete specific theme of the user

**Return:**
> None
