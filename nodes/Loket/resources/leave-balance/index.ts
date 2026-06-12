import type { INodeProperties } from 'n8n-workflow';

export const leaveBalanceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Balance"
					]
				}
			},
			"options": [
				{
					"name": "Get Leave Balances By Employment ID",
					"value": "Get Leave Balances By Employment ID",
					"action": "List of yearly leave balances for each leave type.",
					"description": "__Activity name :__ GetLeaveBalancesByEmploymentId <br/>  <br/>  Returns the yearly leave balances for each leave type.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/leavebalances"
						}
					}
				},
				{
					"name": "Get Leave Balances By Employer ID",
					"value": "Get Leave Balances By Employer ID",
					"action": "The leave balance for all employments",
					"description": "__Activity name :__ GetLeaveBalancesByEmployerId <br/>  <br/>  Returns the yearly leave balances for all employments\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/leavebalances"
						}
					}
				},
				{
					"name": "Get Leave Balances Grouped By Employer ID",
					"value": "Get Leave Balances Grouped By Employer ID",
					"action": "Summed up leave balance total and grouped by",
					"description": "__Activity name :__ GetLeaveBalancesGroupedByEmployerId <br/>  <br/>  Returns the yearly leave balances total per leave type and total per groupBy\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/leavebalances/grouped"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/leavebalances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employment ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employment ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employment ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employment ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employment ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employment ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employment ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/leavebalances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Reference Date",
			"name": "referenceDate",
			"description": "Set a reference date for the following logic\n  1. To determine the active `function` and `department` of the employment\n  2. To calculate `usageAfterToday` and `usageThroughToday`\n  3. To determine the year for which the leave balance is returned\n\nIf not provided, \"today\" is used",
			"default": "2020-12-31",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "referenceDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Type",
			"name": "leaveType",
			"description": "Select which `leaveType` will be returned. Based on the provided 'leaveType.key'(s)\n\nIf not provided, the `leaveType` 16 (Verlof) is returned (16 is the sum of leaveType 1 (bovenwettelijk verlof) and 15 (wettelijk verlof))",
			"default": "[\n  [\n    1,\n    15,\n    99\n  ]\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "leaveType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/leavebalances/grouped",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances Grouped By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances Grouped By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances Grouped By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances Grouped By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Reference Date",
			"name": "referenceDate",
			"description": "Set a reference date for the following logic\n  1. To determine the active `function` and `department` of the employment\n  2. To calculate `usageAfterToday` and `usageThroughToday`\n  3. To determine the year for which the leave balance is returned\n\nIf not provided, \"today\" is used",
			"default": "2020-12-31",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "referenceDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances Grouped By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Type",
			"name": "leaveType",
			"description": "Select which `leaveType` will be returned. Based on the provided 'leaveType.key'(s)\n\nIf not provided, the `leaveType` 16 (Verlof) is returned (16 is the sum of leaveType 1 (bovenwettelijk verlof) and 15 (wettelijk verlof))",
			"default": "[\n  [\n    1,\n    15,\n    99\n  ]\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "leaveType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances Grouped By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances Grouped By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances Grouped By Employer ID"
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
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances Grouped By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "groupBy",
			"required": true,
			"description": "Select the groupBy",
			"default": "Department",
			"type": "options",
			"options": [
				{
					"name": "Department",
					"value": "Department"
				},
				{
					"name": "Function",
					"value": "Function"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "groupBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Balance"
					],
					"operation": [
						"Get Leave Balances Grouped By Employer ID"
					]
				}
			}
		},
];
