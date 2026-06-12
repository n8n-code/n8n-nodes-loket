import type { INodeProperties } from 'n8n-workflow';

export const employeeBenefitsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Benefits"
					]
				}
			},
			"options": [
				{
					"name": "Get Benify URL By Employee ID",
					"value": "Get Benify URL By Employee ID",
					"action": "Get Benify URL for an employee",
					"description": "__Activity name :__ GetBenifyUrlByEmployeeId\n\nGet a URL to access the Benify portal for an employee.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/benifyurl"
						}
					}
				},
				{
					"name": "Get Yourcampus URL By User ID",
					"value": "Get Yourcampus URL By User ID",
					"action": "Get Yourcampus URL for a user",
					"description": "__Activity name :__ GetYourcampusUrlByUserId\n\nGet a URL to access the Yourcampus portal for a user\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userId\"]}}/yourcampusurl"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/benifyurl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Benefits"
					],
					"operation": [
						"Get Benify URL By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Benefits"
					],
					"operation": [
						"Get Benify URL By Employee ID"
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
						"Employee Benefits"
					],
					"operation": [
						"Get Benify URL By Employee ID"
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
						"Employee Benefits"
					],
					"operation": [
						"Get Benify URL By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userId}/yourcampusurl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Benefits"
					],
					"operation": [
						"Get Yourcampus URL By User ID"
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
						"Employee Benefits"
					],
					"operation": [
						"Get Yourcampus URL By User ID"
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
						"Employee Benefits"
					],
					"operation": [
						"Get Yourcampus URL By User ID"
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
						"Employee Benefits"
					],
					"operation": [
						"Get Yourcampus URL By User ID"
					]
				}
			}
		},
];
