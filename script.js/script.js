document.addEventListener('DOMContentLoaded', function(){
  let tamanhoAtualFonte = 1;

  const botaoAumentarFonte = document.getElementById('aumentar-fonte');
  const botaoDiminuirFonte = document.getElementById('diminuir-fonte');

  butaddFonte.addEventListener('click', function(){
    tamanhoAtualFonte += 0,5;
    document.body.style.fontSize = '$(tamanhoAtualFonte)rem';
  }
}