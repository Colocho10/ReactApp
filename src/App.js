import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>informática en la nube</h1>
      </header>

      
      <body>
      <h1>Diferentes modelos de despliegue en la nube</h1>
       <div class="contenido">

    <p class="parrafo">Una empresa debe optar por el modelo de implementación apropiado para aprovechar el 
    cloud computing reduciendo los gastos de capital, controlando los gastos relacionados con la empresa y 
    mejorando la eficiencia general del proceso.</p>

    <p>Un modelo de implementación en la nube es una “configuración” de ciertos parámetros del entorno de 
    la nube, como el tamaño de almacenamiento, la accesibilidad y el propietario. La elección del más adecuado 
    depende de los requisitos de informática, redes, almacenamiento, expectativas de TCO y objetivos 
    comerciales, así como de los recursos disponibles.
    </p>
    </div>

    <div class="contenido"><p class="parrafo">Existen cuatro modelos principales de implementación en la nube que difieren 
    significativamente:</p>
    </div>

        <div class="contenido">
          <p class="parrafo">
          •	Nube pública
          •	Nube privada
          •	Nube híbrida
          •	Nube comunitaria
          </p>
        </div>
        
        <h2>Nube pública</h2>
    <div class="contenido"><p class="parrafo">Es una nube administrada por terceras personas que no 
    son parte de la organización. Los datos de cualquier cliente se mezclan entre los servidores de 
    la nube. Las aplicaciones, archivos almacenados y más recursos pueden ser usados por los clientes 
    a través del proveedor de servicios, dueño de toda la infraestructura almacenada en los distintos
    dispositivos. Su acceso por parte del cliente es casi siempre a través de la misma red: Internet.</p>
    </div>

    <p class="parrafo">Las nubes públicas están disponibles para todo el mundo y los datos se crean y 
    almacenan en servidores de terceros. Como la infraestructura del servidor pertenece a los proveedores 
    de servicios que administran y gestionan todos los recursos del pool, ya no existe la necesidad de que 
    las empresas usuarias compren y mantengan su propio hardware. Las compañías proveedoras ofrecen recursos 
    como servicio de forma gratuita o de pago por uso a través de la conexión a Internet y los usuarios pueden
     escalarlos cuando sea necesario capacidad de procesamiento, memoria, capacidad de almacenamiento, software 
     de sistema, etc.</p>

     <h2>Las ventajas de una nube pública son las siguientes:</h2>
      <p>•Configuración y uso poco sofisticado
      •	Facilidad acceso a los datos
      •	Flexibilidad para agregar y reducir capacidad
      •	Rentabilidad
      •	Tiempo de operación continua
      •	Mantenimiento 24/7
      •	Escalabilidad
      •	No hay necesidad de usar un software propio.</p>

      <h2>Nube privada</h2>
      <p>Están gestionadas para una empresa en concreto, un único cliente que especifica qué aplicaciones se 
        ejecutan y dónde. Suelen ser la principal opción de las grandes compañías, que demandan más protección 
        de datos y servicios exclusivos. La compañía es la dueña de la infraestructura, y ella decide quién t
        iene derecho a usar la nube.</p>

        <p>Hay pocas diferencias (o ninguna) entre las nubes públicas y las privadas desde el punto de vista técnico,
           ya que sus diseños son muy similares. Sin embargo, a diferencia del modelo público, en la nube privada 
           solo hay una empresa, por lo que también se denomina interna o corporativa. Debido a que estas 
           arquitecturas de centros de datos residen dentro del firewall, proporcionan mayor seguridad. 
           Aunque la organización ejecuta sus cargas de trabajo como un modelo privado, puede haber un tercero que 
           administre, y el servidor puede alojarse tanto externamente como en las instalaciones de la empresa 
           usuaria.</p>

        <p>En cuanto al acceso a la información, solo un conjunto de personas claramente definido tiene permiso para 
          acceder a la información guardada en una nube privada, lo cual impide que cualquier persona pueda hacer uso 
          de ella.</p>

          <p>Las ventajas de un modelo privado son las siguientes:</p>
<p>•	Desarrollo individual
•	Los componentes de almacenamiento y red son personalizables
•	Alto control sobre la información corporativa
•	Alta seguridad, privacidad y confiabilidad</p>

<p>Estos son los inconvenientes de un modelo privado:</p>
<p>La desventaja principal es su coste, ya que implica gastos considerables en hardware, software 
  y capacitación del personal. Es por ello que las pequeñas y medianas empresas no suelen optar por 
  este modelo. La nube privada es especialmente adecuada para empresas que quieran proteger sus operaciones 
  más críticas o para aquellas con requisitos cambiantes.</p>

  <p>Nube comunitaria</p>
