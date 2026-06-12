import type { INodeProperties } from 'n8n-workflow';

export const deviatingHourlyWageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating Hourly Wage"
					]
				}
			},
			"options": [
				{
					"name": "Delete Deviating Hourly Wage By Deviating Hourly Wage ID",
					"value": "Delete Deviating Hourly Wage By Deviating Hourly Wage ID",
					"action": "Delete a deviating hourly wage record",
					"description": "__Activity name :__ DeleteDeviatingHourlyWageByDeviatingHourlyWageId\n\nDelete an existing deviating hourly wage record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/deviatinghourlywages/{{$parameter[\"deviatingHourlyWageId\"]}}"
						}
					}
				},
				{
					"name": "Get Deviating Hourly Wage By Deviating Hourly Wage ID",
					"value": "Get Deviating Hourly Wage By Deviating Hourly Wage ID",
					"action": "Details of an deviating hourly wage",
					"description": "__Activity name :__ GetDeviatingHourlyWageByDeviatingHourlyWageId\n\nGet the details of a deviating hourly wage\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/deviatinghourlywages/{{$parameter[\"deviatingHourlyWageId\"]}}"
						}
					}
				},
				{
					"name": "Put Deviating Hourly Wage By Deviating Hourly Wage ID",
					"value": "Put Deviating Hourly Wage By Deviating Hourly Wage ID",
					"action": "Edit a deviating hourly wage record",
					"description": "__Activity name :__ PutDeviatingHourlyWageByDeviatingHourlyWageId\n\n__Metadata :__ No metadata as `payrollComponent` is read only in the PUT.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/deviatinghourlywages/{{$parameter[\"deviatingHourlyWageId\"]}}"
						}
					}
				},
				{
					"name": "Get Deviating Hourly Wages By Employment ID",
					"value": "Get Deviating Hourly Wages By Employment ID",
					"action": "List deviating hourly wage",
					"description": "__Activity name :__ GetDeviatingHourlyWagesByEmploymentId\n\nGet a list of the deviating hourly wages of the employment.\n\n__Note:__ Loket.nl has different ways to register deviating hourly wage. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/deviatinghourlywages"
						}
					}
				},
				{
					"name": "Post Deviating Hourly Wage By Employment ID",
					"value": "Post Deviating Hourly Wage By Employment ID",
					"action": "Add a deviating hourly wage for an employment",
					"description": "__Activity name :__ PostDeviatingHourlyWageByEmploymentId __Metadata:__ Possible options for fields of the type 'metadata' can be acquired(GET)by adding `/metadata` to the POST URL. __Defaults:__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/deviatinghourlywages"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/deviatinghourlywages/{deviatingHourlyWageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating Hourly Wage"
					],
					"operation": [
						"Delete Deviating Hourly Wage By Deviating Hourly Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Hourly Wage ID",
			"name": "deviatingHourlyWageId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating Hourly Wage"
					],
					"operation": [
						"Delete Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Delete Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Delete Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Delete Deviating Hourly Wage By Deviating Hourly Wage ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/deviatinghourlywages/{deviatingHourlyWageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wage By Deviating Hourly Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Hourly Wage ID",
			"name": "deviatingHourlyWageId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wage By Deviating Hourly Wage ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/deviatinghourlywages/{deviatingHourlyWageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating Hourly Wage"
					],
					"operation": [
						"Put Deviating Hourly Wage By Deviating Hourly Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Hourly Wage ID",
			"name": "deviatingHourlyWageId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating Hourly Wage"
					],
					"operation": [
						"Put Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Put Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Put Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Put Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Put Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Put Deviating Hourly Wage By Deviating Hourly Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Component",
			"name": "payrollComponent",
			"type": "json",
			"default": "{\n  \"description\": \"LOON/SALARIS\",\n  \"key\": 70\n}",
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Put Deviating Hourly Wage By Deviating Hourly Wage ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this DeviatingHouryWage starts.\n\nA (broken chain)[./#section/Data/Date-chains] per DeviatingHouryWage is maintained within this resource. So multiple DeviatingHouryWages can be active at the same time but one specific DeviatingHouryWage can never be active multiple times at the same time.",
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Put Deviating Hourly Wage By Deviating Hourly Wage ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Put Deviating Hourly Wage By Deviating Hourly Wage ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/deviatinghourlywages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wages By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wages By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wages By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wages By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wages By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wages By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wages By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Get Deviating Hourly Wages By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/deviatinghourlywages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating Hourly Wage"
					],
					"operation": [
						"Post Deviating Hourly Wage By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Post Deviating Hourly Wage By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Post Deviating Hourly Wage By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Post Deviating Hourly Wage By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Post Deviating Hourly Wage By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Post Deviating Hourly Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Component",
			"name": "payrollComponent",
			"type": "json",
			"default": "{\n  \"description\": \"LOON/SALARIS\",\n  \"key\": 70\n}",
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Post Deviating Hourly Wage By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this DeviatingHouryWage starts.\n\nA (broken chain)[./#section/Data/Date-chains] per DeviatingHouryWage is maintained within this resource. So multiple DeviatingHouryWages can be active at the same time but one specific DeviatingHouryWage can never be active multiple times at the same time.",
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Post Deviating Hourly Wage By Employment ID"
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
						"Deviating Hourly Wage"
					],
					"operation": [
						"Post Deviating Hourly Wage By Employment ID"
					]
				}
			}
		},
];
