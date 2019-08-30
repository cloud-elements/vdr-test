import * as request from "superagent";
type integer = number;
/**
 * 
 * @class platformSDK
 * Methods return a superagent compatible instance that fully supports the superagent API
 */
export class platformSDK {
    domain: string = "https://console.cloud-elements.com/elements/api-v2";
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
    post(path: string): platformSDKMethodParameters < request.Response > {
        return new platformSDKMethodParameters < request.Response > (this, 'post', path)
    }
    /**
     * Perform a PUT to the given path
     * @method
     * @name platformSDK#put
     * @param {string} path
     */
    put(path: string): platformSDKMethodParameters < request.Response > {
        return new platformSDKMethodParameters < request.Response > (this, 'put', path)
    }
    /**
     * Perform a PATCH to the given path
     * @method
     * @name platformSDK#patch
     * @param {string} path
     */
    patch(path: string): platformSDKMethodParameters < request.Response > {
        return new platformSDKMethodParameters < request.Response > (this, 'patch', path)
    }
    /**
     * Perform a DELETE to the given path
     * @method
     * @name platformSDK#delete
     * @param {string} path
     */
    delete(path: string): platformSDKMethodParameters < request.Response > {
        return new platformSDKMethodParameters < request.Response > (this, 'delete', path)
    }
    /**
     * Perform a GET to the given path
     * @method
     * @name platformSDK#get
     * @param {string} path
     */
    get(path: string): platformSDKMethodParameters < request.Response > {
        return new platformSDKMethodParameters < request.Response > (this, 'get', path)
    }
    /**
     * Retrieve accounts (identified by your organization secret). The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#getAccounts
     * @return { getAccountsParameters } To allow chaining
     */
    getAccounts(): getAccountsParameters {
        return new getAccountsParameters(this, 'GET', '/accounts');
    }
    /**
     * Create a sub-account (identified by your organization secret). The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#createAccount
     * @param {} body - The account to create<br/><br/>The required fields are:<br/><ul><li><b>externalId</b> - An external account identifier, typically an email address</li></ul><br/>Optional fields are:<br/><ul><li><b>name</b> - The name of the account</li><li><b>description</b> - A description of the account</li></ul><br/>Upon success, the created object will be returned.
     * @return { createAccountParameters } To allow chaining
     */
    createAccount(
        body:
        Account
        ,
    ): createAccountParameters {
        return new createAccountParameters(this, 'POST', '/accounts', body);
    }
    /**
     * Finds all instances for the default users' account
     * @method
     * @name platformSDK#getAccountsInstances
     * @return { getAccountsInstancesParameters } To allow chaining
     */
    getAccountsInstances(): getAccountsInstancesParameters {
        return new getAccountsInstancesParameters(this, 'GET', '/accounts/instances');
    }
    /**
     * Delete all object definitions within the default users' account.  If no object definitions exist then this will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsDefinitions
     * @return { deleteAccountsObjectsDefinitionsParameters } To allow chaining
     */
    deleteAccountsObjectsDefinitions(): deleteAccountsObjectsDefinitionsParameters {
        return new deleteAccountsObjectsDefinitionsParameters(this, 'DELETE', '/accounts/objects/definitions');
    }
    /**
     * Retrieve all of the object definitions within the users' default account.  Specifying an object definition that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsDefinitions
     * @return { getAccountsObjectsDefinitionsParameters } To allow chaining
     */
    getAccountsObjectsDefinitions(): getAccountsObjectsDefinitionsParameters {
        return new getAccountsObjectsDefinitionsParameters(this, 'GET', '/accounts/objects/definitions');
    }
    /**
     * Create multiple object definitions within this users' default account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectDefinition
     * @param {} body - The object definitions to create
     * @return { createAccountObjectDefinitionParameters } To allow chaining
     */
    createAccountObjectDefinition(
        body:
        Dictionary
        ,
    ): createAccountObjectDefinitionParameters {
        return new createAccountObjectDefinitionParameters(this, 'POST', '/accounts/objects/definitions', body);
    }
    /**
     * Delete an object definition associated with an objectName within the default users' account.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { deleteAccountsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    deleteAccountsObjectsObjectNameDefinitions(
        objectName: string
        ,
    ): deleteAccountsObjectsObjectNameDefinitionsParameters {
        return new deleteAccountsObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/accounts/objects/{objectName}/definitions', objectName);
    }
    /**
     * Retrieve a specific object definition associated with an objectName within the default users' account.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { getAccountsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    getAccountsObjectsObjectNameDefinitions(
        objectName: string
        ,
    ): getAccountsObjectsObjectNameDefinitionsParameters {
        return new getAccountsObjectsObjectNameDefinitionsParameters(this, 'GET', '/accounts/objects/{objectName}/definitions', objectName);
    }
    /**
     * Create a new object definition associated with an objectName within the users' default account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { createAccountObjectObjectNameDefinitionParameters } To allow chaining
     */
    createAccountObjectObjectNameDefinition(
        objectName: string
        ,
        body:
        Definition
        ,
    ): createAccountObjectObjectNameDefinitionParameters {
        return new createAccountObjectObjectNameDefinitionParameters(this, 'POST', '/accounts/objects/{objectName}/definitions', objectName, body);
    }
    /**
     * Update a specific object's definition associated with an objectName within the default users' account. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceAccountsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { replaceAccountsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    replaceAccountsObjectsObjectNameDefinitions(
        objectName: string
        ,
        body:
        Definition
        ,
    ): replaceAccountsObjectsObjectNameDefinitionsParameters {
        return new replaceAccountsObjectsObjectNameDefinitionsParameters(this, 'PUT', '/accounts/objects/{objectName}/definitions', objectName, body);
    }
    /**
     * List formula instances for an account by formula ID
     * @method
     * @name platformSDK#getAccountsFormulasInstances
     * @param {integer} accountId - The account ID
     * @param {integer} formulaId - The formula ID
     * @return { getAccountsFormulasInstancesParameters } To allow chaining
     */
    getAccountsFormulasInstances(
        accountId: number
        ,
        formulaId: number
        ,
    ): getAccountsFormulasInstancesParameters {
        return new getAccountsFormulasInstancesParameters(this, 'GET', '/accounts/{accountId}/formulas/{formulaId}/instances', accountId, formulaId);
    }
    /**
     * Delete an account by ID. The provided user secret must be that of the default admin user for the organization or customer. WARNING: Deleting an account will delete all users contained within that account along with all of those users' element and formula instances'.
     * @method
     * @name platformSDK#deleteAccountById
     * @param {integer} id - The ID of the account
     * @return { deleteAccountByIdParameters } To allow chaining
     */
    deleteAccountById(
        id: number
        ,
    ): deleteAccountByIdParameters {
        return new deleteAccountByIdParameters(this, 'DELETE', '/accounts/{id}', id);
    }
    /**
     * Retrieve an account by ID. The provided user secret must be that of the default admin user for the organization.
     * @method
     * @name platformSDK#getAccountById
     * @param {integer} id - The ID of the account
     * @return { getAccountByIdParameters } To allow chaining
     */
    getAccountById(
        id: number
        ,
    ): getAccountByIdParameters {
        return new getAccountByIdParameters(this, 'GET', '/accounts/{id}', id);
    }
    /**
     * Update an account (identified by your organization secret). The provided user secret must be that of the admin user for the organization. WARNING: If updating the 'active' field to false, the scheduled jobs for all of the account's users will be deleted.
     * @method
     * @name platformSDK#updateAccountById
     * @param {integer} id - The ID of the account
     * @param {} body - The updated account information<br/><br/>The fields that can be updated are:<br/><ul><li><b>externalId</b> - An external account identifier, typically an email address</li><li><b>name</b> - The name of the account</li><li><b>description</b> - A description of the account</li></ul><br/>Upon success, the updated object will be returned.
     * @return { updateAccountByIdParameters } To allow chaining
     */
    updateAccountById(
        id: number
        ,
        body:
        Account
        ,
    ): updateAccountByIdParameters {
        return new updateAccountByIdParameters(this, 'PATCH', '/accounts/{id}', id, body);
    }
    /**
     * Replace the data for an account by ID. The provided user secret must be that of the admin user for the organization or customer. WARNING: If updating the 'active' field to false, the scheduled jobs for all of the account's users will be deleted.
     * @method
     * @name platformSDK#replaceAccountById
     * @param {integer} id - The ID of the account
     * @param {} body - The updated account information.
     * @return { replaceAccountByIdParameters } To allow chaining
     */
    replaceAccountById(
        id: number
        ,
        body:
        Account_PUT
        ,
    ): replaceAccountByIdParameters {
        return new replaceAccountByIdParameters(this, 'PUT', '/accounts/{id}', id, body);
    }
    /**
     * Delete the default transformation for all elements of a certain type for this account.
     * @method
     * @name platformSDK#deleteAccountsElementsTransformations
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @return { deleteAccountsElementsTransformationsParameters } To allow chaining
     */
    deleteAccountsElementsTransformations(
        id: number
        ,
        keyOrId: string
        ,
    ): deleteAccountsElementsTransformationsParameters {
        return new deleteAccountsElementsTransformationsParameters(this, 'DELETE', '/accounts/{id}/elements/{keyOrId}/transformations', id, keyOrId);
    }
    /**
     * Retrieve the default transformation for all elements of a certain type for this account.
     * @method
     * @name platformSDK#getAccountsElementsTransformations
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @return { getAccountsElementsTransformationsParameters } To allow chaining
     */
    getAccountsElementsTransformations(
        id: number
        ,
        keyOrId: string
        ,
    ): getAccountsElementsTransformationsParameters {
        return new getAccountsElementsTransformationsParameters(this, 'GET', '/accounts/{id}/elements/{keyOrId}/transformations', id, keyOrId);
    }
    /**
     * Delete the default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#deleteAccountsElementsTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The object name
     * @return { deleteAccountsElementsTransformationByObjectNameParameters } To allow chaining
     */
    deleteAccountsElementsTransformationByObjectName(
        id: number
        ,
        keyOrId: string
        ,
        objectName: string
        ,
    ): deleteAccountsElementsTransformationByObjectNameParameters {
        return new deleteAccountsElementsTransformationByObjectNameParameters(this, 'DELETE', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName);
    }
    /**
     * Retrieve the default transformation for an object for all elements of a certain type for this account.
     * @method
     * @name platformSDK#getAccountsElementsTransformationByObjectName
     * @param {integer} id - The ID of the account
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @return { getAccountsElementsTransformationByObjectNameParameters } To allow chaining
     */
    getAccountsElementsTransformationByObjectName(
        id: number
        ,
        keyOrId: string
        ,
        objectName: string
        ,
    ): getAccountsElementsTransformationByObjectNameParameters {
        return new getAccountsElementsTransformationByObjectNameParameters(this, 'GET', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName);
    }
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
    createAccountElementTransformationByObjectName(
        id: number
        ,
        keyOrId: string
        ,
        objectName: string
        ,
        transformation:
        Transformation
        ,
    ): createAccountElementTransformationByObjectNameParameters {
        return new createAccountElementTransformationByObjectNameParameters(this, 'POST', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName, transformation);
    }
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
    replaceAccountsElementsTransformationByObjectName(
        id: number
        ,
        keyOrId: string
        ,
        objectName: string
        ,
        transformation:
        Transformation
        ,
    ): replaceAccountsElementsTransformationByObjectNameParameters {
        return new replaceAccountsElementsTransformationByObjectNameParameters(this, 'PUT', '/accounts/{id}/elements/{keyOrId}/transformations/{objectName}', id, keyOrId, objectName, transformation);
    }
    /**
     * Finds all instances for the specified account
     * @method
     * @name platformSDK#getAccountsInstances2
     * @param {integer} id - The ID of the account
     * @return { getAccountsInstances2Parameters } To allow chaining
     */
    getAccountsInstances2(
        id: number
        ,
    ): getAccountsInstances2Parameters {
        return new getAccountsInstances2Parameters(this, 'GET', '/accounts/{id}/instances', id);
    }
    /**
     * Delete all object definitions within a specific account.  If no object definitions exist then this will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsDefinitions2
     * @param {integer} id - The ID of the account
     * @return { deleteAccountsObjectsDefinitions2Parameters } To allow chaining
     */
    deleteAccountsObjectsDefinitions2(
        id: number
        ,
    ): deleteAccountsObjectsDefinitions2Parameters {
        return new deleteAccountsObjectsDefinitions2Parameters(this, 'DELETE', '/accounts/{id}/objects/definitions', id);
    }
    /**
     * Retrieve all of the object definitions within a specific account.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsDefinitions2
     * @param {integer} id - The ID of the account
     * @return { getAccountsObjectsDefinitions2Parameters } To allow chaining
     */
    getAccountsObjectsDefinitions2(
        id: number
        ,
    ): getAccountsObjectsDefinitions2Parameters {
        return new getAccountsObjectsDefinitions2Parameters(this, 'GET', '/accounts/{id}/objects/definitions', id);
    }
    /**
     * Create multiple object definitions for a specific account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectDefinition2
     * @param {integer} id - The ID of the account
     * @param {} body - The object definitions to create
     * @return { createAccountObjectDefinition2Parameters } To allow chaining
     */
    createAccountObjectDefinition2(
        id: number
        ,
        body:
        Dictionary
        ,
    ): createAccountObjectDefinition2Parameters {
        return new createAccountObjectDefinition2Parameters(this, 'POST', '/accounts/{id}/objects/definitions', id, body);
    }
    /**
     * Delete an object definition associated with an objectName for a specific account.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @return { deleteAccountsObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    deleteAccountsObjectsObjectNameDefinitions2(
        id: number
        ,
        objectName: string
        ,
    ): deleteAccountsObjectsObjectNameDefinitions2Parameters {
        return new deleteAccountsObjectsObjectNameDefinitions2Parameters(this, 'DELETE', '/accounts/{id}/objects/{objectName}/definitions', id, objectName);
    }
    /**
     * Retrieve a specific object definition associated with an objectName within a specific account.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @return { getAccountsObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    getAccountsObjectsObjectNameDefinitions2(
        id: number
        ,
        objectName: string
        ,
    ): getAccountsObjectsObjectNameDefinitions2Parameters {
        return new getAccountsObjectsObjectNameDefinitions2Parameters(this, 'GET', '/accounts/{id}/objects/{objectName}/definitions', id, objectName);
    }
    /**
     * Create a new object definition associated with an objectName within a specific account.  The definitions allow you to define what an object looks like within an account.
     * @method
     * @name platformSDK#createAccountObjectObjectNameDefinition2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { createAccountObjectObjectNameDefinition2Parameters } To allow chaining
     */
    createAccountObjectObjectNameDefinition2(
        id: number
        ,
        objectName: string
        ,
        body:
        Definition
        ,
    ): createAccountObjectObjectNameDefinition2Parameters {
        return new createAccountObjectObjectNameDefinition2Parameters(this, 'POST', '/accounts/{id}/objects/{objectName}/definitions', id, objectName, body);
    }
    /**
     * Update a specific object's definition associated with an objectName within a specific account. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceAccountsObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the account
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { replaceAccountsObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    replaceAccountsObjectsObjectNameDefinitions2(
        id: number
        ,
        objectName: string
        ,
        body:
        Definition
        ,
    ): replaceAccountsObjectsObjectNameDefinitions2Parameters {
        return new replaceAccountsObjectsObjectNameDefinitions2Parameters(this, 'PUT', '/accounts/{id}/objects/{objectName}/definitions', id, objectName, body);
    }
    /**
     * Find users within an account associated by an ID.  Specifying a user within an account associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsUsers
     * @param {integer} id - The ID of the account
     * @return { getAccountsUsersParameters } To allow chaining
     */
    getAccountsUsers(
        id: number
        ,
    ): getAccountsUsersParameters {
        return new getAccountsUsersParameters(this, 'GET', '/accounts/{id}/users', id);
    }
    /**
     * Create a user within an account associated by an ID.
     * @method
     * @name platformSDK#createAccountUser
     * @param {integer} id - The ID of the account under which the user should be created
     * @param {} body - The user to create<br/><br/>The required fields are:<br/><ul><li><b>email</b> - The user's email address</li><li><b>firstName</b> - The user's first name</li><li><b>lastName</b> - The user's last name</li></ul><br/>Upon success, the created object will be returned.
     * @return { createAccountUserParameters } To allow chaining
     */
    createAccountUser(
        id: number
        ,
        body:
        User
        ,
    ): createAccountUserParameters {
        return new createAccountUserParameters(this, 'POST', '/accounts/{id}/users', id, body);
    }
    /**
     * Retrieve an account user by name or ID within an account associated by an ID.  Specifying a user associated with a given emailOrID or account associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getAccountsUserByEmailOrId
     * @param {integer} id - The ID of the account
     * @param {string} emailOrId - The email address or numeric ID of the user
     * @return { getAccountsUserByEmailOrIdParameters } To allow chaining
     */
    getAccountsUserByEmailOrId(
        id: number
        ,
        emailOrId: string
        ,
    ): getAccountsUserByEmailOrIdParameters {
        return new getAccountsUserByEmailOrIdParameters(this, 'GET', '/accounts/{id}/users/{emailOrId}', id, emailOrId);
    }
    /**
     * Update an account user by ID within an account associated by an ID. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#updateAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     * @param {} body - The updated user information
     * @return { updateAccountsUserByUserIdParameters } To allow chaining
     */
    updateAccountsUserByUserId(
        id: number
        ,
        userId: number
        ,
        body:
        User
        ,
    ): updateAccountsUserByUserIdParameters {
        return new updateAccountsUserByUserIdParameters(this, 'PATCH', '/accounts/{id}/users/{userId}', id, userId, body);
    }
    /**
     * Replace the data for an account user by ID within an account associated by an ID. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#replaceAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     * @param {} body - The updated user information
     * @return { replaceAccountsUserByUserIdParameters } To allow chaining
     */
    replaceAccountsUserByUserId(
        id: number
        ,
        userId: number
        ,
        body:
        User_PUT
        ,
    ): replaceAccountsUserByUserIdParameters {
        return new replaceAccountsUserByUserIdParameters(this, 'PUT', '/accounts/{id}/users/{userId}', id, userId, body);
    }
    /**
     * Delete an account user by ID within an account associated by an ID. WARNING: this action will irreversibly delete all jobs, and formula and element instances associated with the user.
     * @method
     * @name platformSDK#deleteAccountsUserByUserId
     * @param {integer} id - The ID of the account
     * @param {integer} userId - The ID of the user
     * @return { deleteAccountsUserByUserIdParameters } To allow chaining
     */
    deleteAccountsUserByUserId(
        id: number
        ,
        userId: number
        ,
    ): deleteAccountsUserByUserIdParameters {
        return new deleteAccountsUserByUserIdParameters(this, 'DELETE', '/accounts/{id}/users/{userId}', id, userId);
    }
    /**
     * Retrieve a list of logged API requests that identify the request, the user who made the request, the time that they made the request, and more.
     * @method
     * @name platformSDK#getAuditLogs
     * @return { getAuditLogsParameters } To allow chaining
     */
    getAuditLogs(): getAuditLogsParameters {
        return new getAuditLogsParameters(this, 'GET', '/audit-logs');
    }
    /**
     * Retrieve a list of logged authentication API requests.
     * @method
     * @name platformSDK#getAuditLogsAuthentication
     * @return { getAuditLogsAuthenticationParameters } To allow chaining
     */
    getAuditLogsAuthentication(): getAuditLogsAuthenticationParameters {
        return new getAuditLogsAuthenticationParameters(this, 'GET', '/audit-logs/authentication');
    }
    /**
     * Retrieve a list of logged common resource and transformations API requests.
     * @method
     * @name platformSDK#getAuditLogsCommonResources
     * @return { getAuditLogsCommonResourcesParameters } To allow chaining
     */
    getAuditLogsCommonResources(): getAuditLogsCommonResourcesParameters {
        return new getAuditLogsCommonResourcesParameters(this, 'GET', '/audit-logs/common-resources');
    }
    /**
     * Retrieve a list of logged common resource and transformations API requests by the name of the common resource.
     * @method
     * @name platformSDK#getAuditLogsCommonResourceByCommonResourceName
     * @param {string} commonResourceName - The unique name of the common resource you want to retrieve.
     * @return { getAuditLogsCommonResourceByCommonResourceNameParameters } To allow chaining
     */
    getAuditLogsCommonResourceByCommonResourceName(
        commonResourceName: string
        ,
    ): getAuditLogsCommonResourceByCommonResourceNameParameters {
        return new getAuditLogsCommonResourceByCommonResourceNameParameters(this, 'GET', '/audit-logs/common-resources/{commonResourceName}', commonResourceName);
    }
    /**
     * Retrieve a list of logged element instance API requests.
     * @method
     * @name platformSDK#getAuditLogsElementInstances
     * @return { getAuditLogsElementInstancesParameters } To allow chaining
     */
    getAuditLogsElementInstances(): getAuditLogsElementInstancesParameters {
        return new getAuditLogsElementInstancesParameters(this, 'GET', '/audit-logs/element-instances');
    }
    /**
     * Retrieve a list of logged element instance API requests by element instance ID.
     * @method
     * @name platformSDK#getAuditLogsElementInstanceByElementInstanceId
     * @param {string} elementInstanceId - The unique id of the element instance that you want to retrieve.
     * @return { getAuditLogsElementInstanceByElementInstanceIdParameters } To allow chaining
     */
    getAuditLogsElementInstanceByElementInstanceId(
        elementInstanceId: string
        ,
    ): getAuditLogsElementInstanceByElementInstanceIdParameters {
        return new getAuditLogsElementInstanceByElementInstanceIdParameters(this, 'GET', '/audit-logs/element-instances/{elementInstanceId}', elementInstanceId);
    }
    /**
     * Retrieve a list of logged element API requests. Requests include element creation and element extension requests.
     * @method
     * @name platformSDK#getAuditLogsElements
     * @return { getAuditLogsElementsParameters } To allow chaining
     */
    getAuditLogsElements(): getAuditLogsElementsParameters {
        return new getAuditLogsElementsParameters(this, 'GET', '/audit-logs/elements');
    }
    /**
     * Retrieve a list of logged element API requests by element ID.
     * @method
     * @name platformSDK#getAuditLogsElementByElementId
     * @param {string} elementId - The unique id of the element you want to retrieve.
     * @return { getAuditLogsElementByElementIdParameters } To allow chaining
     */
    getAuditLogsElementByElementId(
        elementId: string
        ,
    ): getAuditLogsElementByElementIdParameters {
        return new getAuditLogsElementByElementIdParameters(this, 'GET', '/audit-logs/elements/{elementId}', elementId);
    }
    /**
     * Retrieve a list of logged formula instance API requests.
     * @method
     * @name platformSDK#getAuditLogsFormulaInstances
     * @return { getAuditLogsFormulaInstancesParameters } To allow chaining
     */
    getAuditLogsFormulaInstances(): getAuditLogsFormulaInstancesParameters {
        return new getAuditLogsFormulaInstancesParameters(this, 'GET', '/audit-logs/formula-instances');
    }
    /**
     * Retrieve a list of logged formula template API requests.
     * @method
     * @name platformSDK#getAuditLogsFormulas
     * @return { getAuditLogsFormulasParameters } To allow chaining
     */
    getAuditLogsFormulas(): getAuditLogsFormulasParameters {
        return new getAuditLogsFormulasParameters(this, 'GET', '/audit-logs/formulas');
    }
    /**
     * Retrieve a list of logged formula template API requests by the Entity ID associated with the object affected. Entity IDs include step ids, trigger ids, and configuration ids.
     * @method
     * @name platformSDK#getAuditLogsFormulaByEntityId
     * @param {string} entityId - The unique entity id of the user that you want to retrieve.
     * @return { getAuditLogsFormulaByEntityIdParameters } To allow chaining
     */
    getAuditLogsFormulaByEntityId(
        entityId: string
        ,
    ): getAuditLogsFormulaByEntityIdParameters {
        return new getAuditLogsFormulaByEntityIdParameters(this, 'GET', '/audit-logs/formulas/{entityId}', entityId);
    }
    /**
     * Reset the user's password.
     * @method
     * @name platformSDK#createAuthenticationPassword
     * @param {} passwordReset - The new password.
     * @return { createAuthenticationPasswordParameters } To allow chaining
     */
    createAuthenticationPassword(
        passwordReset:
        PasswordReset_POST
        ,
    ): createAuthenticationPasswordParameters {
        return new createAuthenticationPasswordParameters(this, 'POST', '/authentication/passwords', passwordReset);
    }
    /**
     * Create a new identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createCustomerIdentityProvider
     * @param {} identityProvider - The identity provider data
     * @return { createCustomerIdentityProviderParameters } To allow chaining
     */
    createCustomerIdentityProvider(
        identityProvider:
        IdentityProvider_POST
        ,
    ): createCustomerIdentityProviderParameters {
        return new createCustomerIdentityProviderParameters(this, 'POST', '/customers/identity-providers', identityProvider);
    }
    /**
     * Get all of the identity providers within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersIdentityProviders
     * @return { getCustomersIdentityProvidersParameters } To allow chaining
     */
    getCustomersIdentityProviders(): getCustomersIdentityProvidersParameters {
        return new getCustomersIdentityProvidersParameters(this, 'GET', '/customers/identity-providers');
    }
    /**
     * Get a specific identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersIdentityProviderById
     * @param {string} id - The ID of the identity provider record
     * @return { getCustomersIdentityProviderByIdParameters } To allow chaining
     */
    getCustomersIdentityProviderById(
        id: string
        ,
    ): getCustomersIdentityProviderByIdParameters {
        return new getCustomersIdentityProviderByIdParameters(this, 'GET', '/customers/identity-providers/{id}', id);
    }
    /**
     * Delete an identity provider within a customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#deleteCustomersIdentityProviderById
     * @param {string} id - The ID of the identity provider record
     * @return { deleteCustomersIdentityProviderByIdParameters } To allow chaining
     */
    deleteCustomersIdentityProviderById(
        id: string
        ,
    ): deleteCustomersIdentityProviderByIdParameters {
        return new deleteCustomersIdentityProviderByIdParameters(this, 'DELETE', '/customers/identity-providers/{id}', id);
    }
    /**
     * Get details of the current user's customer.
     * @method
     * @name platformSDK#getCustomersMe
     * @return { getCustomersMeParameters } To allow chaining
     */
    getCustomersMe(): getCustomersMeParameters {
        return new getCustomersMeParameters(this, 'GET', '/customers/me');
    }
    /**
     * Get all of the organizations for the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersOrganizations
     * @return { getCustomersOrganizationsParameters } To allow chaining
     */
    getCustomersOrganizations(): getCustomersOrganizationsParameters {
        return new getCustomersOrganizationsParameters(this, 'GET', '/customers/organizations');
    }
    /**
     * Get a specific organization within the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#getCustomersOrganizationById
     * @param {integer} id - The ID of the organization
     * @return { getCustomersOrganizationByIdParameters } To allow chaining
     */
    getCustomersOrganizationById(
        id: number
        ,
    ): getCustomersOrganizationByIdParameters {
        return new getCustomersOrganizationByIdParameters(this, 'GET', '/customers/organizations/{id}', id);
    }
    /**
     * Delete a specific organization within the current user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#deleteCustomersOrganizationById
     * @param {integer} id - The ID of the organization
     * @return { deleteCustomersOrganizationByIdParameters } To allow chaining
     */
    deleteCustomersOrganizationById(
        id: number
        ,
    ): deleteCustomersOrganizationByIdParameters {
        return new deleteCustomersOrganizationByIdParameters(this, 'DELETE', '/customers/organizations/{id}', id);
    }
    /**
     * Create a new user within a customer. The organization and account will also be created, if existing IDs are not provided. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createCustomerSignup
     * @param {} customerSignup - The customer sign up data
     * @return { createCustomerSignupParameters } To allow chaining
     */
    createCustomerSignup(
        customerSignup:
        CustomerSignup_POST
        ,
    ): createCustomerSignupParameters {
        return new createCustomerSignupParameters(this, 'POST', '/customers/signup', customerSignup);
    }
    /**
     * Create a new element.
     * @method
     * @name platformSDK#createElement
     * @param {} element - The element
     * @return { createElementParameters } To allow chaining
     */
    createElement(
        element:
        CreateElement
        ,
    ): createElementParameters {
        return new createElementParameters(this, 'POST', '/elements', element);
    }
    /**
     * Retrieve all available elements keys.
     * @method
     * @name platformSDK#getElementsKeys
     * @return { getElementsKeysParameters } To allow chaining
     */
    getElementsKeys(): getElementsKeysParameters {
        return new getElementsKeysParameters(this, 'GET', '/elements/keys');
    }
    /**
     * Swagger 2.0 schema for the element.
     * @method
     * @name platformSDK#getElementsDocs
     * @param {string} id - The ID of the element
     * @return { getElementsDocsParameters } To allow chaining
     */
    getElementsDocs(
        id: string
        ,
    ): getElementsDocsParameters {
        return new getElementsDocsParameters(this, 'GET', '/elements/{id}/docs', id);
    }
    /**
     * Retrieve the metadata for the specified element.
     * @method
     * @name platformSDK#getElementsMetadata
     * @param {integer} id - The element ID
     * @return { getElementsMetadataParameters } To allow chaining
     */
    getElementsMetadata(
        id: number
        ,
    ): getElementsMetadataParameters {
        return new getElementsMetadataParameters(this, 'GET', '/elements/{id}/metadata', id);
    }
    /**
     * Get swagger docs for an object.
     * @method
     * @name platformSDK#getElementsObjectsObjectNameDocs
     * @param {integer} id - The ID of the element
     * @param {string} objectName - The name of the object
     * @return { getElementsObjectsObjectNameDocsParameters } To allow chaining
     */
    getElementsObjectsObjectNameDocs(
        id: number
        ,
        objectName: string
        ,
    ): getElementsObjectsObjectNameDocsParameters {
        return new getElementsObjectsObjectNameDocsParameters(this, 'GET', '/elements/{id}/objects/{objectName}/docs', id, objectName);
    }
    /**
     * Retrieve the swagger docs operations for the specified element.
     * @method
     * @name platformSDK#getElementsOperations
     * @param {integer} id - The element ID
     * @return { getElementsOperationsParameters } To allow chaining
     */
    getElementsOperations(
        id: number
        ,
    ): getElementsOperationsParameters {
        return new getElementsOperationsParameters(this, 'GET', '/elements/{id}/operations', id);
    }
    /**
     * Retrieve an operation specific swagger documentation for an element
     * @method
     * @name platformSDK#getElementsOperationsDocs
     * @param {integer} id - The ID of the element
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     * @return { getElementsOperationsDocsParameters } To allow chaining
     */
    getElementsOperationsDocs(
        id: number
        ,
        operationId: string
        ,
    ): getElementsOperationsDocsParameters {
        return new getElementsOperationsDocsParameters(this, 'GET', '/elements/{id}/operations/{operationId}/docs', id, operationId);
    }
    /**
     * Swagger 2.0 schema for the element.
     * @method
     * @name platformSDK#getElementsVersions
     * @param {string} id - The ID of the element
     * @return { getElementsVersionsParameters } To allow chaining
     */
    getElementsVersions(
        id: string
        ,
    ): getElementsVersionsParameters {
        return new getElementsVersionsParameters(this, 'GET', '/elements/{id}/versions', id);
    }
    /**
     * Delete an element.
     * @method
     * @name platformSDK#deleteElementByKeyOrId
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { deleteElementByKeyOrIdParameters } To allow chaining
     */
    deleteElementByKeyOrId(
        keyOrId: string
        ,
    ): deleteElementByKeyOrIdParameters {
        return new deleteElementByKeyOrIdParameters(this, 'DELETE', '/elements/{keyOrId}', keyOrId);
    }
    /**
     * Update an element associated with an element key.
     * @method
     * @name platformSDK#replaceElementByKeyOrId
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} element - The element
     * @return { replaceElementByKeyOrIdParameters } To allow chaining
     */
    replaceElementByKeyOrId(
        keyOrId: string
        ,
        element:
        CreateElement
        ,
    ): replaceElementByKeyOrIdParameters {
        return new replaceElementByKeyOrIdParameters(this, 'PUT', '/elements/{keyOrId}', keyOrId, element);
    }
    /**
     * De-activate an element, which will remove it from your elements catalog.
     * @method
     * @name platformSDK#deleteElementsActive
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { deleteElementsActiveParameters } To allow chaining
     */
    deleteElementsActive(
        keyOrId: string
        ,
    ): deleteElementsActiveParameters {
        return new deleteElementsActiveParameters(this, 'DELETE', '/elements/{keyOrId}/active', keyOrId);
    }
    /**
     * Activate an element to publish it in your elements catalog.
     * @method
     * @name platformSDK#replaceElementsActive
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { replaceElementsActiveParameters } To allow chaining
     */
    replaceElementsActive(
        keyOrId: string
        ,
    ): replaceElementsActiveParameters {
        return new replaceElementsActiveParameters(this, 'PUT', '/elements/{keyOrId}/active', keyOrId);
    }
    /**
     * Clone an element
     * @method
     * @name platformSDK#createElementClone
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { createElementCloneParameters } To allow chaining
     */
    createElementClone(
        keyOrId: string
        ,
    ): createElementCloneParameters {
        return new createElementCloneParameters(this, 'POST', '/elements/{keyOrId}/clone', keyOrId);
    }
    /**
     * Retrieve a specific element configuration associated with an element key.  Specifying an element associated with an element key that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsConfiguration
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { getElementsConfigurationParameters } To allow chaining
     */
    getElementsConfiguration(
        keyOrId: string
        ,
    ): getElementsConfigurationParameters {
        return new getElementsConfigurationParameters(this, 'GET', '/elements/{keyOrId}/configuration', keyOrId);
    }
    /**
     * Create a new configuration value for an element
     * @method
     * @name platformSDK#createElementConfiguration
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} configuration - The configuration to create
     * @return { createElementConfigurationParameters } To allow chaining
     */
    createElementConfiguration(
        keyOrId: string
        ,
        configuration:
        Configuration
        ,
    ): createElementConfigurationParameters {
        return new createElementConfigurationParameters(this, 'POST', '/elements/{keyOrId}/configuration', keyOrId, configuration);
    }
    /**
     * Delete a configuration value for an element
     * @method
     * @name platformSDK#deleteElementsConfigurationByConfigurationKey
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} configurationKey - The configuration key
     * @return { deleteElementsConfigurationByConfigurationKeyParameters } To allow chaining
     */
    deleteElementsConfigurationByConfigurationKey(
        keyOrId: string
        ,
        configurationKey: string
        ,
    ): deleteElementsConfigurationByConfigurationKeyParameters {
        return new deleteElementsConfigurationByConfigurationKeyParameters(this, 'DELETE', '/elements/{keyOrId}/configuration/{configurationKey}', keyOrId, configurationKey);
    }
    /**
     * Update an existing configuration value for an element
     * @method
     * @name platformSDK#replaceElementsConfigurationByConfigurationKey
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {string} configurationKey - The configuration key
     * @param {} configuration - The configuration object
     * @return { replaceElementsConfigurationByConfigurationKeyParameters } To allow chaining
     */
    replaceElementsConfigurationByConfigurationKey(
        keyOrId: string
        ,
        configurationKey: string
        ,
        configuration:
        Configuration
        ,
    ): replaceElementsConfigurationByConfigurationKeyParameters {
        return new replaceElementsConfigurationByConfigurationKeyParameters(this, 'PUT', '/elements/{keyOrId}/configuration/{configurationKey}', keyOrId, configurationKey, configuration);
    }
    /**
     * Downloads a specific element JSON data in a file associated with an element key. Specifying an element associated with an element key that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsExport
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { getElementsExportParameters } To allow chaining
     */
    getElementsExport(
        keyOrId: string
        ,
    ): getElementsExportParameters {
        return new getElementsExportParameters(this, 'GET', '/elements/{keyOrId}/export', keyOrId);
    }
    /**
     * Retrieve the hooks that exists for a element
     * @method
     * @name platformSDK#getElementsHooks
     * @param {string} keyOrId - The element key
     * @return { getElementsHooksParameters } To allow chaining
     */
    getElementsHooks(
        keyOrId: string
        ,
    ): getElementsHooksParameters {
        return new getElementsHooksParameters(this, 'GET', '/elements/{keyOrId}/hooks', keyOrId);
    }
    /**
     * Create a new hook for a element
     * @method
     * @name platformSDK#createElementHook
     * @param {string} keyOrId - The element key
     * @param {} model - The element Hook
     * @return { createElementHookParameters } To allow chaining
     */
    createElementHook(
        keyOrId: string
        ,
        model:
        Hook
        ,
    ): createElementHookParameters {
        return new createElementHookParameters(this, 'POST', '/elements/{keyOrId}/hooks', keyOrId, model);
    }
    /**
     * Get an existing hook for an custom element
     * @method
     * @name platformSDK#getElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The Hook ID
     * @return { getElementsHookByHookIdParameters } To allow chaining
     */
    getElementsHookByHookId(
        keyOrId: string
        ,
        hookId: string
        ,
    ): getElementsHookByHookIdParameters {
        return new getElementsHookByHookIdParameters(this, 'GET', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId);
    }
    /**
     * Delete one of the hooks for a element
     * @method
     * @name platformSDK#deleteElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The hook ID
     * @return { deleteElementsHookByHookIdParameters } To allow chaining
     */
    deleteElementsHookByHookId(
        keyOrId: string
        ,
        hookId: string
        ,
    ): deleteElementsHookByHookIdParameters {
        return new deleteElementsHookByHookIdParameters(this, 'DELETE', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId);
    }
    /**
     * Update an existing Hook for an element
     * @method
     * @name platformSDK#replaceElementsHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} hookId - The hook ID
     * @param {} parameter - The hook
     * @return { replaceElementsHookByHookIdParameters } To allow chaining
     */
    replaceElementsHookByHookId(
        keyOrId: string
        ,
        hookId: string
        ,
        parameter:
        Hook
        ,
    ): replaceElementsHookByHookIdParameters {
        return new replaceElementsHookByHookIdParameters(this, 'PUT', '/elements/{keyOrId}/hooks/{hookId}', keyOrId, hookId, parameter);
    }
    /**
     * Retrieve all element instances from a specified path.  The instances go through Cloud Elements to your console.  Specifying an instance that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsInstances
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @return { getElementsInstancesParameters } To allow chaining
     */
    getElementsInstances(
        keyOrId: string
        ,
    ): getElementsInstancesParameters {
        return new getElementsInstancesParameters(this, 'GET', '/elements/{keyOrId}/instances', keyOrId);
    }
    /**
     * Create a new element instance in your console.  Instance creation will flow through Cloud Elements to your console.
     * @method
     * @name platformSDK#createElementInstance
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} elementInstance - The element instance to create
     * @return { createElementInstanceParameters } To allow chaining
     */
    createElementInstance(
        keyOrId: string
        ,
        elementInstance:
        ElementInstance
        ,
    ): createElementInstanceParameters {
        return new createElementInstanceParameters(this, 'POST', '/elements/{keyOrId}/instances', keyOrId, elementInstance);
    }
    /**
     * Delete an instance associated with a given ID from your console. Specifying an instance associated with a given ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     * @return { deleteElementsInstanceByIdParameters } To allow chaining
     */
    deleteElementsInstanceById(
        keyOrId: string
        ,
        id: number
        ,
    ): deleteElementsInstanceByIdParameters {
        return new deleteElementsInstanceByIdParameters(this, 'DELETE', '/elements/{keyOrId}/instances/{id}', keyOrId, id);
    }
    /**
     * Retrieve an element instance associated with a given ID from a specified path.  The instance goes through Cloud Elements to your console.  Specifying an instance with an associated ID that does not exist results in an error response.
     * @method
     * @name platformSDK#getElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     * @return { getElementsInstanceByIdParameters } To allow chaining
     */
    getElementsInstanceById(
        keyOrId: string
        ,
        id: number
        ,
    ): getElementsInstanceByIdParameters {
        return new getElementsInstanceByIdParameters(this, 'GET', '/elements/{keyOrId}/instances/{id}', keyOrId, id);
    }
    /**
     * Update an instance associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceElementsInstanceById
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     * @return { replaceElementsInstanceByIdParameters } To allow chaining
     */
    replaceElementsInstanceById(
        keyOrId: string
        ,
        id: number
        ,
        elementInstance:
        ElementInstance
        ,
    ): replaceElementsInstanceByIdParameters {
        return new replaceElementsInstanceByIdParameters(this, 'PUT', '/elements/{keyOrId}/instances/{id}', keyOrId, id, elementInstance);
    }
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
    getElementsOauthToken(
        keyOrId: string
        ,
        apiKey: string
        ,
        apiSecret: string
        ,
        callbackUrl: string
        ,
    ): getElementsOauthTokenParameters {
        return new getElementsOauthTokenParameters(this, 'GET', '/elements/{keyOrId}/oauth/token', keyOrId, apiKey, apiSecret, callbackUrl);
    }
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
    getElementsOauthUrl(
        keyOrId: string
        ,
        apiKey: string
        ,
        apiSecret: string
        ,
        callbackUrl: string
        ,
    ): getElementsOauthUrlParameters {
        return new getElementsOauthUrlParameters(this, 'GET', '/elements/{keyOrId}/oauth/url', keyOrId, apiKey, apiSecret, callbackUrl);
    }
    /**
     * Retrieve the OAuth 2 redirect URL associated with the specified element.  Specifying an element key associated with an element that does not exist results in an error response.
     * @method
     * @name platformSDK#createElementOauthUrl
     * @param {string} keyOrId - The element key (i.e. 'dropbox', 'sfdc', etc.) or ID
     * @param {} oauthInfo - The data for generating the OAuth redirect URL
     * @return { createElementOauthUrlParameters } To allow chaining
     */
    createElementOauthUrl(
        keyOrId: string
        ,
        oauthInfo:
        OAuthInfo
        ,
    ): createElementOauthUrlParameters {
        return new createElementOauthUrlParameters(this, 'POST', '/elements/{keyOrId}/oauth/url', keyOrId, oauthInfo);
    }
    /**
     * Retrieve all of the objects that exist for a custom element
     * @method
     * @name platformSDK#getElementsObjects
     * @param {string} keyOrId - The element key
     * @return { getElementsObjectsParameters } To allow chaining
     */
    getElementsObjects(
        keyOrId: string
        ,
    ): getElementsObjectsParameters {
        return new getElementsObjectsParameters(this, 'GET', '/elements/{keyOrId}/objects', keyOrId);
    }
    /**
     * Create a new object for a element
     * @method
     * @name platformSDK#createElementObject
     * @param {string} keyOrId - The element key
     * @param {} object - The Object
     * @return { createElementObjectParameters } To allow chaining
     */
    createElementObject(
        keyOrId: string
        ,
        object:
        Object
        ,
    ): createElementObjectParameters {
        return new createElementObjectParameters(this, 'POST', '/elements/{keyOrId}/objects', keyOrId, object);
    }
    /**
     * Delete a object for a custom element
     * @method
     * @name platformSDK#deleteElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @return { deleteElementsObjectByIdParameters } To allow chaining
     */
    deleteElementsObjectById(
        keyOrId: string
        ,
        id: string
        ,
    ): deleteElementsObjectByIdParameters {
        return new deleteElementsObjectByIdParameters(this, 'DELETE', '/elements/{keyOrId}/objects/{id}', keyOrId, id);
    }
    /**
     * Update an existing object for an element
     * @method
     * @name platformSDK#replaceElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {} object - The Object
     * @return { replaceElementsObjectByIdParameters } To allow chaining
     */
    replaceElementsObjectById(
        keyOrId: string
        ,
        id: string
        ,
        object:
        Object
        ,
    ): replaceElementsObjectByIdParameters {
        return new replaceElementsObjectByIdParameters(this, 'PUT', '/elements/{keyOrId}/objects/{id}', keyOrId, id, object);
    }
    /**
     * Get an existing object for an element
     * @method
     * @name platformSDK#getElementsObjectById
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @return { getElementsObjectByIdParameters } To allow chaining
     */
    getElementsObjectById(
        keyOrId: string
        ,
        id: string
        ,
    ): getElementsObjectByIdParameters {
        return new getElementsObjectByIdParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}', keyOrId, id);
    }
    /**
     * Create a Field for an element Object
     * @method
     * @name platformSDK#createElementObjectField
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {} field - The Field
     * @return { createElementObjectFieldParameters } To allow chaining
     */
    createElementObjectField(
        keyOrId: string
        ,
        id: string
        ,
        field:
        Field
        ,
    ): createElementObjectFieldParameters {
        return new createElementObjectFieldParameters(this, 'POST', '/elements/{keyOrId}/objects/{id}/fields', keyOrId, id, field);
    }
    /**
     * Retrieve all of the fields that exist for a element object
     * @method
     * @name platformSDK#getElementsObjectsFields
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @return { getElementsObjectsFieldsParameters } To allow chaining
     */
    getElementsObjectsFields(
        keyOrId: string
        ,
        id: string
        ,
    ): getElementsObjectsFieldsParameters {
        return new getElementsObjectsFieldsParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}/fields', keyOrId, id);
    }
    /**
     * Delete a field for an element object
     * @method
     * @name platformSDK#deleteElementsObjectsFieldByFieldId
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {string} fieldId - The Field Id
     * @return { deleteElementsObjectsFieldByFieldIdParameters } To allow chaining
     */
    deleteElementsObjectsFieldByFieldId(
        keyOrId: string
        ,
        id: string
        ,
        fieldId: string
        ,
    ): deleteElementsObjectsFieldByFieldIdParameters {
        return new deleteElementsObjectsFieldByFieldIdParameters(this, 'DELETE', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId);
    }
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
    replaceElementsObjectsFieldByFieldId(
        keyOrId: string
        ,
        id: string
        ,
        fieldId: string
        ,
        object:
        Field
        ,
    ): replaceElementsObjectsFieldByFieldIdParameters {
        return new replaceElementsObjectsFieldByFieldIdParameters(this, 'PUT', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId, object);
    }
    /**
     * Get an existing field for an element object
     * @method
     * @name platformSDK#getElementsObjectsFieldByFieldId
     * @param {string} keyOrId - The element key
     * @param {string} id - The Object Id
     * @param {string} fieldId - The Field Id
     * @return { getElementsObjectsFieldByFieldIdParameters } To allow chaining
     */
    getElementsObjectsFieldByFieldId(
        keyOrId: string
        ,
        id: string
        ,
        fieldId: string
        ,
    ): getElementsObjectsFieldByFieldIdParameters {
        return new getElementsObjectsFieldByFieldIdParameters(this, 'GET', '/elements/{keyOrId}/objects/{id}/fields/{fieldId}', keyOrId, id, fieldId);
    }
    /**
     * Retrieve all of the default parameters for an element
     * @method
     * @name platformSDK#getElementsParameters
     * @param {string} keyOrId - The element key
     * @return { getElementsParametersParameters } To allow chaining
     */
    getElementsParameters(
        keyOrId: string
        ,
    ): getElementsParametersParameters {
        return new getElementsParametersParameters(this, 'GET', '/elements/{keyOrId}/parameters', keyOrId);
    }
    /**
     * Create a new default parameter for an element
     * @method
     * @name platformSDK#createElementParameter
     * @param {string} keyOrId - The element key
     * @param {} parameter - The default parameter
     * @return { createElementParameterParameters } To allow chaining
     */
    createElementParameter(
        keyOrId: string
        ,
        parameter:
        DefaultParameter
        ,
    ): createElementParameterParameters {
        return new createElementParameterParameters(this, 'POST', '/elements/{keyOrId}/parameters', keyOrId, parameter);
    }
    /**
     * Delete a default parameter for an element
     * @method
     * @name platformSDK#deleteElementsParameterById
     * @param {string} keyOrId - The element key
     * @param {string} id - The ID of the parameter
     * @param {} parameter - The default parameter
     * @return { deleteElementsParameterByIdParameters } To allow chaining
     */
    deleteElementsParameterById(
        keyOrId: string
        ,
        id: string
        ,
        parameter:
        DefaultParameter
        ,
    ): deleteElementsParameterByIdParameters {
        return new deleteElementsParameterByIdParameters(this, 'DELETE', '/elements/{keyOrId}/parameters/{id}', keyOrId, id, parameter);
    }
    /**
     * Update a default parameter for an element
     * @method
     * @name platformSDK#replaceElementsParameterById
     * @param {string} keyOrId - The element key
     * @param {string} id - The ID of the parameter
     * @param {} parameter - The default parameter
     * @return { replaceElementsParameterByIdParameters } To allow chaining
     */
    replaceElementsParameterById(
        keyOrId: string
        ,
        id: string
        ,
        parameter:
        DefaultParameter
        ,
    ): replaceElementsParameterByIdParameters {
        return new replaceElementsParameterByIdParameters(this, 'PUT', '/elements/{keyOrId}/parameters/{id}', keyOrId, id, parameter);
    }
    /**
     * Retrieve all of the resources that exist for a custom element
     * @method
     * @name platformSDK#getElementsResources
     * @param {string} keyOrId - The element key or Id
     * @return { getElementsResourcesParameters } To allow chaining
     */
    getElementsResources(
        keyOrId: string
        ,
    ): getElementsResourcesParameters {
        return new getElementsResourcesParameters(this, 'GET', '/elements/{keyOrId}/resources', keyOrId);
    }
    /**
     * Create a new resource for a custom element
     * @method
     * @name platformSDK#createElementResource
     * @param {string} keyOrId - The element key
     * @param {} resource - The resource
     * @return { createElementResourceParameters } To allow chaining
     */
    createElementResource(
        keyOrId: string
        ,
        resource:
        Resource
        ,
    ): createElementResourceParameters {
        return new createElementResourceParameters(this, 'POST', '/elements/{keyOrId}/resources', keyOrId, resource);
    }
    /**
     * Delete a resource for a custom element
     * @method
     * @name platformSDK#deleteElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @return { deleteElementsResourceByIdParameters } To allow chaining
     */
    deleteElementsResourceById(
        keyOrId: string
        ,
        id: string
        ,
    ): deleteElementsResourceByIdParameters {
        return new deleteElementsResourceByIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}', keyOrId, id);
    }
    /**
     * Update an existing resource for an element
     * @method
     * @name platformSDK#replaceElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} resource - The resource
     * @return { replaceElementsResourceByIdParameters } To allow chaining
     */
    replaceElementsResourceById(
        keyOrId: string
        ,
        id: string
        ,
        resource:
        Resource
        ,
    ): replaceElementsResourceByIdParameters {
        return new replaceElementsResourceByIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}', keyOrId, id, resource);
    }
    /**
     * Get an existing resource for an element
     * @method
     * @name platformSDK#getElementsResourceById
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @return { getElementsResourceByIdParameters } To allow chaining
     */
    getElementsResourceById(
        keyOrId: string
        ,
        id: string
        ,
    ): getElementsResourceByIdParameters {
        return new getElementsResourceByIdParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}', keyOrId, id);
    }
    /**
     * Retrieve the hooks that exists for a custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesHooks
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @return { getElementsResourcesHooksParameters } To allow chaining
     */
    getElementsResourcesHooks(
        keyOrId: string
        ,
        id: string
        ,
    ): getElementsResourcesHooksParameters {
        return new getElementsResourcesHooksParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/hooks', keyOrId, id);
    }
    /**
     * Create a new hook for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceHook
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} model - The resource Hook
     * @return { createElementResourceHookParameters } To allow chaining
     */
    createElementResourceHook(
        keyOrId: string
        ,
        id: string
        ,
        model:
        Hook
        ,
    ): createElementResourceHookParameters {
        return new createElementResourceHookParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/hooks', keyOrId, id, model);
    }
    /**
     * Get an existing hook for an custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} hookId - The Hook ID
     * @return { getElementsResourcesHookByHookIdParameters } To allow chaining
     */
    getElementsResourcesHookByHookId(
        keyOrId: string
        ,
        id: string
        ,
        hookId: string
        ,
    ): getElementsResourcesHookByHookIdParameters {
        return new getElementsResourcesHookByHookIdParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId);
    }
    /**
     * Delete one of the hooks for a custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesHookByHookId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} hookId - The hook ID
     * @return { deleteElementsResourcesHookByHookIdParameters } To allow chaining
     */
    deleteElementsResourcesHookByHookId(
        keyOrId: string
        ,
        id: string
        ,
        hookId: string
        ,
    ): deleteElementsResourcesHookByHookIdParameters {
        return new deleteElementsResourcesHookByHookIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId);
    }
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
    replaceElementsResourcesHookByHookId(
        keyOrId: string
        ,
        id: string
        ,
        hookId: string
        ,
        parameter:
        Hook
        ,
    ): replaceElementsResourcesHookByHookIdParameters {
        return new replaceElementsResourcesHookByHookIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}/hooks/{hookId}', keyOrId, id, hookId, parameter);
    }
    /**
     * Delete the model for this custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesModels
     * @param {string} keyOrId - The element key
     * @param {integer} id - The resource ID
     * @return { deleteElementsResourcesModelsParameters } To allow chaining
     */
    deleteElementsResourcesModels(
        keyOrId: string
        ,
        id: number
        ,
    ): deleteElementsResourcesModelsParameters {
        return new deleteElementsResourcesModelsParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id);
    }
    /**
     * Retrieve the models that exists for a custom element's resource
     * @method
     * @name platformSDK#getElementsResourcesModels
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @return { getElementsResourcesModelsParameters } To allow chaining
     */
    getElementsResourcesModels(
        keyOrId: string
        ,
        id: string
        ,
    ): getElementsResourcesModelsParameters {
        return new getElementsResourcesModelsParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id);
    }
    /**
     * Create a new model for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceModel
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} model - The model
     * @return { createElementResourceModelParameters } To allow chaining
     */
    createElementResourceModel(
        keyOrId: string
        ,
        id: string
        ,
        model:
        Model
        ,
    ): createElementResourceModelParameters {
        return new createElementResourceModelParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/models', keyOrId, id, model);
    }
    /**
     * Retrieve all of the parameters for a resource
     * @method
     * @name platformSDK#getElementsResourcesParameters
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @return { getElementsResourcesParametersParameters } To allow chaining
     */
    getElementsResourcesParameters(
        keyOrId: string
        ,
        id: string
        ,
    ): getElementsResourcesParametersParameters {
        return new getElementsResourcesParametersParameters(this, 'GET', '/elements/{keyOrId}/resources/{id}/parameters', keyOrId, id);
    }
    /**
     * Create a new parameter for a custom element's resource
     * @method
     * @name platformSDK#createElementResourceParameter
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {} parameter - The parameter
     * @return { createElementResourceParameterParameters } To allow chaining
     */
    createElementResourceParameter(
        keyOrId: string
        ,
        id: string
        ,
        parameter:
        Parameter
        ,
    ): createElementResourceParameterParameters {
        return new createElementResourceParameterParameters(this, 'POST', '/elements/{keyOrId}/resources/{id}/parameters', keyOrId, id, parameter);
    }
    /**
     * Delete one of the parameters for a custom element's resource
     * @method
     * @name platformSDK#deleteElementsResourcesParameterByParameterId
     * @param {string} keyOrId - The element key
     * @param {string} id - The resource ID
     * @param {string} parameterId - The parameter ID
     * @return { deleteElementsResourcesParameterByParameterIdParameters } To allow chaining
     */
    deleteElementsResourcesParameterByParameterId(
        keyOrId: string
        ,
        id: string
        ,
        parameterId: string
        ,
    ): deleteElementsResourcesParameterByParameterIdParameters {
        return new deleteElementsResourcesParameterByParameterIdParameters(this, 'DELETE', '/elements/{keyOrId}/resources/{id}/parameters/{parameterId}', keyOrId, id, parameterId);
    }
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
    replaceElementsResourcesParameterByParameterId(
        keyOrId: string
        ,
        id: string
        ,
        parameterId: string
        ,
        parameter:
        Parameter
        ,
    ): replaceElementsResourcesParameterByParameterIdParameters {
        return new replaceElementsResourcesParameterByParameterIdParameters(this, 'PUT', '/elements/{keyOrId}/resources/{id}/parameters/{parameterId}', keyOrId, id, parameterId, parameter);
    }
    /**
     * Retrieve a list of all formula templates.
     * @method
     * @name platformSDK#getFormulas
     * @return { getFormulasParameters } To allow chaining
     */
    getFormulas(): getFormulasParameters {
        return new getFormulasParameters(this, 'GET', '/formulas');
    }
    /**
     * Create a new formula template.
     * @method
     * @name platformSDK#createFormula
     * @param {} body - The formula template.
     * @return { createFormulaParameters } To allow chaining
     */
    createFormula(
        body:
        CreateFormula
        ,
    ): createFormulaParameters {
        return new createFormulaParameters(this, 'POST', '/formulas', body);
    }
    /**
     * Retrieve the number of formula executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalytics
     * @return { getFormulasAnalyticsParameters } To allow chaining
     */
    getFormulasAnalytics(): getFormulasAnalyticsParameters {
        return new getFormulasAnalyticsParameters(this, 'GET', '/formulas/analytics');
    }
    /**
     * Retrieve the status analytics of formula step executions within a given date/time range, aggregated by account ID. This API is really only useful for organization admins where more than one account exists.
     * @method
     * @name platformSDK#getFormulasAnalyticsAccounts
     * @return { getFormulasAnalyticsAccountsParameters } To allow chaining
     */
    getFormulasAnalyticsAccounts(): getFormulasAnalyticsAccountsParameters {
        return new getFormulasAnalyticsAccountsParameters(this, 'GET', '/formulas/analytics/accounts');
    }
    /**
     * Retrieve the status analytics of formula step executions within a given date/time range, aggregated by formula instance ID.
     * @method
     * @name platformSDK#getFormulasAnalyticsInstances
     * @return { getFormulasAnalyticsInstancesParameters } To allow chaining
     */
    getFormulasAnalyticsInstances(): getFormulasAnalyticsInstancesParameters {
        return new getFormulasAnalyticsInstancesParameters(this, 'GET', '/formulas/analytics/instances');
    }
    /**
     * Retrieve the status analytics of formula executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalyticsStatuses
     * @return { getFormulasAnalyticsStatusesParameters } To allow chaining
     */
    getFormulasAnalyticsStatuses(): getFormulasAnalyticsStatusesParameters {
        return new getFormulasAnalyticsStatusesParameters(this, 'GET', '/formulas/analytics/statuses');
    }
    /**
     * Retrieve the current status counts of formula executions. If any executions are in a 'retry' status, a list of those execution IDs will be returned, along with the retry attempt that will be executed next.
     * @method
     * @name platformSDK#getFormulasAnalyticsStatusesNow
     * @return { getFormulasAnalyticsStatusesNowParameters } To allow chaining
     */
    getFormulasAnalyticsStatusesNow(): getFormulasAnalyticsStatusesNowParameters {
        return new getFormulasAnalyticsStatusesNowParameters(this, 'GET', '/formulas/analytics/statuses/now');
    }
    /**
     * Retrieve the analytics (execution time, execution delay, etc.) of formula step executions within a given date/time range
     * @method
     * @name platformSDK#getFormulasAnalyticsSteps
     * @return { getFormulasAnalyticsStepsParameters } To allow chaining
     */
    getFormulasAnalyticsSteps(): getFormulasAnalyticsStepsParameters {
        return new getFormulasAnalyticsStepsParameters(this, 'GET', '/formulas/analytics/steps');
    }
    /**
     * Retrieve all instances of all formula templates.
     * @method
     * @name platformSDK#getFormulasInstances
     * @return { getFormulasInstancesParameters } To allow chaining
     */
    getFormulasInstances(): getFormulasInstancesParameters {
        return new getFormulasInstancesParameters(this, 'GET', '/formulas/instances');
    }
    /**
     * Retrieve all step execution values for a formula step execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsStepsValues
     * @param {integer} stepExecutionId - The ID of the step execution.
     * @return { getFormulasInstancesExecutionsStepsValuesParameters } To allow chaining
     */
    getFormulasInstancesExecutionsStepsValues(
        stepExecutionId: number
        ,
    ): getFormulasInstancesExecutionsStepsValuesParameters {
        return new getFormulasInstancesExecutionsStepsValuesParameters(this, 'GET', '/formulas/instances/executions/steps/{stepExecutionId}/values', stepExecutionId);
    }
    /**
     * Retrieve a formula instance executions.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionByExecutionId
     * @param {integer} executionId - The ID of the formula instance execution.
     * @return { getFormulasInstancesExecutionByExecutionIdParameters } To allow chaining
     */
    getFormulasInstancesExecutionByExecutionId(
        executionId: number
        ,
    ): getFormulasInstancesExecutionByExecutionIdParameters {
        return new getFormulasInstancesExecutionByExecutionIdParameters(this, 'GET', '/formulas/instances/executions/{executionId}', executionId);
    }
    /**
     * Cancel a formula instance execution
     * @method
     * @name platformSDK#updateFormulasInstancesExecutionByExecutionId
     * @param {integer} executionId - The ID of the formula instance execution.
     * @param {} status - The change in status you want to effect, currently only 'cancel' is supported
     * @return { updateFormulasInstancesExecutionByExecutionIdParameters } To allow chaining
     */
    updateFormulasInstancesExecutionByExecutionId(
        executionId: number
        ,
        status:
        FormulaInstanceStatus
        ,
    ): updateFormulasInstancesExecutionByExecutionIdParameters {
        return new updateFormulasInstancesExecutionByExecutionIdParameters(this, 'PATCH', '/formulas/instances/executions/{executionId}', executionId, status);
    }
    /**
     * Retrieve all step execution errors for a formula execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors
     * @param {integer} executionId - The ID of the execution.
     * @return { getFormulasInstancesExecutionsErrorsParameters } To allow chaining
     */
    getFormulasInstancesExecutionsErrors(
        executionId: number
        ,
    ): getFormulasInstancesExecutionsErrorsParameters {
        return new getFormulasInstancesExecutionsErrorsParameters(this, 'GET', '/formulas/instances/executions/{executionId}/errors', executionId);
    }
    /**
     * Retrieve all step executions for a formula execution.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsSteps
     * @param {integer} executionId - The ID of the execution.
     * @return { getFormulasInstancesExecutionsStepsParameters } To allow chaining
     */
    getFormulasInstancesExecutionsSteps(
        executionId: number
        ,
    ): getFormulasInstancesExecutionsStepsParameters {
        return new getFormulasInstancesExecutionsStepsParameters(this, 'GET', '/formulas/instances/executions/{executionId}/steps', executionId);
    }
    /**
     * Retrieve a formula instance.
     * @method
     * @name platformSDK#getFormulasInstanceByInstanceId
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { getFormulasInstanceByInstanceIdParameters } To allow chaining
     */
    getFormulasInstanceByInstanceId(
        instanceId: number
        ,
    ): getFormulasInstanceByInstanceIdParameters {
        return new getFormulasInstanceByInstanceIdParameters(this, 'GET', '/formulas/instances/{instanceId}', instanceId);
    }
    /**
     * Retrieve all executions for a formula instance.
     * @method
     * @name platformSDK#getFormulasInstancesExecutions
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { getFormulasInstancesExecutionsParameters } To allow chaining
     */
    getFormulasInstancesExecutions(
        instanceId: number
        ,
    ): getFormulasInstancesExecutionsParameters {
        return new getFormulasInstancesExecutionsParameters(this, 'GET', '/formulas/instances/{instanceId}/executions', instanceId);
    }
    /**
     * Manually kickoff a formula instance from the given JSON trigger payload
     * @method
     * @name platformSDK#createFormulaInstanceExecution
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { createFormulaInstanceExecutionParameters } To allow chaining
     */
    createFormulaInstanceExecution(
        instanceId: number
        ,
    ): createFormulaInstanceExecutionParameters {
        return new createFormulaInstanceExecutionParameters(this, 'POST', '/formulas/instances/{instanceId}/executions', instanceId);
    }
    /**
     * Retrieve all executions that have a step execution error, for a formula instance.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors2
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { getFormulasInstancesExecutionsErrors2Parameters } To allow chaining
     */
    getFormulasInstancesExecutionsErrors2(
        instanceId: number
        ,
    ): getFormulasInstancesExecutionsErrors2Parameters {
        return new getFormulasInstancesExecutionsErrors2Parameters(this, 'GET', '/formulas/instances/{instanceId}/executions/errors', instanceId);
    }
    /**
     * Retrieve all executions with a step execution error for all formula instances of a formula.
     * @method
     * @name platformSDK#getFormulasInstancesExecutionsErrors2_1
     * @param {integer} formulaId - The ID of the formula.
     * @return { getFormulasInstancesExecutionsErrors2_1Parameters } To allow chaining
     */
    getFormulasInstancesExecutionsErrors2_1(
        formulaId: number
        ,
    ): getFormulasInstancesExecutionsErrors2_1Parameters {
        return new getFormulasInstancesExecutionsErrors2_1Parameters(this, 'GET', '/formulas/{formulaId}/instances/executions/errors', formulaId);
    }
    /**
     * Delete a specific formula template.
     * @method
     * @name platformSDK#deleteFormulaById
     * @param {integer} id - The ID of the formula template.
     * @return { deleteFormulaByIdParameters } To allow chaining
     */
    deleteFormulaById(
        id: number
        ,
    ): deleteFormulaByIdParameters {
        return new deleteFormulaByIdParameters(this, 'DELETE', '/formulas/{id}', id);
    }
    /**
     * Retrieve a specific formula template.
     * @method
     * @name platformSDK#getFormulaById
     * @param {integer} id - The ID of the formula template.
     * @return { getFormulaByIdParameters } To allow chaining
     */
    getFormulaById(
        id: number
        ,
    ): getFormulaByIdParameters {
        return new getFormulaByIdParameters(this, 'GET', '/formulas/{id}', id);
    }
    /**
     * Replace a specific formula template with the provided template.
     * @method
     * @name platformSDK#replaceFormulaById
     * @param {integer} id - The ID of the formula template.
     * @param {} formula - The formula template.
     * @return { replaceFormulaByIdParameters } To allow chaining
     */
    replaceFormulaById(
        id: number
        ,
        formula:
        UpdateFormula
        ,
    ): replaceFormulaByIdParameters {
        return new replaceFormulaByIdParameters(this, 'PUT', '/formulas/{id}', id, formula);
    }
    /**
     * Partially update a formula template's metadata.
     * @method
     * @name platformSDK#updateFormulaById
     * @param {integer} id - The ID of the formula template.
     * @param {} formula - The formula template.
     * @return { updateFormulaByIdParameters } To allow chaining
     */
    updateFormulaById(
        id: number
        ,
        formula:
        PartialUpdateFormula
        ,
    ): updateFormulaByIdParameters {
        return new updateFormulaByIdParameters(this, 'PATCH', '/formulas/{id}', id, formula);
    }
    /**
     * Create a new formula configuration.
     * @method
     * @name platformSDK#createFormulaConfiguration
     * @param {integer} id - The ID of the formula template.
     * @param {} configuration - The formula configuration.
     * @return { createFormulaConfigurationParameters } To allow chaining
     */
    createFormulaConfiguration(
        id: number
        ,
        configuration:
        CreateConfiguration
        ,
    ): createFormulaConfigurationParameters {
        return new createFormulaConfigurationParameters(this, 'POST', '/formulas/{id}/configuration', id, configuration);
    }
    /**
     * Delete a formula configuration.
     * @method
     * @name platformSDK#deleteFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     * @return { deleteFormulasConfigurationByConfigurationIdParameters } To allow chaining
     */
    deleteFormulasConfigurationByConfigurationId(
        id: number
        ,
        configurationId: number
        ,
    ): deleteFormulasConfigurationByConfigurationIdParameters {
        return new deleteFormulasConfigurationByConfigurationIdParameters(this, 'DELETE', '/formulas/{id}/configuration/{configurationId}', id, configurationId);
    }
    /**
     * Retrieve a formula configuration.
     * @method
     * @name platformSDK#getFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     * @return { getFormulasConfigurationByConfigurationIdParameters } To allow chaining
     */
    getFormulasConfigurationByConfigurationId(
        id: number
        ,
        configurationId: number
        ,
    ): getFormulasConfigurationByConfigurationIdParameters {
        return new getFormulasConfigurationByConfigurationIdParameters(this, 'GET', '/formulas/{id}/configuration/{configurationId}', id, configurationId);
    }
    /**
     * Update a formula configuration.
     * @method
     * @name platformSDK#replaceFormulasConfigurationByConfigurationId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} configurationId - The ID of the formula configuration.
     * @param {} configuration - The formula configuration.
     * @return { replaceFormulasConfigurationByConfigurationIdParameters } To allow chaining
     */
    replaceFormulasConfigurationByConfigurationId(
        id: number
        ,
        configurationId: number
        ,
        configuration:
        CreateConfiguration
        ,
    ): replaceFormulasConfigurationByConfigurationIdParameters {
        return new replaceFormulasConfigurationByConfigurationIdParameters(this, 'PUT', '/formulas/{id}/configuration/{configurationId}', id, configurationId, configuration);
    }
    /**
     * Export a formula template as a JSON file.
     * @method
     * @name platformSDK#getFormulasExport
     * @param {integer} id - The ID of the formula template.
     * @return { getFormulasExportParameters } To allow chaining
     */
    getFormulasExport(
        id: number
        ,
    ): getFormulasExportParameters {
        return new getFormulasExportParameters(this, 'GET', '/formulas/{id}/export', id);
    }
    /**
     * Retrieve a list of all instances associated with a particular formula template.
     * @method
     * @name platformSDK#getFormulasInstances2
     * @param {integer} id - The ID of the formula template.
     * @return { getFormulasInstances2Parameters } To allow chaining
     */
    getFormulasInstances2(
        id: number
        ,
    ): getFormulasInstances2Parameters {
        return new getFormulasInstances2Parameters(this, 'GET', '/formulas/{id}/instances', id);
    }
    /**
     * Create an instance of a formula template.
     * @method
     * @name platformSDK#createFormulaInstance
     * @param {integer} id - The ID of the formula template.
     * @param {} formulaInstance - The formula instance.
     * @return { createFormulaInstanceParameters } To allow chaining
     */
    createFormulaInstance(
        id: number
        ,
        formulaInstance:
        CreateFormulaInstance
        ,
    ): createFormulaInstanceParameters {
        return new createFormulaInstanceParameters(this, 'POST', '/formulas/{id}/instances', id, formulaInstance);
    }
    /**
     * Delete a specific formula instance of a specific formula template.
     * @method
     * @name platformSDK#deleteFormulasInstanceByInstanceId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { deleteFormulasInstanceByInstanceIdParameters } To allow chaining
     */
    deleteFormulasInstanceByInstanceId(
        id: number
        ,
        instanceId: number
        ,
    ): deleteFormulasInstanceByInstanceIdParameters {
        return new deleteFormulasInstanceByInstanceIdParameters(this, 'DELETE', '/formulas/{id}/instances/{instanceId}', id, instanceId);
    }
    /**
     * Retrieve a specific instance of a specific formula template.
     * @method
     * @name platformSDK#getFormulasInstanceByInstanceId2
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { getFormulasInstanceByInstanceId2Parameters } To allow chaining
     */
    getFormulasInstanceByInstanceId2(
        id: number
        ,
        instanceId: number
        ,
    ): getFormulasInstanceByInstanceId2Parameters {
        return new getFormulasInstanceByInstanceId2Parameters(this, 'GET', '/formulas/{id}/instances/{instanceId}', id, instanceId);
    }
    /**
     * Replace a specific formula instance of a specific formula template with the provided instance.
     * @method
     * @name platformSDK#replaceFormulasInstanceByInstanceId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @param {} formulaInstance - The formula instance.
     * @return { replaceFormulasInstanceByInstanceIdParameters } To allow chaining
     */
    replaceFormulasInstanceByInstanceId(
        id: number
        ,
        instanceId: number
        ,
        formulaInstance:
        CreateFormulaInstance
        ,
    ): replaceFormulasInstanceByInstanceIdParameters {
        return new replaceFormulasInstanceByInstanceIdParameters(this, 'PUT', '/formulas/{id}/instances/{instanceId}', id, instanceId, formulaInstance);
    }
    /**
     * Activate a formula instance.
     * @method
     * @name platformSDK#replaceFormulasInstancesActive
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { replaceFormulasInstancesActiveParameters } To allow chaining
     */
    replaceFormulasInstancesActive(
        id: number
        ,
        instanceId: number
        ,
    ): replaceFormulasInstancesActiveParameters {
        return new replaceFormulasInstancesActiveParameters(this, 'PUT', '/formulas/{id}/instances/{instanceId}/active', id, instanceId);
    }
    /**
     * Deactivate a formula instance.
     * @method
     * @name platformSDK#deleteFormulasInstancesActive
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { deleteFormulasInstancesActiveParameters } To allow chaining
     */
    deleteFormulasInstancesActive(
        id: number
        ,
        instanceId: number
        ,
    ): deleteFormulasInstancesActiveParameters {
        return new deleteFormulasInstancesActiveParameters(this, 'DELETE', '/formulas/{id}/instances/{instanceId}/active', id, instanceId);
    }
    /**
     * Retrieve the executions of a specific formula instance of a specific formula template.
     * @method
     * @name platformSDK#getFormulasInstancesExecutions2
     * @param {integer} id - The ID of the formula template.
     * @param {integer} instanceId - The ID of the formula instance.
     * @return { getFormulasInstancesExecutions2Parameters } To allow chaining
     */
    getFormulasInstancesExecutions2(
        id: number
        ,
        instanceId: number
        ,
    ): getFormulasInstancesExecutions2Parameters {
        return new getFormulasInstancesExecutions2Parameters(this, 'GET', '/formulas/{id}/instances/{instanceId}/executions', id, instanceId);
    }
    /**
     * Retrieve all formula steps.
     * @method
     * @name platformSDK#getFormulasSteps
     * @param {integer} id - The ID of the formula template.
     * @return { getFormulasStepsParameters } To allow chaining
     */
    getFormulasSteps(
        id: number
        ,
    ): getFormulasStepsParameters {
        return new getFormulasStepsParameters(this, 'GET', '/formulas/{id}/steps', id);
    }
    /**
     * Create a new formula step.
     * @method
     * @name platformSDK#createFormulaStep
     * @param {integer} id - The ID of the formula template.
     * @param {} step - The formula step.
     * @return { createFormulaStepParameters } To allow chaining
     */
    createFormulaStep(
        id: number
        ,
        step:
        CreateStep
        ,
    ): createFormulaStepParameters {
        return new createFormulaStepParameters(this, 'POST', '/formulas/{id}/steps', id, step);
    }
    /**
     * Delete a formula step.
     * @method
     * @name platformSDK#deleteFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     * @return { deleteFormulasStepByStepIdParameters } To allow chaining
     */
    deleteFormulasStepByStepId(
        id: number
        ,
        stepId: number
        ,
    ): deleteFormulasStepByStepIdParameters {
        return new deleteFormulasStepByStepIdParameters(this, 'DELETE', '/formulas/{id}/steps/{stepId}', id, stepId);
    }
    /**
     * Retrieve a formula step.
     * @method
     * @name platformSDK#getFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     * @return { getFormulasStepByStepIdParameters } To allow chaining
     */
    getFormulasStepByStepId(
        id: number
        ,
        stepId: number
        ,
    ): getFormulasStepByStepIdParameters {
        return new getFormulasStepByStepIdParameters(this, 'GET', '/formulas/{id}/steps/{stepId}', id, stepId);
    }
    /**
     * Update a formula step.
     * @method
     * @name platformSDK#replaceFormulasStepByStepId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} stepId - The ID of the formula step.
     * @param {} step - The formula step.
     * @return { replaceFormulasStepByStepIdParameters } To allow chaining
     */
    replaceFormulasStepByStepId(
        id: number
        ,
        stepId: number
        ,
        step:
        CreateStep
        ,
    ): replaceFormulasStepByStepIdParameters {
        return new replaceFormulasStepByStepIdParameters(this, 'PUT', '/formulas/{id}/steps/{stepId}', id, stepId, step);
    }
    /**
     * Create a new formula trigger.
     * @method
     * @name platformSDK#createFormulaTrigger
     * @param {integer} id - The ID of the formula template.
     * @param {} trigger - The formula trigger.
     * @return { createFormulaTriggerParameters } To allow chaining
     */
    createFormulaTrigger(
        id: number
        ,
        trigger:
        CreateTrigger
        ,
    ): createFormulaTriggerParameters {
        return new createFormulaTriggerParameters(this, 'POST', '/formulas/{id}/triggers', id, trigger);
    }
    /**
     * Delete a formula trigger.
     * @method
     * @name platformSDK#deleteFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     * @return { deleteFormulasTriggerByTriggerIdParameters } To allow chaining
     */
    deleteFormulasTriggerByTriggerId(
        id: number
        ,
        triggerId: number
        ,
    ): deleteFormulasTriggerByTriggerIdParameters {
        return new deleteFormulasTriggerByTriggerIdParameters(this, 'DELETE', '/formulas/{id}/triggers/{triggerId}', id, triggerId);
    }
    /**
     * Retrieve a formula trigger.
     * @method
     * @name platformSDK#getFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     * @return { getFormulasTriggerByTriggerIdParameters } To allow chaining
     */
    getFormulasTriggerByTriggerId(
        id: number
        ,
        triggerId: number
        ,
    ): getFormulasTriggerByTriggerIdParameters {
        return new getFormulasTriggerByTriggerIdParameters(this, 'GET', '/formulas/{id}/triggers/{triggerId}', id, triggerId);
    }
    /**
     * Update a formula trigger.
     * @method
     * @name platformSDK#replaceFormulasTriggerByTriggerId
     * @param {integer} id - The ID of the formula template.
     * @param {integer} triggerId - The ID of the formula trigger.
     * @param {} trigger - The formula trigger.
     * @return { replaceFormulasTriggerByTriggerIdParameters } To allow chaining
     */
    replaceFormulasTriggerByTriggerId(
        id: number
        ,
        triggerId: number
        ,
        trigger:
        CreateTrigger
        ,
    ): replaceFormulasTriggerByTriggerIdParameters {
        return new replaceFormulasTriggerByTriggerIdParameters(this, 'PUT', '/formulas/{id}/triggers/{triggerId}', id, triggerId, trigger);
    }
    /**
     * Retrieve all available element hubs.
     * @method
     * @name platformSDK#getHubs
     * @return { getHubsParameters } To allow chaining
     */
    getHubs(): getHubsParameters {
        return new getHubsParameters(this, 'GET', '/hubs');
    }
    /**
     * Create a new hub.
     * @method
     * @name platformSDK#createHub
     * @param {} hub - The hub
     * @return { createHubParameters } To allow chaining
     */
    createHub(
        hub:
        Hub
        ,
    ): createHubParameters {
        return new createHubParameters(this, 'POST', '/hubs', hub);
    }
    /**
     * Retrieve all available element hub keys.
     * @method
     * @name platformSDK#getHubsKeys
     * @return { getHubsKeysParameters } To allow chaining
     */
    getHubsKeys(): getHubsKeysParameters {
        return new getHubsKeysParameters(this, 'GET', '/hubs/keys');
    }
    /**
     * Delete a hub.
     * @method
     * @name platformSDK#deleteHubByKey
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     * @return { deleteHubByKeyParameters } To allow chaining
     */
    deleteHubByKey(
        key: string
        ,
    ): deleteHubByKeyParameters {
        return new deleteHubByKeyParameters(this, 'DELETE', '/hubs/{key}', key);
    }
    /**
     * Retrieve the details about a specific hub.
     * @method
     * @name platformSDK#getHubByKey
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     * @return { getHubByKeyParameters } To allow chaining
     */
    getHubByKey(
        key: string
        ,
    ): getHubByKeyParameters {
        return new getHubByKeyParameters(this, 'GET', '/hubs/{key}', key);
    }
    /**
     * Retrieve all available elements for a specific hub.
     * @method
     * @name platformSDK#getHubsElements
     * @param {string} key - The elements hub key (i.e. 'documents', 'crm', etc.)
     * @return { getHubsElementsParameters } To allow chaining
     */
    getHubsElements(
        key: string
        ,
    ): getHubsElementsParameters {
        return new getHubsElementsParameters(this, 'GET', '/hubs/{key}/elements', key);
    }
    /**
     * Retrieve all element instances from a specified path.  The instances go through Cloud Elements to your console.  Specifying an instance that does not exist results in an error response.
     * @method
     * @name platformSDK#getInstances
     * @return { getInstancesParameters } To allow chaining
     */
    getInstances(): getInstancesParameters {
        return new getInstancesParameters(this, 'GET', '/instances');
    }
    /**
     * Create a new element instance in your console.  Instance creation will flow through Cloud Elements to your console.
     * @method
     * @name platformSDK#createInstance
     * @param {} elementInstance - The element instance to create
     * @return { createInstanceParameters } To allow chaining
     */
    createInstance(
        elementInstance:
        ElementInstance
        ,
    ): createInstanceParameters {
        return new createInstanceParameters(this, 'POST', '/instances', elementInstance);
    }
    /**
     * Delete an instance associated with an instance token in authorization header. Specifying an instance associated with a given token that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteInstances
     * @return { deleteInstancesParameters } To allow chaining
     */
    deleteInstances(): deleteInstancesParameters {
        return new deleteInstancesParameters(this, 'DELETE', '/instances');
    }
    /**
     * Update an instance associated with a given token in authorization header.  Specifying an instance associated with an token that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceInstances
     * @param {} elementInstance - The fields of the element instance to update
     * @return { replaceInstancesParameters } To allow chaining
     */
    replaceInstances(
        elementInstance:
        ElementInstance
        ,
    ): replaceInstancesParameters {
        return new replaceInstancesParameters(this, 'PUT', '/instances', elementInstance);
    }
    /**
     * Update an instance partially associated with a given token in authorization header.  Specifying an instance associated with an token that does not exist will result in an error message.
     * @method
     * @name platformSDK#updateInstances
     * @param {} elementInstance - The fields of the element instance to update
     * @return { updateInstancesParameters } To allow chaining
     */
    updateInstances(
        elementInstance:
        ElementInstance
        ,
    ): updateInstancesParameters {
        return new updateInstancesParameters(this, 'PATCH', '/instances', elementInstance);
    }
    /**
     * Retrieve configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#getInstancesConfiguration
     * @return { getInstancesConfigurationParameters } To allow chaining
     */
    getInstancesConfiguration(): getInstancesConfigurationParameters {
        return new getInstancesConfigurationParameters(this, 'GET', '/instances/configuration');
    }
    /**
     * Retrieve configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#getInstancesConfigurationByConfigId
     * @param {integer} configId - The ID of the element instance config
     * @return { getInstancesConfigurationByConfigIdParameters } To allow chaining
     */
    getInstancesConfigurationByConfigId(
        configId: number
        ,
    ): getInstancesConfigurationByConfigIdParameters {
        return new getInstancesConfigurationByConfigIdParameters(this, 'GET', '/instances/configuration/{configId}', configId);
    }
    /**
     * Update configuration for an element instance with an associated token in authorization header
     * @method
     * @name platformSDK#updateInstancesConfigurationByConfigId
     * @param {integer} configId - The ID of the element instance config
     * @param {} config - The updated element instance config
     * @return { updateInstancesConfigurationByConfigIdParameters } To allow chaining
     */
    updateInstancesConfigurationByConfigId(
        configId: number
        ,
        config:
        ElementInstanceConfigUpdate
        ,
    ): updateInstancesConfigurationByConfigIdParameters {
        return new updateInstancesConfigurationByConfigIdParameters(this, 'PATCH', '/instances/configuration/{configId}', configId, config);
    }
    /**
     * Retrieve an instance specific swagger documentation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocs
     * @return { getInstancesDocsParameters } To allow chaining
     */
    getInstancesDocs(): getInstancesDocsParameters {
        return new getInstancesDocsParameters(this, 'GET', '/instances/docs');
    }
    /**
     * Retrieve an instance specific swagger documentation for an operation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocByOperationId
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     * @return { getInstancesDocByOperationIdParameters } To allow chaining
     */
    getInstancesDocByOperationId(
        operationId: string
        ,
    ): getInstancesDocByOperationIdParameters {
        return new getInstancesDocByOperationIdParameters(this, 'GET', '/instances/docs/{operationId}', operationId);
    }
    /**
     * Retrieve an definitionation for an operation id with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesDocsDefinitions
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     * @return { getInstancesDocsDefinitionsParameters } To allow chaining
     */
    getInstancesDocsDefinitions(
        operationId: string
        ,
    ): getInstancesDocsDefinitionsParameters {
        return new getInstancesDocsDefinitionsParameters(this, 'GET', '/instances/docs/{operationId}/definitions', operationId);
    }
    /**
     * Enable an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesEnabled
     * @return { replaceInstancesEnabledParameters } To allow chaining
     */
    replaceInstancesEnabled(): replaceInstancesEnabledParameters {
        return new replaceInstancesEnabledParameters(this, 'PUT', '/instances/enabled');
    }
    /**
     * Disable an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesEnabled
     * @return { deleteInstancesEnabledParameters } To allow chaining
     */
    deleteInstancesEnabled(): deleteInstancesEnabledParameters {
        return new deleteInstancesEnabledParameters(this, 'DELETE', '/instances/enabled');
    }
    /**
     * Retrieve events for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEvents
     * @return { getInstancesEventsParameters } To allow chaining
     */
    getInstancesEvents(): getInstancesEventsParameters {
        return new getInstancesEventsParameters(this, 'GET', '/instances/events');
    }
    /**
     * Retrieve the number of events within a given date/time range for all element instances within the specified account(s).
     * @method
     * @name platformSDK#getInstancesEventsAnalytics
     * @return { getInstancesEventsAnalyticsParameters } To allow chaining
     */
    getInstancesEventsAnalytics(): getInstancesEventsAnalyticsParameters {
        return new getInstancesEventsAnalyticsParameters(this, 'GET', '/instances/events/analytics');
    }
    /**
     * Retrieve the number of events within a given date/time range, aggregated by account ID. This API is really only useful for organization admins where more than one account exists.
     * @method
     * @name platformSDK#getInstancesEventsAnalyticsAccounts
     * @return { getInstancesEventsAnalyticsAccountsParameters } To allow chaining
     */
    getInstancesEventsAnalyticsAccounts(): getInstancesEventsAnalyticsAccountsParameters {
        return new getInstancesEventsAnalyticsAccountsParameters(this, 'GET', '/instances/events/analytics/accounts');
    }
    /**
     * Retrieve the number of events  within a given date/time range, aggregated by element instance ID.
     * @method
     * @name platformSDK#getInstancesEventsAnalyticsInstances
     * @return { getInstancesEventsAnalyticsInstancesParameters } To allow chaining
     */
    getInstancesEventsAnalyticsInstances(): getInstancesEventsAnalyticsInstancesParameters {
        return new getInstancesEventsAnalyticsInstancesParameters(this, 'GET', '/instances/events/analytics/instances');
    }
    /**
     * Retrieve events for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEventsDispositions
     * @return { getInstancesEventsDispositionsParameters } To allow chaining
     */
    getInstancesEventsDispositions(): getInstancesEventsDispositionsParameters {
        return new getInstancesEventsDispositionsParameters(this, 'GET', '/instances/events/dispositions');
    }
    /**
     * Retrieve an event for all element instances or for an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesEventByEventId
     * @param {integer} eventId - The ID of the event
     * @return { getInstancesEventByEventIdParameters } To allow chaining
     */
    getInstancesEventByEventId(
        eventId: number
        ,
    ): getInstancesEventByEventIdParameters {
        return new getInstancesEventByEventIdParameters(this, 'GET', '/instances/events/{eventId}', eventId);
    }
    /**
     * Retrieve all of the object definitions within a specific instance with an associated instance token in authorization header.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsDefinitions
     * @return { getInstancesObjectsDefinitionsParameters } To allow chaining
     */
    getInstancesObjectsDefinitions(): getInstancesObjectsDefinitionsParameters {
        return new getInstancesObjectsDefinitionsParameters(this, 'GET', '/instances/objects/definitions');
    }
    /**
     * Delete an object definition associated with an objectName for a specific instance with an associated instance token in authorization header.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { deleteInstancesObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    deleteInstancesObjectsObjectNameDefinitions(
        objectName: string
        ,
    ): deleteInstancesObjectsObjectNameDefinitionsParameters {
        return new deleteInstancesObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/instances/objects/{objectName}/definitions', objectName);
    }
    /**
     * Retrieve a specific object definition associated with an objectName within a specific instance with an associated instance token in authorization header.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { getInstancesObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    getInstancesObjectsObjectNameDefinitions(
        objectName: string
        ,
    ): getInstancesObjectsObjectNameDefinitionsParameters {
        return new getInstancesObjectsObjectNameDefinitionsParameters(this, 'GET', '/instances/objects/{objectName}/definitions', objectName);
    }
    /**
     * Create a new object definition associated with an objectName within a specific instance with an associated instance token in authorization header.  The definitions allow you to define what an object looks like within an instance.
     * @method
     * @name platformSDK#createInstanceObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { createInstanceObjectObjectNameDefinitionParameters } To allow chaining
     */
    createInstanceObjectObjectNameDefinition(
        objectName: string
        ,
        body:
        Definition
        ,
    ): createInstanceObjectObjectNameDefinitionParameters {
        return new createInstanceObjectObjectNameDefinitionParameters(this, 'POST', '/instances/objects/{objectName}/definitions', objectName, body);
    }
    /**
     * Update a specific object's definition associated with an objectName within a specific instance with an associated instance token in authorization header. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceInstancesObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { replaceInstancesObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    replaceInstancesObjectsObjectNameDefinitions(
        objectName: string
        ,
        body:
        Definition
        ,
    ): replaceInstancesObjectsObjectNameDefinitionsParameters {
        return new replaceInstancesObjectsObjectNameDefinitionsParameters(this, 'PUT', '/instances/objects/{objectName}/definitions', objectName, body);
    }
    /**
     * Temporarily enable trace-level usage logging for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesTraceLogging
     * @return { replaceInstancesTraceLoggingParameters } To allow chaining
     */
    replaceInstancesTraceLogging(): replaceInstancesTraceLoggingParameters {
        return new replaceInstancesTraceLoggingParameters(this, 'PUT', '/instances/trace-logging');
    }
    /**
     * Disable trace-level usage logging for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTraceLogging
     * @return { deleteInstancesTraceLoggingParameters } To allow chaining
     */
    deleteInstancesTraceLogging(): deleteInstancesTraceLoggingParameters {
        return new deleteInstancesTraceLoggingParameters(this, 'DELETE', '/instances/trace-logging');
    }
    /**
     * Delete the transformation for an element instance with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTransformations
     * @return { deleteInstancesTransformationsParameters } To allow chaining
     */
    deleteInstancesTransformations(): deleteInstancesTransformationsParameters {
        return new deleteInstancesTransformationsParameters(this, 'DELETE', '/instances/transformations');
    }
    /**
     * Retrieve an element instance transformation with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesTransformations
     * @return { getInstancesTransformationsParameters } To allow chaining
     */
    getInstancesTransformations(): getInstancesTransformationsParameters {
        return new getInstancesTransformationsParameters(this, 'GET', '/instances/transformations');
    }
    /**
     * Delete the transformation for an element instance for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#deleteInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @return { deleteInstancesTransformationByObjectNameParameters } To allow chaining
     */
    deleteInstancesTransformationByObjectName(
        objectName: string
        ,
    ): deleteInstancesTransformationByObjectNameParameters {
        return new deleteInstancesTransformationByObjectNameParameters(this, 'DELETE', '/instances/transformations/{objectName}', objectName);
    }
    /**
     * Retrieve an element instance transformation for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#getInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @return { getInstancesTransformationByObjectNameParameters } To allow chaining
     */
    getInstancesTransformationByObjectName(
        objectName: string
        ,
    ): getInstancesTransformationByObjectNameParameters {
        return new getInstancesTransformationByObjectNameParameters(this, 'GET', '/instances/transformations/{objectName}', objectName);
    }
    /**
     * Create a transformation for an element instance for a specific object
     * @method
     * @name platformSDK#createInstanceTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to create
     * @return { createInstanceTransformationByObjectNameParameters } To allow chaining
     */
    createInstanceTransformationByObjectName(
        objectName: string
        ,
        transformation:
        Transformation
        ,
    ): createInstanceTransformationByObjectNameParameters {
        return new createInstanceTransformationByObjectNameParameters(this, 'POST', '/instances/transformations/{objectName}', objectName, transformation);
    }
    /**
     * Update the transformation for an element instance for a specific object with an associated instance token in authorization header
     * @method
     * @name platformSDK#replaceInstancesTransformationByObjectName
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to update
     * @return { replaceInstancesTransformationByObjectNameParameters } To allow chaining
     */
    replaceInstancesTransformationByObjectName(
        objectName: string
        ,
        transformation:
        Transformation
        ,
    ): replaceInstancesTransformationByObjectNameParameters {
        return new replaceInstancesTransformationByObjectNameParameters(this, 'PUT', '/instances/transformations/{objectName}', objectName, transformation);
    }
    /**
     * Delete an instance associated with a given ID from your console. Specifying an instance associated with a given ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#deleteInstanceById
     * @param {integer} id - The ID of the element instance
     * @return { deleteInstanceByIdParameters } To allow chaining
     */
    deleteInstanceById(
        id: number
        ,
    ): deleteInstanceByIdParameters {
        return new deleteInstanceByIdParameters(this, 'DELETE', '/instances/{id}', id);
    }
    /**
     * Retrieve an element instance associated with a given ID from a specified path.  The instance goes through Cloud Elements to your console.  Specifying an instance with an associated ID that does not exist results in an error response.
     * @method
     * @name platformSDK#getInstanceById
     * @param {integer} id - The ID of the element instance
     * @return { getInstanceByIdParameters } To allow chaining
     */
    getInstanceById(
        id: number
        ,
    ): getInstanceByIdParameters {
        return new getInstanceByIdParameters(this, 'GET', '/instances/{id}', id);
    }
    /**
     * Update an instance associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#replaceInstanceById
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     * @return { replaceInstanceByIdParameters } To allow chaining
     */
    replaceInstanceById(
        id: number
        ,
        elementInstance:
        ElementInstance
        ,
    ): replaceInstanceByIdParameters {
        return new replaceInstanceByIdParameters(this, 'PUT', '/instances/{id}', id, elementInstance);
    }
    /**
     * Update an instance partially associated with a given ID from your console.  Specifying an instance associated with an ID that does not exist will result in an error message.
     * @method
     * @name platformSDK#updateInstanceById
     * @param {integer} id - The ID of the element instance
     * @param {} elementInstance - The fields of the element instance to update
     * @return { updateInstanceByIdParameters } To allow chaining
     */
    updateInstanceById(
        id: number
        ,
        elementInstance:
        ElementInstance
        ,
    ): updateInstanceByIdParameters {
        return new updateInstanceByIdParameters(this, 'PATCH', '/instances/{id}', id, elementInstance);
    }
    /**
     * Retrieve configuration for an element instance
     * @method
     * @name platformSDK#getInstancesConfiguration2
     * @param {integer} id - The ID of the element instance
     * @return { getInstancesConfiguration2Parameters } To allow chaining
     */
    getInstancesConfiguration2(
        id: number
        ,
    ): getInstancesConfiguration2Parameters {
        return new getInstancesConfiguration2Parameters(this, 'GET', '/instances/{id}/configuration', id);
    }
    /**
     * Retrieve configuration for an element instance
     * @method
     * @name platformSDK#getInstancesConfigurationByConfigId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} configId - The ID of the element instance config
     * @return { getInstancesConfigurationByConfigId2Parameters } To allow chaining
     */
    getInstancesConfigurationByConfigId2(
        id: number
        ,
        configId: number
        ,
    ): getInstancesConfigurationByConfigId2Parameters {
        return new getInstancesConfigurationByConfigId2Parameters(this, 'GET', '/instances/{id}/configuration/{configId}', id, configId);
    }
    /**
     * Update configuration for an element instance
     * @method
     * @name platformSDK#updateInstancesConfigurationByConfigId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} configId - The ID of the element instance config
     * @param {} config - The updated element instance config
     * @return { updateInstancesConfigurationByConfigId2Parameters } To allow chaining
     */
    updateInstancesConfigurationByConfigId2(
        id: number
        ,
        configId: number
        ,
        config:
        ElementInstanceConfigUpdate
        ,
    ): updateInstancesConfigurationByConfigId2Parameters {
        return new updateInstancesConfigurationByConfigId2Parameters(this, 'PATCH', '/instances/{id}/configuration/{configId}', id, configId, config);
    }
    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocs2
     * @param {integer} id - The ID of the element instance
     * @return { getInstancesDocs2Parameters } To allow chaining
     */
    getInstancesDocs2(
        id: number
        ,
    ): getInstancesDocs2Parameters {
        return new getInstancesDocs2Parameters(this, 'GET', '/instances/{id}/docs', id);
    }
    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocByOperationId2
     * @param {integer} id - The ID of the element instance
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     * @return { getInstancesDocByOperationId2Parameters } To allow chaining
     */
    getInstancesDocByOperationId2(
        id: number
        ,
        operationId: string
        ,
    ): getInstancesDocByOperationId2Parameters {
        return new getInstancesDocByOperationId2Parameters(this, 'GET', '/instances/{id}/docs/{operationId}', id, operationId);
    }
    /**
     * Retrieve an instance specific swagger documentation
     * @method
     * @name platformSDK#getInstancesDocsDefinitions2
     * @param {integer} id - The ID of the element instance
     * @param {string} operationId - The id of the operation for which swagger docs is returned
     * @return { getInstancesDocsDefinitions2Parameters } To allow chaining
     */
    getInstancesDocsDefinitions2(
        id: number
        ,
        operationId: string
        ,
    ): getInstancesDocsDefinitions2Parameters {
        return new getInstancesDocsDefinitions2Parameters(this, 'GET', '/instances/{id}/docs/{operationId}/definitions', id, operationId);
    }
    /**
     * Enable an element instance
     * @method
     * @name platformSDK#replaceInstancesEnabled2
     * @param {integer} id - The ID of the element instance
     * @return { replaceInstancesEnabled2Parameters } To allow chaining
     */
    replaceInstancesEnabled2(
        id: number
        ,
    ): replaceInstancesEnabled2Parameters {
        return new replaceInstancesEnabled2Parameters(this, 'PUT', '/instances/{id}/enabled', id);
    }
    /**
     * Disable an element instance
     * @method
     * @name platformSDK#deleteInstancesEnabled2
     * @param {integer} id - The ID of the element instance
     * @return { deleteInstancesEnabled2Parameters } To allow chaining
     */
    deleteInstancesEnabled2(
        id: number
        ,
    ): deleteInstancesEnabled2Parameters {
        return new deleteInstancesEnabled2Parameters(this, 'DELETE', '/instances/{id}/enabled', id);
    }
    /**
     * Retrieve events for an element instance
     * @method
     * @name platformSDK#getInstancesEvents2
     * @param {integer} id - The ID of the element instance
     * @return { getInstancesEvents2Parameters } To allow chaining
     */
    getInstancesEvents2(
        id: number
        ,
    ): getInstancesEvents2Parameters {
        return new getInstancesEvents2Parameters(this, 'GET', '/instances/{id}/events', id);
    }
    /**
     * Retrieve an event for an element instance
     * @method
     * @name platformSDK#getInstancesEventByEventId2
     * @param {integer} id - The ID of the element instance
     * @param {integer} eventId - The ID of the event
     * @return { getInstancesEventByEventId2Parameters } To allow chaining
     */
    getInstancesEventByEventId2(
        id: number
        ,
        eventId: number
        ,
    ): getInstancesEventByEventId2Parameters {
        return new getInstancesEventByEventId2Parameters(this, 'GET', '/instances/{id}/events/{eventId}', id, eventId);
    }
    /**
     * Retrieve all of the object definitions at all levels that could map to a specific instance.  If no object definitions exist, then this will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsDefinitions2
     * @param {integer} id - The ID of the instance
     * @return { getInstancesObjectsDefinitions2Parameters } To allow chaining
     */
    getInstancesObjectsDefinitions2(
        id: number
        ,
    ): getInstancesObjectsDefinitions2Parameters {
        return new getInstancesObjectsDefinitions2Parameters(this, 'GET', '/instances/{id}/objects/definitions', id);
    }
    /**
     * Delete an object definition associated with an objectName for a specific instance.  Specifying an object name that does not have an object definition will result in an error response.
     * @method
     * @name platformSDK#deleteInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @return { deleteInstancesObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    deleteInstancesObjectsObjectNameDefinitions2(
        id: number
        ,
        objectName: string
        ,
    ): deleteInstancesObjectsObjectNameDefinitions2Parameters {
        return new deleteInstancesObjectsObjectNameDefinitions2Parameters(this, 'DELETE', '/instances/{id}/objects/{objectName}/definitions', id, objectName);
    }
    /**
     * Retrieve a specific object definition associated with an objectName within a specific instance.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#getInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @return { getInstancesObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    getInstancesObjectsObjectNameDefinitions2(
        id: number
        ,
        objectName: string
        ,
    ): getInstancesObjectsObjectNameDefinitions2Parameters {
        return new getInstancesObjectsObjectNameDefinitions2Parameters(this, 'GET', '/instances/{id}/objects/{objectName}/definitions', id, objectName);
    }
    /**
     * Create a new object definition associated with an objectName within a specific instance.  The definitions allow you to define what an object looks like within an instance.
     * @method
     * @name platformSDK#createInstanceObjectObjectNameDefinition2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { createInstanceObjectObjectNameDefinition2Parameters } To allow chaining
     */
    createInstanceObjectObjectNameDefinition2(
        id: number
        ,
        objectName: string
        ,
        body:
        Definition
        ,
    ): createInstanceObjectObjectNameDefinition2Parameters {
        return new createInstanceObjectObjectNameDefinition2Parameters(this, 'POST', '/instances/{id}/objects/{objectName}/definitions', id, objectName, body);
    }
    /**
     * Update a specific object's definition associated with an objectName within a specific instance. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceInstancesObjectsObjectNameDefinitions2
     * @param {integer} id - The ID of the instance
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { replaceInstancesObjectsObjectNameDefinitions2Parameters } To allow chaining
     */
    replaceInstancesObjectsObjectNameDefinitions2(
        id: number
        ,
        objectName: string
        ,
        body:
        Definition
        ,
    ): replaceInstancesObjectsObjectNameDefinitions2Parameters {
        return new replaceInstancesObjectsObjectNameDefinitions2Parameters(this, 'PUT', '/instances/{id}/objects/{objectName}/definitions', id, objectName, body);
    }
    /**
     * Temporarily enable trace-level usage logging for an element instance
     * @method
     * @name platformSDK#replaceInstancesTraceLogging2
     * @param {integer} id - The ID of the element instance
     * @return { replaceInstancesTraceLogging2Parameters } To allow chaining
     */
    replaceInstancesTraceLogging2(
        id: number
        ,
    ): replaceInstancesTraceLogging2Parameters {
        return new replaceInstancesTraceLogging2Parameters(this, 'PUT', '/instances/{id}/trace-logging', id);
    }
    /**
     * Disable trace-level usage logging for an element instance
     * @method
     * @name platformSDK#deleteInstancesTraceLogging2
     * @param {integer} id - The ID of the element instance
     * @return { deleteInstancesTraceLogging2Parameters } To allow chaining
     */
    deleteInstancesTraceLogging2(
        id: number
        ,
    ): deleteInstancesTraceLogging2Parameters {
        return new deleteInstancesTraceLogging2Parameters(this, 'DELETE', '/instances/{id}/trace-logging', id);
    }
    /**
     * Delete the transformation for an element instance
     * @method
     * @name platformSDK#deleteInstancesTransformations2
     * @param {integer} id - The ID of the element instance
     * @return { deleteInstancesTransformations2Parameters } To allow chaining
     */
    deleteInstancesTransformations2(
        id: number
        ,
    ): deleteInstancesTransformations2Parameters {
        return new deleteInstancesTransformations2Parameters(this, 'DELETE', '/instances/{id}/transformations', id);
    }
    /**
     * Retrieve an element instance transformation
     * @method
     * @name platformSDK#getInstancesTransformations2
     * @param {integer} id - The ID of the element instance
     * @return { getInstancesTransformations2Parameters } To allow chaining
     */
    getInstancesTransformations2(
        id: number
        ,
    ): getInstancesTransformations2Parameters {
        return new getInstancesTransformations2Parameters(this, 'GET', '/instances/{id}/transformations', id);
    }
    /**
     * Delete the transformation for an element instance for a specific object
     * @method
     * @name platformSDK#deleteInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @return { deleteInstancesTransformationByObjectName2Parameters } To allow chaining
     */
    deleteInstancesTransformationByObjectName2(
        id: number
        ,
        objectName: string
        ,
    ): deleteInstancesTransformationByObjectName2Parameters {
        return new deleteInstancesTransformationByObjectName2Parameters(this, 'DELETE', '/instances/{id}/transformations/{objectName}', id, objectName);
    }
    /**
     * Retrieve an element instance transformation for a specific object
     * @method
     * @name platformSDK#getInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @return { getInstancesTransformationByObjectName2Parameters } To allow chaining
     */
    getInstancesTransformationByObjectName2(
        id: number
        ,
        objectName: string
        ,
    ): getInstancesTransformationByObjectName2Parameters {
        return new getInstancesTransformationByObjectName2Parameters(this, 'GET', '/instances/{id}/transformations/{objectName}', id, objectName);
    }
    /**
     * Create a transformation for an element instance for a specific object
     * @method
     * @name platformSDK#createInstanceTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to create
     * @return { createInstanceTransformationByObjectName2Parameters } To allow chaining
     */
    createInstanceTransformationByObjectName2(
        id: number
        ,
        objectName: string
        ,
        transformation:
        Transformation
        ,
    ): createInstanceTransformationByObjectName2Parameters {
        return new createInstanceTransformationByObjectName2Parameters(this, 'POST', '/instances/{id}/transformations/{objectName}', id, objectName, transformation);
    }
    /**
     * Update the transformation for an element instance for a specific object
     * @method
     * @name platformSDK#replaceInstancesTransformationByObjectName2
     * @param {integer} id - The ID of the element instance
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation to update
     * @return { replaceInstancesTransformationByObjectName2Parameters } To allow chaining
     */
    replaceInstancesTransformationByObjectName2(
        id: number
        ,
        objectName: string
        ,
        transformation:
        Transformation
        ,
    ): replaceInstancesTransformationByObjectName2Parameters {
        return new replaceInstancesTransformationByObjectName2Parameters(this, 'PUT', '/instances/{id}/transformations/{objectName}', id, objectName, transformation);
    }
    /**
     * Get a list of all configured jobs.
     * @method
     * @name platformSDK#getJobs
     * @return { getJobsParameters } To allow chaining
     */
    getJobs(): getJobsParameters {
        return new getJobsParameters(this, 'GET', '/jobs');
    }
    /**
     * Create a new job.
     * @method
     * @name platformSDK#createJob
     * @return { createJobParameters } To allow chaining
     */
    createJob(): createJobParameters {
        return new createJobParameters(this, 'POST', '/jobs');
    }
    /**
     * Get a list of the previous job executions.
     * @method
     * @name platformSDK#getJobsExecutions
     * @return { getJobsExecutionsParameters } To allow chaining
     */
    getJobsExecutions(): getJobsExecutionsParameters {
        return new getJobsExecutionsParameters(this, 'GET', '/jobs/executions');
    }
    /**
     * Delete a specific job.
     * @method
     * @name platformSDK#deleteJobById
     * @param {string} id - The ID of the job.
     * @return { deleteJobByIdParameters } To allow chaining
     */
    deleteJobById(
        id: string
        ,
    ): deleteJobByIdParameters {
        return new deleteJobByIdParameters(this, 'DELETE', '/jobs/{id}', id);
    }
    /**
     * Get information about a specific job.
     * @method
     * @name platformSDK#getJobById
     * @param {string} id - The ID of the job.
     * @return { getJobByIdParameters } To allow chaining
     */
    getJobById(
        id: string
        ,
    ): getJobByIdParameters {
        return new getJobByIdParameters(this, 'GET', '/jobs/{id}', id);
    }
    /**
     * Disable a job.
     * @method
     * @name platformSDK#replaceJobsDisable
     * @param {string} id - The ID of the job.
     * @return { replaceJobsDisableParameters } To allow chaining
     */
    replaceJobsDisable(
        id: string
        ,
    ): replaceJobsDisableParameters {
        return new replaceJobsDisableParameters(this, 'PUT', '/jobs/{id}/disable', id);
    }
    /**
     * Enable a job.
     * @method
     * @name platformSDK#replaceJobsEnable
     * @param {string} id - The ID of the job.
     * @return { replaceJobsEnableParameters } To allow chaining
     */
    replaceJobsEnable(
        id: string
        ,
    ): replaceJobsEnableParameters {
        return new replaceJobsEnableParameters(this, 'PUT', '/jobs/{id}/enable', id);
    }
    /**
     * Get a list of history records for a specific job.
     * @method
     * @name platformSDK#getJobsHistory
     * @param {string} id - The ID of the job.
     * @return { getJobsHistoryParameters } To allow chaining
     */
    getJobsHistory(
        id: string
        ,
    ): getJobsHistoryParameters {
        return new getJobsHistoryParameters(this, 'GET', '/jobs/{id}/history', id);
    }
    /**
     * Get a specific history record for a specific job.
     * @method
     * @name platformSDK#getJobsHistoryByHistoryId
     * @param {string} id - The ID of the job.
     * @param {integer} historyId - The ID of the History record.
     * @return { getJobsHistoryByHistoryIdParameters } To allow chaining
     */
    getJobsHistoryByHistoryId(
        id: string
        ,
        historyId: number
        ,
    ): getJobsHistoryByHistoryIdParameters {
        return new getJobsHistoryByHistoryIdParameters(this, 'GET', '/jobs/{id}/history/{historyId}', id, historyId);
    }
    /**
     * Update a job's CRON string and reschedule it.
     * @method
     * @name platformSDK#updateJobsReschedule
     * @param {string} id - The ID of the job.
     * @return { updateJobsRescheduleParameters } To allow chaining
     */
    updateJobsReschedule(
        id: string
        ,
    ): updateJobsRescheduleParameters {
        return new updateJobsRescheduleParameters(this, 'PATCH', '/jobs/{id}/reschedule', id);
    }
    /**
     * Retrieve the API metrics for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsApi
     * @return { getMetricsApiParameters } To allow chaining
     */
    getMetricsApi(): getMetricsApiParameters {
        return new getMetricsApiParameters(this, 'GET', '/metrics/api');
    }
    /**
     * Retrieve the metrics of number of bulk jobs executed for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsBulkJobs
     * @return { getMetricsBulkJobsParameters } To allow chaining
     */
    getMetricsBulkJobs(): getMetricsBulkJobsParameters {
        return new getMetricsBulkJobsParameters(this, 'GET', '/metrics/bulk-jobs');
    }
    /**
     * Retrieve the element instance creation API metrics for the accounts provided, split up by element key. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsElementInstancesCreated
     * @return { getMetricsElementInstancesCreatedParameters } To allow chaining
     */
    getMetricsElementInstancesCreated(): getMetricsElementInstancesCreatedParameters {
        return new getMetricsElementInstancesCreatedParameters(this, 'GET', '/metrics/element-instances-created');
    }
    /**
     * Retrieve the metrics of number of custom elements created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsElementsCreated
     * @return { getMetricsElementsCreatedParameters } To allow chaining
     */
    getMetricsElementsCreated(): getMetricsElementsCreatedParameters {
        return new getMetricsElementsCreatedParameters(this, 'GET', '/metrics/elements-created');
    }
    /**
     * Retrieve the metrics of number of events received for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsEvents
     * @return { getMetricsEventsParameters } To allow chaining
     */
    getMetricsEvents(): getMetricsEventsParameters {
        return new getMetricsEventsParameters(this, 'GET', '/metrics/events');
    }
    /**
     * Retrieve the metrics of number of formulas executions for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsFormulaExecutions
     * @return { getMetricsFormulaExecutionsParameters } To allow chaining
     */
    getMetricsFormulaExecutions(): getMetricsFormulaExecutionsParameters {
        return new getMetricsFormulaExecutionsParameters(this, 'GET', '/metrics/formula-executions');
    }
    /**
     * Retrieve the metrics of number of formulas created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsFormulasCreated
     * @return { getMetricsFormulasCreatedParameters } To allow chaining
     */
    getMetricsFormulasCreated(): getMetricsFormulasCreatedParameters {
        return new getMetricsFormulasCreatedParameters(this, 'GET', '/metrics/formulas-created');
    }
    /**
     * Retrieve the API metrics for the accounts provided, split up by hub. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsHubApi
     * @return { getMetricsHubApiParameters } To allow chaining
     */
    getMetricsHubApi(): getMetricsHubApiParameters {
        return new getMetricsHubApiParameters(this, 'GET', '/metrics/hub-api');
    }
    /**
     * Retrieve the hubs created metrics for the accounts provided, split up by hub. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsHubsCreated
     * @return { getMetricsHubsCreatedParameters } To allow chaining
     */
    getMetricsHubsCreated(): getMetricsHubsCreatedParameters {
        return new getMetricsHubsCreatedParameters(this, 'GET', '/metrics/hubs-created');
    }
    /**
     * Retrieve the metrics of number of VDRs created for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsVdrsCreated
     * @return { getMetricsVdrsCreatedParameters } To allow chaining
     */
    getMetricsVdrsCreated(): getMetricsVdrsCreatedParameters {
        return new getMetricsVdrsCreatedParameters(this, 'GET', '/metrics/vdrs-created');
    }
    /**
     * Retrieve the metrics of number of calls using VDRs for the accounts provided. Any customer or organization IDs provided will be used to identify accounts within those entities.
     * @method
     * @name platformSDK#getMetricsVdrsInvoked
     * @return { getMetricsVdrsInvokedParameters } To allow chaining
     */
    getMetricsVdrsInvoked(): getMetricsVdrsInvokedParameters {
        return new getMetricsVdrsInvokedParameters(this, 'GET', '/metrics/vdrs-invoked');
    }
    /**
     * Create a new organization within the user's customer. NOTE: This API requires the 'customer-admin' privilege.
     * @method
     * @name platformSDK#createOrganization
     * @param {} organization - The organization to create.
     * @return { createOrganizationParameters } To allow chaining
     */
    createOrganization(
        organization:
        Organization_POST
        ,
    ): createOrganizationParameters {
        return new createOrganizationParameters(this, 'POST', '/organizations', organization);
    }
    /**
     * Delete the default transformation for an element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#deleteOrganizationsElementsTransformations
     * @param {string} keyOrId - The element key or ID
     * @return { deleteOrganizationsElementsTransformationsParameters } To allow chaining
     */
    deleteOrganizationsElementsTransformations(
        keyOrId: string
        ,
    ): deleteOrganizationsElementsTransformationsParameters {
        return new deleteOrganizationsElementsTransformationsParameters(this, 'DELETE', '/organizations/elements/{keyOrId}/transformations', keyOrId);
    }
    /**
     * Retrieve the default transformation for a specific element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#getOrganizationsElementsTransformations
     * @param {string} keyOrId - The element key or ID
     * @return { getOrganizationsElementsTransformationsParameters } To allow chaining
     */
    getOrganizationsElementsTransformations(
        keyOrId: string
        ,
    ): getOrganizationsElementsTransformationsParameters {
        return new getOrganizationsElementsTransformationsParameters(this, 'GET', '/organizations/elements/{keyOrId}/transformations', keyOrId);
    }
    /**
     * Delete the default transformation for an object for a specific element within an organization. The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#deleteOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @return { deleteOrganizationsElementsTransformationByObjectNameParameters } To allow chaining
     */
    deleteOrganizationsElementsTransformationByObjectName(
        keyOrId: string
        ,
        objectName: string
        ,
    ): deleteOrganizationsElementsTransformationByObjectNameParameters {
        return new deleteOrganizationsElementsTransformationByObjectNameParameters(this, 'DELETE', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName);
    }
    /**
     * Retrieve the default transformation for an object for a specific element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#getOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @return { getOrganizationsElementsTransformationByObjectNameParameters } To allow chaining
     */
    getOrganizationsElementsTransformationByObjectName(
        keyOrId: string
        ,
        objectName: string
        ,
    ): getOrganizationsElementsTransformationByObjectNameParameters {
        return new getOrganizationsElementsTransformationByObjectNameParameters(this, 'GET', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName);
    }
    /**
     * Create a default transformation for a specific object for all elements with the given key, within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#createOrganizationElementTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     * @return { createOrganizationElementTransformationByObjectNameParameters } To allow chaining
     */
    createOrganizationElementTransformationByObjectName(
        keyOrId: string
        ,
        objectName: string
        ,
        transformation:
        Transformation
        ,
    ): createOrganizationElementTransformationByObjectNameParameters {
        return new createOrganizationElementTransformationByObjectNameParameters(this, 'POST', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName, transformation);
    }
    /**
     * Update the default transformation for an object for a specific element element within an organization.  The key field denotes the element being referenced in the API call, i.e. dropbox.
     * @method
     * @name platformSDK#replaceOrganizationsElementsTransformationByObjectName
     * @param {string} keyOrId - The element key or ID
     * @param {string} objectName - The name of the object
     * @param {} transformation - The transformation
     * @return { replaceOrganizationsElementsTransformationByObjectNameParameters } To allow chaining
     */
    replaceOrganizationsElementsTransformationByObjectName(
        keyOrId: string
        ,
        objectName: string
        ,
        transformation:
        Transformation
        ,
    ): replaceOrganizationsElementsTransformationByObjectNameParameters {
        return new replaceOrganizationsElementsTransformationByObjectNameParameters(this, 'PUT', '/organizations/elements/{keyOrId}/transformations/{objectName}', keyOrId, objectName, transformation);
    }
    /**
     * Retrieve the user's organization
     * @method
     * @name platformSDK#getOrganizationsMe
     * @return { getOrganizationsMeParameters } To allow chaining
     */
    getOrganizationsMe(): getOrganizationsMeParameters {
        return new getOrganizationsMeParameters(this, 'GET', '/organizations/me');
    }
    /**
     * Update the user's organization metadata
     * @method
     * @name platformSDK#replaceOrganizationsMe
     * @param {} body - The organization metadata to update. The only field that can be updated is 'name'.
     * @return { replaceOrganizationsMeParameters } To allow chaining
     */
    replaceOrganizationsMe(
        body:
        Organization
        ,
    ): replaceOrganizationsMeParameters {
        return new replaceOrganizationsMeParameters(this, 'PUT', '/organizations/me', body);
    }
    /**
     * Delete all object definitions within an organization.
     * @method
     * @name platformSDK#deleteOrganizationsObjectsDefinitions
     * @return { deleteOrganizationsObjectsDefinitionsParameters } To allow chaining
     */
    deleteOrganizationsObjectsDefinitions(): deleteOrganizationsObjectsDefinitionsParameters {
        return new deleteOrganizationsObjectsDefinitionsParameters(this, 'DELETE', '/organizations/objects/definitions');
    }
    /**
     * Retrieve all of the object definitions within an organization.
     * @method
     * @name platformSDK#getOrganizationsObjectsDefinitions
     * @return { getOrganizationsObjectsDefinitionsParameters } To allow chaining
     */
    getOrganizationsObjectsDefinitions(): getOrganizationsObjectsDefinitionsParameters {
        return new getOrganizationsObjectsDefinitionsParameters(this, 'GET', '/organizations/objects/definitions');
    }
    /**
     * Create multiple object definitions within an organization.  The definitions allow you to define what an object looks like within an organization.
     * @method
     * @name platformSDK#createOrganizationObjectDefinition
     * @param {} body - The object definitions to create
     * @return { createOrganizationObjectDefinitionParameters } To allow chaining
     */
    createOrganizationObjectDefinition(
        body:
        Dictionary
        ,
    ): createOrganizationObjectDefinitionParameters {
        return new createOrganizationObjectDefinitionParameters(this, 'POST', '/organizations/objects/definitions', body);
    }
    /**
     * Delete an object definition associated with a specific objectName within an organization. Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#deleteOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { deleteOrganizationsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    deleteOrganizationsObjectsObjectNameDefinitions(
        objectName: string
        ,
    ): deleteOrganizationsObjectsObjectNameDefinitionsParameters {
        return new deleteOrganizationsObjectsObjectNameDefinitionsParameters(this, 'DELETE', '/organizations/objects/{objectName}/definitions', objectName);
    }
    /**
     * Retrieve a specific object definition associated with an objectName within an organization.
     * @method
     * @name platformSDK#getOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @return { getOrganizationsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    getOrganizationsObjectsObjectNameDefinitions(
        objectName: string
        ,
    ): getOrganizationsObjectsObjectNameDefinitionsParameters {
        return new getOrganizationsObjectsObjectNameDefinitionsParameters(this, 'GET', '/organizations/objects/{objectName}/definitions', objectName);
    }
    /**
     * Create a new object definition associated with an objectName within an organization.  The definitions allow you to define what an object looks like within an organization.
     * @method
     * @name platformSDK#createOrganizationObjectObjectNameDefinition
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { createOrganizationObjectObjectNameDefinitionParameters } To allow chaining
     */
    createOrganizationObjectObjectNameDefinition(
        objectName: string
        ,
        body:
        Definition
        ,
    ): createOrganizationObjectObjectNameDefinitionParameters {
        return new createOrganizationObjectObjectNameDefinitionParameters(this, 'POST', '/organizations/objects/{objectName}/definitions', objectName, body);
    }
    /**
     * Update a specific object's definition associated with a specific objectName within an organization.  Specifying an object definition associated with a given objectName that does not exist will result in an error response.
     * @method
     * @name platformSDK#replaceOrganizationsObjectsObjectNameDefinitions
     * @param {string} objectName - The name of the object
     * @param {} body - The object definition
     * @return { replaceOrganizationsObjectsObjectNameDefinitionsParameters } To allow chaining
     */
    replaceOrganizationsObjectsObjectNameDefinitions(
        objectName: string
        ,
        body:
        Definition
        ,
    ): replaceOrganizationsObjectsObjectNameDefinitionsParameters {
        return new replaceOrganizationsObjectsObjectNameDefinitionsParameters(this, 'PUT', '/organizations/objects/{objectName}/definitions', objectName, body);
    }
    /**
     * Find users within your default organizational account.  The CEQL search expression or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for users containing the name 'greg', the search expression will be where name=‘greg’. When this parameter is omitted, all accounts are returned in a paginated fashion.
     * @method
     * @name platformSDK#getOrganizationsUsers
     * @return { getOrganizationsUsersParameters } To allow chaining
     */
    getOrganizationsUsers(): getOrganizationsUsersParameters {
        return new getOrganizationsUsersParameters(this, 'GET', '/organizations/users');
    }
    /**
     * Create a user under the default organization account
     * @method
     * @name platformSDK#createOrganizationUser
     * @param {} body - The user to create<br/><br/>The required fields are:<br/><ul><li><b>email</b> - The user's email address</li><li><b>firstName</b> - The user's first name</li><li><b>lastName</b> - The user's last name</li></ul><br/>Upon success, the created object will be returned.
     * @return { createOrganizationUserParameters } To allow chaining
     */
    createOrganizationUser(
        body:
        User
        ,
    ): createOrganizationUserParameters {
        return new createOrganizationUserParameters(this, 'POST', '/organizations/users', body);
    }
    /**
     * Retrieve a user associated with an email or ID within the default organization.  Specifying a user associated with a given emailOrId that does not exist will result in an error response.
     * @method
     * @name platformSDK#getOrganizationsUserByEmailOrId
     * @param {string} emailOrId - The email address or numeric ID of the user
     * @return { getOrganizationsUserByEmailOrIdParameters } To allow chaining
     */
    getOrganizationsUserByEmailOrId(
        emailOrId: string
        ,
    ): getOrganizationsUserByEmailOrIdParameters {
        return new getOrganizationsUserByEmailOrIdParameters(this, 'GET', '/organizations/users/{emailOrId}', emailOrId);
    }
    /**
     * Delete a user associated with an ID within your organization. WARNING: This action will irreversibly delete all jobs, and formula and element instances associated with the user.
     * @method
     * @name platformSDK#deleteOrganizationsUserById
     * @param {integer} id - The ID of the user
     * @return { deleteOrganizationsUserByIdParameters } To allow chaining
     */
    deleteOrganizationsUserById(
        id: number
        ,
    ): deleteOrganizationsUserByIdParameters {
        return new deleteOrganizationsUserByIdParameters(this, 'DELETE', '/organizations/users/{id}', id);
    }
    /**
     * Update a user associated with an ID within your organization. WARNING: If updating the 'active' field to false, all of the scheduled jobs for the user will be deleted.
     * @method
     * @name platformSDK#updateOrganizationsUserById
     * @param {integer} id - The ID of the user
     * @param {} body - The updated user information
     * @return { updateOrganizationsUserByIdParameters } To allow chaining
     */
    updateOrganizationsUserById(
        id: number
        ,
        body:
        User
        ,
    ): updateOrganizationsUserByIdParameters {
        return new updateOrganizationsUserByIdParameters(this, 'PATCH', '/organizations/users/{id}', id, body);
    }
    /**
     * Create a new account within an organization. NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#createOrganizationAccount
     * @param {integer} id - The ID of the organization
     * @param {} account - The account to create.
     * @return { createOrganizationAccountParameters } To allow chaining
     */
    createOrganizationAccount(
        id: number
        ,
        account:
        Account_POST
        ,
    ): createOrganizationAccountParameters {
        return new createOrganizationAccountParameters(this, 'POST', '/organizations/{id}/accounts', id, account);
    }
    /**
     * Retrieve all the accounts within an organization. NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#getOrganizationsAccounts
     * @param {integer} id - The ID of the organization
     * @return { getOrganizationsAccountsParameters } To allow chaining
     */
    getOrganizationsAccounts(
        id: number
        ,
    ): getOrganizationsAccountsParameters {
        return new getOrganizationsAccountsParameters(this, 'GET', '/organizations/{id}/accounts', id);
    }
    /**
     * Retrieve an account within an organization NOTE: Only a user with the 'org-admin' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#getOrganizationsAccountByAccountId
     * @param {integer} id - The ID of the organization
     * @param {integer} accountId - The ID of the account
     * @return { getOrganizationsAccountByAccountIdParameters } To allow chaining
     */
    getOrganizationsAccountByAccountId(
        id: number
        ,
        accountId: number
        ,
    ): getOrganizationsAccountByAccountIdParameters {
        return new getOrganizationsAccountByAccountIdParameters(this, 'GET', '/organizations/{id}/accounts/{accountId}', id, accountId);
    }
    /**
     * Enables and disables organizations. NOTE: Only a user with the 'intelligence user' privilege within the organization, or the 'customer-admin' privilege within the customer is able to use this API.
     * @method
     * @name platformSDK#replaceOrganizationsStatus
     * @param {integer} id - The ID of the organization
     * @param {} status - Update the organization status.
     * @return { replaceOrganizationsStatusParameters } To allow chaining
     */
    replaceOrganizationsStatus(
        id: number
        ,
        status:
        OrganizationStatus_PUT
        ,
    ): replaceOrganizationsStatusParameters {
        return new replaceOrganizationsStatusParameters(this, 'PUT', '/organizations/{id}/status', id, status);
    }
    /**
     * Retrieve the usage logs for your account. 
     * @method
     * @name platformSDK#getUsage
     * @return { getUsageParameters } To allow chaining
     */
    getUsage(): getUsageParameters {
        return new getUsageParameters(this, 'GET', '/usage');
    }
    /**
     * Retrieve the number of element API calls within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsActivity
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @return { getUsageAnalyticsActivityParameters } To allow chaining
     */
    getUsageAnalyticsActivity(
        from: string
        ,
        to: string
        ,
    ): getUsageAnalyticsActivityParameters {
        return new getUsageAnalyticsActivityParameters(this, 'GET', '/usage/analytics/activity', from, to);
    }
    /**
     * Retrieve the number of element API calls for each element within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsActivityElements
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @return { getUsageAnalyticsActivityElementsParameters } To allow chaining
     */
    getUsageAnalyticsActivityElements(
        from: string
        ,
        to: string
        ,
    ): getUsageAnalyticsActivityElementsParameters {
        return new getUsageAnalyticsActivityElementsParameters(this, 'GET', '/usage/analytics/activity/elements', from, to);
    }
    /**
     * Retrieve the number of successes and failures of element API calls within a given date/time range.
     * @method
     * @name platformSDK#getUsageAnalyticsStatuses
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @return { getUsageAnalyticsStatusesParameters } To allow chaining
     */
    getUsageAnalyticsStatuses(
        from: string
        ,
        to: string
        ,
    ): getUsageAnalyticsStatusesParameters {
        return new getUsageAnalyticsStatusesParameters(this, 'GET', '/usage/analytics/statuses', from, to);
    }
    /**
     * Retrieve the response times of element API calls within a given date/time range
     * @method
     * @name platformSDK#getUsageAnalyticsTimes
     * @param {string} from - Start time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @param {string} to - End time in ISO 8601 format, e.g. '2014-04-14T00:00:00-4:00'. An unspecified time zone defaults to UTC.
     * @return { getUsageAnalyticsTimesParameters } To allow chaining
     */
    getUsageAnalyticsTimes(
        from: string
        ,
        to: string
        ,
    ): getUsageAnalyticsTimesParameters {
        return new getUsageAnalyticsTimesParameters(this, 'GET', '/usage/analytics/times', from, to);
    }
    /**
     * Retrieve the usage record by id
     * @method
     * @name platformSDK#getUsageById
     * @param {string} id - The ID of log record
     * @return { getUsageByIdParameters } To allow chaining
     */
    getUsageById(
        id: string
        ,
    ): getUsageByIdParameters {
        return new getUsageByIdParameters(this, 'GET', '/usage/{id}', id);
    }
    /**
     * Retrieve users within your account or organization.  Find users within your account or organization, using the provided CEQL search expression or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for users containing the name 'greg', the search expression will be where name='greg'. When this parameter is omitted, all accounts are returned in a paginated fashion.
     * @method
     * @name platformSDK#getUsers
     * @return { getUsersParameters } To allow chaining
     */
    getUsers(): getUsersParameters {
        return new getUsersParameters(this, 'GET', '/users');
    }
    /**
     * Retrieve a user associated with a given email or ID within your account or organization.  Specifying a user associated with a given email or ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#getUserByEmailOrId
     * @param {string} emailOrId - The email address or numeric ID of the user
     * @return { getUserByEmailOrIdParameters } To allow chaining
     */
    getUserByEmailOrId(
        emailOrId: string
        ,
    ): getUserByEmailOrIdParameters {
        return new getUserByEmailOrIdParameters(this, 'GET', '/users/{emailOrId}', emailOrId);
    }
    /**
     * Delete a user associated with a given ID within your account or organization. WARNING: This action will delete all formula and element instances associated with the user, and is irreversible. Specifying a user associated with a given ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#deleteUserById
     * @param {integer} id - The ID of the user
     * @return { deleteUserByIdParameters } To allow chaining
     */
    deleteUserById(
        id: number
        ,
    ): deleteUserByIdParameters {
        return new deleteUserByIdParameters(this, 'DELETE', '/users/{id}', id);
    }
    /**
     * Update a user associated with a given email or ID within your account or organization.  Specifying a user associated with a given email or ID that does not exist will result in an error response.
     * @method
     * @name platformSDK#updateUserById
     * @param {integer} id - The ID of the user
     * @param {} body - The updated user information
     * @return { updateUserByIdParameters } To allow chaining
     */
    updateUserById(
        id: number
        ,
        body:
        User
        ,
    ): updateUserByIdParameters {
        return new updateUserByIdParameters(this, 'PATCH', '/users/{id}', id, body);
    }
    /**
     * Retrieve the roles that a user has been granted. This will return the effective roles, meaning the role could have been granted at the user level OR at the account level.
     * @method
     * @name platformSDK#getUsersRoles
     * @param {number} id - The ID of the user.
     * @return { getUsersRolesParameters } To allow chaining
     */
    getUsersRoles(
        id: number
        ,
    ): getUsersRolesParameters {
        return new getUsersRolesParameters(this, 'GET', '/users/{id}/roles', id);
    }
    /**
     * Revoke a role from a user. This will only remove roles granted directly to the user, and will not affect roles that may have been granted at the account level.
     * @method
     * @name platformSDK#deleteUsersRoleByRoleKey
     * @param {number} userId - The ID of the user from which the role will be revoked.
     * @param {string} roleKey - The key of the role to revoke (org-admin, org, or admin)
     * @return { deleteUsersRoleByRoleKeyParameters } To allow chaining
     */
    deleteUsersRoleByRoleKey(
        userId: number
        ,
        roleKey: string
        ,
    ): deleteUsersRoleByRoleKeyParameters {
        return new deleteUsersRoleByRoleKeyParameters(this, 'DELETE', '/users/{userId}/roles/{roleKey}', userId, roleKey);
    }
    /**
     * Grant a role to a user.
     * @method
     * @name platformSDK#replaceUsersRoleByRoleKey
     * @param {number} userId - The ID of the user to which the role will be granted.
     * @param {string} roleKey - The key of the role to grant (org-admin, org, or admin)
     * @return { replaceUsersRoleByRoleKeyParameters } To allow chaining
     */
    replaceUsersRoleByRoleKey(
        userId: number
        ,
        roleKey: string
        ,
    ): replaceUsersRoleByRoleKeyParameters {
        return new replaceUsersRoleByRoleKeyParameters(this, 'PUT', '/users/{userId}/roles/{roleKey}', userId, roleKey);
    }
}
type Operations =
    {
        'operationId' ? : string
        'method' ? : string
        'path' ? : string
        'objectName' ? : string
    }
