export default class Holiday {
    sayHello() {
        const date = new Date();
        const month = date.getMonth();
        const day = date.getDate();

        return month === 11 && (day === 25 || day === 24) ? "Merry Xmas" : "Today is not Xmas";
    }
}

const holiday = new Holiday();
holiday.sayHello();
