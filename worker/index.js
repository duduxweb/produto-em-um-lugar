const page = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#f7f8fb">
  <meta name="description" content="Consulte dados públicos de produtos da Shopee, AliExpress e Mercado Livre em uma única ficha.">
  <link rel="manifest" href="/manifest.webmanifest">
  <title>Produto em Um Lugar — leitor de produtos</title>
  <style>
    :root{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#172033;background:#f7f8fb;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;--ink:#172033;--muted:#697386;--line:#e6e9ef;--blue:#315cf5;--teal:#13a68b;--card:#fff;--soft:#f0f3f8}
    *{box-sizing:border-box}body{margin:0;min-width:320px;background:radial-gradient(ellipse at 50% -20%,#e8edff 0,transparent 48%),#f7f8fb}.wrap{width:min(1080px,calc(100% - 36px));margin:0 auto}.top{height:76px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e8ebf1}.brand{display:flex;gap:11px;align-items:center;font-weight:760;letter-spacing:-.04em;font-size:18px}.brand-mark{width:35px;height:35px;border-radius:12px;display:grid;place-items:center;background:var(--ink);color:#fff;font-size:15px;box-shadow:0 5px 14px #17203322}.top-note,.eyebrow{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#768096;font-weight:720}.hero{text-align:center;padding:58px 0 29px}.eyebrow{display:inline-flex;align-items:center;gap:8px;color:#4562da}.live-dot{width:7px;height:7px;border-radius:50%;background:#13a68b;box-shadow:0 0 0 4px #13a68b19}.hero h1{margin:18px auto 12px;max-width:760px;font-size:clamp(36px,6vw,61px);line-height:1.02;letter-spacing:-.065em;font-weight:760}.hero p{margin:0 auto;color:var(--muted);font-size:16px;line-height:1.65;max-width:610px}.search-card{max-width:800px;margin:28px auto 0;padding:11px;background:#fff;border:1px solid #e5e8ef;border-radius:20px;box-shadow:0 18px 50px #28355812}.input-row{display:flex;align-items:center;gap:10px}.input-icon{margin-left:12px;color:#8490a5;flex:none}.url-input{min-width:0;flex:1;height:52px;border:0;outline:0;background:transparent;font:inherit;color:var(--ink);font-size:15px}.url-input::placeholder{color:#9aa3b4}.btn{height:50px;padding:0 20px;border:0;border-radius:13px;background:var(--blue);color:#fff;font:inherit;font-weight:700;white-space:nowrap;cursor:pointer;box-shadow:0 6px 16px #315cf533;transition:transform .15s,background .15s}.btn:hover{background:#244be0;transform:translateY(-1px)}.btn:disabled{opacity:.62;cursor:wait;transform:none}.paste{display:none;border:0;background:#f1f3f7;color:#677187;border-radius:10px;padding:10px;font:inherit;cursor:pointer}.hint{display:flex;justify-content:space-between;gap:12px;padding:9px 11px 1px;color:#929bad;font-size:12px}.shops{display:flex;justify-content:center;gap:9px;flex-wrap:wrap;margin:20px auto 0}.shop{display:inline-flex;align-items:center;gap:7px;padding:8px 12px;border:1px solid #e4e8f0;background:#ffffffa8;border-radius:99px;color:#596477;font-size:12px;font-weight:650}.shop i{display:block;width:8px;height:8px;border-radius:50%;background:#ef5b4f}.shop:nth-child(2) i{background:#f39a32}.shop:nth-child(3) i{background:#42a56b}.privacy{font-size:12px;color:#8992a3;margin:12px auto 0}.status{max-width:800px;margin:17px auto 0;min-height:22px;color:#687386;font-size:14px;text-align:left}.status.error{color:#b43d42}.status.ok{color:#177c68}.status-row{display:none;align-items:center;gap:9px}.spinner{width:16px;height:16px;border:2px solid #d7def6;border-top-color:var(--blue);border-radius:50%;animation:spin .7s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.result{max-width:900px;margin:24px auto 70px;display:none}.result.show{display:block}.product-head{display:grid;grid-template-columns:240px 1fr;gap:29px;background:var(--card);padding:26px;border:1px solid var(--line);border-radius:22px;box-shadow:0 14px 40px #2835580b}.gallery{min-width:0}.main-image{width:100%;aspect-ratio:1/1;object-fit:contain;background:#f7f8fb;border:1px solid #edf0f4;border-radius:16px}.thumbs{display:flex;gap:8px;overflow-x:auto;margin-top:10px;padding-bottom:3px}.thumb{width:47px;height:47px;object-fit:contain;background:#f7f8fb;border:1px solid var(--line);border-radius:9px;cursor:pointer;flex:none}.summary{min-width:0}.result-label{display:flex;justify-content:space-between;align-items:center;gap:10px}.market-tag,.state-tag{border-radius:99px;background:#f0f3ff;color:#425de0;padding:7px 10px;font-size:11px;font-weight:740}.state-tag{background:#e9f7f2;color:#187a67}.title{font-size:26px;line-height:1.2;letter-spacing:-.04em;margin:17px 0 16px;overflow-wrap:anywhere}.prices{display:flex;align-items:baseline;gap:11px;flex-wrap:wrap}.price{font-size:34px;letter-spacing:-.055em;font-weight:790}.old-price{font-size:14px;color:#9aa2b1;text-decoration:line-through}.discount{color:#16866f;font-size:12px;font-weight:760}.quick-facts{display:flex;gap:8px;flex-wrap:wrap;margin:16px 0 20px}.fact{font-size:12px;color:#596477;padding:8px 10px;border:1px solid var(--line);border-radius:10px}.fact strong{color:#202b41}.link-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.store-link{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;height:43px;padding:0 14px;border-radius:11px;background:#172033;color:#fff;font-size:13px;font-weight:700}.timestamp{color:#8a93a3;font-size:11px}.details-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px}.detail-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:20px;min-width:0}.detail-card h2{font-size:14px;margin:0 0 15px;letter-spacing:-.02em}.description{white-space:pre-wrap;overflow-wrap:anywhere;color:#596477;font-size:13px;line-height:1.72;max-height:340px;overflow:auto}.specs{display:grid;grid-template-columns:1fr;gap:0}.spec{display:flex;justify-content:space-between;gap:14px;border-top:1px solid #eef0f4;padding:10px 0;font-size:12px}.spec:first-child{border-top:0;padding-top:0}.spec dt{color:#828b9c;flex:0 0 42%}.spec dd{margin:0;text-align:right;color:#354056;font-weight:630;overflow-wrap:anywhere}.variants{display:flex;flex-wrap:wrap;gap:8px}.variant{border:1px solid #e8ebf1;background:#f7f8fb;border-radius:9px;padding:8px 10px;font-size:12px;color:#4f5b70}.empty{color:#8992a3;font-size:13px;line-height:1.6}.footnote{max-width:900px;margin:0 auto 36px;color:#8790a0;font-size:11px;line-height:1.6;text-align:center}.mobile-paste{display:none}
    @media(max-width:680px){.wrap{width:min(100% - 24px,540px)}.top{height:63px}.top-note{font-size:9px}.hero{padding:45px 0 22px}.hero h1{font-size:42px;max-width:500px}.hero p{font-size:14px}.search-card{margin-top:22px;padding:8px;border-radius:16px}.input-row{gap:5px}.input-icon{display:none}.url-input{height:49px;font-size:14px;padding-left:9px}.btn{height:47px;padding:0 13px;font-size:13px}.hint{font-size:10px;padding-top:8px}.hint span:last-child{display:none}.paste{display:block}.shops{gap:6px}.shop{padding:7px 9px;font-size:10px}.privacy{font-size:10px}.status{font-size:12px}.result{margin:18px auto 45px}.product-head{grid-template-columns:1fr;gap:18px;padding:15px;border-radius:18px}.gallery{display:grid;grid-template-columns:72px 1fr;gap:9px;align-items:start}.main-image{grid-column:2;grid-row:1;aspect-ratio:1/1;max-height:270px}.thumbs{grid-column:1;grid-row:1;display:flex;flex-direction:column;max-height:270px;overflow-y:auto;overflow-x:hidden;margin-top:0}.thumb{width:66px;height:66px}.title{font-size:21px;margin:13px 0}.price{font-size:29px}.quick-facts{margin:13px 0 16px}.details-grid{grid-template-columns:1fr;gap:10px;margin-top:10px}.detail-card{padding:16px;border-radius:15px}.footnote{padding:0 12px}.result-label{align-items:flex-start}}
    @media(max-width:380px){.hero h1{font-size:37px}.brand{font-size:16px}.brand-mark{width:31px;height:31px}.btn{padding:0 10px}.paste{padding:8px}}
  </style>
</head>
<body>
  <div class="wrap">
    <header class="top"><div class="brand"><span class="brand-mark">P/</span><span>Produto em Um Lugar</span></div><span class="top-note">Consulta pública · sem login nas lojas</span></header>
    <main>
      <section class="hero">
        <div class="eyebrow"><span class="live-dot"></span>LEITOR DE PRODUTOS</div>
        <h1>Veja os detalhes antes de comprar.</h1>
        <p>Cole um link e reúna em uma ficha o que a página pública da loja mostrar: preço, descrição, fotos, variações, vendedor e avaliações.</p>
        <form class="search-card" id="form">
          <div class="input-row">
            <svg class="input-icon" width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10.8 3.8a7 7 0 1 0 4.3 12.5l4.2 4.1 1.4-1.4-4.1-4.2a7 7 0 0 0-5.8-11Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            <input class="url-input" id="url" type="url" inputmode="url" autocomplete="url" placeholder="Cole o link do produto aqui" aria-label="Link do produto" required>
            <button class="paste" type="button" id="paste" aria-label="Colar link da área de transferência">Colar</button>
            <button class="btn" id="submit" type="submit">Consultar produto <span aria-hidden="true">↗</span></button>
          </div>
          <div class="hint"><span>Funciona com links de produto e links curtos das lojas.</span><span>HTTPS recomendado</span></div>
        </form>
        <div class="shops" aria-label="Lojas compatíveis"><span class="shop"><i></i>Shopee</span><span class="shop"><i></i>AliExpress</span><span class="shop"><i></i>Mercado Livre</span></div>
        <div class="privacy">O link é consultado na hora; esta página não pede senha nem dados de pagamento.</div>
        <div class="status" id="status" role="status" aria-live="polite"><span id="message">Pronto para consultar.</span><span class="status-row" id="loading"><span class="spinner"></span><span>Buscando os dados públicos do produto…</span></span></div>
      </section>
      <section class="result" id="result" aria-live="polite"></section>
    </main>
    <footer class="footnote">Os dados dependem do conteúdo público disponível no momento da consulta. Algumas lojas ocultam campos, carregam detalhes só no aplicativo ou podem limitar acessos automatizados. Nenhuma compra é realizada por esta ferramenta.</footer>
  </div>
  <script>
    const form=document.querySelector('#form'),input=document.querySelector('#url'),button=document.querySelector('#submit'),status=document.querySelector('#status'),message=document.querySelector('#message'),loading=document.querySelector('#loading'),result=document.querySelector('#result');
    const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    function setState(text,kind=''){message.textContent=text;status.className='status '+kind;loading.style.display='none'}
    function money(value,currency){if(value===null||value===undefined||value==='')return '';const n=Number(value);if(!Number.isFinite(n))return String(value);try{return new Intl.NumberFormat('pt-BR',{style:'currency',currency:currency||'BRL'}).format(n)}catch{return \`\${currency||'R$'} \${n.toFixed(2)}\`}}
    function fact(label,value){return value?\`<span class="fact"><strong>\${esc(label)}:</strong> \${esc(value)}</span>\`:''}
    function spec(label,value){return value?\`<div class="spec"><dt>\${esc(label)}</dt><dd>\${esc(value)}</dd></div>\`:''}
    function render(p){
      const pics=(p.images||[]).filter(x=>typeof x==='string'&&x.toLowerCase().startsWith('https://')).slice(0,14),first=pics[0]||'';
      const currency=p.currency||'BRL',price=money(p.price,currency),old=money(p.oldPrice,currency);
      const stars=p.rating?\`\${p.rating} ★\${p.reviewCount?\` · \${p.reviewCount} avaliações\`:''}\`:'';
      const specs=[spec('Marca',p.brand),spec('Modelo / SKU',p.sku),spec('Condição',p.condition),spec('Disponibilidade',p.availability),spec('Vendido por',p.seller),spec('Categoria',p.category),...(p.specifications||[]).slice(0,45).map(x=>spec(x.name,x.value))].filter(Boolean).join('');
      const variants=(p.variants||[]).slice(0,30).map(x=>\`<span class="variant">\${esc(x)}</span>\`).join('');
      const marketColors={Shopee:'#ee5b4d',AliExpress:'#f49a31','Mercado Livre':'#43a16e'};
      const safeUrl=typeof p.url==='string'&&p.url.toLowerCase().startsWith('https://')?p.url:'#';
      result.innerHTML=\`<article class="product-head"><div class="gallery">\${first?\`<img class="main-image" id="main-image" src="\${esc(first)}" alt="Foto do produto" referrerpolicy="no-referrer">\`:'<div class="main-image" style="display:grid;place-items:center;color:#9aa3b4;font-size:13px">Sem imagem pública</div>'}<div class="thumbs">\${pics.slice(1).map((x,i)=>\`<img class="thumb" src="\${esc(x)}" alt="Foto \${i+2}" data-src="\${esc(x)}" referrerpolicy="no-referrer">\`).join('')}</div></div><div class="summary"><div class="result-label"><span class="market-tag" style="color:\${marketColors[p.market]||'#425de0'}">\${esc(p.market||'Produto')}</span><span class="state-tag">\${esc(p.completeness||'Dados encontrados')}</span></div><h2 class="title">\${esc(p.title||'Produto sem título público')}</h2><div class="prices">\${price?\`<span class="price">\${esc(price)}</span>\`:''}\${old&&old!==price?\`<span class="old-price">\${esc(old)}</span>\`:''}\${p.discount?\`<span class="discount">\${esc(p.discount)}</span>\`:''}</div><div class="quick-facts">\${fact('Avaliação',stars)}\${fact('Estoque',p.stock)}\${fact('Frete',p.shipping)}\${fact('Vendedor',p.sellerRating)}</div><div class="link-row"><a class="store-link" href="\${esc(safeUrl)}" target="_blank" rel="noopener noreferrer">Abrir página da loja ↗</a><span class="timestamp">Consultado \${esc(new Date(p.fetchedAt).toLocaleString('pt-BR'))}</span></div></div></article><div class="details-grid"><section class="detail-card"><h2>Descrição</h2><div class="description">\${p.description?esc(p.description):'<span class="empty">A loja não expôs a descrição completa nesta página pública.</span>'}</div></section><section class="detail-card"><h2>Ficha técnica</h2>\${specs?\`<dl class="specs">\${specs}</dl>\`:'<p class="empty">Nenhuma especificação adicional foi encontrada.</p>'}</section><section class="detail-card"><h2>Variações disponíveis</h2>\${variants?\`<div class="variants">\${variants}</div>\`:'<p class="empty">A página não mostrou opções de variação nesta consulta.</p>'}</section><section class="detail-card"><h2>Origem e cobertura</h2><p class="empty">Extraído da página pública da loja. Campos ausentes podem estar disponíveis apenas no aplicativo, após seleção de variação, endereço de entrega ou login. O indicador reflete os dados que a página entregou agora.</p>\${p.canonical?\`<p class="empty"><a href="\${esc(p.canonical)}" target="_blank" rel="noopener noreferrer">Ver URL canônica da loja</a></p>\`:''}</section></div>\`;
      result.classList.add('show');
      result.querySelectorAll('.thumb').forEach(el=>el.addEventListener('click',()=>{const main=result.querySelector('#main-image');if(main)main.src=el.dataset.src}));
      const img=result.querySelector('#main-image');if(img)img.addEventListener('error',()=>{img.alt='Imagem não carregou';img.style.opacity='.3'});
    }
    form.addEventListener('submit',async e=>{e.preventDefault();const value=input.value.trim();if(!value)return;result.classList.remove('show');result.replaceChildren();button.disabled=true;message.style.display='none';loading.style.display='inline-flex';status.className='status';try{const res=await fetch('/api/product',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({url:value})});const data=await res.json();if(!res.ok){const error=new Error(data.message||'Não consegui consultar esse link.');error.resolvedUrl=data.resolvedUrl;error.market=data.market;throw error}render(data.product);setState(data.warning||'Consulta concluída. Os campos variam conforme a página da loja.','ok')}catch(err){if(err.resolvedUrl)showResolvedLink(err.resolvedUrl,err.market,err.message);setState(err.message||'Falha ao consultar. Tente novamente mais tarde.','error')}finally{button.disabled=false;message.style.display='inline';loading.style.display='none'}});
    document.querySelector('#paste').addEventListener('click',async()=>{try{input.value=await navigator.clipboard.readText();input.focus()}catch{setState('Toque e segure no campo para colar o link.')}});
    function showResolvedLink(url,market,message){const safeUrl=typeof url==='string'&&url.toLowerCase().startsWith('https://')?url:'#';result.innerHTML='<section class="detail-card"><h2>Link resolvido'+(market?' · '+esc(market):'')+'</h2><p class="empty">'+esc(message)+'</p><a class="store-link" href="'+esc(safeUrl)+'" target="_blank" rel="noopener noreferrer">Abrir produto na loja ↗</a></section>';result.classList.add('show')}
    if('serviceWorker' in navigator)navigator.serviceWorker.register('/sw.js').catch(()=>{});
  </script>
</body>
</html>`;

const MAX_HTML_BYTES = 2_500_000;
const MAX_BODY_BYTES = 16_000;
const MAX_REDIRECTS = 6;
const LIMIT_WINDOW_MS = 60_000;
const LIMIT_PER_WINDOW = 18;
const requestCounts = new Map();
const UA = "Mozilla/5.0 (compatible; ProdutoEmUmLugar/1.0; +https://chatgpt.com)";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/" && request.method === "GET") return html(page);
    if (url.pathname === "/manifest.webmanifest" && request.method === "GET") {
      return json({name:"Produto em Um Lugar",short_name:"Produto",start_url:"/",display:"standalone",background_color:"#f7f8fb",theme_color:"#f7f8fb",icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml",purpose:"any maskable"}]});
    }
    if (url.pathname === "/icon.svg" && request.method === "GET") return new Response('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="18" fill="#172033"/><path d="M20 22h24v5H20zm0 10h17v5H20zm0 10h24v5H20z" fill="#fff"/><circle cx="45" cy="34" r="5" fill="#58d5bc"/></svg>',{headers:{"content-type":"image/svg+xml; charset=utf-8","cache-control":"public, max-age=86400"}});
    if (url.pathname === "/sw.js" && request.method === "GET") return new Response(`const CACHE="produto-shell-v1";self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.add("/")).then(()=>self.skipWaiting())));self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method==="GET"&&u.origin===location.origin&&u.pathname==="/")e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put("/",copy));return r}).catch(()=>caches.match("/").then(r=>r||new Response("Sem conexão. Conecte-se à internet para consultar produtos.",{headers:{"content-type":"text/plain; charset=utf-8"}}))))});`,{headers:{"content-type":"application/javascript; charset=utf-8","cache-control":"no-cache","service-worker-allowed":"/"}});
    if (url.pathname === "/health" && request.method === "GET") return json({ok:true,service:"produto-em-um-lugar"});
    if (url.pathname === "/api/product" && request.method === "POST") {
      const limit = rateLimit(request);
      if (!limit.ok) return json({message:"Você fez várias consultas em pouco tempo. Aguarde um minuto e tente de novo."},{status:429,"retry-after":"60"});
      try {
        const length = Number(request.headers.get("content-length") || 0);
        if (length > MAX_BODY_BYTES) return json({message:"O link enviado é grande demais."},{status:413});
        const raw = await request.text();
        if (raw.length > MAX_BODY_BYTES) return json({message:"O link enviado é grande demais."},{status:413});
        const body = JSON.parse(raw);
        const product = await inspectProduct(body.url);
        return json({product,warning:product.warning || "Consulta concluída. Os campos variam conforme a página da loja."});
      } catch (error) {
        const status = error.status || 422;
        return json({message:error.publicMessage || "Não consegui ler os dados públicos desse produto. Confira o link ou tente novamente.",resolvedUrl:error.resolvedUrl||"",market:error.market||""},{status});
      }
    }
    return new Response("Não encontrado",{status:404,headers:{"content-type":"text/plain; charset=utf-8"}});
  }
};

async function inspectProduct(input) {
  if (typeof input !== "string" || input.length > 4000) throw publicError("Cole um link de produto válido.");
  let target;
  try { target = new URL(input.trim()); } catch { throw publicError("Esse texto não parece ser um link válido."); }
  if (!/^https?:$/.test(target.protocol) || !marketOf(target.hostname)) throw publicError("Por enquanto, aceito links públicos da Shopee, AliExpress e Mercado Livre.");
  target.protocol = "https:";
  target.username = ""; target.password = ""; target.hash = "";
  const market = marketOf(target.hostname);
  if (market === "Mercado Livre") {
    const directId = mercadoLivreItemId(target);
    if (directId) {
      try { return await inspectMercadoLivre(directId, target.toString()); }
      catch (error) { if (error.status === 404) throw publicError("O anúncio do Mercado Livre não existe mais ou está indisponível.",404,{resolvedUrl:target.toString(),market}); }
    }
    const resolved = await resolveProductUrl(target, market);
    const itemId = mercadoLivreItemId(resolved.url);
    if (itemId) {
      try { return await inspectMercadoLivre(itemId, resolved.url); }
      catch (error) {
        if (error.status === 404) throw publicError("O link abriu, mas o anúncio do Mercado Livre não existe mais ou está indisponível.", 404, {resolvedUrl:resolved.url, market});
      }
    }
    target = resolved.url;
  }
  if (market === "Shopee") {
    const directIds = shopeeProductIds(target);
    if (directIds) {
      try { return await inspectShopee(directIds.shopId,directIds.itemId,target); }
      catch { /* A API pública pode ser limitada; tenta os metadados da página. */ }
    }
    const resolved = await resolveProductUrl(target, market);
    const ids = shopeeProductIds(resolved.url);
    if (ids) {
      try { return await inspectShopee(ids.shopId, ids.itemId, resolved.url); }
      catch { /* A API pública pode ser limitada; tenta os metadados da página. */ }
    }
    target = resolved.url;
  }
  const response = await fetchProductPage(target);
  const htmlText = response.html;
  const meta = parseMeta(htmlText);
  const ld = parseStructuredData(htmlText);
  const title = clean(ld.title || meta["og:title"] || meta["twitter:title"] || meta.title || "");
  const description = clean(ld.description || meta["og:description"] || meta["description"] || meta["twitter:description"] || "").slice(0,12000);
  const pageUrl = response.url.toString();
  const imageSet = [...new Set([...(ld.images||[]),meta["og:image"],meta["twitter:image"]].filter(Boolean).map(x=>absoluteImage(x,pageUrl,market)).filter(Boolean))].slice(0,20);
  const canonicalCandidate = absoluteHttp(meta.canonical, pageUrl);
  const canonical = canonicalCandidate && marketOf(new URL(canonicalCandidate).hostname) === market ? canonicalCandidate : "";
  const price = ld.price ?? meta["product:price:amount"] ?? meta["og:price:amount"] ?? null;
  const currency = ld.currency || meta["product:price:currency"] || meta["og:price:currency"] || null;
  const statusText = `${response.status} ${htmlText.slice(0,7000)}`.toLowerCase();
  const blocked = response.status === 403 || response.status === 429 || /captcha|verify you are human|verifique que você é humano|unusual traffic|traffic\.error|access denied|login required|login necessário|robot check/.test(statusText);
  const productSignal = Boolean(ld.title || ld.price || (ld.images||[]).length || meta["product:price:amount"] || meta["og:price:amount"]);
  if (blocked && !productSignal) throw publicError("O link foi resolvido, mas a loja bloqueou a leitura automatizada ou pediu uma verificação. Nenhum dado do produto foi entregue nesta consulta.", 403, {resolvedUrl:pageUrl, market});
  if (!title) {
    const message = market === "Shopee"
      ? "O link da Shopee abriu, mas esta página não trouxe os dados do produto no HTML público. Ela pode carregar os detalhes só no app ou exigir uma sessão da loja; não tentei contornar essa limitação."
      : "A página abriu, mas não entregou dados de produto que eu consiga ler. A loja pode exigir login ou carregar os detalhes só no aplicativo.";
    throw publicError(message, 422, {resolvedUrl:pageUrl, market});
  }
  const specifications = [...(ld.specifications||[])];
  const allText = stripTags(htmlText).slice(0,60000);
  if (!specifications.length) {
    for (const [label,pattern] of [["SKU",/\bSKU\s*[:：]\s*([A-Z0-9._-]{3,40})/i],["GTIN",/\b(?:EAN|GTIN|UPC)\s*[:：]\s*([0-9 -]{8,18})/i]]) {
      const match=allText.match(pattern); if(match)specifications.push({name:label,value:clean(match[1])});
    }
  }
  const variants = [...new Set((ld.variants||[]).map(clean).filter(Boolean))].slice(0,40);
  const discount = price && ld.oldPrice && Number(ld.oldPrice)>Number(price) ? `${Math.round((1-Number(price)/Number(ld.oldPrice))*100)}% de desconto` : "";
  const completeness = title && (price || description || imageSet.length) ? "Dados encontrados" : "Dados parciais";
  const warning = blocked ? "A loja limitou parte do acesso; mostrando somente os dados públicos que foram entregues." : "";
  return {
    market, title, description, url:pageUrl, canonical, price:price===null?null:String(price), oldPrice:ld.oldPrice===null?null:String(ld.oldPrice), currency, discount,
    rating:ld.rating||meta["product:rating:value"]||"", reviewCount:ld.reviewCount||meta["product:rating:count"]||"", stock:ld.stock||"", availability:ld.availability||"",
    brand:ld.brand||"", sku:ld.sku||"", condition:ld.condition||"", category:ld.category||"", seller:ld.seller||"", sellerRating:ld.sellerRating||"", shipping:ld.shipping||"",
    images:imageSet, specifications, variants, completeness, warning, fetchedAt:new Date().toISOString()
  };
}

async function resolveProductUrl(start, market) {
  const response = await fetchProductPage(start, {allowEmpty: true});
  return {url:response.url, response};
}

function mercadoLivreItemId(value) {
  const url = value instanceof URL ? value : new URL(value);
  const match = `${url.pathname}/${url.search}`.match(/\b(ML[ABMCPU]-?\d{6,})\b/i);
  return match ? match[1].toUpperCase().replace("-", "") : "";
}

async function inspectMercadoLivre(itemId, sourceUrl) {
  const item = await fetchJson(`https://api.mercadolibre.com/items/${encodeURIComponent(itemId)}`, "https://www.mercadolivre.com.br/");
  if (!item || !item.id) throw publicError("A API pública do Mercado Livre não retornou este anúncio.", 502, {resolvedUrl:sourceUrl,market:"Mercado Livre"});
  let description = "";
  try {
    const details = await fetchJson(`https://api.mercadolibre.com/items/${encodeURIComponent(item.id)}/description`, "https://www.mercadolivre.com.br/");
    description = clean(details.plain_text || details.text || "").slice(0,12000);
  } catch { /* A descrição pode não estar disponível para todos os anúncios. */ }
  const attributes = (item.attributes || []).map(a => ({name:clean(a.name || a.id || "Especificação"),value:clean(a.value_name || a.value_id || "")})).filter(a=>a.name&&a.value).slice(0,45);
  const pictures = (item.pictures || []).map(p=>p.secure_url || p.url).filter(Boolean).slice(0,20);
  let seller = "";
  if (item.seller_id) {
    try { const sellerData=await fetchJson(`https://api.mercadolibre.com/users/${encodeURIComponent(item.seller_id)}`, "https://www.mercadolivre.com.br/"); seller=sellerData.nickname||sellerData.first_name||""; } catch {}
  }
  const permalink = absoluteHttp(item.permalink, sourceUrl) || sourceUrl;
  return {market:"Mercado Livre",title:clean(item.title||""),description,url:permalink,canonical:permalink,price:item.price??null,oldPrice:item.original_price??null,currency:item.currency_id||"BRL",discount:item.original_price&&item.price<item.original_price?`${Math.round((1-item.price/item.original_price)*100)}% de desconto`:"",rating:item.reviews?.rating_average||"",reviewCount:item.reviews?.total||"",stock:item.available_quantity??"",availability:item.status||"",brand:"",sku:item.seller_custom_field||item.id||"",condition:item.condition||"",category:item.category_id||"",seller,sellerRating:"",shipping:item.shipping?.free_shipping?"Grátis":"",images:pictures,specifications:attributes,variants:(item.variation_attributes||[]).map(a=>`${a.name}: ${(a.values||[]).map(v=>v.name).join(", ")}`),completeness:"Dados encontrados",warning:"Dados consultados na API pública do Mercado Livre.",fetchedAt:new Date().toISOString()};
}

function shopeeProductIds(value) {
  const url=value instanceof URL?value:new URL(value);
  const path=url.pathname;
  const product=path.match(/i\.(\d+)\.(\d+)(?:\/|$)/i);
  if(product)return {shopId:product[1],itemId:product[2]};
  const modern=path.match(/\/(?:product|product-detail)\/(\d+)\/(\d+)(?:\/|$)/i);
  if(modern)return {shopId:modern[1],itemId:modern[2]};
  return null;
}

async function inspectShopee(shopId,itemId,sourceUrl) {
  const endpoint=`https://shopee.com.br/api/v4/item/get?shopid=${encodeURIComponent(shopId)}&itemid=${encodeURIComponent(itemId)}`;
  const data=await fetchJson(endpoint,"https://shopee.com.br/");
  const item=data?.data?.item||data?.data?.item_basic||data?.item||null;
  if(!item)throw new Error("Shopee product unavailable");
  const images=(item.images||[]).map(image=>/^https?:/i.test(image)?image:`https://down-br.img.susercontent.com/file/${encodeURIComponent(image)}`).slice(0,20);
  const priceValue=Number(item.price??item.price_min??NaN);
  const divisor=priceValue>1000?100000:1;
  const price=Number.isFinite(priceValue)?priceValue/divisor:null;
  const specifications=(item.attributes||[]).map(a=>({name:clean(a.name||"Especificação"),value:clean(a.value||"")})).filter(a=>a.name&&a.value).slice(0,45);
  const variants=(item.tier_variations||[]).flatMap(t=>(t.options||[]).map(option=>`${t.name||"Opção"}: ${option}`)).slice(0,40);
  const canonical=sourceUrl.toString();
  return {market:"Shopee",title:clean(item.name||item.title||""),description:clean(item.description||"").slice(0,12000),url:canonical,canonical,price,oldPrice:null,currency:"BRL",discount:"",rating:item.item_rating?.rating_star||"",reviewCount:item.item_rating?.rating_count?.reduce?.((a,b)=>a+b,0)||"",stock:item.stock??"",availability:item.status===1?"Disponível":"",brand:"",sku:String(item.itemid||itemId),condition:"",category:"",seller:"",sellerRating:"",shipping:"",images,specifications,variants,completeness:"Dados encontrados",warning:"Dados retornados pelo endpoint público da Shopee; campos variam por anúncio.",fetchedAt:new Date().toISOString()};
}

async function fetchJson(url,referer) {
  const response=await fetch(url,{method:"GET",redirect:"error",headers:{"user-agent":UA,"accept":"application/json,text/plain,*/*","accept-language":"pt-BR,pt;q=0.9,en;q=0.6","referer":referer,"origin":new URL(referer).origin},signal:AbortSignal.timeout(12000)});
  if(!response.ok)throw publicError(`A fonte pública respondeu HTTP ${response.status}.`,response.status);
  const text=await readLimitedText(response,MAX_HTML_BYTES);
  try{return JSON.parse(text)}catch{throw publicError("A fonte pública retornou uma resposta que não é JSON válido.",502)}
}

async function fetchProductPage(start, options = {}) {
  let current = start;
  const initialMarket = marketOf(start.hostname);
  for (let hop=0; hop<=MAX_REDIRECTS; hop++) {
    if (marketOf(current.hostname) !== initialMarket) throw publicError("O link redirecionou para outra loja. Por segurança, parei a consulta.",422,{resolvedUrl:current.toString(),market:initialMarket});
    let res;
    try {
      res = await fetch(current.toString(), {method:"GET",redirect:"manual",headers:{"user-agent":UA,"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","accept-language":"pt-BR,pt;q=0.9,en;q=0.6"},signal:AbortSignal.timeout(12000)});
    } catch { throw publicError("A loja não respondeu agora. Tente novamente em instantes.",502); }
    if ([301,302,303,307,308].includes(res.status)) {
      const location=res.headers.get("location");
      if(!location)throw publicError("A loja enviou um redirecionamento sem destino válido.");
      if(hop===MAX_REDIRECTS)throw publicError("Esse link passou por redirecionamentos demais.",422,{resolvedUrl:current.toString(),market:initialMarket});
      let next;try{next=new URL(location,current)}catch{throw publicError("A loja enviou um redirecionamento inválido.")}
      if(next.protocol!=="https:"||marketOf(next.hostname)!==initialMarket)throw publicError("O redirecionamento saiu da loja esperada. Por segurança, parei a consulta.",422,{resolvedUrl:current.toString(),market:initialMarket});
      current=next;continue;
    }
    const contentType=(res.headers.get("content-type")||"").toLowerCase();
    if(!contentType.includes("text/html")&&!contentType.includes("application/xhtml+xml"))throw publicError("Esse endereço não retornou uma página de produto em HTML.",415);
    const html=await readLimitedText(res,MAX_HTML_BYTES);
    if (options.allowEmpty && !contentType.includes("text/html") && !contentType.includes("application/xhtml+xml")) return {status:res.status,html:"",url:current};
    return {status:res.status,html,url:current};
  }
  throw publicError("Não foi possível abrir esse endereço.");
}

function marketOf(hostname) {
  const h=hostname.toLowerCase().replace(/\.$/,"");
  if(h==="shp.ee"||h.endsWith(".shp.ee")||h==="shopee.com.br"||h.endsWith(".shopee.com.br"))return "Shopee";
  if(h==="aliexpress.com"||h.endsWith(".aliexpress.com")||h==="aliexpress.us"||h.endsWith(".aliexpress.us"))return "AliExpress";
  if(h==="meli.la"||h.endsWith(".meli.la")||h==="mercadolivre.com.br"||h.endsWith(".mercadolivre.com.br")||h==="mercadolibre.com"||h.endsWith(".mercadolibre.com")||h==="mercadolibre.com.br"||h.endsWith(".mercadolibre.com.br"))return "Mercado Livre";
  return null;
}

function parseMeta(html) {
  const out={};
  for(const tag of html.match(/<meta\b[^>]*>/gi)||[]) {
    const attrs={};for(const m of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g))attrs[m[1].toLowerCase()]=m[2]??m[3]??m[4]??"";
    const key=(attrs.property||attrs.name||attrs.itemprop||"").toLowerCase();const value=decodeEntities(attrs.content||"");if(key&&value&&!out[key])out[key]=value;
  }
  const title=html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);if(title)out.title=decodeEntities(stripTags(title[1]));
  const link=html.match(/<link\b[^>]*rel\s*=\s*["']canonical["'][^>]*href\s*=\s*["']([^"']+)["'][^>]*>/i)||html.match(/<link\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*rel\s*=\s*["']canonical["'][^>]*>/i);if(link)out.canonical=decodeEntities(link[1]||link[2]||"");
  return out;
}

function parseStructuredData(html) {
  const products=[];
  const scripts=html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi);
  for(const match of scripts){
    const attrs=match[1]||"",source=match[2]||"";
    const isData=/type\s*=\s*["']application\/(?:ld\+)?json["']/i.test(attrs)||/id\s*=\s*["'](?:__NEXT_DATA__|__INITIAL_STATE__|__PRELOADED_STATE__)["']/i.test(attrs);
    if(isData||/^\s*[\[{]/.test(source)){try{walkJson(JSON.parse(source.trim()),products)}catch{}}
    for(const assigned of source.matchAll(/(?:window\s*\.\s*)?(?:runParams|__INITIAL_STATE__|__PRELOADED_STATE__|__NEXT_DATA__|pageData)\s*=\s*(\{)/g)){
      const objectText=balancedObject(source,assigned.index+assigned[0].lastIndexOf("{"));
      if(objectText){try{walkJson(JSON.parse(objectText),products)}catch{}}
    }
  }
  const p=products.sort((a,b)=>scoreProduct(b)-scoreProduct(a))[0]||{};
  const offers=Array.isArray(p.offers)?p.offers[0]:(p.offers||{});
  const rating=p.aggregateRating||{};
  const images=Array.isArray(p.image)?p.image:[p.image].filter(Boolean);
  const additional=Array.isArray(p.additionalProperty)?p.additionalProperty:[];
  const hasVariants=Array.isArray(p.hasVariant)?p.hasVariant:[p.hasVariant].filter(Boolean);
  const shippingDetails=Array.isArray(offers.shippingDetails)?offers.shippingDetails[0]:offers.shippingDetails;
  let availability=String(offers.availability||"").split(/[\/#]/).pop().replace(/([A-Z])/g," $1").trim();
  let stock=availability;
  if(offers.inventoryLevel?.value)stock=String(offers.inventoryLevel.value);
  const brand=typeof p.brand==="string"?p.brand:p.brand?.name||"";
  const seller=typeof offers.seller==="string"?offers.seller:offers.seller?.name||"";
  const description=p.description||"";
  return {title:p.name||"",description,price:offers.price??offers.lowPrice??null,oldPrice:offers.highPrice&&offers.highPrice!==offers.price?offers.highPrice:null,currency:offers.priceCurrency||"",rating:rating.ratingValue||"",reviewCount:rating.reviewCount||rating.ratingCount||"",stock,availability,brand,sku:p.sku||p.mpn||p.gtin13||"",condition:offers.itemCondition?String(offers.itemCondition).split(/[\/#]/).pop().replace(/([A-Z])/g," $1").trim():"",category:p.category||"",seller,sellerRating:offers.seller?.aggregateRating?.ratingValue||"",shipping:shippingDetails?.shippingRate?.value?`${shippingDetails.shippingRate.currency||offers.priceCurrency||""} ${shippingDetails.shippingRate.value}`:"",images,specifications:additional.map(x=>({name:x.name||x.propertyID||"Especificação",value:Array.isArray(x.value)?x.value.join(", "):String(x.value??"")})),variants:hasVariants.map(x=>{const opts=x?.additionalProperty||[];return [x?.name,...opts.map(y=>`${y.name}: ${y.value}`)].filter(Boolean).join(" · ")}).filter(Boolean)};
}

function walkJson(value,out,depth=0){if(depth>16||!value||typeof value!=="object")return;if(Array.isArray(value)){for(const child of value)walkJson(child,out,depth+1);return}const types=Array.isArray(value["@type"])?value["@type"]:[value["@type"]];if(types.some(t=>["Product","ProductGroup"].includes(t)))out.push(value);for(const child of Object.values(value))if(child&&typeof child==="object")walkJson(child,out,depth+1)}
function balancedObject(source,start){let depth=0,quote="",escaped=false;for(let i=start;i<source.length;i++){const c=source[i];if(quote){if(escaped)escaped=false;else if(c==="\\")escaped=true;else if(c===quote)quote="";continue}if(c==='"'||c==="'"){quote=c;continue}if(c==="{")depth++;else if(c==="}"&&--depth===0)return source.slice(start,i+1)}return""}
function scoreProduct(p){return (p.name?8:0)+(p.description?3:0)+(p.offers?4:0)+(p.image?2:0)+(p.aggregateRating?1:0)}
function absoluteImage(value,base,market){const normalized=absoluteHttp(value,base);if(!normalized)return"";const host=new URL(normalized).hostname.toLowerCase();const imageHost=/(^|\.)(alicdn\.com|aliexpress-media\.com|susercontent\.com|mlstatic\.com|mercadolibre\.com|mercadolivre\.com\.br)$/.test(host);return imageHost||marketOf(host)===market?normalized:""}
function absoluteHttp(value,base){if(!value)return"";try{const u=new URL(value,base||undefined);return u.protocol==="https:"?u.toString():""}catch{return""}}
function stripTags(s){return String(s||"").replace(/<\/(?:p|div|li|tr|h[1-6])\s*>/gi,"\n").replace(/<br\s*\/?\s*>/gi,"\n").replace(/<[^>]*>/g," ")}
function clean(s){return decodeEntities(stripTags(String(s||""))).replace(/[\t\f\v ]+/g," ").replace(/ *\n */g,"\n").replace(/\n{3,}/g,"\n\n").trim()}
function decodeEntities(s){return String(s||"").replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos|nbsp|sol|colon);/gi,(m,e)=>{const x=e.toLowerCase();if(x==="amp")return"&";if(x==="lt")return"<";if(x==="gt")return">";if(x==="quot")return'"';if(x==="apos")return"'";if(x==="nbsp")return" ";if(x==="sol")return"/";if(x==="colon")return":";const code=x.startsWith("#x")?parseInt(x.slice(2),16):parseInt(x.slice(1),10);return Number.isFinite(code)?String.fromCodePoint(Math.min(code,0x10ffff)):m})}
async function readLimitedText(response,maxBytes){if(!response.body)return"";const reader=response.body.getReader();const decoder=new TextDecoder();let total=0,text="";while(true){const {done,value}=await reader.read();if(done)break;total+=value.byteLength;if(total>maxBytes){await reader.cancel();break}text+=decoder.decode(value,{stream:true})}return text+decoder.decode()}
function rateLimit(request){const now=Date.now();for(const [key,v] of requestCounts)if(now-v.start>LIMIT_WINDOW_MS)requestCounts.delete(key);const key=request.headers.get("cf-connecting-ip")||"unknown";const v=requestCounts.get(key)||{start:now,count:0};v.count++;requestCounts.set(key,v);return{ok:v.count<=LIMIT_PER_WINDOW}}
function publicError(message,status=422,details={}){const e=new Error(message);e.publicMessage=message;e.status=status;Object.assign(e,details);return e}
function json(value,init={}){const headers=new Headers(init.headers);headers.set("content-type","application/json; charset=utf-8");headers.set("cache-control","no-store");return new Response(JSON.stringify(value),{...init,headers})}
function html(value){return new Response(value,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=60","content-security-policy":"default-src 'self' https: data:; img-src https: data:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'","x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin"}})}