;
type Authentication =
    {
        'type' ? : string
    }
;
type Configuration =
    {
        'description' ? : string
        'key': string
        'name': string
        'type': "value" | "elementInstance"
    }
;
type DefaultTransformations =
    {
        'name' ? : string
        'vendorName' ? : string
    }
;
type ObjectMetadata =
    {
        '&lt;objectName&gt;' ? :
            ObjectMetadataFields
    }
;
type ObjectMetadataFields =
    {
        'fields' ? :
            Array <
            Field
            >
    }
;
type Field =
    {
        'path' ? : string
        'type' ? : string
    }
;
type ConfigurationPropertyMap =
    {
        '&lt;replace_your_config_property_name&gt;' ? : string
    }
;
type CreateElement =
    {
        'authentication' ? :
            Authentication
        'configuration' ? :
            Array <
            Configuration
            >
            'description' ? : string
        'hub' ? : string
        'image' ? : string
        'name' ? : string
        'parameters' ? :
            Array <
            Parameter
            >
            'resources' ? :
            Array <
            Resource
            >
    }
;
type DefaultParameter =
    {
        'name' ? : string
        'type' ? : string
        'vendorName' ? : string
        'vendorType' ? : string
    }
;
type Element =
    {
        'active' ? : boolean
        'authenticationType' ? : string
        'configDescription' ? : string
        'createdDate' ? : number
        'deleted' ? : boolean
        'description' ? : string
        'existingAccountDescription' ? : string
        'id' ? : number
        'image' ? : string
        'key' ? : string
        'name' ? : string
        'signupURL' ? : string
        'trialAccount' ? : boolean
        'trialAccountDescription' ? : string
        'typeOauth' ? : boolean
        'updatedDate' ? : number
    }
