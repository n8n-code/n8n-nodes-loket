import type { INodeProperties } from 'n8n-workflow';

export const collectiveLeaveDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Leave"
					]
				}
			},
			"options": [
				{
					"name": "Post Collective Leave By Employer ID",
					"value": "Post Collective Leave By Employer ID",
					"action": "Post leave for multiple employments.",
					"description": "__Activity name:__ PostCollectiveLeaveByEmployerId\n\nPost leave for a set of employments under an employer.\n\n__Metadata :__ There is no metadata endpoint for this resource.\n\n__Defaults :__ Defaults are available at /defaults.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/leave"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/{employerId}/leave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Leave"
					],
					"operation": [
						"Post Collective Leave By Employer ID"
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
						"Collective Leave"
					],
					"operation": [
						"Post Collective Leave By Employer ID"
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
						"Collective Leave"
					],
					"operation": [
						"Post Collective Leave By Employer ID"
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
						"Collective Leave"
					],
					"operation": [
						"Post Collective Leave By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": {
				"comments": "This leave is added.",
				"employmentId": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
				"endDate": "2022-10-22",
				"isAccrual": true,
				"leaveType": 1,
				"numberOfUnits": 4.5,
				"startDate": "2022-10-21"
			},
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Leave"
					],
					"operation": [
						"Post Collective Leave By Employer ID"
					]
				}
			}
		},
];
