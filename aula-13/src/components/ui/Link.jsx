function Link({hrefRecebido, label, ehBlank}) {
    return (
        <a href={hrefRecebido} target={ehBlank && '_blank'} aria-label={ehBlank && 'Abrir numa nova guia'}>{label}</a>
    )
}


export default Link