;
type ElementConfig =
    {
        'active' ? : boolean
        'companyConfig' ? : boolean
        'configDataType' ? : string
        'defaultValue' ? : string
        'description' ? : string
        'internal' ? : boolean
        'key' ? : string
        'mandatory' ? : boolean
        'name' ? : string
        'resellerConfig' ? : boolean
    }
;
type ElementConfigs =
    {
        'configuration' ? :
            Array <
            ElementConfig
            >
            'providerData' ? :
            Array <
            ElementConfig
            >
    }
;
type ElementInstance =
    {
        'cacheTimeToLive' ? : number
        'cachingEnabled': boolean
        'disabled' ? : boolean
        'element' ? :
            Element
        'id' ? : number
        'maxCacheSize' ? : number
        'name' ? : string
        'token' ? :
        {}
        'valid' ? : boolean
    }
;
type ElementMetadata =
    {
        'defaultAuthentication' ? : string
        'name' ? : string
        'displayOrder' ? : number
        'active' ? : boolean
        'description' ? : string
        'id' ? : number
        'key' ? : string
        'beta' ? : boolean
        'events' ? :
            Array < string
            >
            'extended' ? : boolean
    }
;
type EventMetadata =
    {
        'methods' ? :
            Array < string
            >
            'polling' ? :
            EventMethodMetadata
        'supported' ? : boolean
        'webhook' ? :
            EventMethodMetadata
    }
