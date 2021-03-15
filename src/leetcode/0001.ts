import { ISubject } from '.';

class Subject0001 implements ISubject {
  constructor() {
    this.read();
  }
  read() {
    console.log('读题');
  }
  resolve(...restOps: any[]): any {
    console.log('resolve111', restOps);
  }
}

export default new Subject0001();
