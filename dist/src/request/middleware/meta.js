const state = new Map([['invocationCount', 0]]);
export default function meta(request) {
    const invocationCount = Number(state.get('invocationCount'));
    return Object.assign({}, request, { meta: Object.assign({}, request.meta, { coldStart: !invocationCount, invocationCount: state
                .set('invocationCount', invocationCount + 1)
                .get('invocationCount') }) });
}
