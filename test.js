import { Selector } from 'testcafe';
import { testRole } from './roles/role'


fixture `This is an example showing the test working without using a role`
    .page `https://dbschwartz.github.io/local-storage-demo`

// Tests
test('Text typing basics', async t => {
    await t
    .click(Selector('#first'))
    .click(Selector('#second'))
    .click(Selector('#third'))
    
});



fixture `This is an example showing the test failing while without using a role`
    .page `https://dbschwartz.github.io/local-storage-demo`
    .beforeEach( async t => {
        await t.useRole(testRole)
    });

// Tests
test('Placeholder', async t => {
});
