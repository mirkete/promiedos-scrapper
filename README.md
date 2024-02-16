# Scrapper de promiedos
Aplicacion creada para *scrapear* datos del sitio web [Promiedos](https://www.promiedos.com.ar/) y formatearlos para facilitar su uso.
Recopila toda la informacion de los partidos actuales y la devuelve en formato JSON. Para obtener los datos, utiliza la librería Puppeteer.

> [!NOTE]
> Esta aplicación fue creada con fines exclusivamente educativos y de contribución a la comunidad.

## Como usar?
Para utilizar la aplicación, se debe tener instalado Node.js y npm previamente.
1. **Crear copia local del repositorio (clonar/fork)**
2. **Instalar dependencias**
Se deben instalar las dependencias del proyecto. Son muy pocas, por lo que la descarga es minima. El comando para hacerlo es el siguiente:
```
npm install
```
3. **Ejecutar la aplicación**
Para poner en marcha el scrapper se debe ejecutar el siguiente comando:
```
npm start
```

4. ** Acceder a la información **
La información estara disponible en el puerto 3000 del host local. [Ver aqui](http://localhost:3000/). Las rutas que contienen la informacion estan detalladas a continuación.

## Endpoints
- **/matches**: Retorna información sobre todos los partidos actuales en formato JSON. Los partidos estan organizados por liga/competición. Este es un ejemplo de la estructura de la información:
```
  leagueMatches: [
    {
      name: "Nombre de la competicion",
      matches: [
        {
          local: {
            name: "Equipo 1",
            goals: 2
          },
          visitor: {
            name: "Equipo 2",
            goals: 0
          }
        },
...
```
- **/screenshot**: Realiza una captura de pantalla de la pagina principal de Promiedos y la devuelve en formato JPEG.
