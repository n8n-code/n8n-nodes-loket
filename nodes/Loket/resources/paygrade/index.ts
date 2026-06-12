import type { INodeProperties } from 'n8n-workflow';

export const paygradeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Paygrade"
					]
				}
			},
			"options": [
				{
					"name": "Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key",
					"value": "Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key",
					"action": "Paygrade metadata for concept employee",
					"description": "__Activity name :__ GetConceptEmployeePayGradeMetaDataByPayrollAdministrationIdAndPayscaleKeyAndPayGradeKey\n\nAcquire data on a specific paygrade, this consists of a list of paygrade values and their respective startDates.\n\nIf a valid `date` parameter is included in the call, the list will consists of one item that is applicable for that date.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/conceptemployees/metadata/payrollAdministration/{{$parameter[\"payrollAdministrationId\"]}}/payScale/{{$parameter[\"payscaleKey\"]}}/paygrade/{{$parameter[\"paygradeKey\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/conceptemployees/metadata/payrollAdministration/{payrollAdministrationId}/payScale/{payscaleKey}/paygrade/{paygradeKey}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Paygrade"
					],
					"operation": [
						"Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key"
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
						"Paygrade"
					],
					"operation": [
						"Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key"
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
						"Paygrade"
					],
					"operation": [
						"Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key"
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
						"Paygrade"
					],
					"operation": [
						"Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key"
					]
				}
			}
		},
		{
			"displayName": "Payscale Key",
			"name": "payscaleKey",
			"required": true,
			"description": "Key for specific payscale",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Paygrade"
					],
					"operation": [
						"Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key"
					]
				}
			}
		},
		{
			"displayName": "Paygrade Key",
			"name": "paygradeKey",
			"required": true,
			"description": "Key for specific paygrade",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Paygrade"
					],
					"operation": [
						"Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"description": "A valid date (xxxx-xx-xx)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Paygrade"
					],
					"operation": [
						"Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key"
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
						"Paygrade"
					],
					"operation": [
						"Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key"
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
						"Paygrade"
					],
					"operation": [
						"Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key"
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
						"Paygrade"
					],
					"operation": [
						"Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key"
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
						"Paygrade"
					],
					"operation": [
						"Get Concept Employee Pay Grade Meta Data By Payroll Administration ID And Payscale Key And Pay Grade Key"
					]
				}
			}
		},
];
