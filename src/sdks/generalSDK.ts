import * as request from "superagent";
type integer = number;
/**
 * 
 * @class generalSDK
 * Methods return a superagent compatible instance that fully supports the superagent API
 */
export class generalSDK {
    domain: string = "https://staging.cloud-elements.com/elements/api-v2";
    authorizationHeader: string = null;
    /**
     * Create an instance of the SDK
     * @param {string} baseUrl - The URL of the host environment (e.g., https://staging.cloud-elements.com)
     * @param {string} authorizationHeader - A valid auth header for Cloud Elements (User and Org tokens)
     */
    constructor(baseUrl ? : string, authorizationHeader ? : string) {
        if (baseUrl) {
            this.domain = `${baseUrl}/elements/api-v2`;
        }
        if (authorizationHeader) {
            this.authorizationHeader = authorizationHeader;
        }
    }
    getDomain() {
        return this.domain;
    }
    /**
     * Perform a POST to the given path
     * @method
     * @name platformSDK#post
     * @param {string} path
     */
    post(path: string): generalSDKMethodParameters < request.Response > {
        return new generalSDKMethodParameters < request.Response > (this, 'post', path)
    }
    /**
     * Perform a PUT to the given path
     * @method
     * @name platformSDK#put
     * @param {string} path
     */
    put(path: string): generalSDKMethodParameters < request.Response > {
        return new generalSDKMethodParameters < request.Response > (this, 'put', path)
    }
    /**
     * Perform a PATCH to the given path
     * @method
     * @name platformSDK#patch
     * @param {string} path
     */
    patch(path: string): generalSDKMethodParameters < request.Response > {
        return new generalSDKMethodParameters < request.Response > (this, 'patch', path)
    }
    /**
     * Perform a DELETE to the given path
     * @method
     * @name platformSDK#delete
     * @param {string} path
     */
    delete(path: string): generalSDKMethodParameters < request.Response > {
        return new generalSDKMethodParameters < request.Response > (this, 'delete', path)
    }
    /**
     * Perform a GET to the given path
     * @method
     * @name platformSDK#get
     * @param {string} path
     */
    get(path: string): generalSDKMethodParameters < request.Response > {
        return new generalSDKMethodParameters < request.Response > (this, 'get', path)
    }
    /**
     * Search for {objectName}
     * @method
     * @name generalSDK#getByObjectName
     * @param {string} objectName - The name of the object
     * @return { getByObjectNameParameters } To allow chaining
     */
    getByObjectName(
        objectName: string,
    ): getByObjectNameParameters {
        return new getByObjectNameParameters(this, 'GET', '/{objectName}', objectName);
    }
    /**
     * Create an {objectName}
     * @method
     * @name generalSDK#createByObjectName
     * @param {string} objectName - The name of the object
     * @param {} body - The {objectName}
     * @return { createByObjectNameParameters } To allow chaining
     */
    createByObjectName(
        objectName: string,
        body:
        Object,
    ): createByObjectNameParameters {
        return new createByObjectNameParameters(this, 'POST', '/{objectName}', objectName, body);
    }
    /**
     * Delete an {objectName}
     * @method
     * @name generalSDK#deleteObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @return { deleteObjectNameByObjectIdParameters } To allow chaining
     */
    deleteObjectNameByObjectId(
        objectName: string,
        objectId: string,
    ): deleteObjectNameByObjectIdParameters {
        return new deleteObjectNameByObjectIdParameters(this, 'DELETE', '/{objectName}/{objectId}', objectName, objectId);
    }
    /**
     * Retrieve an {objectName}
     * @method
     * @name generalSDK#getObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @return { getObjectNameByObjectIdParameters } To allow chaining
     */
    getObjectNameByObjectId(
        objectName: string,
        objectId: string,
    ): getObjectNameByObjectIdParameters {
        return new getObjectNameByObjectIdParameters(this, 'GET', '/{objectName}/{objectId}', objectName, objectId);
    }
    /**
     * Update an {objectName}
     * @method
     * @name generalSDK#updateObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {} body - The {objectName}
     * @return { updateObjectNameByObjectIdParameters } To allow chaining
     */
    updateObjectNameByObjectId(
        objectName: string,
        objectId: string,
        body:
        Object,
    ): updateObjectNameByObjectIdParameters {
        return new updateObjectNameByObjectIdParameters(this, 'PATCH', '/{objectName}/{objectId}', objectName, objectId, body);
    }
    /**
     * Update an {objectName}
     * @method
     * @name generalSDK#replaceObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {} body - The {objectName}
     * @return { replaceObjectNameByObjectIdParameters } To allow chaining
     */
    replaceObjectNameByObjectId(
        objectName: string,
        objectId: string,
        body:
        Object,
    ): replaceObjectNameByObjectIdParameters {
        return new replaceObjectNameByObjectIdParameters(this, 'PUT', '/{objectName}/{objectId}', objectName, objectId, body);
    }
    /**
     * Search for {childObjectName}
     * @method
     * @name generalSDK#getObjectNameByChildObjectName
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectName - The name of the childObjectName
     * @return { getObjectNameByChildObjectNameParameters } To allow chaining
     */
    getObjectNameByChildObjectName(
        objectName: string,
        objectId: string,
        childObjectName: string,
    ): getObjectNameByChildObjectNameParameters {
        return new getObjectNameByChildObjectNameParameters(this, 'GET', '/{objectName}/{objectId}/{childObjectName}', objectName, objectId, childObjectName);
    }
    /**
     * Create an {childObjectName}
     * @method
     * @name generalSDK#createObjectNameByChildObjectName
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectName - The name of the object
     * @param {} body - The {childObjectName}
     * @return { createObjectNameByChildObjectNameParameters } To allow chaining
     */
    createObjectNameByChildObjectName(
        objectName: string,
        objectId: string,
        childObjectName: string,
        body:
        Object,
    ): createObjectNameByChildObjectNameParameters {
        return new createObjectNameByChildObjectNameParameters(this, 'POST', '/{objectName}/{objectId}/{childObjectName}', objectName, objectId, childObjectName, body);
    }
    /**
     * Delete an {childObjectName}
     * @method
     * @name generalSDK#deleteObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     * @return { deleteObjectNameByChildObjectIdParameters } To allow chaining
     */
    deleteObjectNameByChildObjectId(
        objectName: string,
        childObjectName: string,
        objectId: string,
        childObjectId: string,
    ): deleteObjectNameByChildObjectIdParameters {
        return new deleteObjectNameByChildObjectIdParameters(this, 'DELETE', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId);
    }
    /**
     * Retrieve an {childObjectName}
     * @method
     * @name generalSDK#getObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     * @return { getObjectNameByChildObjectIdParameters } To allow chaining
     */
    getObjectNameByChildObjectId(
        objectName: string,
        childObjectName: string,
        objectId: string,
        childObjectId: string,
    ): getObjectNameByChildObjectIdParameters {
        return new getObjectNameByChildObjectIdParameters(this, 'GET', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId);
    }
    /**
     * Update an {childObjectName}
     * @method
     * @name generalSDK#updateObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     * @param {} body - The {objectName}
     * @return { updateObjectNameByChildObjectIdParameters } To allow chaining
     */
    updateObjectNameByChildObjectId(
        objectName: string,
        childObjectName: string,
        objectId: string,
        childObjectId: string,
        body: {},
    ): updateObjectNameByChildObjectIdParameters {
        return new updateObjectNameByChildObjectIdParameters(this, 'PATCH', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId, body);
    }
    /**
     * Update an {childObjectName}
     * @method
     * @name generalSDK#replaceObjectNameByChildObjectId
     * @param {string} objectName - The name of the object
     * @param {string} childObjectName - The name of the childObjectName
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectId - The {childObjectName} ID
     * @param {} body - The {objectName}
     * @return { replaceObjectNameByChildObjectIdParameters } To allow chaining
     */
    replaceObjectNameByChildObjectId(
        objectName: string,
        childObjectName: string,
        objectId: string,
        childObjectId: string,
        body: {},
    ): replaceObjectNameByChildObjectIdParameters {
        return new replaceObjectNameByChildObjectIdParameters(this, 'PUT', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId, body);
    }
}
type Object = {
    'objectField' ? : string
};
type BulkStatus = {
    'batchId' ? : number 'message' ? : string 'numOfLeadsProcessed' ? : number 'numOfRowsFailed' ? : number 'numOfRowsWithWarning' ? : number 'status' ? : string
};
type BulkLoad = {
    'id' ? : number 'status' ? : string
};
type BulkQuery = {
    'id' ? : number 'status' ? : string
};
type Pong = {
    'dateTime' ? : string 'endpoint' ? : string
};
type ModelDate = {
    'value' ? : string
};
class generalSDKMethodParameters < T > extends request.Request implements Promise < T > {
    constructor(public superThis: generalSDK, protected method: string, protected _path: string) {
        super(method, superThis.getDomain() + _path);
        if (superThis.authorizationHeader) {
            this.set('Authorization', superThis.authorizationHeader);
        }
    }
    then(a: (r: T) => any, b): any {
        return super.then(r => {
            if (r.type === 'application/octet-stream' && !r.buffered && !r.text) {
                return a(r)
            } else {
                return a(r.body)
            }
        }, b)
    };
    catch = super.catch;
}
class getByObjectNameParameters extends generalSDKMethodParameters <
    Array <
    Object >
    >
    {
        constructor(superThis: generalSDK, method: string, _path: string, objectName: string) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getByObjectNameParameters#where
         */
        where(where: string): getByObjectNameParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getByObjectNameParameters#pageSize
         */
        pageSize(pageSize: number): getByObjectNameParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getByObjectNameParameters#nextPage
         */
        nextPage(nextPage: string): getByObjectNameParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
    }
