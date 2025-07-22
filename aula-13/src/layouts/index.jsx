import Header from "../components/Header/Header.jsx"
import Main from "../components/Main/Main.jsx"
import Footer from "../components/Footer/Footer.jsx"

function Layout({ children }) {
    return (
        <section>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </section>
    )
}


export default Layout