import type { INodeProperties } from 'n8n-workflow';

export const payrollPeriodDataOnAdministrationLevelDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data On Administration Level"
					]
				}
			},
			"options": [
				{
					"name": "Get Payroll Period Data By Payroll Administration ID And Payroll Period ID",
					"value": "Get Payroll Period Data By Payroll Administration ID And Payroll Period ID",
					"action": "List of payroll period data on payroll administration level",
					"description": "__Activity name :__ GetPayrollPeriodDataByPayrollAdministrationIdAndPayrollPeriodId\n\nGet a list of all payroll period data for all the active employment in the given payroll period for the give payroll administration. Payroll period data relates to a single payroll period.\n\nThis endpoint only returns objects for which the employment meets the filter settings set at the user level. Note that filter settings are set for a user <-> employer <-> client combination.\n\n__Metadata :__  Possible options for the query string parameters can be acquired (GET) via the `/metadata` endpoint.  The URI for this endpoint is `../providers/employers/payrolladministrations/{payrollAdministrationId}/payrollPeriods/payrollperioddata/metadata`.\n\n__Defaults :__ Default values for the query string parameters can be acquired via the `/defaults` endpoint.  The URI for this endpoint is `../providers/employers/payrolladministrations/{payrollAdministrationId}/payrollPeriods/payrollperioddata/defaults`.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrollPeriods/{{$parameter[\"payrollPeriodId\"]}}/payrollperioddata"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/payrollPeriods/{payrollPeriodId}/payrollperioddata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
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
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period ID",
			"name": "payrollPeriodId",
			"required": true,
			"description": "The unique identifier of the payroll period",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payslip Type",
			"name": "payslipType",
			"required": true,
			"description": "Controles which payroll period data is returned either for the normal payslip of the tarif payslip.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "payslipType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Component Set",
			"name": "payrollComponentSet",
			"description": "A predefined set of payroll components to filter which payroll components are returned.\n\n__Note:__ Either `payrollComponentSet` or `payrollComponentCategory` must have a value.\n\nMutually exclusive with `payrollComponentCategory`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payrollComponentSet",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Component Category",
			"name": "payrollComponentCategory",
			"description": "A predefined category of payroll components to filter which payroll components are returned.\n\n__Note:__ Either `payrollComponentSet` or `payrollComponentCategory` must have a value.\n\nMutually exclusive with `payrollComponentSet`.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "payrollComponentCategory",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
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
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
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
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
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
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
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
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
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
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
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
						"Payroll Period Data On Administration Level"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Administration ID And Payroll Period ID"
					]
				}
			}
		},
];
