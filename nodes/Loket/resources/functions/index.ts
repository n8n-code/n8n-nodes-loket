import type { INodeProperties } from 'n8n-workflow';

export const functionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					]
				}
			},
			"options": [
				{
					"name": "Get Function By Function ID",
					"value": "Get Function By Function ID",
					"action": "Details of a function",
					"description": "__Activity name:__ GetFunctionByFunctionId\n\nGet the details of function\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/functions/{{$parameter[\"functionId\"]}}"
						}
					}
				},
				{
					"name": "Put Function By Function ID",
					"value": "Put Function By Function ID",
					"action": "Edit the details of a function",
					"description": "__Activity name:__ PutFunctionByFunctionId\n\nEdit the details for a function\n\n__Metadata:__ No metadata\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/functions/{{$parameter[\"functionId\"]}}"
						}
					}
				},
				{
					"name": "Get Functions By Employer ID",
					"value": "Get Functions By Employer ID",
					"action": "List of functions",
					"description": "__Activity name :__ GetFunctionsByEmployerId\n\nGet a list of all functions for the employer. This is the point where the functions available for use at employment level (organizational entity) are managed.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/functions"
						}
					}
				},
				{
					"name": "Post Function By Employer ID",
					"value": "Post Function By Employer ID",
					"action": "Create a function for an employer",
					"description": "__Activity name:__ PostFunctionByEmployerId\n    \n\nCreate a function for an employer\n\n__Metadata:__ No metadata\n\n__Defaults:__ No default values\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/functions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/functions/{functionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Get Function By Function ID"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "The unique identifier of the function",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Get Function By Function ID"
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
						"Functions"
					],
					"operation": [
						"Get Function By Function ID"
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
						"Functions"
					],
					"operation": [
						"Get Function By Function ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/functions/{functionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Put Function By Function ID"
					]
				}
			}
		},
		{
			"displayName": "Function ID",
			"name": "functionId",
			"required": true,
			"description": "The unique identifier of the function",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Put Function By Function ID"
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
						"Functions"
					],
					"operation": [
						"Put Function By Function ID"
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
						"Functions"
					],
					"operation": [
						"Put Function By Function ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Put Function By Function ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Directeur",
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
						"Functions"
					],
					"operation": [
						"Put Function By Function ID"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "string",
			"default": "Var",
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Put Function By Function ID"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID).\n",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Put Function By Function ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/functions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Get Functions By Employer ID"
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
						"Functions"
					],
					"operation": [
						"Get Functions By Employer ID"
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
						"Functions"
					],
					"operation": [
						"Get Functions By Employer ID"
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
						"Functions"
					],
					"operation": [
						"Get Functions By Employer ID"
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
						"Functions"
					],
					"operation": [
						"Get Functions By Employer ID"
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
						"Functions"
					],
					"operation": [
						"Get Functions By Employer ID"
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
						"Functions"
					],
					"operation": [
						"Get Functions By Employer ID"
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
						"Functions"
					],
					"operation": [
						"Get Functions By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/functions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Post Function By Employer ID"
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
						"Functions"
					],
					"operation": [
						"Post Function By Employer ID"
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
						"Functions"
					],
					"operation": [
						"Post Function By Employer ID"
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
						"Functions"
					],
					"operation": [
						"Post Function By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Directeur",
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
						"Functions"
					],
					"operation": [
						"Post Function By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "string",
			"default": "Var",
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Post Function By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID).\n",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Functions"
					],
					"operation": [
						"Post Function By Employer ID"
					]
				}
			}
		},
];
