import type { INodeProperties } from 'n8n-workflow';

export const authorizationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authorizations"
					]
				}
			},
			"options": [
				{
					"name": "Get Authorizations By Employer ID",
					"value": "Get Authorizations By Employer ID",
					"action": "List of authorized activities with regard to the employer",
					"description": "__Activity name :__ GetAuthorizationsByEmployerId\n\nGet the array of activities the user is authenticated for with regard to the specified employer\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/authorizations"
						}
					}
				},
				{
					"name": "Get Authorizations By Provider ID",
					"value": "Get Authorizations By Provider ID",
					"action": "List of authorized activities with regard to the provider",
					"description": "__Activity name :__ GetAuthorizationsByProviderId\n\n\n\n\nGet the array of activities the user is authenticated for with regard to the specified provider. This endpoint is only accessible for providerusers.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/authorizations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/authorizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authorizations"
					],
					"operation": [
						"Get Authorizations By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of the employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Authorizations"
					],
					"operation": [
						"Get Authorizations By Employer ID"
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
						"Authorizations"
					],
					"operation": [
						"Get Authorizations By Employer ID"
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
						"Authorizations"
					],
					"operation": [
						"Get Authorizations By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/{providerId}/authorizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authorizations"
					],
					"operation": [
						"Get Authorizations By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Provider ID",
			"name": "providerId",
			"required": true,
			"description": "The unique identifier of a provider",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Authorizations"
					],
					"operation": [
						"Get Authorizations By Provider ID"
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
						"Authorizations"
					],
					"operation": [
						"Get Authorizations By Provider ID"
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
						"Authorizations"
					],
					"operation": [
						"Get Authorizations By Provider ID"
					]
				}
			}
		},
];
