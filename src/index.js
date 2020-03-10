function addNewListItem(value, listID) {
  const newNode = document.getElementById(listID);
  const newListItem = document.createElement('li');

  newListItem.appendChild(document.createTextNode(value));
  newNode.appendChild(newListItem);
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#create-task-form')
    .addEventListener('submit', function(event) {
      event.preventDefault();

      const taskContent = document.getElementById('new-task-description').value;
      addNewListItem(taskContent, 'tasks');
    });
});
