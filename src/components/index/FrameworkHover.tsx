import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui/hover-card";
import * as React from "react"

const frameworks = {
    react: {
        url: "https://react.dev/",
        triggerText: "React",
        contentText: "React er et populært værktøj, der bruges af webudviklere til at skabe interaktive og brugervenlige hjemmesider. Det gør det muligt for udviklere at bygge hjemmesider ved at samle genbrugelige komponenter, som hver især har sin egen logik og design. På denne måde kan komplekse webapplikationer udvikles mere effektivt og vedligeholdes lettere."
    },
    astro: {
        url: "https://astro.build",
        triggerText: "Astro",
        contentText: "Astro er et moderne værktøj til webudvikling, der gør det muligt for udviklere at bygge hurtigere websites med mindre kode. Det bruger en blanding af statisk sidegenerering og server-side rendering for at levere sider hurtigt, samtidig med at det giver en god brugeroplevelse. Astro gør det lettere at integrere forskellige frontend-rammeværker, som React eller Vue, i samme projekt, hvilket giver større fleksibilitet i design og udvikling."
    },
    svelte: {
        url: "https://svelte.dev/",
        triggerText: "Svelte",
        contentText: "Svelte er et moderne værktøj til at bygge brugervenlige webapplikationer, hvilket gør det muligt for udviklere at skabe hurtige og interaktive sider på internettet. Det arbejder ved at fjerne unødvendig kode under byggeprocessen, hvilket resulterer i lettere og hurtigere programmer. Dette tilgang sikrer en mere effektiv udvikling af webapplikationer."
    }
}

export default function FrameworkHover(props) {
    return (
        <HoverCard>
            <HoverCardTrigger>
                <a href={frameworks[props.framework].url} target="_blank" className="underline hover:underline-offset-4 hover:text-slate-400 transition" >{frameworks[props.framework].triggerText}</a>
            </HoverCardTrigger>
            <HoverCardContent className="w-[600px]">
                {frameworks[props.framework].contentText}
            </HoverCardContent>
        </HoverCard>
    )
}