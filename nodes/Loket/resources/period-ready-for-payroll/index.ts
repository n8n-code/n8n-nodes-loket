import type { INodeProperties } from 'n8n-workflow';

export const periodReadyForPayrollDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Period Ready For Payroll"
					]
				}
			},
			"options": [
				{
					"name": "Post Period Ready For Payroll By Payroll Administration ID",
					"value": "Post Period Ready For Payroll By Payroll Administration ID",
					"action": "Send an email to inform the salary administrator",
					"description": "__Activity name :__ PostPeriodReadyForPayrollByPayrollAdministrationId\n\nSend an email to inform that the period is ready for payrolling.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/periodreadyforpayroll"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/{payrollAdministrationId}/periodreadyforpayroll",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Period Ready For Payroll"
					],
					"operation": [
						"Post Period Ready For Payroll By Payroll Administration ID"
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
						"Period Ready For Payroll"
					],
					"operation": [
						"Post Period Ready For Payroll By Payroll Administration ID"
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
						"Period Ready For Payroll"
					],
					"operation": [
						"Post Period Ready For Payroll By Payroll Administration ID"
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
						"Period Ready For Payroll"
					],
					"operation": [
						"Post Period Ready For Payroll By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Email Address Period Ready For Payroll",
			"name": "emailAddressPeriodReadyForPayroll",
			"type": "json",
			"default": "[\n  \"email@kantoor.nl\",\n  \"email2@kantoor.nl\"\n]",
			"description": "The email address(es) of the recipient(s)",
			"routing": {
				"send": {
					"property": "emailAddressPeriodReadyForPayroll",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Period Ready For Payroll"
					],
					"operation": [
						"Post Period Ready For Payroll By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period ID",
			"name": "payrollPeriodId",
			"type": "number",
			"default": 202101,
			"description": "The id for this specific payroll period.",
			"routing": {
				"send": {
					"property": "payrollPeriodId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Period Ready For Payroll"
					],
					"operation": [
						"Post Period Ready For Payroll By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "User Comment",
			"name": "userComment",
			"type": "string",
			"default": "All mutations are done.",
			"description": "A personal message from the sender.",
			"routing": {
				"send": {
					"property": "userComment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Period Ready For Payroll"
					],
					"operation": [
						"Post Period Ready For Payroll By Payroll Administration ID"
					]
				}
			}
		},
];
