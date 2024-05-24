/* eslint-disable react/prop-types */
export function Seo ({
  title = 'React App',
  description = 'Repaso de las nuevas actualizaciones'
}) {
  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
    </>
  )
}

/*
  1
  Metadata dentro del componente, solo acepta cadenas de texto

  2
  Tener cuidaddo que no se eliminan los titulos ni la descripción. Se van añadiendo a los que ya existen!
  Siempre hacer un que se setee en un solo lugar, para no tener problemas

  3
  Seo.propTypes = {...} No funciona más, se ignora (se agrego react/prop-types en el eslint para no tener el error)
  A partir de ahora solo se puede hacer con TypeScript o PropTypes

  4
  Seo.defaultProps = {...} No funciona más, se ignora (Por cuetiones de rendimiento). Se tiene que hacer como JS normal

*/
