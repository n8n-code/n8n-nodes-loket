import type { INodeProperties } from 'n8n-workflow';

export const baseForEmploymentFundCalculationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Employment Fund Calculation"
					]
				}
			},
			"options": [
				{
					"name": "Delete Base For Employment Fund Calculation By Base For Employment Fund Calculation ID",
					"value": "Delete Base For Employment Fund Calculation By Base For Employment Fund Calculation ID",
					"action": "Delete a specific record",
					"description": "__Activity name :__ DeleteBaseForEmploymentFundCalculationByBaseForEmploymentFundCalculationId\n\nDelete an existing base for employment fund calculation\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/basesforemploymentfundcalculation/{{$parameter[\"baseforemploymentfundcalculationId\"]}}"
						}
					}
				},
				{
					"name": "Get Base For Employment Fund Calculation By Base For Employment Fund Calculation ID",
					"value": "Get Base For Employment Fund Calculation By Base For Employment Fund Calculation ID",
					"action": "Details of an base for employment fund calculations",
					"description": "__Activity name :__ GetBaseForEmploymentFundCalculationByBaseForEmploymentFundCalculationId\n\nGet the details of a base for employment fund calculations.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/basesforemploymentfundcalculation/{{$parameter[\"baseforemploymentfundcalculationId\"]}}"
						}
					}
				},
				{
					"name": "Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID",
					"value": "Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID",
					"action": "Change the properties of a base for employment fund calculation",
					"description": "__Activity name :__ PutBaseForEmploymentFundCalculationByBaseForEmploymentFundCalculationId\n\n__Metadata :__ Possible options for fields of the type \"metadata\" can be acquired (GET) by adding `/metadata` to the PUT URL.\n\nEdit the properties of a base for employment calculation\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/basesforemploymentfundcalculation/{{$parameter[\"baseforemploymentfundcalculationId\"]}}"
						}
					}
				},
				{
					"name": "Get Bases For Employment Fund Calculation By Employment ID",
					"value": "Get Bases For Employment Fund Calculation By Employment ID",
					"action": "List of bases for employment fund calculations.",
					"description": "__Activity name :__ GetBasesForEmploymentFundCalculationByEmploymentId\n\nGet a list of the bases (money) that are used in employment fund calculations.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/basesforemploymentfundcalculation"
						}
					}
				},
				{
					"name": "Post Base For Employment Fund Calculation By Employment ID",
					"value": "Post Base For Employment Fund Calculation By Employment ID",
					"action": "Add a base for employment fund calculation",
					"description": "__Activity name :__ PostBaseForEmploymentFundCalculationByEmploymentId\n\n__Metadata :__ Possible options for fields of the type \"metadata\" can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults\" to the POST URL.\n\nAdd a base for employment fund calculation.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/basesforemploymentfundcalculation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/basesforemploymentfundcalculation/{baseforemploymentfundcalculationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Delete Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Baseforemploymentfundcalculation ID",
			"name": "baseforemploymentfundcalculationId",
			"required": true,
			"description": "The unique identifier of a base for employment fund calculation",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Delete Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Delete Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Delete Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Delete Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/basesforemploymentfundcalculation/{baseforemploymentfundcalculationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Baseforemploymentfundcalculation ID",
			"name": "baseforemploymentfundcalculationId",
			"required": true,
			"description": "The unique identifier of a base for employment fund calculation",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/basesforemploymentfundcalculation/{baseforemploymentfundcalculationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Baseforemploymentfundcalculation ID",
			"name": "baseforemploymentfundcalculationId",
			"required": true,
			"description": "The unique identifier of a base for employment fund calculation",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Base",
			"name": "base",
			"type": "number",
			"default": 25000,
			"description": "The base (amount of money) to be used in the fund calculation\n",
			"routing": {
				"send": {
					"property": "base",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Normale wijziging\"\n}",
			"description": "Indicates the method by which the record was created/changed, its origin. The origin influences certain business processes. For example if a record exists with origin manually entered (Normale wijziging) the process that calculates the base automatically will not do so as a manually entered value allready exists.\n",
			"routing": {
				"send": {
					"property": "origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this base for calculation starts.\n\nA (linked chain)[./#section/Data/Date-chains] per base for calculation is maintained within this resource. So multiple bases can be active at the same time for different payrollcomponents",
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Put Base For Employment Fund Calculation By Base For Employment Fund Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/basesforemploymentfundcalculation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Bases For Employment Fund Calculation By Employment ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Bases For Employment Fund Calculation By Employment ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Bases For Employment Fund Calculation By Employment ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Bases For Employment Fund Calculation By Employment ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Bases For Employment Fund Calculation By Employment ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Bases For Employment Fund Calculation By Employment ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Bases For Employment Fund Calculation By Employment ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Get Bases For Employment Fund Calculation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/basesforemploymentfundcalculation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Post Base For Employment Fund Calculation By Employment ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Post Base For Employment Fund Calculation By Employment ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Post Base For Employment Fund Calculation By Employment ID"
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Post Base For Employment Fund Calculation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Component",
			"name": "payrollComponent",
			"type": "json",
			"default": "{\n  \"description\": \"JAAR GRSL3\",\n  \"key\": 545\n}",
			"description": "A payroll component is the link to the salary calculation. In this case only specific payrollcomponents are available. The payroll components that are reserved for use as the base for fund calculations\n\n`payrollComponent` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
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
						"Base For Employment Fund Calculation"
					],
					"operation": [
						"Post Base For Employment Fund Calculation By Employment ID"
					]
				}
			}
		},
];
