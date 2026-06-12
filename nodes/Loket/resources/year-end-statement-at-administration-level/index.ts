import type { INodeProperties } from 'n8n-workflow';

export const yearEndStatementAtAdministrationLevelDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Year End Statement At Administration Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Year End Statements By Payroll Administration ID",
					"value": "Get Year End Statements By Payroll Administration ID",
					"action": "Year-end statements for the payroll administration",
					"description": "__Activity name :__ GetYearEndStatementsByPayrollAdministrationId\n\nGet a list of year-end statements (i.e. list of years for which year-end statements are available) for a payrolladministration.\n\nThe year-end statements at administration level are effectively a collection of year-end statements for its underlying employments. However it may also be required at the administration level in one call.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/yearendstatements"
						}
					}
				},
				{
					"name": "Get Year End Statement For Year By Payroll Administration ID",
					"value": "Get Year End Statement For Year By Payroll Administration ID",
					"action": "Download year-end statement of a payroll administration for a year",
					"description": "__Activity name :__ GetYearEndStatementForYearByPayrollAdministrationId\n\nDownload the year-end statements of a payroll administration (of its underlying employment) for a year.\n\nThe year-end statements at administration level are effectively a collection of year-end statements for its underlying employments. With this endpoint it may also be required at the administration level in one call.\n\n_Please note: this endpoint may only be used to acquire a report in the pdf-type format_ \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/yearendstatements/{{$parameter[\"year\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/yearendstatements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statements By Payroll Administration ID"
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
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statements By Payroll Administration ID"
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
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statements By Payroll Administration ID"
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
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statements By Payroll Administration ID"
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
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statements By Payroll Administration ID"
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
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statements By Payroll Administration ID"
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
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statements By Payroll Administration ID"
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
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statements By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/yearendstatements/{year}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statement For Year By Payroll Administration ID"
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
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statement For Year By Payroll Administration ID"
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
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statement For Year By Payroll Administration ID"
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
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statement For Year By Payroll Administration ID"
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
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statement For Year By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Include Employee Self Service",
			"name": "includeEmployeeSelfService",
			"description": "If true; then the year-end statements for employments of which the employee has access to the employee self service module will be included in the response. If false; this specific group will be excluded.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeEmployeeSelfService",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Year End Statement At Administration Level"
					],
					"operation": [
						"Get Year End Statement For Year By Payroll Administration ID"
					]
				}
			}
		},
];
