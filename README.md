# Birdy

An app to search musics suggestion based in a given location.

This project is splitted in two repositories:

-   [birdy-web-ui](#birdy-web-ui)
-   [birdy-web-api](https://github.com/seudev/birdy-web-api)

## Why is the name Bridy?

Birds migrate acording to the tempeture also they can change their pattern of singing in different stages of live, such as during the reproductive period that also has to do with the tempeture (when is hotter).

Credits for the name to [@anakrdo](https://www.instagram.com/anakrdo)

## birdy-web-ui

The Web UI application of the **Birdy** project, create with [Next.js](https://nextjs.org).

### Screenshot

![birdy-screenshot](https://user-images.githubusercontent.com/8549602/102248254-bd549c00-3edf-11eb-814c-4c92ee3fc8fe.png)

### Development

This application can be develop in any _IDE_ and any environment with **node**,
but with [VSCode](https://code.visualstudio.com/) + [VSCode Dev Container](https://code.visualstudio.com/docs/remote/containers-tutorial) all the dev environment already is configured and ready to use inside a [Docker](https://www.docker.com) container.

#### Requirements

-   [VSCode](https://code.visualstudio.com) - Recommended _IDE_
-   [VSCode Dev Container](https://code.visualstudio.com/docs/remote/containers-tutorial) - Recommended to develop inside a container
-   [Docker](https://www.docker.com) - Recommended to run the **node** inside a container
-   [Node 10.13+](https://nodejs.org/en/) - Only install it if you will not be use Docker

#### Settings

Create a `.env` file in the root project folder, with the below enviroments:

```env
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_BIRDY_API_BASE_URL=http://localhost:8080/api/v1
```

#### Scripts

-   `npm run dev` - start the Next.js in development mode, then open [http://localhost:3000](http://localhost:3000) from your browser;
-   `npm run build` - build the application for production usage;
-   `npm run start` - start a Next.js production server.

**Note**: All this scripts are configured as [VSCode tasks](https://code.visualstudio.com/docs/editor/tasks) and `bash` alias to facilitate development.

### Production

#### Build

This application works in any static HTML server.

##### Static files

Run `npm run build` to generate a production build. The generated static files will be created in the `out` folder.

##### Docker image

Run the below script to build the docker image. It will build the [static files](#static-files) and serve it in a [Nginx](https://hub.docker.com/_/nginx) server.

```sh
docker build \
    --build-arg PUBLIC_URL=http://localhost:3000 \
    --build-arg BIRDY_API_BASE_URL=http://localhost:8080/api/v1 \
    -t seudev/birdy-web-ui .
```

**Note**: Replace the above URLs by the production URLs.

###### Running

Run the below script to start the application, then open [http://localhost](http://localhost) from your browser.

```sh
docker run --rm -it -p 80:80 seudev/birdy-web-ui
```

## Licensing

**seudev/birdy-web-ui** is provided and distributed under the [Apache Software License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

Refer to _LICENSE_ for more information.
