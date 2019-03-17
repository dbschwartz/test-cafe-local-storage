import { Role, Selector } from 'testcafe';

const testRole = Role('http://localhost:8080/', async t => {
    await t
    .click(Selector('#local-storage'))
    .debug()
    .expect(Selector('p').innerText).eql('https://router.vuejs.org')
});

export { testRole }