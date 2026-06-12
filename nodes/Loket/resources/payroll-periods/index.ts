import type { INodeProperties } from 'n8n-workflow';

export const payrollPeriodsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Periods"
					]
				}
			},
			"options": [
				{
					"name": "Get Payroll Periods By Payroll Administration ID",
					"value": "Get Payroll Periods By Payroll Administration ID",
					"action": "List of all available payroll periods and runs",
					"description": "__Activity name :__ GetPayrollPeriodsByPayrollAdministrationId\n\nReturns a list of all payroll periods available for the given payroll administration \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrollperiods"
						}
					}
				},
				{
					"name": "Get Payroll Periods Minimized By Payroll Administration ID",
					"value": "Get Payroll Periods Minimized By Payroll Administration ID",
					"action": "List of all available payroll periods",
					"description": "__Activity name :__ GetPayrollPeriodsMinimizedByPayrollAdministrationId\n\nReturns a list of all payroll periods available for the given payroll administration \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrollperiods/minimized"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/payrollperiods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Periods"
					],
					"operation": [
						"Get Payroll Periods By Payroll Administration ID"
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
						"Payroll Periods"
					],
					"operation": [
						"Get Payroll Periods By Payroll Administration ID"
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
						"Payroll Periods"
					],
					"operation": [
						"Get Payroll Periods By Payroll Administration ID"
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
						"Payroll Periods"
					],
					"operation": [
						"Get Payroll Periods By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/payrollperiods/minimized",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Periods"
					],
					"operation": [
						"Get Payroll Periods Minimized By Payroll Administration ID"
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
						"Payroll Periods"
					],
					"operation": [
						"Get Payroll Periods Minimized By Payroll Administration ID"
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
						"Payroll Periods"
					],
					"operation": [
						"Get Payroll Periods Minimized By Payroll Administration ID"
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
						"Payroll Periods"
					],
					"operation": [
						"Get Payroll Periods Minimized By Payroll Administration ID"
					]
				}
			}
		},
];
