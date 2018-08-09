import { get as getRequestFixture } from '../../../test/fixtures/requests';
import timestamp from './timestamp';
const testRequest = Object.assign({}, getRequestFixture, { headers: {} });
const testDate = Date.now();
describe('Timestamp', () => {
    test('is applied', () => {
        const request = timestamp(testRequest);
        expect(request.timestamp).toBeGreaterThanOrEqual(testDate);
    });
});
