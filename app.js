  (function(){
    var btn = document.getElementById('nav-toggle-btn');
    var panel = document.querySelector('.menu-panel');
    if(!btn || !panel) return;
    var header = document.querySelector('header');
    function setHH(){ document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px'); }
    setHH(); addEventListener('resize', setHH);
    btn.addEventListener('click', function(){
      var open = panel.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('#site-menu a').forEach(function(a){
      a.addEventListener('click', function(){
        panel.classList.remove('nav-open');
        btn.setAttribute('aria-expanded','false');
      });
    });
    document.querySelectorAll('.strain-toggle').forEach(function(st){
      var sp = document.getElementById(st.getAttribute('aria-controls'));
      st.addEventListener('click', function(){
        var open = sp.hidden;
        sp.hidden = !open;
        st.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  })();
  /* ============ I18N ============ */
  // Texto PT original é a chave; [EN, ES]. Textos sem entrada (marcas, estirpes, números) ficam iguais.
  (function(){
    var T = {
      "Sobre nós":["About us","Sobre nosotros"],
      "Matérias-Primas":["Raw Materials","Materias Primas"],
      "Biotecnologia":["Biotechnology","Biotecnología"],
      "Aplicações":["Applications","Aplicaciones"],
      "Grupo":["Group","Grupo"],
      "Pedir Ficha Técnica":["Request Data Sheet","Solicitar Ficha Técnica"],
      "Pedir ficha técnica":["Request data sheet","Solicitar ficha técnica"],
      "Abrir menu":["Open menu","Abrir menú"],
      "Grupo YSCL Pharma — Matérias-Primas · Aromas · Biotecnologia":["YSCL Pharma Group — Raw Materials · Flavours · Biotechnology","Grupo YSCL Pharma — Materias Primas · Aromas · Biotecnología"],
      "Da origem":["From source","Del origen"],
      "à fórmula.":["to formula.","a la fórmula."],
      "Ver matérias-primas":["View raw materials","Ver materias primas"],
      "Fundação da YSC — única produtora brasileira de mentol natural.":["YSC is founded — Brazil's only producer of natural menthol.","Fundación de YSC — única productora brasileña de mentol natural."],
      "Fundação da Intercolor — referência em aromas e fragrâncias.":["Intercolor is founded — a benchmark in flavours and fragrances.","Fundación de Intercolor — referencia en aromas y fragancias."],
      "União estratégica das duas empresas dá origem à YSCL Pharma.":["The strategic union of both companies gives rise to YSCL Pharma.","La unión estratégica de ambas empresas da origen a YSCL Pharma."],
      "Natureza, ciência e inovação que geram valor.":["Nature, science and innovation that create value.","Naturaleza, ciencia e innovación que generan valor."],
      "A YSCL Pharma resulta da união estratégica de duas empresas de referência no mercado brasileiro: a Intercolor, fundada em 1987 e reconhecida pela excelência no desenvolvimento de aromas e fragrâncias, e a YSC, única produtora de mentol natural do Brasil desde 1966. Concretizada em 2024, esta integração consolidou décadas de conhecimento técnico, inovação e experiência industrial num grupo sólido e altamente especializado.":["YSCL Pharma is the result of the strategic union of two leading companies in the Brazilian market: Intercolor, founded in 1987 and recognised for excellence in developing flavours and fragrances, and YSC, Brazil's only producer of natural menthol since 1966. Completed in 2024, this integration brought together decades of technical know-how, innovation and industrial experience into a solid, highly specialised group.","YSCL Pharma es el resultado de la unión estratégica de dos empresas de referencia en el mercado brasileño: Intercolor, fundada en 1987 y reconocida por su excelencia en el desarrollo de aromas y fragancias, y YSC, única productora de mentol natural de Brasil desde 1966. Concretada en 2024, esta integración consolidó décadas de conocimiento técnico, innovación y experiencia industrial en un grupo sólido y altamente especializado."],
      "Com forte aposta em investigação, desenvolvimento e qualidade, expandimos a nossa atuação para uma linha própria de cosméticos, mantendo a comercialização de matérias-primas de elevada qualidade — aromas, fragrâncias, óleos essenciais e mentol cristal natural.":["With a strong commitment to research, development and quality, we have expanded into our own cosmetics line, while continuing to supply high-quality raw materials — flavours, fragrances, essential oils and natural crystal menthol.","Con una fuerte apuesta por la investigación, el desarrollo y la calidad, ampliamos nuestra actividad a una línea propia de cosméticos, manteniendo la comercialización de materias primas de alta calidad — aromas, fragancias, aceites esenciales y mentol cristal natural."],
      "Em parceria estratégica com a Gabbia e a BioSyn, ampliámos o portfólio de matérias-primas especializadas, disponibilizando probióticos, prebióticos, pós-bióticos e beta-glucana para as indústrias alimentar e de suplementação humana e veterinária.":["In strategic partnership with Gabbia and BioSyn, we have broadened our portfolio of specialised raw materials, offering probiotics, prebiotics, postbiotics and beta-glucan to the food and the human and veterinary supplement industries.","En alianza estratégica con Gabbia y BioSyn, ampliamos el portafolio de materias primas especializadas, ofreciendo probióticos, prebióticos, posbióticos y betaglucano para las industrias alimentaria y de suplementación humana y veterinaria."],
      "Inovação":["Innovation","Innovación"],
      "Parceria":["Partnership","Colaboración"],
      "Apresentação de produtos":["Product overview","Presentación de productos"],
      "Da Menta Arvensis à Floresta Amazónica: ingredientes de origem natural, com rastreabilidade completa, para as indústrias farmacêutica, cosmética e nutracêutica.":["From Mentha arvensis to the Amazon Rainforest: natural ingredients with full traceability for the pharmaceutical, cosmetic and nutraceutical industries.","De la Menta Arvensis a la Selva Amazónica: ingredientes de origen natural, con trazabilidad completa, para las industrias farmacéutica, cosmética y nutracéutica."],
      "YSC · desde 1966":["YSC · since 1966","YSC · desde 1966"],
      "Folhas de Menta Arvensis, matéria-prima do mentol natural":["Mentha arvensis leaves, the raw material for natural menthol","Hojas de Menta Arvensis, materia prima del mentol natural"],
      "Mentol Natural":["Natural Menthol","Mentol Natural"],
      "A YSC, empresa do grupo, é a única produtora brasileira de mentol natural — um ingrediente de elevada pureza, origem rastreável e qualidade consistente, reconhecido pelas propriedades refrescantes, analgésicas e antisséticas.":["YSC, a group company, is Brazil's only producer of natural menthol — a high-purity ingredient with traceable origin and consistent quality, known for its cooling, analgesic and antiseptic properties.","YSC, empresa del grupo, es la única productora brasileña de mentol natural — un ingrediente de alta pureza, origen trazable y calidad constante, reconocido por sus propiedades refrescantes, analgésicas y antisépticas."],
      "Apresentações disponíveis":["Available forms","Presentaciones disponibles"],
      "Mentol Cristalizado Natural":["Natural Crystallised Menthol","Mentol Cristalizado Natural"],
      "Mentol Natural em Pó":["Natural Menthol Powder","Mentol Natural en Polvo"],
      "Óleo Tri-retificado":["Triple-rectified Oil","Aceite Trirrectificado"],
      "Óleo Desmentolado":["Dementholised Oil","Aceite Desmentolado"],
      "Óleo Bruto":["Crude Oil","Aceite Bruto"],
      "Óleo de Menta Piperita":["Peppermint Oil","Aceite de Menta Piperita"],
      "Óleo de Spearmint":["Spearmint Oil","Aceite de Hierbabuena"],
      "Ativos refrescantes e analgésicos para OTC, higiene oral e dermocosmética":["Cooling and analgesic actives for OTC, oral care and dermocosmetics","Activos refrescantes y analgésicos para OTC, higiene bucal y dermocosmética"],
      "Base industrial para extração de mentol e formulações farmacêuticas/cosméticas":["Industrial base for menthol extraction and pharmaceutical/cosmetic formulations","Base industrial para la extracción de mentol y formulaciones farmacéuticas/cosméticas"],
      "Perfumaria funcional e misturas aromáticas":["Functional perfumery and aromatic blends","Perfumería funcional y mezclas aromáticas"],
      "YSC · Amazónia & Cerrado":["YSC · Amazon & Cerrado","YSC · Amazonía y Cerrado"],
      "Óleos essenciais, óleos vegetais e manteigas naturais":["Essential oils, vegetable oils and natural butters","Aceites esenciales, aceites vegetales y mantecas naturales"],
      "Óleos & Manteigas Naturais":["Natural Oils & Butters","Aceites y Mantecas Naturales"],
      "Óleos essenciais, óleos vegetais e manteigas de elevada pureza, provenientes de matérias-primas selecionadas na Floresta Amazónica e na Região do Cerrado, extraídas com processos que preservam a integridade dos compostos naturais.":["High-purity essential oils, vegetable oils and butters, sourced from raw materials selected in the Amazon Rainforest and the Cerrado region, extracted with processes that preserve the integrity of natural compounds.","Aceites esenciales, aceites vegetales y mantecas de alta pureza, procedentes de materias primas seleccionadas en la Selva Amazónica y en la región del Cerrado, extraídas con procesos que preservan la integridad de los compuestos naturales."],
      "Óleos essenciais & vegetais":["Essential & vegetable oils","Aceites esenciales y vegetales"],
      "Laranja Doce & Amarga":["Sweet & Bitter Orange","Naranja Dulce y Amarga"],
      "Limão Siciliano":["Sicilian Lemon","Limón Siciliano"],
      "Eucalipto Globulus":["Eucalyptus Globulus","Eucalipto Globulus"],
      "Cravo-da-Índia":["Clove","Clavo"],
      "Manteigas naturais":["Natural butters","Mantecas naturales"],
      "Produtos farmacêuticos e fitoterapêuticos":["Pharmaceutical and herbal products","Productos farmacéuticos y fitoterápicos"],
      "Cosmética, dermocosmética e cuidados capilares":["Cosmetics, dermocosmetics and hair care","Cosmética, dermocosmética y cuidado capilar"],
      "Aromaterapia, sabonetes e higiene pessoal":["Aromatherapy, soaps and personal care","Aromaterapia, jabones e higiene personal"],
      "Intercolor · desde 1987":["Intercolor · since 1987","Intercolor · desde 1987"],
      "Frascos de aromas com laranja, limão, baunilha, chocolate e caramelo":["Flavour bottles with orange, lemon, vanilla, chocolate and caramel","Frascos de aromas con naranja, limón, vainilla, chocolate y caramelo"],
      "Aromas Personalizados":["Custom Flavours","Aromas Personalizados"],
      "Na Intercolor desenvolvemos aromas à medida para cada cliente, mercado e aplicação — pela reprodução fiel de um perfil sensorial de referência ou pela criação de soluções exclusivas, alinhadas ao posicionamento de cada produto.":["At Intercolor we develop tailor-made flavours for each customer, market and application — by faithfully reproducing a reference sensory profile or by creating exclusive solutions aligned with each product's positioning.","En Intercolor desarrollamos aromas a medida para cada cliente, mercado y aplicación — mediante la reproducción fiel de un perfil sensorial de referencia o la creación de soluciones exclusivas, alineadas con el posicionamiento de cada producto."],
      "Indústrias servidas":["Industries served","Industrias atendidas"],
      "Alimentar":["Food","Alimentaria"],
      "Bebidas":["Beverages","Bebidas"],
      "Farmacêutica & Nutracêutica":["Pharmaceutical & Nutraceutical","Farmacéutica y Nutracéutica"],
      "Formatos disponíveis":["Available formats","Formatos disponibles"],
      "Pó":["Powder","Polvo"],
      "Líquido":["Liquid","Líquido"],
      "Pasta":["Paste","Pasta"],
      "Preparação Hidrossolúvel":["Water-soluble Preparation","Preparación Hidrosoluble"],
      "Preparação Lipossolúvel":["Fat-soluble Preparation","Preparación Liposoluble"],
      "Soluções biotecnológicas":["Biotechnological solutions","Soluciones biotecnológicas"],
      "Ingredientes microbiológicos e polissacarídeos funcionais para a suplementação alimentar, a nutrição funcional e a saúde animal.":["Microbiological ingredients and functional polysaccharides for food supplements, functional nutrition and animal health.","Ingredientes microbiológicos y polisacáridos funcionales para la suplementación alimentaria, la nutrición funcional y la salud animal."],
      "Linha GB® · Bactérias vivas":["GB® line · Live bacteria","Línea GB® · Bacterias vivas"],
      "Cultura de bactérias láticas ao microscópio":["Lactic acid bacteria culture under the microscope","Cultivo de bacterias lácticas al microscopio"],
      "Cultura de bactérias láticas · visualização microscópica":["Lactic acid bacteria culture · microscopic view","Cultivo de bacterias lácticas · visualización microscópica"],
      "Ingredientes microbiológicos":["Microbiological ingredients","Ingredientes microbiológicos"],
      "Probióticos, Prebióticos e Pós-bióticos":["Probiotics, Prebiotics and Postbiotics","Probióticos, Prebióticos y Posbióticos"],
      "Um portfólio abrangente de estirpes selecionadas — bactérias láticas, bacilos, leveduras e pós-bióticos inativados — desenvolvido para responder às exigências da saúde digestiva, imunidade e bem-estar, humano e veterinário.":["A comprehensive portfolio of selected strains — lactic acid bacteria, bacilli, yeasts and inactivated postbiotics — developed to meet the demands of digestive health, immunity and wellbeing, both human and veterinary.","Un amplio portafolio de cepas seleccionadas — bacterias lácticas, bacilos, levaduras y posbióticos inactivados — desarrollado para responder a las exigencias de la salud digestiva, la inmunidad y el bienestar, humano y veterinario."],
      "Bactérias láticas · linha GB®":["Lactic acid bacteria · GB® line","Bacterias lácticas · línea GB®"],
      "Bacilos & leveduras":["Bacilli & yeasts","Bacilos y levaduras"],
      "Pós-bióticos inativados · Neoimuno®":["Inactivated postbiotics · Neoimuno®","Posbióticos inactivados · Neoimuno®"],
      "Ver estirpes disponíveis":["View available strains","Ver cepas disponibles"],
      "Áreas de aplicação":["Application areas","Áreas de aplicación"],
      "Saúde Digestiva":["Digestive Health","Salud Digestiva"],
      "Imunidade":["Immunity","Inmunidad"],
      "Saúde Feminina":["Women's Health","Salud Femenina"],
      "Nutrição Desportiva":["Sports Nutrition","Nutrición Deportiva"],
      "Saúde Oral":["Oral Health","Salud Bucal"],
      "Aplicações Veterinárias":["Veterinary Applications","Aplicaciones Veterinarias"],
      "S. cerevisiae · Parede celular":["S. cerevisiae · Cell wall","S. cerevisiae · Pared celular"],
      "Ilustração de uma partícula de beta-glucana":["Illustration of a beta-glucan particle","Ilustración de una partícula de betaglucano"],
      "Estrutura (1→3)(1→6) β-D-Glucano":["(1→3)(1→6) β-D-Glucan structure","Estructura (1→3)(1→6) β-D-Glucano"],
      "Ingrediente funcional":["Functional ingredient","Ingrediente funcional"],
      "Beta-Glucana":["Beta-Glucan","Betaglucano"],
      "Polissacarídeo natural obtido da parede celular de":["Natural polysaccharide obtained from the cell wall of","Polisacárido natural obtenido de la pared celular de"],
      ", com estrutura (1→3)(1→6) β-D-Glucano — reconhecido pela versatilidade em formulações de suplementação, nutrição funcional e cosmética.":[", with a (1→3)(1→6) β-D-Glucan structure — recognised for its versatility in supplement, functional nutrition and cosmetic formulations.",", con estructura (1→3)(1→6) β-D-Glucano — reconocido por su versatilidad en formulaciones de suplementación, nutrición funcional y cosmética."],
      "Benefícios tecnológicos":["Technological benefits","Beneficios tecnológicos"],
      "Origem natural, com elevado perfil de segurança":["Natural origin with a high safety profile","Origen natural, con un alto perfil de seguridad"],
      "Excelente versatilidade de formulação":["Excellent formulation versatility","Excelente versatilidad de formulación"],
      "Compatível com diferentes matrizes alimentares e nutracêuticas":["Compatible with different food and nutraceutical matrices","Compatible con diferentes matrices alimentarias y nutracéuticas"],
      "Elevada estabilidade em diferentes formatos de produto":["High stability across different product formats","Alta estabilidad en diferentes formatos de producto"],
      "Suplementação Alimentar":["Food Supplements","Suplementación Alimentaria"],
      "Alimentos Funcionais":["Functional Foods","Alimentos Funcionales"],
      "Nutrição Animal":["Animal Nutrition","Nutrición Animal"],
      "Cosmética":["Cosmetics","Cosmética"],
      "Onde chegamos":["Where we reach","Dónde llegamos"],
      "Aplicações por indústria":["Applications by industry","Aplicaciones por industria"],
      "Um portfólio transversal, desenvolvido para responder às necessidades específicas de cada setor.":["A cross-sector portfolio, developed to meet the specific needs of each industry.","Un portafolio transversal, desarrollado para responder a las necesidades específicas de cada sector."],
      "Formulações e dermocosmética":["Formulations and dermocosmetics","Formulaciones y dermocosmética"],
      "Indústria Alimentar":["Food Industry","Industria Alimentaria"],
      "Alimentos, bebidas e confeitaria":["Food, beverages and confectionery","Alimentos, bebidas y confitería"],
      "Farmacêutica & Suplementos":["Pharmaceutical & Supplements","Farmacéutica y Suplementos"],
      "Ativos e nutracêuticos":["Actives and nutraceuticals","Activos y nutracéuticos"],
      "Nutrição e bem-estar animal":["Animal nutrition and wellbeing","Nutrición y bienestar animal"],
      "Aromaterapia":["Aromatherapy","Aromaterapia"],
      "Bem-estar e óleos essenciais":["Wellbeing and essential oils","Bienestar y aceites esenciales"],
      "Desde 1966":["Since 1966","Desde 1966"],
      "Desde 1987":["Since 1987","Desde 1987"],
      "Única produtora brasileira de mentol natural. Produz também óleos essenciais, óleos vegetais e manteigas naturais.":["Brazil's only producer of natural menthol. It also produces essential oils, vegetable oils and natural butters.","Única productora brasileña de mentol natural. También produce aceites esenciales, aceites vegetales y mantecas naturales."],
      "Referência em aromas e fragrâncias personalizadas para a indústria.":["A benchmark in custom flavours and fragrances for industry.","Referencia en aromas y fragancias personalizadas para la industria."],
      "Contacto":["Contact","Contacto"],
      "Vamos conversar sobre o seu projeto.":["Let's talk about your project.","Hablemos de su proyecto."],
      "Peça a ficha técnica de qualquer ingrediente do nosso portfólio ou fale diretamente com a nossa equipa técnica sobre especificações, aplicações e disponibilidade.":["Request the data sheet for any ingredient in our portfolio, or speak directly with our technical team about specifications, applications and availability.","Solicite la ficha técnica de cualquier ingrediente de nuestro portafolio o hable directamente con nuestro equipo técnico sobre especificaciones, aplicaciones y disponibilidad."],
      "Ligar agora":["Call now","Llamar ahora"],
      "Telefones":["Phones","Teléfonos"],
      "Morada":["Address","Dirección"],
      "Ingredientes que inspiram soluções. Parcerias que constroem o futuro.":["Ingredients that inspire solutions. Partnerships that build the future.","Ingredientes que inspiran soluciones. Alianzas que construyen el futuro."],
      "Portfólio":["Portfolio","Portafolio"],
      "Empresa":["Company","Empresa"],
      "© 2026 YSCL Pharma Group — YSC · Intercolor":["© 2026 YSCL Pharma Group — YSC · Intercolor","© 2026 YSCL Pharma Group — YSC · Intercolor"],
      "Matérias-primas naturais, aromas e ingredientes biotecnológicos — com origem rastreável e controlo de qualidade em cada lote — para as indústrias farmacêutica, cosmética, alimentar e veterinária.":["Natural raw materials, flavours and biotech ingredients — with traceable origin and batch-by-batch quality control — for the pharmaceutical, cosmetic, food and veterinary industries.","Materias primas naturales, aromas e ingredientes biotecnológicos — con origen trazable y control de calidad en cada lote — para las industrias farmacéutica, cosmética, alimentaria y veterinaria."],
      "Única produtora de mentol natural do Brasil":["Brazil's only natural menthol producer","Única productora de mentol natural de Brasil"],
      "Mentol cristalizado, em pó e óleos de menta com origem rastreável, produzidos pela empresa do grupo.":["Crystallised and powdered menthol and mint oils with traceable origin, produced by our group company.","Mentol cristalizado, en polvo y aceites de menta con origen trazable, producidos por la empresa del grupo."],
      "Hoje":["Today","Hoy"],
      "Matérias-primas, aromas, fragrâncias e ativos para as indústrias farmacêutica, cosmética, alimentar e veterinária.":["Raw materials, flavours, fragrances and actives for the pharmaceutical, cosmetic, food and veterinary industries.","Materias primas, aromas, fragancias y activos para las industrias farmacéutica, cosmética, alimentaria y veterinaria."],
      "Origem natural selecionada":["Selected natural origin","Origen natural seleccionado"],
      "Matérias-primas obtidas de fontes naturais cuidadosamente selecionadas em todo o Brasil.":["Raw materials obtained from carefully selected natural sources across Brazil.","Materias primas obtenidas de fuentes naturales cuidadosamente seleccionadas en todo Brasil."],
      "Extração e tecnologia":["Extraction and technology","Extracción y tecnología"],
      "Processos de extração avançados que preservam as propriedades naturais e garantem a máxima pureza.":["Advanced extraction processes that preserve natural properties and ensure maximum purity.","Procesos de extracción avanzados que preservan las propiedades naturales y garantizan la máxima pureza."],
      "Controlo de qualidade por lote":["Batch-by-batch quality control","Control de calidad por lote"],
      "Ensaios físico-químicos e microbiológicos asseguram a pureza, segurança e rastreabilidade de cada lote.":["Physico-chemical and microbiological testing ensures the purity, safety and traceability of every batch.","Ensayos fisicoquímicos y microbiológicos aseguran la pureza, seguridad y trazabilidad de cada lote."],
      "Rastreabilidade completa":["Full traceability","Trazabilidad completa"],
      "Controlo total da origem à entrega, com transparência e conformidade.":["Full control from source to delivery, with transparency and compliance.","Control total del origen a la entrega, con transparencia y conformidad."],
      "Inovação e biotecnologia":["Innovation and biotechnology","Innovación y biotecnología"],
      "Desenvolvimento contínuo de soluções inovadoras, incluindo ingredientes biotecnológicos e probióticos.":["Continuous development of innovative solutions, including biotech ingredients and probiotics.","Desarrollo continuo de soluciones innovadoras, incluidos ingredientes biotecnológicos y probióticos."],
      "O Grupo":["The Group","El Grupo"],
      "YSCL Pharma — início":["YSCL Pharma — home","YSCL Pharma — inicio"],
      "Copiar email":["Copy email","Copiar email"],
      "Fichas técnicas disponíveis mediante pedido.":["Technical data sheets available on request.","Fichas técnicas disponibles bajo petición."],
      "Ver lista completa":["View full list","Ver lista completa"],
      "Mentol natural":["Natural menthol","Mentol natural"],
      "Óleos de menta":["Mint oils","Aceites de menta"],
      "Derivados":["Derivatives","Derivados"],
      "Mentona":["Menthone","Mentona"],
      "Terpenos de Menta":["Mint Terpenes","Terpenos de Menta"],
      "Óleos essenciais & hidrolatos":["Essential oils & hydrosols","Aceites esenciales e hidrolatos"],
      "Laranja Amarga":["Bitter Orange","Naranja Amarga"],
      "Laranja Doce":["Sweet Orange","Naranja Dulce"],
      "Lima Taiti":["Tahiti Lime","Lima Tahití"],
      "Toranja":["Grapefruit","Pomelo"],
      "Laranja":["Orange","Naranja"],
      "Botão de Cravo-da-Índia":["Clove Bud","Botón de Clavo"],
      "Folha de Cravo-da-Índia":["Clove Leaf","Hoja de Clavo"],
      "Melaleuca (Tea Tree)":["Tea Tree","Árbol de Té"],
      "Cedro":["Cedarwood","Cedro"],
      "Hidrolato de Cravo-da-Índia":["Clove Hydrosol","Hidrolato de Clavo"],
      "Óleos vegetais":["Vegetable oils","Aceites vegetales"],
      "Babaçu":["Babassu","Babasú"],
      "Castanha-do-Brasil":["Brazil Nut","Nuez de Brasil"],
      "Maracujá":["Passion Fruit","Maracuyá"],
      "Urucum":["Annatto","Achiote"],
      "Manteigas":["Butters","Mantecas"],
      "Sob consulta":["On request","Bajo consulta"],
      "O seu programa de email deve abrir com o pedido já preenchido. Se não abriu, use uma das opções abaixo.":["Your email program should open with the request already filled in. If it didn't, use one of the options below.","Su programa de correo debería abrirse con la solicitud ya rellenada. Si no se abrió, use una de las opciones siguientes."],
      "Texto do pedido":["Request text","Texto de la solicitud"],
      "Copiar texto":["Copy text","Copiar texto"],
      "Abrir no Gmail":["Open in Gmail","Abrir en Gmail"],
      "Abrir no Outlook":["Open in Outlook","Abrir en Outlook"],
      "Fechar":["Close","Cerrar"],
      "Pedido de ficha técnica":["Data sheet request","Solicitud de ficha técnica"],
      "Idioma":["Language","Idioma"]
    };
    var IDX = {en:0, es:1};
    var nodes = [], attrs = [];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for(var n; (n = walker.nextNode());){
      var key = n.nodeValue.replace(/\s+/g,' ').trim();
      if(T[key]) nodes.push({n:n, pt:n.nodeValue, key:key});
    }
    document.querySelectorAll('[alt],[aria-label]').forEach(function(el){
      ['alt','aria-label'].forEach(function(a){
        var v = el.getAttribute(a);
        if(v && T[v]) attrs.push({el:el, a:a, pt:v});
      });
    });
    var MAIL = {
      pt:['Pedido de ficha técnica','Empresa:\nPaís:\nProduto / aplicação:\nVolume anual estimado:\n'],
      en:['Data sheet request','Company:\nCountry:\nProduct / application:\nEstimated annual volume:\n'],
      es:['Solicitud de ficha técnica','Empresa:\nPaís:\nProducto / aplicación:\nVolumen anual estimado:\n']
    };
    document.querySelectorAll('.copy-btn').forEach(function(b){
      b.addEventListener('click', function(){
        if(!navigator.clipboard) return;
        navigator.clipboard.writeText(b.dataset.copy).then(function(){
          b.classList.add('copied');
          setTimeout(function(){ b.classList.remove('copied'); }, 1500);
        });
      });
    });
    function setLang(lang){
      var i = IDX[lang];
      nodes.forEach(function(o){
        o.n.nodeValue = i == null ? o.pt : o.pt.replace(o.pt.trim(), T[o.key][i]);
      });
      attrs.forEach(function(o){ o.el.setAttribute(o.a, i == null ? o.pt : T[o.pt][i]); });
      document.documentElement.lang = lang;
      var mail = MAIL[lang] || MAIL.pt;
      document.querySelectorAll('a[data-product]').forEach(function(a){
        var p = a.dataset.product, name = p && (i == null || !T[p] ? p : T[p][i]);
        a.href = 'mailto:ysclpharma@ysclpharma.com?subject=' + encodeURIComponent(mail[0] + (name ? ' — ' + name : '')) + '&body=' + encodeURIComponent(mail[1]);
      });
      document.querySelectorAll('.lang-switch button').forEach(function(b){
        b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
      });
      try{ localStorage.setItem('lang', lang); }catch(e){}
      eqCards();
    }
    // Raw material cards: same image height on desktop (tallest text wins)
    var cards = document.querySelectorAll('.product');
    function eqCards(){
      cards.forEach(function(c){ c.style.removeProperty('--row-h'); });
      if(matchMedia('(max-width:900px)').matches) return;
      var h = 0;
      cards.forEach(function(c){ h = Math.max(h, c.querySelector('.product-body').offsetHeight); });
      cards.forEach(function(c){ c.style.setProperty('--row-h', h + 'px'); });
    }
    addEventListener('resize', eqCards);
    if(document.fonts) document.fonts.ready.then(eqCards);
    // Mailto fallback: if no mail client opens, show the address, request text and webmail links
    var dlg = document.getElementById('mail-dialog');
    if(dlg && dlg.showModal){
      var txt = document.getElementById('mail-text'), copyTxt = document.getElementById('mail-copy-text');
      document.querySelectorAll('a[data-product]').forEach(function(a){
        a.addEventListener('click', function(){
          var q = new URL(a.href).searchParams, su = q.get('subject') || '', body = q.get('body') || '';
          var to = 'ysclpharma@ysclpharma.com', esu = encodeURIComponent(su), ebody = encodeURIComponent(body);
          txt.value = su + '\n\n' + body;
          document.getElementById('mail-gmail').href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + to + '&su=' + esu + '&body=' + ebody;
          document.getElementById('mail-outlook').href = 'https://outlook.office.com/mail/deeplink/compose?to=' + to + '&subject=' + esu + '&body=' + ebody;
          setTimeout(function(){ dlg.showModal(); }, 400);
        });
      });
      dlg.querySelector('.mail-close').addEventListener('click', function(){ dlg.close(); });
      dlg.addEventListener('click', function(e){ if(e.target === dlg) dlg.close(); });
      copyTxt.addEventListener('click', function(){
        if(!navigator.clipboard) return;
        navigator.clipboard.writeText(txt.value).then(function(){
          copyTxt.classList.add('copied');
          setTimeout(function(){ copyTxt.classList.remove('copied'); }, 1500);
        });
      });
    }
    document.querySelectorAll('.lang-switch button').forEach(function(b){
      b.addEventListener('click', function(){ setLang(b.dataset.lang); });
    });
    var saved; try{ saved = localStorage.getItem('lang'); }catch(e){}
    setLang(saved && (saved in IDX || saved === 'pt') ? saved : 'pt');
  })();
