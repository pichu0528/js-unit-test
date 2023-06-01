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
        authentication.notify = jest.fn();
    });
    it('should be valid', () => {
        const expected = authenticateAccount('joey', '91000000');
        shouldExpectedBe(expected, true);
        shouldNotNotifyOnValid();
    });
    it('should be invalid', () => {
        const expected = authenticateAccount('mei', 'wrong password');
        shouldExpectedBe(expected, false);
        shouldNotifyOnInvalid();
    });

});

function shouldNotNotifyOnValid() {
    expect(authentication.notify).not.toBeCalled();
}

function shouldNotifyOnInvalid() {
    expect(authentication.notify).toBeCalledWith(expect.any(String));
}

function authenticateAccount(account, password) {
    return authentication.is_valid(account, password);
}

const shouldExpectedBe = (expected, result) => {
    expect(expected).toBe(result);
}
