import type { INodeProperties } from 'n8n-workflow';

export const payrollProcessStatusDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Process Status"
					]
				}
			},
			"options": [
				{
					"name": "Get Payroll Process Status By Provider ID",
					"value": "Get Payroll Process Status By Provider ID",
					"action": "Payroll status for each administration.",
					"description": "__Activity name :__ GetPayrollProcessStatusByProviderId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ The default value for payrollPeriod.payrollPeriodId can be acquired by adding `/defaults' to the POST URL. \n\nReturns an array of objects. Each object contains information about the payroll administration and the payroll processes status.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/payrollprocessstatus"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/{providerId}/payrollprocessstatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Process Status"
					],
					"operation": [
						"Get Payroll Process Status By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Provider ID",
			"name": "providerId",
			"required": true,
			"description": "The unique identifier of a provider",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Process Status"
					],
					"operation": [
						"Get Payroll Process Status By Provider ID"
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
						"Payroll Process Status"
					],
					"operation": [
						"Get Payroll Process Status By Provider ID"
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
						"Payroll Process Status"
					],
					"operation": [
						"Get Payroll Process Status By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period ID",
			"name": "payrollPeriodId",
			"required": true,
			"description": "The unique identifier of the payroll period to return",
			"default": 202201,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "payrollPeriodId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Process Status"
					],
					"operation": [
						"Get Payroll Process Status By Provider ID"
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
						"Payroll Process Status"
					],
					"operation": [
						"Get Payroll Process Status By Provider ID"
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
						"Payroll Process Status"
					],
					"operation": [
						"Get Payroll Process Status By Provider ID"
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
						"Payroll Process Status"
					],
					"operation": [
						"Get Payroll Process Status By Provider ID"
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
						"Payroll Process Status"
					],
					"operation": [
						"Get Payroll Process Status By Provider ID"
					]
				}
			}
		},
];
