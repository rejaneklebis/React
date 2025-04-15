import React, { useEffect, useState } from 'react';

function Relogio() {
  const [horario, setHorario] = useState('');

  useEffect(() => {
    function atualizarRelogio() {
      const agora = new Date();
      let horas = agora.getHours();
      let minutos = agora.getMinutes();
      let segundos = agora.getSeconds();

      horas = horas < 10 ? '0' + horas : horas;
      minutos = minutos < 10 ? '0' + minutos : minutos;
      segundos = segundos < 10 ? '0' + segundos : segundos;

      const novoHorario = `${horas}:${minutos}:${segundos}`;
      setHorario(novoHorario);
    }

    const intervalo = setInterval(atualizarRelogio, 1000);

    // Atualiza o relógio imediatamente ao carregar o componente
    atualizarRelogio();

    // Limpeza do intervalo quando o componente for desmontado
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: '2em' }}>{horario}</h1>
    </div>
  );
}

export default Relogio;
