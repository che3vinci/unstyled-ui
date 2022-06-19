import _ from 'lodash';
export const gtext = `This handy tool helps you create dummy text for all your layout needs.
We are gradually adding new functionality and we welcome your suggestions and feedback.
Please feel free to send us any additional dummy texts.
`;
export const gtextArray = gtext.split(' ');

export const getRandomText = () => _.shuffle(gtextArray).join(' ');
export const getRandomWord = () => _.sample(gtextArray) || 'hello-world';
