import type { INodeProperties } from 'n8n-workflow';

export const protectedEarningsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Protected Earnings"
					]
				}
			},
			"options": [
				{
					"name": "Delete Protected Earnings By Protected Earnings ID",
					"value": "Delete Protected Earnings By Protected Earnings ID",
					"action": "Delete an protected earnings record",
					"description": "__Activity name :__ DeleteProtectedEarningsByProtectedEarningsId\n\nDelete an existing protected earnings record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/protectedearnings/{{$parameter[\"protectedEarningsId\"]}}"
						}
					}
				},
				{
					"name": "Get Protected Earnings By Protected Earnings ID",
					"value": "Get Protected Earnings By Protected Earnings ID",
					"action": "Get the details of an protected earnings record",
					"description": "__Activity name :__ GetProtectedEarningsByProtectedEarningsId\n\nGet the details of an protected earnings record\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/protectedearnings/{{$parameter[\"protectedEarningsId\"]}}"
						}
					}
				},
				{
					"name": "Put Protected Earnings By Protected Earnings ID",
					"value": "Put Protected Earnings By Protected Earnings ID",
					"action": "Edit the details of an protected earnings record",
					"description": "__Activity name :__ PutProtectedEarningsByProtectedEarningsId\n\nUpdate the details of a single protected earnings record\n\n__Metadata :__ There is no metadata for this resource\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/protectedearnings/{{$parameter[\"protectedEarningsId\"]}}"
						}
					}
				},
				{
					"name": "Get Protected Earnings By Employment ID",
					"value": "Get Protected Earnings By Employment ID",
					"action": "Get a list of protected earnings records",
					"description": "__Activity name :__ GetProtectedEarningsByEmploymentId\n\nGet a list of protected earnings records\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/protectedearnings"
						}
					}
				},
				{
					"name": "Post Protected Earnings By Employment ID",
					"value": "Post Protected Earnings By Employment ID",
					"action": "Create a new protected earnings record",
					"description": "__Activity name :__ PostProtectedEarningsByEmploymentId\n\nCreate a new protected earnings record for an employment.\n\n__Metadata :__ There is no metadata for this resource\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/protectedearnings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/protectedearnings/{protectedEarningsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Protected Earnings"
					],
					"operation": [
						"Delete Protected Earnings By Protected Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Protected Earnings ID",
			"name": "protectedEarningsId",
			"required": true,
			"description": "The unique identifier of a record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Protected Earnings"
					],
					"operation": [
						"Delete Protected Earnings By Protected Earnings ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Delete Protected Earnings By Protected Earnings ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Delete Protected Earnings By Protected Earnings ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Delete Protected Earnings By Protected Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/protectedearnings/{protectedEarningsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Protected Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Protected Earnings ID",
			"name": "protectedEarningsId",
			"required": true,
			"description": "The unique identifier of a record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Protected Earnings ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Protected Earnings ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Protected Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/protectedearnings/{protectedEarningsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Protected Earnings"
					],
					"operation": [
						"Put Protected Earnings By Protected Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Protected Earnings ID",
			"name": "protectedEarningsId",
			"required": true,
			"description": "The unique identifier of a record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Protected Earnings"
					],
					"operation": [
						"Put Protected Earnings By Protected Earnings ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Put Protected Earnings By Protected Earnings ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Put Protected Earnings By Protected Earnings ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Put Protected Earnings By Protected Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the record\n",
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
						"Protected Earnings"
					],
					"operation": [
						"Put Protected Earnings By Protected Earnings ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Put Protected Earnings By Protected Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "Start date of this record\nA (broken chain)[./#section/Data/Date-chains] is maintained within this resource.\n\n__NOTE :__ at the moment of performing a payroll run it will be checked what record is applicable for protected earning (based on the start- and enddate, not based on the payroll period of the payroll run).\n",
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
						"Protected Earnings"
					],
					"operation": [
						"Put Protected Earnings By Protected Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Threshold",
			"name": "threshold",
			"type": "string",
			"default": 50,
			"description": "The total amount of net wage that is protected.",
			"routing": {
				"send": {
					"property": "threshold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Protected Earnings"
					],
					"operation": [
						"Put Protected Earnings By Protected Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/protectedearnings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Employment ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Employment ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Employment ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Employment ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Employment ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Employment ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Employment ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Get Protected Earnings By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/protectedearnings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Protected Earnings"
					],
					"operation": [
						"Post Protected Earnings By Employment ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Post Protected Earnings By Employment ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Post Protected Earnings By Employment ID"
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
						"Protected Earnings"
					],
					"operation": [
						"Post Protected Earnings By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/protectedearnings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Protected Earnings"
					],
					"operation": [
						"Post Protected Earnings By Employment ID"
					]
				}
			}
		},
];
