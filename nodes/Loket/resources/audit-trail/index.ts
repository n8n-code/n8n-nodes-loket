import type { INodeProperties } from 'n8n-workflow';

export const auditTrailDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Trail"
					]
				}
			},
			"options": [
				{
					"name": "GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data",
					"value": "GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data",
					"action": "Get payroll period data audit trail",
					"description": "__Activity name :__ GetPayrollPeriodDataAuditTrailByPayrollAdministrationId\n\nGet the audit trail for the payroll period data. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/auditTrail/PayrollPeriodData"
						}
					}
				},
				{
					"name": "Get Payroll Period Data Audit Trail By Payroll Administration ID",
					"value": "Get Payroll Period Data Audit Trail By Payroll Administration ID",
					"action": "Download the audit trail for the payroll period data",
					"description": "__Activity name :__ GetPayrollPeriodDataAuditTrailByPayrollAdministrationId\n\nReturns the changes that were made in the payroll period data from the given start up to and including the given end date.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrollPeriodDataAuditTrail"
						}
					}
				},
				{
					"name": "Get Employee Data Audit Trail By Employer ID",
					"value": "Get Employee Data Audit Trail By Employer ID",
					"action": "Get the employee data audit trail",
					"description": "__Activity name :__ GetEmployeeDataAuditTrailByEmployerId\n\nGet the mutations for the all the tables linked to the employee (this includes employment and underlying entities).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/auditTrail/EmployeeData"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/auditTrail/PayrollPeriodData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Trail"
					],
					"operation": [
						"GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data"
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
						"Audit Trail"
					],
					"operation": [
						"GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data"
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
						"Audit Trail"
					],
					"operation": [
						"GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data"
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
						"Audit Trail"
					],
					"operation": [
						"GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data"
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
						"Audit Trail"
					],
					"operation": [
						"GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data"
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
						"Audit Trail"
					],
					"operation": [
						"GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data"
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
						"Audit Trail"
					],
					"operation": [
						"GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data"
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
						"Audit Trail"
					],
					"operation": [
						"GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data"
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
						"Audit Trail"
					],
					"operation": [
						"GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data"
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
						"Audit Trail"
					],
					"operation": [
						"GET Providers Employers Payrolladministrations Audit Trail Payroll Period Data"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/payrollPeriodDataAuditTrail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Trail"
					],
					"operation": [
						"Get Payroll Period Data Audit Trail By Payroll Administration ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Payroll Period Data Audit Trail By Payroll Administration ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Payroll Period Data Audit Trail By Payroll Administration ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Payroll Period Data Audit Trail By Payroll Administration ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Payroll Period Data Audit Trail By Payroll Administration ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Payroll Period Data Audit Trail By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/auditTrail/EmployeeData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Trail"
					],
					"operation": [
						"Get Employee Data Audit Trail By Employer ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Employee Data Audit Trail By Employer ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Employee Data Audit Trail By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of the employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Trail"
					],
					"operation": [
						"Get Employee Data Audit Trail By Employer ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Employee Data Audit Trail By Employer ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Employee Data Audit Trail By Employer ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Employee Data Audit Trail By Employer ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Employee Data Audit Trail By Employer ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Employee Data Audit Trail By Employer ID"
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
						"Audit Trail"
					],
					"operation": [
						"Get Employee Data Audit Trail By Employer ID"
					]
				}
			}
		},
];
