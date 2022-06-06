# dolphins-vue-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Local dev

Edit ``vue.config.js``
```
module.exports = {
    devServer: {
        proxy: 'http://localhost:8099'
    }
};
```
