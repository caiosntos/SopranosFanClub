function validaFaleConosco(){
    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp ("^[A-Za-zÀ-ü]{3,}( [A-Za-zÀ-ü]+)+$");
    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    var fone = document.frmfaleconosco.txtfone.value;
    var exRegFone = RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    if(!exRegFone.test(fone)){
        alert("Preencha o seu número de Telefone corretamente.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }

    var email = document.frmfaleconosco.txtemail.value;
    var exRegMail = new RegExp("\\S+@\\S+\\.\\S+");
    if(!exRegMail.test(email)){
        alert("Preencha o seu E-mail corretamente.");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }

    return true;
}

function enable() {
    var butao = document.getElementById('butao');
    var submit = document.getElementById('submit'); 

    if (butao.checked) {
        submit.removeAttribute("disabled"); 
    } else {
        submit.setAttribute("disabled", "true");
    }
  }

  
