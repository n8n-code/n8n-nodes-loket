import type { INodeProperties } from 'n8n-workflow';

export const baseForCalculationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					]
				}
			},
			"options": [
				{
					"name": "Delete Base For Calculation By Base For Calculation ID",
					"value": "Delete Base For Calculation By Base For Calculation ID",
					"action": "Delete a specific record",
					"description": "__Activity name :__ DeleteBaseForCalculationByBaseForCalculationId\n\nDelete an existing base for calculation\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/basesforcalculation/{{$parameter[\"baseforcalculationId\"]}}"
						}
					}
				},
				{
					"name": "Get Base For Calculation By Base For Calculation ID",
					"value": "Get Base For Calculation By Base For Calculation ID",
					"action": "Details of an base for employment fund calculations",
					"description": "__Activity name :__ GetBaseForCalculationByBaseForCalculationId\n\nGet the details of a base for employment fund calculations.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/basesforcalculation/{{$parameter[\"baseforcalculationId\"]}}"
						}
					}
				},
				{
					"name": "Put Base For Calculation By Base For Calculation ID",
					"value": "Put Base For Calculation By Base For Calculation ID",
					"action": "Change the properties of a base for calculation",
					"description": "__Activity name :__ PutBaseForCalculationByBaseForCalculationId\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n\nEdit the properties of a base for calculation\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/basesforcalculation/{{$parameter[\"baseforcalculationId\"]}}"
						}
					}
				},
				{
					"name": "Get Bases For Calculation By Employment ID",
					"value": "Get Bases For Calculation By Employment ID",
					"action": "List of bases for employment fund calculations.",
					"description": "__Activity name :__ GetBasesForCalculationByEmploymentId\n\nGet a list of the bases (money) that are used as the base for certain calculations.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/basesforcalculation"
						}
					}
				},
				{
					"name": "Post Base Fund Calculation By Employment ID",
					"value": "Post Base Fund Calculation By Employment ID",
					"action": "Add a base for calculation",
					"description": "__Activity name :__ PostBaseForCalculationByEmploymentId\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults` to the POST URL.\n\nAdd a base for calculation record.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/basesforcalculation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/basesforcalculation/{baseforcalculationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Delete Base For Calculation By Base For Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Baseforcalculation ID",
			"name": "baseforcalculationId",
			"required": true,
			"description": "The unique identifier of a base for calculation",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Delete Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Delete Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Delete Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Delete Base For Calculation By Base For Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/basesforcalculation/{baseforcalculationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Get Base For Calculation By Base For Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Baseforcalculation ID",
			"name": "baseforcalculationId",
			"required": true,
			"description": "The unique identifier of a base for calculation",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Get Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Base For Calculation By Base For Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/basesforcalculation/{baseforcalculationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Put Base For Calculation By Base For Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Baseforcalculation ID",
			"name": "baseforcalculationId",
			"required": true,
			"description": "The unique identifier of a base for calculation",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Put Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Put Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Put Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Put Base For Calculation By Base For Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Age Based Maximum",
			"name": "ageBasedMaximum",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Toepassen hoogste leeftijd\"\n}",
			"description": "This fields indicates how the age based maximum is applied\n",
			"routing": {
				"send": {
					"property": "ageBasedMaximum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Put Base For Calculation By Base For Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Age Based Minimum",
			"name": "ageBasedMinimum",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Toepassen hoogste leeftijd\"\n}",
			"description": "This fields indicates how the age based minimum is applied\n",
			"routing": {
				"send": {
					"property": "ageBasedMinimum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Put Base For Calculation By Base For Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Deviations",
			"name": "deviations",
			"type": "json",
			"default": "{\n  \"financialReservationPercentage\": 10.000007,\n  \"percentage\": 8,\n  \"reservationPercentage\": 12.0007\n}",
			"description": "Only set a value for the underlying fields if you want to deviate from the values as defined by the selected `base`. \nSet `deviations` to null if no deviations apply.\n\nDeviating is done on either all the fields or none.",
			"routing": {
				"send": {
					"property": "deviations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Put Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Put Base For Calculation By Base For Calculation ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Put Base For Calculation By Base For Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The date on which this base starts.\n\nA (linked chain)[./#section/Data/Date-chains] per base is maintained within this resource.\nSo multiple bases can be active at the same time but one specific base can never be active multiple times at the same time.",
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
						"Base For Calculation"
					],
					"operation": [
						"Put Base For Calculation By Base For Calculation ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/basesforcalculation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Get Bases For Calculation By Employment ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Bases For Calculation By Employment ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Bases For Calculation By Employment ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Bases For Calculation By Employment ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Bases For Calculation By Employment ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Bases For Calculation By Employment ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Bases For Calculation By Employment ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Get Bases For Calculation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/basesforcalculation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Post Base Fund Calculation By Employment ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Post Base Fund Calculation By Employment ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Post Base Fund Calculation By Employment ID"
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
						"Base For Calculation"
					],
					"operation": [
						"Post Base Fund Calculation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Base",
			"name": "base",
			"type": "json",
			"default": "{\n  \"key\": 545,\n  \"value\": \"VAKANTIE TOESLAG, periodieke opbouw\"\n}",
			"description": "`base` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "base",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Base For Calculation"
					],
					"operation": [
						"Post Base Fund Calculation By Employment ID"
					]
				}
			}
		},
];
