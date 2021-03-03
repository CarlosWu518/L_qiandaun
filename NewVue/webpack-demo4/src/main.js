// var bar = require('./bar')
// bar()

// import bar from './bar'
// //bar()
// console.log(bar);


//Es6
import { x, y, add } from './bar'
console.log(x, y, add(11, 22));

import * as bar2 from './bar'
console.log(bar2, bar2.x, bar.y, bar2.add);