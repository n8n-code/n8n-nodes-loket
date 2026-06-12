import type { INodeProperties } from 'n8n-workflow';

export const fiscalCompanyCarDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					]
				}
			},
			"options": [
				{
					"name": "Delete Fiscal Company Car By Fiscal Company Car ID",
					"value": "Delete Fiscal Company Car By Fiscal Company Car ID",
					"action": "Delete a specific fiscal company car record",
					"description": "__Activity name:__ DeleteFiscalCompanyCarByFiscalCompanyCarId\n\nDelete a fiscal company car record for the employment\n\nPlease note this resource is related for the registration of the company car for tax purposes. This is NOT directly related to the registration of the company car(s) related to the HRM-module Verstrekking\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/fiscalcompanycars/{{$parameter[\"fiscalCompanyCarId\"]}}"
						}
					}
				},
				{
					"name": "Get Fiscal Company Car By Fiscal Company Car ID",
					"value": "Get Fiscal Company Car By Fiscal Company Car ID",
					"action": "Details of a fiscal company car record",
					"description": "__Activity name:__ GetFiscalCompanyCarByFiscalCompanyCarId\n\n\n Get the details of fiscal company car \n\n\n Please note this resource is related for the registration of the company car for tax purposes.\n This is NOT directly related to the registration of the company car(s) related to the HRM-module Verstrekking\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/fiscalcompanycars/{{$parameter[\"fiscalCompanyCarId\"]}}"
						}
					}
				},
				{
					"name": "Put Fiscal Company Car By Fiscal Company Car ID",
					"value": "Put Fiscal Company Car By Fiscal Company Car ID",
					"action": "Edit the details of a fiscal company car record",
					"description": "__Activity name:__ PutFiscalCompanyCarByFiscalCompanyCarId\n\n\n Edit the details for a fiscal company car record.\n\n\n Please note this resource is related for the registration of the company car for tax purposes.\n This is NOT directly related to the registration of the company car(s) related to the HRM-module Verstrekking\n\n\n __Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/fiscalcompanycars/{{$parameter[\"fiscalCompanyCarId\"]}}"
						}
					}
				},
				{
					"name": "Get Fiscal Company Cars By Employment ID",
					"value": "Get Fiscal Company Cars By Employment ID",
					"action": "List of fiscal company cars for an employment",
					"description": "__Activity name:__ GetFiscalCompanyCarsByEmploymentId\n    \n\nGet the list of fiscal company cars for an employment. \n\nPlease note this resource is related for the registration of the company car for tax purposes. This is NOT directly related to the registration of the company car(s) related to the HRM-module 'Verstrekking'\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/fiscalcompanycars"
						}
					}
				},
				{
					"name": "Post Fiscal Company Car By Employment ID",
					"value": "Post Fiscal Company Car By Employment ID",
					"action": "Create a fiscal company car record for an employment",
					"description": "__Activity name:__ PostFiscalCompanyCarByEmploymentId\n    \n\nCreate a fiscal company cars record for an employment.\n\nPlease note this resource is related for the registration of the company car for tax purposes and will be included in the salary calculations.  This is NOT directly related to the registration of the company car(s) related to the HRM-module Verstrekking\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/fiscalcompanycars"
						}
					}
				},
				{
					"name": "Get Additional Taxliability By License Plate Number",
					"value": "Get Additional Taxliability By License Plate Number",
					"action": "Acquire the additional tax liability by the license plate number (company car)",
					"description": "__Activity name:__ GetAdditionalTaxliabilityByLicensePlateNumber\n\nThis endpoint allows the user to acquire values for specific properties in the company car resource. This endpoint will require a license plate number (vehicle registration number), and will return aggregated data based on its RDW-registration.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/rdwservices/additionaltaxliability"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/fiscalcompanycars/{fiscalCompanyCarId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Delete Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Company Car ID",
			"name": "fiscalCompanyCarId",
			"required": true,
			"description": "The unique identifier of the fiscal company car",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Delete Fiscal Company Car By Fiscal Company Car ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Delete Fiscal Company Car By Fiscal Company Car ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Delete Fiscal Company Car By Fiscal Company Car ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Delete Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/fiscalcompanycars/{fiscalCompanyCarId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Company Car ID",
			"name": "fiscalCompanyCarId",
			"required": true,
			"description": "The unique identifier of the fiscal company car",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Car By Fiscal Company Car ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Car By Fiscal Company Car ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/fiscalcompanycars/{fiscalCompanyCarId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Fiscal Company Car ID",
			"name": "fiscalCompanyCarId",
			"required": true,
			"description": "The unique identifier of the fiscal company car",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Additional Tax Liability Group",
			"name": "additionalTaxLiabilityGroup",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Standaard tarief (25% tot 2017)\"\n}",
			"description": "Indication for what additional tax liability percentage (bijtelling) should be used for calculating the tax liabiltiy in the payroll process.\n\nIt is possible to acquire a value for this field based on the RDW-registration of the vehicle registration number (license plate) by calling that supplementary endpoint.\n",
			"routing": {
				"send": {
					"property": "additionalTaxLiabilityGroup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of First Admission",
			"name": "dateOfFirstAdmission",
			"type": "string",
			"default": "2018-01-01",
			"description": "First day of admission for the vehicle (datum eerste toelating). It is possible to acquire a value for this field based on the RDW-registration by calling that supplementary endpoint.",
			"routing": {
				"send": {
					"property": "dateOfFirstAdmission",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Additional Tax Liability",
			"name": "deviatingAdditionalTaxLiability",
			"type": "number",
			"default": 20000,
			"description": "Normally Loket will calculate the applicable tax liability based on the value and tax liability group of the car. However this field may OVERRIDE any other values, and in that case this amount will be applied as the applicable tax liability amount.\n",
			"routing": {
				"send": {
					"property": "deviatingAdditionalTaxLiability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2023-10-23",
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
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "License Plate Number",
			"name": "licensePlateNumber",
			"type": "string",
			"default": "GP586D",
			"description": "Vehicle registration number (license plate) of the fiscal company car. The number should be provided with or without any hyphens (-).\n",
			"routing": {
				"send": {
					"property": "licensePlateNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Reason For No Additional Tax Liability",
			"name": "reasonForNoAdditionalTaxLiability",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"(2) Werknemer heeft beschikking belastingdienst\"\n}",
			"description": "In case the employment does have a fiscal company car but no additional tax liability should be applied, then the reason should be provided for the payroll tax return.\n",
			"routing": {
				"send": {
					"property": "reasonForNoAdditionalTaxLiability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2021-01-01",
			"description": "The start date of the entity.\n\nA (broken chain)[./#section/Data/Date-chains] is maintained within this resource.",
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
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Taxable Benefit For Private Use",
			"name": "taxableBenefitForPrivateUse",
			"type": "number",
			"default": 2000,
			"description": "Taxable benefit for private use (eigen bijdrage van de werknemer) may be entered here, this will lower the tax liability to be paid in the payrolling process.\n",
			"routing": {
				"send": {
					"property": "taxableBenefitForPrivateUse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "Value For Tax Purposes",
			"name": "valueForTaxPurposes",
			"type": "number",
			"default": 20000,
			"description": "The value of the car for tax purposes. This field may only be NULL if a reason for no additional tax liability (reden voor geen bijtelling) is provided.\nIt is possible to acquire a value for this field based on the RDW-registration by calling that supplementary endpoint.\n",
			"routing": {
				"send": {
					"property": "valueForTaxPurposes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Put Fiscal Company Car By Fiscal Company Car ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/fiscalcompanycars",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Cars By Employment ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Cars By Employment ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Cars By Employment ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Cars By Employment ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Cars By Employment ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Cars By Employment ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Cars By Employment ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Get Fiscal Company Cars By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/fiscalcompanycars",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Additional Tax Liability Group",
			"name": "additionalTaxLiabilityGroup",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Standaard tarief (25% tot 2017)\"\n}",
			"description": "Indication for what additional tax liability percentage (bijtelling) should be used for calculating the tax liabiltiy in the payroll process.\n\nIt is possible to acquire a value for this field based on the RDW-registration of the vehicle registration number (license plate) by calling that supplementary endpoint.\n",
			"routing": {
				"send": {
					"property": "additionalTaxLiabilityGroup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of First Admission",
			"name": "dateOfFirstAdmission",
			"type": "string",
			"default": "2018-01-01",
			"description": "First day of admission for the vehicle (datum eerste toelating). It is possible to acquire a value for this field based on the RDW-registration by calling that supplementary endpoint.",
			"routing": {
				"send": {
					"property": "dateOfFirstAdmission",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Additional Tax Liability",
			"name": "deviatingAdditionalTaxLiability",
			"type": "number",
			"default": 20000,
			"description": "Normally Loket will calculate the applicable tax liability based on the value and tax liability group of the car. However this field may OVERRIDE any other values, and in that case this amount will be applied as the applicable tax liability amount.\n",
			"routing": {
				"send": {
					"property": "deviatingAdditionalTaxLiability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2023-10-23",
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
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "License Plate Number",
			"name": "licensePlateNumber",
			"type": "string",
			"default": "GP586D",
			"description": "Vehicle registration number (license plate) of the fiscal company car. The number should be provided with or without any hyphens (-).\n",
			"routing": {
				"send": {
					"property": "licensePlateNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Reason For No Additional Tax Liability",
			"name": "reasonForNoAdditionalTaxLiability",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"(2) Werknemer heeft beschikking belastingdienst\"\n}",
			"description": "In case the employment does have a fiscal company car but no additional tax liability should be applied, then the reason should be provided for the payroll tax return.\n",
			"routing": {
				"send": {
					"property": "reasonForNoAdditionalTaxLiability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2021-01-01",
			"description": "The start date of the entity.\n\nA (broken chain)[./#section/Data/Date-chains] is maintained within this resource.",
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
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Taxable Benefit For Private Use",
			"name": "taxableBenefitForPrivateUse",
			"type": "number",
			"default": 2000,
			"description": "Taxable benefit for private use (eigen bijdrage van de werknemer) may be entered here, this will lower the tax liability to be paid in the payrolling process.\n",
			"routing": {
				"send": {
					"property": "taxableBenefitForPrivateUse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Value For Tax Purposes",
			"name": "valueForTaxPurposes",
			"type": "number",
			"default": 20000,
			"description": "The value of the car for tax purposes. This field may only be NULL if a reason for no additional tax liability (reden voor geen bijtelling) is provided.\nIt is possible to acquire a value for this field based on the RDW-registration by calling that supplementary endpoint.\n",
			"routing": {
				"send": {
					"property": "valueForTaxPurposes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Post Fiscal Company Car By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /rdwservices/additionaltaxliability",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Get Additional Taxliability By License Plate Number"
					]
				}
			}
		},
		{
			"displayName": "License Plate Number",
			"name": "licensePlateNumber",
			"required": true,
			"description": "A valid vehicle registration (license plate) number.",
			"default": "52LRX4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "licensePlateNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Fiscal Company Car"
					],
					"operation": [
						"Get Additional Taxliability By License Plate Number"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Get Additional Taxliability By License Plate Number"
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
						"Fiscal Company Car"
					],
					"operation": [
						"Get Additional Taxliability By License Plate Number"
					]
				}
			}
		},
];
