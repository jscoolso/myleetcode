export class Subject {
  constructor() {
    this.read();
    this.resolve();
  }
  protected read(): void {
    console.log('read');
  }
  protected resolve(): void {
    console.log('resolve');
  }
}
export interface I{
  
}
import '@src/leetcode/0001';
