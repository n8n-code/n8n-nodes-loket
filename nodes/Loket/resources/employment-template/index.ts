import type { INodeProperties } from 'n8n-workflow';

export const employmentTemplateDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Template"
					]
				}
			},
			"options": [
				{
					"name": "Get Employment Templates By Employer ID",
					"value": "Get Employment Templates By Employer ID",
					"action": "Employment templates",
					"description": "__Activity name :__ GetEmploymentTemplatesByEmployerId\nGet the employment templates that are available at this employer's level. \n\nAn employment templates (werknemersjabloon) provides as predefined set of values for a new employment.  This is mostly when creating a new employee or employment as this allows the user to apply the template's values and augment this with any specific values.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employmenttemplates"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/employmenttemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employment Template"
					],
					"operation": [
						"Get Employment Templates By Employer ID"
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
						"Employment Template"
					],
					"operation": [
						"Get Employment Templates By Employer ID"
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
						"Employment Template"
					],
					"operation": [
						"Get Employment Templates By Employer ID"
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
						"Employment Template"
					],
					"operation": [
						"Get Employment Templates By Employer ID"
					]
				}
			}
		},
];
