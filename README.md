# hexo-generator-latest2json
[![NPM version](https://badge.fury.io/js/hexo-generator-latest2json.svg)](https://www.npmjs.com/package/hexo-generator-latest2json)

build a latest post list in a json file. that you can use it for other platforms.

### Installation

```shell
npm i hexo-generator-latest2json -S
```

### Oportions

Add or modify the following sections to you root _config.yml file:

```yaml
latest2json:
  number: 10
  order_by: '-date'
  path: 'latest2json'
  fields:
    - title
    - date
    - path
```

* **number**: how many number posts will be generated into the json file
    * default: 10

* **order_by** Post order
    * default: date descending

* **path** the output path for the json file
    * default: 'latest.json'.
* **fields** which fields you want to get from ths post
    * default: title, date, path

## License

MIT
