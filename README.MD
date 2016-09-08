#vue-date-filter

date filter for Vue.js

###UMD

支持CMD,AMD

```Javascript
// es6
import date from 'index.js'

Vue.use(date)

//other
var date = require('index.js').default;
Vue.use(date)


```HTML

{{now | date 'YYYY-MM-DD hh-mm-ss'}}

{{now | date 'YYYY年MM月DD日 hh时mm分ss秒'}}


