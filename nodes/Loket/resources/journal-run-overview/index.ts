import type { INodeProperties } from 'n8n-workflow';

export const journalRunOverviewDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					]
				}
			},
			"options": [
				{
					"name": "Get Run Overview By Journal Run ID",
					"value": "Get Run Overview By Journal Run ID",
					"action": "Get journal run overview for a journal run",
					"description": "__Activity name :__ GetRunOverviewByJournalRunId\n\nReturns the journal run overview in csv for the journal run. Journal runs with journalRunStatus = 0,1,2,3 dont have results and this endpoint will return an error if called for a journal run with that status.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/journalruns/{{$parameter[\"journalrunId\"]}}/runoverview"
						}
					}
				},
				{
					"name": "Get Run Overview Per Employment By Journal Run ID",
					"value": "Get Run Overview Per Employment By Journal Run ID",
					"action": "Get journal run overview per employment for a journal run",
					"description": "__Activity name :__ GetRunOverviewPerEmploymentByJournalRunId\n\nReturns the journal run overview in csv for the journal run. Journal runs with journalRunStatus = 0,1,2,3 dont have results and this endpoint will return an error if called for a journal run with that status.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/journalruns/{{$parameter[\"journalrunId\"]}}/runoverviewperemployment"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/journalruns/{journalrunId}/runoverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview By Journal Run ID"
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
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview By Journal Run ID"
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
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Journalrun ID",
			"name": "journalrunId",
			"required": true,
			"description": "The unique identifier of the payroll run",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Journal Number",
			"name": "reportJournalNumber",
			"required": true,
			"description": "Dagboeknummer.",
			"default": 123,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportJournalNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Voucher Number",
			"name": "reportVoucherNumber",
			"required": true,
			"description": "Boekstuknummer.",
			"default": 456,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportVoucherNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Description",
			"name": "reportDescription",
			"description": "Omschrijving to be shown on the overview.",
			"default": 123,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportDescription",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Year",
			"name": "reportYear",
			"required": true,
			"description": "A valid year to be shown on the report.",
			"default": "2018",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Period Number",
			"name": "reportPeriodNumber",
			"required": true,
			"description": "A valid period number to be shown on the report.",
			"default": "01",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportPeriodNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Date",
			"name": "reportDate",
			"required": true,
			"description": "A valid booking date to be shown on the report.",
			"default": "2018-01-01",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/journalruns/{journalrunId}/runoverviewperemployment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview Per Employment By Journal Run ID"
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
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview Per Employment By Journal Run ID"
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
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview Per Employment By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Journalrun ID",
			"name": "journalrunId",
			"required": true,
			"description": "The unique identifier of the payroll run",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview Per Employment By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Journal Number",
			"name": "reportJournalNumber",
			"required": true,
			"description": "Dagboeknummer.",
			"default": 123,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportJournalNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview Per Employment By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Voucher Number",
			"name": "reportVoucherNumber",
			"required": true,
			"description": "Boekstuknummer.",
			"default": 456,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportVoucherNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview Per Employment By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Description",
			"name": "reportDescription",
			"description": "Omschrijving to be shown on the overview.",
			"default": 123,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportDescription",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview Per Employment By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Year",
			"name": "reportYear",
			"required": true,
			"description": "A valid year to be shown on the report.",
			"default": "2018",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportYear",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview Per Employment By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Period Number",
			"name": "reportPeriodNumber",
			"required": true,
			"description": "A valid period number to be shown on the report.",
			"default": "01",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportPeriodNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview Per Employment By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Report Date",
			"name": "reportDate",
			"required": true,
			"description": "A valid booking date to be shown on the report.",
			"default": "2018-01-01",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "reportDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Overview"
					],
					"operation": [
						"Get Run Overview Per Employment By Journal Run ID"
					]
				}
			}
		},
];
