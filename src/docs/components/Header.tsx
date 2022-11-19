

type Props = {
    title?: string;         // "?" faz ser opcional
}

export const Header = ({ title }: Props) => {
    return (
        <header>
                <h1>
                    Título da página
                </h1>
        </header>
    );
}