class createByObjectNameParameters extends generalSDKMethodParameters < > {
    constructor(superThis: generalSDK, method: string, _path: string, objectName: string, body:
        Object
    ) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
        );
        this.send(body);
    }
}
class deleteObjectNameByObjectIdParameters extends generalSDKMethodParameters < > {
    constructor(superThis: generalSDK, method: string, _path: string, objectName: string, objectId: string) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
            .replace('{objectId}', `${objectId}`)
        );
    }
}
class getObjectNameByObjectIdParameters extends generalSDKMethodParameters <
    Object >
    {
        constructor(superThis: generalSDK, method: string, _path: string, objectName: string, objectId: string) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{objectId}', `${objectId}`)
            );
        }
    }
class updateObjectNameByObjectIdParameters extends generalSDKMethodParameters <
    Object >
    {
        constructor(superThis: generalSDK, method: string, _path: string, objectName: string, objectId: string, body:
            Object
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{objectId}', `${objectId}`)
            );
            this.send(body);
        }
    }
class replaceObjectNameByObjectIdParameters extends generalSDKMethodParameters <
    Object >
    {
        constructor(superThis: generalSDK, method: string, _path: string, objectName: string, objectId: string, body:
            Object
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{objectId}', `${objectId}`)
            );
            this.send(body);
        }
    }
