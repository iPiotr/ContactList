let contactList = document.getElementById('contactList');

contactList.addEventListener('keyup', filterNames);

function filterNames() {

    let listValue = document.getElementById('contactList').value.toUpperCase();
    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li.item');


    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        if (a.innerHTML.toUpperCase().indexOf(listValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}