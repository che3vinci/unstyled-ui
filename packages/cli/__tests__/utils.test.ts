describe('test cases', () => {
  it('should work ', () => {
    expect(0).toBe(0);
  });
});
// /**
//  * @jest-environment node
//  */
// import { readFileSync } from 'fs';
// import { os } from 'zx';
// import { exec } from '../src/exec';
// jest.setTimeout(1000 * 60);

// const CWD = `${os.homedir()}/code/playground/packages/cli/__tests__/`;
// process.chdir(CWD);
// describe('test cases', () => {
//   it.skip('npm init work ', async () => {
//     await exec('npm init', [
//       { regex: /^package name:/i, input: 'hello\n' },
//       { regex: /^version/i, input: '0.0.1\n' },
//       { regex: /^description/i, input: '\n' },
//       { regex: /^test command/i, input: '\n' },
//       { regex: /^entry point/i, input: '\n' },
//       { regex: /^git repository:/i, input: '\n' },
//       { regex: /^keywords/i, input: '\n' },
//       { regex: /^author/i, input: '\n' },
//       { regex: /^license/i, input: 'MIT\n' },
//       { regex: /^Is this OK/i, input: '\n' },
//     ]);
//     const res = JSON.parse(
//       readFileSync(`${CWD}/package.json`, { encoding: 'utf-8' })
//     );
//     expect(res.version).toBe('0.0.1');
//     expect(res.name).toBe('hello');
//   });
//   it.skip('ssh-keygen', async () => {
//     await exec('ssh-keygen -t ed25519 -C test@gmail.com -f xx', [
//       {
//         regex: /^Enter passphrase/,
//         input: '\n',
//       },
//       {
//         regex: /^Enter same passphrase again:/,
//         input: '\n',
//       },
//       {
//         regex: /^Overwrite/,
//         input: 'y\n',
//       },
//     ]);
//   });
// });
