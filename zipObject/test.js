Test.assertSimilar(zipObject(['fred', 'barney'], [30, 40]), { 'fred': 30, 'barney': 40 });
Test.assertSimilar(zipObject([['fred', 30], ['barney', 40]]), { 'fred': 30, 'barney': 40 });
