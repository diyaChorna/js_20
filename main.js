let sel = x =>document.querySelector(x);
let person = document.forms['person'];
let isEditState = false;
let editId = 0;


let users = [];

person.button.addEventListener('click', function() {
    if(!isEditState) {
        if(person.login.value != '' && person.password.value != '' && person.login.value!=''){
            let user = {
                login: person.login.value,
                password: person.password.value,
                email: person.email.value
            }
            users.push(user);
            render();
            person.login.value='';
            person.password.value='';
            person.email.value='';
        }
    }
    else {
        save()
        render();
    }
})
let functionEdit = false;
function render(){
    sel('#tableBody').innerHTML = '';
   
    for(let i=0; i < users.length; i++){
        console.log(users);
        let tr = document.createElement('tr');
        let idTd=document.createElement('td');
        idTd.innerText=i+1;
        tr.appendChild(idTd);

        let loginTd=document.createElement('td');
        loginTd.innerText=users[i].login;
        tr.appendChild(loginTd);

        let passwordTd=document.createElement('td');
        passwordTd.innerText=users[i].password;
        tr.appendChild(passwordTd);

        let emailTd=document.createElement('td');
        emailTd.innerText=users[i].email;
        tr.appendChild(emailTd);

        let editTd=document.createElement('td');
        editTd.innerHTML = `<button onclick="edit(${i})">edit</button>`
        tr.appendChild(editTd);

        let deleteTd=document.createElement('td');
        deleteTd.innerHTML = `<button onclick="deleteAll(${i})">delete</button>`
        tr.appendChild(deleteTd);

        sel('#tableBody').appendChild(tr);
    }
    }


function edit(id) {

    person.login.value = users[id].login;
    person.password.value = users[id].password;
    person.email.value = users[id].email;

    person.button.value = 'Save user';
    editId = id;
    isEditState = true

}

function save() {
    let allValue = {
        login: person.login.value,
        password:  person.password.value,
        email:  person.email.value
    }
    users.splice(editId, 1, allValue);
    isEditState = false
    person.button.value = 'Add user';
    person.login.value = '';
    person.password.value = '';
    person.email.value = '';
}

function deleteAll(id) {
    console.log(users[id]);
    console.log(id);
    users.splice(id, 1)
    render()
}