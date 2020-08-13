# storescraper

## supported store : Amazon
### RESTful API
[POST] /api/v1/scrape/

parameter:
url

`{
    "url": "https://www.amazon.com/Apple-iPad-10-2-Inch-Wi-Fi-32GB/dp/B07XL7G4H6/ref=lp_16225007011_1_2?s=computers-intl-ship&ie=UTF8&qid=1597264115&sr=1-2"
}`

response :
title,
image,
price
