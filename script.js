// ================= FORMATAR PREÇO =================
function formatarMoeda(valor) {
  if (valor === null || valor === undefined) {
    return "R$ 0,00";
  }
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);
}


// PRODUTOS DO SITE
let produtos = [{
  id: 1,
  nome: "iPhone 15 Pro",
  categoria: "smartphones",
  preco: 8999,
  precoOriginal: 8999,
  desconto: 11,
  imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
  imagensDetalhes: [
    "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
    "https://m.media-amazon.com/images/I/61irT-Uu+8L._AC_SL1500_.jpg",
    "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.og.jpg?202508202249"
  ],
  descricao: "Smartphone Apple com câmera avançada"
}, {
  id: 2,
  nome: "MacBook Air M2",
  categoria: "laptops",
  preco: 10999,
  precoOriginal: 10999,
  desconto: 18,
  imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
  imagensDetalhes: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    "https://files.tecnoblog.net/wp-content/uploads/2020/11/macbook-air-m1-1060x601.jpg",
    "https://s2-techtudo.glbimg.com/bOXEGldGAhTATsM1Lbx11J6-WFQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/z/7/H4UsgkQ1qbLCfp7YdBOA/7.png"
  ],
  descricao: "Notebook Apple ultrafino e potente"
}, {
  id: 3,
  nome: "AirPods Pro",
  categoria: "headphones",
  preco: 2299,
  precoOriginal: 2299,
  desconto: 18,
  imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
  imagensDetalhes: [
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
    "https://www.apple.com/newsroom/images/tile-images/Apple_airpods-pro_new-design-102819.jpg.news_app_ed.jpg",
    "https://media.istockphoto.com/id/1430394155/pt/foto/apple-airpods-pro-2nd-generation-next-to-charging-case-and-packaging-box-on-black-background.jpg?s=612x612&w=0&k=20&c=ymEpYUAeHN1jOIr-mFscrgHQj-xSb2dAZFM3ZK06Jq4="

  ],
  descricao: "Fones sem fio com cancelamento de ruído"
}, {
  id: 4,
  nome: "Samsung Galaxy S24",
  categoria: "smartphones",
  preco: 6299,
  precoOriginal: 6299,
  desconto: 13,
  imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
  imagensDetalhes: [
    "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    "https://images.samsung.com/br/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-violet-back-mo.jpg?imbypass=true",
    "https://ipertech.it/cdn/shop/files/Titanium-Black-nero-S24_ultra.webp?v=1705841310"

  ],
  descricao: "Smartphone Samsung com tela AMOLED"
}, {
  id: 5,
  nome: "Apple Watch Series 9",
  categoria: "smartwatch",
  preco: 3799,
  precoOriginal: 3799,
  desconto: 13,
  imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
  imagensDetalhes: [
    "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
    "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/tile/Apple-Watch-S9-hero-230912.jpg.og.jpg?202508202107",
    "https://www.apple.com/br/watch/images/overview/consider_modals/fitness/modal_fitness_running__esbopqf0xmy6_large.jpg"

  ],
  descricao: "Relógio inteligente com monitoramento"
}, {
  id: 6,
  nome: "Teclado Mecânico",
  categoria: "accessories",
  preco: 499,
  precoOriginal: null,
  desconto: null,
  imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
  imagensDetalhes: [
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    "https://cdn.awsli.com.br/2500x2500/1318/1318167/produto/203163525/k614rgb-5-kvyvhh.jpg",
    "https://images.tcdn.com.br/img/img_prod/910633/teclado_mecanico_usb_gamer_aps_tkl_rgb_switch_blue_redragon_k607w_rgb_branco_2171_1_19224f94f9668ad1ba6c14c868f994e4.jpg"
  ],
  descricao: "Teclado mecânico RGB para gamers"
}, {
  id: 7,
  nome: "Sony WH-1000XM5",
  categoria: "headphones",
  preco: 2999,
  precoOriginal: 2999,
  desconto: 17,
  imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
  imagensDetalhes: [
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
    "https://tm.ibxk.com.br///2022/05/12/12162826866410.jpg?ims=1200x675",
    "https://cdn.lesnumeriques.com/optim/test/18/182435/f7d49be9-nda-12-05-a-18h-casque-nomade-bluetooth-sony-wh-1000xm5-un-champion-toujours-aussi-vaillant-mais-qui-perd-de-sa-superbe__w1280_wtmk.jpeg"

  ],
  descricao: "Fone com cancelamento de ruído"
}, {
  id: 8,
  nome: "Dell XPS 13",
  categoria: "laptops",
  preco: 7999,
  precoOriginal: null,
  desconto: null,
  imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
  imagensDetalhes: [
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
    "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/media-gallery/touch/silver/notebook-xps-13-9345-t-silver-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&wid=3988&hei=2361&qlt=100,1&resMode=sharp2&size=3988,2361&chrss=full&imwidth=5000",
    "https://s2-techtudo.glbimg.com/4A8c_BpkTe05678Z_aiWhGWMyXc=/0x0:1280x1000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/d/G/XO4eeIRrymjkVAUBvcSA/dell-xps13-plus-04.jpg"
  ],
  descricao: "Notebook Windows premium"
}, {
  id: 9,
  nome: "Redmi Buds 6 Lite",
  categoria: "headphones",
  preco: 275.90,
  precoOriginal: null,
  desconto: null,
  imagem: "https://malikashop.co.mz/cdn/shop/files/IMG_2437_800x.jpg?v=1747136785",
  imagensDetalhes: [
    "https://malikashop.co.mz/cdn/shop/files/IMG_2437_800x.jpg?v=1747136785",
    "https://t2.tudocdn.net/730275?w=1920",
    "https://d1r6yjixh9u0er.cloudfront.net/Custom/Content/Products/55/75/5575_fone-bluetooth-redmi-buds-6-lite-xiaomi-com-cancelamento-ativo-de-ruido-azul-xm810azu-prin_l7_638634022471423673.webp"
  ],
  descricao: "Redução de ruído externo"
}, {
  id: 10,
  nome: "Redmi Watch 5",
  categoria: "smartwatch",
  preco: 1287.89,
  precoOriginal: 1287.89,
  desconto: 15,
  imagem: "https://t2.tudocdn.net/735964?w=1920",
  imagensDetalhes: [
    "https://t2.tudocdn.net/735964?w=1920",
    "https://conteudos.meo.pt/catalogo/isell/wearables/Xiaomi/redmi-watch-5/xiaomi-redmi-watch-5-cinza-perfil-800x800-meo.jpg",
    "https://promotop.net/wp-content/uploads/2025/01/xiaomi-redmi-watch-5-active-vale-a-pena-em-2025-1024x576.jpg"

  ],
  descricao: "Tela para ver mais recursos e fazer muito mais"
}, {
  id: 11,
  nome: "Poco X7 Pro",
  categoria: "smartphones",
  preco: 3968.52,
  precoOriginal: 3968.52,
  desconto: 15,
  imagem: "https://images.pexels.com/photos/33001497/pexels-photo-33001497.jpeg",
  imagensDetalhes: [
    "https://images.pexels.com/photos/33001497/pexels-photo-33001497.jpeg",
    "https://mercadodovale.com.br/wp-content/uploads/2025/05/15323701435-poco-x7-pro-5g-amarelo-2-1.png",
    "https://s2-techtudo.glbimg.com/DZLjyMi5y9iZakSK2BnSLDpNvfk=/0x321:700x978/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2025/Z/v/BRvPKhS86jyTNYAhK1tQ/42afc75f7dd7114003c8ff1b5206c614.webp"
  ],
  descricao: "Resistência à água e poeira IP68*"
}, {
  id: 12,
  nome: "Mouse Gamer",
  categoria: "accessories",
  preco: 250.90,
  precoOriginal: null,
  desconto: null,
  imagem: "https://s2-techtudo.glbimg.com/rf-afA7j0Vs5QaG_5lDy7cJ02Zg=/0x0:1500x1500/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2025/e/7/UhHO0HShynuA8KW6o09Q/71yyu-vkvnl.-ac-sl1500-.jpg",
  imagensDetalhes: [
    "https://s2-techtudo.glbimg.com/rf-afA7j0Vs5QaG_5lDy7cJ02Zg=/0x0:1500x1500/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2025/e/7/UhHO0HShynuA8KW6o09Q/71yyu-vkvnl.-ac-sl1500-.jpg",
    "https://www.overloadgames.com.br/img/blog/lista-com-os-melhores-mouses-gamer-para-comprar-em-2025/lista-com-os-melhores-mouses-gamer-para-comprar-em-2025.webp",
    "https://t.ctcdn.com.br/13URWliAhqLH74JvHeQhv2xfqpU=/640x360/smart/i1006135.png"
  ],
  descricao: "De alta sensibilidade"
}, {
  id: 13,
  nome: "Alienware anuncia headset gamer PRO",
  categoria: "accessories",
  preco: 599,
  precoOriginal: 599,
  desconto: 12,
  imagem: "https://s2-techtudo.glbimg.com/E9-kMSQwjlDXUnqETLxHN8aLbMU=/0x0:1750x1314/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/B/e/HcnrNYQLaplSFmthJ1ng/alienware-pro-headset-02.jpg",
  imagensDetalhes: [
    "https://s2-techtudo.glbimg.com/E9-kMSQwjlDXUnqETLxHN8aLbMU=/0x0:1750x1314/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/B/e/HcnrNYQLaplSFmthJ1ng/alienware-pro-headset-02.jpg",
    "https://http2.mlstatic.com/D_NQ_NP_726924-MLB86210359287_062025-O.webp",
    "https://media.alienwarearena.com/media/2024/09/cs2503g0002-gl-co-cs-site-banner-aw-pro-wireless-headset-bk-wh-1024x768.jpg"
  ],
  descricao: "De alta sensibilidade"
}, {
  id: 14,
  nome: "Pc Gamer Avalon",
  categoria: "pcGamer",
  preco: 5735.90,
  precoOriginal: 5735.90,
  desconto: 13,
  imagem: "https://cdn.dooca.store/1841/products/kmex-curvo-pc-site-1-6_640x640+fill_ffffff.jpg?v=1733257915&webp=0",
  imagensDetalhes: [
    "https://cdn.dooca.store/1841/products/kmex-curvo-pc-site-1-6_640x640+fill_ffffff.jpg?v=1733257915&webp=0",
    "https://images.tcdn.com.br/img/img_prod/15959/computador_gamer_amd_ryzen_7_7700_ddr5_16gb_nvme_1tb_geforce_rtx_4060_8gb_fonte_750w_80_plus_19899_1_1a5d574661adec754ae55432d498867e.jpg",
    "https://cdn.dooca.store/1841/products/wdkal3wrbfr3ubqc3hknxdkaa2y4v4gjxrt4_640x640+fill_ffffff.jpg?v=1734575753&webp=0"
  ],
  descricao: "Alto desempenho com jogos de alta qualidade"
}, {
  id: 15,
  nome: "Dell Alienware",
  categoria: "accessories",
  preco: 6999.90,
  precoOriginal: null,
  desconto: null,
  imagem: "https://beesmartstores.com/cdn/shop/products/71YqlxNFjfL._AC_SL1500_2048x.jpg?v=1624084604",
  imagensDetalhes: [
    "https://beesmartstores.com/cdn/shop/products/71YqlxNFjfL._AC_SL1500_2048x.jpg?v=1624084604",
    "https://d1q3zw97enxzq2.cloudfront.net/images/XENEON_FLEX_02.width-540.format-webp.webp",
    "https://5.imimg.com/data5/SELLER/Default/2023/4/297262032/OD/VZ/HQ/49075311/alienware-27-gaming-monitor-aw2723df-500x500.png"
  ],
  descricao: "Mergulhe no êxtase dos jogos: Monitor Curvo Dell Alienware AW3423DWF 34.18”"
}, {
  id: 16,
  nome: "Cadeira Gamer GT Space com Iluminação RGB",
  categoria: "accessories",
  preco: 699.90,
  precoOriginal: null,
  desconto: null,
  imagem: "https://movelcerto.com.br/site/loja/3848-large_default/cadeira-gamer-mc-rgb-preta-com-iluminacao-led.jpg",
  imagensDetalhes: [
    "https://movelcerto.com.br/site/loja/3848-large_default/cadeira-gamer-mc-rgb-preta-com-iluminacao-led.jpg",
    "https://imgs.casasbahia.com.br/1571505449/1xg.jpg"

  ],
  descricao: "Escolha a cor do seu campo de batalha, com os ajustes de luzes RGB "
}, {
  id: 17,
  nome: "Cadeira de jogos Scorpion Modelo 3D",
  categoria: "accessories",
  preco: 18999.90,
  precoOriginal: 18999.90,
  desconto: 15,
  imagem: "https://p.turbosquid.com/ts-thumb/wj/JBpgNx/61/1/jpg/1652630313/600x600/fit_q87/7c377a0636826d49ba03d2b4ae482d1c171c16c2/1.jpg",
  imagensDetalhes: [
    "https://p.turbosquid.com/ts-thumb/wj/JBpgNx/61/1/jpg/1652630313/600x600/fit_q87/7c377a0636826d49ba03d2b4ae482d1c171c16c2/1.jpg",
    "https://www.adrenaline.com.br/wp-content/uploads/2022/03/CORPO-TXT-3-CADEIRA.jpg",
    "https://www.adrenaline.com.br/wp-content/uploads/2022/03/CHAMADA-CADEIRA1.jpg"

  ],
  descricao: "Projetada para longas horas sentado para jogos, trabalho e relaxamento"

}];

