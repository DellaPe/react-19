export function FormMethods () {
  return (
    <form className='mb-16'>
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css' />
      <input type='text' placeholder='Nombre' />
      <input type='email' placeholder='Email' />
      <button type='submit'>Enviar</button>
    </form>
  )
}

/*
  1
  A partir de ahora se puede usar el atributo style en los componentes
  Esto genera que no se trabe la cargar de la pagina esperando a que se cargue el CSS
  Asi una carga asincrona de los estilos y esto genera un parpadeo en los estilos

  2
  Metodos para cargar CSS de forma asincrona: (Estos metodos se quedan en la cache, solo lo carga una vez)
  preload: se llama en el componente padre, para hacer una pre-carga antes de que se renderize el componente hijo que lo necesita
  preconnect: es un preload pero con menos prioridad y que puede ser o no necesario
  preinit: para cargar lo antes posible lo que se necesta
  prefetchDMS: para crear la conexión con el servidor y que este sepa que se va a necesitar para cuando se use

  3
  Esto no solo es para CSS, se puede usar para cargar cualquier recurso de forma asincrona. Imágenes, fuentes, etc
*/
