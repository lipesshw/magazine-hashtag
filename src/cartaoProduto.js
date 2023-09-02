import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='border-solid w-80 h-[650px] m-2 flex flex-col p-2 justify-between menu-produtos shadow-slate-400 rounded-lg group ${
      produtoCatalogo.feminino ? "feminino" : "masculino"
    }' id="card-produto-${produtoCatalogo.id}">
        <img
        src="./assets/img/${produtoCatalogo.imagem}"
        alt="Produto 1 do Magazine Hashtag."
        class='borda'
        />
        <p class='p-1'><strong>Marca:</strong> ${produtoCatalogo.marca}</p>
        <p class='p-1'><strong>Nome:</strong> ${produtoCatalogo.nome}</p>
        <p class='p-1'><strong>Preço:</strong> $${produtoCatalogo.preco}</p>
        <button id='adicionar-${
          produtoCatalogo.id
        }' class='bg-bluezin py-2 text-slate-200'
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}