class getObjectNameByChildObjectNameParameters extends generalSDKMethodParameters <
    Array <
    Object >
    >
    {
        constructor(superThis: generalSDK, method: string, _path: string, objectName: string, objectId: string, childObjectName: string) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{objectId}', `${objectId}`)
                .replace('{childObjectName}', `${childObjectName}`)
            );
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getObjectNameByChildObjectNameParameters#where
         */
        where(where: string): getObjectNameByChildObjectNameParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getObjectNameByChildObjectNameParameters#pageSize
         */
        pageSize(pageSize: number): getObjectNameByChildObjectNameParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getObjectNameByChildObjectNameParameters#nextPage
         */
        nextPage(nextPage: string): getObjectNameByChildObjectNameParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
    }
class createObjectNameByChildObjectNameParameters extends generalSDKMethodParameters < > {
    constructor(superThis: generalSDK, method: string, _path: string, objectName: string, objectId: string, childObjectName: string, body:
        Object
    ) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
            .replace('{objectId}', `${objectId}`)
            .replace('{childObjectName}', `${childObjectName}`)
        );
        this.send(body);
    }
}
class deleteObjectNameByChildObjectIdParameters extends generalSDKMethodParameters < > {
    constructor(superThis: generalSDK, method: string, _path: string, objectName: string, childObjectName: string, objectId: string, childObjectId: string) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
            .replace('{childObjectName}', `${childObjectName}`)
            .replace('{objectId}', `${objectId}`)
            .replace('{childObjectId}', `${childObjectId}`)
        );
    }
}
class getObjectNameByChildObjectIdParameters extends generalSDKMethodParameters <
    Object >
    {
        constructor(superThis: generalSDK, method: string, _path: string, objectName: string, childObjectName: string, objectId: string, childObjectId: string) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{childObjectName}', `${childObjectName}`)
                .replace('{objectId}', `${objectId}`)
                .replace('{childObjectId}', `${childObjectId}`)
            );
        }
    }
class updateObjectNameByChildObjectIdParameters extends generalSDKMethodParameters <
    Object >
    {
        constructor(superThis: generalSDK, method: string, _path: string, objectName: string, childObjectName: string, objectId: string, childObjectId: string, body: {}) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{childObjectName}', `${childObjectName}`)
                .replace('{objectId}', `${objectId}`)
                .replace('{childObjectId}', `${childObjectId}`)
            );
            this.send(body);
        }
    }
class replaceObjectNameByChildObjectIdParameters extends generalSDKMethodParameters <
    Object >
    {
        constructor(superThis: generalSDK, method: string, _path: string, objectName: string, childObjectName: string, objectId: string, childObjectId: string, body: {}) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
                .replace('{childObjectName}', `${childObjectName}`)
                .replace('{objectId}', `${objectId}`)
                .replace('{childObjectId}', `${childObjectId}`)
            );
            this.send(body);
        }
    }