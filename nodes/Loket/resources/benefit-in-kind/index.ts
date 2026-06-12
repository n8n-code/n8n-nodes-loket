import type { INodeProperties } from 'n8n-workflow';

export const benefitInKindDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					]
				}
			},
			"options": [
				{
					"name": "Delete Benefit In Kind By Benefit In Kind ID",
					"value": "Delete Benefit In Kind By Benefit In Kind ID",
					"action": "Delete a benefit in kind record",
					"description": "__Activity name :__ DeleteBenefitInKindByBenefitInKindId\n\nDelete an existing benefit in kind record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/benefitsinkind/{{$parameter[\"benefitInKindId\"]}}"
						}
					}
				},
				{
					"name": "Get Benefit In Kind By Benefit In Kind ID",
					"value": "Get Benefit In Kind By Benefit In Kind ID",
					"action": "Details of an benefit in kind",
					"description": "__Activity name :__ GetBenefitInKindByBenefitInKindId\n\nGet the details of a benefit in kind\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/benefitsinkind/{{$parameter[\"benefitInKindId\"]}}"
						}
					}
				},
				{
					"name": "Put Benefit In Kind By Benefit In Kind ID",
					"value": "Put Benefit In Kind By Benefit In Kind ID",
					"action": "Edit a benefit in kind record",
					"description": "__Activity name :__ PutBenefitInKindByBenefitInKindId\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding ` / metadata ` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/benefitsinkind/{{$parameter[\"benefitInKindId\"]}}"
						}
					}
				},
				{
					"name": "Get Benefits In Kind By Employment ID",
					"value": "Get Benefits In Kind By Employment ID",
					"action": "List Benefits in kind",
					"description": "__Activity name:__ GetBenefitsInKindByEmploymentId\nGet a list of the Benefits in kind of the employment.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/benefitsInKind"
						}
					}
				},
				{
					"name": "Post Benefit In Kind By Employment ID",
					"value": "Post Benefit In Kind By Employment ID",
					"action": "Add a Benefit in kind for an employment",
					"description": "__Activity name :__ PostBenefitInKindByEmploymentId\n\n__Metadata:__ Possible options for fields of the type 'metadata' can be acquired(GET)by adding `/metadata` to the POST URL.\n\n__Defaults:__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/benefitsInKind"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/benefitsinkind/{benefitInKindId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Delete Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "Benefit In Kind ID",
			"name": "benefitInKindId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Delete Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Delete Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Delete Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Delete Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/benefitsinkind/{benefitInKindId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "Benefit In Kind ID",
			"name": "benefitInKindId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/benefitsinkind/{benefitInKindId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "Benefit In Kind ID",
			"name": "benefitInKindId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "Benefit In Kind Type",
			"name": "benefitInKindType",
			"type": "json",
			"default": "{\n  \"description\": \"Mobiele telefoon\",\n  \"id\": \"36530F13-59EB-4C15-B5F2-4F92B070A208\"\n}",
			"description": "The benefit in kind of the employment. `benefitinkind` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "benefitInKindType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "Brand",
			"name": "brand",
			"type": "string",
			"default": "Apple",
			"description": "The brand of the benefit in kind.",
			"routing": {
				"send": {
					"property": "brand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "Particularities",
			"name": "particularities",
			"type": "string",
			"default": "geen bijzonderheden",
			"description": "Extra information about the benefit in kind",
			"routing": {
				"send": {
					"property": "particularities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this BenefitInKind starts.\n\nSo multiple Benefits in kind can be active at the same time but one specific BenefitsInKind can never be active multiple times at the same time.\n",
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
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "Supplier",
			"name": "supplier",
			"type": "string",
			"default": "Mediamarkt",
			"description": "The supplier of the benefit in kind.",
			"routing": {
				"send": {
					"property": "supplier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "Iphone 11",
			"description": "The type of the benefit in kind.",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 1100,
			"description": "The value for the selected benefit of kind.",
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
						"Benefit In Kind"
					],
					"operation": [
						"Put Benefit In Kind By Benefit In Kind ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/benefitsInKind",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefits In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefits In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefits In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefits In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefits In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefits In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefits In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Get Benefits In Kind By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/benefitsInKind",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Benefit In Kind Type",
			"name": "benefitInKindType",
			"type": "json",
			"default": "{\n  \"description\": \"Mobiele telefoon\",\n  \"id\": \"36530F13-59EB-4C15-B5F2-4F92B070A208\"\n}",
			"description": "The benefit in kind of the employment. `benefitinkind` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "benefitInKindType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Brand",
			"name": "brand",
			"type": "string",
			"default": "Apple",
			"description": "The brand of the benefit in kind.",
			"routing": {
				"send": {
					"property": "brand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
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
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Particularities",
			"name": "particularities",
			"type": "string",
			"default": "geen bijzonderheden",
			"description": "Extra information about the benefit in kind",
			"routing": {
				"send": {
					"property": "particularities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this BenefitInKind starts.\n\nSo multiple Benefits in kind can be active at the same time but one specific BenefitsInKind can never be active multiple times at the same time.\n",
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
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Supplier",
			"name": "supplier",
			"type": "string",
			"default": "Mediamarkt",
			"description": "The supplier of the benefit in kind.",
			"routing": {
				"send": {
					"property": "supplier",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "Iphone 11",
			"description": "The type of the benefit in kind.",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 1100,
			"description": "The value for the selected benefit of kind.",
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
						"Benefit In Kind"
					],
					"operation": [
						"Post Benefit In Kind By Employment ID"
					]
				}
			}
		},
];
