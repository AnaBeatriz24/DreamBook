export default function Team() {

    const teamIfro = [
        {
            name:"Ana Beatriz de Freitas",
            description:"Programadora",
            src:"/photos-team/ana.png",
        },
        {
            name:"Denise Dandara Gomes",
            description:"Programadora",
            src:"/photos-team/denise.png",
        },
        {
            name:"Marcos Reis Dutra",
            description:"Programador",
            src:"/photos-team/marcos.png",
        },
        {
            name:"Gustavo Borges",
            description:"Programador",
            src:"/photos-team/gustavo.png",

        },
    ];

    return (
        <div className={"grid grid-cols-2 gap-16"}>
            {
                teamIfro.map(
                    (e:object) => {
                    return <div className={"flex flex-col"}>
                        <img alt={'Foto de '+ e.name} src={e.src} className="rounded-full w-64" />
                        <div className="font-bold text-center text-white">{e.name}</div>
                        <div className="font-bold text-center text-white">{e.description}</div>
                    </div>
                })
            }
        </div>
    )
}
