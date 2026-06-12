import type { INodeProperties } from 'n8n-workflow';

export const employerDashboardDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dashboard"
					]
				}
			},
			"options": [
				{
					"name": "Get Employer Dashboard By Employer ID",
					"value": "Get Employer Dashboard By Employer ID",
					"action": "Dashboard of an employer",
					"description": "__Activity name :__ GetEmployerDashboardByEmployerId\n\nGet the url for the Qlik dashboard for this employer.\nPlease note: the Qlik dashboard is only accessible for users with an assigned Qlik dashboard licenses.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/dashboard"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/dashboard",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dashboard"
					],
					"operation": [
						"Get Employer Dashboard By Employer ID"
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
						"Employer Dashboard"
					],
					"operation": [
						"Get Employer Dashboard By Employer ID"
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
						"Employer Dashboard"
					],
					"operation": [
						"Get Employer Dashboard By Employer ID"
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
						"Employer Dashboard"
					],
					"operation": [
						"Get Employer Dashboard By Employer ID"
					]
				}
			}
		},
];