<p>Combina los dos tipos de nubes citados anteriormente. El cliente tiene en propiedad parte de la nube y comparte 
  el resto. Permite la escalabilidad de recursos informáticos de la nube pública para regular los flujos de trabajo, 
  sin que otros centros de datos de terceros puedan acceder a datos privados de estos flujos. La parte de la nube 
  pública se emplea para tareas menores, al contrario que las aplicaciones y datos sensibles, que se guardan a nivel 
  local. La nube híbrida ofrece las ventajas del Cloud Computing (flexibilidad, escalabilidad y rentabilidad) 
  sin que los datos corran el riesgo de que sean vistos por terceros.
  Un modelo de despliegue de nube comunitaria se asemeja mucho a uno privado; la única diferencia es el conjunto
   de usuarios. Mientras que un modelo privado implica que solo una empresa posee el servidor, en el caso de una 
   comunidad, varias organizaciones con entornos similares comparten la infraestructura y los recursos relacionados.
  Como las organizaciones tienen requisitos de seguridad, privacidad y rendimiento uniformes, esta arquitectura de 
  centro de datos de múltiples inquilinos ayuda a las empresas a lograr sus objetivos específicos. Es por ello que 
  un modelo comunitario es particularmente adecuado para organizaciones que trabajan en proyectos conjuntos. En ese 
  caso, una nube centralizada facilita el desarrollo, la gestión y la implementación del proyecto. Además, los 
  costes se comparten entre todos los usuarios de la nube.</p> 

  <p>Las ventajas de un modelo comunitario son las siguientes:</p>
<p>•	Reducción de coste
•	Mejora de la seguridad, la privacidad y la fiabilidad
•	Facilidad de intercambio de datos y colaboración
Estos son los inconvenientes de este modelo:
•	Mayor coste que el de un modelo público
•	Compartir el almacenamiento fijo y la capacidad de ancho de banda
•	El modelo no está muy extendido hasta el momento</p>

<p>Nube híbrida</p>
<p>Este tipo de nube está creada por distintas organizaciones que se asocian para objetivos comunes 
  (por ejemplo, motivos de seguridad), y está administrada por dichas organizaciones o terceros. Como 
  suele ser el caso con cualquier fenómeno híbrido, una nube híbrida abarca las mejores características 
  de los modelos de implementación de computación en la nube mencionados anteriormente: públicos, 
  privados y comunitarios. Permite a las empresas mezclar y combinar las facetas de los tres modelos 
  que mejor se adapten a sus necesidades.
</p>

<p>Los beneficios de un modelo híbrido son los siguientes:</p>
<p>•	Mejora de la seguridad y la privacidad
•	Escalabilidad y flexibilidad mejoradas
•	Precio razonable</p>

<h2>Modelos de servicio de la computación en la nube:</h2>
<p>En la actualidad, las soluciones en la nube pueden desplegarse en tres modelos de servicio diferentes, conocidos 
 Software como Servicio (SaaS), Plataforma como Servicio (PaaS), e Infraestructura como Servicio (IaaS). Cada uno 
 de estos modelos se ofrece con el fin de resolver requerimientos diferentes basados en las necesidades específicas 
 de cada empresa.</p>

 <h3>SaaS:</h3>
<p>llamado en español Software como Servicio de computación en la nube, permite más fácilmente al usuario final el 
uso de las aplicaciones a través del acceso por una interfaz de navegador o programa. Es un modelo bastante popular. 
Cuenta con aplicaciones que se ofrecen a través de la web, a las cuales se accede a por medio de un navegador y no 
son administradas por la compañía sino por el proveedor de la aplicación. Esto libera a la empresa de la presión que 
supone realizar el mantenimiento del software, administrar la infraestructura, garantizar la seguridad de la red y 
la disponibilidad de los datos, entre otros aspectos relacionados con las aplicaciones en servidores propios.</p>

<h3>PaaS:</h3>
<p>Llamado en español Plataforma como Servicio, se beneficia del servicio de Cloud Computing mientras es libre de 
  desarrollar aplicaciones personalizadas del software. Se accede a este servicio igual que con el SaaS. Es una 
  capa intermedia entre la Infraestructura como Servicio (IaaS) y el Software como Servicio (SaaS). PaaS ofrece 
  acceso a ambientes en la nube en los cuales los usuarios pueden construir y entregar aplicaciones sin necesidad 
  de instalar y mantener ambientes de desarrollo complejos que normalmente son muy costosos.</p>

