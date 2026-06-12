import type { INodeProperties } from 'n8n-workflow';

export const employeeSelfServiceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Self Service"
					]
				}
			},
			"options": [
				{
					"name": "Patch Employee Self Service Access By Employee ID",
					"value": "Patch Employee Self Service Access By Employee ID",
					"action": "Change the employee's self service (ESS) access",
					"description": "__Activity name :__ PatchEmployeeSelfServiceAccessByEmployeeId\n\nThis endpoint allows the user to change the status of access for the employee's to ESS (Werknemer.loket).\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/selfservice"
						}
					}
				},
				{
					"name": "Get Employee Self Service By Employee ID",
					"value": "Get Employee Self Service By Employee ID",
					"action": "Details of and employees self service portal status",
					"description": "__Activity name :__ GetEmployeeSelfServiceByEmployeeId\n\nGet the details of an employee with regards to ESS access\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/selfservice"
						}
					}
				},
				{
					"name": "Get Employee Self Service By Employer ID",
					"value": "Get Employee Self Service By Employer ID",
					"action": "List of employee's and their ESS (WNL) status",
					"description": "__Activity name :__ GetEmployeeSelfServiceByEmployerId\n\nGet a list of all the employee's and their status regarding to ESS (werknemer.loket).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employees/selfservice"
						}
					}
				},
				{
					"name": "Patch Employee Self Service Access By Employer ID",
					"value": "Patch Employee Self Service Access By Employer ID",
					"action": "Change the ESS access for several employees",
					"description": "__Activity name :__ PatchEmployeeSelfServiceAccessByEmployerId\n\nThis endpoint allows the user to change the status of access to ESS for several employees of the employer.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employees/selfservice"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /providers/employers/employees/selfservice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Self Service"
					],
					"operation": [
						"Patch Employee Self Service Access By Employee ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Patch Employee Self Service Access By Employee ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Patch Employee Self Service Access By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": {
				"employeeId": "b14acd0d-75d7-4fc8-8b22-4a3924585cab"
			},
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Self Service"
					],
					"operation": [
						"Patch Employee Self Service Access By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/selfservice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employee ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employee ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employee ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employee ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employee ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employee ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/employees/selfservice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employer ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employer ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employer ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employer ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employer ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employer ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Get Employee Self Service By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/{employerId}/employees/selfservice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Self Service"
					],
					"operation": [
						"Patch Employee Self Service Access By Employer ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Patch Employee Self Service Access By Employer ID"
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
						"Employee Self Service"
					],
					"operation": [
						"Patch Employee Self Service Access By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Self Service"
					],
					"operation": [
						"Patch Employee Self Service Access By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": {
				"employeeId": "b14acd0d-75d7-4fc8-8b22-4a3924585cab"
			},
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employee Self Service"
					],
					"operation": [
						"Patch Employee Self Service Access By Employer ID"
					]
				}
			}
		},
];
