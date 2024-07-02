import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary">
      <center>
        <h1 className="relative text-xl mb-5 text-lightText">
          Gerenciador de Atividades
        </h1>
        <div className="space-y-4 justify-around">
          <Link href="/category">
            <button className="btn bg-lightPrimary hover:bg-lightPrimary_700 text-darkPrimary_700 m-5">Gerenciar Categorias</button>
          </Link>
          <Link href="/activity">
            <button className="btn bg-lightPrimary hover:bg-lightPrimary_700 text-darkPrimary_700 m-5">Gerenciar Atividades</button>
          </Link>
          <Link href="/user">
            <button className="btn bg-lightPrimary hover:bg-lightPrimary_700 text-darkPrimary_700 m-5 mb-20">Gerenciar Usuários</button>
          </Link>
          <h2>Feito por Nathan RdS☕</h2>
        </div>
      </center>
    </main>
  );
}
