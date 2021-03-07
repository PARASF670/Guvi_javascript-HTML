var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
cat.height = 2;
cat.weight = 10;
cat.name = 'Fluffyy';
console.log(cat['catFriends'][0]['activities']);
console.log(cat['catFriends'][1]['activities']);
console.log(cat['catFriends'][0]['name']);
console.log(cat['catFriends'][1]['name']);
console.log(cat['catFriends'][0]['weight']);
console.log(cat['catFriends'][1]['weight']);
console.log(cat['catFriends'][0]['activities'].length + cat['catFriends'][1]['activities'].length + cat['activities'].length);
cat['catFriends'][0]['activities'].push('loves walk','eat candy');
cat['catFriends'][1]['activities'].push('eat fish','likes running');
console.log(cat['catFriends'][0]['activities']);
cat['catFriends'][0].furcolor = 'brown';
console.log(cat['catFriends'][0]);