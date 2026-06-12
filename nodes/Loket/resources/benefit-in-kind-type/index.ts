import type { INodeProperties } from 'n8n-workflow';

export const benefitInKindTypeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind Type"
					]
				}
			},
			"options": [
				{
					"name": "Delete Benefit In Kind Type By Benefit In Kind Type ID",
					"value": "Delete Benefit In Kind Type By Benefit In Kind Type ID",
					"action": "Delete an benefit in kind type record",
					"description": "__Activity name :__ DeleteBenefitInKindTypeByBenefitInKindTypeId\n\nDelete an existing benefit in kind type record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/benefitinkindtypes/{{$parameter[\"benefitInKindTypeId\"]}}"
						}
					}
				},
				{
					"name": "Get Benefit In Kind Type By Benefit In Kind Type ID",
					"value": "Get Benefit In Kind Type By Benefit In Kind Type ID",
					"action": "Details of an benefit in kind type",
					"description": "__Activity name :__ GetBenefitInKindTypeByBenefitInKindTypeId\n\nGet the details of an benefit in kind type\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/benefitinkindtypes/{{$parameter[\"benefitInKindTypeId\"]}}"
						}
					}
				},
				{
					"name": "Put Benefit In Kind Type By Benefit In Kind Type ID",
					"value": "Put Benefit In Kind Type By Benefit In Kind Type ID",
					"action": "Edit an benefit in kind type record",
					"description": "__Activity name :__ PutBenefitInKindTypeByBenefitInKindTypeId\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/benefitinkindtypes/{{$parameter[\"benefitInKindTypeId\"]}}"
						}
					}
				},
				{
					"name": "Get Benefit In Kind Types By Employer ID",
					"value": "Get Benefit In Kind Types By Employer ID",
					"action": "List benefit in kind types for an employer",
					"description": "__Activity name :__ GetBenefitInKindTypesByEmployerId\n\nGet a list of the benefit in kind types for an employer.\n\n__Note:__ The benefit in kind types defined at the employer level can be used as value for the field typeOfBenefitInKind in the BenefitInKind resource at the employment level.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/benefitinkindtypes"
						}
					}
				},
				{
					"name": "Post Benefit In Kind Type By Employer ID",
					"value": "Post Benefit In Kind Type By Employer ID",
					"action": "Add an benefit in kind type for an employer",
					"description": "__Activity name :__ PostBenefitInKindTypeByEmployerId\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/benefitinkindtypes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/benefitinkindtypes/{benefitInKindTypeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind Type"
					],
					"operation": [
						"Delete Benefit In Kind Type By Benefit In Kind Type ID"
					]
				}
			}
		},
		{
			"displayName": "Benefit In Kind Type ID",
			"name": "benefitInKindTypeId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind Type"
					],
					"operation": [
						"Delete Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Delete Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Delete Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Delete Benefit In Kind Type By Benefit In Kind Type ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/benefitinkindtypes/{benefitInKindTypeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Type By Benefit In Kind Type ID"
					]
				}
			}
		},
		{
			"displayName": "Benefit In Kind Type ID",
			"name": "benefitInKindTypeId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Type By Benefit In Kind Type ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/benefitinkindtypes/{benefitInKindTypeId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind Type"
					],
					"operation": [
						"Put Benefit In Kind Type By Benefit In Kind Type ID"
					]
				}
			}
		},
		{
			"displayName": "Benefit In Kind Type ID",
			"name": "benefitInKindTypeId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind Type"
					],
					"operation": [
						"Put Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Put Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Put Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Put Benefit In Kind Type By Benefit In Kind Type ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Laptop",
			"description": "The description of the benifit in kind type",
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Put Benefit In Kind Type By Benefit In Kind Type ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Put Benefit In Kind Type By Benefit In Kind Type ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/benefitinkindtypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Types By Employer ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Types By Employer ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Types By Employer ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Types By Employer ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Types By Employer ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Types By Employer ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Types By Employer ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Get Benefit In Kind Types By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/benefitinkindtypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind Type"
					],
					"operation": [
						"Post Benefit In Kind Type By Employer ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Post Benefit In Kind Type By Employer ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Post Benefit In Kind Type By Employer ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Post Benefit In Kind Type By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Laptop",
			"description": "The description of the benifit in kind type",
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Post Benefit In Kind Type By Employer ID"
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
						"Benefit In Kind Type"
					],
					"operation": [
						"Post Benefit In Kind Type By Employer ID"
					]
				}
			}
		},
];
