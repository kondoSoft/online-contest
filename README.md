# Online-contest
An React online contest application

Flujo de Trabajo para la asignacion de boletos de rifa a usuarios que han reservado con la empresa.

- [ ]El asesor de ventas debe realizar el registro de cada usuario que ha reservado previamente.
- [ ] El asesor de ventas puede ver la lista de usuarios registrados.
- [ ] El asesor de ventas puede confirmar que los usuarios han realizado el pago de la reservacion.
- [ ] El asesor de ventas puede asignar la cantidad de boletos que se le dara a la usuario que ya han pagado la reservacion
- [ ]El asesor de ventas puede enviar un correo electronico de confimacion a cada usuario, detallando en este correo electronico los boletos asignados
- [ ]El asesor de ventas puede imprimir todos los boletos asignados con los datos de cada usuario.
- [ ]El asesor de ventas puede generar una busqueda de datos de los clientes con los boletos asignados.
- [ ]El asesor de venta puede ver los detalles de cada usuario
- [ ]El asesor de venta puede editar datos de cada usuario

### Mapa de sitio
![Map-site](src/Map-site.png)

### Home
![Home](src/Home.png)

Menu con botones de acceso a registro nuevo usuario y lista de usuarios

### Registro de usuario
![Form](src/Form.png)

Formulario para registro de usuario

### Lista de usuarios registrado
![List_user](src/List_user.png)

Lista en forma de tabla con informacion basica del usuario, cuenta con barra de busqueda, cada linea de usuario muestra un check editable para activar si el usuario ya realizo el pago, y botones de accion, las acciones son asignacion de boletos(se activa siempre y cuando el usuario ya realizo el pago), envio de correo electronico y ver detalles de usuario.
Cuenta con un boton para imprimir todos los boletos asignados.

### Asignacion de boletos por usuario
![Assign_ticket](src/Assign_ticket.png)

Modal que muestra la asignacion de boletos por usuario

### Confirmacion para el envio de correo electronico
![Send_email](src/Send_email.png)

Modal de confirmacion para el envio de correo electronico

###  Detalles de usuario
![Details_user](src/Details_user.png)

Modal que muestra lo detalles de usuario

###  Editar usuario
![Edit_user](src/Edit_user.png)

Modal para editar datos de usuario
