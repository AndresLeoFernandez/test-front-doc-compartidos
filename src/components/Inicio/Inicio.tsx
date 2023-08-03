function Inicio() {
  return (
    <div>
      <h1>Inicio</h1>
      <div className="p-5">
        <p><b>Primer bloque:</b> Funcionalidad que le permita interactuar al usuario con el sitio permitiendo realizar búsquedas de entre los proyectos publicados. Para tal fin se dispondrá un input donde se pueda ingresar el texto a buscar y un botón para que efectúe la acción correspondiente</p>
      </div>
      <div className="p-5">
        <p><b>Segundo bloque:</b> Funcionalidad que le permita interactuar al usuario con el sitio permitiendo ver los distintos Proyectos publicados según la Categoría por la cual hayan sido  registrados al momento de publicarse en el sitio. Para tal fin se dispondrá de un menú secundario que muestre una x cantidad de categorías de entre las cuales podrá seleccionar el usuario. De forma predeterminada  debajo del menú se ubicaran dispuestos en dos filas de 3 elementos cada una los últimos 6 proyectos publicados.</p>
      </div>
      <div className="p-5">
        <p><b>Tercer bloque:</b> Funcionalidad que brinda al lector información estadística sobre los Proyectos Publicados respecto de cantidad, categorías, cantidad de visitas, etc.</p>
      </div> 
      <div className="p-5">
        <p><b>Cuarto bloque:</b> Funcionalidad que le permita conocer al usuario respecto de los escritores de los distintos Proyectos publicados. Para tal fin se dispondrá una fila con 3 elementos con forma de tarjetas que contengan la información de los 3 usuarios con más cantidad de Proyectos publicados al momento.</p>
      </div>
      <div className="p-5">
        <p>
        <b>Quinto bloque:</b> Funcionalidad que brinda al lector información estadística sobre los Escritores registrados en el sitio cubriendo valores respecto de cantidad, cantidad de intervenciones, etc.</p>
      </div>
    </div>
  )
}

export default Inicio