;
type EventMethodMetadata =
    {
        '&lt;resourceName&gt;' ? :
            EventResourceMetadata
    }
;
type EventResourceMetadata =
    {
        'eventTypes' ? :
            Array < string
            >
            'pollUrl' ? : string
    }
;
type Model =
    {
        'name' ? : string
        'swagger' ? :
        {}
    }
;
type OAuthInfo =
    {
        'apiKey' ? : string
        'apiSecret' ? : string
        'callbackUrl' ? : string
        'scope' ? : string
        'siteAddress' ? : string
        'state' ? : string
        'isOAuthProxy' ? : boolean
        'oauthProxyName' ? : string
        'requestToken' ? : string
    }
;
type OAuthRedirect =
    {
        'element' ? : string
        'oauthUrl' ? : string
    }
;
type OAuthToken =
    {
        'secret' ? : string
        'token' ? : string
    }
;
type Parameter =
    {
        'dataType' ? : string
        'description' ? : string
        'name' ? : string
        'required' ? : boolean
        'type' ? : string
        'vendorDataType' ? : string
        'vendorName' ? : string
        'vendorType' ? : string
    }
;
type ProviderPropertyMap =
    {
        '&lt;replace_your_provider_property_name&gt;' ? : string
    }
;
type User =
    {
        'accountExpired' ? : boolean
        'accountLocked' ? : boolean
        'accountNonExpired' ? : boolean
        'accountNonLocked' ? : boolean
        'activationCode' ? : string
        'active' ? : boolean
        'city' ? : string
        'country' ? : string
        'createdDate' ? : string
        'credentialsExpired' ? : boolean
        'credentialsNonExpired' ? : boolean
        'email' ? : string
        'emailValid' ? : boolean
        'enabled' ? : boolean
        'firstName' ? : string
        'fullName' ? : string
        'id' ? : number
        'lastName' ? : string
        'phone' ? : string
        'postalCode' ? : string
        'secret' ? : string
        'stateprovince' ? : string
        'street1' ? : string
        'street2' ? : string
    }
