import type { INodeProperties } from 'n8n-workflow';

export const journalRunDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					]
				}
			},
			"options": [
				{
					"name": "Get Journal Run By Journal Run ID",
					"value": "Get Journal Run By Journal Run ID",
					"action": "Details of a journal run",
					"description": "__Activity name :__ GetJournalRunByJournalRunId\n\nReturns the details of a journal run. </br>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/journalruns/{{$parameter[\"journalrunId\"]}}"
						}
					}
				},
				{
					"name": "Patch Journal Run By Journal Run ID",
					"value": "Patch Journal Run By Journal Run ID",
					"action": "Change the status of a journal run",
					"description": "__Activity name :__ PatchJournalRunByJournalRunId\n\nUpdate the status of a journal run\n* Action 'markAsSuccessfullyExported'; will change the status of the journal run to 'exported'. Please note this action will not perform an actual export, but simply allows the user the manage status to match their actualities.</br>\n* Action 'MarkAsProcessingFailed'; will change the status of the journal run to 'export failed'. Please note this action will not perform an actual export, but simply allows the user the manage status to match their actualities.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/payrolladministrations/journalruns/{{$parameter[\"journalrunId\"]}}"
						}
					}
				},
				{
					"name": "Post Download Journal Run Export By Journal Run ID",
					"value": "Post Download Journal Run Export By Journal Run ID",
					"action": "Download the journal run",
					"description": "__Activity name :__ PostDownloadJournalRunExportByJournalRunId\n\nDownload a journal run to a journal application. Use the defaults and metadata to acquire the journal application settings.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/journalruns/{{$parameter[\"journalrunId\"]}}/download"
						}
					}
				},
				{
					"name": "Get Journal Run Errors By Journal Run ID",
					"value": "Get Journal Run Errors By Journal Run ID",
					"action": "Errors of a journal run",
					"description": "__Activity name :__ GetJournalRunErrorsByJournalRunId\n\nErrors that occured while processing the journalrun can be obtained via this endpoint.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/journalruns/{{$parameter[\"journalrunId\"]}}/errors"
						}
					}
				},
				{
					"name": "Get Journal Run Export Audit Trail By Journal Run ID",
					"value": "Get Journal Run Export Audit Trail By Journal Run ID",
					"action": "List export attempts for a journal run",
					"description": "__Activity name :__ GetJournalRunExportAuditTrailByJournalRunId\n\nReturns the export audit trail for a journal run\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/journalruns/{{$parameter[\"journalrunId\"]}}/exportAuditTrail"
						}
					}
				},
				{
					"name": "Post Send Journal Run Export By Journal Run ID",
					"value": "Post Send Journal Run Export By Journal Run ID",
					"action": "Send the journal run",
					"description": "__Activity name :__ PostSendJournalRunExportByJournalRunId\n\nSend a journal run to a journal application. Use the defaults and metadata to acquire the journal application settings. The defaults endpoint contains values for all required fields. \n\nThere are two metadata endpoints: \n\n- /journalruns/{journalrunId}/send/metadata\n\n- /journalruns/{journalrunId}/send/metadata/accountId/{accountId}\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/journalruns/{{$parameter[\"journalrunId\"]}}/send"
						}
					}
				},
				{
					"name": "Get Journal Runs By Payroll Administration ID",
					"value": "Get Journal Runs By Payroll Administration ID",
					"action": "List of journal runs for an administration",
					"description": "__Activity name :__ GetJournalRunsByPayrollAdministrationId\n\nReturns the journal runs for a payroll administration.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/journalruns"
						}
					}
				},
				{
					"name": "Post Initiate Journal Run By Payroll Administration ID",
					"value": "Post Initiate Journal Run By Payroll Administration ID",
					"action": "Initiate journal run (journaliseren)",
					"description": "__Activity name :__ PostInitiateJournalRunByPayrollAdministrationId This is a controller endpoint to perform an action.\n\nIn the older Loket GUI this specific action is referred to as 'journaliseren' If this action is performed succesfully the journal run will be created with status 0 and will be queud for processing. After the initiated run has been picked up and processed by the background process, then the status of the run will be changed accordingly.\n\nThis action may be performed for all payroll periods that are *available for the payroll administration* AND that meet one of the following requirements;\n* The payroll period is less then 7 years in the past\n* There is a journal profile configured for the given payroll period\n* There is an approved payroll run for the given payroll period that has no other journalruns except for failed or removed journalruns\n* All the payroll runs are processed in order so in order to start a journalrun the previous payrollrun (that should have a journalrun) has to have a succesfull journal run in order to start the next one\n\n__Metadata :__  No metadata endpoint available for this controller endpoint.\n\n__Defaults :__ Defaults endpoint is available for this controller endpoint by adding /defaults. Also, an endpoint is available to retrieve initiation values for a specific period.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/journalruns/initiate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/journalruns/{journalrunId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Get Journal Run By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/payrolladministrations/journalruns/{journalrunId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Patch Journal Run By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Patch Journal Run By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Patch Journal Run By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Patch Journal Run By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"type": "options",
			"default": "MarkAsProcessed",
			"description": "The action to perform on the journal run\n* MarkAsProcessed  --> (from the loket.nl point of view) Indicates that the client succesfully processed the data (indicating that the results were imported in the financial application).\n* MarkAsProcessingFailed --> (from the loket.nl point of view) Indicates that the client was unable to process the results. Use the `message` field to communicate the error(s).",
			"options": [
				{
					"name": "Mark As Processed",
					"value": "MarkAsProcessed"
				},
				{
					"name": "Mark As Processing Failed",
					"value": "MarkAsProcessingFailed"
				}
			],
			"routing": {
				"send": {
					"property": "action",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Patch Journal Run By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Application",
			"name": "application",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Financieel pakket 1\"\n}",
			"description": "The application that downloaded and processed the results",
			"routing": {
				"send": {
					"property": "application",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Patch Journal Run By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"description": "Message to be displayed to the loket.nl user",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Patch Journal Run By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/journalruns/{journalrunId}/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Download Journal Run Export By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Post Download Journal Run Export By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Post Download Journal Run Export By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Post Download Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "2022-01-01",
			"description": "Date",
			"routing": {
				"send": {
					"property": "date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Download Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Include Cost Center",
			"name": "includeCostCenter",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether cost centers are included in the journal.",
			"routing": {
				"send": {
					"property": "includeCostCenter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Download Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Include Cost Unit",
			"name": "includeCostUnit",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether cost units are included in the journal.",
			"routing": {
				"send": {
					"property": "includeCostUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Download Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/journalruns/{journalrunId}/errors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Errors By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Errors By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Errors By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Errors By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/journalruns/{journalrunId}/exportAuditTrail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Export Audit Trail By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Export Audit Trail By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Export Audit Trail By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Export Audit Trail By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Export Audit Trail By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Export Audit Trail By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Export Audit Trail By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Run Export Audit Trail By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/journalruns/{journalrunId}/send",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
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
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Account",
			"name": "account",
			"type": "json",
			"default": "{\n  \"id\": 2,\n  \"value\": \"Account Jan\"\n}",
			"description": "The account to connect to the journal application.",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Account Key",
			"name": "accountKey",
			"type": "string",
			"default": "User1",
			"routing": {
				"send": {
					"property": "accountKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Administration",
			"name": "administration",
			"type": "json",
			"default": "{\n  \"id\": 223,\n  \"value\": \"Administration A\"\n}",
			"description": "The administration in the journalapplication to which the journal will be added.",
			"routing": {
				"send": {
					"property": "administration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "string",
			"default": "2022-01-01",
			"description": "Date",
			"routing": {
				"send": {
					"property": "date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Opmerking 1",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Journal Series",
			"name": "deviatingJournalSeries",
			"type": "string",
			"default": "Afwijking1",
			"routing": {
				"send": {
					"property": "deviatingJournalSeries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Financial Year",
			"name": "financialYear",
			"type": "number",
			"default": 2023,
			"routing": {
				"send": {
					"property": "financialYear",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Include Cost Center",
			"name": "includeCostCenter",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether cost centers are included in the journal.",
			"routing": {
				"send": {
					"property": "includeCostCenter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Include Cost Unit",
			"name": "includeCostUnit",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether cost units are included in the journal.",
			"routing": {
				"send": {
					"property": "includeCostUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Journal Code",
			"name": "journalCode",
			"type": "string",
			"default": "2",
			"routing": {
				"send": {
					"property": "journalCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Journal Number",
			"name": "journalNumber",
			"type": "number",
			"default": 2,
			"routing": {
				"send": {
					"property": "journalNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Link Cost Center To Group",
			"name": "linkCostCenterToGroup",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The Group to which the CostCenter will be linked.\n",
			"routing": {
				"send": {
					"property": "linkCostCenterToGroup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Link Cost Unit To Group",
			"name": "linkCostUnitToGroup",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The Group to which the CostUnit will be linked.\n",
			"routing": {
				"send": {
					"property": "linkCostUnitToGroup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"type": "number",
			"default": 2,
			"description": "the period to which the journal should be added.",
			"routing": {
				"send": {
					"property": "period",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Sub Administration",
			"name": "subAdministration",
			"type": "json",
			"default": "{\n  \"Id\": 223,\n  \"Name\": \"Administration A\"\n}",
			"description": "The subadministration in the journalapplication to which the journal will be added.",
			"routing": {
				"send": {
					"property": "subAdministration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "user",
			"type": "string",
			"default": "User1",
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Send Journal Run Export By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/journalruns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Get Journal Runs By Payroll Administration ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Runs By Payroll Administration ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Runs By Payroll Administration ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Runs By Payroll Administration ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Runs By Payroll Administration ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Runs By Payroll Administration ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Runs By Payroll Administration ID"
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
						"Journal Run"
					],
					"operation": [
						"Get Journal Runs By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/{payrollAdministrationId}/journalruns/initiate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run"
					],
					"operation": [
						"Post Initiate Journal Run By Payroll Administration ID"
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
						"Journal Run"
					],
					"operation": [
						"Post Initiate Journal Run By Payroll Administration ID"
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
						"Journal Run"
					],
					"operation": [
						"Post Initiate Journal Run By Payroll Administration ID"
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
						"Journal Run"
					],
					"operation": [
						"Post Initiate Journal Run By Payroll Administration ID"
					]
				}
			}
		},
];
