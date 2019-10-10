import 'moment-timezone';
import * as moment from 'moment';

// TODO: update me
export const localVN = (duration = moment.now(), local = "Asia/Ho_Chi_Minh") => {
    return moment(duration).tz(local)
}

const beThan10 = (value) => (value < 10 ? `0${value}` : value)

export const displayFullDate = (duration, dateIndicator = "-") => {
    const time = localVN(duration || 0)
    const date = beThan10(time.date())
    const year = time.year()
    const hours = beThan10(time.hour())
    const minutes = beThan10(time.minute())
    const month = beThan10(time.month() + 1)

    return `${hours}:${minutes} ${year}${dateIndicator}${month}${dateIndicator}${date}`
}

export const test = moment().subtract(10, 'days').calendar().replace(/["/"]/g, "-");

moment().format('MMMM Do YYYY, h:mm:ss a'); // October 10th 2019, 11:52:59 am
moment().format('dddd');                    // Thursday
moment().format("MMM Do YY");               // Oct 10th 19
moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019
moment().format();

moment("20111031", "YYYYMMDD").fromNow(); // 8 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 7 years ago
moment().startOf('day').fromNow();        // 12 hours ago
moment().endOf('day').fromNow();          // in 12 hours
moment().startOf('hour').fromNow();       // an hour ago

moment().subtract(10, 'days').calendar(); // 09/30/2019
moment().subtract(6, 'days').calendar();  // Last Friday at 11:53 AM
moment().subtract(3, 'days').calendar();  // Last Monday at 11:53 AM
moment().subtract(1, 'days').calendar();  // Yesterday at 11:53 AM
moment().calendar();                      // Today at 11:53 AM
moment().add(1, 'days').calendar();       // Tomorrow at 11:53 AM
moment().add(3, 'days').calendar();       // Sunday at 11:53 AM
moment().add(10, 'days').calendar();

moment.locale();         // en
moment().format('LT');   // 11:53 AM
moment().format('LTS');  // 11:53:30 AM
moment().format('L');    // 10/10/2019
moment().format('l');    // 10/10/2019
moment().format('LL');   // October 10, 2019
moment().format('ll');   // Oct 10, 2019
moment().format('LLL');  // October 10, 2019 11:53 AM
moment().format('lll');  // Oct 10, 2019 11:53 AM
moment().format('LLLL'); // Thursday, October 10, 2019 11:53 AM
moment().format('llll'); moment.locale();         // en
moment().format('LT');   // 11:53 AM
moment().format('LTS');  // 11:53:30 AM
moment().format('L');    // 10/10/2019
moment().format('l');    // 10/10/2019
moment().format('LL');   // October 10, 2019
moment().format('ll');   // Oct 10, 2019
moment().format('LLL');  // October 10, 2019 11:53 AM
moment().format('lll');  // Oct 10, 2019 11:53 AM
moment().format('LLLL'); // Thursday, October 10, 2019 11:53 AM
moment().format('llll');
