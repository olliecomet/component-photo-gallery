import ImageItem from '../src/ImageItem.js';

const test = QUnit.test;

QUnit.module('Render image item');

test('', assert => {
    // arrange 

    const image = {
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
    
    
    // assert

});