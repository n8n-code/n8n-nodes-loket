import type { INodeProperties } from 'n8n-workflow';

export const conceptEmployeeSelfServiceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Self Service"
					]
				}
			},
			"options": [
				{
					"name": "Get Concept Employee Self Service By Concept Employee ID",
					"value": "Get Concept Employee Self Service By Concept Employee ID",
					"action": "Details of a Concept employee self service portal status",
					"description": "__Activity name :__ GetConceptEmployeeSelfServiceByConceptEmployeeId\n\nGet the details of a Concept employee with regards to ESS access\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/selfservice"
						}
					}
				},
				{
					"name": "Get Concept Employee Self Service By Employer ID",
					"value": "Get Concept Employee Self Service By Employer ID",
					"action": "List of Concept employee's and their ESS (WNL) status",
					"description": "__Activity name :__ GetConceptEmployeeSelfServiceByEmployerId\n\nGet a list of all the Concept employee's and their status regarding to ESS (werknemer.loket).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/conceptemployees/selfservice"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/conceptemployees/{conceptEmployeeId}/selfservice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Concept Employee ID"
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
			"routing": {
				"send": {
					"type": "query",
					"property": "employeeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Concept Employee ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Concept Employee ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Concept Employee ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Concept Employee ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Concept Employee ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Concept Employee ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/conceptemployees/selfservice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Employer ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Employer ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Employer ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Employer ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Employer ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Employer ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Employer ID"
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
						"Concept Employee Self Service"
					],
					"operation": [
						"Get Concept Employee Self Service By Employer ID"
					]
				}
			}
		},
];