;
type Resource =
    {
        'description' ? : string
        'operationId' ? : string
        'method' ? : string
        'parameters' ? :
            Array <
            Parameter
            >
            'path' ? : string
        'vendorMethod' ? : string
        'vendorPath' ? : string
        'rootKey' ? : string
        'paginationType' ? : string
        'nextResource' ? : string
        'object' ? :
            ResourceObject
    }
;
type BulkStatus =
    {
        'batchId' ? : number
        'message' ? : string
        'numOfLeadsProcessed' ? : number
        'numOfRowsFailed' ? : number
        'numOfRowsWithWarning' ? : number
        'status' ? : string
    }
;
type BulkLoad =
    {
        'id' ? : number
        'status' ? : string
    }
;
type BulkQuery =
    {
        'id' ? : number
        'status' ? : string
    }
;
type Pong =
    {
        'dateTime' ? : string
        'endpoint' ? : string
    }
;
type ModelDate =
    {
        'value' ? : string
    }
;
type ResourceField =
    {
        'request' ? : boolean
        'response' ? : boolean
        'required' ? : boolean
        'id' ? : number
        'name' ? : string
        'displayName' ? : string
        'sampleValue' ? : string
        'description' ? : string
        'objectId' ? : number
        'type' ? : string
        'format' ? : string
        'mask' ? : string
        'ownerAccountId' ? : number
        'primaryKey' ? : boolean
        'readOnly' ? : boolean
        'hidden' ? : boolean
        'createdDate' ? : string
        'updatedDate' ? : string
        'referenceObjectId' ? : number
        'reference' ? :
            ResourceObject
    }
;
type Hook =
    {
        'body' ? : string
        'elementId' ? : number
        'id' ? : number
        'isLegacy' ? : boolean
        'mimeType' ? : string
        'type' ? : string
    }
;
type Object =
    {
        'name' ? : string
        'primaryKeyName' ? : string
        'createdDateName' ? : string
        'createdDateFormat' ? : string
        'updatedDateName' ? : string
        'updatedDateFormat' ? : string
        'ownerAccountId' ? : number
        'bulkDownloadEnabled' ? : boolean
        'bulkUploadEnabled' ? : boolean
        'eventsEnabled' ? : boolean
        'fields' ? :
            Array <
            Field
            >
    }
;
type ResourceObject =
    {
        'name' ? : string
        'primaryKeyName' ? : string
        'createdDateName' ? : string
        'createdDateFormat' ? : string
        'updatedDateName' ? : string
        'updatedDateFormat' ? : string
        'ownerAccountId' ? : number
        'bulkDownloadEnabled' ? : boolean
        'bulkUploadEnabled' ? : boolean
        'eventsEnabled' ? : boolean
        'fields' ? :
            Array <
            ResourceField
            >
    }
;
type AccountAnalyticsRecord =
    {
        'accountId' ? : number
        'success' ? : number
        'failed' ? : number
        'count' ? : number
    }
;
type InstanceAnalyticsRecord =
    {
        'instanceId' ? : number
        'count' ? : number
    }
;
type AccountAnalyticsEntry =
    {
        'records' ? :
            Array <
            AccountAnalyticsRecord
            >
            'total' ? : number
        'timestamp' ? : string
    }
;
type InstanceAnalyticsEntry =
    {
        'records' ? :
            Array <
            InstanceAnalyticsRecord
            >
            'total' ? : number
        'timestamp' ? : string
    }
;
type AnalyticsEntry =
    {
        'count' ? : number
        'timestamp' ? : string
    }
;
type ConfigurationProperty =
    {
        '&lt;key&gt;' ? : string
    }
;
type Definition =
    {
        'fields' ? :
            Array <
            Field
            >
    }
;
type Dictionary =
    {
        '&lt;object_name&gt;' ? :
            Definition
        'level' ? : string
    }
;
type ElementInstanceConfig =
    {
        'active' ? : boolean
        'description' ? : string
        'hideFromConsole' ? : boolean
        'id' ? : number
        'key' ? : string
        'name' ? : string
        'propertyValue' ? : string
        'required' ? : boolean
        'type' ? : string
    }
;
type ElementInstanceConfigUpdate =
    {
        'propertyValue' ? : string
    }
;
type Transformation =
    {
        'configuration' ? :
            Array <
            Configuration
            >
            'fields' ? :
            Array <
            TransformationField
            >
            'level' ? : string
        'startDate' ? : string
        'vendorName' ? : string
    }
;
type TransformationField =
    {
        'configuration' ? :
            Array <
            Configuration
            >
            'path' ? : string
        'type' ? : string
        'vendorPath' ? : string
        'vendorType' ? : string
    }
;
type TraceLoggingConfig =
    {
        'duration' ? : number
    }
;
type TransformationLibrary =
    {
        '&lt;object_name&gt;' ? :
            Transformation
    }
;
type EventElementInstance =
    {
        'eventId' ? : string
        'elementInstanceId' ? : number
        'notificationId' ? : number
        'notifiedData' ? : string
        'createdDate' ? : string
        'updatedDate' ? : string
    }
;
type Event =
    {
        'id' ? : string
        'eventElementInstances' ? :
            Array <
            EventElementInstance
            >
            'providerData' ? : string
        'notifiedData' ? :
            Array <
            {}
            >
            'eventDate' ? : string
        'status' ? : string
    }
;
type Customer_GET =
    {
        'environment' ? : string
        'createdDate' ? : string
        'name' ? : string
        'organizations' ? :
            Array <
            Organization_GET
            >
            'active' ? : boolean
        'id' ? : number
        'updatedDate' ? : string
        'contacts' ? :
            Array <
            CustomerContact
            >
            'status' ? : string
    }
;
type CustomerContact =
    {
        'country' ? : string
        'createdDate' ? : string
        'phone' ? : string
        'city' ? : string
        'postalCode' ? : string
        'customerId' ? : number
        'name' ? : string
        'street1' ? : string
        'id' ? : number
        'street2' ? : string
        'updatedDate' ? : string
        'email' ? : string
    }
;
type Organization_POST =
    {
        'environment' ? : "production" | "test"
        'name' ? : string
        'externalId' ? : string
        'status' ? : "paid" | "trial"
        'roles' ? :
            Array <
            rolesCompanies_POST
            >
    }
;
type Organization_GET =
    {
        'environment' ? : "production" | "test"
        'canCreatePeer' ? : boolean
        'twoFactorAuthEnabled' ? : boolean
        'tierId' ? : number
        'name' ? : string
        'customerId' ? : number
        'active' ? : boolean
        'externalId' ? : string
        'id' ? : number
        'secret' ? : string
        'vdrVersion' ? : string
        'status' ? : "paid" | "trial"
        'street1' ? : string
        'city' ? : string
        'state' ? : string
        'postalCode' ? : string
        'country' ? : string
    }
;
type Account_POST =
    {
        'name' ? : string
        'externalId' ? : string
        'description' ? : string
    }
;
type Account_GET =
    {
        'companyId' ? : number
        'createdDate' ? : string
        'name' ? : string
        'customerId' ? : number
        'customerName' ? : string
        'active' ? : boolean
        'description' ? : string
        'externalId' ? : string
        'id' ? : number
        'defaultAccount' ? : boolean
        'type' ? : string
    }
;
type User_POST =
    {
        'firstName' ? : string
        'lastName' ? : string
        'roles' ? :
            Array <
            roles_POST
            >
            'externalId' ? : string
    }
;
type rolesCompanies_POST =
    {
        'key': string
        'privileges':
            Array <
            privileges_POST
            >
    }
;
type roles_POST =
    {
        'key' ? : string
    }
;
type IdentityProvider_POST =
    {
        'ssoUrl': string
        'entityId': string
        'logonProtocolBinding' ? : "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"
        'logoutUrl' ? : string
        'logoutProtocolBinding' ? : "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"
        'logoutResponseUrl' ? : string
        'idFormat' ? : string
        'signingCert': string
        'signatureAlgorithm' ? : "rsa-sha1" | "rsa-sha256" | "rsa-sha384" | "rsa-sha512"
    }
;
type IdentityProvider_GET =
    {
        'id' ? : number
        'ssoUrl': string
        'entityId': string
        'logonProtocolBinding' ? : "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"
        'logoutUrl' ? : string
        'logoutProtocolBinding' ? : "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect"
        'logoutResponseUrl' ? : string
        'idFormat' ? : string
        'signingCert': string
        'signatureAlgorithm' ? : "rsa-sha1" | "rsa-sha256" | "rsa-sha384" | "rsa-sha512"
        'createdDate' ? : string
    }
;
type CustomerSignup_POST =
    {
        'organization' ? :
            Organization_POST
        'account' ? :
            Account_POST
        'user' ? :
            User_POST
    }
;
type CustomerSignup_GET =
    {
        'organization' ? :
            Organization_GET
        'account' ? :
            Account_GET
        'user' ? :
            User_GET
    }
;
type User_GET =
    {
        'accountLocked' ? : boolean
        'lastName' ? : string
        'roles' ? :
            Array <
            roles_GET
            >
            'credentialsNonExpired' ? : boolean
        'active' ? : boolean
        'externalId' ? : string
        'fullName' ? : string
        'secret' ? : string
        'userSecretKeystring' ? : string
        'enabled' ? : boolean
        'firstName' ? : string
        'emailValid' ? : boolean
        'accountExpired' ? : boolean
        'accountNonExpired' ? : boolean
        'id' ? : number
        'credentialsExpired' ? : boolean
        'email' ? : string
        'accountNonLocked' ? : boolean
    }
;
type privileges_POST =
    {
        'key' ? : string
    }
;
type privileges_GET =
    {
        'hide' ? : boolean
        'createdDate' ? : string
        'name' ? : string
        'active' ? : boolean
        'description' ? : string
        'id' ? : number
        'category' ? : string
        'key' ? : string
    }
;
type roles_GET =
    {
        'privileges' ? :
            Array <
            privileges_GET
            >
            'hide' ? : boolean
        'name' ? : string
        'active' ? : boolean
        'description' ? : string
        'id' ? : number
        'key' ? : string
    }
;
type Organization =
    {
        'id' ? : number
        'name' ? : string
        'createdDate' ? : string
    }
;
type Account =
    {
        'active' ? : boolean
        'companyId' ? : number
        'createdDate' ? : number
        'defaultAccount' ? : boolean
        'description' ? : string
        'externalId' ? : string
        'id' ? : number
        'name' ? : string
        'type' ? : string
        'updatedDate' ? : number
    }
;
type DefinitionField =
    {
        'path' ? : string
        'type' ? : string
    }
;
type TransformationMetadata =
    {
        'account' ? :
            TransformationAccount
        'element' ? :
            TransformationElement
        'level' ? : string
        'name' ? : string
    }
;
type OrganizationStatus_PUT =
    {
        'active' ? : boolean
    }
;
type Account_PUT =
    {
        'active' ? : boolean
        'description' ? : string
        'externalId' ? : string
        'name' ? : string
    }
;
type FormulaInstance =
    {
        'active' ? : boolean
        'configuration' ? :
            FormulaInstanceConfiguration
        'settings' ? :
            FormulaInstanceSettings
        'createdDate' ? : string
        'formula':
            FormulaInstanceFormula
        'name': string
        'updatedDate' ? : string
    }
;
type TransformationAccount =
    {
        'defaultAccount' ? : boolean
        'externalId' ? : string
        'id' ? : string
    }
;
type TransformationElement =
    {
        'hub' ? : string
        'id' ? : number
        'image' ? : string
        'key' ? : string
        'name' ? : string
        'trialAccount' ? : boolean
        'typeOauth' ? : boolean
    }
;
type Role_PUT =
    {
        'key' ? : string
    }
;
type User_PUT =
    {
        'country' ? : string
        'lastName' ? : string
        'city' ? : string
        'postalCode' ? : string
        'roles' ? :
            Array <
            Role_PUT
            >
            'stateProvince' ? : string
        'active' ? : boolean
        'externalId' ? : string
        'firstName' ? : string
        'phone' ? : string
        'street1' ? : string
        'street2' ? : string
        'email' ? : string
    }
;
type Role =
    {
        'active' ? : boolean
        'description' ? : string
        'features' ? :
            Array <
            Feature
            >
            'id' ? : number
        'key' ? : string
        'name' ? : string
    }
;
type Feature =
    {
        'active' ? : boolean
        'createdDate' ? : string
        'description' ? : string
        'id' ? : number
        'readOnly' ? : boolean
        'name' ? : string
    }
;
type PasswordReset_POST =
    {
        'password' ? : string
    }
;
type Privilege =
    {
        'hide' ? : boolean
        'createdDate' ? : string
        'name' ? : string
        'active' ? : boolean
        'description' ? : string
        'id' ? : number
        'category' ? : string
        'key' ? : string
    }
;
type AuthenticatedUser_GET =
    {
        'lastName' ? : string
        'registeredForTwoFactor' ? : boolean
        'twoFactor' ? : boolean
        'organizationName' ? : string
        'accountName' ? : string
        'roles' ? :
            Array <
            AuthenticatedUserRole
            >
            'lastLoginDate' ? : string
        'organizationAdmin' ? : boolean
        'token' ? : string
        'organizationId' ? : number
        'accountId' ? : number
        'firstName' ? : string
        'createdDate' ? : string
        'inIntelligenceRole' ? : boolean
        'id' ? : number
        'sysAdmin' ? : boolean
        'accountAdmin' ? : boolean
        'username' ? : string
    }
;
type AuthenticatedUserRole =
    {
        'features' ? :
            Array <
            Feature
            >
            'privileges' ? :
            Array <
            Privilege
            >
            'hide' ? : boolean
        'name' ? : string
        'active' ? : boolean
        'description' ? : string
        'id' ? : number
        'key' ? : string
    }
;
type Hub =
    {
        'description' ? : string
        'id' ? : number
        'key' ? : string
        'name' ? : string
    }
;
type ApiMetric =
    {
        'count' ? : number
        'id' ? : number
        'interval' ? : string
        'externalId' ? : string
        'metrics' ? :
            Array <
            ApiMetricsMetrics
            >
    }
;
type ApiMetrics =
    Array <
    ApiMetric
    >
;
type ApiMetricsDetail =
    {
        'count' ? : number
        'type' ? : string
    }
;
type ApiMetricsMetrics =
    {
        'count' ? : number
        'details' ? :
            Array <
            ApiMetricsDetail
            >
            'timestamp' ? : string
    }
;
type HubMetric =
    {
        'count' ? : number
        'id' ? : number
        'interval' ? : string
        'externalId' ? : string
        'metrics' ? :
            Array <
            HubMetricsMetrics
            >
    }
;
type HubMetrics =
    Array <
    HubMetric
    >
;
type HubMetricsDetail =
    {
        'count' ? : number
        'hub' ? : string
    }
;
type HubMetricsMetrics =
    {
        'count' ? : number
        'details' ? :
            Array <
            HubMetricsDetail
            >
            'timestamp' ? : string
    }
;
type ElementInstancesCreatedMetric =
    {
        'count' ? : number
        'id' ? : number
        'interval' ? : string
        'externalId' ? : string
        'metrics' ? :
            Array <
            ElementInstancesCreatedMetricsMetrics
            >
    }
;
type ElementInstancesCreatedMetrics =
    Array <
    ElementInstancesCreatedMetric
    >
;
type ElementInstancesCreatedMetricsDetail =
    {
        'count' ? : number
        'elementKey' ? : string
    }
;
type ElementInstancesCreatedMetricsMetrics =
    {
        'count' ? : number
        'details' ? :
            Array <
            ElementInstancesCreatedMetricsDetail
            >
            'timestamp' ? : string
    }
;
type BulkMetric =
    {
        'count' ? : number
        'id' ? : number
        'interval' ? : string
        'externalId' ? : string
        'metrics' ? :
            Array <
            BulkMetricsMetrics
            >
    }
;
type BulkMetrics =
    Array <
    BulkMetric
    >
;
type BulkMetricsDetail =
    {
        'count' ? : number
        'direction' ? : string
        'records' ? : number
    }
;
type BulkMetricsMetrics =
    {
        'count' ? : number
        'details' ? :
            Array <
            BulkMetricsDetail
            >
            'timestamp' ? : string
    }
;
type Metric =
    {
        'count' ? : number
        'id' ? : number
        'interval' ? : string
        'externalId' ? : string
        'metrics' ? :
            Array <
            MetricsMetrics
            >
    }
;
type Metrics =
    Array <
    Metric
    >
;
type MetricsMetrics =
    {
        'count' ? : number
        'timestamp' ? : string
    }
;
type ActivityElementEntry =
    {
        '&lt;elementKey&gt;' ? : number
        'count' ? : number
        'timestamp' ? : string
    }
;
type ActivityEntry =
    {
        'count' ? : number
        'timestamp' ? : string
    }
;
type StatusEntry =
    {
        'count' ? : number
        'failed' ? : number
        'success' ? : number
        'timestamp' ? : string
    }
;
type TimesEntry =
    {
        'avg' ? : number
        'count' ? : number
        'max' ? : number
        'min' ? : number
        'timestamp' ? : string
    }
;
type TrafficEntry =
    {
        'accountId' ? : number
        'companyId' ? : number
        'elementKey' ? : string
        'elementName' ? : string
        'elementTags' ? : string
        'id' ? : string
        'instanceName' ? : string
        'processTime' ? : number
        'requestIP' ? : number
        'requestStatus' ? : string
        'requestURI' ? : string
        'usageDate' ? : string
        'userId' ? : number
    }
;
type AnalyticsPercentiles =
    {
        '1.0' ? : number
        '5.0' ? : number
        '25.0' ? : number
        '50.0' ? : number
        '75.0' ? : number
        '95.0' ? : number
        '99.0' ? : number
    }
;
type AnalyticEntry =
    {
        'avg' ? : number
        'sum' ? : number
        'percentiles' ? :
            AnalyticsPercentiles
    }
;
type StatusAnalyticsEntry =
    {
        'success' ? : number
        'failed' ? : number
        'timestamp' ? : string
    }
;
type StatusNowEntry =
    {
        'accountId' ? : number
        'success' ? : number
        'failed' ? : number
        'pending' ? : number
        'canceled' ? : number
        'unknown' ? : number
        'retries' ? :
            Array <
            StatusRetryRecord
            >
    }
;
type StatusRetryRecord =
    {
        'executionId' ? : number
        'retry' ? : number
    }
;
type StepAnalyticsEntry =
    {
        'count' ? : number
        'timestamp' ? : string
        'executionTime' ? :
            AnalyticEntry
        'executionDelay' ? :
            AnalyticEntry
        'contextSize' ? :
            AnalyticEntry
    }
;
type AllInstancesFormula =
    {
        'accountId' ? : number
        'active' ? : boolean
        'configuration' ? :
            Array <
            GetConfiguration
            >
            'createdDate' ? : string
        'description' ? : string
        'id' ? : number
        'name': string
        'updatedDate' ? : string
        'userId' ? : number
    }
;
type CreateConfiguration =
    {
        'description' ? : string
        'key': string
        'name': string
        'type': "value" | "elementInstance"
    }
;
type CreateFormula =
    {
        'active' ? : boolean
        'configuration' ? :
            Array <
            Configuration
            >
            'description' ? : string
        'name': string
        'steps' ? :
            Array <
            Step
            >
            'triggers' ? :
            Array <
            Trigger
            >
    }
;
type CreateFormulaInstance =
    {
        'active' ? : boolean
        'configuration' ? :
            FormulaInstanceConfiguration
        'settings' ? :
            FormulaInstanceSettings
        'name': string
    }
;
type CreateStep =
    {
        'name': string
        'onFailure' ? :
            Array < string
            >
            'onSuccess' ? :
            Array < string
            >
            'properties' ? :
            Properties
        'type': "request" | "elementRequest" | "transform" | "filter" | "script"
    }
;
type CreateTrigger =
    {
        'cron' ? : string
    }
;
type FormulaExecution =
    {
        'createdDate' ? : string
        'formulaInstanceId' ? : number
        'status' ? : "failed" | "success" | "pending" | "queued" | "cancelled" | "unknown"
        'id' ? : number
        'updatedDate' ? : string
    }
;
type FormulaExecutionBody =
    {}
;
type FormulaInstanceConfiguration =
    {
        '&lt;key&gt;' ? : string
    }
;
type FormulaInstanceSettings =
    {
        'notification.email' ? : string
        'notification.webhook.url' ? : string
        'api' ? : string
    }
;
type FormulaInstanceFormula =
    {
        'active' ? : boolean
        'id': number
    }
;
type FormulaInstanceStatus =
    {
        'status': "cancelled"
    }
;
type GetAllFormulaInstances =
    {
        'active' ? : boolean
        'configuration' ? :
            FormulaInstanceConfiguration
        'settings' ? :
            FormulaInstanceSettings
        'createdDate' ? : string
        'formula':
            AllInstancesFormula
        'id' ? : number
        'name': string
        'updatedDate' ? : string
    }
;
type GetAllFormulaExecutionErrors =
    {
        'id' ? : number
        'formula' ? :
            FormulaInstanceFormula
        'executions' ? :
            Array <
            GetAllInstanceExecutionErrors
            >
    }
;
type GetAllInstanceExecutionErrors =
    {
        'status' ? : "failed" | "success" | "pending" | "queued" | "unknown"
        'createdDate' ? : string
        'id' ? : number
        'updatedDate' ? : string
        'stepExecutions' ? :
            Array <
            StepExecution
            >
    }
;
type GetConfiguration =
    {
        'description' ? : string
        'id': number
        'key': string
        'name': string
        'type': "value" | "elementInstance"
    }
;
type GetFormula =
    {
        'accountId' ? : number
        'active' ? : boolean
        'configuration' ? :
            Array <
            GetConfiguration
            >
            'createdDate' ? : string
        'description' ? : string
        'id' ? : number
        'name': string
        'steps' ? :
            Array <
            GetStep
            >
            'triggers' ? :
            Array <
            GetTrigger
            >
            'updatedDate' ? : string
        'userId' ? : number
    }
;
type GetFormulaSlim =
    {
        'accountId' ? : number
        'active' ? : boolean
        'createdDate' ? : string
        'description' ? : string
        'id': number
        'name': string
        'updatedDate' ? : string
        'userId' ? : number
    }
;
type GetFormulaExecution =
    {
        'createdDate' ? : string
        'formulaInstanceId' ? : number
        'id' ? : number
        'status' ? : "failed" | "success" | "pending" | "queued" | "unknown"
        'stepExecutions' ? :
            Array <
            StepExecution
            >
            'updatedDate' ? : string
    }
;
type GetFormulaFormulaInstance =
    {
        'active' ? : boolean
        'configuration' ? :
            FormulaInstanceConfiguration
        'settings' ? :
            FormulaInstanceSettings
        'createdDate' ? : string
        'formula':
            GetInstanceFormula
        'id' ? : number
        'name': string
        'updatedDate' ? : string
    }
;
type GetFormulaInstance =
    {
        'active' ? : boolean
        'configuration' ? :
            FormulaInstanceConfiguration
        'settings' ? :
            FormulaInstanceSettings
        'createdDate' ? : string
        'formula':
            FormulaInstanceFormula
        'id' ? : number
        'name': string
        'updatedDate' ? : string
    }
;
type GetInstanceFormula =
    {
        'accountId' ? : number
        'active' ? : boolean
        'createdDate' ? : string
        'description' ? : string
        'id': number
        'name' ? : string
        'updatedDate' ? : string
        'userId' ? : number
    }
;
type GetStep =
    {
        'id': number
        'name': string
        'onFailure' ? :
            Array < string
            >
            'onSuccess' ? :
            Array < string
            >
            'properties' ? :
            Properties
        'type': "request" | "elementRequest" | "transform" | "filter" | "script"
    }
;
type GetTrigger =
    {
        'async' ? : boolean
        'id' ? : number
        'onFailure' ? :
            Array < string
            >
            'onSuccess':
            Array < string
            >
            'properties':
            Properties
        'type': "elementRequest" | "request" | "event"
    }
;
type Properties =
    {
        'api' ? : string
        'body' ? : string
        'elementInstanceId' ? : string
        'headers' ? : string
        'method' ? : "GET" | "POST" | "PATCH" | "PUT" | "DELETE"
        'mimeType' ? : string
        'path' ? : string
        'query' ? : string
    }
;
type Step =
    {
        'name': string
        'onFailure' ? :
            Array < string
            >
            'onSuccess' ? :
            Array < string
            >
            'properties' ? :
            Properties
        'type': "request" | "elementRequest" | "transform" | "filter" | "script"
    }
;
type StepExecution =
    {
        'createdDate' ? : string
        'id' ? : number
        'status' ? : "pending" | "queued" | "success" | "failed" | "unknown"
        'stepExecutionValues' ? :
            Array <
            StepExecutionValue
            >
            'stepName' ? : string
        'updatedDate' ? : string
    }
;
type StepExecutionValue =
    {
        'id' ? : string
        'key' ? : string
        'value' ? : string
    }
;
type Trigger =
    {
        'calendarName' ? :
        {}
        'mayFireAgain' ? : boolean
        'nextFireTime' ? : number
        'description' ? :
        {}
        'startTime' ? : number
        'id' ? : string
        'endTime' ? :
        {}
        'state' ? : string
        'priority' ? : number
    }
;
type UpdateFormula =
    {
        'active' ? : boolean
        'configuration' ? :
            Array <
            Configuration
            >
            'description' ? : string
        'name': string
        'steps' ? :
            Array <
            Step
            >
            'triggers' ? :
            Array <
            Trigger
            >
    }
;
type PartialUpdateFormula =
    {
        'active' ? : boolean
        'description' ? : string
        'name' ? : string
    }
;
type Createjob =
    {
        'instanceId' ? : string
        'name' ? : string
        'description' ? : string
        'method' ? : string
        'body' ? :
            CreateJobBody
        'headers' ? :
            CreateJobHeaders
        'query' ? :
            CreateJobQuery
        'uri' ? : string
        'trigger' ? :
            CreateTrigger
    }
;
type CreateJobBody =
    {
        'name' ? : string
        'firstName' ? : string
        'lastName' ? : string
    }
;
type CreateJobHeaders =
    {
        'SampleHeader' ? : string
    }
