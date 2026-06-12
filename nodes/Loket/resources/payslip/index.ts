import type { INodeProperties } from 'n8n-workflow';

export const payslipDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					]
				}
			},
			"options": [
				{
					"name": "Get Payroll Period Results By Employment ID And Year",
					"value": "Get Payroll Period Results By Employment ID And Year",
					"action": "Get payroll period results of an employment for a year",
					"description": "__Activity name :__ GetPayrollPeriodResultsByEmploymentIdAndYear\n\nDownload the payroll results (conform overzicht strook) of an employment per payroll period for the provided year.\n\n**Please note the following:**  There is a major functional difference between acquiring the payslips per payroll run or acquiring payroll results per payroll period(in this case a year). In Loket, for each (approved) run there will be payroll results for that run. Each employment with any results in that payroll run will have (one or more) payslips, these are the payroll results/ payslips for that run. Often these results relate to the payroll period for which that payroll run is performed, but the results may apply to other payroll periods. __For example:__ the payroll run for March may contain results that apply to the months January and/or February. (this may occur within a specific year)\n\n* Requesting payslips/results per RUN will provide you all payroll results from that specific payrollrun regardless of the period it applies to.\n* Requesting PERIOD results will provide you all (approved) payroll results for that period regardless of the payroll run it comes from.\n\nDe facto the payslips/results per RUN are your actual payslips (loonstrook). The results per period are more useful as an overview per period (overzichtstrook).\n\nOne more remark: the response of this endpoint is dependent on the role of the user. If the user has role 'werknemer' than the results shown are only based on those approved payroll runs where the ESS-date is on or before today. For other users the results will contain data from all approved payroll runs regardless of ESS-date.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/payrollperiodresults/year/{{$parameter[\"year\"]}}"
						}
					}
				},
				{
					"name": "Get Payslips By Employment ID",
					"value": "Get Payslips By Employment ID",
					"action": "List of payslips for an employment",
					"description": "__Activity name :__ GetPayslipsByEmploymentId\n\nGet a list of payslips for the specified employment, including the GUID of the corresponding payroll run.\n\nThe function of this endpoint is dependent on the role of the user;\n* For users with the role of 'werknemer';  The endpoint only returns results for payrollruns that have the status 'approved' AND for which results of the payroll are available for ESS (based on the ESS-date of the payrollrun) .\n* For users with any other role (in most cases); the endpoin returns results for approved payrollruns irregardless of the ESS date.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/payslips"
						}
					}
				},
				{
					"name": "Get Payroll Period Summary By Employment ID And Payroll Period ID",
					"value": "Get Payroll Period Summary By Employment ID And Payroll Period ID",
					"action": "Download a cummulative payslip for a single payroll period",
					"description": "__Activity name :__ GetPayrollPeriodSummaryByEmploymentIdAndPayrollPeriodId\n\nDownload a cummulative payslip for a single payroll period in a single PDF.\n\ne.g. If the employment has to payslips for a single period this endpoint will return one (summary)payslip that is the cummaltion of both the payslips.\n\n__Metadata :__ Possible options for `payrollPeriodId` can be acquired (GET) the following URL /providers/employers/employees/employments/{employmentId}/payslips/summary/metadata.\nPlease note that the returned payroll periods are dependend on the year filter setting for the employer. The options are, return payroll periodes for:\n \n* current payroll year * current and previous payroll year * all payroll years\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/payslips/summary/{{$parameter[\"payrollPeriodId\"]}}"
						}
					}
				},
				{
					"name": "Get Payslips By Employment ID And Payroll Run ID",
					"value": "Get Payslips By Employment ID And Payroll Run ID",
					"action": "Download payslips of an employment for a payrollrun",
					"description": "__Activity name :__ GetPayslipsByEmploymentIdAndPayrollRunId\n\nDownload the payslips or its underlying payroll results of an employment for the specified payrollrun\n\n**Please note: this endpoint has two types of output:**\n* the payslip(s) as a single PDF-file\n* the underlying payroll result data for the payslip(s) in JSON-format  \n\nThis may be specified by providing the desired format in the `Accept` header of your request.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/payslips/{{$parameter[\"payrollrunId\"]}}"
						}
					}
				},
				{
					"name": "Get Payslips By Employment ID And Year",
					"value": "Get Payslips By Employment ID And Year",
					"action": "Download payslips for an employment and year",
					"description": "__Activity name :__ GetPayslipsByEmploymentIdAndYear\n\nDownload the payslips for a payroll year in a single PDF\n\n__Metadata :__ Possible options for `year` can be acquired (GET) the following URL /providers/employers/employees/employments/{employmentId}/payslips/metadata.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/payslips/{{$parameter[\"year\"]}}"
						}
					}
				},
				{
					"name": "Get Wage Sheet By Employment ID And Year",
					"value": "Get Wage Sheet By Employment ID And Year",
					"action": "Download wage sheets for an employment",
					"description": "__Activity name :__ GetWageSheetByEmploymentIdAndYear\n\nDownload the wagesheet (loonstaat) for a payroll year\n\n__Metadata :__ Possible options for `year` can be acquired (GET) the following URL /providers/employers/employees/employments/{employmentId}/wagesheet/metadata.\n\nReturns the wage sheets for an employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/wagesheet/{{$parameter[\"year\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/payrollperiodresults/year/{year}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Payroll Period Results By Employment ID And Year"
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
						"Payslip"
					],
					"operation": [
						"Get Payroll Period Results By Employment ID And Year"
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
						"Payslip"
					],
					"operation": [
						"Get Payroll Period Results By Employment ID And Year"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Payroll Period Results By Employment ID And Year"
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
						"Payslip"
					],
					"operation": [
						"Get Payroll Period Results By Employment ID And Year"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/payslips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/payslips/summary/{payrollPeriodId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Payroll Period Summary By Employment ID And Payroll Period ID"
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
						"Payslip"
					],
					"operation": [
						"Get Payroll Period Summary By Employment ID And Payroll Period ID"
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
						"Payslip"
					],
					"operation": [
						"Get Payroll Period Summary By Employment ID And Payroll Period ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Payroll Period Summary By Employment ID And Payroll Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period ID",
			"name": "payrollPeriodId",
			"required": true,
			"description": "The unique identifier of an payroll period",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Payroll Period Summary By Employment ID And Payroll Period ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/payslips/{payrollrunId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID And Payroll Run ID"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID And Payroll Run ID"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID And Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID And Payroll Run ID"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID And Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/payslips/{year}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID And Year"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID And Year"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID And Year"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID And Year"
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
						"Payslip"
					],
					"operation": [
						"Get Payslips By Employment ID And Year"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/wagesheet/{year}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Wage Sheet By Employment ID And Year"
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
						"Payslip"
					],
					"operation": [
						"Get Wage Sheet By Employment ID And Year"
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
						"Payslip"
					],
					"operation": [
						"Get Wage Sheet By Employment ID And Year"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payslip"
					],
					"operation": [
						"Get Wage Sheet By Employment ID And Year"
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
						"Payslip"
					],
					"operation": [
						"Get Wage Sheet By Employment ID And Year"
					]
				}
			}
		},
];
