import { get as getRequestFixture } from '../../../test/fixtures/requests';
import meta from './meta';
const testEvent = Object.assign({}, getRequestFixture);
describe('Request meta', () => {
    test('is set correctly', () => {
        expect(meta(testEvent).meta).toEqual({
            coldStart: true,
            invocationCount: 1,
        });
        expect(meta(testEvent).meta).toEqual({
            coldStart: false,
            invocationCount: 2,
        });
    });
});
