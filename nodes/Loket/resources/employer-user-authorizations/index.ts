import type { INodeProperties } from 'n8n-workflow';

export const employerUserAuthorizationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					]
				}
			},
			"options": [
				{
					"name": "Get Employer User Authorizations By Employer ID And User ID",
					"value": "Get Employer User Authorizations By Employer ID And User ID",
					"action": "The authorizations for the user",
					"description": "__Activity name :__ GetEmployerUserAuthorizationsByEmployerIdAndUserId \n\n\n List the available authorizations for the user - employer combination. Note that the employer user can have a different set of authorizations per employer.\n\n\n =============== This endpoint is not yet available ===============\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/users/{{$parameter[\"userId\"]}}/authorizations"
						}
					}
				},
				{
					"name": "Patch Employer User Authorizations By User ID",
					"value": "Patch Employer User Authorizations By User ID",
					"action": "Manage the employer user authorizations",
					"description": "__Activity name :__ PatchEmployerUserAuthorizationsByUserId\n\nManage the employer user authorizations and `authorizationSet`.\n\n\nOnly the changes supplied are processed existing records not supplied in the request body will be left unchanged.  e.g. If three authorizations are enabled for the user and a patch is performed with in the body one new authorization with the `isEnabled` = true. The result will be that the user has 4 enabled authorizations.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/users/{{$parameter[\"userId\"]}}/authorizations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/users/{userId}/authorizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Get Employer User Authorizations By Employer ID And User ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of an employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Get Employer User Authorizations By Employer ID And User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "The unique identifier of an user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Get Employer User Authorizations By Employer ID And User ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Get Employer User Authorizations By Employer ID And User ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Get Employer User Authorizations By Employer ID And User ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Get Employer User Authorizations By Employer ID And User ID"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"description": "Order the collection on one or more fields",
			"default": "-companyName,address.houseNumber",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Get Employer User Authorizations By Employer ID And User ID"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Specifies which page should be returned",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Get Employer User Authorizations By Employer ID And User ID"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Specifies the number of objects per page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Get Employer User Authorizations By Employer ID And User ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/{employerId}/users/{userId}/authorizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Patch Employer User Authorizations By User ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of an employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Patch Employer User Authorizations By User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "The unique identifier of an user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Patch Employer User Authorizations By User ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Patch Employer User Authorizations By User ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Patch Employer User Authorizations By User ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization Set",
			"name": "authorizationSet",
			"type": "json",
			"default": "{\n  \"description\": \"HR Gebruiker\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"routing": {
				"send": {
					"property": "authorizationSet",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Patch Employer User Authorizations By User ID"
					]
				}
			}
		},
		{
			"displayName": "Authorizations",
			"name": "authorizations",
			"type": "json",
			"default": "[\n  {\n    \"availableForEmployerUser\": true,\n    \"description\": \"Beheren dienstverbanden\",\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n  }\n]",
			"routing": {
				"send": {
					"property": "authorizations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer User Authorizations"
					],
					"operation": [
						"Patch Employer User Authorizations By User ID"
					]
				}
			}
		},
];
