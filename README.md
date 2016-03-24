# rci-dnd
---

React-dnd


## Screenshots

<img src="https://os.alipayobjects.com/rmsportal/BeMjJFaDkJJOsTJ.png" width="288"/>

## Usage
> see examples

    npm i rci-dnd

## API

### Dnd props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|className | additional css class of root dom node | String | '' |
|prefixCls | prefix class | String | 'rci-dnd' |
|data | data of dnd (unique id across all data) | Array | [{id:Number/String, content:Node/any},] |

### Block props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|className | additional css class of root dom node | String | '' |
|index | the index of Block | Number |  |

### Card props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|className | additional css class of root dom node | String | '' |
|index | the index of Card | Number |  |
|bIndex | the index of Block (Card inside) | Number |  |
|placeholder | the placeholder of Card in Block (it's temporary appear) | bool |  |
|content | the content of Card | node |  |

## Development

```
npm install
npm start
```

## resource

### drag-drop
- [https://gaearon.github.io/react-dnd/docs-overview.html](https://gaearon.github.io/react-dnd/docs-overview.html)
- [the-future-of-drag-and-drop-apis](https://medium.com/@dan_abramov/the-future-of-drag-and-drop-apis-249dfea7a15f#.mqc7rcnfv)
- [angular-drag-and-drop-lists](https://github.com/marceljuenemann/angular-drag-and-drop-lists)

### infinite scroll
- [https://github.com/orgsync/react-list](https://github.com/orgsync/react-list)
    - [issue](https://github.com/orgsync/react-list/issues/97)
- [https://github.com/seatgeek/react-infinite](https://github.com/seatgeek/react-infinite)
    - [dynamic-height](http://stackoverflow.com/questions/30579045/react-infinite-scroll-in-a-container-with-dynamic-height)，[issue 62](https://github.com/seatgeek/react-infinite/issues/62)
    - Not Good! need to pass the containerHeight and the elementHeight to the element.

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License
rc-tree is released under the MIT license.
