import {Head, Link, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SecondaryButton from "@/Components/SecondaryButton";
import WelcomeNavBar from "@/Components/WelcomeNavBar";
import ButtonHome from "@/Components/ButtonHome";
import Books from "@/Components/Books";
import Team from "@/Components/Team";
import ContactComponent from "@/Components/ContactComponent";

export default function Contact() {
    const routes:object[] = [
        {
            name: "Home",
            route: "book.search"
        },
        {
            name: "Entre em contato",
            route: "contact.show"
        },
        {
            name: "Meu Histórico",
            route: "sales.history"
        },
    ]

    const { setData, data, post, processing} = useForm({
        name: '',
        email: '',
        assunto: '',
        message: '',
    });
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        post(route('contact.post'));
    };

    return(
        <>
            <WelcomeNavBar routes={routes}>
                <Head title="Welcome" />
                <div className={"flex flex-col items-center mt-6 pb-6 space-y-16"}>
                    <div className="bg-teal-950 w-[90vw] lg:w-3/4 lg:h-[80vh] rounded-lg flex flex-col items-center space-y-6">
                    <div className="flex flex-col m-auto space-y-2 items-center bg-teal-950 h-screen">
                        <img src="/LogoSistema.png" className={"w-32 lg:w-64"} alt=""/>

                        <form onSubmit={submit} method={"post"}>
                            <div className="flex flex-col mx-auto">
                                <div className="flex gap-4 justify-center">
                                    <div className="mt-4 w-full lg:w-[60vw]">
                                        <InputLabel className={"text-white"} forInput="name" value="Nome" />

                                        <TextInput
                                            id="name"
                                            name="name"
                                            type={"text"}
                                            className="mt-1 w-full"
                                            autoComplete="name"
                                            handleChange={onHandleChange}
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col  items-center">
                                    <div className="mt-4 w-full">
                                        <InputLabel className={"text-white"} forInput="email" value="E-mail" />

                                        <TextInput
                                            id="email"
                                            name="email"
                                            type={"text"}
                                            className="mt-1 w-full"
                                            autoComplete="email"
                                            handleChange={onHandleChange}
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col  items-center">
                                    <div className="mt-4 w-full">
                                        <InputLabel className={"text-white"} forInput="assunto" value="Assunto" />

                                        <TextInput
                                            id="assunto"
                                            name="assunto"
                                            type={"text"}
                                            value={data.assunto}
                                            className="mt-1 w-full"
                                            autoComplete="assunto"
                                            handleChange={onHandleChange}
                                            required={true}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center mb-10">
                                    <div className="mt-4 w-full align-text-top whitespace-normal p-1 rows=5">
                                        <InputLabel className={"text-white"} forInput="text" value="Digite a sua mensagem:" />
                                        <textarea id="message" rows="6" name={"message"}
                                                  className="block p-2.5 w-full rounded-lg border border-gray-300 focus:border-amber-900 focus:ring-amber-900 rounded-md shadow-sm"
                                                  onChange={onHandleChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="flex gap-4 justify-around mb-20 flex ">
                                    <SecondaryButton className="w-full justify-center" processing={processing} type={'submit'}>
                                        Enviar
                                    </SecondaryButton>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
                </div>
            </WelcomeNavBar>

        </>
    );
}

