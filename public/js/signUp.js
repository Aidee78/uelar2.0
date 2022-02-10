const btn = document.querySelector('button');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const pwd = document.querySelector('.password');
const confirmPwd = document.querySelector('.confirm-password');

firstName.querySelector('input').addEventListener('focusout', (event) => {
    checkName(firstName);
});
lastName.querySelector('input').addEventListener('focusout', (event) => {
    checkName(lastName);
});
username.querySelector('input').addEventListener('focusout', (event) => {
    checkUsername(username);
});
email.querySelector('input').addEventListener('focusout', (event) => {
    checkEmail(email);
});
pwd.querySelector('input').addEventListener('focusout', (event) => {
    checkPwd(pwd);
});
confirmPwd.querySelector('input').addEventListener('focusout', (event) => {
    checkConfirmPwd(confirmPwd, pwd);
});
btn.addEventListener('click', (event) => {
    event.preventDefault();
    let allInputs = document.querySelectorAll('.form-field');
    for (let i = 0; i < allInputs.length; i++) {
        removeProgess(allInputs[i]);
    }
    if (checkName(firstName) && checkName(lastName) && checkUsername(username)) {
        if (checkEmail(email) && checkPwd(pwd) && checkConfirmPwd(confirmPwd, pwd)) {
            for (let i = 0; i < allInputs.length; i++) {
                inProgress(allInputs[i]);
            }
        }
    }
});

function checkName(node) {
    let input = node.querySelector('input').value;
    let p = /^[a-zA-Z-]+$/;
    let i = p.test(input);
    if (i) {
        valid(node);
        return true;
    } else {
        error(node);
    }
    return false;
}
function checkUsername(node) {
    let input = node.querySelector('input').value;
    let p = /^[\w@]{6,10}$/;
    let i = p.test(input);

    if (i && (input.length >= 6 && input.length <= 10)) {
        valid(node);
        return true;
    } else {
        error(node);
    }
    return false;
}
function checkEmail(node) {
    let input = node.querySelector('input').value;
    let p = /^[\w.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let i = p.test(input);

    if (i) {
        valid(node);
        return true;
    } else {
        error(node);
    }
    return false;
}
function checkPwd(node) {
    let input = node.querySelector('input').value;
    let p = /^[\w@\.\*]{8,}$/;
    let i = p.test(input);

    if (i) {
        valid(node);
        return true;
    } else {
        error(node);
    }
    return false;
}
function checkConfirmPwd(node1, node2) {
    let input1 = node1.querySelector('input').value;
    let input2 = node2.querySelector('input').value;

    if (input1 == input2) {
        valid(node1);
        return true;
    } else {
        error(node1);
    }
    return false;
}

function inProgress(node) {
    removeProgess(node);
    if (!node.querySelector('.fa-spinner')) {
        let validCont = node.querySelector('.progress');
        let message = document.createElement('i');
        message.setAttribute('class', 'fa fa-spinner fa-spin');
        validCont.appendChild(message);
    }
}
function valid(node) {
    removeProgess(node);
    if (!node.querySelector('.fa-check')) {
        let validCont = node.querySelector('.progress');
        let message = document.createElement('i');
        message.setAttribute('class', 'fa fa-check');
        validCont.appendChild(message);
    }
}
function error(node) {
    removeProgess(node);
    if (!node.querySelector('.error-message')) {
        let validCont = node.querySelector('.progress');
        let warning = document.createElement('i');
        warning.setAttribute('class', 'fa fa-warning');
        validCont.appendChild(warning);
    }
}
function removeProgess(node) {
    let ele = node.querySelector('.progress i');
    if (ele) {
        ele.parentNode.removeChild(ele);
    }
}