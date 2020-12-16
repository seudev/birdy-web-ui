# Birdy

An app to search musics suggestion based in a given location.

This project is splitted in two repositories:

-   [birdy-web-ui](#birdy-web-ui)
-   [birdy-web-api](https://github.com/seudev/birdy-web-api)

## Why is the name Bridy?

Birds migrate acording to the tempeture also they can change their pattern of singing in different stages of live, such as during the reproductive period that also has to do with the tempeture (when is hotter).

Credits for the name to [@anakrdo](https://www.instagram.com/anakrdo)

## birdy-web-ui

The Web UI application of the **Birdy** project, created with [Next.js](https://nextjs.org).

## Screenshot

![birdy-screenshot](https://user-images.githubusercontent.com/8549602/102248254-bd549c00-3edf-11eb-814c-4c92ee3fc8fe.png)

## Development

This application can be develop in any _IDE_ and any environment with **node**,
but with [VSCode](https://code.visualstudio.com/) + [VSCode Dev Container](https://code.visualstudio.com/docs/remote/containers-tutorial) all the dev environment already is configured and ready to use inside a [Docker](https://www.docker.com) container.

### Requirements

-   [VSCode](https://code.visualstudio.com) - Recommended _IDE_
-   [VSCode Dev Container](https://code.visualstudio.com/docs/remote/containers-tutorial) - Recommended to develop inside a container
-   [Docker](https://www.docker.com) - Recommended to run the **node** inside a container
-   [Node 10.13+](https://nodejs.org/en/) - Only install it if you will not be use Docker

### Settings

Create a `.env` file in the root project folder, with the below environments:

```env
# GIT CONFIG ##########################################################################################################
GIT_USER_EMAIL="your@email"
GIT_USER_NAME="Your name"
#
# NEXT.JS CONFIG ######################################################################################################
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_BIRDY_API_BASE_URL=http://localhost:8080/api/v1
#
```

**Notes**:

-   The above environment variable values are only examples. Replace it by correct value.
-   The `GIT_*` environment variables are used to config the git inside a docker container (Only necessary it if you will use the git inside a VSCode Dev Container).

### Scripts

-   `npm run dev` - start the Next.js in development mode, then open [http://localhost:3000](http://localhost:3000) from your browser;
-   `npm run build` - build the application for production usage;
-   `npm run start` - start a Next.js production server.

**Note**: All this scripts are configured as [VSCode tasks](https://code.visualstudio.com/docs/editor/tasks) and `bash` alias to facilitate development.

## Production

### Requirements

-   [Nginx](https://nginx.org) - Only install it if you will not be use Docker

### Build and run

This application can be serve in any static HTML server. Below is detailed how to serve it in an Nginx server.

#### Containerized app

Execute the below command to **build** the Docker image:

```sh
docker build \
    --build-arg PUBLIC_URL=http://localhost:80 \
    --build-arg BIRDY_API_BASE_URL=http://localhost:8080/api/v1 \
    -t seudev/birdy-web-ui .
```

**Note**: Replace the above URLs by the production URLs.

Execute the below command to **run** the application:

```sh
docker run --rm -it -p 80:80 seudev/birdy-web-ui
```

After run, open [http://localhost](http://localhost) from your browser.

##### Non-containerized app

Execute the below command to **build** the application:

```sh
# Install the dependencies if it yet are not installed.
#npm install

npm run build
```

**Note**: Replace the URLs in the [.env](#settings) file by the production URLs.

It will be generate static files in the `out` folder.

Execute the below steps to **run** the application:

1. Remove all files contained in the `/usr/share/nginx/html` folder;
1. Copy all internal files and folders from the `out` folder to the `/usr/share/nginx/html` folder;
1. Copy the `nginx.conf` file (localized in the root project) to the the `nginx/conf.d` [installation folder](http://nginx.org/en/docs/beginners_guide.html);
1. Reload the Nginx config, using the `nginx -s reload` command.

After run, open [http://localhost](http://localhost) from your browser.

## Licensing

**seudev/birdy-web-ui** is provided and distributed under the [Apache Software License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

Refer to _LICENSE_ for more information.
