import type { INodeProperties } from 'n8n-workflow';

export const payrollAdministrationProcessOverviewDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Administration Process Overview"
					]
				}
			},
			"options": [
				{
					"name": "Get Payroll Process Overview By Payroll Administration ID",
					"value": "Get Payroll Process Overview By Payroll Administration ID",
					"action": "Process Information about a payroll on administration level",
					"description": "__Activity name :__ GetPayrollProcessOverviewByPayrollAdministrationId\n\nGet an overview of the status and possible actions for the specified period, including the preceding and subsequent period. The overview contains information about: payroll runs, payroll tax return and pension.\n__Metadata :__  Possible options for the query string parameters can be acquired (GET) via the `/metadata` endpoint.  The URI for this endpoint is `../providers/employers/payrolladministrations/{payrollAdministrationId}/payrollprocessoverview/metadata`.\n\n__Defaults :__ Default values for the query string parameters can be acquired via the `/defaults` endpoint.  The URI for this endpoint is `../providers/employers/payrolladministrations/{payrollAdministrationId}/payrollprocessoverview/defaults`.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrollprocessoverview"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/payrollprocessoverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Administration Process Overview"
					],
					"operation": [
						"Get Payroll Process Overview By Payroll Administration ID"
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
						"Payroll Administration Process Overview"
					],
					"operation": [
						"Get Payroll Process Overview By Payroll Administration ID"
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
						"Payroll Administration Process Overview"
					],
					"operation": [
						"Get Payroll Process Overview By Payroll Administration ID"
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
						"Payroll Administration Process Overview"
					],
					"operation": [
						"Get Payroll Process Overview By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period ID Start",
			"name": "payrollPeriodIdStart",
			"required": true,
			"description": "The unique identifier of the first payroll period to return",
			"default": 202004,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "payrollPeriodIdStart",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Administration Process Overview"
					],
					"operation": [
						"Get Payroll Process Overview By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period ID End",
			"name": "payrollPeriodIdEnd",
			"description": "The unique identifier of the last payroll period to return",
			"default": 202006,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "payrollPeriodIdEnd",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Administration Process Overview"
					],
					"operation": [
						"Get Payroll Process Overview By Payroll Administration ID"
					]
				}
			}
		},
];
