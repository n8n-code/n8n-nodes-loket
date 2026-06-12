import type { INodeProperties } from 'n8n-workflow';

export const payrollComponentsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Components"
					]
				}
			},
			"options": [
				{
					"name": "Get Payroll Components By Payroll Administration ID And Year",
					"value": "Get Payroll Components By Payroll Administration ID And Year",
					"action": "Payroll components",
					"description": "__Activity name :__ GetPayrollComponentsByPayrollAdministrationIdAndYear\nGet the available payroll components for an administration. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrollcomponents/year/{{$parameter[\"year\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/payrollcomponents/year/{year}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Components"
					],
					"operation": [
						"Get Payroll Components By Payroll Administration ID And Year"
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
						"Payroll Components"
					],
					"operation": [
						"Get Payroll Components By Payroll Administration ID And Year"
					]
				}
			}
		},
		{
			"displayName": "Year",
			"name": "year",
			"required": true,
			"description": "The payroll year",
			"default": 2018,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Components"
					],
					"operation": [
						"Get Payroll Components By Payroll Administration ID And Year"
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
						"Payroll Components"
					],
					"operation": [
						"Get Payroll Components By Payroll Administration ID And Year"
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
						"Payroll Components"
					],
					"operation": [
						"Get Payroll Components By Payroll Administration ID And Year"
					]
				}
			}
		},
];
