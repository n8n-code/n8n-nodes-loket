import type { INodeProperties } from 'n8n-workflow';

export const contractCodeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					]
				}
			},
			"options": [
				{
					"name": "Delete Contract Code By Contract Code ID",
					"value": "Delete Contract Code By Contract Code ID",
					"action": "Delete a contract code record",
					"description": "__Activity name :__ DeleteContractCodeByContractCodeId\n\n\nDelete an existing contract code record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/contractcodes/{{$parameter[\"contractCodeId\"]}}"
						}
					}
				},
				{
					"name": "Get Contract Code By Contract Code ID",
					"value": "Get Contract Code By Contract Code ID",
					"action": "Details of a contract code",
					"description": "__Activity name :__ GetContractCodeByContractCodeId\n\n\nGet the details of a contract code\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/contractcodes/{{$parameter[\"contractCodeId\"]}}"
						}
					}
				},
				{
					"name": "Put Contract Code By Contract Code ID",
					"value": "Put Contract Code By Contract Code ID",
					"action": "Edit a contract code record",
					"description": "__Activity name :__ PutContractCodeByContractCodeId\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/contractcodes/{{$parameter[\"contractCodeId\"]}}"
						}
					}
				},
				{
					"name": "Get Contract Codes By Employer ID",
					"value": "Get Contract Codes By Employer ID",
					"action": "List contract codes for an employer",
					"description": "__Activity name :__ GetContractCodesByEmployerId\n\n\nGet a list of the contract codes for an employer.\n\n__Note:__ The contract codes defined at the employer level can be used as value for the field contractCode in the WorkingHours and ConceptEmployee resource.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/contractcodes"
						}
					}
				},
				{
					"name": "Post Contract Code By Employer ID",
					"value": "Post Contract Code By Employer ID",
					"action": "Add a contract code for an employer",
					"description": "__Activity name :__ PostContractCodeByEmployerId\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/contractcodes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/contractcodes/{contractCodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Delete Contract Code By Contract Code ID"
					]
				}
			}
		},
		{
			"displayName": "Contract Code ID",
			"name": "contractCodeId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Delete Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Delete Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Delete Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Delete Contract Code By Contract Code ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/contractcodes/{contractCodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Get Contract Code By Contract Code ID"
					]
				}
			}
		},
		{
			"displayName": "Contract Code ID",
			"name": "contractCodeId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Get Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Code By Contract Code ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/contractcodes/{contractCodeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Put Contract Code By Contract Code ID"
					]
				}
			}
		},
		{
			"displayName": "Contract Code ID",
			"name": "contractCodeId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Put Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Put Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Put Contract Code By Contract Code ID"
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
						"Contract Code"
					],
					"operation": [
						"Put Contract Code By Contract Code ID"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "number",
			"default": 1022,
			"description": "An unique code for the contract code within the scope of the employer",
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Put Contract Code By Contract Code ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Special contract",
			"description": "The description of the contract code",
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
						"Contract Code"
					],
					"operation": [
						"Put Contract Code By Contract Code ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Put Contract Code By Contract Code ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/contractcodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Get Contract Codes By Employer ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Codes By Employer ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Codes By Employer ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Codes By Employer ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Codes By Employer ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Codes By Employer ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Codes By Employer ID"
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
						"Contract Code"
					],
					"operation": [
						"Get Contract Codes By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/contractcodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Post Contract Code By Employer ID"
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
						"Contract Code"
					],
					"operation": [
						"Post Contract Code By Employer ID"
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
						"Contract Code"
					],
					"operation": [
						"Post Contract Code By Employer ID"
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
						"Contract Code"
					],
					"operation": [
						"Post Contract Code By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"type": "number",
			"default": 1022,
			"description": "An unique code for the contract code within the scope of the employer",
			"routing": {
				"send": {
					"property": "code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Post Contract Code By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Special contract",
			"description": "The description of the contract code",
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
						"Contract Code"
					],
					"operation": [
						"Post Contract Code By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contract Code"
					],
					"operation": [
						"Post Contract Code By Employer ID"
					]
				}
			}
		},
];
