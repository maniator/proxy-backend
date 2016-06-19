# Proxy Backend

The purpose of this application is for frontend developers to work in their own enviroments without the need to install any VMs related to the backend APIs

To use in "dev" mode (with nodemon) run: 

```
npm run dev
```

To use in "prod" mode (with plain ol' node) run:
```
npm start
```

### Config Instructions:

First create a `config-local.js` in the `/config` directory.

The config contains data in the following scheme:

```
{
    "host": "The url to the host that will contain the apis or any other backend assets that the frontend code will use"
    
    "localPaths": [{
        hostRoute: '/test', // route that we are overriding
        localPath: './test', // location of the code that will be overriding the original
    }],
}
```