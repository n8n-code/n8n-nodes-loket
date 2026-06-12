import type { INodeProperties } from 'n8n-workflow';

export const collectiveWageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Wage"
					]
				}
			},
			"options": [
				{
					"name": "Post Collective Wage By Employer ID",
					"value": "Post Collective Wage By Employer ID",
					"action": "Create wages for multiple employments",
					"description": "__Activity name :__ PostCollectiveWageByEmployerId\n\nCreate new grosswage records for multiple employments of an employer\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employees/employments/wages"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/{employerId}/employees/employments/wages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Wage"
					],
					"operation": [
						"Post Collective Wage By Employer ID"
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
						"Collective Wage"
					],
					"operation": [
						"Post Collective Wage By Employer ID"
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
						"Collective Wage"
					],
					"operation": [
						"Post Collective Wage By Employer ID"
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
						"Collective Wage"
					],
					"operation": [
						"Post Collective Wage By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)\n",
			"routing": {
				"send": {
					"property": "employmentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Wage"
					],
					"operation": [
						"Post Collective Wage By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Gross Wage",
			"name": "grossWage",
			"type": "number",
			"default": 2300,
			"description": "The gross wage for the employee\n",
			"routing": {
				"send": {
					"property": "grossWage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Wage"
					],
					"operation": [
						"Post Collective Wage By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "1995-05-21",
			"description": "The start date for the information in the record.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.\n__Note__ It is posible to have no wage record.\n",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Wage"
					],
					"operation": [
						"Post Collective Wage By Employer ID"
					]
				}
			}
		},
];
