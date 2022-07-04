import * as date from '../src/client/js/date_utils'

describe("Tesing date utility functions", () => {

    test("date.compareDates() should return false if start date is after end date", () => {
       let start_date = '11-25-2022';
       let end_date = '10-10-2022';

       expect(date.compareDates(start_date, end_date)).not.toBeTruthy();
    });
});