const containerProdutos = document.querySelector(".container-produtos");
const modalCarrinho = document.getElementById("modalCarrinho");
const fecharCarrinhoBtn = document.getElementById("fecharCarrinho");

// ================= MEU CARRINHO =================
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id) {
  let logado = localStorage.getItem("logado");
  if (logado !== "true") {
    fecharModalDetalhes();
    modal.style.display = "flex";
    return;
  }

  const produtoOriginal = produtos.find(p => p.id == id);
  if (produtoOriginal) {
    const produtoParaCarrinho = {
      ...produtoOriginal
    };
    if (produtoParaCarrinho.desconto && produtoParaCarrinho.precoOriginal) {
      produtoParaCarrinho.preco =
        produtoParaCarrinho.precoOriginal * (1 - produtoParaCarrinho.desconto / 100);
    }

    let item = carrinho.find(p => p.id == id);
    if (item) {
      item.quantidade += 1;
    } else {
      carrinho.push({
        ...produtoParaCarrinho,
        quantidade: 1,
      });
    }
    salvarCarrinho();
    atualizarBadgeCarrinho();
    exibirToast(`${produtoParaCarrinho.nome} foi adicionado ao carrinho!`);
    fecharModalDetalhes();
  }
}

function atualizarBadgeCarrinho() {
  const badge = document.querySelector("#carrinhoContainer .badge");
  if (badge) badge.textContent = carrinho.reduce((acc, p) => acc + p.quantidade, 0);
}

