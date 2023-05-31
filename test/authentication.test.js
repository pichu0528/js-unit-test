import {Authentication} from "../src/authentication";
// import {Otp} from '../src/otp';

// jest.spyOn(Otp.prototype, 'get_token').mockReturnValue('000000');
let authentication = new Authentication();

describe('authenticate account is valid', function () {
    beforeEach(() => {
        authentication.getPassword = () => '91';
        authentication.getToken = () => '000000';
    })
    it('should be valid', () => {
        shouldValidateAccountPasswordTo('joey', '91000000', true);
    });
    it('should be invalid', () => {
        shouldValidateAccountPasswordTo('mei', '99', false);
    });

});

const shouldValidateAccountPasswordTo = (account, password, result) => {
    expect(authentication.is_valid(account, password)).toBe(result);
}
