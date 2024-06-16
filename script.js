document.addEventListener('DOMContentLoaded', function() {
    const registrarBtn = document.getElementById('registrarBtn');
    const listaRegistros = document.getElementById('listaRegistros');
    const statusDiv = document.getElementById('status');
    let ultimoCodigoQR = null;
  
    registrarBtn.addEventListener('click', function() {
      if (!ultimoCodigoQR) {
        exibirStatus('Por favor, escaneie um QR Code primeiro.');
        return;
      }
  
      const agora = new Date();
      const dataHora = agora.toLocaleString();
  
      // Simulando registro no banco de dados
      const registro = `${ultimoCodigoQR} - ${dataHora}`;
      registrarNoBancoDeDados(registro);
  
      // Atualizando UI
      const li = document.createElement('li');
      li.textContent = registro;
      li.className = 'registro';
      listaRegistros.insertBefore(li, listaRegistros.firstChild);
  
      exibirStatus('Ponto registrado com sucesso.');
    });
  
    function exibirStatus(mensagem) {
      statusDiv.textContent = mensagem;
      setTimeout(() => {
        statusDiv.textContent = '';
      }, 3000);
    }
  
    // Simulação de leitura de QR Code
    // Neste exemplo, assumimos que um QR Code foi lido e seu valor é armazenado em `ultimoCodigoQR`.
    // Em um aplicativo real, você usaria uma biblioteca para a leitura de QR Code.
    function simularLeituraQRCode(codigo) {
      ultimoCodigoQR = codigo;
      exibirStatus(`QR Code lido: ${codigo}`);
    }
  
    // Simulação de um evento de leitura de QR Code
    simularLeituraQRCode('IDCOLAB123'); // Exemplo de ID de colaborador
  });
  
  // Função simulada para registrar no banco de dados
  function registrarNoBancoDeDados(registro) {
    // Aqui você implementaria a lógica real para enviar o registro para o banco de dados
    console.log(`Registrando no banco de dados: ${registro}`);
  }
  