// === Funções do modal do carrinho ===
function renderizarCarrinho() {
  const listaCarrinho = document.getElementById("listaCarrinho");
  const totalCarrinho = document.getElementById("totalCarrinho");
  const btnFinalizar = document.getElementById("btnFinalizar");

  listaCarrinho.innerHTML = "";
  let total = 0;

  if (carrinho.length === 0) {
    listaCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalCarrinho.textContent = "";
    btnFinalizar.style.display = "none";
    return;
  }

  carrinho.forEach((produto) => {
    const subtotal = produto.preco * produto.quantidade;
    total += subtotal;

    const item = document.createElement("div");
    item.classList.add("item-carrinho");
    item.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="info">
        <span class="nome-item">${produto.nome}</span>
        <span class="preco-item">${formatarMoeda(produto.preco)}</span>
      </div>
      <div class="quantidade-controle">
        <button onclick="mudarQuantidade(${produto.id}, -1)">-</button>
        <span>${produto.quantidade}</span>
        <button onclick="mudarQuantidade(${produto.id}, 1)">+</button>
      </div>
      <button class="remover-item" onclick="removerItem(${produto.id})">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    listaCarrinho.appendChild(item);
  });

  totalCarrinho.textContent = `Total: ${formatarMoeda(total)}`;
  btnFinalizar.style.display = "block";
}

