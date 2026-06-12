import type { INodeProperties } from 'n8n-workflow';

export const payrollComponentSetDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Component Set"
					]
				}
			},
			"options": [
				{
					"name": "Get Available Payroll Component Sets By Payroll Administration ID",
					"value": "Get Available Payroll Component Sets By Payroll Administration ID",
					"action": "Available payroll component sets",
					"description": "__Activity name :__ GetAvailablePayrollComponentSetsByPayrollAdministrationId\nGet the available payroll components sets that are available at this level.  A payroll component set defines a set of payroll components to be used as a sjabloon preventing the need for users to constatnly select the same set of payroll components. Payroll component set are commonly used when entering payroll period data (variabele gegevens) either for a single employment or for multiple employments (browser variabele gegevens). They are also used as a filter when exporting payroll run results.\n\nBoth at the provider level and payroll administration the user may define sets and which components it includes. This endpoint will return an aggregated view of the applicable sets and its corresponding component based on the defined sets at provider and administration level.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/availablepayrollcomponentsets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/availablepayrollcomponentsets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Component Set"
					],
					"operation": [
						"Get Available Payroll Component Sets By Payroll Administration ID"
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
						"Payroll Component Set"
					],
					"operation": [
						"Get Available Payroll Component Sets By Payroll Administration ID"
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
						"Payroll Component Set"
					],
					"operation": [
						"Get Available Payroll Component Sets By Payroll Administration ID"
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
						"Payroll Component Set"
					],
					"operation": [
						"Get Available Payroll Component Sets By Payroll Administration ID"
					]
				}
			}
		},
];
