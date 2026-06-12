import type { INodeProperties } from 'n8n-workflow';

export const upaPensionDeclarationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Upa Pension Declaration"
					]
				}
			},
			"options": [
				{
					"name": "Get Upa Pension Declaration By Upa Pension Declaration ID",
					"value": "Get Upa Pension Declaration By Upa Pension Declaration ID",
					"action": "Detail UPA pension declaration",
					"description": "__Activity name :__ GetUpaPensionDeclarationByUpaPensionDeclarationId\n\nDetails of UPA pension declaration\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/upapensiondeclarations/{{$parameter[\"upaPensionDeclarationId\"]}}"
						}
					}
				},
				{
					"name": "Patch Upa Pension Declaration By Upa Pension Declaration ID",
					"value": "Patch Upa Pension Declaration By Upa Pension Declaration ID",
					"action": "Change the status of a upa pension declaration",
					"description": "__Activity name :__ PatchUpaPensionDeclarationByUpaPensionDeclarationId\n\nThis endpoints changes the status of the Upa pensiondeclaration based on the provided action.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/payrolladministrations/upapensiondeclarations/{{$parameter[\"upaPensionDeclarationId\"]}}"
						}
					}
				},
				{
					"name": "Get Message By Upa Pension Declaration ID",
					"value": "Get Message By Upa Pension Declaration ID",
					"action": "Download the message of a of an UPA pension declaration",
					"description": "__Activity name :__ GetMessageByUpaPensionDeclarationId  \n\nDownload the message of the UPA pension declaration (pensioenaangiftebericht) in xml. Please note that this does NOT refer to the response message, but to the initial message i.e. pensioenaangiftebericht.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/upapensiondeclarations/{{$parameter[\"upaPensionDeclarationId\"]}}/message"
						}
					}
				},
				{
					"name": "Get Upa Pension Declarations By Payroll Administration ID",
					"value": "Get Upa Pension Declarations By Payroll Administration ID",
					"action": "List of UPA pension declarations",
					"description": "__Activity name :__ GetUpaPensionDeclarationsByPayrollAdministrationId\n\nA list of UPA pension declarations for an administration\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/upapensiondeclarations"
						}
					}
				},
				{
					"name": "Post Initiate Upa Pension Declaration By Payroll Administration ID",
					"value": "Post Initiate Upa Pension Declaration By Payroll Administration ID",
					"action": "Initiate a UPA pension declaration",
					"description": "__Activity name :__ PostInitiateUpaPensionDeclarationByPayrollAdministrationId\n\nInitiate the pension declaration for the next available period for the payrolladministration. Information about the next available periode can be obtained using the defaults endpoint (/defaults) \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/upapensiondeclarations/initiate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/upapensiondeclarations/{upaPensionDeclarationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declaration By Upa Pension Declaration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declaration By Upa Pension Declaration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declaration By Upa Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "Upa Pension Declaration ID",
			"name": "upaPensionDeclarationId",
			"required": true,
			"description": "The unique identifier of the pension declaration.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declaration By Upa Pension Declaration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declaration By Upa Pension Declaration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declaration By Upa Pension Declaration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declaration By Upa Pension Declaration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declaration By Upa Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/payrolladministrations/upapensiondeclarations/{upaPensionDeclarationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Upa Pension Declaration"
					],
					"operation": [
						"Patch Upa Pension Declaration By Upa Pension Declaration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Patch Upa Pension Declaration By Upa Pension Declaration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Patch Upa Pension Declaration By Upa Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "Upa Pension Declaration ID",
			"name": "upaPensionDeclarationId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Upa Pension Declaration"
					],
					"operation": [
						"Patch Upa Pension Declaration By Upa Pension Declaration ID"
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
			"description": "The action to perform on the upa pensiondeclaration",
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Patch Upa Pension Declaration By Upa Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/upapensiondeclarations/{upaPensionDeclarationId}/message",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Message By Upa Pension Declaration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Message By Upa Pension Declaration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Message By Upa Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "Upa Pension Declaration ID",
			"name": "upaPensionDeclarationId",
			"required": true,
			"description": "The unique identifier of the pension declaration.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Message By Upa Pension Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/upapensiondeclarations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declarations By Payroll Administration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declarations By Payroll Administration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declarations By Payroll Administration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declarations By Payroll Administration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declarations By Payroll Administration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declarations By Payroll Administration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declarations By Payroll Administration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Get Upa Pension Declarations By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/{payrollAdministrationId}/upapensiondeclarations/initiate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Upa Pension Declaration"
					],
					"operation": [
						"Post Initiate Upa Pension Declaration By Payroll Administration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Post Initiate Upa Pension Declaration By Payroll Administration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Post Initiate Upa Pension Declaration By Payroll Administration ID"
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
						"Upa Pension Declaration"
					],
					"operation": [
						"Post Initiate Upa Pension Declaration By Payroll Administration ID"
					]
				}
			}
		},
];