function mudarQuantidade(id, valor) {
  let item = carrinho.find((p) => p.id === id);
  if (item) {
    item.quantidade += valor;
    if (item.quantidade <= 0) {
      removerItem(id);
    } else {
      salvarCarrinho();
      renderizarCarrinho();
      atualizarBadgeCarrinho();
    }
  }
}

function removerItem(id) {
  carrinho = carrinho.filter((p) => p.id !== id);
  salvarCarrinho();
  renderizarCarrinho();
  atualizarBadgeCarrinho();
}

function abrirCarrinho() {
  let logado = localStorage.getItem("logado");
  if (logado !== "true") {
    modal.style.display = "flex";
    return;
  }
  renderizarCarrinho();
  modalCarrinho.style.display = "flex";
}

function fecharCarrinho() {
  modalCarrinho.style.display = "none";
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  carrinho = [];
  salvarCarrinho();
  atualizarBadgeCarrinho();
  fecharCarrinho();

  exibirBannerMensagem("Obrigado pela compra! 🎉");
}

// ================= EXIBIR PRODUTOS =================
let produtosVisiveis = [...produtos];

function mostrarProdutos(listaProdutos) {
  let htmlProdutos = "";
  let produtosCurtidos = [];
  if (localStorage.getItem("logado") === "true") {
    const user = JSON.parse(localStorage.getItem("user"));
    const curtidas = JSON.parse(localStorage.getItem("curtidas_" + user.email)) || {};
    produtosCurtidos = Object.keys(curtidas);
  }

  if (listaProdutos.length === 0) {
    htmlProdutos = `<p style="text-align:center; width:100%">Nenhum produto encontrado.</p>`;
  } else {
    listaProdutos.forEach((prd) => {
      let precoHtml;
      
      // Nova lógica para exibir o preço com desconto
      if (prd.desconto !== null && prd.precoOriginal !== null) {
        const precoAtual = prd.precoOriginal * (1 - prd.desconto / 100);
        precoHtml = `
          <span class="preco-original">${formatarMoeda(prd.precoOriginal)}</span>
          <span class="preco-atual">${formatarMoeda(precoAtual)}</span>
        `;
      } else {
        // Lógica para produtos sem desconto
        precoHtml = `<span class="preco-atual">${formatarMoeda(prd.preco)}</span>`;
      }
      
      const badgeDesconto = prd.desconto !== null ? `<div class="desconto-badge">${prd.desconto}% OFF</div>` : "";
      const isCurtido = produtosCurtidos.includes(prd.id.toString());
      const classeCoracao = isCurtido ? "fa-solid" : "fa-regular";

      htmlProdutos += `
        <div class="cartao-produto" id="produto-${prd.id}">
          ${badgeDesconto}
          <div class="icone-curtida" onclick="gerenciarCurtida(${prd.id})">
            <i class="${classeCoracao} fa-heart"></i>
          </div>
          <img src="${prd.imagem}" class="imagem-produto">
          <div class="info-produto" categoria="${prd.categoria}">
            <h3 class="nome-produto">${prd.nome}</h3>
            <p class="descricao-produto">${prd.descricao}</p>
            <p class="preco-produto">${precoHtml}</p>
            <button class="botao-produto" onclick="verDetalhes(${prd.id})">Ver Detalhes</button>
            <button class="carrinho-btn-card" onclick="adicionarAoCarrinho(${prd.id})">
              <i class="fa-solid fa-cart-shopping"></i> Adicionar ao carrinho
            </button>
          </div>
        </div>
      `;
    });
  }
  containerProdutos.innerHTML = htmlProdutos;
}

