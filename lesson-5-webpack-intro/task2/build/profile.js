(() => {
  'use strict';
  (async function (t) {
    try {
      const t = await fetch('https://api.github.com/users/github');
      return await t.json();
    } catch (t) {
      throw new Error('Failed to get user data');
    }
  })().then(({ name: t, location: o }) =>
    ((t) => {
      const { name: o, company: a } = t;
      console.log(`${o} from ${a}`);
    })({ name: t, location: o })
  );
})();
