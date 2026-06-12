import type { INodeProperties } from 'n8n-workflow';

export const aowDateDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"AOW Date"
					]
				}
			},
			"options": [
				{
					"name": "Get Aow Date By Date Of Birth",
					"value": "Get Aow Date By Date Of Birth",
					"action": "Acquire the AOW date",
					"description": "__Activity name:__ GetAowDateByDateOfBirth\n\nThis endpoint allows the user to acquire the AOW date of an employee.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/aowDate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /aowDate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AOW Date"
					],
					"operation": [
						"Get Aow Date By Date Of Birth"
					]
				}
			}
		},
		{
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"required": true,
			"description": "The date of birth of the employee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dateOfBirth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AOW Date"
					],
					"operation": [
						"Get Aow Date By Date Of Birth"
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
						"AOW Date"
					],
					"operation": [
						"Get Aow Date By Date Of Birth"
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
						"AOW Date"
					],
					"operation": [
						"Get Aow Date By Date Of Birth"
					]
				}
			}
		},
];
