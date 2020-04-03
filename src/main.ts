import path from 'path';
console.log('main');
const testPath = path.join(__dirname, 'test.js');
console.log('testPath:',testPath);
import(testPath).then(res => {
  console.log('rrres:', res);
}).catch(err => {
  console.log('eerr:', err)
})
