import {Profile} from "./profile";
import * as otp from "./otp";

export class Authentication {
    is_valid(account, password) {
        const profile = new Profile();
        const password_from_profile = profile.get_password(account);
        // const otp = new Otp();
        // const password_from_profile = this.getPassword(account);
        const token = this.getToken();
        console.log(`password:${password_from_profile}, token:${token}`);

        const valid_password = password_from_profile + token;
        if (valid_password === password) {
            return true;
        } else {
            this.notify(`account:${account} login failed`);
            return false;
        }
    }

    notify(message) {
        return message;
    }

    getPassword(account) {
        const profile = new Profile();
        return profile.get_password(account);
    }

    getToken(){
        return otp.get_token();
    }
}
