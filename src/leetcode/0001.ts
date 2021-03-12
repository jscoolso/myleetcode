import { Subject } from '@src/leetcode';

class Subject0001 extends Subject {
  read() {
    console.log('读题');
  }
  resolve() {
    console.log('resolve111');
  }
}

export default new Subject0001();