;
type CreateJobQuery =
    {
        'page' ? : number
        'pageSize' ? : number
        'where' ? : string
    }
;
type CreatedJob =
    {
        'schedule' ? : string
        'name' ? : string
        'id' ? : string
    }
;
type Reschedule =
    {
        'trigger' ? :
            CreateTrigger
    }
;
type JobHistory =
    {
        'job_class_name' ? : string
        'company_id' ? : number
        'created_dt' ? : number
        'job_group' ? : string
        'job_history_id' ? : number
        'end_time' ? : number
        'description' ? : string
        'external_id' ? :
        {}
        'job_state' ? : string
        'start_time' ? : number
        'account_id' ? : number
        'instance_id' ? : number
        'job_name' ? : string
        'user_id' ? : number
        'updated_dt' ? : number
        'job_data' ? : string
        'job_error_message' ? :
        {}
    }
;
type JobHistories =
    Array <
    JobHistory
    >
;
type JobExecution =
    {
        'job_class_name' ? : string
        'start_time' ? : number
        'job_name' ? : string
        'job_group' ? : string
        'job_history_id' ? : number
        'end_time' ? : number
        'job_data' ? : string
        'description' ? : string
        'job_error_message' ? :
        {}
        'element_key' ? :
        {}
        'job_state' ? : string
    }
;
type JobExecutions =
    Array <
    JobExecution
    >
;
type Job =
    {
        'disallowConcurrent' ? : boolean
        'data' ? :
            Data
        'name' ? : string
        'description' ? : string
        'id' ? : string
        'trigger' ? :
            Trigger
    }
;
type Jobs =
    Array <
    Job
    >
;
type Data =
    {
        'elementKey' ? : string
        'topic' ? : string
        'id' ? : number
    }
;
type audit_logs =
    {
        'instance_id' ? : number
        'account_id' ? : number
        'method' ? : string
        'user_id' ? : number
        'org_id' ? : number
        'resource_uri' ? : string
        'id' ? : string
        'ip_address' ? : string
        'entity_id' ? : string
        'timestamp' ? : string
        'status' ? : number
    }
;
class platformSDKMethodParameters < T > extends request.Request implements Promise < T > {
    constructor(public superThis: platformSDK, protected method: string, protected _path: string) {
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
class getAccountsParameters extends platformSDKMethodParameters <
    Array <
    Account
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getAccountsParameters#where
         */
        where(where: string
        ): getAccountsParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'offset' optional parameter
         * @method
         * @name getAccountsParameters#offset
         */
        offset(offset: number
        ): getAccountsParameters {
            return this.query({
                'offset': offset
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAccountsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAccountsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getAccountsParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getAccountsParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class createAccountParameters extends platformSDKMethodParameters <
    Account
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, body:
            Account
        ) {
            super(superThis, method, _path);
            this.send(body);
        }
    }
class getAccountsInstancesParameters extends platformSDKMethodParameters <
    Array <
    ElementInstance
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAccountsInstancesParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAccountsInstancesParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAccountsInstancesParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAccountsInstancesParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class deleteAccountsObjectsDefinitionsParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string) {
        super(superThis, method, _path);
    }
}
class getAccountsObjectsDefinitionsParameters extends platformSDKMethodParameters <
    Dictionary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class createAccountObjectDefinitionParameters extends platformSDKMethodParameters <
    Dictionary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, body:
            Dictionary
        ) {
            super(superThis, method, _path);
            this.send(body);
        }
    }
class deleteAccountsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, objectName: string
    ) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
        );
    }
}
class getAccountsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
        }
    }
class createAccountObjectObjectNameDefinitionParameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
            , body:
            Definition
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
            this.send(body);
        }
    }
class replaceAccountsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
            , body:
            Definition
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
            this.send(body);
        }
    }
class getAccountsFormulasInstancesParameters extends platformSDKMethodParameters <
    FormulaInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, accountId: number
            , formulaId: number
        ) {
            super(superThis, method, _path
                .replace('{accountId}', `${accountId}`)
                .replace('{formulaId}', `${formulaId}`)
            );
        }
    }
class deleteAccountByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getAccountByIdParameters extends platformSDKMethodParameters <
    Account
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getAccountByIdParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getAccountByIdParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class updateAccountByIdParameters extends platformSDKMethodParameters <
    Account
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , body:
            Account
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(body);
        }
        /**
         * Set the 'permanent' optional parameter
         * @method
         * @name updateAccountByIdParameters#permanent
         */
        permanent(permanent: boolean
        ): updateAccountByIdParameters {
            return this.query({
                'permanent': permanent
            });
        }
    }
class replaceAccountByIdParameters extends platformSDKMethodParameters <
    Account
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , body:
            Account_PUT
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(body);
        }
        /**
         * Set the 'permanent' optional parameter
         * @method
         * @name replaceAccountByIdParameters#permanent
         */
        permanent(permanent: boolean
        ): replaceAccountByIdParameters {
            return this.query({
                'permanent': permanent
            });
        }
    }
class deleteAccountsElementsTransformationsParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , keyOrId: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{keyOrId}', `${keyOrId}`)
        );
    }
}
class getAccountsElementsTransformationsParameters extends platformSDKMethodParameters <
    TransformationLibrary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , keyOrId: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{keyOrId}', `${keyOrId}`)
            );
        }
    }
class deleteAccountsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , keyOrId: string
        , objectName: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{objectName}', `${objectName}`)
        );
    }
}
class getAccountsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , keyOrId: string
            , objectName: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{objectName}', `${objectName}`)
            );
        }
    }
class createAccountElementTransformationByObjectNameParameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , keyOrId: string
            , objectName: string
            , transformation:
            Transformation
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{objectName}', `${objectName}`)
            );
            this.send(transformation);
        }
    }
class replaceAccountsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , keyOrId: string
            , objectName: string
            , transformation:
            Transformation
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{objectName}', `${objectName}`)
            );
            this.send(transformation);
        }
    }
class getAccountsInstances2Parameters extends platformSDKMethodParameters <
    Array <
    ElementInstance
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAccountsInstances2Parameters#nextPage
         */
        nextPage(nextPage: string
        ): getAccountsInstances2Parameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAccountsInstances2Parameters#pageSize
         */
        pageSize(pageSize: number
        ): getAccountsInstances2Parameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class deleteAccountsObjectsDefinitions2Parameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getAccountsObjectsDefinitions2Parameters extends platformSDKMethodParameters <
    Dictionary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class createAccountObjectDefinition2Parameters extends platformSDKMethodParameters <
    Dictionary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , body:
            Dictionary
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(body);
        }
    }
class deleteAccountsObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , objectName: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{objectName}', `${objectName}`)
        );
    }
}
class getAccountsObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , objectName: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{objectName}', `${objectName}`)
            );
        }
    }
class createAccountObjectObjectNameDefinition2Parameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , objectName: string
            , body:
            Definition
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{objectName}', `${objectName}`)
            );
            this.send(body);
        }
    }
class replaceAccountsObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , objectName: string
            , body:
            Definition
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{objectName}', `${objectName}`)
            );
            this.send(body);
        }
    }
class getAccountsUsersParameters extends platformSDKMethodParameters <
    Array <
    User
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getAccountsUsersParameters#where
         */
        where(where: string
        ): getAccountsUsersParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAccountsUsersParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAccountsUsersParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAccountsUsersParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAccountsUsersParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getAccountsUsersParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getAccountsUsersParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class createAccountUserParameters extends platformSDKMethodParameters <
    User
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , body:
            User
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(body);
        }
    }
class getAccountsUserByEmailOrIdParameters extends platformSDKMethodParameters <
    User
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , emailOrId: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{emailOrId}', `${emailOrId}`)
            );
        }
        /**
         * Set the 'elementsUserPassword' optional parameter
         * @method
         * @name getAccountsUserByEmailOrIdParameters#elementsUserPassword
         */
        elementsUserPassword(elementsUserPassword: string
        ): getAccountsUserByEmailOrIdParameters {
            return this.set('Elements-User-Password', 'elementsUserPassword');
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getAccountsUserByEmailOrIdParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getAccountsUserByEmailOrIdParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class updateAccountsUserByUserIdParameters extends platformSDKMethodParameters <
    User
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , userId: number
            , body:
            User
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{userId}', `${userId}`)
            );
            this.send(body);
        }
    }
class replaceAccountsUserByUserIdParameters extends platformSDKMethodParameters <
    User
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , userId: number
            , body:
            User_PUT
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{userId}', `${userId}`)
            );
            this.send(body);
        }
    }
class deleteAccountsUserByUserIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , userId: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{userId}', `${userId}`)
        );
    }
}
class getAuditLogsParameters extends platformSDKMethodParameters <
    Array <
    audit_logs
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getAuditLogsParameters#from
         */
        from(from: string
        ): getAuditLogsParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getAuditLogsParameters#to
         */
        to(to: string
        ): getAuditLogsParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'userId' optional parameter
         * @method
         * @name getAuditLogsParameters#userId
         */
        userId(userId: string
        ): getAuditLogsParameters {
            return this.query({
                'userId': userId
            });
        }
        /**
         * Set the 'accountId' optional parameter
         * @method
         * @name getAuditLogsParameters#accountId
         */
        accountId(accountId: string
        ): getAuditLogsParameters {
            return this.query({
                'accountId': accountId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAuditLogsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAuditLogsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAuditLogsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAuditLogsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getAuditLogsAuthenticationParameters extends platformSDKMethodParameters <
    Array <
    audit_logs
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getAuditLogsAuthenticationParameters#from
         */
        from(from: string
        ): getAuditLogsAuthenticationParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getAuditLogsAuthenticationParameters#to
         */
        to(to: string
        ): getAuditLogsAuthenticationParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'userId' optional parameter
         * @method
         * @name getAuditLogsAuthenticationParameters#userId
         */
        userId(userId: string
        ): getAuditLogsAuthenticationParameters {
            return this.query({
                'userId': userId
            });
        }
        /**
         * Set the 'accountId' optional parameter
         * @method
         * @name getAuditLogsAuthenticationParameters#accountId
         */
        accountId(accountId: string
        ): getAuditLogsAuthenticationParameters {
            return this.query({
                'accountId': accountId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAuditLogsAuthenticationParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAuditLogsAuthenticationParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAuditLogsAuthenticationParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAuditLogsAuthenticationParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getAuditLogsCommonResourcesParameters extends platformSDKMethodParameters <
    Array <
    audit_logs
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getAuditLogsCommonResourcesParameters#from
         */
        from(from: string
        ): getAuditLogsCommonResourcesParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getAuditLogsCommonResourcesParameters#to
         */
        to(to: string
        ): getAuditLogsCommonResourcesParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'userId' optional parameter
         * @method
         * @name getAuditLogsCommonResourcesParameters#userId
         */
        userId(userId: string
        ): getAuditLogsCommonResourcesParameters {
            return this.query({
                'userId': userId
            });
        }
        /**
         * Set the 'accountId' optional parameter
         * @method
         * @name getAuditLogsCommonResourcesParameters#accountId
         */
        accountId(accountId: string
        ): getAuditLogsCommonResourcesParameters {
            return this.query({
                'accountId': accountId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAuditLogsCommonResourcesParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAuditLogsCommonResourcesParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAuditLogsCommonResourcesParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAuditLogsCommonResourcesParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getAuditLogsCommonResourceByCommonResourceNameParameters extends platformSDKMethodParameters <
    Array <
    audit_logs
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, commonResourceName: string
        ) {
            super(superThis, method, _path
                .replace('{commonResourceName}', `${commonResourceName}`)
            );
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getAuditLogsCommonResourceByCommonResourceNameParameters#from
         */
        from(from: string
        ): getAuditLogsCommonResourceByCommonResourceNameParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getAuditLogsCommonResourceByCommonResourceNameParameters#to
         */
        to(to: string
        ): getAuditLogsCommonResourceByCommonResourceNameParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'userId' optional parameter
         * @method
         * @name getAuditLogsCommonResourceByCommonResourceNameParameters#userId
         */
        userId(userId: string
        ): getAuditLogsCommonResourceByCommonResourceNameParameters {
            return this.query({
                'userId': userId
            });
        }
        /**
         * Set the 'accountId' optional parameter
         * @method
         * @name getAuditLogsCommonResourceByCommonResourceNameParameters#accountId
         */
        accountId(accountId: string
        ): getAuditLogsCommonResourceByCommonResourceNameParameters {
            return this.query({
                'accountId': accountId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAuditLogsCommonResourceByCommonResourceNameParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAuditLogsCommonResourceByCommonResourceNameParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAuditLogsCommonResourceByCommonResourceNameParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAuditLogsCommonResourceByCommonResourceNameParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getAuditLogsElementInstancesParameters extends platformSDKMethodParameters <
    Array <
    audit_logs
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getAuditLogsElementInstancesParameters#from
         */
        from(from: string
        ): getAuditLogsElementInstancesParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getAuditLogsElementInstancesParameters#to
         */
        to(to: string
        ): getAuditLogsElementInstancesParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'userId' optional parameter
         * @method
         * @name getAuditLogsElementInstancesParameters#userId
         */
        userId(userId: string
        ): getAuditLogsElementInstancesParameters {
            return this.query({
                'userId': userId
            });
        }
        /**
         * Set the 'accountId' optional parameter
         * @method
         * @name getAuditLogsElementInstancesParameters#accountId
         */
        accountId(accountId: string
        ): getAuditLogsElementInstancesParameters {
            return this.query({
                'accountId': accountId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAuditLogsElementInstancesParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAuditLogsElementInstancesParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAuditLogsElementInstancesParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAuditLogsElementInstancesParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getAuditLogsElementInstanceByElementInstanceIdParameters extends platformSDKMethodParameters <
    Array <
    audit_logs
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, elementInstanceId: string
        ) {
            super(superThis, method, _path
                .replace('{elementInstanceId}', `${elementInstanceId}`)
            );
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getAuditLogsElementInstanceByElementInstanceIdParameters#from
         */
        from(from: string
        ): getAuditLogsElementInstanceByElementInstanceIdParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getAuditLogsElementInstanceByElementInstanceIdParameters#to
         */
        to(to: string
        ): getAuditLogsElementInstanceByElementInstanceIdParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'userId' optional parameter
         * @method
         * @name getAuditLogsElementInstanceByElementInstanceIdParameters#userId
         */
        userId(userId: string
        ): getAuditLogsElementInstanceByElementInstanceIdParameters {
            return this.query({
                'userId': userId
            });
        }
        /**
         * Set the 'accountId' optional parameter
         * @method
         * @name getAuditLogsElementInstanceByElementInstanceIdParameters#accountId
         */
        accountId(accountId: string
        ): getAuditLogsElementInstanceByElementInstanceIdParameters {
            return this.query({
                'accountId': accountId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAuditLogsElementInstanceByElementInstanceIdParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAuditLogsElementInstanceByElementInstanceIdParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAuditLogsElementInstanceByElementInstanceIdParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAuditLogsElementInstanceByElementInstanceIdParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getAuditLogsElementsParameters extends platformSDKMethodParameters <
    Array <
    audit_logs
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getAuditLogsElementsParameters#from
         */
        from(from: string
        ): getAuditLogsElementsParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getAuditLogsElementsParameters#to
         */
        to(to: string
        ): getAuditLogsElementsParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'userId' optional parameter
         * @method
         * @name getAuditLogsElementsParameters#userId
         */
        userId(userId: string
        ): getAuditLogsElementsParameters {
            return this.query({
                'userId': userId
            });
        }
        /**
         * Set the 'accountId' optional parameter
         * @method
         * @name getAuditLogsElementsParameters#accountId
         */
        accountId(accountId: string
        ): getAuditLogsElementsParameters {
            return this.query({
                'accountId': accountId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAuditLogsElementsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAuditLogsElementsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAuditLogsElementsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAuditLogsElementsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getAuditLogsElementByElementIdParameters extends platformSDKMethodParameters <
    Array <
    audit_logs
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, elementId: string
        ) {
            super(superThis, method, _path
                .replace('{elementId}', `${elementId}`)
            );
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getAuditLogsElementByElementIdParameters#from
         */
        from(from: string
        ): getAuditLogsElementByElementIdParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getAuditLogsElementByElementIdParameters#to
         */
        to(to: string
        ): getAuditLogsElementByElementIdParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'userId' optional parameter
         * @method
         * @name getAuditLogsElementByElementIdParameters#userId
         */
        userId(userId: string
        ): getAuditLogsElementByElementIdParameters {
            return this.query({
                'userId': userId
            });
        }
        /**
         * Set the 'accountId' optional parameter
         * @method
         * @name getAuditLogsElementByElementIdParameters#accountId
         */
        accountId(accountId: string
        ): getAuditLogsElementByElementIdParameters {
            return this.query({
                'accountId': accountId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAuditLogsElementByElementIdParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAuditLogsElementByElementIdParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAuditLogsElementByElementIdParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAuditLogsElementByElementIdParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getAuditLogsFormulaInstancesParameters extends platformSDKMethodParameters <
    Array <
    audit_logs
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getAuditLogsFormulaInstancesParameters#from
         */
        from(from: string
        ): getAuditLogsFormulaInstancesParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getAuditLogsFormulaInstancesParameters#to
         */
        to(to: string
        ): getAuditLogsFormulaInstancesParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'userId' optional parameter
         * @method
         * @name getAuditLogsFormulaInstancesParameters#userId
         */
        userId(userId: string
        ): getAuditLogsFormulaInstancesParameters {
            return this.query({
                'userId': userId
            });
        }
        /**
         * Set the 'accountId' optional parameter
         * @method
         * @name getAuditLogsFormulaInstancesParameters#accountId
         */
        accountId(accountId: string
        ): getAuditLogsFormulaInstancesParameters {
            return this.query({
                'accountId': accountId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAuditLogsFormulaInstancesParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAuditLogsFormulaInstancesParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAuditLogsFormulaInstancesParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAuditLogsFormulaInstancesParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getAuditLogsFormulasParameters extends platformSDKMethodParameters <
    Array <
    audit_logs
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getAuditLogsFormulasParameters#from
         */
        from(from: string
        ): getAuditLogsFormulasParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getAuditLogsFormulasParameters#to
         */
        to(to: string
        ): getAuditLogsFormulasParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'userId' optional parameter
         * @method
         * @name getAuditLogsFormulasParameters#userId
         */
        userId(userId: string
        ): getAuditLogsFormulasParameters {
            return this.query({
                'userId': userId
            });
        }
        /**
         * Set the 'accountId' optional parameter
         * @method
         * @name getAuditLogsFormulasParameters#accountId
         */
        accountId(accountId: string
        ): getAuditLogsFormulasParameters {
            return this.query({
                'accountId': accountId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAuditLogsFormulasParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAuditLogsFormulasParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAuditLogsFormulasParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAuditLogsFormulasParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getAuditLogsFormulaByEntityIdParameters extends platformSDKMethodParameters <
    Array <
    audit_logs
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, entityId: string
        ) {
            super(superThis, method, _path
                .replace('{entityId}', `${entityId}`)
            );
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getAuditLogsFormulaByEntityIdParameters#from
         */
        from(from: string
        ): getAuditLogsFormulaByEntityIdParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getAuditLogsFormulaByEntityIdParameters#to
         */
        to(to: string
        ): getAuditLogsFormulaByEntityIdParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'userId' optional parameter
         * @method
         * @name getAuditLogsFormulaByEntityIdParameters#userId
         */
        userId(userId: string
        ): getAuditLogsFormulaByEntityIdParameters {
            return this.query({
                'userId': userId
            });
        }
        /**
         * Set the 'accountId' optional parameter
         * @method
         * @name getAuditLogsFormulaByEntityIdParameters#accountId
         */
        accountId(accountId: string
        ): getAuditLogsFormulaByEntityIdParameters {
            return this.query({
                'accountId': accountId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getAuditLogsFormulaByEntityIdParameters#nextPage
         */
        nextPage(nextPage: string
        ): getAuditLogsFormulaByEntityIdParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getAuditLogsFormulaByEntityIdParameters#pageSize
         */
        pageSize(pageSize: number
        ): getAuditLogsFormulaByEntityIdParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class createAuthenticationPasswordParameters extends platformSDKMethodParameters <
    AuthenticatedUser_GET
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, passwordReset:
            PasswordReset_POST
        ) {
            super(superThis, method, _path);
            this.send(passwordReset);
        }
    }
class createCustomerIdentityProviderParameters extends platformSDKMethodParameters <
    IdentityProvider_GET
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, identityProvider:
            IdentityProvider_POST
        ) {
            super(superThis, method, _path);
            this.send(identityProvider);
        }
    }
class getCustomersIdentityProvidersParameters extends platformSDKMethodParameters <
    Array <
    IdentityProvider_GET
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class getCustomersIdentityProviderByIdParameters extends platformSDKMethodParameters <
    IdentityProvider_GET
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class deleteCustomersIdentityProviderByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getCustomersMeParameters extends platformSDKMethodParameters <
    Customer_GET
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class getCustomersOrganizationsParameters extends platformSDKMethodParameters <
    Array <
    Organization_GET
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getCustomersOrganizationsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getCustomersOrganizationsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getCustomersOrganizationsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getCustomersOrganizationsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getCustomersOrganizationsParameters#where
         */
        where(where: string
        ): getCustomersOrganizationsParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getCustomersOrganizationsParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getCustomersOrganizationsParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class getCustomersOrganizationByIdParameters extends platformSDKMethodParameters <
    Organization_GET
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getCustomersOrganizationByIdParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getCustomersOrganizationByIdParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class deleteCustomersOrganizationByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class createCustomerSignupParameters extends platformSDKMethodParameters <
    CustomerSignup_GET
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, customerSignup:
            CustomerSignup_POST
        ) {
            super(superThis, method, _path);
            this.send(customerSignup);
        }
    }
class createElementParameters extends platformSDKMethodParameters <
    Element
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, element:
            CreateElement
        ) {
            super(superThis, method, _path);
            this.send(element);
        }
    }
class getElementsKeysParameters extends platformSDKMethodParameters <
    Array < string
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getElementsKeysParameters#nextPage
         */
        nextPage(nextPage: string
        ): getElementsKeysParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getElementsKeysParameters#pageSize
         */
        pageSize(pageSize: number
        ): getElementsKeysParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getElementsDocsParameters extends platformSDKMethodParameters <
    Swagger
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'operationId' optional parameter
         * @method
         * @name getElementsDocsParameters#operationId
         */
        operationId(operationId: string
        ): getElementsDocsParameters {
            return this.query({
                'operationId': operationId
            });
        }
        /**
         * Set the 'version' optional parameter
         * @method
         * @name getElementsDocsParameters#version
         */
        version(version: string
        ): getElementsDocsParameters {
            return this.query({
                'version': version
            });
        }
    }
class getElementsMetadataParameters extends platformSDKMethodParameters <
    ElementMetadata
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class getElementsObjectsObjectNameDocsParameters extends platformSDKMethodParameters <
    swaggerDocs
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , objectName: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{objectName}', `${objectName}`)
            );
        }
        /**
         * Set the 'version' optional parameter
         * @method
         * @name getElementsObjectsObjectNameDocsParameters#version
         */
        version(version: string
        ): getElementsObjectsObjectNameDocsParameters {
            return this.query({
                'version': version
            });
        }
    }
class getElementsOperationsParameters extends platformSDKMethodParameters <
    Array <
    Operations
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'version' optional parameter
         * @method
         * @name getElementsOperationsParameters#version
         */
        version(version: string
        ): getElementsOperationsParameters {
            return this.query({
                'version': version
            });
        }
    }
class getElementsOperationsDocsParameters extends platformSDKMethodParameters <
    {}
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , operationId: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{operationId}', `${operationId}`)
            );
        }
        /**
         * Set the 'version' optional parameter
         * @method
         * @name getElementsOperationsDocsParameters#version
         */
        version(version: string
        ): getElementsOperationsDocsParameters {
            return this.query({
                'version': version
            });
        }
    }
class getElementsVersionsParameters extends platformSDKMethodParameters <
    Swagger
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class deleteElementByKeyOrIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
        );
    }
}
class replaceElementByKeyOrIdParameters extends platformSDKMethodParameters <
    Element
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , element:
            CreateElement
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
            this.send(element);
        }
    }
class deleteElementsActiveParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
        );
    }
}
class replaceElementsActiveParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
        );
    }
}
class createElementCloneParameters extends platformSDKMethodParameters <
    Element
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
        }
    }
class getElementsConfigurationParameters extends platformSDKMethodParameters <
    ElementConfigs
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
        }
    }
class createElementConfigurationParameters extends platformSDKMethodParameters <
    Configuration
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , configuration:
            Configuration
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
            this.send(configuration);
        }
    }
class deleteElementsConfigurationByConfigurationKeyParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        , configurationKey: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{configurationKey}', `${configurationKey}`)
        );
    }
}
class replaceElementsConfigurationByConfigurationKeyParameters extends platformSDKMethodParameters <
    Configuration
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , configurationKey: string
            , configuration:
            Configuration
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{configurationKey}', `${configurationKey}`)
            );
            this.send(configuration);
        }
    }
class getElementsExportParameters extends platformSDKMethodParameters <
    request.Response
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
        }
    }
class getElementsHooksParameters extends platformSDKMethodParameters <
    Array <
    Hook
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
        }
    }
class createElementHookParameters extends platformSDKMethodParameters <
    Hook
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , model:
            Hook
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
            this.send(model);
        }
    }
class getElementsHookByHookIdParameters extends platformSDKMethodParameters <
    Hook
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , hookId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{hookId}', `${hookId}`)
            );
        }
    }
class deleteElementsHookByHookIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        , hookId: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{hookId}', `${hookId}`)
        );
    }
}
class replaceElementsHookByHookIdParameters extends platformSDKMethodParameters <
    Hook
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , hookId: string
            , parameter:
            Hook
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{hookId}', `${hookId}`)
            );
            this.send(parameter);
        }
    }
class getElementsInstancesParameters extends platformSDKMethodParameters <
    Array <
    ElementInstance
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
        }
    }
class createElementInstanceParameters extends platformSDKMethodParameters <
    ElementInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , elementInstance:
            ElementInstance
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
            this.send(elementInstance);
        }
    }
class deleteElementsInstanceByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        , id: number
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{id}', `${id}`)
        );
    }
}
class getElementsInstanceByIdParameters extends platformSDKMethodParameters <
    ElementInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: number
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
        }
    }
class replaceElementsInstanceByIdParameters extends platformSDKMethodParameters <
    ElementInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: number
            , elementInstance:
            ElementInstance
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
            this.send(elementInstance);
        }
    }
class getElementsOauthTokenParameters extends platformSDKMethodParameters <
    OAuthToken
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , apiKey: string
            , apiSecret: string
            , callbackUrl: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
            return this.query({
                'apiKey': apiKey
            });
            return this.query({
                'apiSecret': apiSecret
            });
            return this.query({
                'callbackUrl': callbackUrl
            });
        }
        /**
         * Set the 'scope' optional parameter
         * @method
         * @name getElementsOauthTokenParameters#scope
         */
        scope(scope: string
        ): getElementsOauthTokenParameters {
            return this.query({
                'scope': scope
            });
        }
        /**
         * Set the 'state' optional parameter
         * @method
         * @name getElementsOauthTokenParameters#state
         */
        state(state: string
        ): getElementsOauthTokenParameters {
            return this.query({
                'state': state
            });
        }
        /**
         * Set the 'siteAddress' optional parameter
         * @method
         * @name getElementsOauthTokenParameters#siteAddress
         */
        siteAddress(siteAddress: string
        ): getElementsOauthTokenParameters {
            return this.query({
                'siteAddress': siteAddress
            });
        }
    }
class getElementsOauthUrlParameters extends platformSDKMethodParameters <
    OAuthRedirect
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , apiKey: string
            , apiSecret: string
            , callbackUrl: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
            return this.query({
                'apiKey': apiKey
            });
            return this.query({
                'apiSecret': apiSecret
            });
            return this.query({
                'callbackUrl': callbackUrl
            });
        }
        /**
         * Set the 'scope' optional parameter
         * @method
         * @name getElementsOauthUrlParameters#scope
         */
        scope(scope: string
        ): getElementsOauthUrlParameters {
            return this.query({
                'scope': scope
            });
        }
        /**
         * Set the 'state' optional parameter
         * @method
         * @name getElementsOauthUrlParameters#state
         */
        state(state: string
        ): getElementsOauthUrlParameters {
            return this.query({
                'state': state
            });
        }
        /**
         * Set the 'callbackProxy' optional parameter
         * @method
         * @name getElementsOauthUrlParameters#callbackProxy
         */
        callbackProxy(callbackProxy: boolean
        ): getElementsOauthUrlParameters {
            return this.query({
                'callbackProxy': callbackProxy
            });
        }
        /**
         * Set the 'requestToken' optional parameter
         * @method
         * @name getElementsOauthUrlParameters#requestToken
         */
        requestToken(requestToken: string
        ): getElementsOauthUrlParameters {
            return this.query({
                'requestToken': requestToken
            });
        }
        /**
         * Set the 'siteAddress' optional parameter
         * @method
         * @name getElementsOauthUrlParameters#siteAddress
         */
        siteAddress(siteAddress: string
        ): getElementsOauthUrlParameters {
            return this.query({
                'siteAddress': siteAddress
            });
        }
    }
class createElementOauthUrlParameters extends platformSDKMethodParameters <
    OAuthRedirect
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , oauthInfo:
            OAuthInfo
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
            this.send(oauthInfo);
        }
    }
class getElementsObjectsParameters extends platformSDKMethodParameters <
    Array <
    Object
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
        }
        /**
         * Set the 'accountOnly' optional parameter
         * @method
         * @name getElementsObjectsParameters#accountOnly
         */
        accountOnly(accountOnly: boolean
        ): getElementsObjectsParameters {
            return this.query({
                'accountOnly': accountOnly
            });
        }
    }
class createElementObjectParameters extends platformSDKMethodParameters <
    Object
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , object:
            Object
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
            this.send(object);
        }
    }
class deleteElementsObjectByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        , id: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{id}', `${id}`)
        );
    }
}
class replaceElementsObjectByIdParameters extends platformSDKMethodParameters <
    Object
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , object:
            Object
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
            this.send(object);
        }
    }
class getElementsObjectByIdParameters extends platformSDKMethodParameters <
    Object
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
        }
    }
class createElementObjectFieldParameters extends platformSDKMethodParameters <
    Field
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , field:
            Field
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
            this.send(field);
        }
    }
class getElementsObjectsFieldsParameters extends platformSDKMethodParameters <
    Array <
    Field
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'accountOnly' optional parameter
         * @method
         * @name getElementsObjectsFieldsParameters#accountOnly
         */
        accountOnly(accountOnly: boolean
        ): getElementsObjectsFieldsParameters {
            return this.query({
                'accountOnly': accountOnly
            });
        }
    }
class deleteElementsObjectsFieldByFieldIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        , id: string
        , fieldId: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{id}', `${id}`)
            .replace('{fieldId}', `${fieldId}`)
        );
    }
}
class replaceElementsObjectsFieldByFieldIdParameters extends platformSDKMethodParameters <
    Field
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , fieldId: string
            , object:
            Field
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
                .replace('{fieldId}', `${fieldId}`)
            );
            this.send(object);
        }
    }
class getElementsObjectsFieldByFieldIdParameters extends platformSDKMethodParameters <
    Field
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , fieldId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
                .replace('{fieldId}', `${fieldId}`)
            );
        }
    }
class getElementsParametersParameters extends platformSDKMethodParameters <
    Array <
    DefaultParameter
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
        }
    }
class createElementParameterParameters extends platformSDKMethodParameters <
    DefaultParameter
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , parameter:
            DefaultParameter
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
            this.send(parameter);
        }
    }
class deleteElementsParameterByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        , id: string
        , parameter:
        DefaultParameter
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{id}', `${id}`)
        );
        this.send(parameter);
    }
}
class replaceElementsParameterByIdParameters extends platformSDKMethodParameters <
    DefaultParameter
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , parameter:
            DefaultParameter
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
            this.send(parameter);
        }
    }
class getElementsResourcesParameters extends platformSDKMethodParameters <
    Array <
    Resource
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getElementsResourcesParameters#where
         */
        where(where: string
        ): getElementsResourcesParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'accountOnly' optional parameter
         * @method
         * @name getElementsResourcesParameters#accountOnly
         */
        accountOnly(accountOnly: boolean
        ): getElementsResourcesParameters {
            return this.query({
                'accountOnly': accountOnly
            });
        }
    }
class createElementResourceParameters extends platformSDKMethodParameters <
    Resource
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , resource:
            Resource
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
            this.send(resource);
        }
    }
class deleteElementsResourceByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        , id: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{id}', `${id}`)
        );
    }
}
class replaceElementsResourceByIdParameters extends platformSDKMethodParameters <
    Resource
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , resource:
            Resource
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
            this.send(resource);
        }
    }
class getElementsResourceByIdParameters extends platformSDKMethodParameters <
    Resource
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
        }
    }
