import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home() {

    return (
        <section className="home-container">
            <Header numero={10}/>
            <Main>
                <h1>Main</h1>
            </Main>
            <Footer />
        </section>
    )
}

export default Home
