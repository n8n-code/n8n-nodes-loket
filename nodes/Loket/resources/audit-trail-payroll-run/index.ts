import type { INodeProperties } from 'n8n-workflow';

export const auditTrailPayrollRunDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Trail Payroll Run"
					]
				}
			},
			"options": [
				{
					"name": "Get Employment Payroll Data Audit Trail By Payroll Administration ID",
					"value": "Get Employment Payroll Data Audit Trail By Payroll Administration ID",
					"action": "Download the audit trail for the employment payroll data",
					"description": "__Activity name :__ GetEmploymentPayrollDataAuditTrailByPayrollAdministrationId\n\nReturns the changes that were made in the payroll data for the employments. \n\nThis includes resources such as (allmost all payroll related resources except `payroll period data` which has its own audit trail download):\n- Wage\n- Working hours\n- Bennefits and deductions\n- Employment\n- Fiscal properties\n- Organizational entity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/employmentPayrollDataAuditTrail"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/employmentPayrollDataAuditTrail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Trail Payroll Run"
					],
					"operation": [
						"Get Employment Payroll Data Audit Trail By Payroll Administration ID"
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
						"Audit Trail Payroll Run"
					],
					"operation": [
						"Get Employment Payroll Data Audit Trail By Payroll Administration ID"
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
						"Audit Trail Payroll Run"
					],
					"operation": [
						"Get Employment Payroll Data Audit Trail By Payroll Administration ID"
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
						"Audit Trail Payroll Run"
					],
					"operation": [
						"Get Employment Payroll Data Audit Trail By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"required": true,
			"description": "The start date",
			"default": "2020-08-01",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Trail Payroll Run"
					],
					"operation": [
						"Get Employment Payroll Data Audit Trail By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
			"description": "The end date",
			"default": "2020-08-31",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Trail Payroll Run"
					],
					"operation": [
						"Get Employment Payroll Data Audit Trail By Payroll Administration ID"
					]
				}
			}
		},
];
