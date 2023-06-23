export default function Team() {

    const teamIfro = [
        {
            name:"Ana Beatriz de Freitas",
            description:"Programadora",
            src:"/photos-team/ana.png",
        },
        {
            name:"Marcello Brasileiro",
            description:"Programador",
            src:"/photos-team/marcello.png",
        },
    ];

    return (
        <div className={"grid grid-cols-2 gap-16 mt-24"}>
            {
                teamIfro.map(
                    (e:object) => {
                    return <div className={"flex flex-col p-2"}>
                        <img alt={'Foto de '+ e.name} src={e.src} className="rounded-full w-64 h-auto" />
                        <div className="font-bold text-center text-white mt-6">{e.name}</div>
                        <div className="font-bold text-center text-white">{e.description}</div>
                    </div>
                })
            }
        </div>
    )
}
