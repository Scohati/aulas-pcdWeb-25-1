function Home() {

    const inputs = [
        {
            label: 'Nome',
            type: 'text',
            placeholder: 'Nome',
            id: 'nomeInput',
            name: 'nome',
            value: ''
        },
        {
            label: 'Apelido',
            type: 'text',
            placeholder: 'Apelido',
            id: 'apelidoInput',
            name: 'apelido',
            value: ''
        },
        {
            label: 'E-mail',
            type: 'email',
            placeholder: 'E-mail',
            id: 'emailInput',
            name: 'email',
            value: ''
        },
        {
            label: 'Senha',
            type: 'password',
            placeholder: 'Senha',
            id: 'senhaInput',
            name: 'senha',
            value: ''
        },
    ]

    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(inputs)
    }
    
    return (
        <section>
            <h3>Formulário</h3>

            <form id="meuForm" onSubmit={handleSubmit}>
                {
                    inputs.map((input, index) => (
                        <div key={index}>
                            <label htmlFor={input.id}>{input.label}</label>
                            <input
                                onChange={event => input.value = event.target.value}
                                type={input.type}
                                placeholder={input.placeholder}
                                id={input.id}
                                name={input.name}
                            />
                        </div>
                    ))
                }

                <button type="reset">Limpar</button>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}


export default Home