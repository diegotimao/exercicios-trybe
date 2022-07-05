const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const renda = 1000;

const despesaMensal = (despesas, renda, callback) => {
  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R${renda},00
    Gasto: ${despesaTotal},00
    Saldo: ${saldoFinal},00
  `);
};

const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, current) => acc + current[0], 0);
  return despesaTotal;
};

despesaMensal(despesas, renda, somaDespesas);