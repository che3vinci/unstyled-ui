// window.matchMedia = () => ({ matches: {} } as any);
// import React from 'react';
// import TestRenderer from 'react-test-renderer';
// import styled from 'styled-components';
// import { Row } from '..';
// import { getRenderedCSS, resetStyled } from '../../../__test__/utils';

// describe('test cases', () => {
//   beforeEach(() => {
//     resetStyled();
//     // document.body = '';
//   });

//   it('number value ', () => {
//     const RowX = styled(Row)``;
//     const c = TestRenderer.create(<RowX round={[true]} />);
//     const css = getRenderedCSS();
//     console.log(c.toTree());
//     console.log(css);
//     // console.log(cssProps({ accentColor: ['2'] }));
//     expect(0).toBe(0);
//   });
//   it('string value ', () => {
//     console.log(Row.toString());
//     TestRenderer.create(<Row gap="200px" />);
//     const css = getRenderedCSS();
//     console.log(css);
//   });
//   it('special props ', () => {
//     // const Row = styled(Box)``;
//     // TestRenderer.create(<Row className="xxx" />);
//     // const css = getRenderedCSS();
//     // console.log(css);
//     // expect(0).toBe(0);
//   });
//   it('bug here ', () => {
//     // const Row = styled(Row)``;
//     // TestRenderer.create(<Row flex={1} />);
//     // const css = getRenderedCSS();
//     // console.log(css);
//     // console.log(cssProps({ accentColor: ['2'] }))
//     expect(0).toBe(0);
//   });
// });
export {};
