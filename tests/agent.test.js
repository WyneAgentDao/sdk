const WyneAgent = require('../src/core/agent');

test('Agent executes task', () => {
const agent = new WyneAgent();
const result = agent.execute('test');

expect(result.success).toBe(true);
});
