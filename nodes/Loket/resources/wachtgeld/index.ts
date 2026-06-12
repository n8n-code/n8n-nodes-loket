import type { INodeProperties } from 'n8n-workflow';

export const wachtgeldDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					]
				}
			},
			"options": [
				{
					"name": "Delete Wachtgeld By Wachtgeld ID",
					"value": "Delete Wachtgeld By Wachtgeld ID",
					"action": "Delete a wachtgeld record",
					"description": "__Activity name :__ DeleteWachtgeldByWachtgeldId\n\nDelete an existing wachtgeld record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/wachtgeld/{{$parameter[\"wachtegeldenId\"]}}"
						}
					}
				},
				{
					"name": "Get Wachtgeld By Wachtgeld ID",
					"value": "Get Wachtgeld By Wachtgeld ID",
					"action": "Details of wachtgeld",
					"description": "__Activity name :__ GetWachtgeldByWachtgeldId\n\nGet the details of a wachtgeld record\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/wachtgeld/{{$parameter[\"wachtegeldenId\"]}}"
						}
					}
				},
				{
					"name": "Put Wachtgeld By Wachtgeld ID",
					"value": "Put Wachtgeld By Wachtgeld ID",
					"action": "Edit a wachtgeld record",
					"description": "__Activity name :__ PutWachtgeldByWachtgeldId\n\n__Metadata :__ No metadata.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/wachtgeld/{{$parameter[\"wachtegeldenId\"]}}"
						}
					}
				},
				{
					"name": "Get Wachtgeld By Employment ID",
					"value": "Get Wachtgeld By Employment ID",
					"action": "List wachtgeld",
					"description": "__Activity name :__ GetWachtgeldByEmploymentId\n\nGet a list of wachtgeld of the employment.\n\n__Note:__ Wachtgeld, or redundancy pay, is an additional benefit that you receive on top of your unemployment benefit.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/wachtgeld"
						}
					}
				},
				{
					"name": "Post Wachtgeld By Employment ID",
					"value": "Post Wachtgeld By Employment ID",
					"action": "Add a wachtgeld for an employment",
					"description": "__Activity name :__ PostWachtgeldByEmploymentId __Metadata:__ Possible options for fields of the type 'metadata' can be acquired(GET)by adding `/metadata` to the POST URL. __Defaults:__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/wachtgeld"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/wachtgeld/{wachtegeldenId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Delete Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "Wachtgeld ID",
			"name": "wachtgeldId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "wachtgeldId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Delete Wachtgeld By Wachtgeld ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Delete Wachtgeld By Wachtgeld ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Delete Wachtgeld By Wachtgeld ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Delete Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "Wachtegelden ID",
			"name": "wachtegeldenId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Delete Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/wachtgeld/{wachtegeldenId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "Wachtgeld ID",
			"name": "wachtgeldId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "wachtgeldId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Wachtgeld ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Wachtgeld ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "Wachtegelden ID",
			"name": "wachtegeldenId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/wachtgeld/{wachtegeldenId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "Wachtgeld ID",
			"name": "wachtgeldId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "wachtgeldId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "Wachtegelden ID",
			"name": "wachtegeldenId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the entity. The date is up to and including.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2021-06-01",
			"description": "The date on which this wachtgeld record starts.\n\nA (linked chain)[./#section/Data/Date-chains] per wachtgeld is maintained within this resource. So only one wachtgeld record can be active at the same time. ",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 50.87,
			"description": "The value for the wachtgeld.\n",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "Value Additional Income Civil Service",
			"name": "valueAdditionalIncomeCivilService",
			"type": "number",
			"default": 50.87,
			"description": "The value of additional income civil service (Neveninkomsten ambtelijk).\n",
			"routing": {
				"send": {
					"property": "valueAdditionalIncomeCivilService",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "Value Additional Income Non Civil Service",
			"name": "valueAdditionalIncomeNonCivilService",
			"type": "number",
			"default": 50.87,
			"description": "The value of additional income non civil service (Neveninkomsten niet ambtelijk).\n",
			"routing": {
				"send": {
					"property": "valueAdditionalIncomeNonCivilService",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Put Wachtgeld By Wachtgeld ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/wachtgeld",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Employment ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Employment ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Employment ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Employment ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Employment ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Employment ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Employment ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Get Wachtgeld By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/wachtgeld",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Post Wachtgeld By Employment ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Post Wachtgeld By Employment ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Post Wachtgeld By Employment ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Post Wachtgeld By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the entity. The date is up to and including.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Post Wachtgeld By Employment ID"
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
						"Wachtgeld"
					],
					"operation": [
						"Post Wachtgeld By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2021-06-01",
			"description": "The date on which this wachtgeld record starts.\n\nA (linked chain)[./#section/Data/Date-chains] per wachtgeld is maintained within this resource. So only one wachtgeld record can be active at the same time. ",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Post Wachtgeld By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 50.87,
			"description": "The value for the wachtgeld.\n",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Post Wachtgeld By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Value Additional Income Civil Service",
			"name": "valueAdditionalIncomeCivilService",
			"type": "number",
			"default": 50.87,
			"description": "The value of additional income civil service (Neveninkomsten ambtelijk).\n",
			"routing": {
				"send": {
					"property": "valueAdditionalIncomeCivilService",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Post Wachtgeld By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Value Additional Income Non Civil Service",
			"name": "valueAdditionalIncomeNonCivilService",
			"type": "number",
			"default": 50.87,
			"description": "The value of additional income non civil service (Neveninkomsten niet ambtelijk).\n",
			"routing": {
				"send": {
					"property": "valueAdditionalIncomeNonCivilService",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wachtgeld"
					],
					"operation": [
						"Post Wachtgeld By Employment ID"
					]
				}
			}
		},
];
