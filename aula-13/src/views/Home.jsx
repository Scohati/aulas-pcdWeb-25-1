import Button from "../components/ui/Button.jsx"
import Link from "../components/ui/Link.jsx"

function Home() {

    const exemplo = () => {
        console.log('Deu certo!')
    }
    
    return (
        <section>
            <h2>Aqui vai o conteúdo</h2>
            <Button handleClick={() => exemplo()}>Saiba Mais</Button>
            <Link label={'Facebook'} hrefRecebido={'https://www.facebook.com'} ehBlank={true}/>
        </section>
    )
}


export default Home
