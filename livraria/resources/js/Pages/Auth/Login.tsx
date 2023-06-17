import { useEffect, FormEventHandler } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="justify-center flex">
                <Link href="/">
                    <img src="/LogoSistema.png" className={"w-32 lg:w-64 flex flex-col"} alt=""/>
                </Link>
            </div>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Senha" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm text-white">Lembre de mim</span>
                    </label>
                </div>

                <div className="flex items-center grid grid-cols-1 justify-center mt-4 ">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-white mb-4 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Esqueceu sua senha?
                        </Link>
                    )}

                    <Link
                        href={route('register')}
                        className="underline text-sm text-white hover:text-gray-900 rounded-md"
                    >
                        Ainda não é cliente? Registre-se agora!
                    </Link>

                </div>

                <div className="justify-center flex mt-4 ">
                    <PrimaryButton className="" disabled={processing}>
                        Entrar
                    </PrimaryButton>
                </div>


            </form>
        </GuestLayout>
    );
}
