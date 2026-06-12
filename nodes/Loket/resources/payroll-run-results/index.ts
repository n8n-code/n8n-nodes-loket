import type { INodeProperties } from 'n8n-workflow';

export const payrollRunResultsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Results"
					]
				}
			},
			"options": [
				{
					"name": "Get Payroll Run Results By Payroll Run ID",
					"value": "Get Payroll Run Results By Payroll Run ID",
					"action": "Get results for a payroll run",
					"description": "__Activity name :__ GetPayrollRunResultsByPayrollRunId  \n\nReturns the results for the payroll run\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/results"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/results",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Results"
					],
					"operation": [
						"Get Payroll Run Results By Payroll Run ID"
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
						"Payroll Run Results"
					],
					"operation": [
						"Get Payroll Run Results By Payroll Run ID"
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
						"Payroll Run Results"
					],
					"operation": [
						"Get Payroll Run Results By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Payrollrun ID",
			"name": "payrollrunId",
			"required": true,
			"description": "The unique identifier of the payroll run",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Results"
					],
					"operation": [
						"Get Payroll Run Results By Payroll Run ID"
					]
				}
			}
		},
];
