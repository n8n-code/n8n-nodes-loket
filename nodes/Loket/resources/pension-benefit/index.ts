import type { INodeProperties } from 'n8n-workflow';

export const pensionBenefitDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pension Benefit"
					]
				}
			},
			"options": [
				{
					"name": "Delete Pension Benefit By Pension Benefit ID",
					"value": "Delete Pension Benefit By Pension Benefit ID",
					"action": "Delete a pension benefit record",
					"description": "__Activity name :__ DeletePensionBenefitByPensionBenefitId\n\nDelete an existing pension benefit record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/pensionbenefits/{{$parameter[\"pensionBenefitId\"]}}"
						}
					}
				},
				{
					"name": "Get Pension Benefit By Pension Benefit ID",
					"value": "Get Pension Benefit By Pension Benefit ID",
					"action": "Details of an pension benefit",
					"description": "__Activity name :__ GetPensionBenefitByPensionBenefitId\n\nGet the details of a pension benefit\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/pensionbenefits/{{$parameter[\"pensionBenefitId\"]}}"
						}
					}
				},
				{
					"name": "Put Pension Benefit By Pension Benefit ID",
					"value": "Put Pension Benefit By Pension Benefit ID",
					"action": "Edit a pension benefit record",
					"description": "__Activity name :__ PutPensionBenefitByPensionBenefitId\n\n__Metadata :__ No metadata\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/pensionbenefits/{{$parameter[\"pensionBenefitId\"]}}"
						}
					}
				},
				{
					"name": "Get Pension Benefits By Employment ID",
					"value": "Get Pension Benefits By Employment ID",
					"action": "List pension benefit",
					"description": "__Activity name :__ GetPensionBenefitsByEmploymentId\n\nGet a list of the pension benefits of the employment.\n\n__Note:__ Loket.nl has different ways to register pension benefit. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/pensionbenefits"
						}
					}
				},
				{
					"name": "Post Pension Benefit By Employment ID",
					"value": "Post Pension Benefit By Employment ID",
					"action": "Add a pension benefit for an employment",
					"description": "__Activity name :__ PostPensionBenefitByEmploymentId\n\n__Metadata :__ No metadata\n\n__Defaults :__ No default values\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/pensionbenefits"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/pensionbenefits/{pensionBenefitId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pension Benefit"
					],
					"operation": [
						"Delete Pension Benefit By Pension Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "Pension Benefit ID",
			"name": "pensionBenefitId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pension Benefit"
					],
					"operation": [
						"Delete Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Delete Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Delete Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Delete Pension Benefit By Pension Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/pensionbenefits/{pensionBenefitId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefit By Pension Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "Pension Benefit ID",
			"name": "pensionBenefitId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefit By Pension Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/pensionbenefits/{pensionBenefitId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pension Benefit"
					],
					"operation": [
						"Put Pension Benefit By Pension Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "Pension Benefit ID",
			"name": "pensionBenefitId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pension Benefit"
					],
					"operation": [
						"Put Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Put Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Put Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Put Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Put Pension Benefit By Pension Benefit ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Put Pension Benefit By Pension Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "Payout",
			"name": "payout",
			"type": "number",
			"default": 2569,
			"description": "The ammount of (gross) pension received",
			"routing": {
				"send": {
					"property": "payout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pension Benefit"
					],
					"operation": [
						"Put Pension Benefit By Pension Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this pension benefit starts\n\nA (broken chain)[./#section/Data/Date-chains] is maintained within this resource.",
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
						"Pension Benefit"
					],
					"operation": [
						"Put Pension Benefit By Pension Benefit ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/pensionbenefits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefits By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefits By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefits By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefits By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefits By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefits By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefits By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Get Pension Benefits By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/pensionbenefits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pension Benefit"
					],
					"operation": [
						"Post Pension Benefit By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Post Pension Benefit By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Post Pension Benefit By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Post Pension Benefit By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Post Pension Benefit By Employment ID"
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
						"Pension Benefit"
					],
					"operation": [
						"Post Pension Benefit By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payout",
			"name": "payout",
			"type": "number",
			"default": 2569,
			"description": "The ammount of (gross) pension received",
			"routing": {
				"send": {
					"property": "payout",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pension Benefit"
					],
					"operation": [
						"Post Pension Benefit By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this pension benefit starts\n\nA (broken chain)[./#section/Data/Date-chains] is maintained within this resource.",
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
						"Pension Benefit"
					],
					"operation": [
						"Post Pension Benefit By Employment ID"
					]
				}
			}
		},
];
