import type { INodeProperties } from 'n8n-workflow';

export const childDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					]
				}
			},
			"options": [
				{
					"name": "Delete Child By Child ID",
					"value": "Delete Child By Child ID",
					"action": "Delete a specific child record",
					"description": "__Activity name :__ DeleteChildByChildId\n\nDelete an existing child (for an employee)\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/children/{{$parameter[\"childId\"]}}"
						}
					}
				},
				{
					"name": "Get Child By Child ID",
					"value": "Get Child By Child ID",
					"action": "Details of a child",
					"description": "__Activity name :__ GetChildByChildId\n\nGet the details of a child        \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/children/{{$parameter[\"childId\"]}}"
						}
					}
				},
				{
					"name": "Put Child By Child ID",
					"value": "Put Child By Child ID",
					"action": "Edit the details of a child",
					"description": "__Activity name :__ PutChildByChildId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n\nEdit the details of a child\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/children/{{$parameter[\"childId\"]}}"
						}
					}
				},
				{
					"name": "Get Children By Employee ID",
					"value": "Get Children By Employee ID",
					"action": "List of children for an employee",
					"description": "__Activity name :__ GetChildrenByEmployeeId\n\n\n Get the list of children of the employee\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/children"
						}
					}
				},
				{
					"name": "Post Child By Employee ID",
					"value": "Post Child By Employee ID",
					"action": "Create an child for an employee",
					"description": "__Activity name :__ PostChildByEmployeeId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL. \n\nAdd a child for an employee\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/children"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/children/{childId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Delete Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "Child ID",
			"name": "childId",
			"required": true,
			"description": "The unique identifier of a child",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Delete Child By Child ID"
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
						"Child"
					],
					"operation": [
						"Delete Child By Child ID"
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
						"Child"
					],
					"operation": [
						"Delete Child By Child ID"
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
						"Child"
					],
					"operation": [
						"Delete Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/children/{childId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Get Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "Child ID",
			"name": "childId",
			"required": true,
			"description": "The unique identifier of a child",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Get Child By Child ID"
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
						"Child"
					],
					"operation": [
						"Get Child By Child ID"
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
						"Child"
					],
					"operation": [
						"Get Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/children/{childId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "Child ID",
			"name": "childId",
			"required": true,
			"description": "The unique identifier of a child",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
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
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
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
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
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
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"type": "string",
			"default": "1995-05-21",
			"description": "The date of birth\n",
			"routing": {
				"send": {
					"property": "dateOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Death",
			"name": "dateOfDeath",
			"type": "string",
			"default": "",
			"description": "The date of death\n",
			"routing": {
				"send": {
					"property": "dateOfDeath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "Susan",
			"description": "The first name, given name, forename or Christian name as part of a persons personal name.\n",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"female\"\n}",
			"description": "The gender\n",
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
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
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "Initials",
			"name": "initials",
			"type": "string",
			"default": "S.L.",
			"description": "The initials\n",
			"routing": {
				"send": {
					"property": "initials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "Bergen",
			"description": "The last name, family name or surname as part of a persons personal name.\n",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"type": "string",
			"default": "van",
			"description": "The prefix to the last name\n",
			"routing": {
				"send": {
					"property": "prefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "Residence Status",
			"name": "residenceStatus",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Living at home\"\n}",
			"description": "Indicator to tell if the child is living at home or not. Use null if unknown.\n",
			"routing": {
				"send": {
					"property": "residenceStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Put Child By Child ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Get Children By Employee ID"
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
						"Child"
					],
					"operation": [
						"Get Children By Employee ID"
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
						"Child"
					],
					"operation": [
						"Get Children By Employee ID"
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
						"Child"
					],
					"operation": [
						"Get Children By Employee ID"
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
						"Child"
					],
					"operation": [
						"Get Children By Employee ID"
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
						"Child"
					],
					"operation": [
						"Get Children By Employee ID"
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
						"Child"
					],
					"operation": [
						"Get Children By Employee ID"
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
						"Child"
					],
					"operation": [
						"Get Children By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/{employeeId}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
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
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
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
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
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
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"type": "string",
			"default": "1995-05-21",
			"description": "The date of birth\n",
			"routing": {
				"send": {
					"property": "dateOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Death",
			"name": "dateOfDeath",
			"type": "string",
			"default": "",
			"description": "The date of death\n",
			"routing": {
				"send": {
					"property": "dateOfDeath",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "Susan",
			"description": "The first name, given name, forename or Christian name as part of a persons personal name.\n",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"female\"\n}",
			"description": "The gender\n",
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
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
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Initials",
			"name": "initials",
			"type": "string",
			"default": "S.L.",
			"description": "The initials\n",
			"routing": {
				"send": {
					"property": "initials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "Bergen",
			"description": "The last name, family name or surname as part of a persons personal name.\n",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Prefix",
			"name": "prefix",
			"type": "string",
			"default": "van",
			"description": "The prefix to the last name\n",
			"routing": {
				"send": {
					"property": "prefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Residence Status",
			"name": "residenceStatus",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Living at home\"\n}",
			"description": "Indicator to tell if the child is living at home or not. Use null if unknown.\n",
			"routing": {
				"send": {
					"property": "residenceStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Child"
					],
					"operation": [
						"Post Child By Employee ID"
					]
				}
			}
		},
];