class getElementsResourcesHooksParameters extends platformSDKMethodParameters <
    Array <
    Hook
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
        }
    }
class createElementResourceHookParameters extends platformSDKMethodParameters <
    Hook
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , model:
            Hook
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
            this.send(model);
        }
    }
class getElementsResourcesHookByHookIdParameters extends platformSDKMethodParameters <
    Hook
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , hookId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
                .replace('{hookId}', `${hookId}`)
            );
        }
    }
class deleteElementsResourcesHookByHookIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        , id: string
        , hookId: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{id}', `${id}`)
            .replace('{hookId}', `${hookId}`)
        );
    }
}
class replaceElementsResourcesHookByHookIdParameters extends platformSDKMethodParameters <
    Hook
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , hookId: string
            , parameter:
            Hook
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
                .replace('{hookId}', `${hookId}`)
            );
            this.send(parameter);
        }
    }
class deleteElementsResourcesModelsParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        , id: number
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{id}', `${id}`)
        );
    }
}
class getElementsResourcesModelsParameters extends platformSDKMethodParameters <
    Model
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
        }
    }
class createElementResourceModelParameters extends platformSDKMethodParameters <
    Model
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , model:
            Model
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
            this.send(model);
        }
    }
class getElementsResourcesParametersParameters extends platformSDKMethodParameters <
    Array <
    Parameter
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
        }
    }
class createElementResourceParameterParameters extends platformSDKMethodParameters <
    Parameter
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , parameter:
            Parameter
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
            );
            this.send(parameter);
        }
    }
class deleteElementsResourcesParameterByParameterIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        , id: string
        , parameterId: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{id}', `${id}`)
            .replace('{parameterId}', `${parameterId}`)
        );
    }
}
class replaceElementsResourcesParameterByParameterIdParameters extends platformSDKMethodParameters <
    Parameter
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , id: string
            , parameterId: string
            , parameter:
            Parameter
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{id}', `${id}`)
                .replace('{parameterId}', `${parameterId}`)
            );
            this.send(parameter);
        }
    }
class getFormulasParameters extends platformSDKMethodParameters <
    Array <
    GetFormula
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'includeSystem' optional parameter
         * @method
         * @name getFormulasParameters#includeSystem
         */
        includeSystem(includeSystem: boolean
        ): getFormulasParameters {
            return this.query({
                'includeSystem': includeSystem
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getFormulasParameters#nextPage
         */
        nextPage(nextPage: string
        ): getFormulasParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getFormulasParameters#pageSize
         */
        pageSize(pageSize: number
        ): getFormulasParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class createFormulaParameters extends platformSDKMethodParameters <
    GetFormula
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, body:
            CreateFormula
        ) {
            super(superThis, method, _path);
            this.send(body);
        }
    }
class getFormulasAnalyticsParameters extends platformSDKMethodParameters <
    Array <
    AnalyticsEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getFormulasAnalyticsParameters#from
         */
        from(from: string
        ): getFormulasAnalyticsParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getFormulasAnalyticsParameters#to
         */
        to(to: string
        ): getFormulasAnalyticsParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getFormulasAnalyticsParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getFormulasAnalyticsParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getFormulasAnalyticsParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getFormulasAnalyticsParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getFormulasAnalyticsAccountsParameters extends platformSDKMethodParameters <
    Array <
    AccountAnalyticsEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getFormulasAnalyticsAccountsParameters#from
         */
        from(from: string
        ): getFormulasAnalyticsAccountsParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getFormulasAnalyticsAccountsParameters#to
         */
        to(to: string
        ): getFormulasAnalyticsAccountsParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getFormulasAnalyticsAccountsParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getFormulasAnalyticsAccountsParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getFormulasAnalyticsAccountsParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getFormulasAnalyticsAccountsParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getFormulasAnalyticsInstancesParameters extends platformSDKMethodParameters <
    Array <
    InstanceAnalyticsEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getFormulasAnalyticsInstancesParameters#from
         */
        from(from: string
        ): getFormulasAnalyticsInstancesParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getFormulasAnalyticsInstancesParameters#to
         */
        to(to: string
        ): getFormulasAnalyticsInstancesParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getFormulasAnalyticsInstancesParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getFormulasAnalyticsInstancesParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getFormulasAnalyticsInstancesParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getFormulasAnalyticsInstancesParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getFormulasAnalyticsStatusesParameters extends platformSDKMethodParameters <
    Array <
    StatusAnalyticsEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getFormulasAnalyticsStatusesParameters#from
         */
        from(from: string
        ): getFormulasAnalyticsStatusesParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getFormulasAnalyticsStatusesParameters#to
         */
        to(to: string
        ): getFormulasAnalyticsStatusesParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getFormulasAnalyticsStatusesParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getFormulasAnalyticsStatusesParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getFormulasAnalyticsStatusesParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getFormulasAnalyticsStatusesParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getFormulasAnalyticsStatusesNowParameters extends platformSDKMethodParameters <
    Array <
    StatusNowEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getFormulasAnalyticsStatusesNowParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getFormulasAnalyticsStatusesNowParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getFormulasAnalyticsStepsParameters extends platformSDKMethodParameters <
    Array <
    StepAnalyticsEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getFormulasAnalyticsStepsParameters#from
         */
        from(from: string
        ): getFormulasAnalyticsStepsParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getFormulasAnalyticsStepsParameters#to
         */
        to(to: string
        ): getFormulasAnalyticsStepsParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getFormulasAnalyticsStepsParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getFormulasAnalyticsStepsParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getFormulasAnalyticsStepsParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getFormulasAnalyticsStepsParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getFormulasInstancesParameters extends platformSDKMethodParameters <
    GetAllFormulaInstances
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'elementInstanceId' optional parameter
         * @method
         * @name getFormulasInstancesParameters#elementInstanceId
         */
        elementInstanceId(elementInstanceId: number
        ): getFormulasInstancesParameters {
            return this.query({
                'elementInstanceId': elementInstanceId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getFormulasInstancesParameters#nextPage
         */
        nextPage(nextPage: string
        ): getFormulasInstancesParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getFormulasInstancesParameters#pageSize
         */
        pageSize(pageSize: number
        ): getFormulasInstancesParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'searchText' optional parameter
         * @method
         * @name getFormulasInstancesParameters#searchText
         */
        searchText(searchText: string
        ): getFormulasInstancesParameters {
            return this.query({
                'searchText': searchText
            });
        }
    }
class getFormulasInstancesExecutionsStepsValuesParameters extends platformSDKMethodParameters <
    Array <
    StepExecutionValue
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, stepExecutionId: number
        ) {
            super(superThis, method, _path
                .replace('{stepExecutionId}', `${stepExecutionId}`)
            );
        }
    }
class getFormulasInstancesExecutionByExecutionIdParameters extends platformSDKMethodParameters <
    FormulaExecution
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, executionId: number
        ) {
            super(superThis, method, _path
                .replace('{executionId}', `${executionId}`)
            );
        }
    }
class updateFormulasInstancesExecutionByExecutionIdParameters extends platformSDKMethodParameters <
    FormulaExecution
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, executionId: number
            , status:
            FormulaInstanceStatus
        ) {
            super(superThis, method, _path
                .replace('{executionId}', `${executionId}`)
            );
            this.send(status);
        }
    }
class getFormulasInstancesExecutionsErrorsParameters extends platformSDKMethodParameters <
    Array <
    StepExecution
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, executionId: number
        ) {
            super(superThis, method, _path
                .replace('{executionId}', `${executionId}`)
            );
        }
    }
class getFormulasInstancesExecutionsStepsParameters extends platformSDKMethodParameters <
    Array <
    StepExecution
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, executionId: number
        ) {
            super(superThis, method, _path
                .replace('{executionId}', `${executionId}`)
            );
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsStepsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getFormulasInstancesExecutionsStepsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsStepsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getFormulasInstancesExecutionsStepsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getFormulasInstanceByInstanceIdParameters extends platformSDKMethodParameters <
    GetAllFormulaInstances
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, instanceId: number
        ) {
            super(superThis, method, _path
                .replace('{instanceId}', `${instanceId}`)
            );
        }
    }
class getFormulasInstancesExecutionsParameters extends platformSDKMethodParameters <
    Array <
    FormulaExecution
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, instanceId: number
        ) {
            super(superThis, method, _path
                .replace('{instanceId}', `${instanceId}`)
            );
        }
        /**
         * Set the 'eventId' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsParameters#eventId
         */
        eventId(eventId: string
        ): getFormulasInstancesExecutionsParameters {
            return this.query({
                'eventId': eventId
            });
        }
        /**
         * Set the 'objectId' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsParameters#objectId
         */
        objectId(objectId: string
        ): getFormulasInstancesExecutionsParameters {
            return this.query({
                'objectId': objectId
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getFormulasInstancesExecutionsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getFormulasInstancesExecutionsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class createFormulaInstanceExecutionParameters extends platformSDKMethodParameters <
    Array <
    FormulaExecution
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, instanceId: number
        ) {
            super(superThis, method, _path
                .replace('{instanceId}', `${instanceId}`)
            );
        }
        /**
         * Set the 'trigger' optional parameter
         * @method
         * @name createFormulaInstanceExecutionParameters#trigger
         */
        trigger(trigger:
            FormulaExecutionBody
        ): createFormulaInstanceExecutionParameters {
            if (this.queryParameters['trigger'] !== undefined) {
                this._body = this.queryParameters['trigger'];
            }
        }
    }
class getFormulasInstancesExecutionsErrors2Parameters extends platformSDKMethodParameters <
    Array <
    GetAllInstanceExecutionErrors
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, instanceId: number
        ) {
            super(superThis, method, _path
                .replace('{instanceId}', `${instanceId}`)
            );
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsErrors2Parameters#nextPage
         */
        nextPage(nextPage: string
        ): getFormulasInstancesExecutionsErrors2Parameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsErrors2Parameters#pageSize
         */
        pageSize(pageSize: number
        ): getFormulasInstancesExecutionsErrors2Parameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsErrors2Parameters#from
         */
        from(from: string
        ): getFormulasInstancesExecutionsErrors2Parameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsErrors2Parameters#to
         */
        to(to: string
        ): getFormulasInstancesExecutionsErrors2Parameters {
            return this.query({
                'to': to
            });
        }
    }
class getFormulasInstancesExecutionsErrors2_1Parameters extends platformSDKMethodParameters <
    Array <
    GetAllFormulaExecutionErrors
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, formulaId: number
        ) {
            super(superThis, method, _path
                .replace('{formulaId}', `${formulaId}`)
            );
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsErrors2_1Parameters#nextPage
         */
        nextPage(nextPage: string
        ): getFormulasInstancesExecutionsErrors2_1Parameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsErrors2_1Parameters#pageSize
         */
        pageSize(pageSize: number
        ): getFormulasInstancesExecutionsErrors2_1Parameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsErrors2_1Parameters#from
         */
        from(from: string
        ): getFormulasInstancesExecutionsErrors2_1Parameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getFormulasInstancesExecutionsErrors2_1Parameters#to
         */
        to(to: string
        ): getFormulasInstancesExecutionsErrors2_1Parameters {
            return this.query({
                'to': to
            });
        }
    }
class deleteFormulaByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getFormulaByIdParameters extends platformSDKMethodParameters <
    GetFormula
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class replaceFormulaByIdParameters extends platformSDKMethodParameters <
    GetFormula
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , formula:
            UpdateFormula
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(formula);
        }
    }
class updateFormulaByIdParameters extends platformSDKMethodParameters <
    GetFormulaSlim
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , formula:
            PartialUpdateFormula
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(formula);
        }
    }
class createFormulaConfigurationParameters extends platformSDKMethodParameters <
    GetConfiguration
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , configuration:
            CreateConfiguration
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(configuration);
        }
    }
class deleteFormulasConfigurationByConfigurationIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , configurationId: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{configurationId}', `${configurationId}`)
        );
    }
}
class getFormulasConfigurationByConfigurationIdParameters extends platformSDKMethodParameters <
    GetConfiguration
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , configurationId: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{configurationId}', `${configurationId}`)
            );
        }
    }
class replaceFormulasConfigurationByConfigurationIdParameters extends platformSDKMethodParameters <
    GetConfiguration
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , configurationId: number
            , configuration:
            CreateConfiguration
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{configurationId}', `${configurationId}`)
            );
            this.send(configuration);
        }
    }
class getFormulasExportParameters extends platformSDKMethodParameters < string
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class getFormulasInstances2Parameters extends platformSDKMethodParameters <
    Array <
    GetFormulaInstance
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getFormulasInstances2Parameters#nextPage
         */
        nextPage(nextPage: string
        ): getFormulasInstances2Parameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getFormulasInstances2Parameters#pageSize
         */
        pageSize(pageSize: number
        ): getFormulasInstances2Parameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class createFormulaInstanceParameters extends platformSDKMethodParameters <
    FormulaInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , formulaInstance:
            CreateFormulaInstance
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(formulaInstance);
        }
    }
class deleteFormulasInstanceByInstanceIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , instanceId: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{instanceId}', `${instanceId}`)
        );
    }
}
class getFormulasInstanceByInstanceId2Parameters extends platformSDKMethodParameters <
    GetFormulaFormulaInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , instanceId: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{instanceId}', `${instanceId}`)
            );
        }
    }
class replaceFormulasInstanceByInstanceIdParameters extends platformSDKMethodParameters <
    GetFormulaInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , instanceId: number
            , formulaInstance:
            CreateFormulaInstance
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{instanceId}', `${instanceId}`)
            );
            this.send(formulaInstance);
        }
    }
class replaceFormulasInstancesActiveParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , instanceId: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{instanceId}', `${instanceId}`)
        );
    }
}
class deleteFormulasInstancesActiveParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , instanceId: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{instanceId}', `${instanceId}`)
        );
    }
}
class getFormulasInstancesExecutions2Parameters extends platformSDKMethodParameters <
    Array <
    FormulaExecution
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , instanceId: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{instanceId}', `${instanceId}`)
            );
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getFormulasInstancesExecutions2Parameters#nextPage
         */
        nextPage(nextPage: string
        ): getFormulasInstancesExecutions2Parameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getFormulasInstancesExecutions2Parameters#pageSize
         */
        pageSize(pageSize: number
        ): getFormulasInstancesExecutions2Parameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getFormulasStepsParameters extends platformSDKMethodParameters <
    Array <
    GetStep
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class createFormulaStepParameters extends platformSDKMethodParameters <
    GetStep
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , step:
            CreateStep
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(step);
        }
    }
class deleteFormulasStepByStepIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , stepId: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{stepId}', `${stepId}`)
        );
    }
}
class getFormulasStepByStepIdParameters extends platformSDKMethodParameters <
    GetStep
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , stepId: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{stepId}', `${stepId}`)
            );
        }
    }
class replaceFormulasStepByStepIdParameters extends platformSDKMethodParameters <
    GetStep
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , stepId: number
            , step:
            CreateStep
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{stepId}', `${stepId}`)
            );
            this.send(step);
        }
    }
class createFormulaTriggerParameters extends platformSDKMethodParameters <
    GetTrigger
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , trigger:
            CreateTrigger
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(trigger);
        }
    }
class deleteFormulasTriggerByTriggerIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , triggerId: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{triggerId}', `${triggerId}`)
        );
    }
}
class getFormulasTriggerByTriggerIdParameters extends platformSDKMethodParameters <
    GetTrigger
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , triggerId: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{triggerId}', `${triggerId}`)
            );
        }
    }
class replaceFormulasTriggerByTriggerIdParameters extends platformSDKMethodParameters <
    GetTrigger
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , triggerId: number
            , trigger:
            CreateTrigger
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{triggerId}', `${triggerId}`)
            );
            this.send(trigger);
        }
    }
class getHubsParameters extends platformSDKMethodParameters <
    Array <
    Hub
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getHubsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getHubsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getHubsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getHubsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class createHubParameters extends platformSDKMethodParameters <
    Hub
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, hub:
            Hub
        ) {
            super(superThis, method, _path);
            this.send(hub);
        }
    }
class getHubsKeysParameters extends platformSDKMethodParameters <
    Array < string
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getHubsKeysParameters#nextPage
         */
        nextPage(nextPage: string
        ): getHubsKeysParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getHubsKeysParameters#pageSize
         */
        pageSize(pageSize: number
        ): getHubsKeysParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class deleteHubByKeyParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, key: string
    ) {
        super(superThis, method, _path
            .replace('{key}', `${key}`)
        );
    }
}
class getHubByKeyParameters extends platformSDKMethodParameters <
    Hub
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, key: string
        ) {
            super(superThis, method, _path
                .replace('{key}', `${key}`)
            );
        }
    }
class getHubsElementsParameters extends platformSDKMethodParameters <
    Array <
    Element
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, key: string
        ) {
            super(superThis, method, _path
                .replace('{key}', `${key}`)
            );
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getHubsElementsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getHubsElementsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getHubsElementsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getHubsElementsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getInstancesParameters extends platformSDKMethodParameters <
    Array <
    ElementInstance
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'tags' optional parameter
         * @method
         * @name getInstancesParameters#tags
         */
        tags(tags:
            Array < string
            >
        ): getInstancesParameters {
            return this.query({
                'tags[]': tags
            });
        }
        /**
         * Set the 'searchText' optional parameter
         * @method
         * @name getInstancesParameters#searchText
         */
        searchText(searchText: string
        ): getInstancesParameters {
            return this.query({
                'searchText': searchText
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getInstancesParameters#nextPage
         */
        nextPage(nextPage: string
        ): getInstancesParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getInstancesParameters#pageSize
         */
        pageSize(pageSize: number
        ): getInstancesParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'hydrate' optional parameter
         * @method
         * @name getInstancesParameters#hydrate
         */
        hydrate(hydrate: boolean
        ): getInstancesParameters {
            return this.query({
                'hydrate': hydrate
            });
        }
    }
class createInstanceParameters extends platformSDKMethodParameters <
    ElementInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, elementInstance:
            ElementInstance
        ) {
            super(superThis, method, _path);
            this.send(elementInstance);
        }
    }
class deleteInstancesParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string) {
        super(superThis, method, _path);
    }
}
class replaceInstancesParameters extends platformSDKMethodParameters <
    ElementInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, elementInstance:
            ElementInstance
        ) {
            super(superThis, method, _path);
            this.send(elementInstance);
        }
    }
class updateInstancesParameters extends platformSDKMethodParameters <
    ElementInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, elementInstance:
            ElementInstance
        ) {
            super(superThis, method, _path);
            this.send(elementInstance);
        }
    }
class getInstancesConfigurationParameters extends platformSDKMethodParameters <
    Array <
    ElementInstanceConfig
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class getInstancesConfigurationByConfigIdParameters extends platformSDKMethodParameters <
    ElementInstanceConfig
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, configId: number
        ) {
            super(superThis, method, _path
                .replace('{configId}', `${configId}`)
            );
        }
    }
class updateInstancesConfigurationByConfigIdParameters extends platformSDKMethodParameters <
    ElementInstanceConfig
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, configId: number
            , config:
            ElementInstanceConfigUpdate
        ) {
            super(superThis, method, _path
                .replace('{configId}', `${configId}`)
            );
            this.send(config);
        }
    }
class getInstancesDocsParameters extends platformSDKMethodParameters <
    {}
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'operationId' optional parameter
         * @method
         * @name getInstancesDocsParameters#operationId
         */
        operationId(operationId: string
        ): getInstancesDocsParameters {
            return this.query({
                'operationId': operationId
            });
        }
        /**
         * Set the 'version' optional parameter
         * @method
         * @name getInstancesDocsParameters#version
         */
        version(version: string
        ): getInstancesDocsParameters {
            return this.query({
                'version': version
            });
        }
    }
class getInstancesDocByOperationIdParameters extends platformSDKMethodParameters <
    {}
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, operationId: string
        ) {
            super(superThis, method, _path
                .replace('{operationId}', `${operationId}`)
            );
        }
        /**
         * Set the 'discovery' optional parameter
         * @method
         * @name getInstancesDocByOperationIdParameters#discovery
         */
        discovery(discovery: boolean
        ): getInstancesDocByOperationIdParameters {
            return this.query({
                'discovery': discovery
            });
        }
        /**
         * Set the 'basic' optional parameter
         * @method
         * @name getInstancesDocByOperationIdParameters#basic
         */
        basic(basic: boolean
        ): getInstancesDocByOperationIdParameters {
            return this.query({
                'basic': basic
            });
        }
        /**
         * Set the 'version' optional parameter
         * @method
         * @name getInstancesDocByOperationIdParameters#version
         */
        version(version: string
        ): getInstancesDocByOperationIdParameters {
            return this.query({
                'version': version
            });
        }
    }
class getInstancesDocsDefinitionsParameters extends platformSDKMethodParameters <
    {}
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, operationId: string
        ) {
            super(superThis, method, _path
                .replace('{operationId}', `${operationId}`)
            );
        }
        /**
         * Set the 'discovery' optional parameter
         * @method
         * @name getInstancesDocsDefinitionsParameters#discovery
         */
        discovery(discovery: boolean
        ): getInstancesDocsDefinitionsParameters {
            return this.query({
                'discovery': discovery
            });
        }
        /**
         * Set the 'resolveReferences' optional parameter
         * @method
         * @name getInstancesDocsDefinitionsParameters#resolveReferences
         */
        resolveReferences(resolveReferences: boolean
        ): getInstancesDocsDefinitionsParameters {
            return this.query({
                'resolveReferences': resolveReferences
            });
        }
        /**
         * Set the 'basic' optional parameter
         * @method
         * @name getInstancesDocsDefinitionsParameters#basic
         */
        basic(basic: boolean
        ): getInstancesDocsDefinitionsParameters {
            return this.query({
                'basic': basic
            });
        }
        /**
         * Set the 'version' optional parameter
         * @method
         * @name getInstancesDocsDefinitionsParameters#version
         */
        version(version: string
        ): getInstancesDocsDefinitionsParameters {
            return this.query({
                'version': version
            });
        }
    }
class replaceInstancesEnabledParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string) {
        super(superThis, method, _path);
    }
}
class deleteInstancesEnabledParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string) {
        super(superThis, method, _path);
    }
}
class getInstancesEventsParameters extends platformSDKMethodParameters <
    Array <
    Event
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class getInstancesEventsAnalyticsParameters extends platformSDKMethodParameters <
    Array <
    AnalyticsEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsParameters#from
         */
        from(from: string
        ): getInstancesEventsAnalyticsParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsParameters#to
         */
        to(to: string
        ): getInstancesEventsAnalyticsParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getInstancesEventsAnalyticsParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getInstancesEventsAnalyticsParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getInstancesEventsAnalyticsAccountsParameters extends platformSDKMethodParameters <
    Array <
    AccountAnalyticsEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsAccountsParameters#from
         */
        from(from: string
        ): getInstancesEventsAnalyticsAccountsParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsAccountsParameters#to
         */
        to(to: string
        ): getInstancesEventsAnalyticsAccountsParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsAccountsParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getInstancesEventsAnalyticsAccountsParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsAccountsParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getInstancesEventsAnalyticsAccountsParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getInstancesEventsAnalyticsInstancesParameters extends platformSDKMethodParameters <
    Array <
    InstanceAnalyticsEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsInstancesParameters#from
         */
        from(from: string
        ): getInstancesEventsAnalyticsInstancesParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsInstancesParameters#to
         */
        to(to: string
        ): getInstancesEventsAnalyticsInstancesParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsInstancesParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getInstancesEventsAnalyticsInstancesParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getInstancesEventsAnalyticsInstancesParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getInstancesEventsAnalyticsInstancesParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getInstancesEventsDispositionsParameters extends platformSDKMethodParameters <
    Array <
    Event
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getInstancesEventsDispositionsParameters#from
         */
        from(from: string
        ): getInstancesEventsDispositionsParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getInstancesEventsDispositionsParameters#to
         */
        to(to: string
        ): getInstancesEventsDispositionsParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getInstancesEventsDispositionsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getInstancesEventsDispositionsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getInstancesEventsDispositionsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getInstancesEventsDispositionsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
    }
class getInstancesEventByEventIdParameters extends platformSDKMethodParameters <
    Event
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, eventId: number
        ) {
            super(superThis, method, _path
                .replace('{eventId}', `${eventId}`)
            );
        }
    }
class getInstancesObjectsDefinitionsParameters extends platformSDKMethodParameters <
    Dictionary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class deleteInstancesObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, objectName: string
    ) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
        );
    }
}
class getInstancesObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
        }
    }
class createInstanceObjectObjectNameDefinitionParameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
            , body:
            Definition
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
            this.send(body);
        }
    }
class replaceInstancesObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
            , body:
            Definition
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
            this.send(body);
        }
    }
class replaceInstancesTraceLoggingParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string) {
        super(superThis, method, _path);
    }
    /**
     * Set the 'config' optional parameter
     * @method
     * @name replaceInstancesTraceLoggingParameters#config
     */
    config(config:
        TraceLoggingConfig
    ): replaceInstancesTraceLoggingParameters {
        if (this.queryParameters['config'] !== undefined) {
            this._body = this.queryParameters['config'];
        }
    }
}
class deleteInstancesTraceLoggingParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string) {
        super(superThis, method, _path);
    }
}
class deleteInstancesTransformationsParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string) {
        super(superThis, method, _path);
    }
}
class getInstancesTransformationsParameters extends platformSDKMethodParameters <
    TransformationLibrary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class deleteInstancesTransformationByObjectNameParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, objectName: string
    ) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
        );
    }
}
class getInstancesTransformationByObjectNameParameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
        }
    }
class createInstanceTransformationByObjectNameParameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
            , transformation:
            Transformation
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
            this.send(transformation);
        }
    }
class replaceInstancesTransformationByObjectNameParameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
            , transformation:
            Transformation
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
            this.send(transformation);
        }
    }
class deleteInstanceByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getInstanceByIdParameters extends platformSDKMethodParameters <
    ElementInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class replaceInstanceByIdParameters extends platformSDKMethodParameters <
    ElementInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , elementInstance:
            ElementInstance
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(elementInstance);
        }
    }
class updateInstanceByIdParameters extends platformSDKMethodParameters <
    ElementInstance
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , elementInstance:
            ElementInstance
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(elementInstance);
        }
    }
class getInstancesConfiguration2Parameters extends platformSDKMethodParameters <
    Array <
    ElementInstanceConfig
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class getInstancesConfigurationByConfigId2Parameters extends platformSDKMethodParameters <
    ElementInstanceConfig
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , configId: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{configId}', `${configId}`)
            );
        }
    }
class updateInstancesConfigurationByConfigId2Parameters extends platformSDKMethodParameters <
    ElementInstanceConfig
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , configId: number
            , config:
            ElementInstanceConfigUpdate
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{configId}', `${configId}`)
            );
            this.send(config);
        }
    }
class getInstancesDocs2Parameters extends platformSDKMethodParameters <
    {}
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'operationId' optional parameter
         * @method
         * @name getInstancesDocs2Parameters#operationId
         */
        operationId(operationId: string
        ): getInstancesDocs2Parameters {
            return this.query({
                'operationId': operationId
            });
        }
        /**
         * Set the 'version' optional parameter
         * @method
         * @name getInstancesDocs2Parameters#version
         */
        version(version: string
        ): getInstancesDocs2Parameters {
            return this.query({
                'version': version
            });
        }
    }
class getInstancesDocByOperationId2Parameters extends platformSDKMethodParameters <
    {}
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , operationId: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{operationId}', `${operationId}`)
            );
        }
        /**
         * Set the 'discovery' optional parameter
         * @method
         * @name getInstancesDocByOperationId2Parameters#discovery
         */
        discovery(discovery: boolean
        ): getInstancesDocByOperationId2Parameters {
            return this.query({
                'discovery': discovery
            });
        }
        /**
         * Set the 'basic' optional parameter
         * @method
         * @name getInstancesDocByOperationId2Parameters#basic
         */
        basic(basic: boolean
        ): getInstancesDocByOperationId2Parameters {
            return this.query({
                'basic': basic
            });
        }
        /**
         * Set the 'version' optional parameter
         * @method
         * @name getInstancesDocByOperationId2Parameters#version
         */
        version(version: string
        ): getInstancesDocByOperationId2Parameters {
            return this.query({
                'version': version
            });
        }
    }
class getInstancesDocsDefinitions2Parameters extends platformSDKMethodParameters <
    {}
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , operationId: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{operationId}', `${operationId}`)
            );
        }
        /**
         * Set the 'discovery' optional parameter
         * @method
         * @name getInstancesDocsDefinitions2Parameters#discovery
         */
        discovery(discovery: boolean
        ): getInstancesDocsDefinitions2Parameters {
            return this.query({
                'discovery': discovery
            });
        }
        /**
         * Set the 'resolveReferences' optional parameter
         * @method
         * @name getInstancesDocsDefinitions2Parameters#resolveReferences
         */
        resolveReferences(resolveReferences: boolean
        ): getInstancesDocsDefinitions2Parameters {
            return this.query({
                'resolveReferences': resolveReferences
            });
        }
        /**
         * Set the 'basic' optional parameter
         * @method
         * @name getInstancesDocsDefinitions2Parameters#basic
         */
        basic(basic: boolean
        ): getInstancesDocsDefinitions2Parameters {
            return this.query({
                'basic': basic
            });
        }
        /**
         * Set the 'version' optional parameter
         * @method
         * @name getInstancesDocsDefinitions2Parameters#version
         */
        version(version: string
        ): getInstancesDocsDefinitions2Parameters {
            return this.query({
                'version': version
            });
        }
    }
class replaceInstancesEnabled2Parameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class deleteInstancesEnabled2Parameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getInstancesEvents2Parameters extends platformSDKMethodParameters <
    Array <
    Event
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class getInstancesEventByEventId2Parameters extends platformSDKMethodParameters <
    Event
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , eventId: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{eventId}', `${eventId}`)
            );
        }
    }
class getInstancesObjectsDefinitions2Parameters extends platformSDKMethodParameters <
    Dictionary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class deleteInstancesObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , objectName: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{objectName}', `${objectName}`)
        );
    }
}
class getInstancesObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , objectName: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{objectName}', `${objectName}`)
            );
        }
    }
class createInstanceObjectObjectNameDefinition2Parameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , objectName: string
            , body:
            Definition
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{objectName}', `${objectName}`)
            );
            this.send(body);
        }
    }
class replaceInstancesObjectsObjectNameDefinitions2Parameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , objectName: string
            , body:
            Definition
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{objectName}', `${objectName}`)
            );
            this.send(body);
        }
    }
class replaceInstancesTraceLogging2Parameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
    /**
     * Set the 'config' optional parameter
     * @method
     * @name replaceInstancesTraceLogging2Parameters#config
     */
    config(config:
        TraceLoggingConfig
    ): replaceInstancesTraceLogging2Parameters {
        if (this.queryParameters['config'] !== undefined) {
            this._body = this.queryParameters['config'];
        }
    }
}
class deleteInstancesTraceLogging2Parameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class deleteInstancesTransformations2Parameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getInstancesTransformations2Parameters extends platformSDKMethodParameters <
    TransformationLibrary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class deleteInstancesTransformationByObjectName2Parameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
        , objectName: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
            .replace('{objectName}', `${objectName}`)
        );
    }
}
class getInstancesTransformationByObjectName2Parameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , objectName: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{objectName}', `${objectName}`)
            );
        }
    }
class createInstanceTransformationByObjectName2Parameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , objectName: string
            , transformation:
            Transformation
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{objectName}', `${objectName}`)
            );
            this.send(transformation);
        }
    }
class replaceInstancesTransformationByObjectName2Parameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , objectName: string
            , transformation:
            Transformation
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{objectName}', `${objectName}`)
            );
            this.send(transformation);
        }
    }
class getJobsParameters extends platformSDKMethodParameters <
    Jobs
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class createJobParameters extends platformSDKMethodParameters <
    CreatedJob
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'body' optional parameter
         * @method
         * @name createJobParameters#body
         */
        body(body:
            Createjob
        ): createJobParameters {
            if (this.queryParameters['body'] !== undefined) {
                this._body = this.queryParameters['body'];
            }
        }
    }
class getJobsExecutionsParameters extends platformSDKMethodParameters <
    JobExecutions
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getJobsExecutionsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getJobsExecutionsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'elementKeys' optional parameter
         * @method
         * @name getJobsExecutionsParameters#elementKeys
         */
        elementKeys(elementKeys: string
        ): getJobsExecutionsParameters {
            return this.query({
                'elementKeys[]': elementKeys
            });
        }
        /**
         * Set the 'startTime' optional parameter
         * @method
         * @name getJobsExecutionsParameters#startTime
         */
        startTime(startTime: string
        ): getJobsExecutionsParameters {
            return this.query({
                'startTime': startTime
            });
        }
        /**
         * Set the 'endTime' optional parameter
         * @method
         * @name getJobsExecutionsParameters#endTime
         */
        endTime(endTime: string
        ): getJobsExecutionsParameters {
            return this.query({
                'endTime': endTime
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getJobsExecutionsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getJobsExecutionsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
    }
class deleteJobByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getJobByIdParameters extends platformSDKMethodParameters <
    Job
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class replaceJobsDisableParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class replaceJobsEnableParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: string
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class getJobsHistoryParameters extends platformSDKMethodParameters <
    JobHistories
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class getJobsHistoryByHistoryIdParameters extends platformSDKMethodParameters <
    JobHistory
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: string
            , historyId: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{historyId}', `${historyId}`)
            );
        }
    }
