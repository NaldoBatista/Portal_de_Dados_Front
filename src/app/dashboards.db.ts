import { Dashboard } from "./shared/dashboard.model";

export const DB: Dashboard[] = [
    {
        title: "Atendimento ao Eleitor",
        description: "Esse painel apresenta indicadores de atendimento ao eleitor.",
        imagePath: "./assets/images/eleitoral/painel_atendimento_eleitor.png",
        link:"https://app.powerbi.com/reportEmbed?reportId=da2b63e5-b8a7-4789-8b25-0e365ddb4032&autoAuth=true&ctid=cee3974e-8f83-4c40-bf43-691be81654b7",
        domain: "eleitoral"
    },
    {
        title: "Gerencimanto de Tarefas",
        description: "Esse painel apresenta indicadores do gerenciamento de tarefas.",
        imagePath: "./assets/images/judiciario/painel_tarefas.png",
        link:"https://app.powerbi.com/reportEmbed?reportId=7f099b0e-d545-4b6d-bad7-a6f909f4941a&autoAuth=true&ctid=cee3974e-8f83-4c40-bf43-691be81654b7",
        domain: "judiciario" 
    },
    {
        title: "Gerenciamento de Processos",
        description: "Esse painel apresenta indicadores de processos pendentes e com mandado.",
        imagePath: "./assets/images/judiciario/painel_gerenciamento_processos.png",
        link: "https://app.powerbi.com/reportEmbed?reportId=3ad3a3c1-2468-4f3f-a582-a41cf69c7712&autoAuth=true&ctid=cee3974e-8f83-4c40-bf43-691be81654b7",
        domain: "judiciario",
    }
]