import type { INodeProperties } from 'n8n-workflow';

export const departmentsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					]
				}
			},
			"options": [
				{
					"name": "Get Department By Department ID",
					"value": "Get Department By Department ID",
					"action": "Details of a department",
					"description": "__Activity name:__ GetDepartmentByDepartmentId\n\nGet the details of department\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/departments/{{$parameter[\"departmentId\"]}}"
						}
					}
				},
				{
					"name": "Put Department By Department ID",
					"value": "Put Department By Department ID",
					"action": "Edit the details of a department",
					"description": "__Activity name:__ PutDepartmentByDepartmentId\n\nEdit the details for a department\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/departments/{{$parameter[\"departmentId\"]}}"
						}
					}
				},
				{
					"name": "Get Departments By Employer ID",
					"value": "Get Departments By Employer ID",
					"action": "List of departments",
					"description": "__Activity name :__ GetDepartmentsByEmployerId\n\nGet a list of all departments for the employer. This is the point where the departments available for use at employment level (organizational entity) are managed.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/departments"
						}
					}
				},
				{
					"name": "Post Department By Employer ID",
					"value": "Post Department By Employer ID",
					"action": "Create a department for an employer",
					"description": "__Activity name:__ PostDepartmentByEmployerId\n    \n\nCreate a department for an employer\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults:__ No default values\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/departments"
						}
					}
				},
				{
					"name": "Get User Accessible Departments By Employer ID",
					"value": "Get User Accessible Departments By Employer ID",
					"action": "List of user accessible departments",
					"description": "__Activity name :__ GetUserAccessibleDepartmentsByEmployerId\n\nGet a list of all departments for the employer, which are accesible for the current user. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/useraccessibledepartments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/departments/{departmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Get Department By Department ID"
					]
				}
			}
		},
		{
			"displayName": "Department ID",
			"name": "departmentId",
			"required": true,
			"description": "The unique identifier of the department",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Get Department By Department ID"
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
						"Departments"
					],
					"operation": [
						"Get Department By Department ID"
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
						"Departments"
					],
					"operation": [
						"Get Department By Department ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/departments/{departmentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Put Department By Department ID"
					]
				}
			}
		},
		{
			"displayName": "Department ID",
			"name": "departmentId",
			"required": true,
			"description": "The unique identifier of the department",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Put Department By Department ID"
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
						"Departments"
					],
					"operation": [
						"Put Department By Department ID"
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
						"Departments"
					],
					"operation": [
						"Put Department By Department ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Put Department By Department ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Verkoop Binnendienst",
			"description": "The visible description (i.e. name) of the department.\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Put Department By Department ID"
					]
				}
			}
		},
		{
			"displayName": "Email Leave Request",
			"name": "emailLeaveRequest",
			"type": "string",
			"default": "api@loket.nl",
			"description": "Recipient e-mail adress for notification in case of leave requests. Typically this is the mailadress of a manager that would get a notification mail when a new leave requet is to be processed.",
			"routing": {
				"send": {
					"property": "emailLeaveRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Put Department By Department ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Put Department By Department ID"
					]
				}
			}
		},
		{
			"displayName": "Sub Department Of",
			"name": "subDepartmentOf",
			"type": "json",
			"default": "{\n  \"code\": 2,\n  \"description\": \"Verkoop Algemeen\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "If the department is a sub department (i.e. underlying) of another department, then the key-field of that other department may be entered here.\n",
			"routing": {
				"send": {
					"property": "subDepartmentOf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Put Department By Department ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/departments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Get Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get Departments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/departments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Post Department By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Post Department By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Post Department By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Post Department By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "number",
			"default": 2,
			"description": "The visible identifier of the department.\n",
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Post Department By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Verkoop Binnendienst",
			"description": "The visible description (i.e. name) of the department.\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Post Department By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Email Leave Request",
			"name": "emailLeaveRequest",
			"type": "string",
			"default": "api@loket.nl",
			"description": "Recipient e-mail adress for notification in case of leave requests. Typically this is the mailadress of a manager that would get a notification mail when a new leave requet is to be processed.",
			"routing": {
				"send": {
					"property": "emailLeaveRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Post Department By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)\n",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Post Department By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Sub Department Of",
			"name": "subDepartmentOf",
			"type": "json",
			"default": "{\n  \"code\": 2,\n  \"description\": \"Verkoop Algemeen\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "If the department is a sub department (i.e. underlying) of another department, then the key-field of that other department may be entered here.\n",
			"routing": {
				"send": {
					"property": "subDepartmentOf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Post Department By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/useraccessibledepartments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Departments"
					],
					"operation": [
						"Get User Accessible Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get User Accessible Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get User Accessible Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get User Accessible Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get User Accessible Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get User Accessible Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get User Accessible Departments By Employer ID"
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
						"Departments"
					],
					"operation": [
						"Get User Accessible Departments By Employer ID"
					]
				}
			}
		},
];
