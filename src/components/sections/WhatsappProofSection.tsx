import { ScrollReveal } from "@/components/ScrollReveal";

type Msg = { from: "aluna" | "marina"; text: string; time: string };
type Conv = { name: string; initial: string; messages: Msg[] };

const CONVERSATIONS: Conv[] = [
  {
    name: "Beatriz",
    initial: "B",
    messages: [
      { from: "aluna", text: "marina vc nao vai acreditar", time: "14:08" },
      { from: "aluna", text: "o ricardo me chamou agora… 4 meses sumido 😶", time: "14:08" },
      { from: "marina", text: "eu te falei rs. e aí, o que ele disse?", time: "14:09" },
      { from: "aluna", text: "que sentiu mt minha falta, ja chamou pra jantar sabado", time: "14:11" },
      { from: "marina", text: "vai sem ansiedade. e responde devagar 😉", time: "14:12" },
    ],
  },
  {
    name: "Camila",
    initial: "C",
    messages: [
      { from: "aluna", text: "to no dia 14 e ja tem 2 caras me chamando kkkk", time: "09:42" },
      { from: "aluna", text: "um é medico, o outro arquiteto", time: "09:42" },
      { from: "aluna", text: "isso nunca tinha acontecido cmg", time: "09:43" },
      { from: "marina", text: "viu? agora vc escolhe, nao corre atras ✨", time: "09:45" },
      { from: "aluna", text: "obrigada de coracao mesmo ❤️", time: "09:46" },
    ],
  },
  {
    name: "Paula",
    initial: "P",
    messages: [
      { from: "aluna", text: "lembra q eu te disse q achava q ngm ia me querer com 47?", time: "21:03" },
      { from: "aluna", text: "ele me pediu em casamento hoje 💍", time: "21:03" },
      { from: "aluna", text: "ainda to tremendo", time: "21:04" },
      { from: "marina", text: "paula que coisa linda 🥹 idade nunca foi o problema", time: "21:08" },
      { from: "aluna", text: "obrigada por nao deixar eu desistir", time: "21:09" },
    ],
  },
  {
    name: "Juliana",
    initial: "J",
    messages: [
      { from: "aluna", text: "marina ele apareceu aqui no trampo agora", time: "11:20" },
      { from: "aluna", text: "com flores 🌹 eu fiquei sem reacao", time: "11:21" },
      { from: "aluna", text: "disse q tava tomando coragem ha semanas", time: "11:21" },
      { from: "marina", text: "respira. escuta antes de responder, ok?", time: "11:23" },
      { from: "aluna", text: "to tremendo mas e diferente dessa vez", time: "11:24" },
    ],
  },
  {
    name: "Amanda",
    initial: "A",
    messages: [
      { from: "aluna", text: "marina o ex me desbloqueou agora 😱", time: "07:55" },
      { from: "aluna", text: "tinha me bloqueado em tudo, lembra?", time: "07:55" },
      { from: "aluna", text: "mandou um audio pedindo desculpa", time: "07:56" },
      { from: "marina", text: "nao responde correndo. deixa ele esperar um pouco", time: "08:01" },
      { from: "aluna", text: "to seguindo direitinho, prometo kkk", time: "08:02" },
    ],
  },
  {
    name: "Larissa",
    initial: "L",
    messages: [
      { from: "aluna", text: "primeira vez na vida q alguem me trata como prioridade", time: "22:41" },
      { from: "aluna", text: "ele chegou com jantar pronto hj 🥹 sem motivo", time: "22:42" },
      { from: "marina", text: "esse é o tipo de homem que vc merece, sempre mereceu", time: "22:45" },
      { from: "aluna", text: "nunca mais aceito menos que isso", time: "22:46" },
    ],
  },
];

export const WhatsappProofSection = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-section-warm">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="font-cta text-primary uppercase text-xs tracking-widest">💬 Conversas reais de alunas</span>
            <h2 className="font-heading text-2xl md:text-5xl font-bold mt-3 text-foreground">
              As mensagens que chegam todos os dias <span className="text-gradient-gold">no WhatsApp da Marina</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm md:text-base">
              Prints reais (com identidades preservadas) de alunas que aplicaram o Método Nefertiti e tiveram suas vidas transformadas em poucas semanas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CONVERSATIONS.map((conv, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="bg-[#0b141a] rounded-2xl shadow-metallic overflow-hidden border border-primary/20">
                {/* Header */}
                <div className="bg-[#202c33] flex items-center gap-3 px-4 py-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-metallic flex items-center justify-center font-bold text-white">
                    {conv.initial}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{conv.name}</p>
                    <p className="text-emerald-400 text-xs">online</p>
                  </div>
                </div>
                {/* Messages */}
                <div className="p-3 space-y-2 min-h-[280px] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><circle cx=%2220%22 cy=%2220%22 r=%221%22 fill=%22%23ffffff08%22/></svg>')]">
                  {conv.messages.map((m, j) => (
                    <div key={j} className={`flex ${m.from === "marina" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${m.from === "marina" ? "bg-[#005c4b] text-white" : "bg-[#202c33] text-white"}`}>
                        <p className="whitespace-pre-wrap leading-snug">{m.text}</p>
                        <p className="text-[10px] text-white/50 text-right mt-1">{m.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
          * Prints baseados em depoimentos reais. Nomes e fotos preservados por questões de privacidade.
        </p>
      </div>
    </section>
  );
};
