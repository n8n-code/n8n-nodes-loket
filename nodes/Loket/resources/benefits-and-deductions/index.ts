import type { INodeProperties } from 'n8n-workflow';

export const benefitsAndDeductionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Benefits And Deductions"
					]
				}
			},
			"options": [
				{
					"name": "Delete Benefits And Deductions By Benefits And Deductions ID",
					"value": "Delete Benefits And Deductions By Benefits And Deductions ID",
					"action": "Delete a specific benefit or deduction record",
					"description": "__Activity name :__ DeleteBenefitsAndDeductionsByBenefitsAndDeductionsId\n\nDelete a benefit or deduction for the employment\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/benefitsAndDeductions/{{$parameter[\"benefitsanddeductionsId\"]}}"
						}
					}
				},
				{
					"name": "Get Benefits And Deductions Bybenefits And Deductions ID",
					"value": "Get Benefits And Deductions Bybenefits And Deductions ID",
					"action": "Detail of a benefit or deduction record",
					"description": "__Activity name :__ GetBenefitsAndDeductionsBybenefitsAndDeductionsId\n\nGet a benefit or deduction for the employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/benefitsAndDeductions/{{$parameter[\"benefitsanddeductionsId\"]}}"
						}
					}
				},
				{
					"name": "Put Benefits And Deductions By Benefits And Deductions ID",
					"value": "Put Benefits And Deductions By Benefits And Deductions ID",
					"action": "Edit the details of a benefit or deduction record",
					"description": "__Activity name :__ PutBenefitsAndDeductionsByBenefitsAndDeductionsId\n\nUpdate a benefit or deduction for the employment\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/benefitsAndDeductions/{{$parameter[\"benefitsanddeductionsId\"]}}"
						}
					}
				},
				{
					"name": "Get Benefits And Deductions By Employment ID",
					"value": "Get Benefits And Deductions By Employment ID",
					"action": "list of benefits and deductions",
					"description": "__Activity name :__ GetBenefitsAndDeductionsByEmploymentId\n\nGet a list of benefits and deductions for the employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/benefitsanddeductions"
						}
					}
				},
				{
					"name": "Postbenefits And Deductions By Employment ID",
					"value": "Postbenefits And Deductions By Employment ID",
					"action": "Add a benefit or deduction record for the employment",
					"description": "__Activity name :__ PostBenefitsAndDeductionsByEmploymentId\n\nAdd a benefit or deduction for the employment\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults` to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/benefitsanddeductions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/benefitsAndDeductions/{benefitsanddeductionsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefits And Deductions"
					],
					"operation": [
						"Delete Benefits And Deductions By Benefits And Deductions ID"
					]
				}
			}
		},
		{
			"displayName": "Benefitsanddeductions ID",
			"name": "benefitsanddeductionsId",
			"required": true,
			"description": "The unique identifier of the benefits and deductions data",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefits And Deductions"
					],
					"operation": [
						"Delete Benefits And Deductions By Benefits And Deductions ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Delete Benefits And Deductions By Benefits And Deductions ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Delete Benefits And Deductions By Benefits And Deductions ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Delete Benefits And Deductions By Benefits And Deductions ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/benefitsAndDeductions/{benefitsanddeductionsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions Bybenefits And Deductions ID"
					]
				}
			}
		},
		{
			"displayName": "Benefitsanddeductions ID",
			"name": "benefitsanddeductionsId",
			"required": true,
			"description": "The unique identifier of the benefits and deductions data",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions Bybenefits And Deductions ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions Bybenefits And Deductions ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions Bybenefits And Deductions ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/benefitsAndDeductions/{benefitsanddeductionsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefits And Deductions"
					],
					"operation": [
						"Put Benefits And Deductions By Benefits And Deductions ID"
					]
				}
			}
		},
		{
			"displayName": "Benefitsanddeductions ID",
			"name": "benefitsanddeductionsId",
			"required": true,
			"description": "The unique identifier of the benefits and deductions data",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefits And Deductions"
					],
					"operation": [
						"Put Benefits And Deductions By Benefits And Deductions ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Put Benefits And Deductions By Benefits And Deductions ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Put Benefits And Deductions By Benefits And Deductions ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Put Benefits And Deductions By Benefits And Deductions ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"description": "The end date for the information in the record.\n",
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
						"Benefits And Deductions"
					],
					"operation": [
						"Put Benefits And Deductions By Benefits And Deductions ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Put Benefits And Deductions By Benefits And Deductions ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Component",
			"name": "payrollComponent",
			"type": "json",
			"default": "{\n  \"category\": {\n    \"key\": 1,\n    \"value\": \"Uren\"\n  },\n  \"deductionOrPayment\": {\n    \"key\": 2,\n    \"value\": \"Betaling\"\n  },\n  \"description\": \"Uren gewerkt\",\n  \"key\": 1\n}",
			"description": "A payroll component is the link to the salary calculation. By setting the value of a component the salary calculation will take this value into account when calculating the wage of the employment.\n\n`payrollComponent` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "payrollComponent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefits And Deductions"
					],
					"operation": [
						"Put Benefits And Deductions By Benefits And Deductions ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "1995-05-21",
			"description": "The start date for the information in the record.\n\nA (linked chain)[./#section/Data/Date-chains] per payroll component is maintained within this resource.\n",
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
						"Benefits And Deductions"
					],
					"operation": [
						"Put Benefits And Deductions By Benefits And Deductions ID"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 50.87,
			"description": "The value for the selected payroll component.    <br/>\n",
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
						"Benefits And Deductions"
					],
					"operation": [
						"Put Benefits And Deductions By Benefits And Deductions ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/benefitsanddeductions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions By Employment ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions By Employment ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions By Employment ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions By Employment ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions By Employment ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions By Employment ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions By Employment ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Get Benefits And Deductions By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/benefitsanddeductions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Benefits And Deductions"
					],
					"operation": [
						"Postbenefits And Deductions By Employment ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Postbenefits And Deductions By Employment ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Postbenefits And Deductions By Employment ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Postbenefits And Deductions By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"description": "The end date for the information in the record.\n",
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
						"Benefits And Deductions"
					],
					"operation": [
						"Postbenefits And Deductions By Employment ID"
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
						"Benefits And Deductions"
					],
					"operation": [
						"Postbenefits And Deductions By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Component",
			"name": "payrollComponent",
			"type": "json",
			"default": "{\n  \"category\": {\n    \"key\": 1,\n    \"value\": \"Uren\"\n  },\n  \"deductionOrPayment\": {\n    \"key\": 2,\n    \"value\": \"Betaling\"\n  },\n  \"description\": \"Uren gewerkt\",\n  \"key\": 1\n}",
			"description": "A payroll component is the link to the salary calculation. By setting the value of a component the salary calculation will take this value into account when calculating the wage of the employment.\n\n`payrollComponent` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "payrollComponent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Benefits And Deductions"
					],
					"operation": [
						"Postbenefits And Deductions By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "1995-05-21",
			"description": "The start date for the information in the record.\n\nA (linked chain)[./#section/Data/Date-chains] per payroll component is maintained with this resource.\n",
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
						"Benefits And Deductions"
					],
					"operation": [
						"Postbenefits And Deductions By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 50.87,
			"description": "The value for the selected payroll component.\n",
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
						"Benefits And Deductions"
					],
					"operation": [
						"Postbenefits And Deductions By Employment ID"
					]
				}
			}
		},
];
