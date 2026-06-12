import type { INodeProperties } from 'n8n-workflow';

export const externalTenantDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"External Tenant"
					]
				}
			},
			"options": [
				{
					"name": "Get External Tenants By Employer ID",
					"value": "Get External Tenants By Employer ID",
					"action": "Get available external tenants (employer scope)",
					"description": "__Activity name:__ GetExternalTenantsByEmployerId\n    \n\nGet a list of external tenants that are available within the scope of this employer.\nAn external tenant may be registered for a Loket user, and may be used to login to Loket using Azure Active Directory. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/externaltenants"
						}
					}
				},
				{
					"name": "Get External Tenants By Provider ID",
					"value": "Get External Tenants By Provider ID",
					"action": "Get available external tenants (provider scope)",
					"description": "__Activity name:__ GetExternalTenantsByProviderId\n    \n\nGet a list of external tenants that are available within the scope of this provider.\nAn external tenant may be registered for a Loket user, and may be used to login to Loket using Azure Active Directory. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/externaltenants"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/externaltenants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External Tenant"
					],
					"operation": [
						"Get External Tenants By Employer ID"
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
						"External Tenant"
					],
					"operation": [
						"Get External Tenants By Employer ID"
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
						"External Tenant"
					],
					"operation": [
						"Get External Tenants By Employer ID"
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
						"External Tenant"
					],
					"operation": [
						"Get External Tenants By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/{providerId}/externaltenants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External Tenant"
					],
					"operation": [
						"Get External Tenants By Provider ID"
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
						"External Tenant"
					],
					"operation": [
						"Get External Tenants By Provider ID"
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
						"External Tenant"
					],
					"operation": [
						"Get External Tenants By Provider ID"
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
						"External Tenant"
					],
					"operation": [
						"Get External Tenants By Provider ID"
					]
				}
			}
		},
];
