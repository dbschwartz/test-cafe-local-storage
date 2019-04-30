import { Role, Selector } from 'testcafe';

const testRole = Role('https://dbschwartz.github.io/local-storage-demo', async t => {
    await t
    .click(Selector('#first'))
    .click(Selector('#second'))
    .click(Selector('#third'))
}, {preserveUrl: true });

export { testRole }