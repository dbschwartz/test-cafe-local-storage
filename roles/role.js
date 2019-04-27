import { Role, Selector } from 'testcafe';

const testRole = Role('http://localhost:8080/', async t => {
    await t
    .click(Selector('#first-link'))
    .click(Selector('#second-link'))
}, {preserveUrl: true });

export { testRole }