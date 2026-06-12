import type { INodeProperties } from 'n8n-workflow';

export const payrollRunDownloadsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					]
				}
			},
			"options": [
				{
					"name": "Get Sepa File By Sepa File ID",
					"value": "Get Sepa File By Sepa File ID",
					"action": "Download a SEPA file",
					"description": "__Activity name :__ GetSepaFileBySepaFileId\n\nReturns the specified SEPA payments file as a XML file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/sepafiles/{{$parameter[\"sepafileId\"]}}"
						}
					}
				},
				{
					"name": "Get Payroll Run Balance Sheet By Payroll Run ID",
					"value": "Get Payroll Run Balance Sheet By Payroll Run ID",
					"action": "Get payroll run balance sheet",
					"description": "__Activity name :__ GetPayrollRunBalanceSheetByPayrollRunId\n\nThis endpoint returns per payroll components, marked as relevant for the general ledge (balance sheet), the sum of the values.\n\nIf for the given payroll period of the payroll run a \"journal profile\" is configured the endpoint also returns the ledger account and costcenter/costunit linked to the given payroll component in the \"journal profile\"\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/BalanceSheet"
						}
					}
				},
				{
					"name": "Get Default Set By Payroll Run ID",
					"value": "Get Default Set By Payroll Run ID",
					"action": "Download the default set of downloads for a payroll run",
					"description": "Returns the default set of downloads for the payroll run as a PDF file. The default set of downloads can be defined by the user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/defaultset"
						}
					}
				},
				{
					"name": "Get Errors And Warnings By Payroll Run ID",
					"value": "Get Errors And Warnings By Payroll Run ID",
					"action": "Download errors and warnings for a payroll run",
					"description": "__Activity name :__ GetErrorsAndWarningsByPayrollRunId\n\nReturns an overview of errors and warnings that occurred during the payroll run as a PDF file.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/errorsandwarnings"
						}
					}
				},
				{
					"name": "Get Journal Entries Per Distribution Unit Overviews By Payroll Run ID",
					"value": "Get Journal Entries Per Distribution Unit Overviews By Payroll Run ID",
					"action": "Download the journal entries by distribution Unit.",
					"description": "__Activity name :__ GetJournalEntriesPerDistributionUnitOverviewsByPayrollRunId\n\nReturns the journal entries by distribution Unit for a payroll run as a PDF file.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/journalentriesperdistributionunitoverviews"
						}
					}
				},
				{
					"name": "Get Payment Overviews By Payroll Run ID",
					"value": "Get Payment Overviews By Payroll Run ID",
					"action": "Download payment overviews for a payroll run",
					"description": "__Activity name :__ GetPaymentOverviewsByPayrollRunId\n\nReturns payment overviews for a payroll run as a PDF file. By default the payment overview 1 is returned.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/paymentoverviews"
						}
					}
				},
				{
					"name": "Get Payroll Control Register By Payroll Run ID",
					"value": "Get Payroll Control Register By Payroll Run ID",
					"action": "Download payroll control register for a payroll run",
					"description": "__Activity name :__ GetPayrollControlRegisterByPayrollRunId\n\nReturns payroll control register for a payroll run as a PDF file.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/payrollcontrolregister"
						}
					}
				},
				{
					"name": "Get Payslips By Payroll Run ID",
					"value": "Get Payslips By Payroll Run ID",
					"action": "Download payslips for a payroll run",
					"description": "__Activity name :__ GetPayslipsByPayrollRunId\n\n\nReturns the payslips for a payroll run as a PDF file. By default the payslips are sorted by `employeeNumber`.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/payslips"
						}
					}
				},
				{
					"name": "Get Run Overviews By Payroll Run ID",
					"value": "Get Run Overviews By Payroll Run ID",
					"action": "Download run overviews for a payroll run",
					"description": "__Activity name :__ GetRunOverviewsByPayrollRunId\n\nReturns run overviews for a payroll run as a PDF file.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/runoverviews"
						}
					}
				},
				{
					"name": "Get Sepa Files By Payroll Run ID",
					"value": "Get Sepa Files By Payroll Run ID",
					"action": "Get a list of SEPA files for a payroll run",
					"description": "__Activity name :__ GetSepaFilesByPayrollRunId\n\nReturns the SEPA file(s) for the specified payroll run.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/sepafiles"
						}
					}
				},
				{
					"name": "Get Total Sepa File By Payroll Run ID",
					"value": "Get Total Sepa File By Payroll Run ID",
					"action": "Download a total SEPA file",
					"description": "__Activity name :__ GetTotalSepaFileByPayrollRunId\n\nReturns the total SEPA payments file as a XML file. This file contains the payments of all the available SEPA payment files available for the specified payroll run.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/totalsepafile"
						}
					}
				},
				{
					"name": "Get Wage Sheets By Payroll Run ID",
					"value": "Get Wage Sheets By Payroll Run ID",
					"action": "Download wage sheets for a payroll run",
					"description": "__Activity name :__ GetWageSheetsByPayrollRunId\n\nReturns the wage sheets for a payroll run as a PDF file or XLSX file. By default the wage sheets contain information on both the employer and the employees.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/payrollruns/{{$parameter[\"payrollrunId\"]}}/wagesheets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/sepafiles/{sepafileId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Sepa File By Sepa File ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Sepa File By Sepa File ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Sepa File By Sepa File ID"
					]
				}
			}
		},
		{
			"displayName": "Sepafile ID",
			"name": "sepafileId",
			"required": true,
			"description": "Sepa file ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Sepa File By Sepa File ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Type",
			"name": "paymentType",
			"description": "Indicates the type of payment for the SEPA file.\nIn case salary is selected the following will be included in the SEPA xml file\n```\n  <CtgyPurp>\n    <Cd>SALA</Cd>\n  </CtgyPurp>\n```",
			"default": "Salary",
			"type": "options",
			"options": [
				{
					"name": "Other",
					"value": "Other"
				},
				{
					"name": "Salary",
					"value": "Salary"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "paymentType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Sepa File By Sepa File ID"
					]
				}
			}
		},
		{
			"displayName": "Batch Booking",
			"name": "batchBooking",
			"description": "Determines whether the Batch Booking \\<BtchBookg\\> tag is included in the SEPA file and if it is which value it is set to.  By defualt this value is set to Exclude.\n\nPossible values for this parameter are:\n- Exclude: Do not include \\<BtchBookg\\> tag in SEPA file\n- IncludeTrue: Include \\<BtchBookg\\> tag in SEPA file and set it to 'True'\n- IncludeFalse: Include \\<BtchBookg\\> tag in SEPA file and set it to 'False'\n",
			"default": "BtchBookgExclude",
			"type": "options",
			"options": [
				{
					"name": "Btch Bookg Exclude",
					"value": "BtchBookgExclude"
				},
				{
					"name": "Btch Bookg True",
					"value": "BtchBookgTrue"
				},
				{
					"name": "Btch Bookg False",
					"value": "BtchBookgFalse"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "batchBooking",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Sepa File By Sepa File ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Sepa File By Sepa File ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/BalanceSheet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payroll Run Balance Sheet By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payroll Run Balance Sheet By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payroll Run Balance Sheet By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payroll Run Balance Sheet By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/defaultset",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Default Set By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Default Set By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Default Set By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Default Set By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/errorsandwarnings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Errors And Warnings By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Errors And Warnings By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Errors And Warnings By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Errors And Warnings By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/journalentriesperdistributionunitoverviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Journal Entries Per Distribution Unit Overviews By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Journal Entries Per Distribution Unit Overviews By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Journal Entries Per Distribution Unit Overviews By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Journal Entries Per Distribution Unit Overviews By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/paymentoverviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payment Overviews By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payment Overviews By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payment Overviews By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payment Overviews By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/payrollcontrolregister",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payroll Control Register By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payroll Control Register By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payroll Control Register By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payroll Control Register By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/payslips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payslips By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payslips By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payslips By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Payslips By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/runoverviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Run Overviews By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Run Overviews By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Run Overviews By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Run Overviews By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/sepafiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Sepa Files By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Sepa Files By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Sepa Files By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Sepa Files By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/totalsepafile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Total Sepa File By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Total Sepa File By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Total Sepa File By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Total Sepa File By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Type",
			"name": "paymentType",
			"description": "Indicates the type of payment for the SEPA file.\nIn case salary is selected the following will be included in the SEPA xml file\n```\n  <CtgyPurp>\n    <Cd>SALA</Cd>\n  </CtgyPurp>\n```",
			"default": "Salary",
			"type": "options",
			"options": [
				{
					"name": "Other",
					"value": "Other"
				},
				{
					"name": "Salary",
					"value": "Salary"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "paymentType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Total Sepa File By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "Batch Booking",
			"name": "batchBooking",
			"description": "Determines whether the Batch Booking \\<BtchBookg\\> tag is included in the SEPA file and if it is which value it is set to.  By defualt this value is set to Exclude.\n\nPossible values for this parameter are:\n- Exclude: Do not include \\<BtchBookg\\> tag in SEPA file\n- IncludeTrue: Include \\<BtchBookg\\> tag in SEPA file and set it to 'True'\n- IncludeFalse: Include \\<BtchBookg\\> tag in SEPA file and set it to 'False'\n",
			"default": "BtchBookgExclude",
			"type": "options",
			"options": [
				{
					"name": "Btch Bookg Exclude",
					"value": "BtchBookgExclude"
				},
				{
					"name": "Btch Bookg True",
					"value": "BtchBookgTrue"
				},
				{
					"name": "Btch Bookg False",
					"value": "BtchBookgFalse"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "batchBooking",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Total Sepa File By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Total Sepa File By Payroll Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/payrollruns/{payrollrunId}/wagesheets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Wage Sheets By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Wage Sheets By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Wage Sheets By Payroll Run ID"
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
						"Payroll Run Downloads"
					],
					"operation": [
						"Get Wage Sheets By Payroll Run ID"
					]
				}
			}
		},
];
