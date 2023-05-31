import Holiday from '../src/Holiday';

const mockGetDate = jest.spyOn(Date.prototype, 'getDate');
const mockGetMonth = jest.spyOn(Date.prototype, 'getMonth');
const holiday = new Holiday();

describe('Holiday', () =>  {
    it('should return "Merry Xmas" when the date is 12/25', () => {
        givenDate(11, 25);
        expectSayHelloShouldBe('Merry Xmas');
    });

    it('should return "Merry Xmas when the date is 12/24"', () => {
        givenDate(11, 24);
    })

    it('should return "Today is not Xmas" when the date is not 12/25', () => {
        givenDate(10, 25);
        expectSayHelloShouldBe("Today is not Xmas");
    });
    
    it('should return "Today is not Xmas" when the date is not 12/24', () => {
        givenDate(10, 24);
        expectSayHelloShouldBe("Today is not Xmas");
    })
});

const givenDate = (month, day) => {
    mockGetMonth.mockReturnValue(month);
    mockGetDate.mockReturnValue(day);
}
const expectSayHelloShouldBe = expected => expect(holiday.sayHello()).toBe(expected);
