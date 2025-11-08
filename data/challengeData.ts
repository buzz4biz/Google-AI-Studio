
import { type DayData, GeminiActionType } from '../types';

export const challengeData: DayData[] = [
  // SEMANA 1: FUNDAÇÃO
  {
    week: 1,
    day: 1,
    title: 'Diagnóstico Inicial da Prática',
    objective: 'Realizar um diagnóstico preciso da sua situação atual para identificar os principais pontos de melhoria.',
    tasks: [
      { description: 'Liste todos os clientes ativos dos últimos 3 meses (iniciais, bairro, valor da sessão, frequência).' },
      { description: 'Calcule sua renda mensal média dos últimos 3 meses.' },
      { description: 'Analise sua última semana de trabalho: registre horas em atendimento vs. horas em deslocamento.' },
      { description: 'Identifique de onde vieram seus últimos 5 clientes (canais de captação).' }
    ],
    reflectionPrompt: 'O que você descobriu sobre sua prática hoje que não havia percebido antes? Qual foi a maior surpresa nos seus números?'
  },
  {
    week: 1,
    day: 2,
    title: 'Mapeamento Geográfico',
    objective: 'Visualizar geograficamente seus atendimentos para identificar padrões e ineficiências.',
    tasks: [
      { description: 'Use um mapa (digital ou físico) e marque sua casa/base.' },
      { description: 'Marque a localização de cada cliente ativo com uma cor.' },
      { description: 'Marque a localização de clientes não recorrentes (últimos 3 meses) com outra cor.' },
      { description: 'Circule as áreas que exigem mais de 45 minutos de deslocamento.' }
    ],
    reflectionPrompt: 'Observando o mapa, quais padrões de concentração de clientes você percebe? Onde está a maior parte do seu tempo de deslocamento?'
  },
  {
    week: 1,
    day: 3,
    title: 'Identificando Suas Zonas Douradas',
    objective: 'Definir suas "Zonas Douradas" - regiões onde se concentram seus melhores clientes e oportunidades.',
    tasks: [
      { description: 'Analise o mapa do Dia 2 e liste as 3 áreas com maior concentração de clientes.' },
      { description: 'Pesquise o perfil socioeconômico dessas áreas. Elas se alinham com o cliente que pode pagar seu valor ideal?' },
      { description: 'Defina e nomeie 2 a 3 "Zonas Douradas" prioritárias, estabelecendo seus limites geográficos (bairros).' }
    ],
    reflectionPrompt: 'Além da concentração de clientes, por que essas Zonas Douradas são estratégicas para você (afinidade, facilidade de acesso, potencial de crescimento)?'
  },
  {
    week: 1,
    day: 4,
    title: 'Análise de Produtividade',
    objective: 'Identificar o tempo produtivo vs. improdutivo na sua rotina atual.',
    tasks: [
      { description: 'Calcule a porcentagem de tempo em atendimento vs. tempo em deslocamento/administrativo da sua última semana.' },
      { description: 'Estime o custo do seu tempo em trânsito (horas em trânsito x seu valor/hora de sessão). ' },
      { description: 'Liste as 3 atividades que mais consomem seu tempo improdutivo.' }
    ],
    reflectionPrompt: 'Qual foi o custo (em tempo e dinheiro) do seu tempo improdutivo na última semana? Onde estão as maiores oportunidades de otimização?'
  },
  {
    week: 1,
    day: 5,
    title: 'Perfil do Cliente Ideal',
    objective: 'Definir com clareza o perfil do seu cliente ideal para direcionar seus esforços.',
    tasks: [
      { description: 'Pense nos seus 3 melhores clientes (os que você ama atender, que valorizam seu trabalho e têm ótimos resultados).' },
      { description: 'Liste as características demográficas (idade, profissão, etc.) e psicográficas (valores, dores, desejos) em comum entre eles.' },
      { description: 'Escreva um parágrafo descrevendo seu "Avatar de Cliente Ideal", dando-lhe um nome.', geminiAction: { type: GeminiActionType.GENERATE_AVATAR_QUESTIONS, label: 'Gerar Perguntas para Aprofundar Avatar', promptContext: 'A tarefa é criar um perfil de cliente ideal para uma terapeuta.'} }
    ],
    reflectionPrompt: 'Em que suas Zonas Douradas e seu Cliente Ideal se conectam? Como você pode encontrar mais desses clientes ideais nas suas zonas prioritárias?'
  },
  {
    week: 1,
    day: 6,
    title: 'A Causa-Raiz dos Problemas',
    objective: 'Identificar a causa-raiz dos problemas que seus clientes enfrentam para se posicionar como especialista.',
    tasks: [
      { description: 'Para seu Cliente Ideal, vá além dos sintomas (ex: "dor nas costas", "ansiedade"). Qual é a causa-raiz mais profunda que você ajuda a resolver? (ex: "sobrecarga por não saber colocar limites", "medo de não ser suficiente").' },
      { description: 'Liste 3 "causas-raiz" que você tem mais paixão e habilidade para tratar.' },
      { description: 'Escolha UMA causa-raiz principal para focar seu posicionamento.' }
    ],
    reflectionPrompt: 'Como focar em uma causa-raiz muda a forma como você descreve seu trabalho? O que te torna a pessoa certa para resolver essa causa específica?'
  },
  {
    week: 1,
    day: 7,
    title: 'Consolidação da Fundação',
    objective: 'Consolidar os aprendizados da primeira semana e preparar-se para a implementação.',
    tasks: [
      { description: 'Revise todas as anotações e reflexões dos últimos 6 dias.' },
      { description: 'Crie uma "Declaração de Fundação" de uma página contendo: Suas Zonas Douradas, o perfil do seu Cliente Ideal e a Causa-Raiz que você resolve.' },
      { description: 'Defina UMA meta para a próxima semana baseada no que aprendeu. Ex: "Recusar atendimentos fora das minhas Zonas Douradas".' }
    ],
    reflectionPrompt: 'Qual foi a maior descoberta da Semana 1? Como você se sente com essa nova clareza sobre sua prática?'
  },
  // SEMANA 2: COMUNICAÇÃO
  {
    week: 2,
    day: 8,
    title: 'Renovação do Perfil Profissional',
    objective: 'Reescrever sua bio profissional para comunicar seu posicionamento único.',
    tasks: [
      { description: 'Analise sua bio atual (Instagram, WhatsApp, etc.). Ela reflete seu foco no Cliente Ideal e na Causa-Raiz?' },
      { description: 'Usando a fórmula "Eu ajudo [Cliente Ideal] a [Resolver Causa-Raiz] para que possam [Alcançar Transformação]", escreva uma nova headline para seu perfil.' },
      { description: 'Reescreva sua bio completa, focando nos resultados e transformações que você proporciona, não apenas nas técnicas que utiliza.', geminiAction: { type: GeminiActionType.DRAFT_BIO, label: 'Gerar Rascunho de Bio com IA', promptContext: 'A tarefa é criar uma nova biografia profissional para uma terapeuta.'} }
    ],
    reflectionPrompt: 'Como sua nova bio te diferencia de outros terapeutas? Ela atrairia seu Cliente Ideal e repeliria clientes não-ideais?'
  },
   {
    week: 2,
    day: 9,
    title: 'Criação de Mensagens-Padrão',
    objective: 'Desenvolver scripts de comunicação para momentos-chave do relacionamento com clientes.',
    tasks: [
      { description: 'Crie um template de resposta para o primeiro contato de um novo cliente, incluindo uma pergunta de qualificação.' },
      { description: 'Desenvolva um template de mensagem de lembrete de consulta 24h antes.' },
      { description: 'Escreva um template de mensagem de agradecimento e follow-up para enviar após a primeira sessão.', geminiAction: { type: GeminiActionType.DRAFT_MESSAGE_TEMPLATE, label: 'Rascunhar Mensagem com IA', promptContext: 'A tarefa é criar um template de mensagem para uma situação específica com um cliente.'} }
    ],
    reflectionPrompt: 'Como esses templates podem economizar seu tempo e profissionalizar sua comunicação? Qual é a situação de comunicação mais desafiadora para você hoje?'
  },
  {
    week: 2,
    day: 10,
    title: 'Sistema de Comunicação Otimizado',
    objective: 'Implementar um sistema eficiente para gerenciar a comunicação com clientes.',
    tasks: [
      { description: 'Configure respostas automáticas no WhatsApp Business para fora do horário comercial.' },
      { description: 'Organize suas mensagens-padrão como "respostas rápidas" no WhatsApp Business ou em um app de notas.' },
      { description: 'Defina e comunique seus horários de atendimento para responder mensagens (ex: "Respondo mensagens entre 9h-18h").' }
    ],
    reflectionPrompt: 'Como estabelecer limites claros na comunicação pode proteger sua energia e melhorar seu profissionalismo?'
  },
  {
    week: 2,
    day: 11,
    title: 'Questionário de Qualificação',
    objective: 'Criar um questionário para qualificar potenciais clientes e identificar os ideais.',
    tasks: [
      { description: 'Elabore 5 perguntas chave para um formulário de qualificação. Inclua perguntas sobre a localização, o principal desafio e o que esperam da terapia.' },
      { description: 'Crie este formulário usando uma ferramenta gratuita como o Google Forms.' },
      { description: 'Atualize sua mensagem de primeiro contato para incluir o link do formulário de qualificação.' }
    ],
    reflectionPrompt: 'Como o uso de um questionário pode filtrar clientes não-ideais e economizar seu tempo antes mesmo da primeira conversa?'
  },
  {
    week: 2,
    day: 12,
    title: 'Página Profissional Simplificada',
    objective: 'Criar ou atualizar sua presença online para refletir seu novo posicionamento.',
    tasks: [
      { description: 'Estruture o conteúdo para uma página simples de apresentação: Sua nova bio, os problemas que resolve, sua abordagem, depoimentos e uma chamada para ação clara (preencher o questionário).' },
      { description: 'Use uma ferramenta como Canva ou Linktree para criar uma página de link única para sua bio do Instagram.' },
      { description: 'Atualize o link na sua bio do WhatsApp e Instagram para esta nova página.' }
    ],
    reflectionPrompt: 'Qual é o caminho mais simples e claro que um cliente ideal pode percorrer desde te encontrar online até se tornar um cliente?'
  },
  {
    week: 2,
    day: 13,
    title: 'Parcerias Estratégicas',
    objective: 'Identificar e planejar parcerias estratégicas para gerar indicações qualificadas.',
    tasks: [
      { description: 'Liste 5 tipos de profissionais ou estabelecimentos que atendem seu Cliente Ideal em suas Zonas Douradas (ex: estúdios de yoga, nutricionistas, lojas de produtos naturais).' },
      { description: 'Para cada um, pense em uma forma de parceria ganha-ganha (ex: troca de indicações, workshop conjunto).' },
      { description: 'Elabore uma mensagem de apresentação para iniciar o contato com um desses potenciais parceiros.' }
    ],
    reflectionPrompt: 'Como parcerias estratégicas podem ser mais eficazes do que marketing tradicional para atrair seu cliente ideal?'
  },
  {
    week: 2,
    day: 14,
    title: 'Consolidação da Comunicação',
    objective: 'Revisar e integrar todos os elementos de comunicação desenvolvidos durante a semana.',
    tasks: [
      { description: 'Revise sua nova bio, mensagens, questionário e página profissional. Eles estão consistentes e alinhados?' },
      { description: 'Simule a jornada de um novo cliente, desde o primeiro contato até o agendamento, usando suas novas ferramentas.' },
      { description: 'Defina UMA meta de comunicação para a próxima semana. Ex: "Implementar o questionário para todos os novos contatos".' }
    ],
    reflectionPrompt: 'Qual foi a maior mudança na sua comunicação profissional esta semana? Como você se sente ao se apresentar desta nova forma?'
  },
  // SEMANA 3: VALORIZAÇÃO
  {
    week: 3,
    day: 15,
    title: 'Estruturação de Pacotes Baseados em Valor',
    objective: 'Criar pacotes de serviços baseados em resultados, não em tempo.',
    tasks: [
      { description: 'Em vez de vender sessões avulsas, crie 2-3 "Programas de Transformação" com nomes focados em resultados (ex: "Programa de Alívio da Ansiedade em 8 Semanas").' },
      { description: 'Para cada programa, defina o número de sessões, o que está incluído (ex: acompanhamento por WhatsApp, materiais) e a transformação prometida.' },
      { description: 'Defina o investimento para cada pacote. Ele deve ser mais vantajoso do que comprar as sessões avulsas.', geminiAction: { type: GeminiActionType.ANALYZE_PACKAGE_VALUE, label: 'Analisar Valor do Pacote com IA', promptContext: 'A tarefa é criar pacotes de serviço para uma terapeuta.'} }
    ],
    reflectionPrompt: 'Como a venda de programas em vez de sessões avulsas muda a percepção de valor e o comprometimento do cliente?'
  },
  {
    week: 3,
    day: 16,
    title: 'Taxa de Deslocamento Estratégica',
    objective: 'Implementar um sistema de taxas de deslocamento que valorize seu tempo.',
    tasks: [
      { description: 'Defina uma política de deslocamento. Ex: "Atendimentos na Zona Dourada 1 não têm taxa. Zona 2 tem taxa X. Fora das zonas, taxa Y".' },
      { description: 'Calcule um valor justo para sua taxa, considerando seu tempo e custo de transporte.' },
      { description: 'Prepare uma forma clara e profissional de comunicar essa política aos novos clientes.' }
    ],
    reflectionPrompt: 'Como a taxa de deslocamento estratégica pode incentivar os clientes a agendarem dentro das suas Zonas Douradas?'
  },
  {
    week: 3,
    day: 17,
    title: 'Materiais de Apresentação',
    objective: 'Criar materiais profissionais para apresentação dos seus serviços e pacotes.',
    tasks: [
      { description: 'Crie um PDF simples e elegante apresentando seus novos programas de transformação.' },
      { description: 'Use o Canva para criar um "Menu de Serviços" visualmente atraente.' },
      { description: 'Inclua depoimentos de clientes satisfeitos (peça autorização!).' }
    ],
    reflectionPrompt: 'Como materiais profissionais podem justificar um investimento mais alto e aumentar a confiança do cliente antes mesmo do primeiro atendimento?'
  },
  {
    week: 3,
    day: 18,
    title: 'Script de Apresentação',
    objective: 'Desenvolver um roteiro para apresentação consistente dos seus serviços e pacotes.',
    tasks: [
      { description: 'Estruture um roteiro para a conversa inicial com um cliente qualificado.' },
      { description: 'O roteiro deve incluir: ouvir as dores do cliente, conectar com a causa-raiz, apresentar seu programa como a solução e discutir o investimento.' },
      { description: 'Pratique seu roteiro em voz alta até que soe natural e confiante.' }
    ],
    reflectionPrompt: 'Como ter um script pode te dar mais confiança para falar sobre o valor do seu trabalho e o investimento necessário?'
  },
  {
    week: 3,
    day: 19,
    title: 'Programa de Indicações',
    objective: 'Criar um sistema para incentivar e recompensar indicações de novos clientes.',
    tasks: [
      { description: 'Defina uma recompensa para clientes que indicarem um novo cliente (ex: desconto na próxima sessão, uma sessão extra no pacote).' },
      { description: 'Crie uma mensagem simples para seus clientes atuais explicando o programa de indicações.' },
      { description: 'Pense no momento ideal para convidar um cliente a participar do programa (ex: quando ele expressar grande satisfação com os resultados).' }
    ],
    reflectionPrompt: 'Como um programa de indicações ativo pode se tornar seu principal canal de captação de clientes ideais?'
  },
  {
    week: 3,
    day: 20,
    title: 'Análise de Custo Real',
    objective: 'Calcular o custo real de cada atendimento para estabelecer preços mínimos viáveis.',
    tasks: [
      { description: 'Liste TODOS os seus custos mensais (materiais, transporte, formação, impostos, marketing, etc.).' },
      { description: 'Divida o custo total pelo número médio de sessões que você faz por mês. Esse é o seu custo por sessão.' },
      { description: 'Seu preço final deve ser no mínimo 2 a 3 vezes maior que este custo para garantir lucro e sustentabilidade.' }
    ],
    reflectionPrompt: 'Seu preço atual cobre adequadamente seu custo real por atendimento e ainda gera o lucro que você deseja?'
  },
  {
    week: 3,
    day: 21,
    title: 'Consolidação da Valorização',
    objective: 'Revisar e alinhar todos os elementos de precificação e pacotes.',
    tasks: [
      { description: 'Crie sua nova tabela de preços final, incluindo os pacotes e a política de deslocamento.' },
      { description: 'Defina a data para começar a aplicar os novos valores para novos clientes.' },
      { description: 'Planeje como irá comunicar a nova estrutura para clientes atuais na próxima renovação.' }
    ],
    reflectionPrompt: 'Qual foi o maior desafio ou a maior mudança de mentalidade para você nesta semana de valorização?'
  },
  // SEMANA 4: OTIMIZAÇÃO
  {
    week: 4,
    day: 22,
    title: 'Agenda Otimizada por Zonas',
    objective: 'Reorganizar sua agenda para refletir suas Zonas Douradas.',
    tasks: [
      { description: 'Designe dias específicos da semana para cada Zona Dourada. Ex: "Terças e Quintas atendo na Zona Sul".' },
      { description: 'Comunique gradualmente seus clientes atuais sobre seus novos "dias de bairro", buscando agrupar os atendimentos.' },
      { description: 'Comece a oferecer horários para novos clientes apenas nos dias designados para a zona deles.' }
    ],
    reflectionPrompt: 'Imagine como será sua semana com a agenda otimizada. Quanto tempo e energia você economizará?'
  },
  {
    week: 4,
    day: 23,
    title: 'Sistema de Follow-up Pós-Venda',
    objective: 'Implementar um sistema de acompanhamento para garantir a satisfação e retenção.',
    tasks: [
      { description: 'Use a mensagem de follow-up pós-primeira sessão que você criou na Semana 2.' },
      { description: 'Crie um template de check-in rápido para enviar entre as sessões de um pacote.' },
      { description: 'Agende lembretes para você mesmo para enviar essas mensagens de acompanhamento.' }
    ],
    reflectionPrompt: 'Como um acompanhamento proativo pode melhorar os resultados do cliente e aumentar a probabilidade de ele renovar o pacote?'
  },
  {
    week: 4,
    day: 24,
    title: 'Solicitação de Depoimentos',
    objective: 'Coletar provas sociais para fortalecer sua autoridade e atrair novos clientes.',
    tasks: [
      { description: 'Identifique 3 clientes que tiveram ótimos resultados e estão muito satisfeitos.' },
      { description: 'Crie um template de mensagem gentil pedindo um depoimento, explicando como isso ajuda outras pessoas.' },
      { description: 'Envie a mensagem para esses clientes e salve os depoimentos recebidos para usar em seus materiais.' }
    ],
    reflectionPrompt: 'Qual é o impacto de ver um depoimento real na decisão de um novo cliente em potencial?'
  },
  {
    week: 4,
    day: 25,
    title: 'Planejamento de Produtos de Escala',
    objective: 'Começar a planejar ofertas que não dependam diretamente do seu tempo.',
    tasks: [
      { description: 'Faça um brainstorm de ideias de produtos ou serviços que você poderia criar uma vez e vender várias vezes.' },
      { description: 'Exemplos: um workshop online sobre um tema que você domina, um e-book com suas principais dicas, áudios de meditação guiada.' },
      { description: 'Escolha UMA ideia e descreva em um parágrafo o que seria e para quem se destinaria.' }
    ],
    reflectionPrompt: 'Como ter uma fonte de renda que não depende do seu tempo de atendimento poderia transformar sua segurança financeira e qualidade de vida?'
  },
  {
    week: 4,
    day: 26,
    title: 'Automação de Tarefas Administrativas',
    objective: 'Implementar automações para liberar mais tempo produtivo.',
    tasks: [
      { description: 'Revise o Dia 10. Você implementou as respostas automáticas e rápidas?' },
      { description: 'Explore uma ferramenta de agendamento online (como Calendly) que permite que clientes vejam sua disponibilidade e agendem sozinhos.' },
      { description: 'Crie um sistema simples para seu controle financeiro (planilha ou app) para não gastar muito tempo com isso.' }
    ],
    reflectionPrompt: 'Se você pudesse automatizar UMA tarefa administrativa que mais te consome tempo, qual seria? Como você usaria esse tempo extra?'
  },
  {
    week: 4,
    day: 27,
    title: 'Análise de Dados e Ajuste de Rota',
    objective: 'Analisar os dados dos últimos 26 dias e fazer ajustes estratégicos.',
    tasks: [
      { description: 'Revise os KPIs (indicadores chave) da sua prática: renda, número de clientes ideais, tempo de deslocamento.' },
      { description: 'Compare a situação atual com o diagnóstico do Dia 1. Quais foram as maiores melhorias?' },
      { description: 'Identifique o que está funcionando bem e o que precisa de ajuste no seu novo sistema.' }
    ],
    reflectionPrompt: 'Qual foi a mudança mais impactante que você implementou neste desafio? O que você aprendeu sobre si mesma como empreendedora?'
  },
  {
    week: 4,
    day: 28,
    title: 'Planejamento de 90 Dias',
    objective: 'Transformar os resultados de 30 dias em um plano de crescimento sustentável.',
    tasks: [
      { description: 'Defina 3 metas claras para os próximos 90 dias baseadas no que aprendeu (ex: "Aumentar em 20% a renda vinda de pacotes").' },
      { description: 'Para cada meta, liste 3 ações concretas que você irá tomar.' },
      { description: 'Agende na sua agenda um "Encontro Estratégico" mensal com você mesma para revisar essas metas.' }
    ],
    reflectionPrompt: 'Como você vai garantir que manterá o momentum e continuará aplicando os princípios do Terapeuta Estrategista após o fim do desafio?'
  },
   {
    week: 4,
    day: 29,
    title: 'Refinamento do Manual Pessoal',
    objective: 'Criar seu próprio manual de operações para a sua prática.',
    tasks: [
      { description: 'Compile todos os seus templates, scripts, políticas e processos em um único documento (Google Docs, Notion, etc.).' },
      { description: 'Este será seu "Manual da Terapeuta Estrategista", que você poderá consultar e refinar continuamente.' },
      { description: 'Inclua sua Declaração de Fundação da Semana 1 como a capa do seu manual.' }
    ],
    reflectionPrompt: 'Como ter seu próprio manual de operações pode te ajudar a ser mais consistente e profissional no dia a dia?'
  },
  {
    week: 4,
    day: 30,
    title: 'Celebração e Próximos Passos',
    objective: 'Celebrar a conclusão do desafio e solidificar seu novo posicionamento.',
    tasks: [
      { description: 'Escreva uma carta para si mesma, reconhecendo todo o trabalho e transformação dos últimos 30 dias.' },
      { description: 'Planeje uma forma de comemorar suas conquistas. Você merece!' },
      { description: 'Compartilhe sua maior vitória ou aprendizado com uma colega ou na comunidade de terapeutas.' }
    ],
    reflectionPrompt: 'Parabéns, Terapeuta Estrategista! Olhando para trás, qual foi a maior mudança que ocorreu em você, não apenas na sua prática, durante este desafio?'
  },
];
