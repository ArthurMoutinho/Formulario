const form= document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector('#message')





form.addEventListener("submit", (event) => {
    event.preventDefault(); //para não ser enviado assim que recarregar a pagina

    //verifica se o nome esta vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha seu nome");
        return;
    }

    //verifica se o email esta preenchido 
    if(emailInput.value === "" ){
        alert("Por favor, preencha seu Email");
        return;
        
    }

    //Verifica se a senha esta preenchida
    if(!validatePassord(passwordInput.value, 8)){
        alert("A senha precisa de no minimo 8 digitos")
        return;
    } 


    if(jobSelect.value === ""){
     alert("Por favor, preenche ou escreva uma mensagem");
     return;
    }


    //se todos os campos estiverem preenchidos, envie o form
    form.submit();
});

     
//função que valida a senha

function validatePassord(password,minDigits){
    if(password.length >= minDigits){
        //senha valida
        return true
    }
    //senha invalida
    return false
}

console.log(passwordInput.value)