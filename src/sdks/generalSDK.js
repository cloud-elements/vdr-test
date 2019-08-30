"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var request = require("superagent");
/**
 *
 * @class generalSDK
 * Methods return a superagent compatible instance that fully supports the superagent API
 */
var generalSDK = /** @class */ (function () {
    /**
     * Create an instance of the SDK
     * @param {string} baseUrl - The URL of the host environment (e.g., https://staging.cloud-elements.com)
     * @param {string} authorizationHeader - A valid auth header for Cloud Elements (User and Org tokens)
     */
    function generalSDK(baseUrl, authorizationHeader) {
        this.domain = "https://staging.cloud-elements.com/elements/api-v2";
        this.authorizationHeader = null;
        if (baseUrl) {
            this.domain = baseUrl + "/elements/api-v2";
        }
        if (authorizationHeader) {
            this.authorizationHeader = authorizationHeader;
        }
    }
    generalSDK.prototype.getDomain = function () {
        return this.domain;
    };
    /**
     * Perform a POST to the given path
     * @method
     * @name platformSDK#post
     * @param {string} path
     */
    generalSDK.prototype.post = function (path) {
        return new generalSDKMethodParameters(this, 'post', path);
    };
    /**
     * Perform a PUT to the given path
     * @method
     * @name platformSDK#put
     * @param {string} path
     */
    generalSDK.prototype.put = function (path) {
        return new generalSDKMethodParameters(this, 'put', path);
    };
    /**
     * Perform a PATCH to the given path
     * @method
     * @name platformSDK#patch
     * @param {string} path
     */
    generalSDK.prototype.patch = function (path) {
        return new generalSDKMethodParameters(this, 'patch', path);
    };
    /**
     * Perform a DELETE to the given path
     * @method
     * @name platformSDK#delete
     * @param {string} path
     */
    generalSDK.prototype["delete"] = function (path) {
        return new generalSDKMethodParameters(this, 'delete', path);
    };
    /**
     * Perform a GET to the given path
     * @method
     * @name platformSDK#get
     * @param {string} path
     */
    generalSDK.prototype.get = function (path) {
        return new generalSDKMethodParameters(this, 'get', path);
    };
    /**
     * Search for {objectName}
     * @method
     * @name generalSDK#getByObjectName
     * @param {string} objectName - The name of the object
     * @return { getByObjectNameParameters } To allow chaining
     */
    generalSDK.prototype.getByObjectName = function (objectName) {
        return new getByObjectNameParameters(this, 'GET', '/{objectName}', objectName);
    };
    /**
     * Create an {objectName}
     * @method
     * @name generalSDK#createByObjectName
     * @param {string} objectName - The name of the object
     * @param {} body - The {objectName}
     * @return { createByObjectNameParameters } To allow chaining
     */
    generalSDK.prototype.createByObjectName = function (objectName, body) {
        return new createByObjectNameParameters(this, 'POST', '/{objectName}', objectName, body);
    };
    /**
     * Delete an {objectName}
     * @method
     * @name generalSDK#deleteObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @return { deleteObjectNameByObjectIdParameters } To allow chaining
     */
    generalSDK.prototype.deleteObjectNameByObjectId = function (objectName, objectId) {
        return new deleteObjectNameByObjectIdParameters(this, 'DELETE', '/{objectName}/{objectId}', objectName, objectId);
    };
    /**
     * Retrieve an {objectName}
     * @method
     * @name generalSDK#getObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @return { getObjectNameByObjectIdParameters } To allow chaining
     */
    generalSDK.prototype.getObjectNameByObjectId = function (objectName, objectId) {
        return new getObjectNameByObjectIdParameters(this, 'GET', '/{objectName}/{objectId}', objectName, objectId);
    };
    /**
     * Update an {objectName}
     * @method
     * @name generalSDK#updateObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {} body - The {objectName}
     * @return { updateObjectNameByObjectIdParameters } To allow chaining
     */
    generalSDK.prototype.updateObjectNameByObjectId = function (objectName, objectId, body) {
        return new updateObjectNameByObjectIdParameters(this, 'PATCH', '/{objectName}/{objectId}', objectName, objectId, body);
    };
    /**
     * Update an {objectName}
     * @method
     * @name generalSDK#replaceObjectNameByObjectId
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {} body - The {objectName}
     * @return { replaceObjectNameByObjectIdParameters } To allow chaining
     */
    generalSDK.prototype.replaceObjectNameByObjectId = function (objectName, objectId, body) {
        return new replaceObjectNameByObjectIdParameters(this, 'PUT', '/{objectName}/{objectId}', objectName, objectId, body);
    };
    /**
     * Search for {childObjectName}
     * @method
     * @name generalSDK#getObjectNameByChildObjectName
     * @param {string} objectName - The name of the object
     * @param {string} objectId - The {objectName} ID
     * @param {string} childObjectName - The name of the childObjectName
     * @return { getObjectNameByChildObjectNameParameters } To allow chaining
     */
    generalSDK.prototype.getObjectNameByChildObjectName = function (objectName, objectId, childObjectName) {
        return new getObjectNameByChildObjectNameParameters(this, 'GET', '/{objectName}/{objectId}/{childObjectName}', objectName, objectId, childObjectName);
    };
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
    generalSDK.prototype.createObjectNameByChildObjectName = function (objectName, objectId, childObjectName, body) {
        return new createObjectNameByChildObjectNameParameters(this, 'POST', '/{objectName}/{objectId}/{childObjectName}', objectName, objectId, childObjectName, body);
    };
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
    generalSDK.prototype.deleteObjectNameByChildObjectId = function (objectName, childObjectName, objectId, childObjectId) {
        return new deleteObjectNameByChildObjectIdParameters(this, 'DELETE', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId);
    };
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
    generalSDK.prototype.getObjectNameByChildObjectId = function (objectName, childObjectName, objectId, childObjectId) {
        return new getObjectNameByChildObjectIdParameters(this, 'GET', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId);
    };
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
    generalSDK.prototype.updateObjectNameByChildObjectId = function (objectName, childObjectName, objectId, childObjectId, body) {
        return new updateObjectNameByChildObjectIdParameters(this, 'PATCH', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId, body);
    };
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
    generalSDK.prototype.replaceObjectNameByChildObjectId = function (objectName, childObjectName, objectId, childObjectId, body) {
        return new replaceObjectNameByChildObjectIdParameters(this, 'PUT', '/{objectName}/{objectId}/{childObjectName}/{childObjectId}', objectName, childObjectName, objectId, childObjectId, body);
    };
    return generalSDK;
}());
exports.generalSDK = generalSDK;
var generalSDKMethodParameters = /** @class */ (function (_super) {
    __extends(generalSDKMethodParameters, _super);
    function generalSDKMethodParameters(superThis, method, _path) {
        var _this = _super.call(this, method, superThis.getDomain() + _path) || this;
        _this.superThis = superThis;
        _this.method = method;
        _this._path = _path;
        _this["catch"] = _super.prototype["catch"];
        if (superThis.authorizationHeader) {
            _this.set('Authorization', superThis.authorizationHeader);
        }
        return _this;
    }
    generalSDKMethodParameters.prototype.then = function (a, b) {
        return _super.prototype.then.call(this, function (r) {
            if (r.type === 'application/octet-stream' && !r.buffered && !r.text) {
                return a(r);
            }
            else {
                return a(r.body);
            }
        }, b);
    };
    ;
    return generalSDKMethodParameters;
}(request.Request));
var getByObjectNameParameters = /** @class */ (function (_super) {
    __extends(getByObjectNameParameters, _super);
    function getByObjectNameParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getByObjectNameParameters#where
     */
    getByObjectNameParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getByObjectNameParameters#pageSize
     */
    getByObjectNameParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getByObjectNameParameters#nextPage
     */
    getByObjectNameParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    return getByObjectNameParameters;
}(generalSDKMethodParameters));
var createByObjectNameParameters = /** @class */ (function (_super) {
    __extends(createByObjectNameParameters, _super);
    function createByObjectNameParameters(superThis, method, _path, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return createByObjectNameParameters;
}(generalSDKMethodParameters));
var deleteObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(deleteObjectNameByObjectIdParameters, _super);
    function deleteObjectNameByObjectIdParameters(superThis, method, _path, objectName, objectId) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)) || this;
    }
    return deleteObjectNameByObjectIdParameters;
}(generalSDKMethodParameters));
var getObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(getObjectNameByObjectIdParameters, _super);
    function getObjectNameByObjectIdParameters(superThis, method, _path, objectName, objectId) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)) || this;
    }
    return getObjectNameByObjectIdParameters;
}(generalSDKMethodParameters));
var updateObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(updateObjectNameByObjectIdParameters, _super);
    function updateObjectNameByObjectIdParameters(superThis, method, _path, objectName, objectId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)) || this;
        _this.send(body);
        return _this;
    }
    return updateObjectNameByObjectIdParameters;
}(generalSDKMethodParameters));
var replaceObjectNameByObjectIdParameters = /** @class */ (function (_super) {
    __extends(replaceObjectNameByObjectIdParameters, _super);
    function replaceObjectNameByObjectIdParameters(superThis, method, _path, objectName, objectId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)) || this;
        _this.send(body);
        return _this;
    }
    return replaceObjectNameByObjectIdParameters;
}(generalSDKMethodParameters));
var getObjectNameByChildObjectNameParameters = /** @class */ (function (_super) {
    __extends(getObjectNameByChildObjectNameParameters, _super);
    function getObjectNameByChildObjectNameParameters(superThis, method, _path, objectName, objectId, childObjectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectName}', "" + childObjectName)) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getObjectNameByChildObjectNameParameters#where
     */
    getObjectNameByChildObjectNameParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getObjectNameByChildObjectNameParameters#pageSize
     */
    getObjectNameByChildObjectNameParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getObjectNameByChildObjectNameParameters#nextPage
     */
    getObjectNameByChildObjectNameParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    return getObjectNameByChildObjectNameParameters;
}(generalSDKMethodParameters));
var createObjectNameByChildObjectNameParameters = /** @class */ (function (_super) {
    __extends(createObjectNameByChildObjectNameParameters, _super);
    function createObjectNameByChildObjectNameParameters(superThis, method, _path, objectName, objectId, childObjectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectName}', "" + childObjectName)) || this;
        _this.send(body);
        return _this;
    }
    return createObjectNameByChildObjectNameParameters;
}(generalSDKMethodParameters));
var deleteObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(deleteObjectNameByChildObjectIdParameters, _super);
    function deleteObjectNameByChildObjectIdParameters(superThis, method, _path, objectName, childObjectName, objectId, childObjectId) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{childObjectName}', "" + childObjectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectId}', "" + childObjectId)) || this;
    }
    return deleteObjectNameByChildObjectIdParameters;
}(generalSDKMethodParameters));
var getObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(getObjectNameByChildObjectIdParameters, _super);
    function getObjectNameByChildObjectIdParameters(superThis, method, _path, objectName, childObjectName, objectId, childObjectId) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{childObjectName}', "" + childObjectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectId}', "" + childObjectId)) || this;
    }
    return getObjectNameByChildObjectIdParameters;
}(generalSDKMethodParameters));
var updateObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(updateObjectNameByChildObjectIdParameters, _super);
    function updateObjectNameByChildObjectIdParameters(superThis, method, _path, objectName, childObjectName, objectId, childObjectId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{childObjectName}', "" + childObjectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectId}', "" + childObjectId)) || this;
        _this.send(body);
        return _this;
    }
    return updateObjectNameByChildObjectIdParameters;
}(generalSDKMethodParameters));
var replaceObjectNameByChildObjectIdParameters = /** @class */ (function (_super) {
    __extends(replaceObjectNameByChildObjectIdParameters, _super);
    function replaceObjectNameByChildObjectIdParameters(superThis, method, _path, objectName, childObjectName, objectId, childObjectId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)
            .replace('{childObjectName}', "" + childObjectName)
            .replace('{objectId}', "" + objectId)
            .replace('{childObjectId}', "" + childObjectId)) || this;
        _this.send(body);
        return _this;
    }
    return replaceObjectNameByChildObjectIdParameters;
}(generalSDKMethodParameters));
