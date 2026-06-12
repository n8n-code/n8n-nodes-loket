import type { INodeProperties } from 'n8n-workflow';

export const chamberOfCommerceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chamber Of Commerce"
					]
				}
			},
			"options": [
				{
					"name": "Get Company Information By Chamber Of Commerce Number",
					"value": "Get Company Information By Chamber Of Commerce Number",
					"action": "Acquire company information",
					"description": "__Activity name:__ GetCompanyInformationByChamberOfCommerceNumber\n\nThis endpoint allows the user to acquire basic company information for a specific chamber of commerce number.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chamberofcommerce/{{$parameter[\"chamberOfCommerceNumber\"]}}/companyinformation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /chamberofcommerce/{chamberOfCommerceNumber}/companyinformation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chamber Of Commerce"
					],
					"operation": [
						"Get Company Information By Chamber Of Commerce Number"
					]
				}
			}
		},
		{
			"displayName": "Chamber Of Commerce Number",
			"name": "chamberOfCommerceNumber",
			"required": true,
			"description": "The unique identifier of the kvk (8 numbers)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chamber Of Commerce"
					],
					"operation": [
						"Get Company Information By Chamber Of Commerce Number"
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
						"Chamber Of Commerce"
					],
					"operation": [
						"Get Company Information By Chamber Of Commerce Number"
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
						"Chamber Of Commerce"
					],
					"operation": [
						"Get Company Information By Chamber Of Commerce Number"
					]
				}
			}
		},
];
