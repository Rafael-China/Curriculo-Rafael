document.getElementById('downloadLink').addEventListener('click', function(event) {
    event.preventDefault(); // Impede que o link redirecione para outra página
  
    Swal.fire({
      title: 'Download',
      text: 'Deseja fazer o download do currículo?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        downloadFile();
      }
    });
  });
  
  function downloadFile() {
    // Defina a URL do arquivo que deseja baixar
    var fileUrl = 'Curriculo Rafael Nogueira.pdf';
  
    // Crie um elemento de link temporário
    var link = document.createElement('a');
    link.href = fileUrl;
  
    // Defina o nome do arquivo
    link.download = 'Curriculo Rafael Nogueira.pdf';
  
    // Adicione o link ao documento e clique nele
    document.body.appendChild(link);
    link.click();
  
    // Remova o link do documento
    document.body.removeChild(link);
  }
  