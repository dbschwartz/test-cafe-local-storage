import { Selector } from 'testcafe';
import { testRole } from './roles/role'
fixture `A set of examples that illustrate how to use TestCafe API`
    .page `http://localhost:8080/`
    .beforeEach( async t => {
        await t.useRole(testRole)
    });

// Page model

// Tests
test('Text typing basics', async t => {
    
});
