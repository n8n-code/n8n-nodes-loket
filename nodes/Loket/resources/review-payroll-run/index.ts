import type { INodeProperties } from 'n8n-workflow';

export const reviewPayrollRunDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Review Payroll Run"
					]
				}
			},
			"options": [
				{
					"name": "Patch Payrollruns By Payroll Run Ids",
					"value": "Patch Payrollruns By Payroll Run Ids",
					"action": "Change the status of payrollruns",
					"description": "__Activity name :__ PatchPayrollrunsByPayrollRunIds\n\nThis action may only be performed succesfully of the following requirements are met;\n* The payroll run is ready for approval (status 1)\n\nUpdate the status of one or more payrollruns\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/payrolladministrations/payrollruns"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /providers/employers/payrolladministrations/payrollruns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Review Payroll Run"
					],
					"operation": [
						"Patch Payrollruns By Payroll Run Ids"
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
						"Review Payroll Run"
					],
					"operation": [
						"Patch Payrollruns By Payroll Run Ids"
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
						"Review Payroll Run"
					],
					"operation": [
						"Patch Payrollruns By Payroll Run Ids"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": {
				"id": "b14acd0d-75d7-4fc8-8b22-4a3924585cab"
			},
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Review Payroll Run"
					],
					"operation": [
						"Patch Payrollruns By Payroll Run Ids"
					]
				}
			}
		},
];
