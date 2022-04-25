// LoginBox JS  LoginLabel_Small
function LoginProcess(){
    let LoginID = document.getElementById('LoginID');
    let LoginPW = document.getElementById('LoginPW');
    if (LoginID.value == 'Guest' && LoginPW.value == 'Guest' ){
        document.getElementById('LoginLabel').innerText = 'Guest';
        document.getElementById('LoginLabel_Small').innerText = 'Guest #9527';
        document.getElementById('LoginSwtich').checked = false;
        document.getElementById("LoginLabel").setAttribute('for', 'GuestSwtich');
        document.getElementById("LoginLabel_Small").setAttribute('for', 'GuestSwtich');
        }
    else{
        document.getElementById('LoginMsg').innerText = '帳號密碼錯誤，請檢查後再輸入';
        }
}

function LogOutProcess(){
    let LogOut = document.getElementById('LoginOut');
    document.getElementById('LoginLabel').innerText = 'Login';
    // Due to fontAwesome unique icon, set LoginLabel_Small by innerHTML
    document.getElementById('LoginLabel_Small').innerHTML = '<i class="fa-solid fa-user"></i>Login';
    document.getElementById('GuestSwtich').checked = false;
    document.getElementById("LoginLabel").setAttribute('for', 'LoginSwtich');
    document.getElementById("LoginLabel_Small").setAttribute('for', 'LoginSwtich');
}

function ToDo(){

    let LoginCancel = document.getElementById('LoginCancel');
    let LoginConfirm = document.getElementById('LoginConfirm');
    let LogOut = document.getElementById('LoginOut');


    LoginCancel.addEventListener('click', function(){
        document.getElementById('LoginID').value = 'Guest';
        document.getElementById('LoginPW').value = 'Guest';
        document.getElementById('LoginMsg').innerText = '';
        document.getElementById('LoginSwtich').checked = false;
    });
    
    LoginConfirm.addEventListener('click', LoginProcess);
    LogOut.addEventListener('click', LogOutProcess);
}

window.addEventListener('load', ToDo);
