const LOGO_B64 = "data:image/png;base64,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Dr+CQDfw2hpJHkzppWpYuAMDootercpS3V71xob3SCNYBmyKOOu46WOiI961fMidDqZyLOYz0G6NNeJ66+WS0FUmI1TJqZruprwA5XiekGvgCzB4aQ26G86czJww7DQXY7XSyzviuNf0OLG8OabneR36DdwRhEJhBgbVVfBCEflHbdrF97qo/nLUKru3Auf12RAy8qyJ066aQ1KtZVsra3uW9MrzofJtcYXwbUQumLrGJq6YrppDUgXbdi7bFkmc4PhjiL20CIwicnNeH9sLfpwSc2+LG0SDBJ0n4++xQndsG2STunHOPpLYuURuS6hhvfrdAKvPEkRuiGMR0xtgssTUZ6AplkTjJBoSGuopKm0MiYvKSMhxilwQjWDy6m+Em8s022I7fFymmR96x54/V6E2RZBN332AfVNbHNl4giaJectsv8/z0LBG+zZVy70NXsfol2m2gpVCrtBV/t+fl2lmeoEu5s9PmiB9vfsZ8d0lhLUfwAhiRH8Gccvr+bulK0pBFLmPIClePWXf3wC/at1BwLLEdWkR7x48v409tCT2hXNxSKmJMq8Zcx7gGCkGZqeJdALXxfYQ+oPxckGZwy4Qn1kjS11952cPBCPS1Vy9/N4vxvereyQxjaar5TYH3OskzAemuNgLIcS/V0lJ+eqZEH0AAAAASUVORK5CYII=";

let CONTENT = null;
let nodes = {};
let startId = "";

let history = [];
let pathLog = [];
let currentResult = null;
let currentResultNodeId = null;
let redirectTarget = null;
let contentLoaded = false;

