function validaFaleConosco(){
    if(document.frmfaleconosco.txtnome.value==""){
        alert("Preencha o campo Nome.");
        document.frmfaleconosco.textnome.focus();
        return false;
    }

    if(document.frmfaleconosco.txtfone.value==""){
        alert("Preencha o seu número de telefone");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }

    if(document.frmfaleconosco.txtemail.value==""){
        alert("Preencha o seu e-mail");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }

    if(document.frmfaleconosco.selmotivo.value==""){
        alert("Preencha o motivo");
        document.frmfaleconosco.selmotivo.focus();
        return false;
    }

    if(document.frmfaleconosco.txcomentario.value==""){
        alert("Preencha o comentário");
        document.frmfaleconosco.txcomentario.focus();
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
