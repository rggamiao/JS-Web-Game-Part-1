
function newImage(src, position, left, bottom) {
  const element = document.createElement('img');
  element.src = src;
  element.style.position = position;
  element.style.left = left;
  element.style.bottom = bottom;
  document.body.append(element);
  return element;
}
newImage('assets/green-character.gif', 'fixed', '100px', '100px');
newImage('assets/pine-tree.png', 'fixed', '450px', '200px');
newImage('assets/tree.png', 'fixed', '200px', '300px' );
newImage('assets/pillar.png', 'fixed', '350px', '100px');
newImage('assets/crate.png', 'fixed', '150px', '200px');
newImage('assets/well.png', 'fixed', '500px', '425px');
newImage('assets/shield.png', 'fixed', '165px', '185px');
newImage('assets/staff.png', 'fixed', '600px', '100px');

let sword = document.createElement('img')
sword.src ='assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)




sword.addEventListener('dblclick', function() {
    sword.remove()
})

let shield = document.querySelector('img[src="assets/shield.png"]');

shield.addEventListener('dblclick', function() {
    shield.remove();
});

let staff = document.querySelector('img[src="asset/staff.png"]');

staff.addEventListener('dblclick', function() {
    staff.remove();
})


// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)