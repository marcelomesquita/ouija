import Container from "components/layout/Container";

export default function Credits() {
  return (
    <Container>
      <div className='container py-3 my-auto'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8'>
            <h1 className='display-2 text-primary text-center'>CRÉDITOS</h1>
            <p className='ms-2 text-center'>Desenvolvido por <a href='https://www.marcelomesquita.com/' target='_blank' rel='noreferrer' className='text-decoration-none'>Marcelo Mesquita</a>.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
