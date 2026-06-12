import type { INodeProperties } from 'n8n-workflow';

export const activateEmployeeProfileDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Activate Employee Profile"
					]
				}
			},
			"options": [
				{
					"name": "Patch Employee Profile By Employment ID",
					"value": "Patch Employee Profile By Employment ID",
					"action": "Activate employee profile for the employment",
					"description": "__Activity name :__ PatchEmployeeProfileByEmploymentId\n\nCreate Fondsen, Grondslagen and toeslagen based on the employment's employeeProfile.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/employeeprofile"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /providers/employers/employees/employments/{employmentId}/employeeprofile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activate Employee Profile"
					],
					"operation": [
						"Patch Employee Profile By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Activate Employee Profile"
					],
					"operation": [
						"Patch Employee Profile By Employment ID"
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
						"Activate Employee Profile"
					],
					"operation": [
						"Patch Employee Profile By Employment ID"
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
						"Activate Employee Profile"
					],
					"operation": [
						"Patch Employee Profile By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Activation Date",
			"name": "activationDate",
			"type": "string",
			"default": "2021-01-01",
			"description": "The date on which the profile should be activated.",
			"routing": {
				"send": {
					"property": "activationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activate Employee Profile"
					],
					"operation": [
						"Patch Employee Profile By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employee Profile ID",
			"name": "employeeProfileId",
			"type": "number",
			"default": 1,
			"description": "The Id of the employeeProfile. If not provided, the employeeProfile which is set at employment level, is used.",
			"routing": {
				"send": {
					"property": "employeeProfileId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activate Employee Profile"
					],
					"operation": [
						"Patch Employee Profile By Employment ID"
					]
				}
			}
		},
];
