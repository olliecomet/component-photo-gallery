import renderImage from '../src/render-image.js';

const test = QUnit.test;

QUnit.module('Render photo item');

test('renders html from data', assert => {
    // arrange 
    const photo = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
        <li title="A unicorn and a narwhal nuzzling their horns">
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="UniWhal">
            <h3>UniWhal</h3>
            <p>Number of horns: 1</p>
        </li>
    `;

    // act
    const html = renderImage(photo);

    // assert
    assert.htmlEqual(html, expected);
});