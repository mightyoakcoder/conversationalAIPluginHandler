# Conversational AI Plugin Handler

## Set Up

1. Create package.json: ```npm init```

2. Install Express module: ```npm i express```

3. Install CORS module: ```npm i cors```

4. Install OpenAPI module: ```npm i openapi```

5. Run the server, either by typing "```node server```" or install ```npm i -g nodemon```, and run the server by typing "```nodemon```"

Nodemon will automatically restart the server every time you save a change.
___

## Getting Started

1. Build an API
2. Document the API in the OpenAPI yaml
* The OpenAPI specification is the wrapper that sits on top of your API. A basic OpenAPI specification will look like the following:

```
openapi: "3.0.1"
info:
  title: " Conversational AI Plugin Handler"
  version: "1.0.0"
paths:
  /:
    get: 
      summary: "Get information about the company's loyalty program"
      operationId: "getLoyaltyById"
      parameters:
        - in: query
          name: q
          schema:
            type: string
          required: true
          description: "Tell me about the company's loyalty program"
      responses:
        "200":
          description: "Successful operation."
          content:
            application/json:
              schema:
                type: object
                properties:
                  results:
                    type: array
                    items:
                      type: object
                      properties:
                        title:
                          type: string
                        link:
                          type: string
                        snippet:
                          type: string
        "400":
          description: "Bad request. Invalid or missing query parameter."
  /vegOptions:
    get: 
      summary: "Get information about the company's vegetarian options"
      operationId: "getVegOptionsById"
      parameters:
        - in: query
          name: q
          schema:
            type: string
          required: true
          description: "Information about the compnay's vegetarian options"
      responses:
        "200":
          description: "Successful operation."
          content:
            application/json:
              schema:
                type: object
                properties:
                  results:
                    type: array
                    items:
                      type: object
                      properties:
                        title:
                          type: string
                        link:
                          type: string
                        snippet:
                          type: string
        "400":
          description: "Bad request. Invalid or missing query parameter."
  /myProgram:
    get: 
      summary: "Get information about the loyalty program"
      operationId: "getmyProgramById"
      parameters:
        - in: query
          name: q
          schema:
            type: string
          required: true
          description: "Get information about the loyalty program"
      responses:
        "200":
          description: "Successful operation."
          content:
            application/json:
              schema:
                type: object
                properties:
                  results:
                    type: array
                    items:
                      type: object
                      properties:
                        title:
                          type: string
                        link:
                          type: string
                        snippet:
                          type: string
        "400":
          description: "Bad request. Invalid or missing query parameter."
```
3. Create a JSON manifest file that will define relavent metadata for the plugin. 
* On the backend ChatGPT looks for a file located at ```/.well-known/ai-plugin.json```. The ```/.well-known``` folder is **required**

* The miinimal definition of the required ```ai-plugin.json``` file will look like the following:
```
{
    "schema_version": "v1",
    "name_for_human": "TODO Plugin",
    "name_for_model": "todo",
    "description_for_human": "Plugin for managing a TODO list. You can add, remove and view your TODOs.",
    "description_for_model": "Plugin for managing a TODO list. You can add, remove and view your TODOs.",
    "auth": {
        "type": "none"
    },
    "api": {
        "type": "openapi",
        "url": "http://localhost:3333/openapi.yaml",
        "is_user_authenticated": false
    },
    "logo_url": "http://localhost:3333/logo.png",
    "contact_email": "support@example.com",
    "legal_info_url": "http://www.example.com/legal"
}
```


Once you have created an API, manifest file, and OpenAPI specification for your API, you are now ready to connect the plugin via the ChatGPT UI. There are two different places your plugin might be running, either locally in a development environment or on a remote server.

If you have a local version of your API running, you can point the plugin interface to your localhost server. To connect the plugin with ChatGPT, navigate to the plugin store and select “Develop your own plugin”. Enter your localhost and port number (e.g localhost:3000). Note that only auth type none is currently supported for localhost development.

ref: https://platform.openai.com/docs/plugins/getting-started