class updateJobsRescheduleParameters extends platformSDKMethodParameters <
    CreatedJob
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'body' optional parameter
         * @method
         * @name updateJobsRescheduleParameters#body
         */
        body(body:
            Reschedule
        ): updateJobsRescheduleParameters {
            if (this.queryParameters['body'] !== undefined) {
                this._body = this.queryParameters['body'];
            }
        }
    }
class getMetricsApiParameters extends platformSDKMethodParameters <
    Array <
    ApiMetrics
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'customerIds' optional parameter
         * @method
         * @name getMetricsApiParameters#customerIds
         */
        customerIds(customerIds:
            Array < number
            >
        ): getMetricsApiParameters {
            return this.query({
                'customerIds[]': customerIds
            });
        }
        /**
         * Set the 'orgIds' optional parameter
         * @method
         * @name getMetricsApiParameters#orgIds
         */
        orgIds(orgIds:
            Array < number
            >
        ): getMetricsApiParameters {
            return this.query({
                'orgIds[]': orgIds
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getMetricsApiParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getMetricsApiParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getMetricsApiParameters#from
         */
        from(from: string
        ): getMetricsApiParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getMetricsApiParameters#to
         */
        to(to: string
        ): getMetricsApiParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetricsApiParameters#pageSize
         */
        pageSize(pageSize: number
        ): getMetricsApiParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getMetricsApiParameters#nextPage
         */
        nextPage(nextPage: string
        ): getMetricsApiParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'agg' optional parameter
         * @method
         * @name getMetricsApiParameters#agg
         */
        agg(agg: "account" | "org"
        ): getMetricsApiParameters {
            return this.query({
                'agg': agg
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getMetricsApiParameters#interval
         */
        interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"
        ): getMetricsApiParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'emptyIntervals' optional parameter
         * @method
         * @name getMetricsApiParameters#emptyIntervals
         */
        emptyIntervals(emptyIntervals: boolean
        ): getMetricsApiParameters {
            return this.query({
                'emptyIntervals': emptyIntervals
            });
        }
    }
class getMetricsBulkJobsParameters extends platformSDKMethodParameters <
    Array <
    BulkMetrics
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'customerIds' optional parameter
         * @method
         * @name getMetricsBulkJobsParameters#customerIds
         */
        customerIds(customerIds:
            Array < number
            >
        ): getMetricsBulkJobsParameters {
            return this.query({
                'customerIds[]': customerIds
            });
        }
        /**
         * Set the 'orgIds' optional parameter
         * @method
         * @name getMetricsBulkJobsParameters#orgIds
         */
        orgIds(orgIds:
            Array < number
            >
        ): getMetricsBulkJobsParameters {
            return this.query({
                'orgIds[]': orgIds
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getMetricsBulkJobsParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getMetricsBulkJobsParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getMetricsBulkJobsParameters#from
         */
        from(from: string
        ): getMetricsBulkJobsParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getMetricsBulkJobsParameters#to
         */
        to(to: string
        ): getMetricsBulkJobsParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetricsBulkJobsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getMetricsBulkJobsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getMetricsBulkJobsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getMetricsBulkJobsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'agg' optional parameter
         * @method
         * @name getMetricsBulkJobsParameters#agg
         */
        agg(agg: "account" | "org"
        ): getMetricsBulkJobsParameters {
            return this.query({
                'agg': agg
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getMetricsBulkJobsParameters#interval
         */
        interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"
        ): getMetricsBulkJobsParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'emptyIntervals' optional parameter
         * @method
         * @name getMetricsBulkJobsParameters#emptyIntervals
         */
        emptyIntervals(emptyIntervals: boolean
        ): getMetricsBulkJobsParameters {
            return this.query({
                'emptyIntervals': emptyIntervals
            });
        }
    }
class getMetricsElementInstancesCreatedParameters extends platformSDKMethodParameters <
    Array <
    ElementInstancesCreatedMetrics
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'customerIds' optional parameter
         * @method
         * @name getMetricsElementInstancesCreatedParameters#customerIds
         */
        customerIds(customerIds:
            Array < number
            >
        ): getMetricsElementInstancesCreatedParameters {
            return this.query({
                'customerIds[]': customerIds
            });
        }
        /**
         * Set the 'orgIds' optional parameter
         * @method
         * @name getMetricsElementInstancesCreatedParameters#orgIds
         */
        orgIds(orgIds:
            Array < number
            >
        ): getMetricsElementInstancesCreatedParameters {
            return this.query({
                'orgIds[]': orgIds
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getMetricsElementInstancesCreatedParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getMetricsElementInstancesCreatedParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getMetricsElementInstancesCreatedParameters#from
         */
        from(from: string
        ): getMetricsElementInstancesCreatedParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getMetricsElementInstancesCreatedParameters#to
         */
        to(to: string
        ): getMetricsElementInstancesCreatedParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetricsElementInstancesCreatedParameters#pageSize
         */
        pageSize(pageSize: number
        ): getMetricsElementInstancesCreatedParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getMetricsElementInstancesCreatedParameters#nextPage
         */
        nextPage(nextPage: string
        ): getMetricsElementInstancesCreatedParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'agg' optional parameter
         * @method
         * @name getMetricsElementInstancesCreatedParameters#agg
         */
        agg(agg: "account" | "org"
        ): getMetricsElementInstancesCreatedParameters {
            return this.query({
                'agg': agg
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getMetricsElementInstancesCreatedParameters#interval
         */
        interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"
        ): getMetricsElementInstancesCreatedParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'emptyIntervals' optional parameter
         * @method
         * @name getMetricsElementInstancesCreatedParameters#emptyIntervals
         */
        emptyIntervals(emptyIntervals: boolean
        ): getMetricsElementInstancesCreatedParameters {
            return this.query({
                'emptyIntervals': emptyIntervals
            });
        }
    }
class getMetricsElementsCreatedParameters extends platformSDKMethodParameters <
    Array <
    Metrics
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'customerIds' optional parameter
         * @method
         * @name getMetricsElementsCreatedParameters#customerIds
         */
        customerIds(customerIds:
            Array < number
            >
        ): getMetricsElementsCreatedParameters {
            return this.query({
                'customerIds[]': customerIds
            });
        }
        /**
         * Set the 'orgIds' optional parameter
         * @method
         * @name getMetricsElementsCreatedParameters#orgIds
         */
        orgIds(orgIds:
            Array < number
            >
        ): getMetricsElementsCreatedParameters {
            return this.query({
                'orgIds[]': orgIds
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getMetricsElementsCreatedParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getMetricsElementsCreatedParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getMetricsElementsCreatedParameters#from
         */
        from(from: string
        ): getMetricsElementsCreatedParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getMetricsElementsCreatedParameters#to
         */
        to(to: string
        ): getMetricsElementsCreatedParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetricsElementsCreatedParameters#pageSize
         */
        pageSize(pageSize: number
        ): getMetricsElementsCreatedParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getMetricsElementsCreatedParameters#nextPage
         */
        nextPage(nextPage: string
        ): getMetricsElementsCreatedParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'agg' optional parameter
         * @method
         * @name getMetricsElementsCreatedParameters#agg
         */
        agg(agg: "account" | "org"
        ): getMetricsElementsCreatedParameters {
            return this.query({
                'agg': agg
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getMetricsElementsCreatedParameters#interval
         */
        interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"
        ): getMetricsElementsCreatedParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'emptyIntervals' optional parameter
         * @method
         * @name getMetricsElementsCreatedParameters#emptyIntervals
         */
        emptyIntervals(emptyIntervals: boolean
        ): getMetricsElementsCreatedParameters {
            return this.query({
                'emptyIntervals': emptyIntervals
            });
        }
    }
class getMetricsEventsParameters extends platformSDKMethodParameters <
    Array <
    Metrics
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'customerIds' optional parameter
         * @method
         * @name getMetricsEventsParameters#customerIds
         */
        customerIds(customerIds:
            Array < number
            >
        ): getMetricsEventsParameters {
            return this.query({
                'customerIds[]': customerIds
            });
        }
        /**
         * Set the 'orgIds' optional parameter
         * @method
         * @name getMetricsEventsParameters#orgIds
         */
        orgIds(orgIds:
            Array < number
            >
        ): getMetricsEventsParameters {
            return this.query({
                'orgIds[]': orgIds
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getMetricsEventsParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getMetricsEventsParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getMetricsEventsParameters#from
         */
        from(from: string
        ): getMetricsEventsParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getMetricsEventsParameters#to
         */
        to(to: string
        ): getMetricsEventsParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetricsEventsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getMetricsEventsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getMetricsEventsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getMetricsEventsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'agg' optional parameter
         * @method
         * @name getMetricsEventsParameters#agg
         */
        agg(agg: "account" | "org"
        ): getMetricsEventsParameters {
            return this.query({
                'agg': agg
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getMetricsEventsParameters#interval
         */
        interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"
        ): getMetricsEventsParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'emptyIntervals' optional parameter
         * @method
         * @name getMetricsEventsParameters#emptyIntervals
         */
        emptyIntervals(emptyIntervals: boolean
        ): getMetricsEventsParameters {
            return this.query({
                'emptyIntervals': emptyIntervals
            });
        }
    }
class getMetricsFormulaExecutionsParameters extends platformSDKMethodParameters <
    Array <
    Metrics
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'customerIds' optional parameter
         * @method
         * @name getMetricsFormulaExecutionsParameters#customerIds
         */
        customerIds(customerIds:
            Array < number
            >
        ): getMetricsFormulaExecutionsParameters {
            return this.query({
                'customerIds[]': customerIds
            });
        }
        /**
         * Set the 'orgIds' optional parameter
         * @method
         * @name getMetricsFormulaExecutionsParameters#orgIds
         */
        orgIds(orgIds:
            Array < number
            >
        ): getMetricsFormulaExecutionsParameters {
            return this.query({
                'orgIds[]': orgIds
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getMetricsFormulaExecutionsParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getMetricsFormulaExecutionsParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getMetricsFormulaExecutionsParameters#from
         */
        from(from: string
        ): getMetricsFormulaExecutionsParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getMetricsFormulaExecutionsParameters#to
         */
        to(to: string
        ): getMetricsFormulaExecutionsParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetricsFormulaExecutionsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getMetricsFormulaExecutionsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getMetricsFormulaExecutionsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getMetricsFormulaExecutionsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'agg' optional parameter
         * @method
         * @name getMetricsFormulaExecutionsParameters#agg
         */
        agg(agg: "account" | "org"
        ): getMetricsFormulaExecutionsParameters {
            return this.query({
                'agg': agg
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getMetricsFormulaExecutionsParameters#interval
         */
        interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"
        ): getMetricsFormulaExecutionsParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'emptyIntervals' optional parameter
         * @method
         * @name getMetricsFormulaExecutionsParameters#emptyIntervals
         */
        emptyIntervals(emptyIntervals: boolean
        ): getMetricsFormulaExecutionsParameters {
            return this.query({
                'emptyIntervals': emptyIntervals
            });
        }
    }
class getMetricsFormulasCreatedParameters extends platformSDKMethodParameters <
    Array <
    Metrics
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'customerIds' optional parameter
         * @method
         * @name getMetricsFormulasCreatedParameters#customerIds
         */
        customerIds(customerIds:
            Array < number
            >
        ): getMetricsFormulasCreatedParameters {
            return this.query({
                'customerIds[]': customerIds
            });
        }
        /**
         * Set the 'orgIds' optional parameter
         * @method
         * @name getMetricsFormulasCreatedParameters#orgIds
         */
        orgIds(orgIds:
            Array < number
            >
        ): getMetricsFormulasCreatedParameters {
            return this.query({
                'orgIds[]': orgIds
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getMetricsFormulasCreatedParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getMetricsFormulasCreatedParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getMetricsFormulasCreatedParameters#from
         */
        from(from: string
        ): getMetricsFormulasCreatedParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getMetricsFormulasCreatedParameters#to
         */
        to(to: string
        ): getMetricsFormulasCreatedParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetricsFormulasCreatedParameters#pageSize
         */
        pageSize(pageSize: number
        ): getMetricsFormulasCreatedParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getMetricsFormulasCreatedParameters#nextPage
         */
        nextPage(nextPage: string
        ): getMetricsFormulasCreatedParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'agg' optional parameter
         * @method
         * @name getMetricsFormulasCreatedParameters#agg
         */
        agg(agg: "account" | "org"
        ): getMetricsFormulasCreatedParameters {
            return this.query({
                'agg': agg
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getMetricsFormulasCreatedParameters#interval
         */
        interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"
        ): getMetricsFormulasCreatedParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'emptyIntervals' optional parameter
         * @method
         * @name getMetricsFormulasCreatedParameters#emptyIntervals
         */
        emptyIntervals(emptyIntervals: boolean
        ): getMetricsFormulasCreatedParameters {
            return this.query({
                'emptyIntervals': emptyIntervals
            });
        }
    }
class getMetricsHubApiParameters extends platformSDKMethodParameters <
    Array <
    HubMetrics
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'customerIds' optional parameter
         * @method
         * @name getMetricsHubApiParameters#customerIds
         */
        customerIds(customerIds:
            Array < number
            >
        ): getMetricsHubApiParameters {
            return this.query({
                'customerIds[]': customerIds
            });
        }
        /**
         * Set the 'orgIds' optional parameter
         * @method
         * @name getMetricsHubApiParameters#orgIds
         */
        orgIds(orgIds:
            Array < number
            >
        ): getMetricsHubApiParameters {
            return this.query({
                'orgIds[]': orgIds
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getMetricsHubApiParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getMetricsHubApiParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getMetricsHubApiParameters#from
         */
        from(from: string
        ): getMetricsHubApiParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getMetricsHubApiParameters#to
         */
        to(to: string
        ): getMetricsHubApiParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetricsHubApiParameters#pageSize
         */
        pageSize(pageSize: number
        ): getMetricsHubApiParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getMetricsHubApiParameters#nextPage
         */
        nextPage(nextPage: string
        ): getMetricsHubApiParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'agg' optional parameter
         * @method
         * @name getMetricsHubApiParameters#agg
         */
        agg(agg: "account" | "org"
        ): getMetricsHubApiParameters {
            return this.query({
                'agg': agg
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getMetricsHubApiParameters#interval
         */
        interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"
        ): getMetricsHubApiParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'emptyIntervals' optional parameter
         * @method
         * @name getMetricsHubApiParameters#emptyIntervals
         */
        emptyIntervals(emptyIntervals: boolean
        ): getMetricsHubApiParameters {
            return this.query({
                'emptyIntervals': emptyIntervals
            });
        }
    }
class getMetricsHubsCreatedParameters extends platformSDKMethodParameters <
    Array <
    HubMetrics
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'customerIds' optional parameter
         * @method
         * @name getMetricsHubsCreatedParameters#customerIds
         */
        customerIds(customerIds:
            Array < number
            >
        ): getMetricsHubsCreatedParameters {
            return this.query({
                'customerIds[]': customerIds
            });
        }
        /**
         * Set the 'orgIds' optional parameter
         * @method
         * @name getMetricsHubsCreatedParameters#orgIds
         */
        orgIds(orgIds:
            Array < number
            >
        ): getMetricsHubsCreatedParameters {
            return this.query({
                'orgIds[]': orgIds
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getMetricsHubsCreatedParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getMetricsHubsCreatedParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getMetricsHubsCreatedParameters#from
         */
        from(from: string
        ): getMetricsHubsCreatedParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getMetricsHubsCreatedParameters#to
         */
        to(to: string
        ): getMetricsHubsCreatedParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetricsHubsCreatedParameters#pageSize
         */
        pageSize(pageSize: number
        ): getMetricsHubsCreatedParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getMetricsHubsCreatedParameters#nextPage
         */
        nextPage(nextPage: string
        ): getMetricsHubsCreatedParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'agg' optional parameter
         * @method
         * @name getMetricsHubsCreatedParameters#agg
         */
        agg(agg: "account" | "org"
        ): getMetricsHubsCreatedParameters {
            return this.query({
                'agg': agg
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getMetricsHubsCreatedParameters#interval
         */
        interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"
        ): getMetricsHubsCreatedParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'emptyIntervals' optional parameter
         * @method
         * @name getMetricsHubsCreatedParameters#emptyIntervals
         */
        emptyIntervals(emptyIntervals: boolean
        ): getMetricsHubsCreatedParameters {
            return this.query({
                'emptyIntervals': emptyIntervals
            });
        }
    }
class getMetricsVdrsCreatedParameters extends platformSDKMethodParameters <
    Array <
    Metrics
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'customerIds' optional parameter
         * @method
         * @name getMetricsVdrsCreatedParameters#customerIds
         */
        customerIds(customerIds:
            Array < number
            >
        ): getMetricsVdrsCreatedParameters {
            return this.query({
                'customerIds[]': customerIds
            });
        }
        /**
         * Set the 'orgIds' optional parameter
         * @method
         * @name getMetricsVdrsCreatedParameters#orgIds
         */
        orgIds(orgIds:
            Array < number
            >
        ): getMetricsVdrsCreatedParameters {
            return this.query({
                'orgIds[]': orgIds
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getMetricsVdrsCreatedParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getMetricsVdrsCreatedParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getMetricsVdrsCreatedParameters#from
         */
        from(from: string
        ): getMetricsVdrsCreatedParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getMetricsVdrsCreatedParameters#to
         */
        to(to: string
        ): getMetricsVdrsCreatedParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetricsVdrsCreatedParameters#pageSize
         */
        pageSize(pageSize: number
        ): getMetricsVdrsCreatedParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getMetricsVdrsCreatedParameters#nextPage
         */
        nextPage(nextPage: string
        ): getMetricsVdrsCreatedParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'agg' optional parameter
         * @method
         * @name getMetricsVdrsCreatedParameters#agg
         */
        agg(agg: "account" | "org"
        ): getMetricsVdrsCreatedParameters {
            return this.query({
                'agg': agg
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getMetricsVdrsCreatedParameters#interval
         */
        interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"
        ): getMetricsVdrsCreatedParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'emptyIntervals' optional parameter
         * @method
         * @name getMetricsVdrsCreatedParameters#emptyIntervals
         */
        emptyIntervals(emptyIntervals: boolean
        ): getMetricsVdrsCreatedParameters {
            return this.query({
                'emptyIntervals': emptyIntervals
            });
        }
    }
class getMetricsVdrsInvokedParameters extends platformSDKMethodParameters <
    Array <
    Metrics
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'customerIds' optional parameter
         * @method
         * @name getMetricsVdrsInvokedParameters#customerIds
         */
        customerIds(customerIds:
            Array < number
            >
        ): getMetricsVdrsInvokedParameters {
            return this.query({
                'customerIds[]': customerIds
            });
        }
        /**
         * Set the 'orgIds' optional parameter
         * @method
         * @name getMetricsVdrsInvokedParameters#orgIds
         */
        orgIds(orgIds:
            Array < number
            >
        ): getMetricsVdrsInvokedParameters {
            return this.query({
                'orgIds[]': orgIds
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getMetricsVdrsInvokedParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getMetricsVdrsInvokedParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getMetricsVdrsInvokedParameters#from
         */
        from(from: string
        ): getMetricsVdrsInvokedParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getMetricsVdrsInvokedParameters#to
         */
        to(to: string
        ): getMetricsVdrsInvokedParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getMetricsVdrsInvokedParameters#pageSize
         */
        pageSize(pageSize: number
        ): getMetricsVdrsInvokedParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getMetricsVdrsInvokedParameters#nextPage
         */
        nextPage(nextPage: string
        ): getMetricsVdrsInvokedParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'agg' optional parameter
         * @method
         * @name getMetricsVdrsInvokedParameters#agg
         */
        agg(agg: "account" | "org"
        ): getMetricsVdrsInvokedParameters {
            return this.query({
                'agg': agg
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getMetricsVdrsInvokedParameters#interval
         */
        interval(interval: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year"
        ): getMetricsVdrsInvokedParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'emptyIntervals' optional parameter
         * @method
         * @name getMetricsVdrsInvokedParameters#emptyIntervals
         */
        emptyIntervals(emptyIntervals: boolean
        ): getMetricsVdrsInvokedParameters {
            return this.query({
                'emptyIntervals': emptyIntervals
            });
        }
    }
class createOrganizationParameters extends platformSDKMethodParameters <
    Organization_GET
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, organization:
            Organization_POST
        ) {
            super(superThis, method, _path);
            this.send(organization);
        }
    }
class deleteOrganizationsElementsTransformationsParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
        );
    }
}
class getOrganizationsElementsTransformationsParameters extends platformSDKMethodParameters <
    TransformationLibrary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
            );
        }
    }
class deleteOrganizationsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
        , objectName: string
    ) {
        super(superThis, method, _path
            .replace('{keyOrId}', `${keyOrId}`)
            .replace('{objectName}', `${objectName}`)
        );
    }
}
class getOrganizationsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , objectName: string
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{objectName}', `${objectName}`)
            );
        }
    }
class createOrganizationElementTransformationByObjectNameParameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , objectName: string
            , transformation:
            Transformation
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{objectName}', `${objectName}`)
            );
            this.send(transformation);
        }
    }
class replaceOrganizationsElementsTransformationByObjectNameParameters extends platformSDKMethodParameters <
    Transformation
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, keyOrId: string
            , objectName: string
            , transformation:
            Transformation
        ) {
            super(superThis, method, _path
                .replace('{keyOrId}', `${keyOrId}`)
                .replace('{objectName}', `${objectName}`)
            );
            this.send(transformation);
        }
    }
class getOrganizationsMeParameters extends platformSDKMethodParameters <
    Organization
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class replaceOrganizationsMeParameters extends platformSDKMethodParameters <
    User
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, body:
            Organization
        ) {
            super(superThis, method, _path);
            this.send(body);
        }
    }
class deleteOrganizationsObjectsDefinitionsParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string) {
        super(superThis, method, _path);
    }
}
class getOrganizationsObjectsDefinitionsParameters extends platformSDKMethodParameters <
    Dictionary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
    }
class createOrganizationObjectDefinitionParameters extends platformSDKMethodParameters <
    Dictionary
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, body:
            Dictionary
        ) {
            super(superThis, method, _path);
            this.send(body);
        }
    }
class deleteOrganizationsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, objectName: string
    ) {
        super(superThis, method, _path
            .replace('{objectName}', `${objectName}`)
        );
    }
}
class getOrganizationsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
        }
    }
class createOrganizationObjectObjectNameDefinitionParameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
            , body:
            Definition
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
            this.send(body);
        }
    }
class replaceOrganizationsObjectsObjectNameDefinitionsParameters extends platformSDKMethodParameters <
    Definition
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, objectName: string
            , body:
            Definition
        ) {
            super(superThis, method, _path
                .replace('{objectName}', `${objectName}`)
            );
            this.send(body);
        }
    }
class getOrganizationsUsersParameters extends platformSDKMethodParameters <
    Array <
    User
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getOrganizationsUsersParameters#where
         */
        where(where: string
        ): getOrganizationsUsersParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getOrganizationsUsersParameters#nextPage
         */
        nextPage(nextPage: string
        ): getOrganizationsUsersParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getOrganizationsUsersParameters#pageSize
         */
        pageSize(pageSize: number
        ): getOrganizationsUsersParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getOrganizationsUsersParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getOrganizationsUsersParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class createOrganizationUserParameters extends platformSDKMethodParameters <
    User
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, body:
            User
        ) {
            super(superThis, method, _path);
            this.send(body);
        }
    }
class getOrganizationsUserByEmailOrIdParameters extends platformSDKMethodParameters <
    User
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, emailOrId: string
        ) {
            super(superThis, method, _path
                .replace('{emailOrId}', `${emailOrId}`)
            );
        }
        /**
         * Set the 'elementsUserPassword' optional parameter
         * @method
         * @name getOrganizationsUserByEmailOrIdParameters#elementsUserPassword
         */
        elementsUserPassword(elementsUserPassword: string
        ): getOrganizationsUserByEmailOrIdParameters {
            return this.set('Elements-User-Password', 'elementsUserPassword');
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getOrganizationsUserByEmailOrIdParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getOrganizationsUserByEmailOrIdParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class deleteOrganizationsUserByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class updateOrganizationsUserByIdParameters extends platformSDKMethodParameters <
    User
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , body:
            User
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(body);
        }
        /**
         * Set the 'permanent' optional parameter
         * @method
         * @name updateOrganizationsUserByIdParameters#permanent
         */
        permanent(permanent: boolean
        ): updateOrganizationsUserByIdParameters {
            return this.query({
                'permanent': permanent
            });
        }
    }
class createOrganizationAccountParameters extends platformSDKMethodParameters <
    Account_GET
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , account:
            Account_POST
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(account);
        }
    }
class getOrganizationsAccountsParameters extends platformSDKMethodParameters <
    Array <
    Account_GET
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getOrganizationsAccountsParameters#nextPage
         */
        nextPage(nextPage: string
        ): getOrganizationsAccountsParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getOrganizationsAccountsParameters#pageSize
         */
        pageSize(pageSize: number
        ): getOrganizationsAccountsParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getOrganizationsAccountsParameters#where
         */
        where(where: string
        ): getOrganizationsAccountsParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getOrganizationsAccountsParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getOrganizationsAccountsParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class getOrganizationsAccountByAccountIdParameters extends platformSDKMethodParameters <
    Account_GET
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , accountId: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
                .replace('{accountId}', `${accountId}`)
            );
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getOrganizationsAccountByAccountIdParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getOrganizationsAccountByAccountIdParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class replaceOrganizationsStatusParameters extends platformSDKMethodParameters <
    Account_GET
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , status:
            OrganizationStatus_PUT
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(status);
        }
    }
class getUsageParameters extends platformSDKMethodParameters <
    Array <
    TrafficEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'hub' optional parameter
         * @method
         * @name getUsageParameters#hub
         */
        hub(hub: string
        ): getUsageParameters {
            return this.query({
                'hub': hub
            });
        }
        /**
         * Set the 'keys' optional parameter
         * @method
         * @name getUsageParameters#keys
         */
        keys(keys:
            Array < string
            >
        ): getUsageParameters {
            return this.query({
                'keys[]': keys
            });
        }
        /**
         * Set the 'tags' optional parameter
         * @method
         * @name getUsageParameters#tags
         */
        tags(tags:
            Array < string
            >
        ): getUsageParameters {
            return this.query({
                'tags[]': tags
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getUsageParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getUsageParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
        /**
         * Set the 'status' optional parameter
         * @method
         * @name getUsageParameters#status
         */
        status(status: "SUCCESS" | "FAILED"
        ): getUsageParameters {
            return this.query({
                'status': status
            });
        }
        /**
         * Set the 'from' optional parameter
         * @method
         * @name getUsageParameters#from
         */
        from(from: string
        ): getUsageParameters {
            return this.query({
                'from': from
            });
        }
        /**
         * Set the 'to' optional parameter
         * @method
         * @name getUsageParameters#to
         */
        to(to: string
        ): getUsageParameters {
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'searchText' optional parameter
         * @method
         * @name getUsageParameters#searchText
         */
        searchText(searchText: string
        ): getUsageParameters {
            return this.query({
                'searchText': searchText
            });
        }
        /**
         * Set the 'pageOffset' optional parameter
         * @method
         * @name getUsageParameters#pageOffset
         */
        pageOffset(pageOffset: number
        ): getUsageParameters {
            return this.query({
                'pageOffset': pageOffset
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getUsageParameters#pageSize
         */
        pageSize(pageSize: number
        ): getUsageParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getUsageParameters#nextPage
         */
        nextPage(nextPage: string
        ): getUsageParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
    }
class getUsageAnalyticsActivityParameters extends platformSDKMethodParameters <
    Array <
    ActivityEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, from: string
            , to: string
        ) {
            super(superThis, method, _path);
            return this.query({
                'from': from
            });
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getUsageAnalyticsActivityParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getUsageAnalyticsActivityParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getUsageAnalyticsActivityParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getUsageAnalyticsActivityParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getUsageAnalyticsActivityElementsParameters extends platformSDKMethodParameters <
    Array <
    ActivityElementEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, from: string
            , to: string
        ) {
            super(superThis, method, _path);
            return this.query({
                'from': from
            });
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getUsageAnalyticsActivityElementsParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getUsageAnalyticsActivityElementsParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getUsageAnalyticsActivityElementsParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getUsageAnalyticsActivityElementsParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getUsageAnalyticsStatusesParameters extends platformSDKMethodParameters <
    Array <
    StatusEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, from: string
            , to: string
        ) {
            super(superThis, method, _path);
            return this.query({
                'from': from
            });
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getUsageAnalyticsStatusesParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getUsageAnalyticsStatusesParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getUsageAnalyticsStatusesParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getUsageAnalyticsStatusesParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getUsageAnalyticsTimesParameters extends platformSDKMethodParameters <
    Array <
    TimesEntry
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, from: string
            , to: string
        ) {
            super(superThis, method, _path);
            return this.query({
                'from': from
            });
            return this.query({
                'to': to
            });
        }
        /**
         * Set the 'interval' optional parameter
         * @method
         * @name getUsageAnalyticsTimesParameters#interval
         */
        interval(interval: "year" | "quarter" | "month" | "week" | "day" | "hour" | "minute" | "second"
        ): getUsageAnalyticsTimesParameters {
            return this.query({
                'interval': interval
            });
        }
        /**
         * Set the 'accountIds' optional parameter
         * @method
         * @name getUsageAnalyticsTimesParameters#accountIds
         */
        accountIds(accountIds:
            Array < number
            >
        ): getUsageAnalyticsTimesParameters {
            return this.query({
                'accountIds[]': accountIds
            });
        }
    }
class getUsageByIdParameters extends platformSDKMethodParameters <
    TrafficEntry
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: string
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class getUsersParameters extends platformSDKMethodParameters <
    Array <
    User
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string) {
            super(superThis, method, _path);
        }
        /**
         * Set the 'where' optional parameter
         * @method
         * @name getUsersParameters#where
         */
        where(where: string
        ): getUsersParameters {
            return this.query({
                'where': where
            });
        }
        /**
         * Set the 'nextPage' optional parameter
         * @method
         * @name getUsersParameters#nextPage
         */
        nextPage(nextPage: string
        ): getUsersParameters {
            return this.query({
                'nextPage': nextPage
            });
        }
        /**
         * Set the 'pageSize' optional parameter
         * @method
         * @name getUsersParameters#pageSize
         */
        pageSize(pageSize: number
        ): getUsersParameters {
            return this.query({
                'pageSize': pageSize
            });
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getUsersParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getUsersParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class getUserByEmailOrIdParameters extends platformSDKMethodParameters <
    User
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, emailOrId: string
        ) {
            super(superThis, method, _path
                .replace('{emailOrId}', `${emailOrId}`)
            );
        }
        /**
         * Set the 'elementsUserPassword' optional parameter
         * @method
         * @name getUserByEmailOrIdParameters#elementsUserPassword
         */
        elementsUserPassword(elementsUserPassword: string
        ): getUserByEmailOrIdParameters {
            return this.set('Elements-User-Password', 'elementsUserPassword');
        }
        /**
         * Set the 'includeInactive' optional parameter
         * @method
         * @name getUserByEmailOrIdParameters#includeInactive
         */
        includeInactive(includeInactive: boolean
        ): getUserByEmailOrIdParameters {
            return this.query({
                'includeInactive': includeInactive
            });
        }
    }
class deleteUserByIdParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, id: number
    ) {
        super(superThis, method, _path
            .replace('{id}', `${id}`)
        );
    }
}
class updateUserByIdParameters extends platformSDKMethodParameters <
    User
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
            , body:
            User
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
            this.send(body);
        }
    }
class getUsersRolesParameters extends platformSDKMethodParameters <
    Array <
    Role
    >
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, id: number
        ) {
            super(superThis, method, _path
                .replace('{id}', `${id}`)
            );
        }
    }
class deleteUsersRoleByRoleKeyParameters extends platformSDKMethodParameters < > {
    constructor(superThis: platformSDK, method: string, _path: string, userId: number
        , roleKey: string
    ) {
        super(superThis, method, _path
            .replace('{userId}', `${userId}`)
            .replace('{roleKey}', `${roleKey}`)
        );
    }
}
class replaceUsersRoleByRoleKeyParameters extends platformSDKMethodParameters <
    Role
    >
    {
        constructor(superThis: platformSDK, method: string, _path: string, userId: number
            , roleKey: string
        ) {
            super(superThis, method, _path
                .replace('{userId}', `${userId}`)
                .replace('{roleKey}', `${roleKey}`)
            );
        }
    }