import type { INodeProperties } from 'n8n-workflow';

export const apgPensionDeclarationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Apg Pension Declaration"
					]
				}
			},
			"options": [
				{
					"name": "Get Apg Pension Declaration By Apg Pension Declaration ID",
					"value": "Get Apg Pension Declaration By Apg Pension Declaration ID",
					"action": "Detail APG pension declaration for an administration",
					"description": "__Activity name :__ GetApgPensionDeclarationByApgPensionDeclarationId\n\n\nDetails of APG pension declaration\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/apgpensiondeclarations/{{$parameter[\"apgPensionDeclarationId\"]}}"
						}
					}
				},
				{
					"name": "Patch Apg Pension Declaration By Apg Pension Declaration ID",
					"value": "Patch Apg Pension Declaration By Apg Pension Declaration ID",
					"action": "Change the status of a apg pension declaration",
					"description": "__Activity name :__ PatchApgPensionDeclarationByApgPensionDeclarationId\n\n\nThis endpoints changes the status of the Apg pensiondeclaration based on the provided action.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/payrolladministrations/apgpensiondeclarations/{{$parameter[\"apgPensionDeclarationId\"]}}"
						}
					}
				},
				{
					"name": "Get Message By Apg Pension Declaration ID",
					"value": "Get Message By Apg Pension Declaration ID",
					"action": "Download the message of a of an APG pension declaration",
					"description": "__Activity name :__ GetMessageByApgPensionDeclarationId  \n\n\nDownload the message of the APG pension declaration (pensioenaangiftebericht) in xml. Please note that this does NOT refer to the response message, but to the initial message i.e. pensioenaangiftebericht.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/apgpensiondeclarations/{{$parameter[\"apgPensionDeclarationId\"]}}/message"
						}
					}
				},
				{
					"name": "Get Overview By Apg Pension Declaration ID",
					"value": "Get Overview By Apg Pension Declaration ID",
					"action": "Download the overview report of an APG pension declaration",
					"description": "__Activity name :__ GetOverviewByApgPensionDeclarationId\n\n\nDownload the APG pension declaration overiew\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/apgpensiondeclarations/{{$parameter[\"apgPensionDeclarationId\"]}}/overview"
						}
					}
				},
				{
					"name": "Get Apg Pension Declarations By Payroll Administration ID",
					"value": "Get Apg Pension Declarations By Payroll Administration ID",
					"action": "List of APG pension declarations for an administration",
					"description": "__Activity name :__ GetApgPensionDeclarationsByPayrollAdministrationId\n\n\nA list of APG pension declarations for an administration\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/apgpensiondeclarations"
						}
					}
				},
				{
					"name": "Post Initiate Apg Pension Declaration By Payroll Administration ID",
					"value": "Post Initiate Apg Pension Declaration By Payroll Administration ID",
					"action": "Initiate a APG pension declaration",
					"description": "__Activity name :__ PostInitiateApgPensionDeclarationByPayrollAdministrationId\n\n\nInitiate the pension declaration for the next available period for the payrolladministration. Information about the next available periode can be obtained using the defaults endpoint (/defaults) \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/apgpensiondeclarations/initiate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/apgpensiondeclarations/{apgPensionDeclarationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declaration By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declaration By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declaration By Apg Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "Apg Pension Declaration ID",
			"name": "apgPensionDeclarationId",
			"required": true,
			"description": "The unique identifier of the payroll tax return",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declaration By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declaration By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declaration By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declaration By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declaration By Apg Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/payrolladministrations/apgpensiondeclarations/{apgPensionDeclarationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apg Pension Declaration"
					],
					"operation": [
						"Patch Apg Pension Declaration By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Patch Apg Pension Declaration By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Patch Apg Pension Declaration By Apg Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "Apg Pension Declaration ID",
			"name": "apgPensionDeclarationId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Apg Pension Declaration"
					],
					"operation": [
						"Patch Apg Pension Declaration By Apg Pension Declaration ID"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action",
			"name": "action",
			"type": "options",
			"default": "confirm",
			"description": "The action to perform on the apg pensiondeclaration",
			"options": [
				{
					"name": "Confirm",
					"value": "confirm"
				},
				{
					"name": "Cancel",
					"value": "cancel"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Patch Apg Pension Declaration By Apg Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/apgpensiondeclarations/{apgPensionDeclarationId}/message",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Message By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Message By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Message By Apg Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "Apg Pension Declaration ID",
			"name": "apgPensionDeclarationId",
			"required": true,
			"description": "The unique identifier of the payroll tax return",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Message By Apg Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/apgpensiondeclarations/{apgPensionDeclarationId}/overview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Overview By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Overview By Apg Pension Declaration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Overview By Apg Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "Apg Pension Declaration ID",
			"name": "apgPensionDeclarationId",
			"required": true,
			"description": "The unique identifier of the payroll tax return",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Overview By Apg Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/apgpensiondeclarations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declarations By Payroll Administration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declarations By Payroll Administration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declarations By Payroll Administration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declarations By Payroll Administration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declarations By Payroll Administration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declarations By Payroll Administration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declarations By Payroll Administration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Get Apg Pension Declarations By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/{payrollAdministrationId}/apgpensiondeclarations/initiate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Apg Pension Declaration"
					],
					"operation": [
						"Post Initiate Apg Pension Declaration By Payroll Administration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Post Initiate Apg Pension Declaration By Payroll Administration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Post Initiate Apg Pension Declaration By Payroll Administration ID"
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
						"Apg Pension Declaration"
					],
					"operation": [
						"Post Initiate Apg Pension Declaration By Payroll Administration ID"
					]
				}
			}
		},
];
