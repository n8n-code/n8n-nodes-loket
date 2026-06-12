import type { INodeProperties } from 'n8n-workflow';

export const payrollTaxReturnDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return"
					]
				}
			},
			"options": [
				{
					"name": "Patch Payroll Tax Returns By Payroll Tax Return Ids",
					"value": "Patch Payroll Tax Returns By Payroll Tax Return Ids",
					"action": "Change the status of payroll tax returns",
					"description": "__Activity name :__ PatchPayrollTaxReturnsByPayrollTaxReturnIds\n\nThis endpoints changes the status of the list of the payroll tax returns provided in the request body based on the provided action.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/payrolladministrations/payrolltaxreturns"
						}
					}
				},
				{
					"name": "Get Payroll Tax Return By Payroll Tax Return ID",
					"value": "Get Payroll Tax Return By Payroll Tax Return ID",
					"action": "Details of a tax return for an administration",
					"description": "__Activity name :__ GetPayrollTaxReturnByPayrollTaxReturnId\n\nThe details of a tax return for an administration\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrolltaxreturns/{{$parameter[\"payrolltaxreturnId\"]}}"
						}
					}
				},
				{
					"name": "Get Ideal URL By Payroll Tax Return ID",
					"value": "Get Ideal URL By Payroll Tax Return ID",
					"action": "Pay payroll taxes using IDEAL",
					"description": "__Activity name :__ GetIdealUrlByPayrollTaxReturnId\n\nGet URL which allows the user to pay payroll taxes via IDEAL\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrolltaxreturns/{{$parameter[\"payrolltaxreturnId\"]}}/ideal"
						}
					}
				},
				{
					"name": "Get Ideal Payment Status By Payroll Tax Return ID",
					"value": "Get Ideal Payment Status By Payroll Tax Return ID",
					"action": "Get the status of the IDEAL payment",
					"description": "__Activity name :__ GetIdealPaymentStatusByPayrollTaxReturnId\n\nGet the status of the IDEAL payment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrolltaxreturns/{{$parameter[\"payrolltaxreturnId\"]}}/idealPaymentStatus"
						}
					}
				},
				{
					"name": "Get Payroll Tax Returns By Payroll Administration ID",
					"value": "Get Payroll Tax Returns By Payroll Administration ID",
					"action": "List of tax returns for an administration",
					"description": "__Activity name :__ GetPayrollTaxReturnsByPayrollAdministrationId\n\nA list of tax returns for an administration\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrolltaxreturns"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /providers/employers/payrolladministrations/payrolltaxreturns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return"
					],
					"operation": [
						"Patch Payroll Tax Returns By Payroll Tax Return Ids"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Patch Payroll Tax Returns By Payroll Tax Return Ids"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Patch Payroll Tax Returns By Payroll Tax Return Ids"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return"
					],
					"operation": [
						"Patch Payroll Tax Returns By Payroll Tax Return Ids"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrolltaxreturns/{payrolltaxreturnId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Return By Payroll Tax Return ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Return By Payroll Tax Return ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Return By Payroll Tax Return ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Return By Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrolltaxreturns/{payrolltaxreturnId}/ideal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return"
					],
					"operation": [
						"Get Ideal URL By Payroll Tax Return ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Ideal URL By Payroll Tax Return ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Ideal URL By Payroll Tax Return ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Ideal URL By Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrolltaxreturns/{payrolltaxreturnId}/idealPaymentStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return"
					],
					"operation": [
						"Get Ideal Payment Status By Payroll Tax Return ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Ideal Payment Status By Payroll Tax Return ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Ideal Payment Status By Payroll Tax Return ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Ideal Payment Status By Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/payrolltaxreturns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Returns By Payroll Administration ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Returns By Payroll Administration ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Returns By Payroll Administration ID"
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
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Returns By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Returns By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"description": "Order the collection on one or more fields",
			"default": "-companyName,address.houseNumber",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Returns By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Specifies which page should be returned",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Returns By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Specifies the number of objects per page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return"
					],
					"operation": [
						"Get Payroll Tax Returns By Payroll Administration ID"
					]
				}
			}
		},
];