// ================= CURTIR PRODUTO =================
function gerenciarCurtida(idProduto) {
  if (localStorage.getItem("logado") !== "true") {
    modal.style.display = "flex";
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const chaveCurtidas = `curtidas_${user.email}`;
  const curtidas = JSON.parse(localStorage.getItem(chaveCurtidas)) || {};

  const iconeElemento = document.querySelector(`#produto-${idProduto} .icone-curtida i`);

  if (curtidas[idProduto]) {
    delete curtidas[idProduto];
    iconeElemento.classList.remove("fa-solid");
    iconeElemento.classList.add("fa-regular");
  } else {
    curtidas[idProduto] = true;
    iconeElemento.classList.remove("fa-regular");
    iconeElemento.classList.add("fa-solid");
  }

  localStorage.setItem(chaveCurtidas, JSON.stringify(curtidas));
  atualizarContadorCurtidas();
  // Aplicar filtros após curtir/descurtir para manter a ordenação
  aplicarFiltrosEOrdenacao();
}

function atualizarContadorCurtidas() {
  const badge = document.querySelector("#curtidasContainer .badge");
  if (!badge) return;

  if (localStorage.getItem("logado") !== "true") {
    badge.textContent = 0;
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const chaveCurtidas = `curtidas_${user.email}`;
  const curtidas = JSON.parse(localStorage.getItem(chaveCurtidas)) || {};
  const numeroCurtidas = Object.keys(curtidas).length;
  badge.textContent = numeroCurtidas;
}

// ================= FILTRO POR CATEGORIA =================
const nav = [{
  id: 'btnNav',
  categoria: 'all'
}, {
  id: 'btnSmartphones',
  categoria: 'smartphones'
}, {
  id: 'btnLaptops',
  categoria: 'laptops'
}, {
  id: 'btnPcGamer',
  categoria: 'pcGamer'
}, {
  id: 'btnHeadphones',
  categoria: 'headphones'
}, {
  id: 'btnAccessories',
  categoria: 'accessories'
}, {
  id: 'btnSmartwatch',
  categoria: 'smartwatch'
}];

nav.forEach(item => {
  const botao = document.getElementById(item.id);
  if (!botao) return;

  botao.addEventListener("click", function() {
    const botoes = document.querySelectorAll(".botao-categorias");
    botoes.forEach(btn => btn.classList.remove("ativo"));
    this.classList.add("ativo");

    if (item.categoria === "all") {
      produtosVisiveis = [...produtos];
    } else {
      produtosVisiveis = produtos.filter(prd => prd.categoria === item.categoria);
    }
    // AQUI: Aplica todos os filtros e ordenação após a filtragem por categoria
    aplicarFiltrosEOrdenacao();
  });
});

// ================= PRODUTOS COM DESCONTO =================
function mostrarOferta() {
  const produtosComDescontos = produtos.filter(prd => prd.desconto !== null);
  produtosVisiveis = [...produtosComDescontos];
  aplicarFiltrosEOrdenacao();

  const botoes = document.querySelectorAll(".botao-categorias");
  botoes.forEach(btn => btn.classList.remove("ativo"));
  const buttonOffer = document.querySelector("#buttonOffer");
  if (buttonOffer) {
    buttonOffer.classList.add("ativo");
  }
}

const buttonOffer = document.querySelector("#buttonOffer");
if (buttonOffer) {
  buttonOffer.addEventListener("click", mostrarOferta);
}

// ================= BUSCA =================
const buscarProdutoInput = document.getElementById("buscarProduto");
const buscarProdutoBtn = document.querySelector(".fa-magnifying-glass");

if (buscarProdutoInput) {
  buscarProdutoInput.addEventListener("input", function() {
    const termoBusca = this.value.toLowerCase();
    produtosVisiveis = produtos.filter(
      (prd) =>
      prd.nome.toLowerCase().includes(termoBusca) ||
      prd.descricao.toLowerCase().includes(termoBusca)
    );
    aplicarFiltrosEOrdenacao();
  });
}

if (buscarProdutoBtn) {
  buscarProdutoBtn.addEventListener("click", function() {
    const termoBusca = buscarProdutoInput.value.toLowerCase();
    produtosVisiveis = produtos.filter(
      (prd) =>
      prd.nome.toLowerCase().includes(termoBusca) ||
      prd.descricao.toLowerCase().includes(termoBusca)
    );
    aplicarFiltrosEOrdenacao();
  });
}

// ================= LOGIN / CADASTRO =================
const modal = document.getElementById("userModal");
const closeModal = document.getElementById("closeModal");
const loginArea = document.getElementById("loginArea");
const cadastroArea = document.getElementById("cadastroArea");
const successMsg = document.getElementById("successMsg");
const usuarioContainer = document.getElementById("usuarioContainer");

function configurarEventosLoginECadastro() {
  const btnUsuario = document.getElementById("usuario");
  if (btnUsuario) {
    btnUsuario.onclick = () => (modal.style.display = "flex");
  }

  const btnCarrinho = document.getElementById("carrinho");
  if (btnCarrinho) {
    btnCarrinho.addEventListener("click", abrirCarrinho);
  }

  const btnCurtidas = document.getElementById("curtidas");
  if (btnCurtidas) {
    btnCurtidas.addEventListener("click", mostrarProdutosCurtidos);
  }

  if (closeModal) {
    closeModal.onclick = () => (modal.style.display = "none");
  }

  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", login);
  }

  const linkCadastro = document.getElementById("linkCadastro");
  if (linkCadastro) {
    linkCadastro.addEventListener("click", showCadastro);
  }

  const salvarCadastroBtn = document.getElementById("salvarCadastroBtn");
  if (salvarCadastroBtn) {
    salvarCadastroBtn.addEventListener("click", salvarCadastro);
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }

  const fecharCarrinhoBtn = document.getElementById("fecharCarrinho");
  if (fecharCarrinhoBtn) {
    fecharCarrinhoBtn.addEventListener("click", fecharCarrinho);
  }

  const finalizarCompraBtn = document.getElementById("btnFinalizar");
  if (finalizarCompraBtn) {
    finalizarCompraBtn.addEventListener("click", finalizarCompra);
  }

  const fecharDetalhesBtn = document.getElementById("fecharDetalhesBtn");
  if (fecharDetalhesBtn) {
    fecharDetalhesBtn.onclick = fecharModalDetalhes;
  }
}

function showCadastro() {
  loginArea.style.display = "none";
  cadastroArea.style.display = "block";
  successMsg.style.display = "none";
}

function salvarCadastro() {
  let nome = document.getElementById("cadNome").value;
  let email = document.getElementById("cadEmail").value;
  let senha = document.getElementById("cadSenha").value;

  if (nome && email && senha) {
    localStorage.setItem("user", JSON.stringify({
      nome,
      email,
      senha
    }));
    successMsg.style.display = "block";

    setTimeout(() => {
      cadastroArea.style.display = "none";
      loginArea.style.display = "block";
      successMsg.style.display = "none";
    }, 2000);
  } else {
    alert("Preencha todos os campos!");
  }
}

function mostrarIconesPadrao() {
  usuarioContainer.innerHTML = `
        <button id="usuario"><i class="fa-solid fa-user"></i></button>
        <div class="cart" id="carrinhoContainer">
            <button id="carrinho"><i class="fa-solid fa-cart-shopping"></i><span class="badge">0</span></button>
        </div>
        <div class="curtidasContainer" id="curtidasContainer">
            <button id="curtidas"><i class="fa-solid fa-heart"></i><span class="badge">0</span></button>
        </div>
    `;
  configurarEventosLoginECadastro();
  atualizarBadgeCarrinho();
  atualizarContadorCurtidas();
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let senha = document.getElementById("loginSenha").value;
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && email === user.email && senha === user.senha) {
    modal.style.display = "none";
    mostrarBemVindo(user.nome);
    localStorage.setItem("logado", "true");
    aplicarFiltrosEOrdenacao();
    atualizarContadorCurtidas();
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

function mostrarBemVindo(nome) {
  usuarioContainer.innerHTML = `
        <span class="bem-vindo">Bem-vindo, ${nome}!</span>
        <button class="logout-btn" id="logoutBtn"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
        <div class="cart" id="carrinhoContainer">
            <button id="carrinho"><i class="fa-solid fa-cart-shopping"></i><span class="badge">0</span></button>
        </div>
        <div class="curtidasContainer" id="curtidasContainer">
            <button id="curtidas"><i class="fa-solid fa-heart"></i><span class="badge">0</span></button>
        </div>
    `;
  configurarEventosLoginECadastro();
  atualizarBadgeCarrinho();
  atualizarContadorCurtidas();
}

function logout() {
  localStorage.removeItem("logado");
  carrinho = [];
  salvarCarrinho();
  mostrarIconesPadrao();
  atualizarBadgeCarrinho();
  aplicarFiltrosEOrdenacao();
}

// ================= BANNER DE MENSAGEM =================
function exibirBannerMensagem(texto) {
  const banner = document.createElement("div");
  banner.classList.add("banner-mensagem");
  banner.textContent = texto;

  document.body.prepend(banner);

  setTimeout(() => {
    banner.classList.add("fade-out");
    setTimeout(() => banner.remove(), 500);
  }, 3000);
}

// ================= TOAST NOTIFICATION =================
function exibirToast(mensagem) {
  const toast = document.getElementById("toast");
  if (toast) {
    toast.textContent = mensagem;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
}

// ================== MODAL DETALHES ==================
const modalDetalhes = document.getElementById("modalDetalhes");
const detalhesImagemPrincipal = document.getElementById("detalhesImagemPrincipal");
const detalhesGaleria = document.getElementById("detalhesGaleria");
const detalhesNome = document.getElementById("detalhesNome");
const detalhesDescricao = document.getElementById("detalhesDescricao");
const detalhesPreco = document.getElementById("detalhesPreco");
const btnAdicionarModal = document.getElementById("btnAdicionarModal");

function verDetalhes(idProduto) {
  const produto = produtos.find((p) => p.id === idProduto);
  if (!produto) return;

  detalhesImagemPrincipal.src = produto.imagensDetalhes[0];
  detalhesGaleria.innerHTML = "";

  produto.imagensDetalhes.forEach((img, index) => {
    const imgEl = document.createElement("img");
    imgEl.src = img;
    imgEl.alt = `${produto.nome} - ${index + 1}`;
    imgEl.onclick = () => (detalhesImagemPrincipal.src = img);
    detalhesGaleria.appendChild(imgEl);
  });

  detalhesNome.textContent = produto.nome;
  detalhesDescricao.textContent = produto.descricao;

  let precoExibido = produto.preco;
  if (produto.desconto && produto.precoOriginal) {
    precoExibido = produto.precoOriginal * (1 - produto.desconto / 100);
  }
  detalhesPreco.innerHTML = `${formatarMoeda(precoExibido)}`;

  if (btnAdicionarModal) {
    btnAdicionarModal.onclick = () => {
      let logado = localStorage.getItem("logado") === "true";
      if (logado) {
        adicionarAoCarrinho(produto.id);
      } else {
        fecharModalDetalhes();
        modal.style.display = "flex";
      }
    };
  }

  modalDetalhes.style.display = "flex";
}

function fecharModalDetalhes() {
  modalDetalhes.style.display = "none";
}

window.addEventListener("click", (e) => {
  if (e.target === modalDetalhes) {
    fecharModalDetalhes();
  }
  if (e.target === modalCarrinho) {
    fecharCarrinho();
  }
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ================= PRODUTOS CURTIDOS =================
function mostrarProdutosCurtidos() {
  const logado = localStorage.getItem("logado") === "true";
  if (!logado) {
    modal.style.display = "flex";
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));
  const chaveCurtidas = `curtidas_${user.email}`;
  const curtidas = JSON.parse(localStorage.getItem(chaveCurtidas)) || {};
  const idsCurtidos = Object.keys(curtidas).map(Number);

  produtosVisiveis = produtos.filter((prd) => idsCurtidos.includes(prd.id));

  aplicarFiltrosEOrdenacao();

  const botoes = document.querySelectorAll(".botao-categorias");
  botoes.forEach((btn) => btn.classList.remove("ativo"));
}

// ================= SLIDER E ORDENAÇÃO =================
const meuSlider = document.getElementById('meuSlider');
const valorExibido = document.getElementById('valorExibido');
const ordenacao = document.getElementById('ordenacao');

// Funções para pegar os valores do slider e ordenação
function getPrecoMaximo() {
  return parseFloat(meuSlider.value);
}

function getTipoOrdenacao() {
  return ordenacao.value;
}

// ----------------------------------------------------
// Função unificada para aplicar todos os filtros
// ----------------------------------------------------
function aplicarFiltrosEOrdenacao() {
  let produtosParaExibir = [...produtosVisiveis];

  // 1. FILTRO POR PREÇO (baseado no slider)
  const precoMaximo = getPrecoMaximo();
  produtosParaExibir = produtosParaExibir.filter(produto => {
    // Calcula o preço final do produto (com desconto se houver)
    const precoReal = produto.precoOriginal && produto.desconto ?
      produto.precoOriginal * (1 - produto.desconto / 100) :
      produto.preco;
    return precoReal <= precoMaximo;
  });

  // 2. ORDENAÇÃO
  const tipoOrdenacao = getTipoOrdenacao();
  switch (tipoOrdenacao) {
    case "nome-asc":
      produtosParaExibir.sort((a, b) => a.nome.localeCompare(b.nome));
      break;
    case "nome-desc":
      produtosParaExibir.sort((a, b) => b.nome.localeCompare(a.nome));
      break;
    case "valor-asc":
      produtosParaExibir.sort((a, b) => {
        const precoA = a.precoOriginal && a.desconto ? a.precoOriginal * (1 - a.desconto / 100) : a.preco;
        const precoB = b.precoOriginal && b.desconto ? b.precoOriginal * (1 - b.desconto / 100) : b.preco;
        return precoA - precoB;
      });
      break;
    case "valor-desc":
      produtosParaExibir.sort((a, b) => {
        const precoA = a.precoOriginal && a.desconto ? a.precoOriginal * (1 - a.desconto / 100) : a.preco;
        const precoB = b.precoOriginal && b.desconto ? b.precoOriginal * (1 - b.desconto / 100) : b.preco;
        return precoB - precoA;
      });
      break;
  }
  mostrarProdutos(produtosParaExibir);
}

// Configuração inicial do slider e eventos
if (meuSlider && valorExibido) {
  valorExibido.textContent = formatarMoeda(meuSlider.value);
  meuSlider.addEventListener('input', function() {
    valorExibido.textContent = formatarMoeda(this.value);
  });
  meuSlider.addEventListener('change', aplicarFiltrosEOrdenacao);
}

if (ordenacao) {
  ordenacao.addEventListener('change', aplicarFiltrosEOrdenacao);
}

// ================= AO CARREGAR =================
window.onload = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let logado = localStorage.getItem("logado");

  configurarEventosLoginECadastro();

  if (user && logado === "true") {
    mostrarBemVindo(user.nome);
  } else {
    mostrarIconesPadrao();
  }

  // APLICA TODOS OS FILTROS E MOSTRA OS PRODUTOS
  aplicarFiltrosEOrdenacao();

  atualizarBadgeCarrinho();
  atualizarContadorCurtidas();
};
window.onload = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let logado = localStorage.getItem("logado");

  configurarEventosLoginECadastro();

  if (user && logado === "true") {
    mostrarBemVindo(user.nome);
  } else {
    mostrarIconesPadrao();
  } 

  if (meuSlider) {
    meuSlider.addEventListener('input', aplicarFiltrosEOrdenacao);
  }
  if (ordenacao) {
    ordenacao.addEventListener('change', aplicarFiltrosEOrdenacao);
  }

  // AQUI É ONDE VOCÊ MOSTRA TODOS OS PRODUTOS
  mostrarProdutos(produtos);

  atualizarBadgeCarrinho();
  atualizarContadorCurtidas();
};
// Seleciona o botão do hambúrguer e o menu de navegação
const btnHamburguerCategorias = document.getElementById('btnHamburguerCategorias');
const navCategorias = document.getElementById('nav-categorias');

// Seleciona todos os botões de categoria dentro do menu
const botoesCategorias = document.querySelectorAll('.botao-categorias');

// Evento para abrir/fechar o menu ao clicar no botão do hambúrguer
btnHamburguerCategorias.addEventListener('click', () => {
  navCategorias.classList.toggle('show');
});

// Evento para fechar o menu ao clicar em qualquer botão de categoria
botoesCategorias.forEach(botao => {
  botao.addEventListener('click', () => {
    navCategorias.classList.remove('show');
  });
});