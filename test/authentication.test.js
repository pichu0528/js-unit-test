import {Authentication} from "../src/authentication";
import * as Otp from '../src/otp';
import {Profile} from '../src/profile';

jest.mock('../src/otp');
jest.mock('../src/profile');

const authentication = new Authentication();

function mockProfile() {
    return () => {
        return ({
            get_password: () => '91'
        })
    };
}

describe('authenticate account', function () {
    beforeEach(() => {
        Profile.mockImplementationOnce(mockProfile());
        Otp.get_token.mockReturnValue('000000');
    });
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