function show(id) {
  ["screen-welcome", "screen-question", "screen-result"].forEach((screenId) => {
    document.getElementById(screenId).classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

async function loadContent() {
  if (contentLoaded) return;

  let response;
  try {
    response = await fetch("content.json", { cache: "no-store" });
  } catch (err) {
    throw new Error(
      "Não foi possível carregar o content.json. Se você abriu o index.html diretamente no navegador, rode o site em um servidor local."
    );
  }

  if (!response.ok) {
    throw new Error(`Falha ao carregar content.json (${response.status})`);
  }

  const json = await response.json();
  validateContent(json);

  CONTENT = json;
  nodes = CONTENT.nodes;
  startId = CONTENT.inicio;
  contentLoaded = true;
}

function validateContent(content) {
  if (!content || typeof content !== "object") {
    throw new Error("content.json inválido: o arquivo não contém um objeto JSON.");
  }

  if (!content.nodes || typeof content.nodes !== "object") {
    throw new Error("content.json inválido: 'nodes' não foi definido corretamente.");
  }

  if (!content.inicio || typeof content.inicio !== "string") {
    throw new Error("content.json inválido: 'inicio' não foi definido corretamente.");
  }

  if (!content.nodes[content.inicio]) {
    throw new Error(`content.json inválido: o nó inicial '${content.inicio}' não existe.`);
  }

  for (const [nodeId, node] of Object.entries(content.nodes)) {
    // Nós R são repositórios de recomendações — não participam da navegação
    if (/^R\d+$/.test(nodeId)) continue;

    const hasQuestion = typeof node.pergunta === "string" && node.pergunta.trim() !== "";
    const hasResponses = Array.isArray(node.respostas) && node.respostas.length > 0;
    const hasRecommendation = typeof node.hipoteses === "string" && node.hipoteses.trim() !== "";
    const hasEquivalente = typeof node.equivalente === "string" && node.equivalente.trim() !== "";

    if (!hasQuestion && !hasRecommendation && !hasEquivalente) {
      throw new Error(`Nó '${nodeId}' inválido: precisa ter 'pergunta', 'hipoteses' ou 'equivalente'.`);
    }

    if (hasEquivalente && !content.nodes[node.equivalente]) {
      throw new Error(`Nó '${nodeId}' inválido: 'equivalente' aponta para '${node.equivalente}', que não existe.`);
    }

    if (hasResponses) {
      node.respostas.forEach((resposta, index) => {
        if (!resposta || typeof resposta.texto !== "string" || !resposta.texto.trim()) {
          throw new Error(`Nó '${nodeId}' inválido: resposta ${index + 1} sem 'texto'.`);
        }

        if (!resposta.proximo || typeof resposta.proximo !== "string") {
          throw new Error(`Nó '${nodeId}' inválido: resposta ${index + 1} sem 'proximo'.`);
        }

        if (!content.nodes[resposta.proximo]) {
          throw new Error(
            `Nó '${nodeId}' inválido: resposta ${index + 1} aponta para '${resposta.proximo}', que não existe.`
          );
        }
      });
    }
  }
}

async function start() {
  try {
    await loadContent();
  } catch (err) {
    alert(err.message);
    console.error(err);
    return;
  }

  history = [];
  pathLog = [];
  currentResult = null;
  redirectTarget = null;

  renderNode(startId);
}

function navegarPara(nodeId) {
  if (!nodes[nodeId]) {
    alert(`Nó '${nodeId}' não encontrado.`);
    return;
  }
  // Registra o nó atual no pathLog antes de navegar
  if (currentResult) {
    pathLog.push({
      qid: nodeId,
      question: currentResult.pergunta || "",
      answer: "→ " + (nodes[nodeId].pergunta || nodeId)
    });
  }
  renderNode(nodeId);
}

function linkifyRamos(html) {
  // Detecta padrão "ramo P1.1.3" ou "ramo P1.2" e substitui por link clicável
  return html.replace(/ramo\s+(P[\d.]+)/g, function(match, nodeId) {
    if (nodes[nodeId]) {
      return `ramo <a href="javascript:void(0)" onclick="navegarPara('${nodeId}')" style="font-weight:700;text-decoration:underline;cursor:pointer;">${nodeId}</a>`;
    }
    return match;
  });
}

function renderNode(nodeId) {
  const node = nodes[nodeId];

  if (!node) {
    alert(`Nó '${nodeId}' não encontrado no content.json.`);
    return;
  }

  if (Array.isArray(node.respostas) && node.respostas.length > 0) {
    renderQuestion(nodeId);
  } else if (node.equivalente) {
    const equivalenteNode = nodes[node.equivalente];
    if (!equivalenteNode) {
      alert(`Nó equivalente '${node.equivalente}' não encontrado no content.json.`);
      return;
    }
    showResult(equivalenteNode, nodeId);
  } else {
    showResult(node, nodeId);
  }
}

function renderQuestion(qid) {
  const node = nodes[qid];
  // Evita push duplo quando navegarPara() já registrou este nó
  if (history[history.length - 1] !== qid) {
    history.push(qid);
  }

  document.getElementById("questionText").textContent = node.pergunta || "";

  const exemploEl = document.getElementById("questionExemplo");
  exemploEl.textContent = node.exemplo || "";
  exemploEl.classList.toggle("hidden", !node.exemplo);

  const subtituloEl = document.getElementById("questionSubtitulo");
  subtituloEl.textContent = node.subtitulo || "";
  subtituloEl.classList.toggle("hidden", !node.subtitulo);

  const list = document.getElementById("optionsList");
  list.innerHTML = "";

  node.respostas.forEach((resposta) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";

    const targetNode = nodes[resposta.proximo];

    const title = document.createElement("div");
    title.className = "option-title";
    title.textContent = resposta.texto;
    btn.appendChild(title);

    if (targetNode && targetNode.exemplo) {
      const example = document.createElement("div");
      example.className = "option-example";
      example.textContent = targetNode.exemplo;
      btn.appendChild(example);
    }

    btn.onclick = () => handleOption(resposta);
    list.appendChild(btn);
  });

  document.getElementById("btnBackQuestion").classList.toggle("hidden", history.length <= 1);
  show("screen-question");
}

function handleOption(resposta) {
  const qid = history[history.length - 1];
  const currentNode = nodes[qid];

  pathLog = pathLog.filter((entry) => entry.qid !== qid);
  pathLog.push({
    qid,
    question: currentNode.pergunta || "",
    answer: resposta.texto
  });

  renderNode(resposta.proximo);
}

function showResult(node, nodeId) {
  currentResult = node;
  currentResultNodeId = nodeId || null;
  redirectTarget = node.redirecionar || null;

  // Registra o nó de resultado no history para que goBack() possa voltar para ele
  if (nodeId && history[history.length - 1] !== nodeId) {
    history.push(nodeId);
  }

  const resultTitle = document.getElementById("resultNodeTitle");
  const resultExample = document.getElementById("resultNodeExample");
  const resultHipoteses = document.getElementById("resultHipoteses");
  const resultRecomendacoes = document.getElementById("resultRecomendacoes");

  if (resultTitle) {
    resultTitle.textContent = node.pergunta || "";
    resultTitle.classList.toggle("hidden", !node.pergunta);
  }

  if (resultExample) {
    resultExample.textContent = node.exemplo || "";
    resultExample.classList.toggle("hidden", !node.exemplo);
  }

  const hipoteses = node.hipoteses || "Este ramo ainda está em desenvolvimento.";
  resultHipoteses.innerHTML = hipoteses;

  const acoesBox = document.getElementById("resultRecomendacoesBox");
  const btnContinuar = document.getElementById("btnContinuar");
  const btnDownload = document.getElementById("btnDownload");

  // Renderizar recomendações via recomendacoesRef ou acoes direto
  let recomendacoesHtml = "";
  if (Array.isArray(node.recomendacoesRef) && node.recomendacoesRef.length > 0) {
    node.recomendacoesRef.forEach((rId, index) => {
      const rNode = nodes[rId];
      if (!rNode) return;
      if (index > 0) recomendacoesHtml += "<hr>";
      recomendacoesHtml += `<p class="recomendacao-titulo">${rNode.titulo || rId}</p>`;
      recomendacoesHtml += (rNode.acoes || "");
    });
  } else {
    recomendacoesHtml = node.acoes || "Em breve.";
  }
  resultRecomendacoes.innerHTML = linkifyRamos(recomendacoesHtml);
  acoesBox.classList.remove("hidden");

  btnContinuar.classList.toggle("hidden", !redirectTarget);

  if (redirectTarget && !nodes[redirectTarget]) {
    alert(`O redirecionamento '${redirectTarget}' não existe no content.json.`);
    return;
  }

  btnDownload.classList.toggle("hidden", !!redirectTarget);

  show("screen-result");
}

function continuar() {
  if (!redirectTarget) return;
  if (currentResult && currentResult.id) {
    history.push(currentResult.id);
  }
  renderNode(redirectTarget);
}

function goBack() {
  if (history.length === 0) {
    show("screen-welcome");
    return;
  }

  // Subir o histórico até encontrar um nó com perguntas (tela de questão)
  while (history.length > 0) {
    const prevQid = history[history.length - 1];
    history.pop();
    const prevNode = nodes[prevQid];
    if (prevNode && Array.isArray(prevNode.respostas) && prevNode.respostas.length > 0) {
      renderNode(prevQid);
      return;
    }
  }

  // Se não encontrou nenhum nó com perguntas, volta para o início
  show("screen-welcome");
}

function goBackFromQuestion() {
  const currentQid = history[history.length - 1];
  pathLog = pathLog.filter((entry) => entry.qid !== currentQid);

  history.pop();
  const prevId = history[history.length - 1];

  if (!prevId) {
    show("screen-welcome");
    return;
  }

  history.pop();

  const prevNode = nodes[prevId];
  if (!Array.isArray(prevNode.respostas) || prevNode.respostas.length === 0) {
    showResult(prevNode);
  } else {
    renderNode(prevId);
  }
}

function restart() {
  history = [];
  pathLog = [];
  currentResult = null;
  currentResultNodeId = null;
  redirectTarget = null;
  show("screen-welcome");
}

function stripHtml(html) {
  return (html || "").replace(/<[^>]*>/g, "");
}

function extractLinks(html) {
  const links = [];
  const re = /<a[^>]+href=['"]([^'"]+)['"][^>]*>([^<]+)<\/a>/g;
  let match;

  while ((match = re.exec(html)) !== null) {
    links.push({ href: match[1], label: match[2] });
  }

  return links;
}

function downloadPDF() {
  if (!currentResult) {
    alert("Nenhum resultado disponível para exportar.");
    return;
  }

  const btn = document.getElementById("btnDownload");
  const originalHTML = btn.innerHTML;
  btn.innerHTML = "⏳ Gerando PDF...";
  btn.disabled = true;

  try {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      throw new Error(
        "Biblioteca jsPDF não encontrada. Verifique se jspdf.umd.min.js está na mesma pasta que index.html."
      );
    }

    _gerarPDF();
  } catch (err) {
    alert("Erro ao gerar PDF:\n" + err.message);
    console.error("PDF error:", err);
  } finally {
    btn.innerHTML = originalHTML;
    btn.disabled = false;
  }
}

function _gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = 210;
  const pageH = 297;
  const margin = 18;
  const contentW = pageW - margin * 2;
  const headerH = 30;
  const lineH = 5;
  const bottomMargin = 18;
  let y = 0;

  function checkY(needed) {
    if (y + needed > pageH - bottomMargin) {
      doc.addPage();
      y = 20;
    }
  }

  const strips = 60;
  const r1 = 82, g1 = 79, b1 = 191;
  const r2 = 213, g2 = 128, b2 = 255;

  for (let i = 0; i < strips; i++) {
    const t = i / (strips - 1);
    doc.setFillColor(
      Math.round(r1 + (r2 - r1) * t),
      Math.round(g1 + (g2 - g1) * t),
      Math.round(b1 + (b2 - b1) * t)
    );
    doc.rect((pageW / strips) * i, 0, pageW / strips + 0.5, headerH, "F");
  }

  const logoH = 12;
  const logoW = logoH * 5;
  const logoY = (headerH - logoH) / 2;
  let textX = margin;

  try {
    doc.addImage(LOGO_B64, "PNG", margin, logoY, logoW, logoH);
    textX = margin + logoW + 5;
  } catch (e) {}

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Qual o seu desafio de gestão da inovação?", textX, 13, {
    maxWidth: contentW - logoW - 5
  });

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const now = new Date();
  const dateStr =
    now.toLocaleDateString("pt-BR") +
    " às " +
    now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  doc.text("Gerado em: " + dateStr, textX, 23);

  doc.setFontSize(30);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("flexM4i", pageW - margin, headerH / 2 + 5, { align: "right" });

  y = 40;

  checkY(12);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(82, 79, 191);
  doc.text("Caminho percorrido", margin, y);
  y += 7;

  pathLog.forEach((entry, i) => {
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    const qLines = doc.splitTextToSize((i + 1) + ". " + entry.question, contentW);
    checkY(qLines.length * lineH + 5);
    doc.text(qLines, margin, y);
    y += qLines.length * lineH + 5;
  });

  if (currentResult) {
    const finalNodeId = currentResultNodeId;
    const finalNode = (finalNodeId && nodes[finalNodeId]) ? nodes[finalNodeId] : currentResult;
    const finalPergunta = finalNode.pergunta || currentResult.pergunta || "";
    if (finalPergunta) {
      const i = pathLog.length;
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(80, 80, 80);
      const finalLines = doc.splitTextToSize((i + 1) + ". " + finalPergunta, contentW);
      checkY(finalLines.length * lineH + 5);
      doc.text(finalLines, margin, y);
      y += finalLines.length * lineH + 5;
    }
  }

  y += 3;

  checkY(19);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(82, 79, 191);
  doc.text("Hipóteses do desafio", margin, y);
  y += 7;

  // Função auxiliar para renderizar HTML no PDF com suporte a bullets, links, negrito, itálico
  function printHtmlNode(node, bold, italic, indentLevel) {
    indentLevel = indentLevel || 0;
    const indentX = margin + indentLevel * 5;
    const availW = contentW - indentLevel * 5;

    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent.replace(/\s+/g, " ").trim();
      if (text) {
        const style = bold && italic ? "bolditalic" : bold ? "bold" : italic ? "italic" : "normal";
        doc.setFont("helvetica", style);
        doc.setTextColor(50, 50, 50);
        const lines = doc.splitTextToSize(text, availW);
        for (const line of lines) {
          checkY(lineH);
          doc.text(line, indentX, y);
          y += lineH;
        }
      }
      return;
    }

    const tag = node.nodeName;

    if (tag === "HR") {
      checkY(6);
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.3);
      doc.line(margin, y, margin + contentW, y);
      y += 4;
      return;
    }

    if (tag === "BR") {
      y += lineH * 0.5;
      return;
    }

    if (tag === "A") {
      const href = node.getAttribute("href") || "";
      const label = node.textContent.replace(/\s+/g, " ").trim();
      const isExternal = href && !href.startsWith("javascript");
      const style = bold && italic ? "bolditalic" : bold ? "bold" : italic ? "italic" : "normal";

      if (isExternal) {
        doc.setFont("helvetica", style);
        doc.setTextColor(82, 79, 191);
        const labelLines = doc.splitTextToSize(label, availW);
        // Renderizar linha a linha para registrar link na posição exata de cada uma
        for (const line of labelLines) {
          checkY(lineH);
          doc.text(line, indentX, y);
          const lw = Math.min(doc.getTextWidth(line), availW);
          // y é baseline; área clicável começa lineH acima da baseline
          doc.link(indentX, y - lineH + 1, lw, lineH, { url: href });
          // Sublinhado manual
          doc.setDrawColor(82, 79, 191);
          doc.setLineWidth(0.3);
          doc.line(indentX, y + 0.5, indentX + lw, y + 0.5);
          y += lineH;
        }
        doc.setFontSize(11);
      } else {
        doc.setFont("helvetica", style);
        doc.setTextColor(82, 79, 191);
        const lines = doc.splitTextToSize(label, availW);
        checkY(lines.length * lineH);
        doc.text(lines, indentX, y);
        y += lines.length * lineH;
      }
      doc.setTextColor(50, 50, 50);
      return;
    }

    if (tag === "UL" || tag === "OL") {
      let olIdx = 0;
      node.childNodes.forEach((child) => {
        if (child.nodeName === "LI") {
          const bulletX = margin + indentLevel * 5;
          const textX = bulletX + 5;
          const liW = contentW - indentLevel * 5 - 5;
          const bullet = tag === "OL" ? (++olIdx) + "." : "•";

          // Separar sub-listas dos outros filhos
          const subLists = [];
          const inlineChildren = [];
          child.childNodes.forEach(n => {
            if (n.nodeName === "UL" || n.nodeName === "OL") subLists.push(n);
            else inlineChildren.push(n);
          });

          // Verificar se há conteúdo inline
          const hasText = inlineChildren.some(n =>
            n.textContent && n.textContent.trim() !== ""
          );

          if (hasText) {
            // Imprimir bullet e depois renderizar conteúdo inline a partir de textX
            checkY(lineH + 1);
            const style = bold && italic ? "bolditalic" : bold ? "bold" : italic ? "italic" : "normal";
            doc.setFont("helvetica", style);
            doc.setTextColor(50, 50, 50);
            doc.text(bullet, bulletX, y);
            // Salvar margin/availW e substituir temporariamente por textX/liW
            const savedMargin = margin;
            const savedAvailW = availW;
            // Usamos uma função inline para renderizar com indentação do LI
            function renderLiInline(n, b, it) {
              if (n.nodeType === Node.TEXT_NODE) {
                const text = n.textContent.replace(/\s+/g, " ").trim();
                if (text) {
                  const st = b && it ? "bolditalic" : b ? "bold" : it ? "italic" : "normal";
                  doc.setFont("helvetica", st);
                  doc.setTextColor(50, 50, 50);
                  const lines = doc.splitTextToSize(text, liW);
                  for (const line of lines) {
                    checkY(lineH);
                    doc.text(line, textX, y);
                    y += lineH;
                  }
                }
              } else if (n.nodeName === "A") {
                const href = n.getAttribute("href") || "";
                const label = n.textContent.replace(/\s+/g, " ").trim();
                const isExt = href && !href.startsWith("javascript");
                const st = b && it ? "bolditalic" : b ? "bold" : it ? "italic" : "normal";
                doc.setFont("helvetica", st);
                doc.setTextColor(82, 79, 191);
                const lines = doc.splitTextToSize(label, liW);
                for (const line of lines) {
                  checkY(lineH);
                  doc.text(line, textX, y);
                  if (isExt) {
                    const lw = Math.min(doc.getTextWidth(line), liW);
                    doc.link(textX, y - lineH + 1, lw, lineH, { url: href });
                    doc.setDrawColor(82, 79, 191);
                    doc.setLineWidth(0.3);
                    doc.line(textX, y + 0.5, textX + lw, y + 0.5);
                  }
                  y += lineH;
                }
                doc.setTextColor(50, 50, 50);
              } else if (n.nodeName === "BR") {
                y += lineH * 0.5;
              } else {
                const nb = b || ["STRONG","B"].includes(n.nodeName);
                const ni = it || ["EM","I"].includes(n.nodeName);
                n.childNodes.forEach(c => renderLiInline(c, nb, ni));
              }
            }
            inlineChildren.forEach(n => renderLiInline(n, bold, italic));
            y += 1;
          }

          // Sub-listas aninhadas
          subLists.forEach(sl => printHtmlNode(sl, bold, italic, indentLevel + 1));
        }
      });
      y += 1;
      return;
    }

    // Bloco: P, DIV, H1-H6 — STRONG/B/EM/I são apenas modificadores inline
    const isBold = bold || ["STRONG", "B", "H1", "H2", "H3", "H4"].includes(tag);
    const isItalic = italic || ["EM", "I"].includes(tag);
    const isBlock = ["P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6"].includes(tag);
    // Inline: renderizar filhos passando estilo, sem quebra de linha extra
    if (!isBlock && (["STRONG", "B", "EM", "I"].includes(tag))) {
      node.childNodes.forEach(c => printHtmlNode(c, isBold, isItalic, indentLevel));
      return;
    }

    if (isBlock) {
      // Coletar segmentos {text, bold, italic, href} do bloco inteiro
      function collectSegments(n, b, it, segs) {
        if (n.nodeType === Node.TEXT_NODE) {
          const text = n.textContent.replace(/\s+/g, " ");
          if (text) segs.push({ text, bold: b, italic: it, href: null });
        } else if (n.nodeName === "A") {
          const href = n.getAttribute("href") || "";
          const label = n.textContent.replace(/\s+/g, " ");
          if (label) segs.push({ text: label, bold: b, italic: it, href: href && !href.startsWith("javascript") ? href : null });
        } else if (n.nodeName === "BR") {
          segs.push({ text: "\n", bold: false, italic: false, href: null });
        } else {
          const nb = b || ["STRONG","B"].includes(n.nodeName);
          const ni = it || ["EM","I"].includes(n.nodeName);
          n.childNodes.forEach(c => collectSegments(c, nb, ni, segs));
        }
      }

      // Imprimir segmentos com word-wrap respeitando formatação mista
      function printSegments(segs) {
        // Dividir em palavras com metadados de estilo/link
        const words = [];
        for (const seg of segs) {
          if (seg.text === "\n") { words.push({ word: "\n", bold: false, italic: false, href: null }); continue; }
          seg.text.split(/( )/).forEach(w => {
            if (w) words.push({ word: w, bold: seg.bold, italic: seg.italic, href: seg.href });
          });
        }

        let lineWords = [];
        let lineW = 0;

        function flushLine(forceNewline) {
          if (lineWords.length === 0) return;
          checkY(lineH);
          let cx = indentX;
          for (const w of lineWords) {
            if (w.word === " ") { cx += doc.getTextWidth(" "); continue; }
            const style = w.bold && w.italic ? "bolditalic" : w.bold ? "bold" : w.italic ? "italic" : "normal";
            doc.setFont("helvetica", style);
            if (w.href) {
              doc.setTextColor(82, 79, 191);
              doc.text(w.word, cx, y);
              const ww = doc.getTextWidth(w.word);
              doc.link(cx, y - lineH + 1, ww, lineH, { url: w.href });
              doc.setDrawColor(82, 79, 191);
              doc.setLineWidth(0.3);
              doc.line(cx, y + 0.5, cx + ww, y + 0.5);
              cx += ww;
            } else {
              doc.setTextColor(50, 50, 50);
              doc.text(w.word, cx, y);
              cx += doc.getTextWidth(w.word);
            }
          }
          y += lineH;
          lineWords = [];
          lineW = 0;
        }

        for (const w of words) {
          if (w.word === "\n") { flushLine(true); continue; }
          const style = w.bold && w.italic ? "bolditalic" : w.bold ? "bold" : w.italic ? "italic" : "normal";
          doc.setFont("helvetica", style);
          const ww = doc.getTextWidth(w.word);
          if (lineW + ww > availW && lineWords.length > 0) flushLine(false);
          lineWords.push(w);
          lineW += ww;
        }
        flushLine(false);
      }

      // Processar filhos: listas vão direto para printHtmlNode, resto via segmentos
      let pendingSegs = [];
      node.childNodes.forEach(c => {
        if (c.nodeName === "UL" || c.nodeName === "OL") {
          if (pendingSegs.length > 0) { printSegments(pendingSegs); pendingSegs = []; y += 1; }
          printHtmlNode(c, isBold, isItalic, indentLevel);
        } else {
          collectSegments(c, isBold, isItalic, pendingSegs);
        }
      });
      if (pendingSegs.length > 0) printSegments(pendingSegs);
      y += 2;
    } else {
      node.childNodes.forEach(c => printHtmlNode(c, isBold, isItalic, indentLevel));
    }
  }

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(50, 50, 50);
  const hipDiv = document.createElement("div");
  hipDiv.innerHTML = currentResult.hipoteses || "";
  hipDiv.childNodes.forEach((child) => printHtmlNode(child, false, false));
  y += 5;

  // Montar HTML de recomendações para o PDF
  let pdfRecomendacoesHtml = "";
  if (Array.isArray(currentResult.recomendacoesRef) && currentResult.recomendacoesRef.length > 0) {
    currentResult.recomendacoesRef.forEach((rId, index) => {
      const rNode = nodes[rId];
      if (!rNode) return;
      if (index > 0) pdfRecomendacoesHtml += "<hr>";
      pdfRecomendacoesHtml += `<p><strong>${rNode.titulo || rId}</strong></p>`;
      pdfRecomendacoesHtml += (rNode.acoes || "");
    });
  } else {
    pdfRecomendacoesHtml = currentResult.acoes || "";
  }

  if (pdfRecomendacoesHtml) {
    checkY(19);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(82, 79, 191);
    doc.text("Recomendações", margin, y);
    y += 7;

    doc.setFontSize(11);

    const acoesDiv = document.createElement("div");
    acoesDiv.innerHTML = pdfRecomendacoesHtml;

    acoesDiv.childNodes.forEach((child) => printHtmlNode(child, false, false));
    y += 4;
  }

  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "diagnostico-gestao-inovacao.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  setTimeout(() => URL.revokeObjectURL(url), 100);
}
