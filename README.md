E-coomers El Arca De Mendel

---------------------------------------------------------------

**este proyecto (en desarrollo) tiene solo una rama

Objetivo: 

Proyecto: E-coomers venta de semillas: Cactus, Suculentas, Exóticas. el proyecto Busca vender semillas de diferentes partes del Mundo a coleccionistas o Personas que quieran tener sus propias especies con una genética de calidad.

tecnologias: 

Javascript
Html5
Css3
GitHub
React js => esta App fue creada con => create-react-App

Estado del Proyecto:

CartWidge => Componente para mostrar en la barra de navegacion la cantidad seleccionada, para su futura compra en la pagina 

ItemCount => Componente que permite agregar(+) y disminuir(-) productos al carrito de compras, ademas de mensajes de alert con productos y cantidad seleccionada. 

ItemDetailContainer => muestra los detalles del item selecionado "ItemDetail" en donde ingresamos la cantidad y que finalmente agregaremos al carro de compras. 

ItemListContainer => en esta seccion se muestra el catalogo, llamando a los componentes : Item y ItemList.

NavBar => Barra de Navegacion de la pagina (Home, Cactus, Suculentas, exoticas, nosotros, contacto).


Servies => {
			GetFetchDetail => En esta seccion estan los detalles del producto (id, categorias, title, description, brand, price, pictureUrl, stock)
      GetFetchDetail => En esta seccion estan los productos finales (contiene el catalogo) (id, categorias, title, price, pictureUrl, stock) }
      
			
Librerias externas a create-react-app => {
  Boostrap 5: Simplificar las estilos solo agregando cdn.
  Firebase: libreria de servicios, que nos facilita, y nos   permite desarrollar el fron-end, sin preocuparnos del back-end. nos facilita esta solucion altamente desarrollada y probada.
  React-router-dom: usado para el sistema de navegacion entre pagigas para que este funcione como spa.
  emailjs: este componente nos ayuda con el correo de la pagina, nos envia correos a el propietario con alguna duda del cliente. 
  styled-componets: nos ayuda a traer componentes completos a nuestra pagina, con extractos de codigo, esta ocacion se utilizo para el footer. 
  react-boostrap
}

Avance del proyecto:

Home =>
![home mendel](https://user-images.githubusercontent.com/85139914/140662042-5392bef3-17d0-41eb-8280-72e89be79244.png)

Description =>
![foto description](https://user-images.githubusercontent.com/85139914/140663610-1646ef08-be01-412f-ae6f-773ca845ea1c.png)

