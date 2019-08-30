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
 * @class platformSDK
 * Methods return a superagent compatible instance that fully supports the superagent API
 */
var platformSDK = /** @class */ (function () {
    /**
     * Create an instance of the SDK
     * @param {string} baseUrl - The URL of the host environment (e.g., https://staging.cloud-elements.com)
     * @param {string} authorizationHeader - A valid auth header for Cloud Elements (User and Org tokens)
     */
    function platformSDK(baseUrl, authorizationHeader) {
        this.domain = "https://console.cloud-elements.com/elements/api-v2";
        this.authorizationHeader = null;
        if (baseUrl) {
            this.domain = baseUrl + "/elements/api-v2";
        }
        if (authorizationHeader) {
            this.authorizationHeader = authorizationHeader;
        }
    }
    platformSDK.prototype.getDomain = function () {
        return this.domain;
    };
    /**
     * Perform a POST to the given path
     * @method
     * @name platformSDK#post
     * @param {string} path
     */
    platformSDK.prototype.post = function (path) {
        return new platformSDKMethodParameters(this, 'post', path);
    };
    /**
     * Perform a PUT to the given path
     * @method
     * @name platformSDK#put
     * @param {string} path
     */
    platformSDK.prototype.put = function (path) {
        return new platformSDKMethodParameters(this, 'put', path);
    };
    /**
     * Perform a PATCH to the given path
     * @method
     * @name platformSDK#patch
     * @param {string} path
     */
    platformSDK.prototype.patch = function (path) {
        return new platformSDKMethodParameters(this, 'patch', path);
    };
    /**
     * Perform a DELETE to the given path
     * @method
     * @name platformSDK#delete
     * @param {string} path
     */
    platformSDK.prototype["delete"] = function (path) {
        return new platformSDKMethodParameters(this, 'delete', path);
    };
    /**
     * Perform a GET to the given path
     * @method
     * @name platformSDK#get
     * @param {string} path
     */
    platformSDK.prototype.get = function (path) {
        return new platformSDKMethodParameters(this, 'get', path);
    };
    /**
     * Retrieve accounts (identified by your organization secret). The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#getAccounts
     * @return { getAccountsParameters } To allow chaining
     */
    platformSDK.prototype.getAccounts = function () {
        return new getAccountsParameters(this, 'GET', '/accounts');
    };
    /**
     * Create a sub-account (identified by your organization secret). The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#createAccount
     * @param {} body - The account to create<br/><br/>The required fields are:<br/><ul><li><b>externalId</b> - An external account identifier, typically an email address</li></ul><br/>Optional fields are:<br/><ul><li><b>name</b> - The name of the account</li><li><b>description</b> - A description of the account</li></ul><br/>Upon success, the created object will be returned.
     * @return { createAccountParameters } To allow chaining
     */
    platformSDK.prototype.createAccount = function (body) {
        return new createAccountParameters(this, 'POST', '/accounts', body);
    };
    /**
     * Finds all instances for the default users' account
     * @method
     * @name platformSDK#getAccountsInstances
     * @return { getAccountsInstancesParameters } To allow chaining
     */
    platformSDK.prototype.getAccountsInstances = function () {
        return new getAccountsInstancesParameters(this, 'GET', '/accounts/instances');
    };
    /**
     * Delete all object definitions within the default users' account.  If no object definitions exist then this will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsDefinitions
     * @return { deleteAccountsObjectsDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.deleteAccountsObjectsDefinitions = function () {
        return new deleteAccountsObjectsDefinitionsParameters(this, 'DELETE', '/accounts/objects/definitions');
    };
    /**
     * Retrieve all of the object definitions within the users' default account.  Specifying an object definition that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsDefinitions
     * @return { getAccountsObjectsDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.getAccountsObjectsDefinitions = function () {
        return new getAccountsObjectsDefinitionsParameters(this, 'GET', '/accounts/objects/definitions');
    };
    /**
     * Create multiple object definitions within this users' default account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectDefinition
     * @param {} body - The object definitions to create
     * @return { createAccountObjectDefinitionParameters } To allow chaining
     */
    platformSDK.prototype.createAccountObjectDefinition = function (body) {
        return new createAccountObjectDefinitionParameters(this, 'POST', '/accounts/objects/definitions', body);
    };
    /**
     * Delete an object definition associated with an objectName within the default users' account.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { deleteAccountsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.deleteAccountsObjectsObjectNameDefinitions = function (objectName) {
        return new deleteAccountsObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/accounts/objects/{objectName}/definitions', objectName);
    };
    /**
     * Retrieve a specific object definition associated with an objectName within the default users' account.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { getAccountsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.getAccountsObjectsObjectNameDefinitions = function (objectName) {
        return new getAccountsObjectsObjectNameDefinitionsParameters(this, 'GET', '/accounts/objects/{objectName}/definitions', objectName);
    };
    /**
     * Create a new object definition associated with an objectName within the users' default account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { createAccountObjectObjectNameDefinitionParameters } To allow chaining
     */
    platformSDK.prototype.createAccountObjectObjectNameDefinition = function (objectName, body) {
        return new createAccountObjectObjectNameDefinitionParameters(this, 'POST', '/accounts/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * Update a specific object's definition associated with an objectName within the default users' account. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { replaceAccountsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.replaceAccountsObjectsObjectNameDefinitions = function (objectName, body) {
        return new replaceAccountsObjectsObjectNameDefinitionsParameters(this, 'PUT', '/accounts/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * List formula instances for an account by formula ID
     * @method
     * @name platformSDK#getAccountsFormulasInstances
     * @param {integer} accountId - The account ID
     * @param {integer} formulaId - The formula ID
     * @return { getAccountsFormulasInstancesParameters } To allow chaining
     */
    platformSDK.prototype.getAccountsFormulasInstances = function (accountId, formulaId) {
        return new getAccountsFormulasInstancesParameters(this, 'GET', '/accounts/{accountId}/formulas/{formulaId}/instances', accountId, formulaId);
    };
    /**
     * Delete an account by ID. The provided user secret must be that of the default admin user for the organization or customer. WARNING: Deleting an account will delete all users contained within that account along with all of those users' element and formula instances'.
     * @method
     * @name platformSDK#deleteAccountById
     * @param {integer} id - The ID of the account
     * @return { deleteAccountByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteAccountById = function (id) {
        return new deleteAccountByIdParameters(this, 'DELETE', '/accounts/{id}', id);
    };
    /**
     * Retrieve an account by ID. The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#getAccountById
     * @param {integer} id - The ID of the account
     * @return { getAccountByIdParameters } To allow chaining
     */
    platformSDK.prototype.getAccountById = function (id) {
        return new getAccountByIdParameters(this, 'GET', '/accounts/{id}', id);
    };
    /**
     * Update an account (identified by your organization secret). The provided user secret must be that of the admin user for the organization. WARNING: If updating the 'active' field to false, the scheduled jobs for all of the account's users will be deleted.
     * @method
     * @name platformSDK#updateAccountById
     * @param {integer} id - The ID of the account
     * @param {} body - The updated account information<br/><br/>The fields that can be updated are:<br/><ul><li><b>externalId</b> - An external account identifier, typically an email address</li><li><b>name</b> - The name of the account</li><li><b>description</b> - A description of the account</li></ul><br/>Upon success, the updated object will be returned.
     * @return { updateAccountByIdParameters } To allow chaining
     */
    platformSDK.prototype.updateAccountById = function (id, body) {
        return new updateAccountByIdParameters(this, 'PATCH', '/accounts/{id}', id, body);
    };
    /**
     * Replace the data for an account by ID. The provided user secret must be that of the admin user for the organization or customer. WARNING: If updating the 'active' field to false, the scheduled jobs for all of the account's users will be deleted.
     * @method
     * @name platformSDK#replaceAccountById
     * @param {integer} id - The ID of the account
     * @param {} body - The updated account information.
     * @return { replaceAccountByIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceAccountById = function (id, body) {
        return new replaceAccountByIdParameters(this, 'PUT', '/accounts/{id}', id, body);
    };
    /**
     * Delete the default transformation for all elements of a certain type for this account.
     * @method
     * @name platformSDK#deleteAccountsElementsTransformations
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @return { deleteAccountsElementsTransformationsParameters } To allow chaining
     */
    platformSDK.prototype.deleteAccountsElementsTransformations = function (id, keyOrId) {
        return new deleteAccountsElementsTransformationsParameters(this, 'DELETE', '/accounts/{id}/elements/{keyOrId}/transformations', id, keyOrId);
    };
    /**
     * Retrieve the default transformation for all elements of a certain type for this account.
     * @method
     * @name platformSDK#getAccountsElementsTransformations
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @return { getAccountsElementsTransformationsParameters } To allow chaining
     */
    platformSDK.prototype.getAccountsElementsTransformations = function (id, keyOrId) {
        return new getAccountsElementsTransformationsParameters(this, 'GET', '/accounts/{id}/elements/{keyOrId}/transformations', id, keyOrId);
    };
    /**
     * Delete the default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#deleteAccountsElementsTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The object name
     * @return { deleteAccountsElementsTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.deleteAccountsElementsTransformationByObjectName = function (id, keyOrId, objectName) {
        return new deleteAccountsElementsTransformationByObjectNameParameters(this, 'DELETE', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName);
    };
    /**
     * Retrieve the default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#getAccountsElementsTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @return { getAccountsElementsTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.getAccountsElementsTransformationByObjectName = function (id, keyOrId, objectName) {
        return new getAccountsElementsTransformationByObjectNameParameters(this, 'GET', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName);
    };
    /**
     * Create a default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#createAccountElementTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     * @return { createAccountElementTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.createAccountElementTransformationByObjectName = function (id, keyOrId, objectName, transformation) {
        return new createAccountElementTransformationByObjectNameParameters(this, 'POST', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName, transformation);
    };
    /**
     * Update the default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#replaceAccountsElementsTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     * @return { replaceAccountsElementsTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.replaceAccountsElementsTransformationByObjectName = function (id, keyOrId, objectName, transformation) {
        return new replaceAccountsElementsTransformationByObjectNameParameters(this, 'PUT', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName, transformation);
    };
    /**
     * Finds all instances for the specified account
     * @method
     * @name platformSDK#getAccountsInstances2
     * @param {integer} id - The ID of the account
     * @return { getAccountsInstances2Parameters } To allow chaining
     */
    platformSDK.prototype.getAccountsInstances2 = function (id) {
        return new getAccountsInstances2Parameters(this, 'GET', '/accounts/{id}/instances', id);
    };
    /**
     * Delete all object definitions within a specific account.  If no object definitions exist then this will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsDefinitions2
     * @param {integer} id - The ID of the account
     * @return { deleteAccountsObjectsDefinitions2Parameters } To allow chaining
     */
    platformSDK.prototype.deleteAccountsObjectsDefinitions2 = function (id) {
        return new deleteAccountsObjectsDefinitions2Parameters(this, 'DELETE', '/accounts/{id}/objects/definitions', id);
    };
    /**
     * Retrieve all of the object definitions within a specific account.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsDefinitions2
     * @param {integer} id - The ID of the account
     * @return { getAccountsObjectsDefinitions2Parameters } To allow chaining
     */
    platformSDK.prototype.getAccountsObjectsDefinitions2 = function (id) {
        return new getAccountsObjectsDefinitions2Parameters(this, 'GET', '/accounts/{id}/objects/definitions', id);
    };
    /**
     * Create multiple object definitions for a specific account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectDefinition2
     * @param {integer} id - The ID of the account
     * @param {} body - The object definitions to create
     * @return { createAccountObjectDefinition2Parameters } To allow chaining
     */
    platformSDK.prototype.createAccountObjectDefinition2 = function (id, body) {
        return new createAccountObjectDefinition2Parameters(this, 'POST', '/accounts/{id}/objects/definitions', id, body);
    };
    /**
     * Delete an object definition associated with an objectName for a specific account.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @return { deleteAccountsObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    platformSDK.prototype.deleteAccountsObjectsObjectNameDefinitions2 = function (id, objectName) {
        return new deleteAccountsObjectsObjectNameDefinitions2Parameters(this, 'DELETE', '/accounts/{id}/objects/{objectName}/definitions', id, objectName);
    };
    /**
     * Retrieve a specific object definition associated with an objectName within a specific account.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @return { getAccountsObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    platformSDK.prototype.getAccountsObjectsObjectNameDefinitions2 = function (id, objectName) {
        return new getAccountsObjectsObjectNameDefinitions2Parameters(this, 'GET', '/accounts/{id}/objects/{objectName}/definitions', id, objectName);
    };
    /**
     * Create a new object definition associated with an objectName within a specific account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectObjectNameDefinition2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { createAccountObjectObjectNameDefinition2Parameters } To allow chaining
     */
    platformSDK.prototype.createAccountObjectObjectNameDefinition2 = function (id, objectName, body) {
        return new createAccountObjectObjectNameDefinition2Parameters(this, 'POST', '/accounts/{id}/objects/{objectName}/definitions', id, objectName, body);
    };
    /**
     * Update a specific object's definition associated with an objectName within a specific account. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { replaceAccountsObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    platformSDK.prototype.replaceAccountsObjectsObjectNameDefinitions2 = function (id, objectName, body) {
        return new replaceAccountsObjectsObjectNameDefinitions2Parameters(this, 'PUT', '/accounts/{id}/objects/{objectName}/definitions', id, objectName, body);
    };
    /**
     * Find users within an account associated by an ID.  Specifying a user within an account associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsUsers
     * @param {integer} id - The ID of the account
     * @return { getAccountsUsersParameters } To allow chaining
     */
    platformSDK.prototype.getAccountsUsers = function (id) {
        return new getAccountsUsersParameters(this, 'GET', '/accounts/{id}/users', id);
    };
    /**
     * Create a user within an account associated by an ID.
     * @method
     * @name platformSDK#createAccountUser
     * @param {integer} id - The ID of the account under which the user should be created
     * @param {} body - The user to create<br/><br/>The required fields are:<br/><ul><li><b>email</b> - The user's email address</li><li><b>firstName</b> - The user's first name</li><li><b>lastName</b> - The user's last name</li></ul><br/>Upon success, the created object will be returned.
     * @return { createAccountUserParameters } To allow chaining
     */
    platformSDK.prototype.createAccountUser = function (id, body) {
        return new createAccountUserParameters(this, 'POST', '/accounts/{id}/users', id, body);
    };
    /**
     * Retrieve an account user by name or ID within an account associated by an ID.  Specifying a user associated with a given emailOrID or account associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsUserByEmailOrId
     * @param {integer} id - The ID of the account
     * @param {string} emailOrId - The email address or numeric ID of the user
     * @return { getAccountsUserByEmailOrIdParameters } To allow chaining
     */
    platformSDK.prototype.getAccountsUserByEmailOrId = function (id, emailOrId) {
        return new getAccountsUserByEmailOrIdParameters(this, 'GET', '/accounts/{id}/users/{emailOrId}', id, emailOrId);
    };
    /**
     * Update an account user by ID within an account associated by an ID. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#updateAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     * @param {} body - The updated user information
     * @return { updateAccountsUserByUserIdParameters } To allow chaining
     */
    platformSDK.prototype.updateAccountsUserByUserId = function (id, userId, body) {
        return new updateAccountsUserByUserIdParameters(this, 'PATCH', '/accounts/{id}/users/{userId}', id, userId, body);
    };
    /**
     * Replace the data for an account user by ID within an account associated by an ID. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#replaceAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     * @param {} body - The updated user information
     * @return { replaceAccountsUserByUserIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceAccountsUserByUserId = function (id, userId, body) {
        return new replaceAccountsUserByUserIdParameters(this, 'PUT', '/accounts/{id}/users/{userId}', id, userId, body);
    };
    /**
     * Delete an account user by ID within an account associated by an ID. WARNING: this action will irreversibly delete all jobs, and formula and element instances associated with the user.
     * @method
     * @name platformSDK#deleteAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     * @return { deleteAccountsUserByUserIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteAccountsUserByUserId = function (id, userId) {
        return new deleteAccountsUserByUserIdParameters(this, 'DELETE', '/accounts/{id}/users/{userId}', id, userId);
    };
    /**
     * Retrieve a list of logged API requests that identify the request, the user who made the request, the time that they made the request, and more.
     * @method
     * @name platformSDK#getAuditLogs
     * @return { getAuditLogsParameters } To allow chaining
     */
    platformSDK.prototype.getAuditLogs = function () {
        return new getAuditLogsParameters(this, 'GET', '/audit-logs');
    };
    /**
     * Retrieve a list of logged authentication API requests.
     * @method
     * @name platformSDK#getAuditLogsAuthentication
     * @return { getAuditLogsAuthenticationParameters } To allow chaining
     */
    platformSDK.prototype.getAuditLogsAuthentication = function () {
        return new getAuditLogsAuthenticationParameters(this, 'GET', '/audit-logs/authentication');
    };
    /**
     * Retrieve a list of logged common resource and transformations API requests.
     * @method
     * @name platformSDK#getAuditLogsCommonResources
     * @return { getAuditLogsCommonResourcesParameters } To allow chaining
     */
    platformSDK.prototype.getAuditLogsCommonResources = function () {
        return new getAuditLogsCommonResourcesParameters(this, 'GET', '/audit-logs/common-resources');
    };
    /**
     * Retrieve a list of logged common resource and transformations API requests by the name of the common resource.
     * @method
     * @name platformSDK#getAuditLogsCommonResourceByCommonResourceName
     * @param {string} commonResourceName - The unique name of the common resource you want to retrieve.
     * @return { getAuditLogsCommonResourceByCommonResourceNameParameters } To allow chaining
     */
    platformSDK.prototype.getAuditLogsCommonResourceByCommonResourceName = function (commonResourceName) {
        return new getAuditLogsCommonResourceByCommonResourceNameParameters(this, 'GET', '/audit-logs/common-resources/{commonResourceName}', commonResourceName);
    };
    /**
     * Retrieve a list of logged element instance API requests.
     * @method
     * @name platformSDK#getAuditLogsElementInstances
     * @return { getAuditLogsElementInstancesParameters } To allow chaining
     */
    platformSDK.prototype.getAuditLogsElementInstances = function () {
        return new getAuditLogsElementInstancesParameters(this, 'GET', '/audit-logs/element-instances');
    };
    /**
     * Retrieve a list of logged element instance API requests by element instance ID.
     * @method
     * @name platformSDK#getAuditLogsElementInstanceByElementInstanceId
     * @param {string} elementInstanceId - The unique id of the element instance that you want to retrieve.
     * @return { getAuditLogsElementInstanceByElementInstanceIdParameters } To allow chaining
     */
    platformSDK.prototype.getAuditLogsElementInstanceByElementInstanceId = function (elementInstanceId) {
        return new getAuditLogsElementInstanceByElementInstanceIdParameters(this, 'GET', '/audit-logs/element-instances/{elementInstanceId}', elementInstanceId);
    };
    /**
     * Retrieve a list of logged element API requests. Requests include element creation and element extension requests.
     * @method
     * @name platformSDK#getAuditLogsElements
     * @return { getAuditLogsElementsParameters } To allow chaining
     */
    platformSDK.prototype.getAuditLogsElements = function () {
        return new getAuditLogsElementsParameters(this, 'GET', '/audit-logs/elements');
    };
    /**
     * Retrieve a list of logged element API requests by element ID.
     * @method
     * @name platformSDK#getAuditLogsElementByElementId
     * @param {string} elementId - The unique id of the element you want to retrieve.
     * @return { getAuditLogsElementByElementIdParameters } To allow chaining
     */
    platformSDK.prototype.getAuditLogsElementByElementId = function (elementId) {
        return new getAuditLogsElementByElementIdParameters(this, 'GET', '/audit-logs/elements/{elementId}', elementId);
    };
    /**
     * Retrieve a list of logged formula instance API requests.
     * @method
     * @name platformSDK#getAuditLogsFormulaInstances
     * @return { getAuditLogsFormulaInstancesParameters } To allow chaining
     */
    platformSDK.prototype.getAuditLogsFormulaInstances = function () {
        return new getAuditLogsFormulaInstancesParameters(this, 'GET', '/audit-logs/formula-instances');
    };
    /**
     * Retrieve a list of logged formula template API requests.
     * @method
     * @name platformSDK#getAuditLogsFormulas
     * @return { getAuditLogsFormulasParameters } To allow chaining
     */
    platformSDK.prototype.getAuditLogsFormulas = function () {
        return new getAuditLogsFormulasParameters(this, 'GET', '/audit-logs/formulas');
    };
    /**
     * Retrieve a list of logged formula template API requests by the Entity ID associated with the object affected. Entity IDs include step ids, trigger ids, and configuration ids.
     * @method
     * @name platformSDK#getAuditLogsFormulaByEntityId
     * @param {string} entityId - The unique entity id of the user that you want to retrieve.
     * @return { getAuditLogsFormulaByEntityIdParameters } To allow chaining
     */
    platformSDK.prototype.getAuditLogsFormulaByEntityId = function (entityId) {
        return new getAuditLogsFormulaByEntityIdParameters(this, 'GET', '/audit-logs/formulas/{entityId}', entityId);
    };
    /**
     * Reset the user's password.
     * @method
     * @name platformSDK#createAuthenticationPassword
     * @param {} passwordReset - The new password.
     * @return { createAuthenticationPasswordParameters } To allow chaining
     */
    platformSDK.prototype.createAuthenticationPassword = function (passwordReset) {
        return new createAuthenticationPasswordParameters(this, 'POST', '/authentication/passwords', passwordReset);
    };
    /**
     * Create a new identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createCustomerIdentityProvider
     * @param {} identityProvider - The identity provider data
     * @return { createCustomerIdentityProviderParameters } To allow chaining
     */
    platformSDK.prototype.createCustomerIdentityProvider = function (identityProvider) {
        return new createCustomerIdentityProviderParameters(this, 'POST', '/customers/identity-providers', identityProvider);
    };
    /**
     * Get all of the identity providers within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersIdentityProviders
     * @return { getCustomersIdentityProvidersParameters } To allow chaining
     */
    platformSDK.prototype.getCustomersIdentityProviders = function () {
        return new getCustomersIdentityProvidersParameters(this, 'GET', '/customers/identity-providers');
    };
    /**
     * Get a specific identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersIdentityProviderById
     * @param {string} id - The ID of the identity provider record
     * @return { getCustomersIdentityProviderByIdParameters } To allow chaining
     */
    platformSDK.prototype.getCustomersIdentityProviderById = function (id) {
        return new getCustomersIdentityProviderByIdParameters(this, 'GET', '/customers/identity-providers/{id}', id);
    };
    /**
     * Delete an identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#deleteCustomersIdentityProviderById
     * @param {string} id - The ID of the identity provider record
     * @return { deleteCustomersIdentityProviderByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteCustomersIdentityProviderById = function (id) {
        return new deleteCustomersIdentityProviderByIdParameters(this, 'DELETE', '/customers/identity-providers/{id}', id);
    };
    /**
     * Get details of the current user's customer.
     * @method
     * @name platformSDK#getCustomersMe
     * @return { getCustomersMeParameters } To allow chaining
     */
    platformSDK.prototype.getCustomersMe = function () {
        return new getCustomersMeParameters(this, 'GET', '/customers/me');
    };
    /**
     * Get all of the organizations for the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersOrganizations
     * @return { getCustomersOrganizationsParameters } To allow chaining
     */
    platformSDK.prototype.getCustomersOrganizations = function () {
        return new getCustomersOrganizationsParameters(this, 'GET', '/customers/organizations');
    };
    /**
     * Get a specific organization within the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersOrganizationById
     * @param {integer} id - The ID of the organization
     * @return { getCustomersOrganizationByIdParameters } To allow chaining
     */
    platformSDK.prototype.getCustomersOrganizationById = function (id) {
        return new getCustomersOrganizationByIdParameters(this, 'GET', '/customers/organizations/{id}', id);
    };
    /**
     * Delete a specific organization within the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#deleteCustomersOrganizationById
     * @param {integer} id - The ID of the organization
     * @return { deleteCustomersOrganizationByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteCustomersOrganizationById = function (id) {
        return new deleteCustomersOrganizationByIdParameters(this, 'DELETE', '/customers/organizations/{id}', id);
    };
    /**
     * Create a new user within a customer. The organization and account will also be created, if existing IDs are not provided. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createCustomerSignup
     * @param {} customerSignup - The customer sign up data
     * @return { createCustomerSignupParameters } To allow chaining
     */
    platformSDK.prototype.createCustomerSignup = function (customerSignup) {
        return new createCustomerSignupParameters(this, 'POST', '/customers/signup', customerSignup);
    };
    /**
     * Create a new element.
     * @method
     * @name platformSDK#createElement
     * @param {} element - The element
     * @return { createElementParameters } To allow chaining
     */
    platformSDK.prototype.createElement = function (element) {
        return new createElementParameters(this, 'POST', '/elements', element);
    };
    /**
     * Retrieve all available elements keys.
     * @method
     * @name platformSDK#getElementsKeys
     * @return { getElementsKeysParameters } To allow chaining
     */
    platformSDK.prototype.getElementsKeys = function () {
        return new getElementsKeysParameters(this, 'GET', '/elements/keys');
    };
    /**
     * Swagger 2.0 schema for the element.
     * @method
     * @name platformSDK#getElementsDocs
     * @param {string} id - The ID of the element
     * @return { getElementsDocsParameters } To allow chaining
     */
    platformSDK.prototype.getElementsDocs = function (id) {
        return new getElementsDocsParameters(this, 'GET', '/elements/{id}/docs', id);
    };
    /**
     * Retrieve the metadata for the specified element.
     * @method
     * @name platformSDK#getElementsMetadata
     * @param {integer} id - The element ID
     * @return { getElementsMetadataParameters } To allow chaining
     */
    platformSDK.prototype.getElementsMetadata = function (id) {
        return new getElementsMetadataParameters(this, 'GET', '/elements/{id}/metadata', id);
    };
    /**
     * Get swagger docs for an object.
     * @method
     * @name platformSDK#getElementsObjectsObjectNameDocs
     * @param {integer} id - The ID of the element
     * @param {string} objectName - The name of the object
     * @return { getElementsObjectsObjectNameDocsParameters } To allow chaining
     */
    platformSDK.prototype.getElementsObjectsObjectNameDocs = function (id, objectName) {
        return new getElementsObjectsObjectNameDocsParameters(this, 'GET', '/elements/{id}/objects/{objectName}/docs', id, objectName);
    };
    /**
     * Retrieve the swagger docs operations for the specified element.
     * @method
     * @name platformSDK#getElementsOperations
     * @param {integer} id - The element ID
     * @return { getElementsOperationsParameters } To allow chaining
     */
    platformSDK.prototype.getElementsOperations = function (id) {
        return new getElementsOperationsParameters(this, 'GET', '/elements/{id}/operations', id);
    };
    /**
     * Retrieve an operation specific swagger documentation for an element
     * @method
     * @name platformSDK#getElementsOperationsDocs
     * @param {integer} id - The ID of the element
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     * @return { getElementsOperationsDocsParameters } To allow chaining
     */
    platformSDK.prototype.getElementsOperationsDocs = function (id, operationId) {
        return new getElementsOperationsDocsParameters(this, 'GET', '/elements/{id}/operations/{operationId}/docs', id, operationId);
    };
    /**
     * Swagger 2.0 schema for the element.
     * @method
     * @name platformSDK#getElementsVersions
     * @param {string} id - The ID of the element
     * @return { getElementsVersionsParameters } To allow chaining
     */
    platformSDK.prototype.getElementsVersions = function (id) {
        return new getElementsVersionsParameters(this, 'GET', '/elements/{id}/versions', id);
    };
    /**
     * Delete an element.
     * @method
     * @name platformSDK#deleteElementByKeyOrId
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { deleteElementByKeyOrIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementByKeyOrId = function (keyOrId) {
        return new deleteElementByKeyOrIdParameters(this, 'DELETE', '/elements/{keyOrId}', keyOrId);
    };
    /**
     * Update an element associated with an element key.
     * @method
     * @name platformSDK#replaceElementByKeyOrId
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} element - The element
     * @return { replaceElementByKeyOrIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceElementByKeyOrId = function (keyOrId, element) {
        return new replaceElementByKeyOrIdParameters(this, 'PUT', '/elements/{keyOrId}', keyOrId, element);
    };
    /**
     * De-activate an element, which will remove it from your elements catalog.
     * @method
     * @name platformSDK#deleteElementsActive
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { deleteElementsActiveParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementsActive = function (keyOrId) {
        return new deleteElementsActiveParameters(this, 'DELETE', '/elements/{keyOrId}/active', keyOrId);
    };
    /**
     * Activate an element to publish it in your elements catalog.
     * @method
     * @name platformSDK#replaceElementsActive
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { replaceElementsActiveParameters } To allow chaining
     */
    platformSDK.prototype.replaceElementsActive = function (keyOrId) {
        return new replaceElementsActiveParameters(this, 'PUT', '/elements/{keyOrId}/active', keyOrId);
    };
    /**
     * Clone an element
     * @method
     * @name platformSDK#createElementClone
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { createElementCloneParameters } To allow chaining
     */
    platformSDK.prototype.createElementClone = function (keyOrId) {
        return new createElementCloneParameters(this, 'POST', '/elements/{keyOrId}/clone', keyOrId);
    };
    /**
     * Retrieve a specific element configuration associated with an element key.  Specifying an element associated with an element key that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsConfiguration
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { getElementsConfigurationParameters } To allow chaining
     */
    platformSDK.prototype.getElementsConfiguration = function (keyOrId) {
        return new getElementsConfigurationParameters(this, 'GET', '/elements/{keyOrId}/configuration', keyOrId);
    };
    /**
     * Create a new configuration value for an element
     * @method
     * @name platformSDK#createElementConfiguration
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} configuration - The configuration to create
     * @return { createElementConfigurationParameters } To allow chaining
     */
    platformSDK.prototype.createElementConfiguration = function (keyOrId, configuration) {
        return new createElementConfigurationParameters(this, 'POST', '/elements/{keyOrId}/configuration', keyOrId, configuration);
    };
    /**
     * Delete a configuration value for an element
     * @method
     * @name platformSDK#deleteElementsConfigurationByConfigurationKey
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} configurationKey - The configuration key
     * @return { deleteElementsConfigurationByConfigurationKeyParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementsConfigurationByConfigurationKey = function (keyOrId, configurationKey) {
        return new deleteElementsConfigurationByConfigurationKeyParameters(this, 'DELETE', '/elements/{keyOrId}/configuration/{configurationKey}', keyOrId, configurationKey);
    };
    /**
     * Update an existing configuration value for an element
     * @method
     * @name platformSDK#replaceElementsConfigurationByConfigurationKey
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} configurationKey - The configuration key
     * @param {} configuration - The configuration object
     * @return { replaceElementsConfigurationByConfigurationKeyParameters } To allow chaining
     */
    platformSDK.prototype.replaceElementsConfigurationByConfigurationKey = function (keyOrId, configurationKey, configuration) {
        return new replaceElementsConfigurationByConfigurationKeyParameters(this, 'PUT', '/elements/{keyOrId}/configuration/{configurationKey}', keyOrId, configurationKey, configuration);
    };
    /**
     * Downloads a specific element JSON data in a file associated with an element key. Specifying an element associated with an element key that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsExport
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { getElementsExportParameters } To allow chaining
     */
    platformSDK.prototype.getElementsExport = function (keyOrId) {
        return new getElementsExportParameters(this, 'GET', '/elements/{keyOrId}/export', keyOrId);
    };
    /**
     * Retrieve the hooks that exists for a element
     * @method
     * @name platformSDK#getElementsHooks
     * @param {string} keyOrId - The element key
     * @return { getElementsHooksParameters } To allow chaining
     */
    platformSDK.prototype.getElementsHooks = function (keyOrId) {
        return new getElementsHooksParameters(this, 'GET', '/elements/{keyOrId}/hooks', keyOrId);
    };
    /**
     * Create a new hook for a element
     * @method
     * @name platformSDK#createElementHook
     * @param {string} keyOrId - The element key
     * @param {} model - The element Hook
     * @return { createElementHookParameters } To allow chaining
     */
    platformSDK.prototype.createElementHook = function (keyOrId, model) {
        return new createElementHookParameters(this, 'POST', '/elements/{keyOrId}/hooks', keyOrId, model);
    };
    /**
     * Get an existing hook for an custom element
     * @method
     * @name platformSDK#getElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The Hook ID
     * @return { getElementsHookByHookIdParameters } To allow chaining
     */
    platformSDK.prototype.getElementsHookByHookId = function (keyOrId, hookId) {
        return new getElementsHookByHookIdParameters(this, 'GET', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId);
    };
    /**
     * Delete one of the hooks for a element
     * @method
     * @name platformSDK#deleteElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The hook ID
     * @return { deleteElementsHookByHookIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementsHookByHookId = function (keyOrId, hookId) {
        return new deleteElementsHookByHookIdParameters(this, 'DELETE', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId);
    };
    /**
     * Update an existing Hook for an element
     * @method
     * @name platformSDK#replaceElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The hook ID
     * @param {} parameter - The hook
     * @return { replaceElementsHookByHookIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceElementsHookByHookId = function (keyOrId, hookId, parameter) {
        return new replaceElementsHookByHookIdParameters(this, 'PUT', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId, parameter);
    };
    /**
     * Retrieve all element instances from a specified path.  The instances go through Cloud Elements to your console.  Specifying an instance that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsInstances
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { getElementsInstancesParameters } To allow chaining
     */
    platformSDK.prototype.getElementsInstances = function (keyOrId) {
        return new getElementsInstancesParameters(this, 'GET', '/elements/{keyOrId}/instances', keyOrId);
    };
    /**
     * Create a new element instance in your console.  Instance creation will flow through Cloud Elements to your console.
     * @method
     * @name platformSDK#createElementInstance
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} elementInstance - The element instance to create
     * @return { createElementInstanceParameters } To allow chaining
     */
    platformSDK.prototype.createElementInstance = function (keyOrId, elementInstance) {
        return new createElementInstanceParameters(this, 'POST', '/elements/{keyOrId}/instances', keyOrId, elementInstance);
    };
    /**
     * Delete an instance associated with a given ID from your console. Specifying an instance associated with a given ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     * @return { deleteElementsInstanceByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementsInstanceById = function (keyOrId, id) {
        return new deleteElementsInstanceByIdParameters(this, 'DELETE', '/elements/{keyOrId}/instances/{id}', keyOrId, id);
    };
    /**
     * Retrieve an element instance associated with a given ID from a specified path.  The instance goes through Cloud Elements to your console.  Specifying an instance with an associated ID that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     * @return { getElementsInstanceByIdParameters } To allow chaining
     */
    platformSDK.prototype.getElementsInstanceById = function (keyOrId, id) {
        return new getElementsInstanceByIdParameters(this, 'GET', '/elements/{keyOrId}/instances/{id}', keyOrId, id);
    };
    /**
     * Update an instance associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     * @return { replaceElementsInstanceByIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceElementsInstanceById = function (keyOrId, id, elementInstance) {
        return new replaceElementsInstanceByIdParameters(this, 'PUT', '/elements/{keyOrId}/instances/{id}', keyOrId, id, elementInstance);
    };
    /**
     * Retrieve the OAuth 1 request token.  Not applicable with OAuth 2 Elements.
     * @method
     * @name platformSDK#getElementsOauthToken
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} apiKey - The OAuth API key
     * @param {string} apiSecret - The OAuth API secret
     * @param {string} callbackUrl - The OAuth callback URL
     * @return { getElementsOauthTokenParameters } To allow chaining
     */
    platformSDK.prototype.getElementsOauthToken = function (keyOrId, apiKey, apiSecret, callbackUrl) {
        return new getElementsOauthTokenParameters(this, 'GET', '/elements/{keyOrId}/oauth/token', keyOrId, apiKey, apiSecret, callbackUrl);
    };
    /**
     * Retrieve the OAuth 2 redirect URL associated with the specified element.  Specifying an element key associated with an element that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsOauthUrl
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} apiKey - The OAuth API key
     * @param {string} apiSecret - The OAuth API secret (note: For HubSpot, this is the Portal ID.)
     * @param {string} callbackUrl - The OAuth callback URL
     * @return { getElementsOauthUrlParameters } To allow chaining
     */
    platformSDK.prototype.getElementsOauthUrl = function (keyOrId, apiKey, apiSecret, callbackUrl) {
        return new getElementsOauthUrlParameters(this, 'GET', '/elements/{keyOrId}/oauth/url', keyOrId, apiKey, apiSecret, callbackUrl);
    };
    /**
     * Retrieve the OAuth 2 redirect URL associated with the specified element.  Specifying an element key associated with an element that does not exist results in an error response.
     * @method
     * @name platformSDK#createElementOauthUrl
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} oauthInfo - The data for generating the OAuth redirect URL
     * @return { createElementOauthUrlParameters } To allow chaining
     */
    platformSDK.prototype.createElementOauthUrl = function (keyOrId, oauthInfo) {
        return new createElementOauthUrlParameters(this, 'POST', '/elements/{keyOrId}/oauth/url', keyOrId, oauthInfo);
    };
    /**
     * Retrieve all of the objects that exist for a custom element
     * @method
     * @name platformSDK#getElementsObjects
     * @param {string} keyOrId - The element key
     * @return { getElementsObjectsParameters } To allow chaining
     */
    platformSDK.prototype.getElementsObjects = function (keyOrId) {
        return new getElementsObjectsParameters(this, 'GET', '/elements/{keyOrId}/objects', keyOrId);
    };
    /**
     * Create a new object for a element
     * @method
     * @name platformSDK#createElementObject
     * @param {string} keyOrId - The element key
     * @param {} object - The Object
     * @return { createElementObjectParameters } To allow chaining
     */
    platformSDK.prototype.createElementObject = function (keyOrId, object) {
        return new createElementObjectParameters(this, 'POST', '/elements/{keyOrId}/objects', keyOrId, object);
    };
    /**
     * Delete a object for a custom element
     * @method
     * @name platformSDK#deleteElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @return { deleteElementsObjectByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementsObjectById = function (keyOrId, id) {
        return new deleteElementsObjectByIdParameters(this, 'DELETE', '/elements/{keyOrId}/objects/{id}', keyOrId, id);
    };
    /**
     * Update an existing object for an element
     * @method
     * @name platformSDK#replaceElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {} object - The Object
     * @return { replaceElementsObjectByIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceElementsObjectById = function (keyOrId, id, object) {
        return new replaceElementsObjectByIdParameters(this, 'PUT', '/elements/{keyOrId}/objects/{id}', keyOrId, id, object);
    };
    /**
     * Get an existing object for an element
     * @method
     * @name platformSDK#getElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @return { getElementsObjectByIdParameters } To allow chaining
     */
    platformSDK.prototype.getElementsObjectById = function (keyOrId, id) {
        return new getElementsObjectByIdParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}', keyOrId, id);
    };
    /**
     * Create a Field for an element Object
     * @method
     * @name platformSDK#createElementObjectField
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {} field - The Field
     * @return { createElementObjectFieldParameters } To allow chaining
     */
    platformSDK.prototype.createElementObjectField = function (keyOrId, id, field) {
        return new createElementObjectFieldParameters(this, 'POST', '/elements/{keyOrId}/objects/{id}/fields', keyOrId, id, field);
    };
    /**
     * Retrieve all of the fields that exist for a element object
     * @method
     * @name platformSDK#getElementsObjectsFields
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @return { getElementsObjectsFieldsParameters } To allow chaining
     */
    platformSDK.prototype.getElementsObjectsFields = function (keyOrId, id) {
        return new getElementsObjectsFieldsParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}/fields', keyOrId, id);
    };
    /**
     * Delete a field for an element object
     * @method
     * @name platformSDK#deleteElementsObjectsFieldByFieldId
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {string} fieldId - The Field Id
     * @return { deleteElementsObjectsFieldByFieldIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementsObjectsFieldByFieldId = function (keyOrId, id, fieldId) {
        return new deleteElementsObjectsFieldByFieldIdParameters(this, 'DELETE', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId);
    };
    /**
     * Update an existing field for an element object
     * @method
     * @name platformSDK#replaceElementsObjectsFieldByFieldId
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {string} fieldId - The Field Id
     * @param {} object - The Field
     * @return { replaceElementsObjectsFieldByFieldIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceElementsObjectsFieldByFieldId = function (keyOrId, id, fieldId, object) {
        return new replaceElementsObjectsFieldByFieldIdParameters(this, 'PUT', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId, object);
    };
    /**
     * Get an existing field for an element object
     * @method
     * @name platformSDK#getElementsObjectsFieldByFieldId
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {string} fieldId - The Field Id
     * @return { getElementsObjectsFieldByFieldIdParameters } To allow chaining
     */
    platformSDK.prototype.getElementsObjectsFieldByFieldId = function (keyOrId, id, fieldId) {
        return new getElementsObjectsFieldByFieldIdParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId);
    };
    /**
     * Retrieve all of the default parameters for an element
     * @method
     * @name platformSDK#getElementsParameters
     * @param {string} keyOrId - The element key
     * @return { getElementsParametersParameters } To allow chaining
     */
    platformSDK.prototype.getElementsParameters = function (keyOrId) {
        return new getElementsParametersParameters(this, 'GET', '/elements/{keyOrId}/parameters', keyOrId);
    };
    /**
     * Create a new default parameter for an element
     * @method
     * @name platformSDK#createElementParameter
     * @param {string} keyOrId - The element key
     * @param {} parameter - The default parameter
     * @return { createElementParameterParameters } To allow chaining
     */
    platformSDK.prototype.createElementParameter = function (keyOrId, parameter) {
        return new createElementParameterParameters(this, 'POST', '/elements/{keyOrId}/parameters', keyOrId, parameter);
    };
    /**
     * Delete a default parameter for an element
     * @method
     * @name platformSDK#deleteElementsParameterById
     * @param {string} keyOrId - The element key
     * @param {string} id - The ID of the parameter
     * @param {} parameter - The default parameter
     * @return { deleteElementsParameterByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementsParameterById = function (keyOrId, id, parameter) {
        return new deleteElementsParameterByIdParameters(this, 'DELETE', '/elements/{keyOrId}/parameters/{id}', keyOrId, id, parameter);
    };
    /**
     * Update a default parameter for an element
     * @method
     * @name platformSDK#replaceElementsParameterById
     * @param {string} keyOrId - The element key
     * @param {string} id - The ID of the parameter
     * @param {} parameter - The default parameter
     * @return { replaceElementsParameterByIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceElementsParameterById = function (keyOrId, id, parameter) {
        return new replaceElementsParameterByIdParameters(this, 'PUT', '/elements/{keyOrId}/parameters/{id}', keyOrId, id, parameter);
    };
    /**
     * Retrieve all of the resources that exist for a custom element
     * @method
     * @name platformSDK#getElementsResources
     * @param {string} keyOrId - The element key or Id
     * @return { getElementsResourcesParameters } To allow chaining
     */
    platformSDK.prototype.getElementsResources = function (keyOrId) {
        return new getElementsResourcesParameters(this, 'GET', '/elements/{keyOrId}/resources', keyOrId);
    };
    /**
     * Create a new resource for a custom element
     * @method
     * @name platformSDK#createElementResource
     * @param {string} keyOrId - The element key
     * @param {} resource - The resource
     * @return { createElementResourceParameters } To allow chaining
     */
    platformSDK.prototype.createElementResource = function (keyOrId, resource) {
        return new createElementResourceParameters(this, 'POST', '/elements/{keyOrId}/resources', keyOrId, resource);
    };
    /**
     * Delete a resource for a custom element
     * @method
     * @name platformSDK#deleteElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @return { deleteElementsResourceByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementsResourceById = function (keyOrId, id) {
        return new deleteElementsResourceByIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}', keyOrId, id);
    };
    /**
     * Update an existing resource for an element
     * @method
     * @name platformSDK#replaceElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} resource - The resource
     * @return { replaceElementsResourceByIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceElementsResourceById = function (keyOrId, id, resource) {
        return new replaceElementsResourceByIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}', keyOrId, id, resource);
    };
    /**
     * Get an existing resource for an element
     * @method
     * @name platformSDK#getElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @return { getElementsResourceByIdParameters } To allow chaining
     */
    platformSDK.prototype.getElementsResourceById = function (keyOrId, id) {
        return new getElementsResourceByIdParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}', keyOrId, id);
    };
    /**
     * Retrieve the hooks that exists for a custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesHooks
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @return { getElementsResourcesHooksParameters } To allow chaining
     */
    platformSDK.prototype.getElementsResourcesHooks = function (keyOrId, id) {
        return new getElementsResourcesHooksParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/hooks', keyOrId, id);
    };
    /**
     * Create a new hook for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceHook
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} model - The resource Hook
     * @return { createElementResourceHookParameters } To allow chaining
     */
    platformSDK.prototype.createElementResourceHook = function (keyOrId, id, model) {
        return new createElementResourceHookParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/hooks', keyOrId, id, model);
    };
    /**
     * Get an existing hook for an custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} hookId - The Hook ID
     * @return { getElementsResourcesHookByHookIdParameters } To allow chaining
     */
    platformSDK.prototype.getElementsResourcesHookByHookId = function (keyOrId, id, hookId) {
        return new getElementsResourcesHookByHookIdParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId);
    };
    /**
     * Delete one of the hooks for a custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} hookId - The hook ID
     * @return { deleteElementsResourcesHookByHookIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementsResourcesHookByHookId = function (keyOrId, id, hookId) {
        return new deleteElementsResourcesHookByHookIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId);
    };
    /**
     * Update an existing Hook for an element's resource
     * @method
     * @name platformSDK#replaceElementsResourcesHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} hookId - The hook ID
     * @param {} parameter - The hook
     * @return { replaceElementsResourcesHookByHookIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceElementsResourcesHookByHookId = function (keyOrId, id, hookId, parameter) {
        return new replaceElementsResourcesHookByHookIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId, parameter);
    };
    /**
     * Delete the model for this custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesModels
     * @param {string} keyOrId - The element key
     * @param {integer} id - The resource ID
     * @return { deleteElementsResourcesModelsParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementsResourcesModels = function (keyOrId, id) {
        return new deleteElementsResourcesModelsParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id);
    };
    /**
     * Retrieve the models that exists for a custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesModels
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @return { getElementsResourcesModelsParameters } To allow chaining
     */
    platformSDK.prototype.getElementsResourcesModels = function (keyOrId, id) {
        return new getElementsResourcesModelsParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id);
    };
    /**
     * Create a new model for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceModel
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} model - The model
     * @return { createElementResourceModelParameters } To allow chaining
     */
    platformSDK.prototype.createElementResourceModel = function (keyOrId, id, model) {
        return new createElementResourceModelParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id, model);
    };
    /**
     * Retrieve all of the parameters for a resource
     * @method
     * @name platformSDK#getElementsResourcesParameters
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @return { getElementsResourcesParametersParameters } To allow chaining
     */
    platformSDK.prototype.getElementsResourcesParameters = function (keyOrId, id) {
        return new getElementsResourcesParametersParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/parameters', keyOrId, id);
    };
    /**
     * Create a new parameter for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceParameter
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} parameter - The parameter
     * @return { createElementResourceParameterParameters } To allow chaining
     */
    platformSDK.prototype.createElementResourceParameter = function (keyOrId, id, parameter) {
        return new createElementResourceParameterParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/parameters', keyOrId, id, parameter);
    };
    /**
     * Delete one of the parameters for a custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesParameterByParameterId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} parameterId - The parameter ID
     * @return { deleteElementsResourcesParameterByParameterIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteElementsResourcesParameterByParameterId = function (keyOrId, id, parameterId) {
        return new deleteElementsResourcesParameterByParameterIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/parameters/{parameterId}', keyOrId, id, parameterId);
    };
    /**
     * Update an existing parameters for an element's resource
     * @method
     * @name platformSDK#replaceElementsResourcesParameterByParameterId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} parameterId - The parameter ID
     * @param {} parameter - The parameter
     * @return { replaceElementsResourcesParameterByParameterIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceElementsResourcesParameterByParameterId = function (keyOrId, id, parameterId, parameter) {
        return new replaceElementsResourcesParameterByParameterIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}/parameters/{parameterId}', keyOrId, id, parameterId, parameter);
    };
    /**
     * Retrieve a list of all formula templates.
     * @method
     * @name platformSDK#getFormulas
     * @return { getFormulasParameters } To allow chaining
     */
    platformSDK.prototype.getFormulas = function () {
        return new getFormulasParameters(this, 'GET', '/formulas');
    };
    /**
     * Create a new formula template.
     * @method
     * @name platformSDK#createFormula
     * @param {} body - The formula template.
     * @return { createFormulaParameters } To allow chaining
     */
    platformSDK.prototype.createFormula = function (body) {
        return new createFormulaParameters(this, 'POST', '/formulas', body);
    };
    /**
     * Retrieve the number of formula executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalytics
     * @return { getFormulasAnalyticsParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasAnalytics = function () {
        return new getFormulasAnalyticsParameters(this, 'GET', '/formulas/analytics');
    };
    /**
     * Retrieve the status analytics of formula step executions within a given date/time range, aggregated by account ID. This API is really only useful for organization admins where more than one account exists.
     * @method
     * @name platformSDK#getFormulasAnalyticsAccounts
     * @return { getFormulasAnalyticsAccountsParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasAnalyticsAccounts = function () {
        return new getFormulasAnalyticsAccountsParameters(this, 'GET', '/formulas/analytics/accounts');
    };
    /**
     * Retrieve the status analytics of formula step executions within a given date/time range, aggregated by formula instance ID.
     * @method
     * @name platformSDK#getFormulasAnalyticsInstances
     * @return { getFormulasAnalyticsInstancesParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasAnalyticsInstances = function () {
        return new getFormulasAnalyticsInstancesParameters(this, 'GET', '/formulas/analytics/instances');
    };
    /**
     * Retrieve the status analytics of formula executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalyticsStatuses
     * @return { getFormulasAnalyticsStatusesParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasAnalyticsStatuses = function () {
        return new getFormulasAnalyticsStatusesParameters(this, 'GET', '/formulas/analytics/statuses');
    };
    /**
     * Retrieve the current status counts of formula executions. If any executions are in a 'retry' status, a list of those execution IDs will be returned, along with the retry attempt that will be executed next.
     * @method
     * @name platformSDK#getFormulasAnalyticsStatusesNow
     * @return { getFormulasAnalyticsStatusesNowParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasAnalyticsStatusesNow = function () {
        return new getFormulasAnalyticsStatusesNowParameters(this, 'GET', '/formulas/analytics/statuses/now');
    };
    /**
     * Retrieve the analytics (execution time, execution delay, etc.) of formula step executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalyticsSteps
     * @return { getFormulasAnalyticsStepsParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasAnalyticsSteps = function () {
        return new getFormulasAnalyticsStepsParameters(this, 'GET', '/formulas/analytics/steps');
    };
    /**
     * Retrieve all instances of all formula templates.
     * @method
     * @name platformSDK#getFormulasInstances
     * @return { getFormulasInstancesParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstances = function () {
        return new getFormulasInstancesParameters(this, 'GET', '/formulas/instances');
    };
    /**
     * Retrieve all step execution values for a formula step execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsStepsValues
     * @param {integer} stepExecutionId - The ID of the step execution.
     * @return { getFormulasInstancesExecutionsStepsValuesParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstancesExecutionsStepsValues = function (stepExecutionId) {
        return new getFormulasInstancesExecutionsStepsValuesParameters(this, 'GET', '/formulas/instances/executions/steps/{stepExecutionId}/values', stepExecutionId);
    };
    /**
     * Retrieve a formula instance executions.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionByExecutionId
     * @param {integer} executionId - The ID of the formula instance execution.
     * @return { getFormulasInstancesExecutionByExecutionIdParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstancesExecutionByExecutionId = function (executionId) {
        return new getFormulasInstancesExecutionByExecutionIdParameters(this, 'GET', '/formulas/instances/executions/{executionId}', executionId);
    };
    /**
     * Cancel a formula instance execution
     * @method
     * @name platformSDK#updateFormulasInstancesExecutionByExecutionId
     * @param {integer} executionId - The ID of the formula instance execution.
     * @param {} status - The change in status you want to effect, currently only 'cancel' is supported
     * @return { updateFormulasInstancesExecutionByExecutionIdParameters } To allow chaining
     */
    platformSDK.prototype.updateFormulasInstancesExecutionByExecutionId = function (executionId, status) {
        return new updateFormulasInstancesExecutionByExecutionIdParameters(this, 'PATCH', '/formulas/instances/executions/{executionId}', executionId, status);
    };
    /**
     * Retrieve all step execution errors for a formula execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors
     * @param {integer} executionId - The ID of the execution.
     * @return { getFormulasInstancesExecutionsErrorsParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstancesExecutionsErrors = function (executionId) {
        return new getFormulasInstancesExecutionsErrorsParameters(this, 'GET', '/formulas/instances/executions/{executionId}/errors', executionId);
    };
    /**
     * Retrieve all step executions for a formula execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsSteps
     * @param {integer} executionId - The ID of the execution.
     * @return { getFormulasInstancesExecutionsStepsParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstancesExecutionsSteps = function (executionId) {
        return new getFormulasInstancesExecutionsStepsParameters(this, 'GET', '/formulas/instances/executions/{executionId}/steps', executionId);
    };
    /**
     * Retrieve a formula instance.
     * @method
     * @name platformSDK#getFormulasInstanceByInstanceId
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { getFormulasInstanceByInstanceIdParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstanceByInstanceId = function (instanceId) {
        return new getFormulasInstanceByInstanceIdParameters(this, 'GET', '/formulas/instances/{instanceId}', instanceId);
    };
    /**
     * Retrieve all executions for a formula instance.
     * @method
     * @name platformSDK#getFormulasInstancesExecutions
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { getFormulasInstancesExecutionsParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstancesExecutions = function (instanceId) {
        return new getFormulasInstancesExecutionsParameters(this, 'GET', '/formulas/instances/{instanceId}/executions', instanceId);
    };
    /**
     * Manually kickoff a formula instance from the given JSON trigger payload
     * @method
     * @name platformSDK#createFormulaInstanceExecution
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { createFormulaInstanceExecutionParameters } To allow chaining
     */
    platformSDK.prototype.createFormulaInstanceExecution = function (instanceId) {
        return new createFormulaInstanceExecutionParameters(this, 'POST', '/formulas/instances/{instanceId}/executions', instanceId);
    };
    /**
     * Retrieve all executions that have a step execution error, for a formula instance.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors2
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { getFormulasInstancesExecutionsErrors2Parameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstancesExecutionsErrors2 = function (instanceId) {
        return new getFormulasInstancesExecutionsErrors2Parameters(this, 'GET', '/formulas/instances/{instanceId}/executions/errors', instanceId);
    };
    /**
     * Retrieve all executions with a step execution error for all formula instances of a formula.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors2_1
     * @param {integer} formulaId - The ID of the formula.
     * @return { getFormulasInstancesExecutionsErrors2_1Parameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstancesExecutionsErrors2_1 = function (formulaId) {
        return new getFormulasInstancesExecutionsErrors2_1Parameters(this, 'GET', '/formulas/{formulaId}/instances/executions/errors', formulaId);
    };
    /**
     * Delete a specific formula template.
     * @method
     * @name platformSDK#deleteFormulaById
     * @param {integer} id - The ID of the formula template.
     * @return { deleteFormulaByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteFormulaById = function (id) {
        return new deleteFormulaByIdParameters(this, 'DELETE', '/formulas/{id}', id);
    };
    /**
     * Retrieve a specific formula template.
     * @method
     * @name platformSDK#getFormulaById
     * @param {integer} id - The ID of the formula template.
     * @return { getFormulaByIdParameters } To allow chaining
     */
    platformSDK.prototype.getFormulaById = function (id) {
        return new getFormulaByIdParameters(this, 'GET', '/formulas/{id}', id);
    };
    /**
     * Replace a specific formula template with the provided template.
     * @method
     * @name platformSDK#replaceFormulaById
     * @param {integer} id - The ID of the formula template.
     * @param {} formula - The formula template.
     * @return { replaceFormulaByIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceFormulaById = function (id, formula) {
        return new replaceFormulaByIdParameters(this, 'PUT', '/formulas/{id}', id, formula);
    };
    /**
     * Partially update a formula template's metadata.
     * @method
     * @name platformSDK#updateFormulaById
     * @param {integer} id - The ID of the formula template.
     * @param {} formula - The formula template.
     * @return { updateFormulaByIdParameters } To allow chaining
     */
    platformSDK.prototype.updateFormulaById = function (id, formula) {
        return new updateFormulaByIdParameters(this, 'PATCH', '/formulas/{id}', id, formula);
    };
    /**
     * Create a new formula configuration.
     * @method
     * @name platformSDK#createFormulaConfiguration
     * @param {integer} id - The ID of the formula template.
     * @param {} configuration - The formula configuration.
     * @return { createFormulaConfigurationParameters } To allow chaining
     */
    platformSDK.prototype.createFormulaConfiguration = function (id, configuration) {
        return new createFormulaConfigurationParameters(this, 'POST', '/formulas/{id}/configuration', id, configuration);
    };
    /**
     * Delete a formula configuration.
     * @method
     * @name platformSDK#deleteFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     * @return { deleteFormulasConfigurationByConfigurationIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteFormulasConfigurationByConfigurationId = function (id, configurationId) {
        return new deleteFormulasConfigurationByConfigurationIdParameters(this, 'DELETE', '/formulas/{id}/configuration/{configurationId}', id, configurationId);
    };
    /**
     * Retrieve a formula configuration.
     * @method
     * @name platformSDK#getFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     * @return { getFormulasConfigurationByConfigurationIdParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasConfigurationByConfigurationId = function (id, configurationId) {
        return new getFormulasConfigurationByConfigurationIdParameters(this, 'GET', '/formulas/{id}/configuration/{configurationId}', id, configurationId);
    };
    /**
     * Update a formula configuration.
     * @method
     * @name platformSDK#replaceFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     * @param {} configuration - The formula configuration.
     * @return { replaceFormulasConfigurationByConfigurationIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceFormulasConfigurationByConfigurationId = function (id, configurationId, configuration) {
        return new replaceFormulasConfigurationByConfigurationIdParameters(this, 'PUT', '/formulas/{id}/configuration/{configurationId}', id, configurationId, configuration);
    };
    /**
     * Export a formula template as a JSON file.
     * @method
     * @name platformSDK#getFormulasExport
     * @param {integer} id - The ID of the formula template.
     * @return { getFormulasExportParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasExport = function (id) {
        return new getFormulasExportParameters(this, 'GET', '/formulas/{id}/export', id);
    };
    /**
     * Retrieve a list of all instances associated with a particular formula template.
     * @method
     * @name platformSDK#getFormulasInstances2
     * @param {integer} id - The ID of the formula template.
     * @return { getFormulasInstances2Parameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstances2 = function (id) {
        return new getFormulasInstances2Parameters(this, 'GET', '/formulas/{id}/instances', id);
    };
    /**
     * Create an instance of a formula template.
     * @method
     * @name platformSDK#createFormulaInstance
     * @param {integer} id - The ID of the formula template.
     * @param {} formulaInstance - The formula instance.
     * @return { createFormulaInstanceParameters } To allow chaining
     */
    platformSDK.prototype.createFormulaInstance = function (id, formulaInstance) {
        return new createFormulaInstanceParameters(this, 'POST', '/formulas/{id}/instances', id, formulaInstance);
    };
    /**
     * Delete a specific formula instance of a specific formula template.
     * @method
     * @name platformSDK#deleteFormulasInstanceByInstanceId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { deleteFormulasInstanceByInstanceIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteFormulasInstanceByInstanceId = function (id, instanceId) {
        return new deleteFormulasInstanceByInstanceIdParameters(this, 'DELETE', '/formulas/{id}/instances/{instanceId}', id, instanceId);
    };
    /**
     * Retrieve a specific instance of a specific formula template.
     * @method
     * @name platformSDK#getFormulasInstanceByInstanceId2
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { getFormulasInstanceByInstanceId2Parameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstanceByInstanceId2 = function (id, instanceId) {
        return new getFormulasInstanceByInstanceId2Parameters(this, 'GET', '/formulas/{id}/instances/{instanceId}', id, instanceId);
    };
    /**
     * Replace a specific formula instance of a specific formula template with the provided instance.
     * @method
     * @name platformSDK#replaceFormulasInstanceByInstanceId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @param {} formulaInstance - The formula instance.
     * @return { replaceFormulasInstanceByInstanceIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceFormulasInstanceByInstanceId = function (id, instanceId, formulaInstance) {
        return new replaceFormulasInstanceByInstanceIdParameters(this, 'PUT', '/formulas/{id}/instances/{instanceId}', id, instanceId, formulaInstance);
    };
    /**
     * Activate a formula instance.
     * @method
     * @name platformSDK#replaceFormulasInstancesActive
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { replaceFormulasInstancesActiveParameters } To allow chaining
     */
    platformSDK.prototype.replaceFormulasInstancesActive = function (id, instanceId) {
        return new replaceFormulasInstancesActiveParameters(this, 'PUT', '/formulas/{id}/instances/{instanceId}/active', id, instanceId);
    };
    /**
     * Deactivate a formula instance.
     * @method
     * @name platformSDK#deleteFormulasInstancesActive
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { deleteFormulasInstancesActiveParameters } To allow chaining
     */
    platformSDK.prototype.deleteFormulasInstancesActive = function (id, instanceId) {
        return new deleteFormulasInstancesActiveParameters(this, 'DELETE', '/formulas/{id}/instances/{instanceId}/active', id, instanceId);
    };
    /**
     * Retrieve the executions of a specific formula instance of a specific formula template.
     * @method
     * @name platformSDK#getFormulasInstancesExecutions2
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { getFormulasInstancesExecutions2Parameters } To allow chaining
     */
    platformSDK.prototype.getFormulasInstancesExecutions2 = function (id, instanceId) {
        return new getFormulasInstancesExecutions2Parameters(this, 'GET', '/formulas/{id}/instances/{instanceId}/executions', id, instanceId);
    };
    /**
     * Retrieve all formula steps.
     * @method
     * @name platformSDK#getFormulasSteps
     * @param {integer} id - The ID of the formula template.
     * @return { getFormulasStepsParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasSteps = function (id) {
        return new getFormulasStepsParameters(this, 'GET', '/formulas/{id}/steps', id);
    };
    /**
     * Create a new formula step.
     * @method
     * @name platformSDK#createFormulaStep
     * @param {integer} id - The ID of the formula template.
     * @param {} step - The formula step.
     * @return { createFormulaStepParameters } To allow chaining
     */
    platformSDK.prototype.createFormulaStep = function (id, step) {
        return new createFormulaStepParameters(this, 'POST', '/formulas/{id}/steps', id, step);
    };
    /**
     * Delete a formula step.
     * @method
     * @name platformSDK#deleteFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     * @return { deleteFormulasStepByStepIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteFormulasStepByStepId = function (id, stepId) {
        return new deleteFormulasStepByStepIdParameters(this, 'DELETE', '/formulas/{id}/steps/{stepId}', id, stepId);
    };
    /**
     * Retrieve a formula step.
     * @method
     * @name platformSDK#getFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     * @return { getFormulasStepByStepIdParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasStepByStepId = function (id, stepId) {
        return new getFormulasStepByStepIdParameters(this, 'GET', '/formulas/{id}/steps/{stepId}', id, stepId);
    };
    /**
     * Update a formula step.
     * @method
     * @name platformSDK#replaceFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     * @param {} step - The formula step.
     * @return { replaceFormulasStepByStepIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceFormulasStepByStepId = function (id, stepId, step) {
        return new replaceFormulasStepByStepIdParameters(this, 'PUT', '/formulas/{id}/steps/{stepId}', id, stepId, step);
    };
    /**
     * Create a new formula trigger.
     * @method
     * @name platformSDK#createFormulaTrigger
     * @param {integer} id - The ID of the formula template.
     * @param {} trigger - The formula trigger.
     * @return { createFormulaTriggerParameters } To allow chaining
     */
    platformSDK.prototype.createFormulaTrigger = function (id, trigger) {
        return new createFormulaTriggerParameters(this, 'POST', '/formulas/{id}/triggers', id, trigger);
    };
    /**
     * Delete a formula trigger.
     * @method
     * @name platformSDK#deleteFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     * @return { deleteFormulasTriggerByTriggerIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteFormulasTriggerByTriggerId = function (id, triggerId) {
        return new deleteFormulasTriggerByTriggerIdParameters(this, 'DELETE', '/formulas/{id}/triggers/{triggerId}', id, triggerId);
    };
    /**
     * Retrieve a formula trigger.
     * @method
     * @name platformSDK#getFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     * @return { getFormulasTriggerByTriggerIdParameters } To allow chaining
     */
    platformSDK.prototype.getFormulasTriggerByTriggerId = function (id, triggerId) {
        return new getFormulasTriggerByTriggerIdParameters(this, 'GET', '/formulas/{id}/triggers/{triggerId}', id, triggerId);
    };
    /**
     * Update a formula trigger.
     * @method
     * @name platformSDK#replaceFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     * @param {} trigger - The formula trigger.
     * @return { replaceFormulasTriggerByTriggerIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceFormulasTriggerByTriggerId = function (id, triggerId, trigger) {
        return new replaceFormulasTriggerByTriggerIdParameters(this, 'PUT', '/formulas/{id}/triggers/{triggerId}', id, triggerId, trigger);
    };
    /**
     * Retrieve all available element hubs.
     * @method
     * @name platformSDK#getHubs
     * @return { getHubsParameters } To allow chaining
     */
    platformSDK.prototype.getHubs = function () {
        return new getHubsParameters(this, 'GET', '/hubs');
    };
    /**
     * Create a new hub.
     * @method
     * @name platformSDK#createHub
     * @param {} hub - The hub
     * @return { createHubParameters } To allow chaining
     */
    platformSDK.prototype.createHub = function (hub) {
        return new createHubParameters(this, 'POST', '/hubs', hub);
    };
    /**
     * Retrieve all available element hub keys.
     * @method
     * @name platformSDK#getHubsKeys
     * @return { getHubsKeysParameters } To allow chaining
     */
    platformSDK.prototype.getHubsKeys = function () {
        return new getHubsKeysParameters(this, 'GET', '/hubs/keys');
    };
    /**
     * Delete a hub.
     * @method
     * @name platformSDK#deleteHubByKey
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     * @return { deleteHubByKeyParameters } To allow chaining
     */
    platformSDK.prototype.deleteHubByKey = function (key) {
        return new deleteHubByKeyParameters(this, 'DELETE', '/hubs/{key}', key);
    };
    /**
     * Retrieve the details about a specific hub.
     * @method
     * @name platformSDK#getHubByKey
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     * @return { getHubByKeyParameters } To allow chaining
     */
    platformSDK.prototype.getHubByKey = function (key) {
        return new getHubByKeyParameters(this, 'GET', '/hubs/{key}', key);
    };
    /**
     * Retrieve all available elements for a specific hub.
     * @method
     * @name platformSDK#getHubsElements
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     * @return { getHubsElementsParameters } To allow chaining
     */
    platformSDK.prototype.getHubsElements = function (key) {
        return new getHubsElementsParameters(this, 'GET', '/hubs/{key}/elements', key);
    };
    /**
     * Retrieve all element instances from a specified path.  The instances go through Cloud Elements to your console.  Specifying an instance that does not exist results in an error response.
     * @method
     * @name platformSDK#getInstances
     * @return { getInstancesParameters } To allow chaining
     */
    platformSDK.prototype.getInstances = function () {
        return new getInstancesParameters(this, 'GET', '/instances');
    };
    /**
     * Create a new element instance in your console.  Instance creation will flow through Cloud Elements to your console.
     * @method
     * @name platformSDK#createInstance
     * @param {} elementInstance - The element instance to create
     * @return { createInstanceParameters } To allow chaining
     */
    platformSDK.prototype.createInstance = function (elementInstance) {
        return new createInstanceParameters(this, 'POST', '/instances', elementInstance);
    };
    /**
     * Delete an instance associated with an instance token in authorization header. Specifying an instance associated with a given token that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteInstances
     * @return { deleteInstancesParameters } To allow chaining
     */
    platformSDK.prototype.deleteInstances = function () {
        return new deleteInstancesParameters(this, 'DELETE', '/instances');
    };
    /**
     * Update an instance associated with a given token in authorization header.  Specifying an instance associated with an token that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceInstances
     * @param {} elementInstance - The fields of the element instance to update
     * @return { replaceInstancesParameters } To allow chaining
     */
    platformSDK.prototype.replaceInstances = function (elementInstance) {
        return new replaceInstancesParameters(this, 'PUT', '/instances', elementInstance);
    };
    /**
     * Update an instance partially associated with a given token in authorization header.  Specifying an instance associated with an token that does not exist will result in an error message.
     * @method
     * @name platformSDK#updateInstances
     * @param {} elementInstance - The fields of the element instance to update
     * @return { updateInstancesParameters } To allow chaining
     */
    platformSDK.prototype.updateInstances = function (elementInstance) {
        return new updateInstancesParameters(this, 'PATCH', '/instances', elementInstance);
    };
    /**
     * Retrieve configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#getInstancesConfiguration
     * @return { getInstancesConfigurationParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesConfiguration = function () {
        return new getInstancesConfigurationParameters(this, 'GET', '/instances/configuration');
    };
    /**
     * Retrieve configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#getInstancesConfigurationByConfigId
     * @param {integer} configId - The ID of the element instance config
     * @return { getInstancesConfigurationByConfigIdParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesConfigurationByConfigId = function (configId) {
        return new getInstancesConfigurationByConfigIdParameters(this, 'GET', '/instances/configuration/{configId}', configId);
    };
    /**
     * Update configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#updateInstancesConfigurationByConfigId
     * @param {integer} configId - The ID of the element instance config
     * @param {} config - The updated element instance config
     * @return { updateInstancesConfigurationByConfigIdParameters } To allow chaining
     */
    platformSDK.prototype.updateInstancesConfigurationByConfigId = function (configId, config) {
        return new updateInstancesConfigurationByConfigIdParameters(this, 'PATCH', '/instances/configuration/{configId}', configId, config);
    };
    /**
     * Retrieve an instance specific swagger documentation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocs
     * @return { getInstancesDocsParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesDocs = function () {
        return new getInstancesDocsParameters(this, 'GET', '/instances/docs');
    };
    /**
     * Retrieve an instance specific swagger documentation for an operation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocByOperationId
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     * @return { getInstancesDocByOperationIdParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesDocByOperationId = function (operationId) {
        return new getInstancesDocByOperationIdParameters(this, 'GET', '/instances/docs/{operationId}', operationId);
    };
    /**
     * Retrieve an definitionation for an operation id with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocsDefinitions
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     * @return { getInstancesDocsDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesDocsDefinitions = function (operationId) {
        return new getInstancesDocsDefinitionsParameters(this, 'GET', '/instances/docs/{operationId}/definitions', operationId);
    };
    /**
     * Enable an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesEnabled
     * @return { replaceInstancesEnabledParameters } To allow chaining
     */
    platformSDK.prototype.replaceInstancesEnabled = function () {
        return new replaceInstancesEnabledParameters(this, 'PUT', '/instances/enabled');
    };
    /**
     * Disable an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesEnabled
     * @return { deleteInstancesEnabledParameters } To allow chaining
     */
    platformSDK.prototype.deleteInstancesEnabled = function () {
        return new deleteInstancesEnabledParameters(this, 'DELETE', '/instances/enabled');
    };
    /**
     * Retrieve events for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEvents
     * @return { getInstancesEventsParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesEvents = function () {
        return new getInstancesEventsParameters(this, 'GET', '/instances/events');
    };
    /**
     * Retrieve the number of events within a given date/time range for all element instances within the specified account(s).
     * @method
     * @name platformSDK#getInstancesEventsAnalytics
     * @return { getInstancesEventsAnalyticsParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesEventsAnalytics = function () {
        return new getInstancesEventsAnalyticsParameters(this, 'GET', '/instances/events/analytics');
    };
    /**
     * Retrieve the number of events within a given date/time range, aggregated by account ID. This API is really only useful for organization admins where more than one account exists.
     * @method
     * @name platformSDK#getInstancesEventsAnalyticsAccounts
     * @return { getInstancesEventsAnalyticsAccountsParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesEventsAnalyticsAccounts = function () {
        return new getInstancesEventsAnalyticsAccountsParameters(this, 'GET', '/instances/events/analytics/accounts');
    };
    /**
     * Retrieve the number of events  within a given date/time range, aggregated by element instance ID.
     * @method
     * @name platformSDK#getInstancesEventsAnalyticsInstances
     * @return { getInstancesEventsAnalyticsInstancesParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesEventsAnalyticsInstances = function () {
        return new getInstancesEventsAnalyticsInstancesParameters(this, 'GET', '/instances/events/analytics/instances');
    };
    /**
     * Retrieve events for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEventsDispositions
     * @return { getInstancesEventsDispositionsParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesEventsDispositions = function () {
        return new getInstancesEventsDispositionsParameters(this, 'GET', '/instances/events/dispositions');
    };
    /**
     * Retrieve an event for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEventByEventId
     * @param {integer} eventId - The ID of the event
     * @return { getInstancesEventByEventIdParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesEventByEventId = function (eventId) {
        return new getInstancesEventByEventIdParameters(this, 'GET', '/instances/events/{eventId}', eventId);
    };
    /**
     * Retrieve all of the object definitions within a specific instance with an associated instance token in authorization header.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsDefinitions
     * @return { getInstancesObjectsDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesObjectsDefinitions = function () {
        return new getInstancesObjectsDefinitionsParameters(this, 'GET', '/instances/objects/definitions');
    };
    /**
     * Delete an object definition associated with an objectName for a specific instance with an associated instance token in authorization header.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { deleteInstancesObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.deleteInstancesObjectsObjectNameDefinitions = function (objectName) {
        return new deleteInstancesObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/instances/objects/{objectName}/definitions', objectName);
    };
    /**
     * Retrieve a specific object definition associated with an objectName within a specific instance with an associated instance token in authorization header.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { getInstancesObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesObjectsObjectNameDefinitions = function (objectName) {
        return new getInstancesObjectsObjectNameDefinitionsParameters(this, 'GET', '/instances/objects/{objectName}/definitions', objectName);
    };
    /**
     * Create a new object definition associated with an objectName within a specific instance with an associated instance token in authorization header.  The definitions allow you to define what an object looks like within an instance.
     * @method
     * @name platformSDK#createInstanceObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { createInstanceObjectObjectNameDefinitionParameters } To allow chaining
     */
    platformSDK.prototype.createInstanceObjectObjectNameDefinition = function (objectName, body) {
        return new createInstanceObjectObjectNameDefinitionParameters(this, 'POST', '/instances/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * Update a specific object's definition associated with an objectName within a specific instance with an associated instance token in authorization header. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { replaceInstancesObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.replaceInstancesObjectsObjectNameDefinitions = function (objectName, body) {
        return new replaceInstancesObjectsObjectNameDefinitionsParameters(this, 'PUT', '/instances/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * Temporarily enable trace-level usage logging for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesTraceLogging
     * @return { replaceInstancesTraceLoggingParameters } To allow chaining
     */
    platformSDK.prototype.replaceInstancesTraceLogging = function () {
        return new replaceInstancesTraceLoggingParameters(this, 'PUT', '/instances/trace-logging');
    };
    /**
     * Disable trace-level usage logging for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTraceLogging
     * @return { deleteInstancesTraceLoggingParameters } To allow chaining
     */
    platformSDK.prototype.deleteInstancesTraceLogging = function () {
        return new deleteInstancesTraceLoggingParameters(this, 'DELETE', '/instances/trace-logging');
    };
    /**
     * Delete the transformation for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTransformations
     * @return { deleteInstancesTransformationsParameters } To allow chaining
     */
    platformSDK.prototype.deleteInstancesTransformations = function () {
        return new deleteInstancesTransformationsParameters(this, 'DELETE', '/instances/transformations');
    };
    /**
     * Retrieve an element instance transformation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesTransformations
     * @return { getInstancesTransformationsParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesTransformations = function () {
        return new getInstancesTransformationsParameters(this, 'GET', '/instances/transformations');
    };
    /**
     * Delete the transformation for an element instance for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @return { deleteInstancesTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.deleteInstancesTransformationByObjectName = function (objectName) {
        return new deleteInstancesTransformationByObjectNameParameters(this, 'DELETE', '/instances/transformations/{objectName}', objectName);
    };
    /**
     * Retrieve an element instance transformation for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @return { getInstancesTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.getInstancesTransformationByObjectName = function (objectName) {
        return new getInstancesTransformationByObjectNameParameters(this, 'GET', '/instances/transformations/{objectName}', objectName);
    };
    /**
     * Create a transformation for an element instance for a specific object
     * @method
     * @name platformSDK#createInstanceTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to create
     * @return { createInstanceTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.createInstanceTransformationByObjectName = function (objectName, transformation) {
        return new createInstanceTransformationByObjectNameParameters(this, 'POST', '/instances/transformations/{objectName}', objectName, transformation);
    };
    /**
     * Update the transformation for an element instance for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to update
     * @return { replaceInstancesTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.replaceInstancesTransformationByObjectName = function (objectName, transformation) {
        return new replaceInstancesTransformationByObjectNameParameters(this, 'PUT', '/instances/transformations/{objectName}', objectName, transformation);
    };
    /**
     * Delete an instance associated with a given ID from your console. Specifying an instance associated with a given ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteInstanceById
     * @param {integer} id - The ID of the element instance
     * @return { deleteInstanceByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteInstanceById = function (id) {
        return new deleteInstanceByIdParameters(this, 'DELETE', '/instances/{id}', id);
    };
    /**
     * Retrieve an element instance associated with a given ID from a specified path.  The instance goes through Cloud Elements to your console.  Specifying an instance with an associated ID that does not exist results in an error response.
     * @method
     * @name platformSDK#getInstanceById
     * @param {integer} id - The ID of the element instance
     * @return { getInstanceByIdParameters } To allow chaining
     */
    platformSDK.prototype.getInstanceById = function (id) {
        return new getInstanceByIdParameters(this, 'GET', '/instances/{id}', id);
    };
    /**
     * Update an instance associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceInstanceById
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     * @return { replaceInstanceByIdParameters } To allow chaining
     */
    platformSDK.prototype.replaceInstanceById = function (id, elementInstance) {
        return new replaceInstanceByIdParameters(this, 'PUT', '/instances/{id}', id, elementInstance);
    };
    /**
     * Update an instance partially associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#updateInstanceById
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     * @return { updateInstanceByIdParameters } To allow chaining
     */
    platformSDK.prototype.updateInstanceById = function (id, elementInstance) {
        return new updateInstanceByIdParameters(this, 'PATCH', '/instances/{id}', id, elementInstance);
    };
    /**
     * Retrieve configuration for an element instance
     * @method
     * @name platformSDK#getInstancesConfiguration2
     * @param {integer} id - The ID of the element instance
     * @return { getInstancesConfiguration2Parameters } To allow chaining
     */
    platformSDK.prototype.getInstancesConfiguration2 = function (id) {
        return new getInstancesConfiguration2Parameters(this, 'GET', '/instances/{id}/configuration', id);
    };
    /**
     * Retrieve configuration for an element instance
     * @method
     * @name platformSDK#getInstancesConfigurationByConfigId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} configId - The ID of the element instance config
     * @return { getInstancesConfigurationByConfigId2Parameters } To allow chaining
     */
    platformSDK.prototype.getInstancesConfigurationByConfigId2 = function (id, configId) {
        return new getInstancesConfigurationByConfigId2Parameters(this, 'GET', '/instances/{id}/configuration/{configId}', id, configId);
    };
    /**
     * Update configuration for an element instance
     * @method
     * @name platformSDK#updateInstancesConfigurationByConfigId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} configId - The ID of the element instance config
     * @param {} config - The updated element instance config
     * @return { updateInstancesConfigurationByConfigId2Parameters } To allow chaining
     */
    platformSDK.prototype.updateInstancesConfigurationByConfigId2 = function (id, configId, config) {
        return new updateInstancesConfigurationByConfigId2Parameters(this, 'PATCH', '/instances/{id}/configuration/{configId}', id, configId, config);
    };
    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocs2
     * @param {integer} id - The ID of the element instance
     * @return { getInstancesDocs2Parameters } To allow chaining
     */
    platformSDK.prototype.getInstancesDocs2 = function (id) {
        return new getInstancesDocs2Parameters(this, 'GET', '/instances/{id}/docs', id);
    };
    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocByOperationId2
     * @param {integer} id - The ID of the element instance
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     * @return { getInstancesDocByOperationId2Parameters } To allow chaining
     */
    platformSDK.prototype.getInstancesDocByOperationId2 = function (id, operationId) {
        return new getInstancesDocByOperationId2Parameters(this, 'GET', '/instances/{id}/docs/{operationId}', id, operationId);
    };
    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocsDefinitions2
     * @param {integer} id - The ID of the element instance
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     * @return { getInstancesDocsDefinitions2Parameters } To allow chaining
     */
    platformSDK.prototype.getInstancesDocsDefinitions2 = function (id, operationId) {
        return new getInstancesDocsDefinitions2Parameters(this, 'GET', '/instances/{id}/docs/{operationId}/definitions', id, operationId);
    };
    /**
     * Enable an element instance
     * @method
     * @name platformSDK#replaceInstancesEnabled2
     * @param {integer} id - The ID of the element instance
     * @return { replaceInstancesEnabled2Parameters } To allow chaining
     */
    platformSDK.prototype.replaceInstancesEnabled2 = function (id) {
        return new replaceInstancesEnabled2Parameters(this, 'PUT', '/instances/{id}/enabled', id);
    };
    /**
     * Disable an element instance
     * @method
     * @name platformSDK#deleteInstancesEnabled2
     * @param {integer} id - The ID of the element instance
     * @return { deleteInstancesEnabled2Parameters } To allow chaining
     */
    platformSDK.prototype.deleteInstancesEnabled2 = function (id) {
        return new deleteInstancesEnabled2Parameters(this, 'DELETE', '/instances/{id}/enabled', id);
    };
    /**
     * Retrieve events for an element instance
     * @method
     * @name platformSDK#getInstancesEvents2
     * @param {integer} id - The ID of the element instance
     * @return { getInstancesEvents2Parameters } To allow chaining
     */
    platformSDK.prototype.getInstancesEvents2 = function (id) {
        return new getInstancesEvents2Parameters(this, 'GET', '/instances/{id}/events', id);
    };
    /**
     * Retrieve an event for an element instance
     * @method
     * @name platformSDK#getInstancesEventByEventId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} eventId - The ID of the event
     * @return { getInstancesEventByEventId2Parameters } To allow chaining
     */
    platformSDK.prototype.getInstancesEventByEventId2 = function (id, eventId) {
        return new getInstancesEventByEventId2Parameters(this, 'GET', '/instances/{id}/events/{eventId}', id, eventId);
    };
    /**
     * Retrieve all of the object definitions at all levels that could map to a specific instance.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsDefinitions2
     * @param {integer} id - The ID of the instance
     * @return { getInstancesObjectsDefinitions2Parameters } To allow chaining
     */
    platformSDK.prototype.getInstancesObjectsDefinitions2 = function (id) {
        return new getInstancesObjectsDefinitions2Parameters(this, 'GET', '/instances/{id}/objects/definitions', id);
    };
    /**
     * Delete an object definition associated with an objectName for a specific instance.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @return { deleteInstancesObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    platformSDK.prototype.deleteInstancesObjectsObjectNameDefinitions2 = function (id, objectName) {
        return new deleteInstancesObjectsObjectNameDefinitions2Parameters(this, 'DELETE', '/instances/{id}/objects/{objectName}/definitions', id, objectName);
    };
    /**
     * Retrieve a specific object definition associated with an objectName within a specific instance.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @return { getInstancesObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    platformSDK.prototype.getInstancesObjectsObjectNameDefinitions2 = function (id, objectName) {
        return new getInstancesObjectsObjectNameDefinitions2Parameters(this, 'GET', '/instances/{id}/objects/{objectName}/definitions', id, objectName);
    };
    /**
     * Create a new object definition associated with an objectName within a specific instance.  The definitions allow you to define what an object looks like within an instance.
     * @method
     * @name platformSDK#createInstanceObjectObjectNameDefinition2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { createInstanceObjectObjectNameDefinition2Parameters } To allow chaining
     */
    platformSDK.prototype.createInstanceObjectObjectNameDefinition2 = function (id, objectName, body) {
        return new createInstanceObjectObjectNameDefinition2Parameters(this, 'POST', '/instances/{id}/objects/{objectName}/definitions', id, objectName, body);
    };
    /**
     * Update a specific object's definition associated with an objectName within a specific instance. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { replaceInstancesObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    platformSDK.prototype.replaceInstancesObjectsObjectNameDefinitions2 = function (id, objectName, body) {
        return new replaceInstancesObjectsObjectNameDefinitions2Parameters(this, 'PUT', '/instances/{id}/objects/{objectName}/definitions', id, objectName, body);
    };
    /**
     * Temporarily enable trace-level usage logging for an element instance
     * @method
     * @name platformSDK#replaceInstancesTraceLogging2
     * @param {integer} id - The ID of the element instance
     * @return { replaceInstancesTraceLogging2Parameters } To allow chaining
     */
    platformSDK.prototype.replaceInstancesTraceLogging2 = function (id) {
        return new replaceInstancesTraceLogging2Parameters(this, 'PUT', '/instances/{id}/trace-logging', id);
    };
    /**
     * Disable trace-level usage logging for an element instance
     * @method
     * @name platformSDK#deleteInstancesTraceLogging2
     * @param {integer} id - The ID of the element instance
     * @return { deleteInstancesTraceLogging2Parameters } To allow chaining
     */
    platformSDK.prototype.deleteInstancesTraceLogging2 = function (id) {
        return new deleteInstancesTraceLogging2Parameters(this, 'DELETE', '/instances/{id}/trace-logging', id);
    };
    /**
     * Delete the transformation for an element instance
     * @method
     * @name platformSDK#deleteInstancesTransformations2
     * @param {integer} id - The ID of the element instance
     * @return { deleteInstancesTransformations2Parameters } To allow chaining
     */
    platformSDK.prototype.deleteInstancesTransformations2 = function (id) {
        return new deleteInstancesTransformations2Parameters(this, 'DELETE', '/instances/{id}/transformations', id);
    };
    /**
     * Retrieve an element instance transformation
     * @method
     * @name platformSDK#getInstancesTransformations2
     * @param {integer} id - The ID of the element instance
     * @return { getInstancesTransformations2Parameters } To allow chaining
     */
    platformSDK.prototype.getInstancesTransformations2 = function (id) {
        return new getInstancesTransformations2Parameters(this, 'GET', '/instances/{id}/transformations', id);
    };
    /**
     * Delete the transformation for an element instance for a specific object
     * @method
     * @name platformSDK#deleteInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @return { deleteInstancesTransformationByObjectName2Parameters } To allow chaining
     */
    platformSDK.prototype.deleteInstancesTransformationByObjectName2 = function (id, objectName) {
        return new deleteInstancesTransformationByObjectName2Parameters(this, 'DELETE', '/instances/{id}/transformations/{objectName}', id, objectName);
    };
    /**
     * Retrieve an element instance transformation for a specific object
     * @method
     * @name platformSDK#getInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @return { getInstancesTransformationByObjectName2Parameters } To allow chaining
     */
    platformSDK.prototype.getInstancesTransformationByObjectName2 = function (id, objectName) {
        return new getInstancesTransformationByObjectName2Parameters(this, 'GET', '/instances/{id}/transformations/{objectName}', id, objectName);
    };
    /**
     * Create a transformation for an element instance for a specific object
     * @method
     * @name platformSDK#createInstanceTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to create
     * @return { createInstanceTransformationByObjectName2Parameters } To allow chaining
     */
    platformSDK.prototype.createInstanceTransformationByObjectName2 = function (id, objectName, transformation) {
        return new createInstanceTransformationByObjectName2Parameters(this, 'POST', '/instances/{id}/transformations/{objectName}', id, objectName, transformation);
    };
    /**
     * Update the transformation for an element instance for a specific object
     * @method
     * @name platformSDK#replaceInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to update
     * @return { replaceInstancesTransformationByObjectName2Parameters } To allow chaining
     */
    platformSDK.prototype.replaceInstancesTransformationByObjectName2 = function (id, objectName, transformation) {
        return new replaceInstancesTransformationByObjectName2Parameters(this, 'PUT', '/instances/{id}/transformations/{objectName}', id, objectName, transformation);
    };
    /**
     * Get a list of all configured jobs.
     * @method
     * @name platformSDK#getJobs
     * @return { getJobsParameters } To allow chaining
     */
    platformSDK.prototype.getJobs = function () {
        return new getJobsParameters(this, 'GET', '/jobs');
    };
    /**
     * Create a new job.
     * @method
     * @name platformSDK#createJob
     * @return { createJobParameters } To allow chaining
     */
    platformSDK.prototype.createJob = function () {
        return new createJobParameters(this, 'POST', '/jobs');
    };
    /**
     * Get a list of the previous job executions.
     * @method
     * @name platformSDK#getJobsExecutions
     * @return { getJobsExecutionsParameters } To allow chaining
     */
    platformSDK.prototype.getJobsExecutions = function () {
        return new getJobsExecutionsParameters(this, 'GET', '/jobs/executions');
    };
    /**
     * Delete a specific job.
     * @method
     * @name platformSDK#deleteJobById
     * @param {string} id - The ID of the job.
     * @return { deleteJobByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteJobById = function (id) {
        return new deleteJobByIdParameters(this, 'DELETE', '/jobs/{id}', id);
    };
    /**
     * Get information about a specific job.
     * @method
     * @name platformSDK#getJobById
     * @param {string} id - The ID of the job.
     * @return { getJobByIdParameters } To allow chaining
     */
    platformSDK.prototype.getJobById = function (id) {
        return new getJobByIdParameters(this, 'GET', '/jobs/{id}', id);
    };
    /**
     * Disable a job.
     * @method
     * @name platformSDK#replaceJobsDisable
     * @param {string} id - The ID of the job.
     * @return { replaceJobsDisableParameters } To allow chaining
     */
    platformSDK.prototype.replaceJobsDisable = function (id) {
        return new replaceJobsDisableParameters(this, 'PUT', '/jobs/{id}/disable', id);
    };
    /**
     * Enable a job.
     * @method
     * @name platformSDK#replaceJobsEnable
     * @param {string} id - The ID of the job.
     * @return { replaceJobsEnableParameters } To allow chaining
     */
    platformSDK.prototype.replaceJobsEnable = function (id) {
        return new replaceJobsEnableParameters(this, 'PUT', '/jobs/{id}/enable', id);
    };
    /**
     * Get a list of history records for a specific job.
     * @method
     * @name platformSDK#getJobsHistory
     * @param {string} id - The ID of the job.
     * @return { getJobsHistoryParameters } To allow chaining
     */
    platformSDK.prototype.getJobsHistory = function (id) {
        return new getJobsHistoryParameters(this, 'GET', '/jobs/{id}/history', id);
    };
    /**
     * Get a specific history record for a specific job.
     * @method
     * @name platformSDK#getJobsHistoryByHistoryId
     * @param {string} id - The ID of the job.
     * @param {integer} historyId - The ID of the History record.
     * @return { getJobsHistoryByHistoryIdParameters } To allow chaining
     */
    platformSDK.prototype.getJobsHistoryByHistoryId = function (id, historyId) {
        return new getJobsHistoryByHistoryIdParameters(this, 'GET', '/jobs/{id}/history/{historyId}', id, historyId);
    };
    /**
     * Update a job's CRON string and reschedule it.
     * @method
     * @name platformSDK#updateJobsReschedule
     * @param {string} id - The ID of the job.
     * @return { updateJobsRescheduleParameters } To allow chaining
     */
    platformSDK.prototype.updateJobsReschedule = function (id) {
        return new updateJobsRescheduleParameters(this, 'PATCH', '/jobs/{id}/reschedule', id);
    };
    /**
     * Retrieve the API metrics for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsApi
     * @return { getMetricsApiParameters } To allow chaining
     */
    platformSDK.prototype.getMetricsApi = function () {
        return new getMetricsApiParameters(this, 'GET', '/metrics/api');
    };
    /**
     * Retrieve the metrics of number of bulk jobs executed for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsBulkJobs
     * @return { getMetricsBulkJobsParameters } To allow chaining
     */
    platformSDK.prototype.getMetricsBulkJobs = function () {
        return new getMetricsBulkJobsParameters(this, 'GET', '/metrics/bulk-jobs');
    };
    /**
     * Retrieve the element instance creation API metrics for the accounts provided, split up by element key. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsElementInstancesCreated
     * @return { getMetricsElementInstancesCreatedParameters } To allow chaining
     */
    platformSDK.prototype.getMetricsElementInstancesCreated = function () {
        return new getMetricsElementInstancesCreatedParameters(this, 'GET', '/metrics/element-instances-created');
    };
    /**
     * Retrieve the metrics of number of custom elements created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsElementsCreated
     * @return { getMetricsElementsCreatedParameters } To allow chaining
     */
    platformSDK.prototype.getMetricsElementsCreated = function () {
        return new getMetricsElementsCreatedParameters(this, 'GET', '/metrics/elements-created');
    };
    /**
     * Retrieve the metrics of number of events received for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsEvents
     * @return { getMetricsEventsParameters } To allow chaining
     */
    platformSDK.prototype.getMetricsEvents = function () {
        return new getMetricsEventsParameters(this, 'GET', '/metrics/events');
    };
    /**
     * Retrieve the metrics of number of formulas executions for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsFormulaExecutions
     * @return { getMetricsFormulaExecutionsParameters } To allow chaining
     */
    platformSDK.prototype.getMetricsFormulaExecutions = function () {
        return new getMetricsFormulaExecutionsParameters(this, 'GET', '/metrics/formula-executions');
    };
    /**
     * Retrieve the metrics of number of formulas created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsFormulasCreated
     * @return { getMetricsFormulasCreatedParameters } To allow chaining
     */
    platformSDK.prototype.getMetricsFormulasCreated = function () {
        return new getMetricsFormulasCreatedParameters(this, 'GET', '/metrics/formulas-created');
    };
    /**
     * Retrieve the API metrics for the accounts provided, split up by hub. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsHubApi
     * @return { getMetricsHubApiParameters } To allow chaining
     */
    platformSDK.prototype.getMetricsHubApi = function () {
        return new getMetricsHubApiParameters(this, 'GET', '/metrics/hub-api');
    };
    /**
     * Retrieve the hubs created metrics for the accounts provided, split up by hub. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsHubsCreated
     * @return { getMetricsHubsCreatedParameters } To allow chaining
     */
    platformSDK.prototype.getMetricsHubsCreated = function () {
        return new getMetricsHubsCreatedParameters(this, 'GET', '/metrics/hubs-created');
    };
    /**
     * Retrieve the metrics of number of VDRs created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsVdrsCreated
     * @return { getMetricsVdrsCreatedParameters } To allow chaining
     */
    platformSDK.prototype.getMetricsVdrsCreated = function () {
        return new getMetricsVdrsCreatedParameters(this, 'GET', '/metrics/vdrs-created');
    };
    /**
     * Retrieve the metrics of number of calls using VDRs for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsVdrsInvoked
     * @return { getMetricsVdrsInvokedParameters } To allow chaining
     */
    platformSDK.prototype.getMetricsVdrsInvoked = function () {
        return new getMetricsVdrsInvokedParameters(this, 'GET', '/metrics/vdrs-invoked');
    };
    /**
     * Create a new organization within the user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createOrganization
     * @param {} organization - The organization to create.
     * @return { createOrganizationParameters } To allow chaining
     */
    platformSDK.prototype.createOrganization = function (organization) {
        return new createOrganizationParameters(this, 'POST', '/organizations', organization);
    };
    /**
     * Delete the default transformation for an element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#deleteOrganizationsElementsTransformations
     * @param {string} keyOrId - The element key or ID
     * @return { deleteOrganizationsElementsTransformationsParameters } To allow chaining
     */
    platformSDK.prototype.deleteOrganizationsElementsTransformations = function (keyOrId) {
        return new deleteOrganizationsElementsTransformationsParameters(this, 'DELETE', '/organizations/elements/{keyOrId}/transformations', keyOrId);
    };
    /**
     * Retrieve the default transformation for a specific element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#getOrganizationsElementsTransformations
     * @param {string} keyOrId - The element key or ID
     * @return { getOrganizationsElementsTransformationsParameters } To allow chaining
     */
    platformSDK.prototype.getOrganizationsElementsTransformations = function (keyOrId) {
        return new getOrganizationsElementsTransformationsParameters(this, 'GET', '/organizations/elements/{keyOrId}/transformations', keyOrId);
    };
    /**
     * Delete the default transformation for an object for a specific element within an organization. The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#deleteOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @return { deleteOrganizationsElementsTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.deleteOrganizationsElementsTransformationByObjectName = function (keyOrId, objectName) {
        return new deleteOrganizationsElementsTransformationByObjectNameParameters(this, 'DELETE', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName);
    };
    /**
     * Retrieve the default transformation for an object for a specific element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#getOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @return { getOrganizationsElementsTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.getOrganizationsElementsTransformationByObjectName = function (keyOrId, objectName) {
        return new getOrganizationsElementsTransformationByObjectNameParameters(this, 'GET', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName);
    };
    /**
     * Create a default transformation for a specific object for all elements with the given key, within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#createOrganizationElementTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     * @return { createOrganizationElementTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.createOrganizationElementTransformationByObjectName = function (keyOrId, objectName, transformation) {
        return new createOrganizationElementTransformationByObjectNameParameters(this, 'POST', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName, transformation);
    };
    /**
     * Update the default transformation for an object for a specific element element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#replaceOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     * @return { replaceOrganizationsElementsTransformationByObjectNameParameters } To allow chaining
     */
    platformSDK.prototype.replaceOrganizationsElementsTransformationByObjectName = function (keyOrId, objectName, transformation) {
        return new replaceOrganizationsElementsTransformationByObjectNameParameters(this, 'PUT', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName, transformation);
    };
    /**
     * Retrieve the user's organization
     * @method
     * @name platformSDK#getOrganizationsMe
     * @return { getOrganizationsMeParameters } To allow chaining
     */
    platformSDK.prototype.getOrganizationsMe = function () {
        return new getOrganizationsMeParameters(this, 'GET', '/organizations/me');
    };
    /**
     * Update the user's organization metadata
     * @method
     * @name platformSDK#replaceOrganizationsMe
     * @param {} body - The organization metadata to update. The only field that can be updated is 'name'.
     * @return { replaceOrganizationsMeParameters } To allow chaining
     */
    platformSDK.prototype.replaceOrganizationsMe = function (body) {
        return new replaceOrganizationsMeParameters(this, 'PUT', '/organizations/me', body);
    };
    /**
     * Delete all object definitions within an organization.
     * @method
     * @name platformSDK#deleteOrganizationsObjectsDefinitions
     * @return { deleteOrganizationsObjectsDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.deleteOrganizationsObjectsDefinitions = function () {
        return new deleteOrganizationsObjectsDefinitionsParameters(this, 'DELETE', '/organizations/objects/definitions');
    };
    /**
     * Retrieve all of the object definitions within an organization.
     * @method
     * @name platformSDK#getOrganizationsObjectsDefinitions
     * @return { getOrganizationsObjectsDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.getOrganizationsObjectsDefinitions = function () {
        return new getOrganizationsObjectsDefinitionsParameters(this, 'GET', '/organizations/objects/definitions');
    };
    /**
     * Create multiple object definitions within an organization.  The definitions allow you to define what an object looks like within an organization.
     * @method
     * @name platformSDK#createOrganizationObjectDefinition
     * @param {} body - The object definitions to create
     * @return { createOrganizationObjectDefinitionParameters } To allow chaining
     */
    platformSDK.prototype.createOrganizationObjectDefinition = function (body) {
        return new createOrganizationObjectDefinitionParameters(this, 'POST', '/organizations/objects/definitions', body);
    };
    /**
     * Delete an object definition associated with a specific objectName within an organization. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#deleteOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { deleteOrganizationsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.deleteOrganizationsObjectsObjectNameDefinitions = function (objectName) {
        return new deleteOrganizationsObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/organizations/objects/{objectName}/definitions', objectName);
    };
    /**
     * Retrieve a specific object definition associated with an objectName within an organization.
     * @method
     * @name platformSDK#getOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { getOrganizationsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.getOrganizationsObjectsObjectNameDefinitions = function (objectName) {
        return new getOrganizationsObjectsObjectNameDefinitionsParameters(this, 'GET', '/organizations/objects/{objectName}/definitions', objectName);
    };
    /**
     * Create a new object definition associated with an objectName within an organization.  The definitions allow you to define what an object looks like within an organization.
     * @method
     * @name platformSDK#createOrganizationObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { createOrganizationObjectObjectNameDefinitionParameters } To allow chaining
     */
    platformSDK.prototype.createOrganizationObjectObjectNameDefinition = function (objectName, body) {
        return new createOrganizationObjectObjectNameDefinitionParameters(this, 'POST', '/organizations/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * Update a specific object's definition associated with a specific objectName within an organization.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { replaceOrganizationsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    platformSDK.prototype.replaceOrganizationsObjectsObjectNameDefinitions = function (objectName, body) {
        return new replaceOrganizationsObjectsObjectNameDefinitionsParameters(this, 'PUT', '/organizations/objects/{objectName}/definitions', objectName, body);
    };
    /**
     * Find users within your default organizational account.  The CEQL search expression or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for users containing the name 'greg', the search expression will be where name=‘greg’. When this parameter is omitted, all accounts are returned in a paginated fashion.
     * @method
     * @name platformSDK#getOrganizationsUsers
     * @return { getOrganizationsUsersParameters } To allow chaining
     */
    platformSDK.prototype.getOrganizationsUsers = function () {
        return new getOrganizationsUsersParameters(this, 'GET', '/organizations/users');
    };
    /**
     * Create a user under the default organization account
     * @method
     * @name platformSDK#createOrganizationUser
     * @param {} body - The user to create<br/><br/>The required fields are:<br/><ul><li><b>email</b> - The user's email address</li><li><b>firstName</b> - The user's first name</li><li><b>lastName</b> - The user's last name</li></ul><br/>Upon success, the created object will be returned.
     * @return { createOrganizationUserParameters } To allow chaining
     */
    platformSDK.prototype.createOrganizationUser = function (body) {
        return new createOrganizationUserParameters(this, 'POST', '/organizations/users', body);
    };
    /**
     * Retrieve a user associated with an email or ID within the default organization.  Specifying a user associated with a given emailOrId that does not exist will result in an error response.
     * @method
     * @name platformSDK#getOrganizationsUserByEmailOrId
     * @param {string} emailOrId - The email address or numeric ID of the user
     * @return { getOrganizationsUserByEmailOrIdParameters } To allow chaining
     */
    platformSDK.prototype.getOrganizationsUserByEmailOrId = function (emailOrId) {
        return new getOrganizationsUserByEmailOrIdParameters(this, 'GET', '/organizations/users/{emailOrId}', emailOrId);
    };
    /**
     * Delete a user associated with an ID within your organization. WARNING: This action will irreversibly delete all jobs, and formula and element instances associated with the user.
     * @method
     * @name platformSDK#deleteOrganizationsUserById
     * @param {integer} id - The ID of the user
     * @return { deleteOrganizationsUserByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteOrganizationsUserById = function (id) {
        return new deleteOrganizationsUserByIdParameters(this, 'DELETE', '/organizations/users/{id}', id);
    };
    /**
     * Update a user associated with an ID within your organization. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#updateOrganizationsUserById
     * @param {integer} id - The ID of the user
     * @param {} body - The updated user information
     * @return { updateOrganizationsUserByIdParameters } To allow chaining
     */
    platformSDK.prototype.updateOrganizationsUserById = function (id, body) {
        return new updateOrganizationsUserByIdParameters(this, 'PATCH', '/organizations/users/{id}', id, body);
    };
    /**
     * Create a new account within an organization. NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#createOrganizationAccount
     * @param {integer} id - The ID of the organization
     * @param {} account - The account to create.
     * @return { createOrganizationAccountParameters } To allow chaining
     */
    platformSDK.prototype.createOrganizationAccount = function (id, account) {
        return new createOrganizationAccountParameters(this, 'POST', '/organizations/{id}/accounts', id, account);
    };
    /**
     * Retrieve all the accounts within an organization. NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#getOrganizationsAccounts
     * @param {integer} id - The ID of the organization
     * @return { getOrganizationsAccountsParameters } To allow chaining
     */
    platformSDK.prototype.getOrganizationsAccounts = function (id) {
        return new getOrganizationsAccountsParameters(this, 'GET', '/organizations/{id}/accounts', id);
    };
    /**
     * Retrieve an account within an organization NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#getOrganizationsAccountByAccountId
     * @param {integer} id - The ID of the organization
     * @param {integer} accountId - The ID of the account
     * @return { getOrganizationsAccountByAccountIdParameters } To allow chaining
     */
    platformSDK.prototype.getOrganizationsAccountByAccountId = function (id, accountId) {
        return new getOrganizationsAccountByAccountIdParameters(this, 'GET', '/organizations/{id}/accounts/{accountId}', id, accountId);
    };
    /**
     * Enables and disables organizations. NOTE: Only a user with the 'intelligence user' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#replaceOrganizationsStatus
     * @param {integer} id - The ID of the organization
     * @param {} status - Update the organization status.
     * @return { replaceOrganizationsStatusParameters } To allow chaining
     */
    platformSDK.prototype.replaceOrganizationsStatus = function (id, status) {
        return new replaceOrganizationsStatusParameters(this, 'PUT', '/organizations/{id}/status', id, status);
    };
    /**
     * Retrieve the usage logs for your account.
     * @method
     * @name platformSDK#getUsage
     * @return { getUsageParameters } To allow chaining
     */
    platformSDK.prototype.getUsage = function () {
        return new getUsageParameters(this, 'GET', '/usage');
    };
    /**
     * Retrieve the number of element API calls within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsActivity
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @return { getUsageAnalyticsActivityParameters } To allow chaining
     */
    platformSDK.prototype.getUsageAnalyticsActivity = function (from, to) {
        return new getUsageAnalyticsActivityParameters(this, 'GET', '/usage/analytics/activity', from, to);
    };
    /**
     * Retrieve the number of element API calls for each element within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsActivityElements
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @return { getUsageAnalyticsActivityElementsParameters } To allow chaining
     */
    platformSDK.prototype.getUsageAnalyticsActivityElements = function (from, to) {
        return new getUsageAnalyticsActivityElementsParameters(this, 'GET', '/usage/analytics/activity/elements', from, to);
    };
    /**
     * Retrieve the number of successes and failures of element API calls within a given date/time range.
     * @method
     * @name platformSDK#getUsageAnalyticsStatuses
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @return { getUsageAnalyticsStatusesParameters } To allow chaining
     */
    platformSDK.prototype.getUsageAnalyticsStatuses = function (from, to) {
        return new getUsageAnalyticsStatusesParameters(this, 'GET', '/usage/analytics/statuses', from, to);
    };
    /**
     * Retrieve the response times of element API calls within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsTimes
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @return { getUsageAnalyticsTimesParameters } To allow chaining
     */
    platformSDK.prototype.getUsageAnalyticsTimes = function (from, to) {
        return new getUsageAnalyticsTimesParameters(this, 'GET', '/usage/analytics/times', from, to);
    };
    /**
     * Retrieve the usage record by id
     * @method
     * @name platformSDK#getUsageById
     * @param {string} id - The ID of log record
     * @return { getUsageByIdParameters } To allow chaining
     */
    platformSDK.prototype.getUsageById = function (id) {
        return new getUsageByIdParameters(this, 'GET', '/usage/{id}', id);
    };
    /**
     * Retrieve users within your account or organization.  Find users within your account or organization, using the provided CEQL search expression or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for users containing the name 'greg', the search expression will be where name='greg'. When this parameter is omitted, all accounts are returned in a paginated fashion.
     * @method
     * @name platformSDK#getUsers
     * @return { getUsersParameters } To allow chaining
     */
    platformSDK.prototype.getUsers = function () {
        return new getUsersParameters(this, 'GET', '/users');
    };
    /**
     * Retrieve a user associated with a given email or ID within your account or organization.  Specifying a user associated with a given email or ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getUserByEmailOrId
     * @param {string} emailOrId - The email address or numeric ID of the user
     * @return { getUserByEmailOrIdParameters } To allow chaining
     */
    platformSDK.prototype.getUserByEmailOrId = function (emailOrId) {
        return new getUserByEmailOrIdParameters(this, 'GET', '/users/{emailOrId}', emailOrId);
    };
    /**
     * Delete a user associated with a given ID within your account or organization. WARNING: This action will delete all formula and element instances associated with the user, and is irreversible. Specifying a user associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#deleteUserById
     * @param {integer} id - The ID of the user
     * @return { deleteUserByIdParameters } To allow chaining
     */
    platformSDK.prototype.deleteUserById = function (id) {
        return new deleteUserByIdParameters(this, 'DELETE', '/users/{id}', id);
    };
    /**
     * Update a user associated with a given email or ID within your account or organization.  Specifying a user associated with a given email or ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#updateUserById
     * @param {integer} id - The ID of the user
     * @param {} body - The updated user information
     * @return { updateUserByIdParameters } To allow chaining
     */
    platformSDK.prototype.updateUserById = function (id, body) {
        return new updateUserByIdParameters(this, 'PATCH', '/users/{id}', id, body);
    };
    /**
     * Retrieve the roles that a user has been granted. This will return the effective roles, meaning the role could have been granted at the user level OR at the account level.
     * @method
     * @name platformSDK#getUsersRoles
     * @param {number} id - The ID of the user.
     * @return { getUsersRolesParameters } To allow chaining
     */
    platformSDK.prototype.getUsersRoles = function (id) {
        return new getUsersRolesParameters(this, 'GET', '/users/{id}/roles', id);
    };
    /**
     * Revoke a role from a user. This will only remove roles granted directly to the user, and will not affect roles that may have been granted at the account level.
     * @method
     * @name platformSDK#deleteUsersRoleByRoleKey
     * @param {number} userId - The ID of the user from which the role will be revoked.
     * @param {string} roleKey - The key of the role to revoke (org-admin, org, or admin)
     * @return { deleteUsersRoleByRoleKeyParameters } To allow chaining
     */
    platformSDK.prototype.deleteUsersRoleByRoleKey = function (userId, roleKey) {
        return new deleteUsersRoleByRoleKeyParameters(this, 'DELETE', '/users/{userId}/roles/{roleKey}', userId, roleKey);
    };
    /**
     * Grant a role to a user.
     * @method
     * @name platformSDK#replaceUsersRoleByRoleKey
     * @param {number} userId - The ID of the user to which the role will be granted.
     * @param {string} roleKey - The key of the role to grant (org-admin, org, or admin)
     * @return { replaceUsersRoleByRoleKeyParameters } To allow chaining
     */
    platformSDK.prototype.replaceUsersRoleByRoleKey = function (userId, roleKey) {
        return new replaceUsersRoleByRoleKeyParameters(this, 'PUT', '/users/{userId}/roles/{roleKey}', userId, roleKey);
    };
    return platformSDK;
}());
exports.platformSDK = platformSDK;
var platformSDKMethodParameters = /** @class */ (function (_super) {
    __extends(platformSDKMethodParameters, _super);
    function platformSDKMethodParameters(superThis, method, _path) {
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
    platformSDKMethodParameters.prototype.then = function (a, b) {
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
    return platformSDKMethodParameters;
}(request.Request));
var getAccountsParameters = /** @class */ (function (_super) {
    __extends(getAccountsParameters, _super);
    function getAccountsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getAccountsParameters#where
     */
    getAccountsParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'offset' optional parameter
     * @method
     * @name getAccountsParameters#offset
     */
    getAccountsParameters.prototype.offset = function (offset) {
        return this.query({
            'offset': offset
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAccountsParameters#pageSize
     */
    getAccountsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getAccountsParameters#includeInactive
     */
    getAccountsParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getAccountsParameters;
}(platformSDKMethodParameters));
var createAccountParameters = /** @class */ (function (_super) {
    __extends(createAccountParameters, _super);
    function createAccountParameters(superThis, method, _path, body) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(body);
        return _this;
    }
    return createAccountParameters;
}(platformSDKMethodParameters));
var getAccountsInstancesParameters = /** @class */ (function (_super) {
    __extends(getAccountsInstancesParameters, _super);
    function getAccountsInstancesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAccountsInstancesParameters#nextPage
     */
    getAccountsInstancesParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAccountsInstancesParameters#pageSize
     */
    getAccountsInstancesParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAccountsInstancesParameters;
}(platformSDKMethodParameters));
var deleteAccountsObjectsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(deleteAccountsObjectsDefinitionsParameters, _super);
    function deleteAccountsObjectsDefinitionsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return deleteAccountsObjectsDefinitionsParameters;
}(platformSDKMethodParameters));
var getAccountsObjectsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getAccountsObjectsDefinitionsParameters, _super);
    function getAccountsObjectsDefinitionsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getAccountsObjectsDefinitionsParameters;
}(platformSDKMethodParameters));
var createAccountObjectDefinitionParameters = /** @class */ (function (_super) {
    __extends(createAccountObjectDefinitionParameters, _super);
    function createAccountObjectDefinitionParameters(superThis, method, _path, body) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(body);
        return _this;
    }
    return createAccountObjectDefinitionParameters;
}(platformSDKMethodParameters));
var deleteAccountsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(deleteAccountsObjectsObjectNameDefinitionsParameters, _super);
    function deleteAccountsObjectsObjectNameDefinitionsParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    return deleteAccountsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
var getAccountsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getAccountsObjectsObjectNameDefinitionsParameters, _super);
    function getAccountsObjectsObjectNameDefinitionsParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    return getAccountsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
var createAccountObjectObjectNameDefinitionParameters = /** @class */ (function (_super) {
    __extends(createAccountObjectObjectNameDefinitionParameters, _super);
    function createAccountObjectObjectNameDefinitionParameters(superThis, method, _path, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return createAccountObjectObjectNameDefinitionParameters;
}(platformSDKMethodParameters));
var replaceAccountsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(replaceAccountsObjectsObjectNameDefinitionsParameters, _super);
    function replaceAccountsObjectsObjectNameDefinitionsParameters(superThis, method, _path, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return replaceAccountsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
var getAccountsFormulasInstancesParameters = /** @class */ (function (_super) {
    __extends(getAccountsFormulasInstancesParameters, _super);
    function getAccountsFormulasInstancesParameters(superThis, method, _path, accountId, formulaId) {
        return _super.call(this, superThis, method, _path
            .replace('{accountId}', "" + accountId)
            .replace('{formulaId}', "" + formulaId)) || this;
    }
    return getAccountsFormulasInstancesParameters;
}(platformSDKMethodParameters));
var deleteAccountByIdParameters = /** @class */ (function (_super) {
    __extends(deleteAccountByIdParameters, _super);
    function deleteAccountByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteAccountByIdParameters;
}(platformSDKMethodParameters));
var getAccountByIdParameters = /** @class */ (function (_super) {
    __extends(getAccountByIdParameters, _super);
    function getAccountByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getAccountByIdParameters#includeInactive
     */
    getAccountByIdParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getAccountByIdParameters;
}(platformSDKMethodParameters));
var updateAccountByIdParameters = /** @class */ (function (_super) {
    __extends(updateAccountByIdParameters, _super);
    function updateAccountByIdParameters(superThis, method, _path, id, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(body);
        return _this;
    }
    /**
     * Set the 'permanent' optional parameter
     * @method
     * @name updateAccountByIdParameters#permanent
     */
    updateAccountByIdParameters.prototype.permanent = function (permanent) {
        return this.query({
            'permanent': permanent
        });
    };
    return updateAccountByIdParameters;
}(platformSDKMethodParameters));
var replaceAccountByIdParameters = /** @class */ (function (_super) {
    __extends(replaceAccountByIdParameters, _super);
    function replaceAccountByIdParameters(superThis, method, _path, id, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(body);
        return _this;
    }
    /**
     * Set the 'permanent' optional parameter
     * @method
     * @name replaceAccountByIdParameters#permanent
     */
    replaceAccountByIdParameters.prototype.permanent = function (permanent) {
        return this.query({
            'permanent': permanent
        });
    };
    return replaceAccountByIdParameters;
}(platformSDKMethodParameters));
var deleteAccountsElementsTransformationsParameters = /** @class */ (function (_super) {
    __extends(deleteAccountsElementsTransformationsParameters, _super);
    function deleteAccountsElementsTransformationsParameters(superThis, method, _path, id, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return deleteAccountsElementsTransformationsParameters;
}(platformSDKMethodParameters));
var getAccountsElementsTransformationsParameters = /** @class */ (function (_super) {
    __extends(getAccountsElementsTransformationsParameters, _super);
    function getAccountsElementsTransformationsParameters(superThis, method, _path, id, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return getAccountsElementsTransformationsParameters;
}(platformSDKMethodParameters));
var deleteAccountsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(deleteAccountsElementsTransformationByObjectNameParameters, _super);
    function deleteAccountsElementsTransformationByObjectNameParameters(superThis, method, _path, id, keyOrId, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{objectName}', "" + objectName)) || this;
    }
    return deleteAccountsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var getAccountsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(getAccountsElementsTransformationByObjectNameParameters, _super);
    function getAccountsElementsTransformationByObjectNameParameters(superThis, method, _path, id, keyOrId, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{objectName}', "" + objectName)) || this;
    }
    return getAccountsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var createAccountElementTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(createAccountElementTransformationByObjectNameParameters, _super);
    function createAccountElementTransformationByObjectNameParameters(superThis, method, _path, id, keyOrId, objectName, transformation) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(transformation);
        return _this;
    }
    return createAccountElementTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var replaceAccountsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(replaceAccountsElementsTransformationByObjectNameParameters, _super);
    function replaceAccountsElementsTransformationByObjectNameParameters(superThis, method, _path, id, keyOrId, objectName, transformation) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(transformation);
        return _this;
    }
    return replaceAccountsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var getAccountsInstances2Parameters = /** @class */ (function (_super) {
    __extends(getAccountsInstances2Parameters, _super);
    function getAccountsInstances2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAccountsInstances2Parameters#nextPage
     */
    getAccountsInstances2Parameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAccountsInstances2Parameters#pageSize
     */
    getAccountsInstances2Parameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAccountsInstances2Parameters;
}(platformSDKMethodParameters));
var deleteAccountsObjectsDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(deleteAccountsObjectsDefinitions2Parameters, _super);
    function deleteAccountsObjectsDefinitions2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteAccountsObjectsDefinitions2Parameters;
}(platformSDKMethodParameters));
var getAccountsObjectsDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(getAccountsObjectsDefinitions2Parameters, _super);
    function getAccountsObjectsDefinitions2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getAccountsObjectsDefinitions2Parameters;
}(platformSDKMethodParameters));
var createAccountObjectDefinition2Parameters = /** @class */ (function (_super) {
    __extends(createAccountObjectDefinition2Parameters, _super);
    function createAccountObjectDefinition2Parameters(superThis, method, _path, id, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(body);
        return _this;
    }
    return createAccountObjectDefinition2Parameters;
}(platformSDKMethodParameters));
var deleteAccountsObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(deleteAccountsObjectsObjectNameDefinitions2Parameters, _super);
    function deleteAccountsObjectsObjectNameDefinitions2Parameters(superThis, method, _path, id, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
    }
    return deleteAccountsObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
var getAccountsObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(getAccountsObjectsObjectNameDefinitions2Parameters, _super);
    function getAccountsObjectsObjectNameDefinitions2Parameters(superThis, method, _path, id, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
    }
    return getAccountsObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
var createAccountObjectObjectNameDefinition2Parameters = /** @class */ (function (_super) {
    __extends(createAccountObjectObjectNameDefinition2Parameters, _super);
    function createAccountObjectObjectNameDefinition2Parameters(superThis, method, _path, id, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return createAccountObjectObjectNameDefinition2Parameters;
}(platformSDKMethodParameters));
var replaceAccountsObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(replaceAccountsObjectsObjectNameDefinitions2Parameters, _super);
    function replaceAccountsObjectsObjectNameDefinitions2Parameters(superThis, method, _path, id, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return replaceAccountsObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
var getAccountsUsersParameters = /** @class */ (function (_super) {
    __extends(getAccountsUsersParameters, _super);
    function getAccountsUsersParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getAccountsUsersParameters#where
     */
    getAccountsUsersParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAccountsUsersParameters#nextPage
     */
    getAccountsUsersParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAccountsUsersParameters#pageSize
     */
    getAccountsUsersParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getAccountsUsersParameters#includeInactive
     */
    getAccountsUsersParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getAccountsUsersParameters;
}(platformSDKMethodParameters));
var createAccountUserParameters = /** @class */ (function (_super) {
    __extends(createAccountUserParameters, _super);
    function createAccountUserParameters(superThis, method, _path, id, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(body);
        return _this;
    }
    return createAccountUserParameters;
}(platformSDKMethodParameters));
var getAccountsUserByEmailOrIdParameters = /** @class */ (function (_super) {
    __extends(getAccountsUserByEmailOrIdParameters, _super);
    function getAccountsUserByEmailOrIdParameters(superThis, method, _path, id, emailOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{emailOrId}', "" + emailOrId)) || this;
    }
    /**
     * Set the 'elementsUserPassword' optional parameter
     * @method
     * @name getAccountsUserByEmailOrIdParameters#elementsUserPassword
     */
    getAccountsUserByEmailOrIdParameters.prototype.elementsUserPassword = function (elementsUserPassword) {
        return this.set('Elements-User-Password', 'elementsUserPassword');
    };
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getAccountsUserByEmailOrIdParameters#includeInactive
     */
    getAccountsUserByEmailOrIdParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getAccountsUserByEmailOrIdParameters;
}(platformSDKMethodParameters));
var updateAccountsUserByUserIdParameters = /** @class */ (function (_super) {
    __extends(updateAccountsUserByUserIdParameters, _super);
    function updateAccountsUserByUserIdParameters(superThis, method, _path, id, userId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{userId}', "" + userId)) || this;
        _this.send(body);
        return _this;
    }
    return updateAccountsUserByUserIdParameters;
}(platformSDKMethodParameters));
var replaceAccountsUserByUserIdParameters = /** @class */ (function (_super) {
    __extends(replaceAccountsUserByUserIdParameters, _super);
    function replaceAccountsUserByUserIdParameters(superThis, method, _path, id, userId, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{userId}', "" + userId)) || this;
        _this.send(body);
        return _this;
    }
    return replaceAccountsUserByUserIdParameters;
}(platformSDKMethodParameters));
var deleteAccountsUserByUserIdParameters = /** @class */ (function (_super) {
    __extends(deleteAccountsUserByUserIdParameters, _super);
    function deleteAccountsUserByUserIdParameters(superThis, method, _path, id, userId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{userId}', "" + userId)) || this;
    }
    return deleteAccountsUserByUserIdParameters;
}(platformSDKMethodParameters));
var getAuditLogsParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsParameters, _super);
    function getAuditLogsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getAuditLogsParameters#from
     */
    getAuditLogsParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getAuditLogsParameters#to
     */
    getAuditLogsParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'userId' optional parameter
     * @method
     * @name getAuditLogsParameters#userId
     */
    getAuditLogsParameters.prototype.userId = function (userId) {
        return this.query({
            'userId': userId
        });
    };
    /**
     * Set the 'accountId' optional parameter
     * @method
     * @name getAuditLogsParameters#accountId
     */
    getAuditLogsParameters.prototype.accountId = function (accountId) {
        return this.query({
            'accountId': accountId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAuditLogsParameters#nextPage
     */
    getAuditLogsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAuditLogsParameters#pageSize
     */
    getAuditLogsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAuditLogsParameters;
}(platformSDKMethodParameters));
var getAuditLogsAuthenticationParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsAuthenticationParameters, _super);
    function getAuditLogsAuthenticationParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getAuditLogsAuthenticationParameters#from
     */
    getAuditLogsAuthenticationParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getAuditLogsAuthenticationParameters#to
     */
    getAuditLogsAuthenticationParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'userId' optional parameter
     * @method
     * @name getAuditLogsAuthenticationParameters#userId
     */
    getAuditLogsAuthenticationParameters.prototype.userId = function (userId) {
        return this.query({
            'userId': userId
        });
    };
    /**
     * Set the 'accountId' optional parameter
     * @method
     * @name getAuditLogsAuthenticationParameters#accountId
     */
    getAuditLogsAuthenticationParameters.prototype.accountId = function (accountId) {
        return this.query({
            'accountId': accountId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAuditLogsAuthenticationParameters#nextPage
     */
    getAuditLogsAuthenticationParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAuditLogsAuthenticationParameters#pageSize
     */
    getAuditLogsAuthenticationParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAuditLogsAuthenticationParameters;
}(platformSDKMethodParameters));
var getAuditLogsCommonResourcesParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsCommonResourcesParameters, _super);
    function getAuditLogsCommonResourcesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getAuditLogsCommonResourcesParameters#from
     */
    getAuditLogsCommonResourcesParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getAuditLogsCommonResourcesParameters#to
     */
    getAuditLogsCommonResourcesParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'userId' optional parameter
     * @method
     * @name getAuditLogsCommonResourcesParameters#userId
     */
    getAuditLogsCommonResourcesParameters.prototype.userId = function (userId) {
        return this.query({
            'userId': userId
        });
    };
    /**
     * Set the 'accountId' optional parameter
     * @method
     * @name getAuditLogsCommonResourcesParameters#accountId
     */
    getAuditLogsCommonResourcesParameters.prototype.accountId = function (accountId) {
        return this.query({
            'accountId': accountId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAuditLogsCommonResourcesParameters#nextPage
     */
    getAuditLogsCommonResourcesParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAuditLogsCommonResourcesParameters#pageSize
     */
    getAuditLogsCommonResourcesParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAuditLogsCommonResourcesParameters;
}(platformSDKMethodParameters));
var getAuditLogsCommonResourceByCommonResourceNameParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsCommonResourceByCommonResourceNameParameters, _super);
    function getAuditLogsCommonResourceByCommonResourceNameParameters(superThis, method, _path, commonResourceName) {
        return _super.call(this, superThis, method, _path
            .replace('{commonResourceName}', "" + commonResourceName)) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getAuditLogsCommonResourceByCommonResourceNameParameters#from
     */
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getAuditLogsCommonResourceByCommonResourceNameParameters#to
     */
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'userId' optional parameter
     * @method
     * @name getAuditLogsCommonResourceByCommonResourceNameParameters#userId
     */
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.userId = function (userId) {
        return this.query({
            'userId': userId
        });
    };
    /**
     * Set the 'accountId' optional parameter
     * @method
     * @name getAuditLogsCommonResourceByCommonResourceNameParameters#accountId
     */
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.accountId = function (accountId) {
        return this.query({
            'accountId': accountId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAuditLogsCommonResourceByCommonResourceNameParameters#nextPage
     */
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAuditLogsCommonResourceByCommonResourceNameParameters#pageSize
     */
    getAuditLogsCommonResourceByCommonResourceNameParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAuditLogsCommonResourceByCommonResourceNameParameters;
}(platformSDKMethodParameters));
var getAuditLogsElementInstancesParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsElementInstancesParameters, _super);
    function getAuditLogsElementInstancesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getAuditLogsElementInstancesParameters#from
     */
    getAuditLogsElementInstancesParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getAuditLogsElementInstancesParameters#to
     */
    getAuditLogsElementInstancesParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'userId' optional parameter
     * @method
     * @name getAuditLogsElementInstancesParameters#userId
     */
    getAuditLogsElementInstancesParameters.prototype.userId = function (userId) {
        return this.query({
            'userId': userId
        });
    };
    /**
     * Set the 'accountId' optional parameter
     * @method
     * @name getAuditLogsElementInstancesParameters#accountId
     */
    getAuditLogsElementInstancesParameters.prototype.accountId = function (accountId) {
        return this.query({
            'accountId': accountId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAuditLogsElementInstancesParameters#nextPage
     */
    getAuditLogsElementInstancesParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAuditLogsElementInstancesParameters#pageSize
     */
    getAuditLogsElementInstancesParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAuditLogsElementInstancesParameters;
}(platformSDKMethodParameters));
var getAuditLogsElementInstanceByElementInstanceIdParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsElementInstanceByElementInstanceIdParameters, _super);
    function getAuditLogsElementInstanceByElementInstanceIdParameters(superThis, method, _path, elementInstanceId) {
        return _super.call(this, superThis, method, _path
            .replace('{elementInstanceId}', "" + elementInstanceId)) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getAuditLogsElementInstanceByElementInstanceIdParameters#from
     */
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getAuditLogsElementInstanceByElementInstanceIdParameters#to
     */
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'userId' optional parameter
     * @method
     * @name getAuditLogsElementInstanceByElementInstanceIdParameters#userId
     */
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.userId = function (userId) {
        return this.query({
            'userId': userId
        });
    };
    /**
     * Set the 'accountId' optional parameter
     * @method
     * @name getAuditLogsElementInstanceByElementInstanceIdParameters#accountId
     */
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.accountId = function (accountId) {
        return this.query({
            'accountId': accountId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAuditLogsElementInstanceByElementInstanceIdParameters#nextPage
     */
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAuditLogsElementInstanceByElementInstanceIdParameters#pageSize
     */
    getAuditLogsElementInstanceByElementInstanceIdParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAuditLogsElementInstanceByElementInstanceIdParameters;
}(platformSDKMethodParameters));
var getAuditLogsElementsParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsElementsParameters, _super);
    function getAuditLogsElementsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getAuditLogsElementsParameters#from
     */
    getAuditLogsElementsParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getAuditLogsElementsParameters#to
     */
    getAuditLogsElementsParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'userId' optional parameter
     * @method
     * @name getAuditLogsElementsParameters#userId
     */
    getAuditLogsElementsParameters.prototype.userId = function (userId) {
        return this.query({
            'userId': userId
        });
    };
    /**
     * Set the 'accountId' optional parameter
     * @method
     * @name getAuditLogsElementsParameters#accountId
     */
    getAuditLogsElementsParameters.prototype.accountId = function (accountId) {
        return this.query({
            'accountId': accountId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAuditLogsElementsParameters#nextPage
     */
    getAuditLogsElementsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAuditLogsElementsParameters#pageSize
     */
    getAuditLogsElementsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAuditLogsElementsParameters;
}(platformSDKMethodParameters));
var getAuditLogsElementByElementIdParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsElementByElementIdParameters, _super);
    function getAuditLogsElementByElementIdParameters(superThis, method, _path, elementId) {
        return _super.call(this, superThis, method, _path
            .replace('{elementId}', "" + elementId)) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getAuditLogsElementByElementIdParameters#from
     */
    getAuditLogsElementByElementIdParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getAuditLogsElementByElementIdParameters#to
     */
    getAuditLogsElementByElementIdParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'userId' optional parameter
     * @method
     * @name getAuditLogsElementByElementIdParameters#userId
     */
    getAuditLogsElementByElementIdParameters.prototype.userId = function (userId) {
        return this.query({
            'userId': userId
        });
    };
    /**
     * Set the 'accountId' optional parameter
     * @method
     * @name getAuditLogsElementByElementIdParameters#accountId
     */
    getAuditLogsElementByElementIdParameters.prototype.accountId = function (accountId) {
        return this.query({
            'accountId': accountId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAuditLogsElementByElementIdParameters#nextPage
     */
    getAuditLogsElementByElementIdParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAuditLogsElementByElementIdParameters#pageSize
     */
    getAuditLogsElementByElementIdParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAuditLogsElementByElementIdParameters;
}(platformSDKMethodParameters));
var getAuditLogsFormulaInstancesParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsFormulaInstancesParameters, _super);
    function getAuditLogsFormulaInstancesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getAuditLogsFormulaInstancesParameters#from
     */
    getAuditLogsFormulaInstancesParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getAuditLogsFormulaInstancesParameters#to
     */
    getAuditLogsFormulaInstancesParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'userId' optional parameter
     * @method
     * @name getAuditLogsFormulaInstancesParameters#userId
     */
    getAuditLogsFormulaInstancesParameters.prototype.userId = function (userId) {
        return this.query({
            'userId': userId
        });
    };
    /**
     * Set the 'accountId' optional parameter
     * @method
     * @name getAuditLogsFormulaInstancesParameters#accountId
     */
    getAuditLogsFormulaInstancesParameters.prototype.accountId = function (accountId) {
        return this.query({
            'accountId': accountId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAuditLogsFormulaInstancesParameters#nextPage
     */
    getAuditLogsFormulaInstancesParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAuditLogsFormulaInstancesParameters#pageSize
     */
    getAuditLogsFormulaInstancesParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAuditLogsFormulaInstancesParameters;
}(platformSDKMethodParameters));
var getAuditLogsFormulasParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsFormulasParameters, _super);
    function getAuditLogsFormulasParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getAuditLogsFormulasParameters#from
     */
    getAuditLogsFormulasParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getAuditLogsFormulasParameters#to
     */
    getAuditLogsFormulasParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'userId' optional parameter
     * @method
     * @name getAuditLogsFormulasParameters#userId
     */
    getAuditLogsFormulasParameters.prototype.userId = function (userId) {
        return this.query({
            'userId': userId
        });
    };
    /**
     * Set the 'accountId' optional parameter
     * @method
     * @name getAuditLogsFormulasParameters#accountId
     */
    getAuditLogsFormulasParameters.prototype.accountId = function (accountId) {
        return this.query({
            'accountId': accountId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAuditLogsFormulasParameters#nextPage
     */
    getAuditLogsFormulasParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAuditLogsFormulasParameters#pageSize
     */
    getAuditLogsFormulasParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAuditLogsFormulasParameters;
}(platformSDKMethodParameters));
var getAuditLogsFormulaByEntityIdParameters = /** @class */ (function (_super) {
    __extends(getAuditLogsFormulaByEntityIdParameters, _super);
    function getAuditLogsFormulaByEntityIdParameters(superThis, method, _path, entityId) {
        return _super.call(this, superThis, method, _path
            .replace('{entityId}', "" + entityId)) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getAuditLogsFormulaByEntityIdParameters#from
     */
    getAuditLogsFormulaByEntityIdParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getAuditLogsFormulaByEntityIdParameters#to
     */
    getAuditLogsFormulaByEntityIdParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'userId' optional parameter
     * @method
     * @name getAuditLogsFormulaByEntityIdParameters#userId
     */
    getAuditLogsFormulaByEntityIdParameters.prototype.userId = function (userId) {
        return this.query({
            'userId': userId
        });
    };
    /**
     * Set the 'accountId' optional parameter
     * @method
     * @name getAuditLogsFormulaByEntityIdParameters#accountId
     */
    getAuditLogsFormulaByEntityIdParameters.prototype.accountId = function (accountId) {
        return this.query({
            'accountId': accountId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getAuditLogsFormulaByEntityIdParameters#nextPage
     */
    getAuditLogsFormulaByEntityIdParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getAuditLogsFormulaByEntityIdParameters#pageSize
     */
    getAuditLogsFormulaByEntityIdParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getAuditLogsFormulaByEntityIdParameters;
}(platformSDKMethodParameters));
var createAuthenticationPasswordParameters = /** @class */ (function (_super) {
    __extends(createAuthenticationPasswordParameters, _super);
    function createAuthenticationPasswordParameters(superThis, method, _path, passwordReset) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(passwordReset);
        return _this;
    }
    return createAuthenticationPasswordParameters;
}(platformSDKMethodParameters));
var createCustomerIdentityProviderParameters = /** @class */ (function (_super) {
    __extends(createCustomerIdentityProviderParameters, _super);
    function createCustomerIdentityProviderParameters(superThis, method, _path, identityProvider) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(identityProvider);
        return _this;
    }
    return createCustomerIdentityProviderParameters;
}(platformSDKMethodParameters));
var getCustomersIdentityProvidersParameters = /** @class */ (function (_super) {
    __extends(getCustomersIdentityProvidersParameters, _super);
    function getCustomersIdentityProvidersParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getCustomersIdentityProvidersParameters;
}(platformSDKMethodParameters));
var getCustomersIdentityProviderByIdParameters = /** @class */ (function (_super) {
    __extends(getCustomersIdentityProviderByIdParameters, _super);
    function getCustomersIdentityProviderByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getCustomersIdentityProviderByIdParameters;
}(platformSDKMethodParameters));
var deleteCustomersIdentityProviderByIdParameters = /** @class */ (function (_super) {
    __extends(deleteCustomersIdentityProviderByIdParameters, _super);
    function deleteCustomersIdentityProviderByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteCustomersIdentityProviderByIdParameters;
}(platformSDKMethodParameters));
var getCustomersMeParameters = /** @class */ (function (_super) {
    __extends(getCustomersMeParameters, _super);
    function getCustomersMeParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getCustomersMeParameters;
}(platformSDKMethodParameters));
var getCustomersOrganizationsParameters = /** @class */ (function (_super) {
    __extends(getCustomersOrganizationsParameters, _super);
    function getCustomersOrganizationsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getCustomersOrganizationsParameters#nextPage
     */
    getCustomersOrganizationsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getCustomersOrganizationsParameters#pageSize
     */
    getCustomersOrganizationsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getCustomersOrganizationsParameters#where
     */
    getCustomersOrganizationsParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getCustomersOrganizationsParameters#includeInactive
     */
    getCustomersOrganizationsParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getCustomersOrganizationsParameters;
}(platformSDKMethodParameters));
var getCustomersOrganizationByIdParameters = /** @class */ (function (_super) {
    __extends(getCustomersOrganizationByIdParameters, _super);
    function getCustomersOrganizationByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getCustomersOrganizationByIdParameters#includeInactive
     */
    getCustomersOrganizationByIdParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getCustomersOrganizationByIdParameters;
}(platformSDKMethodParameters));
var deleteCustomersOrganizationByIdParameters = /** @class */ (function (_super) {
    __extends(deleteCustomersOrganizationByIdParameters, _super);
    function deleteCustomersOrganizationByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteCustomersOrganizationByIdParameters;
}(platformSDKMethodParameters));
var createCustomerSignupParameters = /** @class */ (function (_super) {
    __extends(createCustomerSignupParameters, _super);
    function createCustomerSignupParameters(superThis, method, _path, customerSignup) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(customerSignup);
        return _this;
    }
    return createCustomerSignupParameters;
}(platformSDKMethodParameters));
var createElementParameters = /** @class */ (function (_super) {
    __extends(createElementParameters, _super);
    function createElementParameters(superThis, method, _path, element) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(element);
        return _this;
    }
    return createElementParameters;
}(platformSDKMethodParameters));
var getElementsKeysParameters = /** @class */ (function (_super) {
    __extends(getElementsKeysParameters, _super);
    function getElementsKeysParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getElementsKeysParameters#nextPage
     */
    getElementsKeysParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getElementsKeysParameters#pageSize
     */
    getElementsKeysParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getElementsKeysParameters;
}(platformSDKMethodParameters));
var getElementsDocsParameters = /** @class */ (function (_super) {
    __extends(getElementsDocsParameters, _super);
    function getElementsDocsParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'operationId' optional parameter
     * @method
     * @name getElementsDocsParameters#operationId
     */
    getElementsDocsParameters.prototype.operationId = function (operationId) {
        return this.query({
            'operationId': operationId
        });
    };
    /**
     * Set the 'version' optional parameter
     * @method
     * @name getElementsDocsParameters#version
     */
    getElementsDocsParameters.prototype.version = function (version) {
        return this.query({
            'version': version
        });
    };
    return getElementsDocsParameters;
}(platformSDKMethodParameters));
var getElementsMetadataParameters = /** @class */ (function (_super) {
    __extends(getElementsMetadataParameters, _super);
    function getElementsMetadataParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getElementsMetadataParameters;
}(platformSDKMethodParameters));
var getElementsObjectsObjectNameDocsParameters = /** @class */ (function (_super) {
    __extends(getElementsObjectsObjectNameDocsParameters, _super);
    function getElementsObjectsObjectNameDocsParameters(superThis, method, _path, id, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
    }
    /**
     * Set the 'version' optional parameter
     * @method
     * @name getElementsObjectsObjectNameDocsParameters#version
     */
    getElementsObjectsObjectNameDocsParameters.prototype.version = function (version) {
        return this.query({
            'version': version
        });
    };
    return getElementsObjectsObjectNameDocsParameters;
}(platformSDKMethodParameters));
var getElementsOperationsParameters = /** @class */ (function (_super) {
    __extends(getElementsOperationsParameters, _super);
    function getElementsOperationsParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'version' optional parameter
     * @method
     * @name getElementsOperationsParameters#version
     */
    getElementsOperationsParameters.prototype.version = function (version) {
        return this.query({
            'version': version
        });
    };
    return getElementsOperationsParameters;
}(platformSDKMethodParameters));
var getElementsOperationsDocsParameters = /** @class */ (function (_super) {
    __extends(getElementsOperationsDocsParameters, _super);
    function getElementsOperationsDocsParameters(superThis, method, _path, id, operationId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{operationId}', "" + operationId)) || this;
    }
    /**
     * Set the 'version' optional parameter
     * @method
     * @name getElementsOperationsDocsParameters#version
     */
    getElementsOperationsDocsParameters.prototype.version = function (version) {
        return this.query({
            'version': version
        });
    };
    return getElementsOperationsDocsParameters;
}(platformSDKMethodParameters));
var getElementsVersionsParameters = /** @class */ (function (_super) {
    __extends(getElementsVersionsParameters, _super);
    function getElementsVersionsParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getElementsVersionsParameters;
}(platformSDKMethodParameters));
var deleteElementByKeyOrIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementByKeyOrIdParameters, _super);
    function deleteElementByKeyOrIdParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return deleteElementByKeyOrIdParameters;
}(platformSDKMethodParameters));
var replaceElementByKeyOrIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementByKeyOrIdParameters, _super);
    function replaceElementByKeyOrIdParameters(superThis, method, _path, keyOrId, element) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
        _this.send(element);
        return _this;
    }
    return replaceElementByKeyOrIdParameters;
}(platformSDKMethodParameters));
var deleteElementsActiveParameters = /** @class */ (function (_super) {
    __extends(deleteElementsActiveParameters, _super);
    function deleteElementsActiveParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return deleteElementsActiveParameters;
}(platformSDKMethodParameters));
var replaceElementsActiveParameters = /** @class */ (function (_super) {
    __extends(replaceElementsActiveParameters, _super);
    function replaceElementsActiveParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return replaceElementsActiveParameters;
}(platformSDKMethodParameters));
var createElementCloneParameters = /** @class */ (function (_super) {
    __extends(createElementCloneParameters, _super);
    function createElementCloneParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return createElementCloneParameters;
}(platformSDKMethodParameters));
var getElementsConfigurationParameters = /** @class */ (function (_super) {
    __extends(getElementsConfigurationParameters, _super);
    function getElementsConfigurationParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return getElementsConfigurationParameters;
}(platformSDKMethodParameters));
var createElementConfigurationParameters = /** @class */ (function (_super) {
    __extends(createElementConfigurationParameters, _super);
    function createElementConfigurationParameters(superThis, method, _path, keyOrId, configuration) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
        _this.send(configuration);
        return _this;
    }
    return createElementConfigurationParameters;
}(platformSDKMethodParameters));
var deleteElementsConfigurationByConfigurationKeyParameters = /** @class */ (function (_super) {
    __extends(deleteElementsConfigurationByConfigurationKeyParameters, _super);
    function deleteElementsConfigurationByConfigurationKeyParameters(superThis, method, _path, keyOrId, configurationKey) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{configurationKey}', "" + configurationKey)) || this;
    }
    return deleteElementsConfigurationByConfigurationKeyParameters;
}(platformSDKMethodParameters));
var replaceElementsConfigurationByConfigurationKeyParameters = /** @class */ (function (_super) {
    __extends(replaceElementsConfigurationByConfigurationKeyParameters, _super);
    function replaceElementsConfigurationByConfigurationKeyParameters(superThis, method, _path, keyOrId, configurationKey, configuration) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{configurationKey}', "" + configurationKey)) || this;
        _this.send(configuration);
        return _this;
    }
    return replaceElementsConfigurationByConfigurationKeyParameters;
}(platformSDKMethodParameters));
var getElementsExportParameters = /** @class */ (function (_super) {
    __extends(getElementsExportParameters, _super);
    function getElementsExportParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return getElementsExportParameters;
}(platformSDKMethodParameters));
var getElementsHooksParameters = /** @class */ (function (_super) {
    __extends(getElementsHooksParameters, _super);
    function getElementsHooksParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return getElementsHooksParameters;
}(platformSDKMethodParameters));
var createElementHookParameters = /** @class */ (function (_super) {
    __extends(createElementHookParameters, _super);
    function createElementHookParameters(superThis, method, _path, keyOrId, model) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
        _this.send(model);
        return _this;
    }
    return createElementHookParameters;
}(platformSDKMethodParameters));
var getElementsHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(getElementsHookByHookIdParameters, _super);
    function getElementsHookByHookIdParameters(superThis, method, _path, keyOrId, hookId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{hookId}', "" + hookId)) || this;
    }
    return getElementsHookByHookIdParameters;
}(platformSDKMethodParameters));
var deleteElementsHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsHookByHookIdParameters, _super);
    function deleteElementsHookByHookIdParameters(superThis, method, _path, keyOrId, hookId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{hookId}', "" + hookId)) || this;
    }
    return deleteElementsHookByHookIdParameters;
}(platformSDKMethodParameters));
var replaceElementsHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsHookByHookIdParameters, _super);
    function replaceElementsHookByHookIdParameters(superThis, method, _path, keyOrId, hookId, parameter) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{hookId}', "" + hookId)) || this;
        _this.send(parameter);
        return _this;
    }
    return replaceElementsHookByHookIdParameters;
}(platformSDKMethodParameters));
var getElementsInstancesParameters = /** @class */ (function (_super) {
    __extends(getElementsInstancesParameters, _super);
    function getElementsInstancesParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return getElementsInstancesParameters;
}(platformSDKMethodParameters));
var createElementInstanceParameters = /** @class */ (function (_super) {
    __extends(createElementInstanceParameters, _super);
    function createElementInstanceParameters(superThis, method, _path, keyOrId, elementInstance) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
        _this.send(elementInstance);
        return _this;
    }
    return createElementInstanceParameters;
}(platformSDKMethodParameters));
var deleteElementsInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsInstanceByIdParameters, _super);
    function deleteElementsInstanceByIdParameters(superThis, method, _path, keyOrId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
    }
    return deleteElementsInstanceByIdParameters;
}(platformSDKMethodParameters));
var getElementsInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(getElementsInstanceByIdParameters, _super);
    function getElementsInstanceByIdParameters(superThis, method, _path, keyOrId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
    }
    return getElementsInstanceByIdParameters;
}(platformSDKMethodParameters));
var replaceElementsInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsInstanceByIdParameters, _super);
    function replaceElementsInstanceByIdParameters(superThis, method, _path, keyOrId, id, elementInstance) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
        _this.send(elementInstance);
        return _this;
    }
    return replaceElementsInstanceByIdParameters;
}(platformSDKMethodParameters));
var getElementsOauthTokenParameters = /** @class */ (function (_super) {
    __extends(getElementsOauthTokenParameters, _super);
    function getElementsOauthTokenParameters(superThis, method, _path, keyOrId, apiKey, apiSecret, callbackUrl) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
        return _this.query({
            'apiKey': apiKey
        });
        return _this.query({
            'apiSecret': apiSecret
        });
        return _this.query({
            'callbackUrl': callbackUrl
        });
    }
    /**
     * Set the 'scope' optional parameter
     * @method
     * @name getElementsOauthTokenParameters#scope
     */
    getElementsOauthTokenParameters.prototype.scope = function (scope) {
        return this.query({
            'scope': scope
        });
    };
    /**
     * Set the 'state' optional parameter
     * @method
     * @name getElementsOauthTokenParameters#state
     */
    getElementsOauthTokenParameters.prototype.state = function (state) {
        return this.query({
            'state': state
        });
    };
    /**
     * Set the 'siteAddress' optional parameter
     * @method
     * @name getElementsOauthTokenParameters#siteAddress
     */
    getElementsOauthTokenParameters.prototype.siteAddress = function (siteAddress) {
        return this.query({
            'siteAddress': siteAddress
        });
    };
    return getElementsOauthTokenParameters;
}(platformSDKMethodParameters));
var getElementsOauthUrlParameters = /** @class */ (function (_super) {
    __extends(getElementsOauthUrlParameters, _super);
    function getElementsOauthUrlParameters(superThis, method, _path, keyOrId, apiKey, apiSecret, callbackUrl) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
        return _this.query({
            'apiKey': apiKey
        });
        return _this.query({
            'apiSecret': apiSecret
        });
        return _this.query({
            'callbackUrl': callbackUrl
        });
    }
    /**
     * Set the 'scope' optional parameter
     * @method
     * @name getElementsOauthUrlParameters#scope
     */
    getElementsOauthUrlParameters.prototype.scope = function (scope) {
        return this.query({
            'scope': scope
        });
    };
    /**
     * Set the 'state' optional parameter
     * @method
     * @name getElementsOauthUrlParameters#state
     */
    getElementsOauthUrlParameters.prototype.state = function (state) {
        return this.query({
            'state': state
        });
    };
    /**
     * Set the 'callbackProxy' optional parameter
     * @method
     * @name getElementsOauthUrlParameters#callbackProxy
     */
    getElementsOauthUrlParameters.prototype.callbackProxy = function (callbackProxy) {
        return this.query({
            'callbackProxy': callbackProxy
        });
    };
    /**
     * Set the 'requestToken' optional parameter
     * @method
     * @name getElementsOauthUrlParameters#requestToken
     */
    getElementsOauthUrlParameters.prototype.requestToken = function (requestToken) {
        return this.query({
            'requestToken': requestToken
        });
    };
    /**
     * Set the 'siteAddress' optional parameter
     * @method
     * @name getElementsOauthUrlParameters#siteAddress
     */
    getElementsOauthUrlParameters.prototype.siteAddress = function (siteAddress) {
        return this.query({
            'siteAddress': siteAddress
        });
    };
    return getElementsOauthUrlParameters;
}(platformSDKMethodParameters));
var createElementOauthUrlParameters = /** @class */ (function (_super) {
    __extends(createElementOauthUrlParameters, _super);
    function createElementOauthUrlParameters(superThis, method, _path, keyOrId, oauthInfo) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
        _this.send(oauthInfo);
        return _this;
    }
    return createElementOauthUrlParameters;
}(platformSDKMethodParameters));
var getElementsObjectsParameters = /** @class */ (function (_super) {
    __extends(getElementsObjectsParameters, _super);
    function getElementsObjectsParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    /**
     * Set the 'accountOnly' optional parameter
     * @method
     * @name getElementsObjectsParameters#accountOnly
     */
    getElementsObjectsParameters.prototype.accountOnly = function (accountOnly) {
        return this.query({
            'accountOnly': accountOnly
        });
    };
    return getElementsObjectsParameters;
}(platformSDKMethodParameters));
var createElementObjectParameters = /** @class */ (function (_super) {
    __extends(createElementObjectParameters, _super);
    function createElementObjectParameters(superThis, method, _path, keyOrId, object) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
        _this.send(object);
        return _this;
    }
    return createElementObjectParameters;
}(platformSDKMethodParameters));
var deleteElementsObjectByIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsObjectByIdParameters, _super);
    function deleteElementsObjectByIdParameters(superThis, method, _path, keyOrId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
    }
    return deleteElementsObjectByIdParameters;
}(platformSDKMethodParameters));
var replaceElementsObjectByIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsObjectByIdParameters, _super);
    function replaceElementsObjectByIdParameters(superThis, method, _path, keyOrId, id, object) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
        _this.send(object);
        return _this;
    }
    return replaceElementsObjectByIdParameters;
}(platformSDKMethodParameters));
var getElementsObjectByIdParameters = /** @class */ (function (_super) {
    __extends(getElementsObjectByIdParameters, _super);
    function getElementsObjectByIdParameters(superThis, method, _path, keyOrId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
    }
    return getElementsObjectByIdParameters;
}(platformSDKMethodParameters));
var createElementObjectFieldParameters = /** @class */ (function (_super) {
    __extends(createElementObjectFieldParameters, _super);
    function createElementObjectFieldParameters(superThis, method, _path, keyOrId, id, field) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
        _this.send(field);
        return _this;
    }
    return createElementObjectFieldParameters;
}(platformSDKMethodParameters));
var getElementsObjectsFieldsParameters = /** @class */ (function (_super) {
    __extends(getElementsObjectsFieldsParameters, _super);
    function getElementsObjectsFieldsParameters(superThis, method, _path, keyOrId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'accountOnly' optional parameter
     * @method
     * @name getElementsObjectsFieldsParameters#accountOnly
     */
    getElementsObjectsFieldsParameters.prototype.accountOnly = function (accountOnly) {
        return this.query({
            'accountOnly': accountOnly
        });
    };
    return getElementsObjectsFieldsParameters;
}(platformSDKMethodParameters));
var deleteElementsObjectsFieldByFieldIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsObjectsFieldByFieldIdParameters, _super);
    function deleteElementsObjectsFieldByFieldIdParameters(superThis, method, _path, keyOrId, id, fieldId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)
            .replace('{fieldId}', "" + fieldId)) || this;
    }
    return deleteElementsObjectsFieldByFieldIdParameters;
}(platformSDKMethodParameters));
var replaceElementsObjectsFieldByFieldIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsObjectsFieldByFieldIdParameters, _super);
    function replaceElementsObjectsFieldByFieldIdParameters(superThis, method, _path, keyOrId, id, fieldId, object) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)
            .replace('{fieldId}', "" + fieldId)) || this;
        _this.send(object);
        return _this;
    }
    return replaceElementsObjectsFieldByFieldIdParameters;
}(platformSDKMethodParameters));
var getElementsObjectsFieldByFieldIdParameters = /** @class */ (function (_super) {
    __extends(getElementsObjectsFieldByFieldIdParameters, _super);
    function getElementsObjectsFieldByFieldIdParameters(superThis, method, _path, keyOrId, id, fieldId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)
            .replace('{fieldId}', "" + fieldId)) || this;
    }
    return getElementsObjectsFieldByFieldIdParameters;
}(platformSDKMethodParameters));
var getElementsParametersParameters = /** @class */ (function (_super) {
    __extends(getElementsParametersParameters, _super);
    function getElementsParametersParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return getElementsParametersParameters;
}(platformSDKMethodParameters));
var createElementParameterParameters = /** @class */ (function (_super) {
    __extends(createElementParameterParameters, _super);
    function createElementParameterParameters(superThis, method, _path, keyOrId, parameter) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
        _this.send(parameter);
        return _this;
    }
    return createElementParameterParameters;
}(platformSDKMethodParameters));
var deleteElementsParameterByIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsParameterByIdParameters, _super);
    function deleteElementsParameterByIdParameters(superThis, method, _path, keyOrId, id, parameter) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
        _this.send(parameter);
        return _this;
    }
    return deleteElementsParameterByIdParameters;
}(platformSDKMethodParameters));
var replaceElementsParameterByIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsParameterByIdParameters, _super);
    function replaceElementsParameterByIdParameters(superThis, method, _path, keyOrId, id, parameter) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
        _this.send(parameter);
        return _this;
    }
    return replaceElementsParameterByIdParameters;
}(platformSDKMethodParameters));
var getElementsResourcesParameters = /** @class */ (function (_super) {
    __extends(getElementsResourcesParameters, _super);
    function getElementsResourcesParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getElementsResourcesParameters#where
     */
    getElementsResourcesParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'accountOnly' optional parameter
     * @method
     * @name getElementsResourcesParameters#accountOnly
     */
    getElementsResourcesParameters.prototype.accountOnly = function (accountOnly) {
        return this.query({
            'accountOnly': accountOnly
        });
    };
    return getElementsResourcesParameters;
}(platformSDKMethodParameters));
var createElementResourceParameters = /** @class */ (function (_super) {
    __extends(createElementResourceParameters, _super);
    function createElementResourceParameters(superThis, method, _path, keyOrId, resource) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
        _this.send(resource);
        return _this;
    }
    return createElementResourceParameters;
}(platformSDKMethodParameters));
var deleteElementsResourceByIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsResourceByIdParameters, _super);
    function deleteElementsResourceByIdParameters(superThis, method, _path, keyOrId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
    }
    return deleteElementsResourceByIdParameters;
}(platformSDKMethodParameters));
var replaceElementsResourceByIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsResourceByIdParameters, _super);
    function replaceElementsResourceByIdParameters(superThis, method, _path, keyOrId, id, resource) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
        _this.send(resource);
        return _this;
    }
    return replaceElementsResourceByIdParameters;
}(platformSDKMethodParameters));
var getElementsResourceByIdParameters = /** @class */ (function (_super) {
    __extends(getElementsResourceByIdParameters, _super);
    function getElementsResourceByIdParameters(superThis, method, _path, keyOrId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
    }
    return getElementsResourceByIdParameters;
}(platformSDKMethodParameters));
var getElementsResourcesHooksParameters = /** @class */ (function (_super) {
    __extends(getElementsResourcesHooksParameters, _super);
    function getElementsResourcesHooksParameters(superThis, method, _path, keyOrId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
    }
    return getElementsResourcesHooksParameters;
}(platformSDKMethodParameters));
var createElementResourceHookParameters = /** @class */ (function (_super) {
    __extends(createElementResourceHookParameters, _super);
    function createElementResourceHookParameters(superThis, method, _path, keyOrId, id, model) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
        _this.send(model);
        return _this;
    }
    return createElementResourceHookParameters;
}(platformSDKMethodParameters));
var getElementsResourcesHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(getElementsResourcesHookByHookIdParameters, _super);
    function getElementsResourcesHookByHookIdParameters(superThis, method, _path, keyOrId, id, hookId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)
            .replace('{hookId}', "" + hookId)) || this;
    }
    return getElementsResourcesHookByHookIdParameters;
}(platformSDKMethodParameters));
var deleteElementsResourcesHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsResourcesHookByHookIdParameters, _super);
    function deleteElementsResourcesHookByHookIdParameters(superThis, method, _path, keyOrId, id, hookId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)
            .replace('{hookId}', "" + hookId)) || this;
    }
    return deleteElementsResourcesHookByHookIdParameters;
}(platformSDKMethodParameters));
var replaceElementsResourcesHookByHookIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsResourcesHookByHookIdParameters, _super);
    function replaceElementsResourcesHookByHookIdParameters(superThis, method, _path, keyOrId, id, hookId, parameter) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)
            .replace('{hookId}', "" + hookId)) || this;
        _this.send(parameter);
        return _this;
    }
    return replaceElementsResourcesHookByHookIdParameters;
}(platformSDKMethodParameters));
var deleteElementsResourcesModelsParameters = /** @class */ (function (_super) {
    __extends(deleteElementsResourcesModelsParameters, _super);
    function deleteElementsResourcesModelsParameters(superThis, method, _path, keyOrId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
    }
    return deleteElementsResourcesModelsParameters;
}(platformSDKMethodParameters));
var getElementsResourcesModelsParameters = /** @class */ (function (_super) {
    __extends(getElementsResourcesModelsParameters, _super);
    function getElementsResourcesModelsParameters(superThis, method, _path, keyOrId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
    }
    return getElementsResourcesModelsParameters;
}(platformSDKMethodParameters));
var createElementResourceModelParameters = /** @class */ (function (_super) {
    __extends(createElementResourceModelParameters, _super);
    function createElementResourceModelParameters(superThis, method, _path, keyOrId, id, model) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
        _this.send(model);
        return _this;
    }
    return createElementResourceModelParameters;
}(platformSDKMethodParameters));
var getElementsResourcesParametersParameters = /** @class */ (function (_super) {
    __extends(getElementsResourcesParametersParameters, _super);
    function getElementsResourcesParametersParameters(superThis, method, _path, keyOrId, id) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
    }
    return getElementsResourcesParametersParameters;
}(platformSDKMethodParameters));
var createElementResourceParameterParameters = /** @class */ (function (_super) {
    __extends(createElementResourceParameterParameters, _super);
    function createElementResourceParameterParameters(superThis, method, _path, keyOrId, id, parameter) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)) || this;
        _this.send(parameter);
        return _this;
    }
    return createElementResourceParameterParameters;
}(platformSDKMethodParameters));
var deleteElementsResourcesParameterByParameterIdParameters = /** @class */ (function (_super) {
    __extends(deleteElementsResourcesParameterByParameterIdParameters, _super);
    function deleteElementsResourcesParameterByParameterIdParameters(superThis, method, _path, keyOrId, id, parameterId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)
            .replace('{parameterId}', "" + parameterId)) || this;
    }
    return deleteElementsResourcesParameterByParameterIdParameters;
}(platformSDKMethodParameters));
var replaceElementsResourcesParameterByParameterIdParameters = /** @class */ (function (_super) {
    __extends(replaceElementsResourcesParameterByParameterIdParameters, _super);
    function replaceElementsResourcesParameterByParameterIdParameters(superThis, method, _path, keyOrId, id, parameterId, parameter) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{id}', "" + id)
            .replace('{parameterId}', "" + parameterId)) || this;
        _this.send(parameter);
        return _this;
    }
    return replaceElementsResourcesParameterByParameterIdParameters;
}(platformSDKMethodParameters));
var getFormulasParameters = /** @class */ (function (_super) {
    __extends(getFormulasParameters, _super);
    function getFormulasParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'includeSystem' optional parameter
     * @method
     * @name getFormulasParameters#includeSystem
     */
    getFormulasParameters.prototype.includeSystem = function (includeSystem) {
        return this.query({
            'includeSystem': includeSystem
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getFormulasParameters#nextPage
     */
    getFormulasParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getFormulasParameters#pageSize
     */
    getFormulasParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getFormulasParameters;
}(platformSDKMethodParameters));
var createFormulaParameters = /** @class */ (function (_super) {
    __extends(createFormulaParameters, _super);
    function createFormulaParameters(superThis, method, _path, body) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(body);
        return _this;
    }
    return createFormulaParameters;
}(platformSDKMethodParameters));
var getFormulasAnalyticsParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsParameters, _super);
    function getFormulasAnalyticsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getFormulasAnalyticsParameters#from
     */
    getFormulasAnalyticsParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getFormulasAnalyticsParameters#to
     */
    getFormulasAnalyticsParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getFormulasAnalyticsParameters#interval
     */
    getFormulasAnalyticsParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getFormulasAnalyticsParameters#accountIds
     */
    getFormulasAnalyticsParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getFormulasAnalyticsParameters;
}(platformSDKMethodParameters));
var getFormulasAnalyticsAccountsParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsAccountsParameters, _super);
    function getFormulasAnalyticsAccountsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getFormulasAnalyticsAccountsParameters#from
     */
    getFormulasAnalyticsAccountsParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getFormulasAnalyticsAccountsParameters#to
     */
    getFormulasAnalyticsAccountsParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getFormulasAnalyticsAccountsParameters#interval
     */
    getFormulasAnalyticsAccountsParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getFormulasAnalyticsAccountsParameters#accountIds
     */
    getFormulasAnalyticsAccountsParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getFormulasAnalyticsAccountsParameters;
}(platformSDKMethodParameters));
var getFormulasAnalyticsInstancesParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsInstancesParameters, _super);
    function getFormulasAnalyticsInstancesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getFormulasAnalyticsInstancesParameters#from
     */
    getFormulasAnalyticsInstancesParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getFormulasAnalyticsInstancesParameters#to
     */
    getFormulasAnalyticsInstancesParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getFormulasAnalyticsInstancesParameters#interval
     */
    getFormulasAnalyticsInstancesParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getFormulasAnalyticsInstancesParameters#accountIds
     */
    getFormulasAnalyticsInstancesParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getFormulasAnalyticsInstancesParameters;
}(platformSDKMethodParameters));
var getFormulasAnalyticsStatusesParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsStatusesParameters, _super);
    function getFormulasAnalyticsStatusesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getFormulasAnalyticsStatusesParameters#from
     */
    getFormulasAnalyticsStatusesParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getFormulasAnalyticsStatusesParameters#to
     */
    getFormulasAnalyticsStatusesParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getFormulasAnalyticsStatusesParameters#interval
     */
    getFormulasAnalyticsStatusesParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getFormulasAnalyticsStatusesParameters#accountIds
     */
    getFormulasAnalyticsStatusesParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getFormulasAnalyticsStatusesParameters;
}(platformSDKMethodParameters));
var getFormulasAnalyticsStatusesNowParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsStatusesNowParameters, _super);
    function getFormulasAnalyticsStatusesNowParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getFormulasAnalyticsStatusesNowParameters#accountIds
     */
    getFormulasAnalyticsStatusesNowParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getFormulasAnalyticsStatusesNowParameters;
}(platformSDKMethodParameters));
var getFormulasAnalyticsStepsParameters = /** @class */ (function (_super) {
    __extends(getFormulasAnalyticsStepsParameters, _super);
    function getFormulasAnalyticsStepsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getFormulasAnalyticsStepsParameters#from
     */
    getFormulasAnalyticsStepsParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getFormulasAnalyticsStepsParameters#to
     */
    getFormulasAnalyticsStepsParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getFormulasAnalyticsStepsParameters#interval
     */
    getFormulasAnalyticsStepsParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getFormulasAnalyticsStepsParameters#accountIds
     */
    getFormulasAnalyticsStepsParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getFormulasAnalyticsStepsParameters;
}(platformSDKMethodParameters));
var getFormulasInstancesParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesParameters, _super);
    function getFormulasInstancesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'elementInstanceId' optional parameter
     * @method
     * @name getFormulasInstancesParameters#elementInstanceId
     */
    getFormulasInstancesParameters.prototype.elementInstanceId = function (elementInstanceId) {
        return this.query({
            'elementInstanceId': elementInstanceId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getFormulasInstancesParameters#nextPage
     */
    getFormulasInstancesParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getFormulasInstancesParameters#pageSize
     */
    getFormulasInstancesParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'searchText' optional parameter
     * @method
     * @name getFormulasInstancesParameters#searchText
     */
    getFormulasInstancesParameters.prototype.searchText = function (searchText) {
        return this.query({
            'searchText': searchText
        });
    };
    return getFormulasInstancesParameters;
}(platformSDKMethodParameters));
var getFormulasInstancesExecutionsStepsValuesParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsStepsValuesParameters, _super);
    function getFormulasInstancesExecutionsStepsValuesParameters(superThis, method, _path, stepExecutionId) {
        return _super.call(this, superThis, method, _path
            .replace('{stepExecutionId}', "" + stepExecutionId)) || this;
    }
    return getFormulasInstancesExecutionsStepsValuesParameters;
}(platformSDKMethodParameters));
var getFormulasInstancesExecutionByExecutionIdParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionByExecutionIdParameters, _super);
    function getFormulasInstancesExecutionByExecutionIdParameters(superThis, method, _path, executionId) {
        return _super.call(this, superThis, method, _path
            .replace('{executionId}', "" + executionId)) || this;
    }
    return getFormulasInstancesExecutionByExecutionIdParameters;
}(platformSDKMethodParameters));
var updateFormulasInstancesExecutionByExecutionIdParameters = /** @class */ (function (_super) {
    __extends(updateFormulasInstancesExecutionByExecutionIdParameters, _super);
    function updateFormulasInstancesExecutionByExecutionIdParameters(superThis, method, _path, executionId, status) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{executionId}', "" + executionId)) || this;
        _this.send(status);
        return _this;
    }
    return updateFormulasInstancesExecutionByExecutionIdParameters;
}(platformSDKMethodParameters));
var getFormulasInstancesExecutionsErrorsParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsErrorsParameters, _super);
    function getFormulasInstancesExecutionsErrorsParameters(superThis, method, _path, executionId) {
        return _super.call(this, superThis, method, _path
            .replace('{executionId}', "" + executionId)) || this;
    }
    return getFormulasInstancesExecutionsErrorsParameters;
}(platformSDKMethodParameters));
var getFormulasInstancesExecutionsStepsParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsStepsParameters, _super);
    function getFormulasInstancesExecutionsStepsParameters(superThis, method, _path, executionId) {
        return _super.call(this, superThis, method, _path
            .replace('{executionId}', "" + executionId)) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsStepsParameters#nextPage
     */
    getFormulasInstancesExecutionsStepsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsStepsParameters#pageSize
     */
    getFormulasInstancesExecutionsStepsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getFormulasInstancesExecutionsStepsParameters;
}(platformSDKMethodParameters));
var getFormulasInstanceByInstanceIdParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstanceByInstanceIdParameters, _super);
    function getFormulasInstanceByInstanceIdParameters(superThis, method, _path, instanceId) {
        return _super.call(this, superThis, method, _path
            .replace('{instanceId}', "" + instanceId)) || this;
    }
    return getFormulasInstanceByInstanceIdParameters;
}(platformSDKMethodParameters));
var getFormulasInstancesExecutionsParameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsParameters, _super);
    function getFormulasInstancesExecutionsParameters(superThis, method, _path, instanceId) {
        return _super.call(this, superThis, method, _path
            .replace('{instanceId}', "" + instanceId)) || this;
    }
    /**
     * Set the 'eventId' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsParameters#eventId
     */
    getFormulasInstancesExecutionsParameters.prototype.eventId = function (eventId) {
        return this.query({
            'eventId': eventId
        });
    };
    /**
     * Set the 'objectId' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsParameters#objectId
     */
    getFormulasInstancesExecutionsParameters.prototype.objectId = function (objectId) {
        return this.query({
            'objectId': objectId
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsParameters#nextPage
     */
    getFormulasInstancesExecutionsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsParameters#pageSize
     */
    getFormulasInstancesExecutionsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getFormulasInstancesExecutionsParameters;
}(platformSDKMethodParameters));
var createFormulaInstanceExecutionParameters = /** @class */ (function (_super) {
    __extends(createFormulaInstanceExecutionParameters, _super);
    function createFormulaInstanceExecutionParameters(superThis, method, _path, instanceId) {
        return _super.call(this, superThis, method, _path
            .replace('{instanceId}', "" + instanceId)) || this;
    }
    /**
     * Set the 'trigger' optional parameter
     * @method
     * @name createFormulaInstanceExecutionParameters#trigger
     */
    createFormulaInstanceExecutionParameters.prototype.trigger = function (trigger) {
        if (this.queryParameters['trigger'] !== undefined) {
            this._body = this.queryParameters['trigger'];
        }
    };
    return createFormulaInstanceExecutionParameters;
}(platformSDKMethodParameters));
var getFormulasInstancesExecutionsErrors2Parameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsErrors2Parameters, _super);
    function getFormulasInstancesExecutionsErrors2Parameters(superThis, method, _path, instanceId) {
        return _super.call(this, superThis, method, _path
            .replace('{instanceId}', "" + instanceId)) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsErrors2Parameters#nextPage
     */
    getFormulasInstancesExecutionsErrors2Parameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsErrors2Parameters#pageSize
     */
    getFormulasInstancesExecutionsErrors2Parameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsErrors2Parameters#from
     */
    getFormulasInstancesExecutionsErrors2Parameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsErrors2Parameters#to
     */
    getFormulasInstancesExecutionsErrors2Parameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    return getFormulasInstancesExecutionsErrors2Parameters;
}(platformSDKMethodParameters));
var getFormulasInstancesExecutionsErrors2_1Parameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutionsErrors2_1Parameters, _super);
    function getFormulasInstancesExecutionsErrors2_1Parameters(superThis, method, _path, formulaId) {
        return _super.call(this, superThis, method, _path
            .replace('{formulaId}', "" + formulaId)) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsErrors2_1Parameters#nextPage
     */
    getFormulasInstancesExecutionsErrors2_1Parameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsErrors2_1Parameters#pageSize
     */
    getFormulasInstancesExecutionsErrors2_1Parameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsErrors2_1Parameters#from
     */
    getFormulasInstancesExecutionsErrors2_1Parameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getFormulasInstancesExecutionsErrors2_1Parameters#to
     */
    getFormulasInstancesExecutionsErrors2_1Parameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    return getFormulasInstancesExecutionsErrors2_1Parameters;
}(platformSDKMethodParameters));
var deleteFormulaByIdParameters = /** @class */ (function (_super) {
    __extends(deleteFormulaByIdParameters, _super);
    function deleteFormulaByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteFormulaByIdParameters;
}(platformSDKMethodParameters));
var getFormulaByIdParameters = /** @class */ (function (_super) {
    __extends(getFormulaByIdParameters, _super);
    function getFormulaByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getFormulaByIdParameters;
}(platformSDKMethodParameters));
var replaceFormulaByIdParameters = /** @class */ (function (_super) {
    __extends(replaceFormulaByIdParameters, _super);
    function replaceFormulaByIdParameters(superThis, method, _path, id, formula) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(formula);
        return _this;
    }
    return replaceFormulaByIdParameters;
}(platformSDKMethodParameters));
var updateFormulaByIdParameters = /** @class */ (function (_super) {
    __extends(updateFormulaByIdParameters, _super);
    function updateFormulaByIdParameters(superThis, method, _path, id, formula) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(formula);
        return _this;
    }
    return updateFormulaByIdParameters;
}(platformSDKMethodParameters));
var createFormulaConfigurationParameters = /** @class */ (function (_super) {
    __extends(createFormulaConfigurationParameters, _super);
    function createFormulaConfigurationParameters(superThis, method, _path, id, configuration) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(configuration);
        return _this;
    }
    return createFormulaConfigurationParameters;
}(platformSDKMethodParameters));
var deleteFormulasConfigurationByConfigurationIdParameters = /** @class */ (function (_super) {
    __extends(deleteFormulasConfigurationByConfigurationIdParameters, _super);
    function deleteFormulasConfigurationByConfigurationIdParameters(superThis, method, _path, id, configurationId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{configurationId}', "" + configurationId)) || this;
    }
    return deleteFormulasConfigurationByConfigurationIdParameters;
}(platformSDKMethodParameters));
var getFormulasConfigurationByConfigurationIdParameters = /** @class */ (function (_super) {
    __extends(getFormulasConfigurationByConfigurationIdParameters, _super);
    function getFormulasConfigurationByConfigurationIdParameters(superThis, method, _path, id, configurationId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{configurationId}', "" + configurationId)) || this;
    }
    return getFormulasConfigurationByConfigurationIdParameters;
}(platformSDKMethodParameters));
var replaceFormulasConfigurationByConfigurationIdParameters = /** @class */ (function (_super) {
    __extends(replaceFormulasConfigurationByConfigurationIdParameters, _super);
    function replaceFormulasConfigurationByConfigurationIdParameters(superThis, method, _path, id, configurationId, configuration) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{configurationId}', "" + configurationId)) || this;
        _this.send(configuration);
        return _this;
    }
    return replaceFormulasConfigurationByConfigurationIdParameters;
}(platformSDKMethodParameters));
var getFormulasExportParameters = /** @class */ (function (_super) {
    __extends(getFormulasExportParameters, _super);
    function getFormulasExportParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getFormulasExportParameters;
}(platformSDKMethodParameters));
var getFormulasInstances2Parameters = /** @class */ (function (_super) {
    __extends(getFormulasInstances2Parameters, _super);
    function getFormulasInstances2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getFormulasInstances2Parameters#nextPage
     */
    getFormulasInstances2Parameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getFormulasInstances2Parameters#pageSize
     */
    getFormulasInstances2Parameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getFormulasInstances2Parameters;
}(platformSDKMethodParameters));
var createFormulaInstanceParameters = /** @class */ (function (_super) {
    __extends(createFormulaInstanceParameters, _super);
    function createFormulaInstanceParameters(superThis, method, _path, id, formulaInstance) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(formulaInstance);
        return _this;
    }
    return createFormulaInstanceParameters;
}(platformSDKMethodParameters));
var deleteFormulasInstanceByInstanceIdParameters = /** @class */ (function (_super) {
    __extends(deleteFormulasInstanceByInstanceIdParameters, _super);
    function deleteFormulasInstanceByInstanceIdParameters(superThis, method, _path, id, instanceId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{instanceId}', "" + instanceId)) || this;
    }
    return deleteFormulasInstanceByInstanceIdParameters;
}(platformSDKMethodParameters));
var getFormulasInstanceByInstanceId2Parameters = /** @class */ (function (_super) {
    __extends(getFormulasInstanceByInstanceId2Parameters, _super);
    function getFormulasInstanceByInstanceId2Parameters(superThis, method, _path, id, instanceId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{instanceId}', "" + instanceId)) || this;
    }
    return getFormulasInstanceByInstanceId2Parameters;
}(platformSDKMethodParameters));
var replaceFormulasInstanceByInstanceIdParameters = /** @class */ (function (_super) {
    __extends(replaceFormulasInstanceByInstanceIdParameters, _super);
    function replaceFormulasInstanceByInstanceIdParameters(superThis, method, _path, id, instanceId, formulaInstance) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{instanceId}', "" + instanceId)) || this;
        _this.send(formulaInstance);
        return _this;
    }
    return replaceFormulasInstanceByInstanceIdParameters;
}(platformSDKMethodParameters));
var replaceFormulasInstancesActiveParameters = /** @class */ (function (_super) {
    __extends(replaceFormulasInstancesActiveParameters, _super);
    function replaceFormulasInstancesActiveParameters(superThis, method, _path, id, instanceId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{instanceId}', "" + instanceId)) || this;
    }
    return replaceFormulasInstancesActiveParameters;
}(platformSDKMethodParameters));
var deleteFormulasInstancesActiveParameters = /** @class */ (function (_super) {
    __extends(deleteFormulasInstancesActiveParameters, _super);
    function deleteFormulasInstancesActiveParameters(superThis, method, _path, id, instanceId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{instanceId}', "" + instanceId)) || this;
    }
    return deleteFormulasInstancesActiveParameters;
}(platformSDKMethodParameters));
var getFormulasInstancesExecutions2Parameters = /** @class */ (function (_super) {
    __extends(getFormulasInstancesExecutions2Parameters, _super);
    function getFormulasInstancesExecutions2Parameters(superThis, method, _path, id, instanceId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{instanceId}', "" + instanceId)) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getFormulasInstancesExecutions2Parameters#nextPage
     */
    getFormulasInstancesExecutions2Parameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getFormulasInstancesExecutions2Parameters#pageSize
     */
    getFormulasInstancesExecutions2Parameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getFormulasInstancesExecutions2Parameters;
}(platformSDKMethodParameters));
var getFormulasStepsParameters = /** @class */ (function (_super) {
    __extends(getFormulasStepsParameters, _super);
    function getFormulasStepsParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getFormulasStepsParameters;
}(platformSDKMethodParameters));
var createFormulaStepParameters = /** @class */ (function (_super) {
    __extends(createFormulaStepParameters, _super);
    function createFormulaStepParameters(superThis, method, _path, id, step) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(step);
        return _this;
    }
    return createFormulaStepParameters;
}(platformSDKMethodParameters));
var deleteFormulasStepByStepIdParameters = /** @class */ (function (_super) {
    __extends(deleteFormulasStepByStepIdParameters, _super);
    function deleteFormulasStepByStepIdParameters(superThis, method, _path, id, stepId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{stepId}', "" + stepId)) || this;
    }
    return deleteFormulasStepByStepIdParameters;
}(platformSDKMethodParameters));
var getFormulasStepByStepIdParameters = /** @class */ (function (_super) {
    __extends(getFormulasStepByStepIdParameters, _super);
    function getFormulasStepByStepIdParameters(superThis, method, _path, id, stepId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{stepId}', "" + stepId)) || this;
    }
    return getFormulasStepByStepIdParameters;
}(platformSDKMethodParameters));
var replaceFormulasStepByStepIdParameters = /** @class */ (function (_super) {
    __extends(replaceFormulasStepByStepIdParameters, _super);
    function replaceFormulasStepByStepIdParameters(superThis, method, _path, id, stepId, step) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{stepId}', "" + stepId)) || this;
        _this.send(step);
        return _this;
    }
    return replaceFormulasStepByStepIdParameters;
}(platformSDKMethodParameters));
var createFormulaTriggerParameters = /** @class */ (function (_super) {
    __extends(createFormulaTriggerParameters, _super);
    function createFormulaTriggerParameters(superThis, method, _path, id, trigger) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(trigger);
        return _this;
    }
    return createFormulaTriggerParameters;
}(platformSDKMethodParameters));
var deleteFormulasTriggerByTriggerIdParameters = /** @class */ (function (_super) {
    __extends(deleteFormulasTriggerByTriggerIdParameters, _super);
    function deleteFormulasTriggerByTriggerIdParameters(superThis, method, _path, id, triggerId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{triggerId}', "" + triggerId)) || this;
    }
    return deleteFormulasTriggerByTriggerIdParameters;
}(platformSDKMethodParameters));
var getFormulasTriggerByTriggerIdParameters = /** @class */ (function (_super) {
    __extends(getFormulasTriggerByTriggerIdParameters, _super);
    function getFormulasTriggerByTriggerIdParameters(superThis, method, _path, id, triggerId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{triggerId}', "" + triggerId)) || this;
    }
    return getFormulasTriggerByTriggerIdParameters;
}(platformSDKMethodParameters));
var replaceFormulasTriggerByTriggerIdParameters = /** @class */ (function (_super) {
    __extends(replaceFormulasTriggerByTriggerIdParameters, _super);
    function replaceFormulasTriggerByTriggerIdParameters(superThis, method, _path, id, triggerId, trigger) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{triggerId}', "" + triggerId)) || this;
        _this.send(trigger);
        return _this;
    }
    return replaceFormulasTriggerByTriggerIdParameters;
}(platformSDKMethodParameters));
var getHubsParameters = /** @class */ (function (_super) {
    __extends(getHubsParameters, _super);
    function getHubsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getHubsParameters#nextPage
     */
    getHubsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getHubsParameters#pageSize
     */
    getHubsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getHubsParameters;
}(platformSDKMethodParameters));
var createHubParameters = /** @class */ (function (_super) {
    __extends(createHubParameters, _super);
    function createHubParameters(superThis, method, _path, hub) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(hub);
        return _this;
    }
    return createHubParameters;
}(platformSDKMethodParameters));
var getHubsKeysParameters = /** @class */ (function (_super) {
    __extends(getHubsKeysParameters, _super);
    function getHubsKeysParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getHubsKeysParameters#nextPage
     */
    getHubsKeysParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getHubsKeysParameters#pageSize
     */
    getHubsKeysParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getHubsKeysParameters;
}(platformSDKMethodParameters));
var deleteHubByKeyParameters = /** @class */ (function (_super) {
    __extends(deleteHubByKeyParameters, _super);
    function deleteHubByKeyParameters(superThis, method, _path, key) {
        return _super.call(this, superThis, method, _path
            .replace('{key}', "" + key)) || this;
    }
    return deleteHubByKeyParameters;
}(platformSDKMethodParameters));
var getHubByKeyParameters = /** @class */ (function (_super) {
    __extends(getHubByKeyParameters, _super);
    function getHubByKeyParameters(superThis, method, _path, key) {
        return _super.call(this, superThis, method, _path
            .replace('{key}', "" + key)) || this;
    }
    return getHubByKeyParameters;
}(platformSDKMethodParameters));
var getHubsElementsParameters = /** @class */ (function (_super) {
    __extends(getHubsElementsParameters, _super);
    function getHubsElementsParameters(superThis, method, _path, key) {
        return _super.call(this, superThis, method, _path
            .replace('{key}', "" + key)) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getHubsElementsParameters#nextPage
     */
    getHubsElementsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getHubsElementsParameters#pageSize
     */
    getHubsElementsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getHubsElementsParameters;
}(platformSDKMethodParameters));
var getInstancesParameters = /** @class */ (function (_super) {
    __extends(getInstancesParameters, _super);
    function getInstancesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'tags' optional parameter
     * @method
     * @name getInstancesParameters#tags
     */
    getInstancesParameters.prototype.tags = function (tags) {
        return this.query({
            'tags[]': tags
        });
    };
    /**
     * Set the 'searchText' optional parameter
     * @method
     * @name getInstancesParameters#searchText
     */
    getInstancesParameters.prototype.searchText = function (searchText) {
        return this.query({
            'searchText': searchText
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getInstancesParameters#nextPage
     */
    getInstancesParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getInstancesParameters#pageSize
     */
    getInstancesParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'hydrate' optional parameter
     * @method
     * @name getInstancesParameters#hydrate
     */
    getInstancesParameters.prototype.hydrate = function (hydrate) {
        return this.query({
            'hydrate': hydrate
        });
    };
    return getInstancesParameters;
}(platformSDKMethodParameters));
var createInstanceParameters = /** @class */ (function (_super) {
    __extends(createInstanceParameters, _super);
    function createInstanceParameters(superThis, method, _path, elementInstance) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(elementInstance);
        return _this;
    }
    return createInstanceParameters;
}(platformSDKMethodParameters));
var deleteInstancesParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesParameters, _super);
    function deleteInstancesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return deleteInstancesParameters;
}(platformSDKMethodParameters));
var replaceInstancesParameters = /** @class */ (function (_super) {
    __extends(replaceInstancesParameters, _super);
    function replaceInstancesParameters(superThis, method, _path, elementInstance) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(elementInstance);
        return _this;
    }
    return replaceInstancesParameters;
}(platformSDKMethodParameters));
var updateInstancesParameters = /** @class */ (function (_super) {
    __extends(updateInstancesParameters, _super);
    function updateInstancesParameters(superThis, method, _path, elementInstance) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(elementInstance);
        return _this;
    }
    return updateInstancesParameters;
}(platformSDKMethodParameters));
var getInstancesConfigurationParameters = /** @class */ (function (_super) {
    __extends(getInstancesConfigurationParameters, _super);
    function getInstancesConfigurationParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getInstancesConfigurationParameters;
}(platformSDKMethodParameters));
var getInstancesConfigurationByConfigIdParameters = /** @class */ (function (_super) {
    __extends(getInstancesConfigurationByConfigIdParameters, _super);
    function getInstancesConfigurationByConfigIdParameters(superThis, method, _path, configId) {
        return _super.call(this, superThis, method, _path
            .replace('{configId}', "" + configId)) || this;
    }
    return getInstancesConfigurationByConfigIdParameters;
}(platformSDKMethodParameters));
var updateInstancesConfigurationByConfigIdParameters = /** @class */ (function (_super) {
    __extends(updateInstancesConfigurationByConfigIdParameters, _super);
    function updateInstancesConfigurationByConfigIdParameters(superThis, method, _path, configId, config) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{configId}', "" + configId)) || this;
        _this.send(config);
        return _this;
    }
    return updateInstancesConfigurationByConfigIdParameters;
}(platformSDKMethodParameters));
var getInstancesDocsParameters = /** @class */ (function (_super) {
    __extends(getInstancesDocsParameters, _super);
    function getInstancesDocsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'operationId' optional parameter
     * @method
     * @name getInstancesDocsParameters#operationId
     */
    getInstancesDocsParameters.prototype.operationId = function (operationId) {
        return this.query({
            'operationId': operationId
        });
    };
    /**
     * Set the 'version' optional parameter
     * @method
     * @name getInstancesDocsParameters#version
     */
    getInstancesDocsParameters.prototype.version = function (version) {
        return this.query({
            'version': version
        });
    };
    return getInstancesDocsParameters;
}(platformSDKMethodParameters));
var getInstancesDocByOperationIdParameters = /** @class */ (function (_super) {
    __extends(getInstancesDocByOperationIdParameters, _super);
    function getInstancesDocByOperationIdParameters(superThis, method, _path, operationId) {
        return _super.call(this, superThis, method, _path
            .replace('{operationId}', "" + operationId)) || this;
    }
    /**
     * Set the 'discovery' optional parameter
     * @method
     * @name getInstancesDocByOperationIdParameters#discovery
     */
    getInstancesDocByOperationIdParameters.prototype.discovery = function (discovery) {
        return this.query({
            'discovery': discovery
        });
    };
    /**
     * Set the 'basic' optional parameter
     * @method
     * @name getInstancesDocByOperationIdParameters#basic
     */
    getInstancesDocByOperationIdParameters.prototype.basic = function (basic) {
        return this.query({
            'basic': basic
        });
    };
    /**
     * Set the 'version' optional parameter
     * @method
     * @name getInstancesDocByOperationIdParameters#version
     */
    getInstancesDocByOperationIdParameters.prototype.version = function (version) {
        return this.query({
            'version': version
        });
    };
    return getInstancesDocByOperationIdParameters;
}(platformSDKMethodParameters));
var getInstancesDocsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getInstancesDocsDefinitionsParameters, _super);
    function getInstancesDocsDefinitionsParameters(superThis, method, _path, operationId) {
        return _super.call(this, superThis, method, _path
            .replace('{operationId}', "" + operationId)) || this;
    }
    /**
     * Set the 'discovery' optional parameter
     * @method
     * @name getInstancesDocsDefinitionsParameters#discovery
     */
    getInstancesDocsDefinitionsParameters.prototype.discovery = function (discovery) {
        return this.query({
            'discovery': discovery
        });
    };
    /**
     * Set the 'resolveReferences' optional parameter
     * @method
     * @name getInstancesDocsDefinitionsParameters#resolveReferences
     */
    getInstancesDocsDefinitionsParameters.prototype.resolveReferences = function (resolveReferences) {
        return this.query({
            'resolveReferences': resolveReferences
        });
    };
    /**
     * Set the 'basic' optional parameter
     * @method
     * @name getInstancesDocsDefinitionsParameters#basic
     */
    getInstancesDocsDefinitionsParameters.prototype.basic = function (basic) {
        return this.query({
            'basic': basic
        });
    };
    /**
     * Set the 'version' optional parameter
     * @method
     * @name getInstancesDocsDefinitionsParameters#version
     */
    getInstancesDocsDefinitionsParameters.prototype.version = function (version) {
        return this.query({
            'version': version
        });
    };
    return getInstancesDocsDefinitionsParameters;
}(platformSDKMethodParameters));
var replaceInstancesEnabledParameters = /** @class */ (function (_super) {
    __extends(replaceInstancesEnabledParameters, _super);
    function replaceInstancesEnabledParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return replaceInstancesEnabledParameters;
}(platformSDKMethodParameters));
var deleteInstancesEnabledParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesEnabledParameters, _super);
    function deleteInstancesEnabledParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return deleteInstancesEnabledParameters;
}(platformSDKMethodParameters));
var getInstancesEventsParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventsParameters, _super);
    function getInstancesEventsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getInstancesEventsParameters;
}(platformSDKMethodParameters));
var getInstancesEventsAnalyticsParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventsAnalyticsParameters, _super);
    function getInstancesEventsAnalyticsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsParameters#from
     */
    getInstancesEventsAnalyticsParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsParameters#to
     */
    getInstancesEventsAnalyticsParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsParameters#interval
     */
    getInstancesEventsAnalyticsParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsParameters#accountIds
     */
    getInstancesEventsAnalyticsParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getInstancesEventsAnalyticsParameters;
}(platformSDKMethodParameters));
var getInstancesEventsAnalyticsAccountsParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventsAnalyticsAccountsParameters, _super);
    function getInstancesEventsAnalyticsAccountsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsAccountsParameters#from
     */
    getInstancesEventsAnalyticsAccountsParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsAccountsParameters#to
     */
    getInstancesEventsAnalyticsAccountsParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsAccountsParameters#interval
     */
    getInstancesEventsAnalyticsAccountsParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsAccountsParameters#accountIds
     */
    getInstancesEventsAnalyticsAccountsParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getInstancesEventsAnalyticsAccountsParameters;
}(platformSDKMethodParameters));
var getInstancesEventsAnalyticsInstancesParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventsAnalyticsInstancesParameters, _super);
    function getInstancesEventsAnalyticsInstancesParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsInstancesParameters#from
     */
    getInstancesEventsAnalyticsInstancesParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsInstancesParameters#to
     */
    getInstancesEventsAnalyticsInstancesParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsInstancesParameters#interval
     */
    getInstancesEventsAnalyticsInstancesParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getInstancesEventsAnalyticsInstancesParameters#accountIds
     */
    getInstancesEventsAnalyticsInstancesParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getInstancesEventsAnalyticsInstancesParameters;
}(platformSDKMethodParameters));
var getInstancesEventsDispositionsParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventsDispositionsParameters, _super);
    function getInstancesEventsDispositionsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getInstancesEventsDispositionsParameters#from
     */
    getInstancesEventsDispositionsParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getInstancesEventsDispositionsParameters#to
     */
    getInstancesEventsDispositionsParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getInstancesEventsDispositionsParameters#nextPage
     */
    getInstancesEventsDispositionsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getInstancesEventsDispositionsParameters#pageSize
     */
    getInstancesEventsDispositionsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    return getInstancesEventsDispositionsParameters;
}(platformSDKMethodParameters));
var getInstancesEventByEventIdParameters = /** @class */ (function (_super) {
    __extends(getInstancesEventByEventIdParameters, _super);
    function getInstancesEventByEventIdParameters(superThis, method, _path, eventId) {
        return _super.call(this, superThis, method, _path
            .replace('{eventId}', "" + eventId)) || this;
    }
    return getInstancesEventByEventIdParameters;
}(platformSDKMethodParameters));
var getInstancesObjectsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getInstancesObjectsDefinitionsParameters, _super);
    function getInstancesObjectsDefinitionsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getInstancesObjectsDefinitionsParameters;
}(platformSDKMethodParameters));
var deleteInstancesObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesObjectsObjectNameDefinitionsParameters, _super);
    function deleteInstancesObjectsObjectNameDefinitionsParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    return deleteInstancesObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
var getInstancesObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getInstancesObjectsObjectNameDefinitionsParameters, _super);
    function getInstancesObjectsObjectNameDefinitionsParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    return getInstancesObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
var createInstanceObjectObjectNameDefinitionParameters = /** @class */ (function (_super) {
    __extends(createInstanceObjectObjectNameDefinitionParameters, _super);
    function createInstanceObjectObjectNameDefinitionParameters(superThis, method, _path, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return createInstanceObjectObjectNameDefinitionParameters;
}(platformSDKMethodParameters));
var replaceInstancesObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(replaceInstancesObjectsObjectNameDefinitionsParameters, _super);
    function replaceInstancesObjectsObjectNameDefinitionsParameters(superThis, method, _path, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return replaceInstancesObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
var replaceInstancesTraceLoggingParameters = /** @class */ (function (_super) {
    __extends(replaceInstancesTraceLoggingParameters, _super);
    function replaceInstancesTraceLoggingParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'config' optional parameter
     * @method
     * @name replaceInstancesTraceLoggingParameters#config
     */
    replaceInstancesTraceLoggingParameters.prototype.config = function (config) {
        if (this.queryParameters['config'] !== undefined) {
            this._body = this.queryParameters['config'];
        }
    };
    return replaceInstancesTraceLoggingParameters;
}(platformSDKMethodParameters));
var deleteInstancesTraceLoggingParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTraceLoggingParameters, _super);
    function deleteInstancesTraceLoggingParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return deleteInstancesTraceLoggingParameters;
}(platformSDKMethodParameters));
var deleteInstancesTransformationsParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTransformationsParameters, _super);
    function deleteInstancesTransformationsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return deleteInstancesTransformationsParameters;
}(platformSDKMethodParameters));
var getInstancesTransformationsParameters = /** @class */ (function (_super) {
    __extends(getInstancesTransformationsParameters, _super);
    function getInstancesTransformationsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getInstancesTransformationsParameters;
}(platformSDKMethodParameters));
var deleteInstancesTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTransformationByObjectNameParameters, _super);
    function deleteInstancesTransformationByObjectNameParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    return deleteInstancesTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var getInstancesTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(getInstancesTransformationByObjectNameParameters, _super);
    function getInstancesTransformationByObjectNameParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    return getInstancesTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var createInstanceTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(createInstanceTransformationByObjectNameParameters, _super);
    function createInstanceTransformationByObjectNameParameters(superThis, method, _path, objectName, transformation) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(transformation);
        return _this;
    }
    return createInstanceTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var replaceInstancesTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(replaceInstancesTransformationByObjectNameParameters, _super);
    function replaceInstancesTransformationByObjectNameParameters(superThis, method, _path, objectName, transformation) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(transformation);
        return _this;
    }
    return replaceInstancesTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var deleteInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(deleteInstanceByIdParameters, _super);
    function deleteInstanceByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteInstanceByIdParameters;
}(platformSDKMethodParameters));
var getInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(getInstanceByIdParameters, _super);
    function getInstanceByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getInstanceByIdParameters;
}(platformSDKMethodParameters));
var replaceInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(replaceInstanceByIdParameters, _super);
    function replaceInstanceByIdParameters(superThis, method, _path, id, elementInstance) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(elementInstance);
        return _this;
    }
    return replaceInstanceByIdParameters;
}(platformSDKMethodParameters));
var updateInstanceByIdParameters = /** @class */ (function (_super) {
    __extends(updateInstanceByIdParameters, _super);
    function updateInstanceByIdParameters(superThis, method, _path, id, elementInstance) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(elementInstance);
        return _this;
    }
    return updateInstanceByIdParameters;
}(platformSDKMethodParameters));
var getInstancesConfiguration2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesConfiguration2Parameters, _super);
    function getInstancesConfiguration2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getInstancesConfiguration2Parameters;
}(platformSDKMethodParameters));
var getInstancesConfigurationByConfigId2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesConfigurationByConfigId2Parameters, _super);
    function getInstancesConfigurationByConfigId2Parameters(superThis, method, _path, id, configId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{configId}', "" + configId)) || this;
    }
    return getInstancesConfigurationByConfigId2Parameters;
}(platformSDKMethodParameters));
var updateInstancesConfigurationByConfigId2Parameters = /** @class */ (function (_super) {
    __extends(updateInstancesConfigurationByConfigId2Parameters, _super);
    function updateInstancesConfigurationByConfigId2Parameters(superThis, method, _path, id, configId, config) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{configId}', "" + configId)) || this;
        _this.send(config);
        return _this;
    }
    return updateInstancesConfigurationByConfigId2Parameters;
}(platformSDKMethodParameters));
var getInstancesDocs2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesDocs2Parameters, _super);
    function getInstancesDocs2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'operationId' optional parameter
     * @method
     * @name getInstancesDocs2Parameters#operationId
     */
    getInstancesDocs2Parameters.prototype.operationId = function (operationId) {
        return this.query({
            'operationId': operationId
        });
    };
    /**
     * Set the 'version' optional parameter
     * @method
     * @name getInstancesDocs2Parameters#version
     */
    getInstancesDocs2Parameters.prototype.version = function (version) {
        return this.query({
            'version': version
        });
    };
    return getInstancesDocs2Parameters;
}(platformSDKMethodParameters));
var getInstancesDocByOperationId2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesDocByOperationId2Parameters, _super);
    function getInstancesDocByOperationId2Parameters(superThis, method, _path, id, operationId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{operationId}', "" + operationId)) || this;
    }
    /**
     * Set the 'discovery' optional parameter
     * @method
     * @name getInstancesDocByOperationId2Parameters#discovery
     */
    getInstancesDocByOperationId2Parameters.prototype.discovery = function (discovery) {
        return this.query({
            'discovery': discovery
        });
    };
    /**
     * Set the 'basic' optional parameter
     * @method
     * @name getInstancesDocByOperationId2Parameters#basic
     */
    getInstancesDocByOperationId2Parameters.prototype.basic = function (basic) {
        return this.query({
            'basic': basic
        });
    };
    /**
     * Set the 'version' optional parameter
     * @method
     * @name getInstancesDocByOperationId2Parameters#version
     */
    getInstancesDocByOperationId2Parameters.prototype.version = function (version) {
        return this.query({
            'version': version
        });
    };
    return getInstancesDocByOperationId2Parameters;
}(platformSDKMethodParameters));
var getInstancesDocsDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesDocsDefinitions2Parameters, _super);
    function getInstancesDocsDefinitions2Parameters(superThis, method, _path, id, operationId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{operationId}', "" + operationId)) || this;
    }
    /**
     * Set the 'discovery' optional parameter
     * @method
     * @name getInstancesDocsDefinitions2Parameters#discovery
     */
    getInstancesDocsDefinitions2Parameters.prototype.discovery = function (discovery) {
        return this.query({
            'discovery': discovery
        });
    };
    /**
     * Set the 'resolveReferences' optional parameter
     * @method
     * @name getInstancesDocsDefinitions2Parameters#resolveReferences
     */
    getInstancesDocsDefinitions2Parameters.prototype.resolveReferences = function (resolveReferences) {
        return this.query({
            'resolveReferences': resolveReferences
        });
    };
    /**
     * Set the 'basic' optional parameter
     * @method
     * @name getInstancesDocsDefinitions2Parameters#basic
     */
    getInstancesDocsDefinitions2Parameters.prototype.basic = function (basic) {
        return this.query({
            'basic': basic
        });
    };
    /**
     * Set the 'version' optional parameter
     * @method
     * @name getInstancesDocsDefinitions2Parameters#version
     */
    getInstancesDocsDefinitions2Parameters.prototype.version = function (version) {
        return this.query({
            'version': version
        });
    };
    return getInstancesDocsDefinitions2Parameters;
}(platformSDKMethodParameters));
var replaceInstancesEnabled2Parameters = /** @class */ (function (_super) {
    __extends(replaceInstancesEnabled2Parameters, _super);
    function replaceInstancesEnabled2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return replaceInstancesEnabled2Parameters;
}(platformSDKMethodParameters));
var deleteInstancesEnabled2Parameters = /** @class */ (function (_super) {
    __extends(deleteInstancesEnabled2Parameters, _super);
    function deleteInstancesEnabled2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteInstancesEnabled2Parameters;
}(platformSDKMethodParameters));
var getInstancesEvents2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesEvents2Parameters, _super);
    function getInstancesEvents2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getInstancesEvents2Parameters;
}(platformSDKMethodParameters));
var getInstancesEventByEventId2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesEventByEventId2Parameters, _super);
    function getInstancesEventByEventId2Parameters(superThis, method, _path, id, eventId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{eventId}', "" + eventId)) || this;
    }
    return getInstancesEventByEventId2Parameters;
}(platformSDKMethodParameters));
var getInstancesObjectsDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesObjectsDefinitions2Parameters, _super);
    function getInstancesObjectsDefinitions2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getInstancesObjectsDefinitions2Parameters;
}(platformSDKMethodParameters));
var deleteInstancesObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(deleteInstancesObjectsObjectNameDefinitions2Parameters, _super);
    function deleteInstancesObjectsObjectNameDefinitions2Parameters(superThis, method, _path, id, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
    }
    return deleteInstancesObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
var getInstancesObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesObjectsObjectNameDefinitions2Parameters, _super);
    function getInstancesObjectsObjectNameDefinitions2Parameters(superThis, method, _path, id, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
    }
    return getInstancesObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
var createInstanceObjectObjectNameDefinition2Parameters = /** @class */ (function (_super) {
    __extends(createInstanceObjectObjectNameDefinition2Parameters, _super);
    function createInstanceObjectObjectNameDefinition2Parameters(superThis, method, _path, id, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return createInstanceObjectObjectNameDefinition2Parameters;
}(platformSDKMethodParameters));
var replaceInstancesObjectsObjectNameDefinitions2Parameters = /** @class */ (function (_super) {
    __extends(replaceInstancesObjectsObjectNameDefinitions2Parameters, _super);
    function replaceInstancesObjectsObjectNameDefinitions2Parameters(superThis, method, _path, id, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return replaceInstancesObjectsObjectNameDefinitions2Parameters;
}(platformSDKMethodParameters));
var replaceInstancesTraceLogging2Parameters = /** @class */ (function (_super) {
    __extends(replaceInstancesTraceLogging2Parameters, _super);
    function replaceInstancesTraceLogging2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'config' optional parameter
     * @method
     * @name replaceInstancesTraceLogging2Parameters#config
     */
    replaceInstancesTraceLogging2Parameters.prototype.config = function (config) {
        if (this.queryParameters['config'] !== undefined) {
            this._body = this.queryParameters['config'];
        }
    };
    return replaceInstancesTraceLogging2Parameters;
}(platformSDKMethodParameters));
var deleteInstancesTraceLogging2Parameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTraceLogging2Parameters, _super);
    function deleteInstancesTraceLogging2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteInstancesTraceLogging2Parameters;
}(platformSDKMethodParameters));
var deleteInstancesTransformations2Parameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTransformations2Parameters, _super);
    function deleteInstancesTransformations2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteInstancesTransformations2Parameters;
}(platformSDKMethodParameters));
var getInstancesTransformations2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesTransformations2Parameters, _super);
    function getInstancesTransformations2Parameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getInstancesTransformations2Parameters;
}(platformSDKMethodParameters));
var deleteInstancesTransformationByObjectName2Parameters = /** @class */ (function (_super) {
    __extends(deleteInstancesTransformationByObjectName2Parameters, _super);
    function deleteInstancesTransformationByObjectName2Parameters(superThis, method, _path, id, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
    }
    return deleteInstancesTransformationByObjectName2Parameters;
}(platformSDKMethodParameters));
var getInstancesTransformationByObjectName2Parameters = /** @class */ (function (_super) {
    __extends(getInstancesTransformationByObjectName2Parameters, _super);
    function getInstancesTransformationByObjectName2Parameters(superThis, method, _path, id, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
    }
    return getInstancesTransformationByObjectName2Parameters;
}(platformSDKMethodParameters));
var createInstanceTransformationByObjectName2Parameters = /** @class */ (function (_super) {
    __extends(createInstanceTransformationByObjectName2Parameters, _super);
    function createInstanceTransformationByObjectName2Parameters(superThis, method, _path, id, objectName, transformation) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(transformation);
        return _this;
    }
    return createInstanceTransformationByObjectName2Parameters;
}(platformSDKMethodParameters));
var replaceInstancesTransformationByObjectName2Parameters = /** @class */ (function (_super) {
    __extends(replaceInstancesTransformationByObjectName2Parameters, _super);
    function replaceInstancesTransformationByObjectName2Parameters(superThis, method, _path, id, objectName, transformation) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(transformation);
        return _this;
    }
    return replaceInstancesTransformationByObjectName2Parameters;
}(platformSDKMethodParameters));
var getJobsParameters = /** @class */ (function (_super) {
    __extends(getJobsParameters, _super);
    function getJobsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getJobsParameters;
}(platformSDKMethodParameters));
var createJobParameters = /** @class */ (function (_super) {
    __extends(createJobParameters, _super);
    function createJobParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'body' optional parameter
     * @method
     * @name createJobParameters#body
     */
    createJobParameters.prototype.body = function (body) {
        if (this.queryParameters['body'] !== undefined) {
            this._body = this.queryParameters['body'];
        }
    };
    return createJobParameters;
}(platformSDKMethodParameters));
var getJobsExecutionsParameters = /** @class */ (function (_super) {
    __extends(getJobsExecutionsParameters, _super);
    function getJobsExecutionsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getJobsExecutionsParameters#pageSize
     */
    getJobsExecutionsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'elementKeys' optional parameter
     * @method
     * @name getJobsExecutionsParameters#elementKeys
     */
    getJobsExecutionsParameters.prototype.elementKeys = function (elementKeys) {
        return this.query({
            'elementKeys[]': elementKeys
        });
    };
    /**
     * Set the 'startTime' optional parameter
     * @method
     * @name getJobsExecutionsParameters#startTime
     */
    getJobsExecutionsParameters.prototype.startTime = function (startTime) {
        return this.query({
            'startTime': startTime
        });
    };
    /**
     * Set the 'endTime' optional parameter
     * @method
     * @name getJobsExecutionsParameters#endTime
     */
    getJobsExecutionsParameters.prototype.endTime = function (endTime) {
        return this.query({
            'endTime': endTime
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getJobsExecutionsParameters#nextPage
     */
    getJobsExecutionsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    return getJobsExecutionsParameters;
}(platformSDKMethodParameters));
var deleteJobByIdParameters = /** @class */ (function (_super) {
    __extends(deleteJobByIdParameters, _super);
    function deleteJobByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteJobByIdParameters;
}(platformSDKMethodParameters));
var getJobByIdParameters = /** @class */ (function (_super) {
    __extends(getJobByIdParameters, _super);
    function getJobByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getJobByIdParameters;
}(platformSDKMethodParameters));
var replaceJobsDisableParameters = /** @class */ (function (_super) {
    __extends(replaceJobsDisableParameters, _super);
    function replaceJobsDisableParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return replaceJobsDisableParameters;
}(platformSDKMethodParameters));
var replaceJobsEnableParameters = /** @class */ (function (_super) {
    __extends(replaceJobsEnableParameters, _super);
    function replaceJobsEnableParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return replaceJobsEnableParameters;
}(platformSDKMethodParameters));
var getJobsHistoryParameters = /** @class */ (function (_super) {
    __extends(getJobsHistoryParameters, _super);
    function getJobsHistoryParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getJobsHistoryParameters;
}(platformSDKMethodParameters));
var getJobsHistoryByHistoryIdParameters = /** @class */ (function (_super) {
    __extends(getJobsHistoryByHistoryIdParameters, _super);
    function getJobsHistoryByHistoryIdParameters(superThis, method, _path, id, historyId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{historyId}', "" + historyId)) || this;
    }
    return getJobsHistoryByHistoryIdParameters;
}(platformSDKMethodParameters));
var updateJobsRescheduleParameters = /** @class */ (function (_super) {
    __extends(updateJobsRescheduleParameters, _super);
    function updateJobsRescheduleParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'body' optional parameter
     * @method
     * @name updateJobsRescheduleParameters#body
     */
    updateJobsRescheduleParameters.prototype.body = function (body) {
        if (this.queryParameters['body'] !== undefined) {
            this._body = this.queryParameters['body'];
        }
    };
    return updateJobsRescheduleParameters;
}(platformSDKMethodParameters));
var getMetricsApiParameters = /** @class */ (function (_super) {
    __extends(getMetricsApiParameters, _super);
    function getMetricsApiParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'customerIds' optional parameter
     * @method
     * @name getMetricsApiParameters#customerIds
     */
    getMetricsApiParameters.prototype.customerIds = function (customerIds) {
        return this.query({
            'customerIds[]': customerIds
        });
    };
    /**
     * Set the 'orgIds' optional parameter
     * @method
     * @name getMetricsApiParameters#orgIds
     */
    getMetricsApiParameters.prototype.orgIds = function (orgIds) {
        return this.query({
            'orgIds[]': orgIds
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getMetricsApiParameters#accountIds
     */
    getMetricsApiParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getMetricsApiParameters#from
     */
    getMetricsApiParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getMetricsApiParameters#to
     */
    getMetricsApiParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetricsApiParameters#pageSize
     */
    getMetricsApiParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getMetricsApiParameters#nextPage
     */
    getMetricsApiParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'agg' optional parameter
     * @method
     * @name getMetricsApiParameters#agg
     */
    getMetricsApiParameters.prototype.agg = function (agg) {
        return this.query({
            'agg': agg
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getMetricsApiParameters#interval
     */
    getMetricsApiParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'emptyIntervals' optional parameter
     * @method
     * @name getMetricsApiParameters#emptyIntervals
     */
    getMetricsApiParameters.prototype.emptyIntervals = function (emptyIntervals) {
        return this.query({
            'emptyIntervals': emptyIntervals
        });
    };
    return getMetricsApiParameters;
}(platformSDKMethodParameters));
var getMetricsBulkJobsParameters = /** @class */ (function (_super) {
    __extends(getMetricsBulkJobsParameters, _super);
    function getMetricsBulkJobsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'customerIds' optional parameter
     * @method
     * @name getMetricsBulkJobsParameters#customerIds
     */
    getMetricsBulkJobsParameters.prototype.customerIds = function (customerIds) {
        return this.query({
            'customerIds[]': customerIds
        });
    };
    /**
     * Set the 'orgIds' optional parameter
     * @method
     * @name getMetricsBulkJobsParameters#orgIds
     */
    getMetricsBulkJobsParameters.prototype.orgIds = function (orgIds) {
        return this.query({
            'orgIds[]': orgIds
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getMetricsBulkJobsParameters#accountIds
     */
    getMetricsBulkJobsParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getMetricsBulkJobsParameters#from
     */
    getMetricsBulkJobsParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getMetricsBulkJobsParameters#to
     */
    getMetricsBulkJobsParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetricsBulkJobsParameters#pageSize
     */
    getMetricsBulkJobsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getMetricsBulkJobsParameters#nextPage
     */
    getMetricsBulkJobsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'agg' optional parameter
     * @method
     * @name getMetricsBulkJobsParameters#agg
     */
    getMetricsBulkJobsParameters.prototype.agg = function (agg) {
        return this.query({
            'agg': agg
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getMetricsBulkJobsParameters#interval
     */
    getMetricsBulkJobsParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'emptyIntervals' optional parameter
     * @method
     * @name getMetricsBulkJobsParameters#emptyIntervals
     */
    getMetricsBulkJobsParameters.prototype.emptyIntervals = function (emptyIntervals) {
        return this.query({
            'emptyIntervals': emptyIntervals
        });
    };
    return getMetricsBulkJobsParameters;
}(platformSDKMethodParameters));
var getMetricsElementInstancesCreatedParameters = /** @class */ (function (_super) {
    __extends(getMetricsElementInstancesCreatedParameters, _super);
    function getMetricsElementInstancesCreatedParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'customerIds' optional parameter
     * @method
     * @name getMetricsElementInstancesCreatedParameters#customerIds
     */
    getMetricsElementInstancesCreatedParameters.prototype.customerIds = function (customerIds) {
        return this.query({
            'customerIds[]': customerIds
        });
    };
    /**
     * Set the 'orgIds' optional parameter
     * @method
     * @name getMetricsElementInstancesCreatedParameters#orgIds
     */
    getMetricsElementInstancesCreatedParameters.prototype.orgIds = function (orgIds) {
        return this.query({
            'orgIds[]': orgIds
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getMetricsElementInstancesCreatedParameters#accountIds
     */
    getMetricsElementInstancesCreatedParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getMetricsElementInstancesCreatedParameters#from
     */
    getMetricsElementInstancesCreatedParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getMetricsElementInstancesCreatedParameters#to
     */
    getMetricsElementInstancesCreatedParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetricsElementInstancesCreatedParameters#pageSize
     */
    getMetricsElementInstancesCreatedParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getMetricsElementInstancesCreatedParameters#nextPage
     */
    getMetricsElementInstancesCreatedParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'agg' optional parameter
     * @method
     * @name getMetricsElementInstancesCreatedParameters#agg
     */
    getMetricsElementInstancesCreatedParameters.prototype.agg = function (agg) {
        return this.query({
            'agg': agg
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getMetricsElementInstancesCreatedParameters#interval
     */
    getMetricsElementInstancesCreatedParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'emptyIntervals' optional parameter
     * @method
     * @name getMetricsElementInstancesCreatedParameters#emptyIntervals
     */
    getMetricsElementInstancesCreatedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        return this.query({
            'emptyIntervals': emptyIntervals
        });
    };
    return getMetricsElementInstancesCreatedParameters;
}(platformSDKMethodParameters));
var getMetricsElementsCreatedParameters = /** @class */ (function (_super) {
    __extends(getMetricsElementsCreatedParameters, _super);
    function getMetricsElementsCreatedParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'customerIds' optional parameter
     * @method
     * @name getMetricsElementsCreatedParameters#customerIds
     */
    getMetricsElementsCreatedParameters.prototype.customerIds = function (customerIds) {
        return this.query({
            'customerIds[]': customerIds
        });
    };
    /**
     * Set the 'orgIds' optional parameter
     * @method
     * @name getMetricsElementsCreatedParameters#orgIds
     */
    getMetricsElementsCreatedParameters.prototype.orgIds = function (orgIds) {
        return this.query({
            'orgIds[]': orgIds
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getMetricsElementsCreatedParameters#accountIds
     */
    getMetricsElementsCreatedParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getMetricsElementsCreatedParameters#from
     */
    getMetricsElementsCreatedParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getMetricsElementsCreatedParameters#to
     */
    getMetricsElementsCreatedParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetricsElementsCreatedParameters#pageSize
     */
    getMetricsElementsCreatedParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getMetricsElementsCreatedParameters#nextPage
     */
    getMetricsElementsCreatedParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'agg' optional parameter
     * @method
     * @name getMetricsElementsCreatedParameters#agg
     */
    getMetricsElementsCreatedParameters.prototype.agg = function (agg) {
        return this.query({
            'agg': agg
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getMetricsElementsCreatedParameters#interval
     */
    getMetricsElementsCreatedParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'emptyIntervals' optional parameter
     * @method
     * @name getMetricsElementsCreatedParameters#emptyIntervals
     */
    getMetricsElementsCreatedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        return this.query({
            'emptyIntervals': emptyIntervals
        });
    };
    return getMetricsElementsCreatedParameters;
}(platformSDKMethodParameters));
var getMetricsEventsParameters = /** @class */ (function (_super) {
    __extends(getMetricsEventsParameters, _super);
    function getMetricsEventsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'customerIds' optional parameter
     * @method
     * @name getMetricsEventsParameters#customerIds
     */
    getMetricsEventsParameters.prototype.customerIds = function (customerIds) {
        return this.query({
            'customerIds[]': customerIds
        });
    };
    /**
     * Set the 'orgIds' optional parameter
     * @method
     * @name getMetricsEventsParameters#orgIds
     */
    getMetricsEventsParameters.prototype.orgIds = function (orgIds) {
        return this.query({
            'orgIds[]': orgIds
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getMetricsEventsParameters#accountIds
     */
    getMetricsEventsParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getMetricsEventsParameters#from
     */
    getMetricsEventsParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getMetricsEventsParameters#to
     */
    getMetricsEventsParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetricsEventsParameters#pageSize
     */
    getMetricsEventsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getMetricsEventsParameters#nextPage
     */
    getMetricsEventsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'agg' optional parameter
     * @method
     * @name getMetricsEventsParameters#agg
     */
    getMetricsEventsParameters.prototype.agg = function (agg) {
        return this.query({
            'agg': agg
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getMetricsEventsParameters#interval
     */
    getMetricsEventsParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'emptyIntervals' optional parameter
     * @method
     * @name getMetricsEventsParameters#emptyIntervals
     */
    getMetricsEventsParameters.prototype.emptyIntervals = function (emptyIntervals) {
        return this.query({
            'emptyIntervals': emptyIntervals
        });
    };
    return getMetricsEventsParameters;
}(platformSDKMethodParameters));
var getMetricsFormulaExecutionsParameters = /** @class */ (function (_super) {
    __extends(getMetricsFormulaExecutionsParameters, _super);
    function getMetricsFormulaExecutionsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'customerIds' optional parameter
     * @method
     * @name getMetricsFormulaExecutionsParameters#customerIds
     */
    getMetricsFormulaExecutionsParameters.prototype.customerIds = function (customerIds) {
        return this.query({
            'customerIds[]': customerIds
        });
    };
    /**
     * Set the 'orgIds' optional parameter
     * @method
     * @name getMetricsFormulaExecutionsParameters#orgIds
     */
    getMetricsFormulaExecutionsParameters.prototype.orgIds = function (orgIds) {
        return this.query({
            'orgIds[]': orgIds
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getMetricsFormulaExecutionsParameters#accountIds
     */
    getMetricsFormulaExecutionsParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getMetricsFormulaExecutionsParameters#from
     */
    getMetricsFormulaExecutionsParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getMetricsFormulaExecutionsParameters#to
     */
    getMetricsFormulaExecutionsParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetricsFormulaExecutionsParameters#pageSize
     */
    getMetricsFormulaExecutionsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getMetricsFormulaExecutionsParameters#nextPage
     */
    getMetricsFormulaExecutionsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'agg' optional parameter
     * @method
     * @name getMetricsFormulaExecutionsParameters#agg
     */
    getMetricsFormulaExecutionsParameters.prototype.agg = function (agg) {
        return this.query({
            'agg': agg
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getMetricsFormulaExecutionsParameters#interval
     */
    getMetricsFormulaExecutionsParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'emptyIntervals' optional parameter
     * @method
     * @name getMetricsFormulaExecutionsParameters#emptyIntervals
     */
    getMetricsFormulaExecutionsParameters.prototype.emptyIntervals = function (emptyIntervals) {
        return this.query({
            'emptyIntervals': emptyIntervals
        });
    };
    return getMetricsFormulaExecutionsParameters;
}(platformSDKMethodParameters));
var getMetricsFormulasCreatedParameters = /** @class */ (function (_super) {
    __extends(getMetricsFormulasCreatedParameters, _super);
    function getMetricsFormulasCreatedParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'customerIds' optional parameter
     * @method
     * @name getMetricsFormulasCreatedParameters#customerIds
     */
    getMetricsFormulasCreatedParameters.prototype.customerIds = function (customerIds) {
        return this.query({
            'customerIds[]': customerIds
        });
    };
    /**
     * Set the 'orgIds' optional parameter
     * @method
     * @name getMetricsFormulasCreatedParameters#orgIds
     */
    getMetricsFormulasCreatedParameters.prototype.orgIds = function (orgIds) {
        return this.query({
            'orgIds[]': orgIds
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getMetricsFormulasCreatedParameters#accountIds
     */
    getMetricsFormulasCreatedParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getMetricsFormulasCreatedParameters#from
     */
    getMetricsFormulasCreatedParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getMetricsFormulasCreatedParameters#to
     */
    getMetricsFormulasCreatedParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetricsFormulasCreatedParameters#pageSize
     */
    getMetricsFormulasCreatedParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getMetricsFormulasCreatedParameters#nextPage
     */
    getMetricsFormulasCreatedParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'agg' optional parameter
     * @method
     * @name getMetricsFormulasCreatedParameters#agg
     */
    getMetricsFormulasCreatedParameters.prototype.agg = function (agg) {
        return this.query({
            'agg': agg
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getMetricsFormulasCreatedParameters#interval
     */
    getMetricsFormulasCreatedParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'emptyIntervals' optional parameter
     * @method
     * @name getMetricsFormulasCreatedParameters#emptyIntervals
     */
    getMetricsFormulasCreatedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        return this.query({
            'emptyIntervals': emptyIntervals
        });
    };
    return getMetricsFormulasCreatedParameters;
}(platformSDKMethodParameters));
var getMetricsHubApiParameters = /** @class */ (function (_super) {
    __extends(getMetricsHubApiParameters, _super);
    function getMetricsHubApiParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'customerIds' optional parameter
     * @method
     * @name getMetricsHubApiParameters#customerIds
     */
    getMetricsHubApiParameters.prototype.customerIds = function (customerIds) {
        return this.query({
            'customerIds[]': customerIds
        });
    };
    /**
     * Set the 'orgIds' optional parameter
     * @method
     * @name getMetricsHubApiParameters#orgIds
     */
    getMetricsHubApiParameters.prototype.orgIds = function (orgIds) {
        return this.query({
            'orgIds[]': orgIds
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getMetricsHubApiParameters#accountIds
     */
    getMetricsHubApiParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getMetricsHubApiParameters#from
     */
    getMetricsHubApiParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getMetricsHubApiParameters#to
     */
    getMetricsHubApiParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetricsHubApiParameters#pageSize
     */
    getMetricsHubApiParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getMetricsHubApiParameters#nextPage
     */
    getMetricsHubApiParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'agg' optional parameter
     * @method
     * @name getMetricsHubApiParameters#agg
     */
    getMetricsHubApiParameters.prototype.agg = function (agg) {
        return this.query({
            'agg': agg
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getMetricsHubApiParameters#interval
     */
    getMetricsHubApiParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'emptyIntervals' optional parameter
     * @method
     * @name getMetricsHubApiParameters#emptyIntervals
     */
    getMetricsHubApiParameters.prototype.emptyIntervals = function (emptyIntervals) {
        return this.query({
            'emptyIntervals': emptyIntervals
        });
    };
    return getMetricsHubApiParameters;
}(platformSDKMethodParameters));
var getMetricsHubsCreatedParameters = /** @class */ (function (_super) {
    __extends(getMetricsHubsCreatedParameters, _super);
    function getMetricsHubsCreatedParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'customerIds' optional parameter
     * @method
     * @name getMetricsHubsCreatedParameters#customerIds
     */
    getMetricsHubsCreatedParameters.prototype.customerIds = function (customerIds) {
        return this.query({
            'customerIds[]': customerIds
        });
    };
    /**
     * Set the 'orgIds' optional parameter
     * @method
     * @name getMetricsHubsCreatedParameters#orgIds
     */
    getMetricsHubsCreatedParameters.prototype.orgIds = function (orgIds) {
        return this.query({
            'orgIds[]': orgIds
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getMetricsHubsCreatedParameters#accountIds
     */
    getMetricsHubsCreatedParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getMetricsHubsCreatedParameters#from
     */
    getMetricsHubsCreatedParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getMetricsHubsCreatedParameters#to
     */
    getMetricsHubsCreatedParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetricsHubsCreatedParameters#pageSize
     */
    getMetricsHubsCreatedParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getMetricsHubsCreatedParameters#nextPage
     */
    getMetricsHubsCreatedParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'agg' optional parameter
     * @method
     * @name getMetricsHubsCreatedParameters#agg
     */
    getMetricsHubsCreatedParameters.prototype.agg = function (agg) {
        return this.query({
            'agg': agg
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getMetricsHubsCreatedParameters#interval
     */
    getMetricsHubsCreatedParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'emptyIntervals' optional parameter
     * @method
     * @name getMetricsHubsCreatedParameters#emptyIntervals
     */
    getMetricsHubsCreatedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        return this.query({
            'emptyIntervals': emptyIntervals
        });
    };
    return getMetricsHubsCreatedParameters;
}(platformSDKMethodParameters));
var getMetricsVdrsCreatedParameters = /** @class */ (function (_super) {
    __extends(getMetricsVdrsCreatedParameters, _super);
    function getMetricsVdrsCreatedParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'customerIds' optional parameter
     * @method
     * @name getMetricsVdrsCreatedParameters#customerIds
     */
    getMetricsVdrsCreatedParameters.prototype.customerIds = function (customerIds) {
        return this.query({
            'customerIds[]': customerIds
        });
    };
    /**
     * Set the 'orgIds' optional parameter
     * @method
     * @name getMetricsVdrsCreatedParameters#orgIds
     */
    getMetricsVdrsCreatedParameters.prototype.orgIds = function (orgIds) {
        return this.query({
            'orgIds[]': orgIds
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getMetricsVdrsCreatedParameters#accountIds
     */
    getMetricsVdrsCreatedParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getMetricsVdrsCreatedParameters#from
     */
    getMetricsVdrsCreatedParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getMetricsVdrsCreatedParameters#to
     */
    getMetricsVdrsCreatedParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetricsVdrsCreatedParameters#pageSize
     */
    getMetricsVdrsCreatedParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getMetricsVdrsCreatedParameters#nextPage
     */
    getMetricsVdrsCreatedParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'agg' optional parameter
     * @method
     * @name getMetricsVdrsCreatedParameters#agg
     */
    getMetricsVdrsCreatedParameters.prototype.agg = function (agg) {
        return this.query({
            'agg': agg
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getMetricsVdrsCreatedParameters#interval
     */
    getMetricsVdrsCreatedParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'emptyIntervals' optional parameter
     * @method
     * @name getMetricsVdrsCreatedParameters#emptyIntervals
     */
    getMetricsVdrsCreatedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        return this.query({
            'emptyIntervals': emptyIntervals
        });
    };
    return getMetricsVdrsCreatedParameters;
}(platformSDKMethodParameters));
var getMetricsVdrsInvokedParameters = /** @class */ (function (_super) {
    __extends(getMetricsVdrsInvokedParameters, _super);
    function getMetricsVdrsInvokedParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'customerIds' optional parameter
     * @method
     * @name getMetricsVdrsInvokedParameters#customerIds
     */
    getMetricsVdrsInvokedParameters.prototype.customerIds = function (customerIds) {
        return this.query({
            'customerIds[]': customerIds
        });
    };
    /**
     * Set the 'orgIds' optional parameter
     * @method
     * @name getMetricsVdrsInvokedParameters#orgIds
     */
    getMetricsVdrsInvokedParameters.prototype.orgIds = function (orgIds) {
        return this.query({
            'orgIds[]': orgIds
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getMetricsVdrsInvokedParameters#accountIds
     */
    getMetricsVdrsInvokedParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getMetricsVdrsInvokedParameters#from
     */
    getMetricsVdrsInvokedParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getMetricsVdrsInvokedParameters#to
     */
    getMetricsVdrsInvokedParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getMetricsVdrsInvokedParameters#pageSize
     */
    getMetricsVdrsInvokedParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getMetricsVdrsInvokedParameters#nextPage
     */
    getMetricsVdrsInvokedParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'agg' optional parameter
     * @method
     * @name getMetricsVdrsInvokedParameters#agg
     */
    getMetricsVdrsInvokedParameters.prototype.agg = function (agg) {
        return this.query({
            'agg': agg
        });
    };
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getMetricsVdrsInvokedParameters#interval
     */
    getMetricsVdrsInvokedParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'emptyIntervals' optional parameter
     * @method
     * @name getMetricsVdrsInvokedParameters#emptyIntervals
     */
    getMetricsVdrsInvokedParameters.prototype.emptyIntervals = function (emptyIntervals) {
        return this.query({
            'emptyIntervals': emptyIntervals
        });
    };
    return getMetricsVdrsInvokedParameters;
}(platformSDKMethodParameters));
var createOrganizationParameters = /** @class */ (function (_super) {
    __extends(createOrganizationParameters, _super);
    function createOrganizationParameters(superThis, method, _path, organization) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(organization);
        return _this;
    }
    return createOrganizationParameters;
}(platformSDKMethodParameters));
var deleteOrganizationsElementsTransformationsParameters = /** @class */ (function (_super) {
    __extends(deleteOrganizationsElementsTransformationsParameters, _super);
    function deleteOrganizationsElementsTransformationsParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return deleteOrganizationsElementsTransformationsParameters;
}(platformSDKMethodParameters));
var getOrganizationsElementsTransformationsParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsElementsTransformationsParameters, _super);
    function getOrganizationsElementsTransformationsParameters(superThis, method, _path, keyOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)) || this;
    }
    return getOrganizationsElementsTransformationsParameters;
}(platformSDKMethodParameters));
var deleteOrganizationsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(deleteOrganizationsElementsTransformationByObjectNameParameters, _super);
    function deleteOrganizationsElementsTransformationByObjectNameParameters(superThis, method, _path, keyOrId, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{objectName}', "" + objectName)) || this;
    }
    return deleteOrganizationsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var getOrganizationsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsElementsTransformationByObjectNameParameters, _super);
    function getOrganizationsElementsTransformationByObjectNameParameters(superThis, method, _path, keyOrId, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{objectName}', "" + objectName)) || this;
    }
    return getOrganizationsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var createOrganizationElementTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(createOrganizationElementTransformationByObjectNameParameters, _super);
    function createOrganizationElementTransformationByObjectNameParameters(superThis, method, _path, keyOrId, objectName, transformation) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(transformation);
        return _this;
    }
    return createOrganizationElementTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var replaceOrganizationsElementsTransformationByObjectNameParameters = /** @class */ (function (_super) {
    __extends(replaceOrganizationsElementsTransformationByObjectNameParameters, _super);
    function replaceOrganizationsElementsTransformationByObjectNameParameters(superThis, method, _path, keyOrId, objectName, transformation) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{keyOrId}', "" + keyOrId)
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(transformation);
        return _this;
    }
    return replaceOrganizationsElementsTransformationByObjectNameParameters;
}(platformSDKMethodParameters));
var getOrganizationsMeParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsMeParameters, _super);
    function getOrganizationsMeParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getOrganizationsMeParameters;
}(platformSDKMethodParameters));
var replaceOrganizationsMeParameters = /** @class */ (function (_super) {
    __extends(replaceOrganizationsMeParameters, _super);
    function replaceOrganizationsMeParameters(superThis, method, _path, body) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(body);
        return _this;
    }
    return replaceOrganizationsMeParameters;
}(platformSDKMethodParameters));
var deleteOrganizationsObjectsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(deleteOrganizationsObjectsDefinitionsParameters, _super);
    function deleteOrganizationsObjectsDefinitionsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return deleteOrganizationsObjectsDefinitionsParameters;
}(platformSDKMethodParameters));
var getOrganizationsObjectsDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsObjectsDefinitionsParameters, _super);
    function getOrganizationsObjectsDefinitionsParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    return getOrganizationsObjectsDefinitionsParameters;
}(platformSDKMethodParameters));
var createOrganizationObjectDefinitionParameters = /** @class */ (function (_super) {
    __extends(createOrganizationObjectDefinitionParameters, _super);
    function createOrganizationObjectDefinitionParameters(superThis, method, _path, body) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(body);
        return _this;
    }
    return createOrganizationObjectDefinitionParameters;
}(platformSDKMethodParameters));
var deleteOrganizationsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(deleteOrganizationsObjectsObjectNameDefinitionsParameters, _super);
    function deleteOrganizationsObjectsObjectNameDefinitionsParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    return deleteOrganizationsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
var getOrganizationsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsObjectsObjectNameDefinitionsParameters, _super);
    function getOrganizationsObjectsObjectNameDefinitionsParameters(superThis, method, _path, objectName) {
        return _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
    }
    return getOrganizationsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
var createOrganizationObjectObjectNameDefinitionParameters = /** @class */ (function (_super) {
    __extends(createOrganizationObjectObjectNameDefinitionParameters, _super);
    function createOrganizationObjectObjectNameDefinitionParameters(superThis, method, _path, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return createOrganizationObjectObjectNameDefinitionParameters;
}(platformSDKMethodParameters));
var replaceOrganizationsObjectsObjectNameDefinitionsParameters = /** @class */ (function (_super) {
    __extends(replaceOrganizationsObjectsObjectNameDefinitionsParameters, _super);
    function replaceOrganizationsObjectsObjectNameDefinitionsParameters(superThis, method, _path, objectName, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{objectName}', "" + objectName)) || this;
        _this.send(body);
        return _this;
    }
    return replaceOrganizationsObjectsObjectNameDefinitionsParameters;
}(platformSDKMethodParameters));
var getOrganizationsUsersParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsUsersParameters, _super);
    function getOrganizationsUsersParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getOrganizationsUsersParameters#where
     */
    getOrganizationsUsersParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getOrganizationsUsersParameters#nextPage
     */
    getOrganizationsUsersParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getOrganizationsUsersParameters#pageSize
     */
    getOrganizationsUsersParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getOrganizationsUsersParameters#includeInactive
     */
    getOrganizationsUsersParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getOrganizationsUsersParameters;
}(platformSDKMethodParameters));
var createOrganizationUserParameters = /** @class */ (function (_super) {
    __extends(createOrganizationUserParameters, _super);
    function createOrganizationUserParameters(superThis, method, _path, body) {
        var _this = _super.call(this, superThis, method, _path) || this;
        _this.send(body);
        return _this;
    }
    return createOrganizationUserParameters;
}(platformSDKMethodParameters));
var getOrganizationsUserByEmailOrIdParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsUserByEmailOrIdParameters, _super);
    function getOrganizationsUserByEmailOrIdParameters(superThis, method, _path, emailOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{emailOrId}', "" + emailOrId)) || this;
    }
    /**
     * Set the 'elementsUserPassword' optional parameter
     * @method
     * @name getOrganizationsUserByEmailOrIdParameters#elementsUserPassword
     */
    getOrganizationsUserByEmailOrIdParameters.prototype.elementsUserPassword = function (elementsUserPassword) {
        return this.set('Elements-User-Password', 'elementsUserPassword');
    };
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getOrganizationsUserByEmailOrIdParameters#includeInactive
     */
    getOrganizationsUserByEmailOrIdParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getOrganizationsUserByEmailOrIdParameters;
}(platformSDKMethodParameters));
var deleteOrganizationsUserByIdParameters = /** @class */ (function (_super) {
    __extends(deleteOrganizationsUserByIdParameters, _super);
    function deleteOrganizationsUserByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteOrganizationsUserByIdParameters;
}(platformSDKMethodParameters));
var updateOrganizationsUserByIdParameters = /** @class */ (function (_super) {
    __extends(updateOrganizationsUserByIdParameters, _super);
    function updateOrganizationsUserByIdParameters(superThis, method, _path, id, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(body);
        return _this;
    }
    /**
     * Set the 'permanent' optional parameter
     * @method
     * @name updateOrganizationsUserByIdParameters#permanent
     */
    updateOrganizationsUserByIdParameters.prototype.permanent = function (permanent) {
        return this.query({
            'permanent': permanent
        });
    };
    return updateOrganizationsUserByIdParameters;
}(platformSDKMethodParameters));
var createOrganizationAccountParameters = /** @class */ (function (_super) {
    __extends(createOrganizationAccountParameters, _super);
    function createOrganizationAccountParameters(superThis, method, _path, id, account) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(account);
        return _this;
    }
    return createOrganizationAccountParameters;
}(platformSDKMethodParameters));
var getOrganizationsAccountsParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsAccountsParameters, _super);
    function getOrganizationsAccountsParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getOrganizationsAccountsParameters#nextPage
     */
    getOrganizationsAccountsParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getOrganizationsAccountsParameters#pageSize
     */
    getOrganizationsAccountsParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getOrganizationsAccountsParameters#where
     */
    getOrganizationsAccountsParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getOrganizationsAccountsParameters#includeInactive
     */
    getOrganizationsAccountsParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getOrganizationsAccountsParameters;
}(platformSDKMethodParameters));
var getOrganizationsAccountByAccountIdParameters = /** @class */ (function (_super) {
    __extends(getOrganizationsAccountByAccountIdParameters, _super);
    function getOrganizationsAccountByAccountIdParameters(superThis, method, _path, id, accountId) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)
            .replace('{accountId}', "" + accountId)) || this;
    }
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getOrganizationsAccountByAccountIdParameters#includeInactive
     */
    getOrganizationsAccountByAccountIdParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getOrganizationsAccountByAccountIdParameters;
}(platformSDKMethodParameters));
var replaceOrganizationsStatusParameters = /** @class */ (function (_super) {
    __extends(replaceOrganizationsStatusParameters, _super);
    function replaceOrganizationsStatusParameters(superThis, method, _path, id, status) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(status);
        return _this;
    }
    return replaceOrganizationsStatusParameters;
}(platformSDKMethodParameters));
var getUsageParameters = /** @class */ (function (_super) {
    __extends(getUsageParameters, _super);
    function getUsageParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'hub' optional parameter
     * @method
     * @name getUsageParameters#hub
     */
    getUsageParameters.prototype.hub = function (hub) {
        return this.query({
            'hub': hub
        });
    };
    /**
     * Set the 'keys' optional parameter
     * @method
     * @name getUsageParameters#keys
     */
    getUsageParameters.prototype.keys = function (keys) {
        return this.query({
            'keys[]': keys
        });
    };
    /**
     * Set the 'tags' optional parameter
     * @method
     * @name getUsageParameters#tags
     */
    getUsageParameters.prototype.tags = function (tags) {
        return this.query({
            'tags[]': tags
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getUsageParameters#accountIds
     */
    getUsageParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    /**
     * Set the 'status' optional parameter
     * @method
     * @name getUsageParameters#status
     */
    getUsageParameters.prototype.status = function (status) {
        return this.query({
            'status': status
        });
    };
    /**
     * Set the 'from' optional parameter
     * @method
     * @name getUsageParameters#from
     */
    getUsageParameters.prototype.from = function (from) {
        return this.query({
            'from': from
        });
    };
    /**
     * Set the 'to' optional parameter
     * @method
     * @name getUsageParameters#to
     */
    getUsageParameters.prototype.to = function (to) {
        return this.query({
            'to': to
        });
    };
    /**
     * Set the 'searchText' optional parameter
     * @method
     * @name getUsageParameters#searchText
     */
    getUsageParameters.prototype.searchText = function (searchText) {
        return this.query({
            'searchText': searchText
        });
    };
    /**
     * Set the 'pageOffset' optional parameter
     * @method
     * @name getUsageParameters#pageOffset
     */
    getUsageParameters.prototype.pageOffset = function (pageOffset) {
        return this.query({
            'pageOffset': pageOffset
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getUsageParameters#pageSize
     */
    getUsageParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getUsageParameters#nextPage
     */
    getUsageParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    return getUsageParameters;
}(platformSDKMethodParameters));
var getUsageAnalyticsActivityParameters = /** @class */ (function (_super) {
    __extends(getUsageAnalyticsActivityParameters, _super);
    function getUsageAnalyticsActivityParameters(superThis, method, _path, from, to) {
        var _this = _super.call(this, superThis, method, _path) || this;
        return _this.query({
            'from': from
        });
        return _this.query({
            'to': to
        });
    }
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getUsageAnalyticsActivityParameters#interval
     */
    getUsageAnalyticsActivityParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getUsageAnalyticsActivityParameters#accountIds
     */
    getUsageAnalyticsActivityParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getUsageAnalyticsActivityParameters;
}(platformSDKMethodParameters));
var getUsageAnalyticsActivityElementsParameters = /** @class */ (function (_super) {
    __extends(getUsageAnalyticsActivityElementsParameters, _super);
    function getUsageAnalyticsActivityElementsParameters(superThis, method, _path, from, to) {
        var _this = _super.call(this, superThis, method, _path) || this;
        return _this.query({
            'from': from
        });
        return _this.query({
            'to': to
        });
    }
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getUsageAnalyticsActivityElementsParameters#interval
     */
    getUsageAnalyticsActivityElementsParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getUsageAnalyticsActivityElementsParameters#accountIds
     */
    getUsageAnalyticsActivityElementsParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getUsageAnalyticsActivityElementsParameters;
}(platformSDKMethodParameters));
var getUsageAnalyticsStatusesParameters = /** @class */ (function (_super) {
    __extends(getUsageAnalyticsStatusesParameters, _super);
    function getUsageAnalyticsStatusesParameters(superThis, method, _path, from, to) {
        var _this = _super.call(this, superThis, method, _path) || this;
        return _this.query({
            'from': from
        });
        return _this.query({
            'to': to
        });
    }
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getUsageAnalyticsStatusesParameters#interval
     */
    getUsageAnalyticsStatusesParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getUsageAnalyticsStatusesParameters#accountIds
     */
    getUsageAnalyticsStatusesParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getUsageAnalyticsStatusesParameters;
}(platformSDKMethodParameters));
var getUsageAnalyticsTimesParameters = /** @class */ (function (_super) {
    __extends(getUsageAnalyticsTimesParameters, _super);
    function getUsageAnalyticsTimesParameters(superThis, method, _path, from, to) {
        var _this = _super.call(this, superThis, method, _path) || this;
        return _this.query({
            'from': from
        });
        return _this.query({
            'to': to
        });
    }
    /**
     * Set the 'interval' optional parameter
     * @method
     * @name getUsageAnalyticsTimesParameters#interval
     */
    getUsageAnalyticsTimesParameters.prototype.interval = function (interval) {
        return this.query({
            'interval': interval
        });
    };
    /**
     * Set the 'accountIds' optional parameter
     * @method
     * @name getUsageAnalyticsTimesParameters#accountIds
     */
    getUsageAnalyticsTimesParameters.prototype.accountIds = function (accountIds) {
        return this.query({
            'accountIds[]': accountIds
        });
    };
    return getUsageAnalyticsTimesParameters;
}(platformSDKMethodParameters));
var getUsageByIdParameters = /** @class */ (function (_super) {
    __extends(getUsageByIdParameters, _super);
    function getUsageByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getUsageByIdParameters;
}(platformSDKMethodParameters));
var getUsersParameters = /** @class */ (function (_super) {
    __extends(getUsersParameters, _super);
    function getUsersParameters(superThis, method, _path) {
        return _super.call(this, superThis, method, _path) || this;
    }
    /**
     * Set the 'where' optional parameter
     * @method
     * @name getUsersParameters#where
     */
    getUsersParameters.prototype.where = function (where) {
        return this.query({
            'where': where
        });
    };
    /**
     * Set the 'nextPage' optional parameter
     * @method
     * @name getUsersParameters#nextPage
     */
    getUsersParameters.prototype.nextPage = function (nextPage) {
        return this.query({
            'nextPage': nextPage
        });
    };
    /**
     * Set the 'pageSize' optional parameter
     * @method
     * @name getUsersParameters#pageSize
     */
    getUsersParameters.prototype.pageSize = function (pageSize) {
        return this.query({
            'pageSize': pageSize
        });
    };
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getUsersParameters#includeInactive
     */
    getUsersParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getUsersParameters;
}(platformSDKMethodParameters));
var getUserByEmailOrIdParameters = /** @class */ (function (_super) {
    __extends(getUserByEmailOrIdParameters, _super);
    function getUserByEmailOrIdParameters(superThis, method, _path, emailOrId) {
        return _super.call(this, superThis, method, _path
            .replace('{emailOrId}', "" + emailOrId)) || this;
    }
    /**
     * Set the 'elementsUserPassword' optional parameter
     * @method
     * @name getUserByEmailOrIdParameters#elementsUserPassword
     */
    getUserByEmailOrIdParameters.prototype.elementsUserPassword = function (elementsUserPassword) {
        return this.set('Elements-User-Password', 'elementsUserPassword');
    };
    /**
     * Set the 'includeInactive' optional parameter
     * @method
     * @name getUserByEmailOrIdParameters#includeInactive
     */
    getUserByEmailOrIdParameters.prototype.includeInactive = function (includeInactive) {
        return this.query({
            'includeInactive': includeInactive
        });
    };
    return getUserByEmailOrIdParameters;
}(platformSDKMethodParameters));
var deleteUserByIdParameters = /** @class */ (function (_super) {
    __extends(deleteUserByIdParameters, _super);
    function deleteUserByIdParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return deleteUserByIdParameters;
}(platformSDKMethodParameters));
var updateUserByIdParameters = /** @class */ (function (_super) {
    __extends(updateUserByIdParameters, _super);
    function updateUserByIdParameters(superThis, method, _path, id, body) {
        var _this = _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
        _this.send(body);
        return _this;
    }
    return updateUserByIdParameters;
}(platformSDKMethodParameters));
var getUsersRolesParameters = /** @class */ (function (_super) {
    __extends(getUsersRolesParameters, _super);
    function getUsersRolesParameters(superThis, method, _path, id) {
        return _super.call(this, superThis, method, _path
            .replace('{id}', "" + id)) || this;
    }
    return getUsersRolesParameters;
}(platformSDKMethodParameters));
var deleteUsersRoleByRoleKeyParameters = /** @class */ (function (_super) {
    __extends(deleteUsersRoleByRoleKeyParameters, _super);
    function deleteUsersRoleByRoleKeyParameters(superThis, method, _path, userId, roleKey) {
        return _super.call(this, superThis, method, _path
            .replace('{userId}', "" + userId)
            .replace('{roleKey}', "" + roleKey)) || this;
    }
    return deleteUsersRoleByRoleKeyParameters;
}(platformSDKMethodParameters));
var replaceUsersRoleByRoleKeyParameters = /** @class */ (function (_super) {
    __extends(replaceUsersRoleByRoleKeyParameters, _super);
    function replaceUsersRoleByRoleKeyParameters(superThis, method, _path, userId, roleKey) {
        return _super.call(this, superThis, method, _path
            .replace('{userId}', "" + userId)
            .replace('{roleKey}', "" + roleKey)) || this;
    }
    return replaceUsersRoleByRoleKeyParameters;
}(platformSDKMethodParameters));
