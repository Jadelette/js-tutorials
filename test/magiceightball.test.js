const magicEightBall = require('../app/magiceightball');

test('given a number, switch produces expected answer', () => {

    //given
    let randomNumber = 5;

    //When
    magicEightBall.predictFuture();

    //Then
    expect(magicEightBall.predictFuture()).toBe('My sources say no');
});

//this is a change to my susan branch