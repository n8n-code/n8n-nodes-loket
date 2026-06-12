import type { INodeProperties } from 'n8n-workflow';

export const costPerHourDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					]
				}
			},
			"options": [
				{
					"name": "Delete Cost Per Hour By Cost Per Hour ID",
					"value": "Delete Cost Per Hour By Cost Per Hour ID",
					"action": "Delete a cost per hour record",
					"description": "__Activity name :__ DeleteCostPerHourByCostPerHourId\n\nDelete an existing cost per hour record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/costperhour/{{$parameter[\"costperhourId\"]}}"
						}
					}
				},
				{
					"name": "Get Cost Per Hour By Cost Per Hour ID",
					"value": "Get Cost Per Hour By Cost Per Hour ID",
					"action": "Details of cost per hour",
					"description": "__Activity name :__ GetCostPerHourByCostPerHourId\n\nGet the details of a cost per hour record\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/costperhour/{{$parameter[\"costperhourId\"]}}"
						}
					}
				},
				{
					"name": "Put Costperhour By Costperhour ID",
					"value": "Put Costperhour By Costperhour ID",
					"action": "Edit a cost per hour record",
					"description": "__Activity name :__ PutCostperhourByCostperhourId\n\n__Metadata :__ No metadata.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/costperhour/{{$parameter[\"costperhourId\"]}}"
						}
					}
				},
				{
					"name": "Get Cost Per Hour By Employment ID",
					"value": "Get Cost Per Hour By Employment ID",
					"action": "List of costs per hour for an employment",
					"description": "__Activity name:__ GetCostPerHourByEmploymentId\n    \n\nGet the list of costs per hour for an employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/costperhour"
						}
					}
				},
				{
					"name": "Post Cost Per Hour By Employment ID",
					"value": "Post Cost Per Hour By Employment ID",
					"action": "Add a cost per hour for an employment",
					"description": "__Activity name :__ PostCostPerHourByEmploymentId\n\n__Metadata:__ Possible options for fields of the type 'metadata' can be acquired(GET)by adding `/metadata` to the POST URL.\n\n__Defaults:__ Defaults can be acquired(GET)by adding `/defaults` to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/costperhour"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/costperhour/{costperhourId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Delete Cost Per Hour By Cost Per Hour ID"
					]
				}
			}
		},
		{
			"displayName": "Cost Per Hour ID",
			"name": "costPerHourId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "costPerHourId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Delete Cost Per Hour By Cost Per Hour ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Delete Cost Per Hour By Cost Per Hour ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Delete Cost Per Hour By Cost Per Hour ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Delete Cost Per Hour By Cost Per Hour ID"
					]
				}
			}
		},
		{
			"displayName": "Costperhour ID",
			"name": "costperhourId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Delete Cost Per Hour By Cost Per Hour ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/costperhour/{costperhourId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Cost Per Hour ID"
					]
				}
			}
		},
		{
			"displayName": "Cost Per Hour ID",
			"name": "costPerHourId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "costPerHourId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Cost Per Hour ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Cost Per Hour ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Cost Per Hour ID"
					]
				}
			}
		},
		{
			"displayName": "Costperhour ID",
			"name": "costperhourId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Cost Per Hour ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/costperhour/{costperhourId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Put Costperhour By Costperhour ID"
					]
				}
			}
		},
		{
			"displayName": "Cost Per Hour ID",
			"name": "costPerHourId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "costPerHourId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Put Costperhour By Costperhour ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Put Costperhour By Costperhour ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Put Costperhour By Costperhour ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Put Costperhour By Costperhour ID"
					]
				}
			}
		},
		{
			"displayName": "Costperhour ID",
			"name": "costperhourId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Put Costperhour By Costperhour ID"
					]
				}
			}
		},
		{
			"displayName": "Cost Per Hour",
			"name": "costPerHour",
			"type": "number",
			"default": 21.2,
			"description": "The cost per hour for the employment\n",
			"routing": {
				"send": {
					"property": "costPerHour",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Put Costperhour By Costperhour ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Put Costperhour By Costperhour ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Periods",
			"name": "payrollPeriods",
			"type": "json",
			"default": "{\n  \"endDate\": \"2020-01-31\",\n  \"id\": 202001,\n  \"periodNumber\": 1,\n  \"startDate\": \"2020-01-01\",\n  \"year\": 2020\n}",
			"description": "The period of the kpu record.",
			"routing": {
				"send": {
					"property": "payrollPeriods",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Put Costperhour By Costperhour ID"
					]
				}
			}
		},
		{
			"displayName": "Registration Method",
			"name": "registrationMethod",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Verloning\"\n}",
			"description": "This object indicates how the cost per hour was aquired. Possible values are Verloning, Schatting and Handmatig",
			"routing": {
				"send": {
					"property": "registrationMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Put Costperhour By Costperhour ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/costperhour",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Include Estimation",
			"name": "includeEstimation",
			"description": "include an estimation if no cost per unit records are present",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeEstimation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Employment ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Employment ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Employment ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Employment ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Employment ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Employment ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Employment ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Get Cost Per Hour By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/costperhour",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Post Cost Per Hour By Employment ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Post Cost Per Hour By Employment ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Post Cost Per Hour By Employment ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Post Cost Per Hour By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Cost Per Hour",
			"name": "costPerHour",
			"type": "number",
			"default": 21.2,
			"description": "The cost per hour for the employment\n",
			"routing": {
				"send": {
					"property": "costPerHour",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Post Cost Per Hour By Employment ID"
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
						"Cost Per Hour"
					],
					"operation": [
						"Post Cost Per Hour By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Periods",
			"name": "payrollPeriods",
			"type": "json",
			"default": "{\n  \"endDate\": \"2020-01-31\",\n  \"id\": 202001,\n  \"periodNumber\": 1,\n  \"startDate\": \"2020-01-01\",\n  \"year\": 2020\n}",
			"description": "The period of the kpu record.",
			"routing": {
				"send": {
					"property": "payrollPeriods",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Post Cost Per Hour By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Registration Method",
			"name": "registrationMethod",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Verloning\"\n}",
			"description": "This object indicates how the cost per hour was aquired. Possible values are Verloning, Schatting and Handmatig",
			"routing": {
				"send": {
					"property": "registrationMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Cost Per Hour"
					],
					"operation": [
						"Post Cost Per Hour By Employment ID"
					]
				}
			}
		},
];
