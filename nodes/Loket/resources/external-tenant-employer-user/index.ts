import type { INodeProperties } from 'n8n-workflow';

export const externalTenantEmployerUserDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"External Tenant Employer User"
					]
				}
			},
			"options": [
				{
					"name": "Get Configured External Tenant By Employer User ID",
					"value": "Get Configured External Tenant By Employer User ID",
					"action": "Configured external tenant for an employer user",
					"description": "__Activity name :__ GetConfiguredExternalTenantByEmployerUserId\n\n\n Get the external tenant that is configured for this specific user. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/users/{{$parameter[\"employerUserId\"]}}/configuredexternaltenant"
						}
					}
				},
				{
					"name": "Patch Configured External Tenant By Employer User ID",
					"value": "Patch Configured External Tenant By Employer User ID",
					"action": "Add an external tenant for an employer user",
					"description": "__Activity name :__ PatchConfiguredExternalTenantByEmployerUserId\n\n__Metadata :__  N/A.\n\n__Defaults :__ N/A.\n\nModify an external tenant to the list of an configured external tenants for an employer user.\nAn configured external tenant may be removed by sending a request body with both an empty externalTenant object and an empty externalUser object.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/users/{{$parameter[\"employerUserId\"]}}/configuredexternaltenant"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/users/{employerUserId}/configuredexternaltenant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External Tenant Employer User"
					],
					"operation": [
						"Get Configured External Tenant By Employer User ID"
					]
				}
			}
		},
		{
			"displayName": "Employer User ID",
			"name": "employerUserId",
			"required": true,
			"description": "The unique identifier of a employer user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"External Tenant Employer User"
					],
					"operation": [
						"Get Configured External Tenant By Employer User ID"
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
						"External Tenant Employer User"
					],
					"operation": [
						"Get Configured External Tenant By Employer User ID"
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
						"External Tenant Employer User"
					],
					"operation": [
						"Get Configured External Tenant By Employer User ID"
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
						"External Tenant Employer User"
					],
					"operation": [
						"Get Configured External Tenant By Employer User ID"
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
						"External Tenant Employer User"
					],
					"operation": [
						"Get Configured External Tenant By Employer User ID"
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
						"External Tenant Employer User"
					],
					"operation": [
						"Get Configured External Tenant By Employer User ID"
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
						"External Tenant Employer User"
					],
					"operation": [
						"Get Configured External Tenant By Employer User ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/users/{employerUserId}/configuredexternaltenant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External Tenant Employer User"
					],
					"operation": [
						"Patch Configured External Tenant By Employer User ID"
					]
				}
			}
		},
		{
			"displayName": "Employer User ID",
			"name": "employerUserId",
			"required": true,
			"description": "The unique identifier of a employer user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"External Tenant Employer User"
					],
					"operation": [
						"Patch Configured External Tenant By Employer User ID"
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
						"External Tenant Employer User"
					],
					"operation": [
						"Patch Configured External Tenant By Employer User ID"
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
						"External Tenant Employer User"
					],
					"operation": [
						"Patch Configured External Tenant By Employer User ID"
					]
				}
			}
		},
		{
			"displayName": "External Tenant",
			"name": "externalTenant",
			"type": "json",
			"default": "{\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"name\": \"Loket tenant\"\n}",
			"routing": {
				"send": {
					"property": "externalTenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"External Tenant Employer User"
					],
					"operation": [
						"Patch Configured External Tenant By Employer User ID"
					]
				}
			}
		},
		{
			"displayName": "External User",
			"name": "externalUser",
			"type": "json",
			"default": "{\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"routing": {
				"send": {
					"property": "externalUser",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"External Tenant Employer User"
					],
					"operation": [
						"Patch Configured External Tenant By Employer User ID"
					]
				}
			}
		},
];
