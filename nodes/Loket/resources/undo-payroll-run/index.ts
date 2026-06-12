import type { INodeProperties } from 'n8n-workflow';

export const undoPayrollRunDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Undo Payroll Run"
					]
				}
			},
			"options": [
				{
					"name": "Undo Payroll Run By Payroll Run ID",
					"value": "Undo Payroll Run By Payroll Run ID",
					"action": "Undo payroll run (verwijderen loonrun)",
					"description": "__Activity name :__ UndoPayrollRunByPayrollRunId This is a controller endpoint to perform an action.\n\nIn the older Loket GUI this specific action is referred to as 'Verwijderen loonrun' If this action is performed succesfully then the payroll run will be 'deleted' in the sense that its results will be undone. Please note that situations where an approved payroll run would have to be 'undone' should be generally be avoided. Preferably any mistakes or consistencies should be picked out at an earlier stage in the payroll process.\n\nThis action may only be performed succesfully of the following requirements are met;\n\n* The payroll run is the very last payroll run that has been approved within this payroll administration\n* It is not possible to undo a  payroll run if there is currently a payroll run with status 0  (to be processed) or 1 (awaiting approval) within the payroll administation.\n* Additionally, no related (external) information should still be present for the given payroll run. This will be validated by the endpoint.\n\n__Metadata :__  No metadata endpoint available for this controller endpoint.\n\n__Defaults :__ No defaults endpoint available for this controller endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/undo"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/undo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Undo Payroll Run"
					],
					"operation": [
						"Undo Payroll Run By Payroll Run ID"
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
						"Undo Payroll Run"
					],
					"operation": [
						"Undo Payroll Run By Payroll Run ID"
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
						"Undo Payroll Run"
					],
					"operation": [
						"Undo Payroll Run By Payroll Run ID"
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
						"Undo Payroll Run"
					],
					"operation": [
						"Undo Payroll Run By Payroll Run ID"
					]
				}
			}
		},
];
