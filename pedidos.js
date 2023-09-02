import {
  lerLocalStorage,
  desenharProdutoCarrinhoSimples,
} from "./src/utilidades";

function criarPedidoHistorico(pedidoComData) {
  const elementoPedido = `<p class='text-xl text-slate-50 text-bold my-4 py-2' >${new Date(
    pedidoComData.dataPedido
  ).toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}</p>
    <section id='container-pedidos-${
      pedidoComData.dataPedido
    }' class='menu-produtos p-4 rounded-md' ></section>
    `;
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += elementoPedido;

  for (const idProduto in pedidoComData.pedido) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      `container-pedidos-${pedidoComData.dataPedido}`,
      pedidoComData.pedido[idProduto]
    );
  }
}

function renderizarHistoricoPedidos() {
  const historico = lerLocalStorage("historico");
  for (const pedidoComData of historico) {
    criarPedidoHistorico(pedidoComData);
  }
}

renderizarHistoricoPedidos();
