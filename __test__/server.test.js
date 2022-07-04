import { storeData } from "../src/server/server";

describe("Tesing data storage data path", () => {

    test("storeData() should store data at the correct path", () => {
        let db = {
            trips: [{},{},{}],
            destinations: []
        }

        let path = ['trips', 1, 'trip_title'];

        storeData(db, path, 'My trip Title');
        expect(db.trips[1].trip_title).toBe('My trip Title');
    });
});