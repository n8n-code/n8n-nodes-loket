import type { INodeProperties } from 'n8n-workflow';

export const payrollResultsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Results"
					]
				}
			},
			"options": [
				{
					"name": "Get Compare Payroll Periods By Payroll Administration ID",
					"value": "Get Compare Payroll Periods By Payroll Administration ID",
					"action": "Get the results of the given payroll period and the one before",
					"description": "__Activity name :__ GetComparePayrollPeriodsByPayrollAdministrationId  \n\nReturns the results of given payroll period and the one before so a comparison can be made. Currently only the components 260, 495, 257 are returned \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrollperiods/compare"
						}
					}
				},
				{
					"name": "Get Payroll Period Results By Payroll Administration ID And Payroll Period ID",
					"value": "Get Payroll Period Results By Payroll Administration ID And Payroll Period ID",
					"action": "Get payroll results for the given payroll period",
					"description": "__Activity name :__ GetPayrollPeriodResultsByPayrollAdministrationIdAndPayrollPeriodId  \n  \n\nReturns the payroll results for the payroll period.\n\n__Note :__ This endpoint is related to the `GetPayrollRunResultsByPayrollRunId` endpoint.\nBoth endpoints return the same output just in a different way. This endpoint returns the current state of the payroll results for the given period where as `GetPayrollRunResultsByPayrollRunId` returns the payroll results for the given payroll run (a payroll run can contain payroll results for multiple payroll periods). It's posible for payroll results to be created after the end of the payroll period it zelf. For example, the payroll periode 01-2020 ends at 31-01-2020 (in case of a monthly payroll period) it is posible that the payroll run for period 07-2020 contains payroll results for the period 01-2020 due to a retroactivity change for that period. This change in the payroll run for payroll period 07-2020 would require the system to reaquire the results for period 01-2020 (as they changed).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrollperiods/{{$parameter[\"payrollPeriodId\"]}}/payrollresults"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/payrollperiods/compare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Results"
					],
					"operation": [
						"Get Compare Payroll Periods By Payroll Administration ID"
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
						"Payroll Results"
					],
					"operation": [
						"Get Compare Payroll Periods By Payroll Administration ID"
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
						"Payroll Results"
					],
					"operation": [
						"Get Compare Payroll Periods By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Administration ID",
			"name": "payrollAdministrationId",
			"required": true,
			"description": "The unique identifier of an administration",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Results"
					],
					"operation": [
						"Get Compare Payroll Periods By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period ID",
			"name": "payrollPeriodId",
			"required": true,
			"description": "The unique identifier of the payroll period",
			"default": 202001,
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
						"Payroll Results"
					],
					"operation": [
						"Get Compare Payroll Periods By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/payrollperiods/{payrollPeriodId}/payrollresults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Results"
					],
					"operation": [
						"Get Payroll Period Results By Payroll Administration ID And Payroll Period ID"
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
						"Payroll Results"
					],
					"operation": [
						"Get Payroll Period Results By Payroll Administration ID And Payroll Period ID"
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
						"Payroll Results"
					],
					"operation": [
						"Get Payroll Period Results By Payroll Administration ID And Payroll Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Administration ID",
			"name": "payrollAdministrationId",
			"required": true,
			"description": "The unique identifier of an administration",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Results"
					],
					"operation": [
						"Get Payroll Period Results By Payroll Administration ID And Payroll Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period ID",
			"name": "payrollPeriodId",
			"required": true,
			"description": "The unique identifier of the payroll period",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Results"
					],
					"operation": [
						"Get Payroll Period Results By Payroll Administration ID And Payroll Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Components",
			"name": "payrollComponents",
			"description": "Can be used to filter what payroll components are returned. Cannot be used in combination with payrollComponentSet.",
			"default": "\"70,151,12\"",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "payrollComponents",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Results"
					],
					"operation": [
						"Get Payroll Period Results By Payroll Administration ID And Payroll Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Component Set",
			"name": "payrollComponentSet",
			"description": "A predifined set of payroll components to filter what payroll components are returned",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payrollComponentSet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Results"
					],
					"operation": [
						"Get Payroll Period Results By Payroll Administration ID And Payroll Period ID"
					]
				}
			}
		},
];
