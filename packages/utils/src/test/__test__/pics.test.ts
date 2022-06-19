import { mock } from '../mock';
describe('test cases', () => {
  it('should work ', () => {
    for (let k = 0; k < 10; k++) {
      console.log(mock.getRandomPic());
    }
  });
});
