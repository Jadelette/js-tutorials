const magicEightBall = require('../app/magiceightball');

test('given a number, switch produces expected answer', () => {

    //given
    let randomNumber = 4;

    //When
    magicEightBall.predictFuture();

    //Then
    expect(magicEightBall.predictFuture()).toBe('Do not count on it');
});
