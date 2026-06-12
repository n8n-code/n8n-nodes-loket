import type { INodeProperties } from 'n8n-workflow';

export const linkedDepartmentsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Linked Departments"
					]
				}
			},
			"options": [
				{
					"name": "Get Employer Users Linked Departments By Employer ID",
					"value": "Get Employer Users Linked Departments By Employer ID",
					"action": "Get the list of departments that the user has access to",
					"description": "__Activity name:__ GetEmployerUsersLinkedDepartmentsByEmployerId\n\nGet the list of departments that the user has access to\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/users/departments"
						}
					}
				},
				{
					"name": "Patch Employer User Linked Departments By Employer ID And User ID",
					"value": "Patch Employer User Linked Departments By Employer ID And User ID",
					"action": "Link or unlink departments from an user.",
					"description": "__Activity name:__ PatchEmployerUserLinkedDepartmentsByEmployerIdAndUserId\n\nThis endpoint enables the user to link or unlink multiple 'linkages' with one call.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/users/{{$parameter[\"userId\"]}}/departments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/users/departments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linked Departments"
					],
					"operation": [
						"Get Employer Users Linked Departments By Employer ID"
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
						"Linked Departments"
					],
					"operation": [
						"Get Employer Users Linked Departments By Employer ID"
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
						"Linked Departments"
					],
					"operation": [
						"Get Employer Users Linked Departments By Employer ID"
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
						"Linked Departments"
					],
					"operation": [
						"Get Employer Users Linked Departments By Employer ID"
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
						"Linked Departments"
					],
					"operation": [
						"Get Employer Users Linked Departments By Employer ID"
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
						"Linked Departments"
					],
					"operation": [
						"Get Employer Users Linked Departments By Employer ID"
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
						"Linked Departments"
					],
					"operation": [
						"Get Employer Users Linked Departments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/{employerId}/users/{userId}/departments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Linked Departments"
					],
					"operation": [
						"Patch Employer User Linked Departments By Employer ID And User ID"
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
						"Linked Departments"
					],
					"operation": [
						"Patch Employer User Linked Departments By Employer ID And User ID"
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
						"Linked Departments"
					],
					"operation": [
						"Patch Employer User Linked Departments By Employer ID And User ID"
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
						"Linked Departments"
					],
					"operation": [
						"Patch Employer User Linked Departments By Employer ID And User ID"
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
						"Linked Departments"
					],
					"operation": [
						"Patch Employer User Linked Departments By Employer ID And User ID"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": {
				"departmentId": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
				"hasAccessToSubDepartments": false
			},
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Linked Departments"
					],
					"operation": [
						"Patch Employer User Linked Departments By Employer ID And User ID"
					]
				}
			}
		},
];
