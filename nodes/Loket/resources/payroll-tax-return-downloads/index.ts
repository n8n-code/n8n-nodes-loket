import type { INodeProperties } from 'n8n-workflow';

export const payrollTaxReturnDownloadsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Downloads"
					]
				}
			},
			"options": [
				{
					"name": "Get Message By Payroll Tax Return ID",
					"value": "Get Message By Payroll Tax Return ID",
					"action": "Download the message of a payroll tax return",
					"description": "__Activity name :__ GetMessageByPayrollTaxReturnId   \n\nDownload the message of the payroll tax return (loonaangiftebericht) in xml. Please note that this does NOT refer to the response message, but to the initial message i.e. loonaangiftebericht.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrolltaxreturns/{{$parameter[\"payrolltaxreturnId\"]}}/message"
						}
					}
				},
				{
					"name": "Get Overview By Payroll Tax Return ID",
					"value": "Get Overview By Payroll Tax Return ID",
					"action": "Download the overview report of a payroll tax return",
					"description": "__Activity name :__ GetOverviewByPayrollTaxReturnId\n\nDownload the payroll tax return overiew\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrolltaxreturns/{{$parameter[\"payrolltaxreturnId\"]}}/overview"
						}
					}
				},
				{
					"name": "Get Sepa File By Payroll Administration ID And Payroll Tax Return ID",
					"value": "Get Sepa File By Payroll Administration ID And Payroll Tax Return ID",
					"action": "Download the SEPA file for a payroll tax return",
					"description": "__Activity name :__ GetSepaFileByPayrollAdministrationIdAndPayrollTaxReturnId\n\nGet the Sepa file for the payroll tax return\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrolltaxreturns/{{$parameter[\"payrolltaxreturnId\"]}}/sepafile"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrolltaxreturns/{payrolltaxreturnId}/message",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Message By Payroll Tax Return ID"
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
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Message By Payroll Tax Return ID"
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
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Message By Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "Payrolltaxreturn ID",
			"name": "payrolltaxreturnId",
			"required": true,
			"description": "The unique identifier of the payroll tax return",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Message By Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrolltaxreturns/{payrolltaxreturnId}/overview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Overview By Payroll Tax Return ID"
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
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Overview By Payroll Tax Return ID"
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
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Overview By Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "Payrolltaxreturn ID",
			"name": "payrolltaxreturnId",
			"required": true,
			"description": "The unique identifier of the payroll tax return",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Overview By Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/payrolltaxreturns/{payrolltaxreturnId}/sepafile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Sepa File By Payroll Administration ID And Payroll Tax Return ID"
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
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Sepa File By Payroll Administration ID And Payroll Tax Return ID"
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
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Sepa File By Payroll Administration ID And Payroll Tax Return ID"
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
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Sepa File By Payroll Administration ID And Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "Payrolltaxreturn ID",
			"name": "payrolltaxreturnId",
			"required": true,
			"description": "The unique identifier of the payroll tax return",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Sepa File By Payroll Administration ID And Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "Requested Execution Date",
			"name": "requestedExecutionDate",
			"required": true,
			"description": "This value is used when creating the sepa file to set the value of \\<ReqdExctnDt\\>",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestedExecutionDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Downloads"
					],
					"operation": [
						"Get Sepa File By Payroll Administration ID And Payroll Tax Return ID"
					]
				}
			}
		},
];