<h3>IaaS:</h3>
<p>Llamado en español Infraestructura como Servicio, consigue que las organizaciones tengan la capacidad de 
  aprovechar recursos del servidor mientras que el resto de la administración de la plataforma y software pertenece 
  a la empresa. La Infraestructura como Servicio (IaaS) ofrece una forma estandarizada de adquirir capacidad 
  computacional por demanda a través de la web durante un periodo de tiempo definido. Estos recursos incluyen 
  almacenamiento, redes, procesamiento y hasta servidores completos. Normalmente son cobrados bajo una modalidad 
  de pago por uso; por ejemplo, de acuerdo con la cantidad de almacenamiento o el nivel de potencia de 
  procesamiento requerido por la compañía. En este modelo de servicio, los clientes no administran la 
  infraestructura, sino que es responsabilidad del proveedor garantizar la cantidad de recursos y el tiempo 
  de disponibilidad contratado.</p>

  <h3>Funcionamiento del cloud computing.</h3>
<p>Hay que distinguir el Cloud Computing en dos partes: el frontend y el backend. Para que el Cloud Computing 
funcione, ambas partes deben estar conectadas a través de la Red. Vamos a explicar cada parte por separado:</p>

<p></p>Frontend: es donde se ubica el ordenador o red de ordenadores del usuario y el programa que utiliza para 
acceder a la nube. Si se usa un correo electrónico para esto, el programa es simplemente un navegador web como 
Mozilla o Google Chrome. En otras ocasiones, se necesitará una aplicación específica para el acceso.

<p>Bakend: el lugar donde se encuentran los ordenadores, sistemas de almacenamiento de datos y servidores que 
forman la nube. Cada aplicación suele disponer de un servidor propio. Para controlar todo el proceso del uso de la 
nube por parte de los usuarios, hay un servidor central que vigila tanto el tráfico como las demandas de cada 
cliente. Dicho servidor sigue unos protocolos (reglas) y emplea un software específico, el middleware. Este 
software permite que los ordenadores que están en la Red puedan establecer comunicación entre ellos. Los sistemas 
de Cloud Computing, para dar garantía de accesibilidad a los datos siempre que se necesite, utilizan el doble de 
dispositivos que se precisan para guardarlos y hacen copias de seguridad en éstos. De esta forma, si fallara un 
ordenador, se podrán usar los datos de la copia.</p>

<h2>7 proveedores de Cloud Computing.</h2>
<p>Microsoft Azure: Se trata de la plataforma de Cloud Computing de Micrsoft y una de sus principales 
características es que ofrece los tres tipos de servicios principales del Cloud Computing (IaaS, PaaS y SaaS), 
lo que lo hace un proveedor de Cloud Computing súper completo.</p>

<p>AWS: Amazon Wes Services es uno de los proveedores de Cloud Computing pioneros del mercado. Nos encanta su
 interfaz porque es increíblemente fácil de usar y se puede contratar de forma sencilla por un precio súper 
 competitivo. ¡Perfecto para pymes! Tiene una gran cantidad de servicios y herramientas disponibles y, aunque 
 quizás su oferta de servicios SaaS es algo más limitada que la de otros proveedores de Cloud Computing, sus 
 servicios de IaaS y PaaS son de verdadera calidad.</p>

<p>Google Cloud: Se trata de un proveedor de nube pública, aunque también cuenta con entornos híbridos y 
multicloud, propiedad de Google, que ha crecido exponencialmente durante los últimos años y muchísimas grandes 
compañías lo utiliza. Llaman la atención sus más de 100 productos en servicios PaaS y SaaS. Este proveedor puede 
darte muchísima seguridad, piensa en la gran experiencia que tiene ¡desde sus inicios ha ofrecido servicios en la 
nube</p>

<p>Alibaba Cloud: Se trata de un proveedor de nube privada. Su presencia en Europa es aún mínima, pero créenos, 
  es cuestión de tiempo que acabe ganando terreno entre sus competidores. </p>

<p>IBM: es uno de los proveedores de Cloud Computing que más ha crecido en los últimos años. Ofrece los tres 
  tipos de servicios: IaaS, PaaS y SaaS, tanto en nube pública como en nube híbrida y esto le da una clara ventaja 
  ante otros competidores.</p>

<p>Salesforce: es un proveedor de Cloud Computing que tiene una oferta algo más limitada, puesto que solo ofrece 
  servicio de SaaS. Sin embargo, destaca por su catálogo de soluciones y productos CRM. Se centra sobre todo en la innovación digital.</p>

<p>Oracle: es un proveedor de Cloud Computing asociado con Microsoft Azure. Ofrece a sus clientes 
  infraestructura tanto de software como de hardware. Destacan sus servicios de bases de datos, almacenamiento, 
  desarrollo de aplicaciones. Y la principal ventaja es que pagas solo por lo que consumes.</p>


      </body>
    </div>
  );
}

export default App;
