const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}

function dragstart (e) {
  // console.log('drag start', e.target);
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
  
}
function dragend (e) {
  // console.log('drag end', e.target);
  e.target.classList.remove('hold', 'hide');
  // e.target.className = 'item';                  // или так
}


function dragover(e) {
  // console.log('dragover');
  // console.log(e.target);
  e.preventDefault();
}
function dragenter(e) {
  // console.log('dragenter');
  e.target.classList.add('hovered');
}
function dragleave(e) {
  // console.log('dragleave');
  e.target.classList.remove('hovered');
}
function dragdrop(e) {
  // console.log('dragdrop');
  e.target.append(item);
  e.target.classList.remove('hovered');
}